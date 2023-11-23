import { CrawlerHandler, ICrawlerHandler, IProduct } from "./abstract.handler";
import { compile } from "html-to-text";
import { RecursiveUrlLoader } from "langchain/document_loaders/web/recursive_url";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAI } from "langchain/llms/openai";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { RetrievalQAChain } from "langchain/chains";
import { getEnv } from "../../../helpers/env";

const PROMPT = `
    The document data was extracted from an e-commerce website product page. Link: {url}.
    Analyze the document and extract the title, price, description, image url and product barcode.
    Return the data in valid json format in line.
    Do not add markdown, quotes, line breaks, only the json as in the format below:
    { "name": "string", "price": 0.0, "description": "string",  "image": "string", "barcode": "string" }
    `;

export class AiHandler extends CrawlerHandler {
  public async handle(url: string): Promise<IProduct | false> {
    const docs = await this.loadDocs(url);

    const embeddings = new OpenAIEmbeddings({
      openAIApiKey: getEnv("OPENAI_API_KEY"),
      verbose: true,
    });
    const vectorStore = await MemoryVectorStore.fromDocuments(docs, embeddings);

    const retriever = vectorStore.asRetriever();

    const model = new OpenAI({
      modelName: getEnv("OPENAI_MODEL"),
      openAIApiKey: getEnv("OPENAI_API_KEY"),
    });

    const chain = RetrievalQAChain.fromLLM(model, retriever, {
      verbose: true,
    });
    const question = PROMPT.replace("{url}", url);
    const response = await chain.call({ query: question });

    try {
      const json = response.text.replace(/```(json|)/g, "");
      return JSON.parse(json);
    } catch (e) {
      return false;
    }
  }

  private async loadDocs(url: string) {
    const compiledConvert = compile({
      wordwrap: null,
    });

    const loader = new RecursiveUrlLoader(url, {
      maxDepth: 0,
      extractor: compiledConvert,
    });

    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 4096,
      chunkOverlap: 100,
    });

    return await loader.loadAndSplit(splitter);
  }
}

export default AiHandler;
