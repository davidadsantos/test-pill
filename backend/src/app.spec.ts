import request from "supertest";
import app from "./app";

const productMock = {
  name: "LUTEÍNA + ASTAXANTINA + VITAMINA A MADE IN USA NATURE DAILY 60 COMPRIMIDOS SIDNEY OLIVEIRA",
  image: "https://cdn.ultrafarma.com.br/static/produtos/821656/small-638221801524360108-821656_3.png",
  description:
    "Suplemento Alimentar de Luteína + Astaxantina + Vitamina A em Comprimidos. - A Vitamina A auxilia na Visão - Contém 20 mg de Luteína + 6 mg de Astaxantina + 600 mcg de Vitamina A em 1 comprimido. - Produto fabricado sob certificação FDA. - Made in U.S.A",
  price: 39.9,
  barcode: "7908423402841",
};

jest.mock("./services/crawler/handlers/ai.handler", () => {
  return {
    AiHandler: jest.fn().mockImplementation(() => {
      return {
        handle: jest.fn().mockImplementation(() => productMock),
      };
    }),
  };
});

describe("Test Api /api/product ", () => {
  it("Should return status 400 when without parameters", () => {
    return request(app).get("/api/product").expect(400);
  });

  it("Should return status 400 when invalid url", () => {
    return request(app).get("/api/product?url=invalid-url").expect(400);
  });

  it("Should return status 404 when product not found", () => {
    return request(app).get("/api/product?url=https://www.amazon.com.br/dp/B08L5VZTT5").expect(404);
  });

  it("Should return status 200 when product found", async () => {
    const response = await request(app).get(
      "/api/product?url=https://www.drogasil.com.br/advil-extra-alivio-400mg-analgesico-caixa-com-1x3-capsulas-gelatinosas.html",
    );

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("image");
    expect(response.body).toHaveProperty("description");
    expect(response.body).toHaveProperty("price");
    expect(response.body).toHaveProperty("barcode");
  });

  it("Should return status 200 when product found with ai", async () => {
    const response = await request(app).get(
      "/api/product?url=https://www.ultrafarma.com.br/luteina-astaxantina-vitamina-a-made-in-usa-nature-daily-60-comprimidos-sidney-oliveira&ai=true",
    );

    expect(response.status).toBe(200);

    expect(response.body.name).toBe(productMock.name);
    expect(response.body.image).toBe(productMock.image);
    expect(response.body.description).toBe(productMock.description);
    expect(response.body.price).toBe(productMock.price);
    expect(response.body.barcode).toBe(productMock.barcode);
  });
});