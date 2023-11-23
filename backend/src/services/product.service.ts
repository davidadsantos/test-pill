import { ProductDto } from "../dto/product.dto";
import { CrawlerService } from "./crawler.service";

export class ProductService {
  public async find(url: string, isAi: boolean): Promise<ProductDto> {
    const crawler = CrawlerService.buildCrawler(url, isAi);
    const data = await crawler.find(url);

    if (!data) {
      throw new Error("Product not found");
    }

    return new ProductDto(
      data.name,
      data.image,
      data.description,
      data.price,
      data.barcode,
    );
  }
}

export const productService = new ProductService();