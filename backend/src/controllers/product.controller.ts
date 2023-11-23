import { Request, Response } from "express";
import { productService, ProductService } from "../services/product.service";
import { ProductDto } from "../dto/product.dto";

class ProductController {
  constructor(public readonly productService: ProductService) {
    //
  }

  public find(req: Request, res: Response) {
    const url = req.query.url as string | undefined;
    const isAi = !!req.query.ai as boolean;

    if (!url?.match(/^(http|https):\/\/[^ "]+$/)) {
      res.status(400).json({ message: "Invalid URL" });
      return;
    }

    this.productService.find(url, isAi)
      .then((product: ProductDto) => {
        res.status(200).json(product);
      })
      .catch((error) => {
        res.status(404).send();
      });
  }
}

export const productController = new ProductController(productService);