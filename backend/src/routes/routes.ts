import { Router } from "express";
import cors from "cors";
import { productController } from "../controllers/product.controller";

const routes = Router();

routes.get("/product", cors(), (req, res) =>
  productController.find(req, res),
);

export default routes;