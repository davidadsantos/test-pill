import { CrawlerHandler, IProduct } from "../../../../services/crawler/handlers/abstract.handler";

export const productMock = {
  name: "LUTEÍNA + ASTAXANTINA + VITAMINA A MADE IN USA NATURE DAILY 60 COMPRIMIDOS SIDNEY OLIVEIRA",
  image: "https://cdn.ultrafarma.com.br/static/produtos/821656/small-638221801524360108-821656_3.png",
  description:
    "Suplemento Alimentar de Luteína + Astaxantina + Vitamina A em Comprimidos. - A Vitamina A auxilia na Visão - Contém 20 mg de Luteína + 6 mg de Astaxantina + 600 mcg de Vitamina A em 1 comprimido. - Produto fabricado sob certificação FDA. - Made in U.S.A",
  price: 39.9,
  barcode: "7908423402841",
};

export class AiHandler extends CrawlerHandler {
  public async handle(url: string): Promise<IProduct | false> {
    return productMock;
  }
}

export default AiHandler;