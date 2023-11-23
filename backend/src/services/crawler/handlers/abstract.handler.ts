export interface IProduct {
  name: string,
  image: string,
  description: string,
  price: number,
  barcode: string,
}

export interface ICrawlerHandler {
  handle(url: string): Promise<IProduct | false>;
}

export abstract class CrawlerHandler implements ICrawlerHandler {
  static readonly host: string;

  abstract handle(body: string): Promise<IProduct | false>;
}
