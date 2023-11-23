import { AiHandler } from "./crawler/handlers/ai.handler";
import { DrogasilHandler } from "./crawler/handlers/drogasil.handler";
import { ICrawlerHandler, IProduct } from "./crawler/handlers/abstract.handler";

export class CrawlerService {
  constructor(private readonly handler: ICrawlerHandler) {
    //
  }

  static buildCrawler(url: string, isAi: boolean): CrawlerService {
    if (isAi) {
      return new CrawlerService(new AiHandler());
    }

    const host = new URL(url).host.replace("www.", "");

    switch (host) {
      case DrogasilHandler.host:
        return new CrawlerService(new DrogasilHandler());
    }

    throw new Error("Crawler not found");
  }

  public async find(url: string): Promise<IProduct | false> {
    return await this.handler.handle(url);
  }
}
