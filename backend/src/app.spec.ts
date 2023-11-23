import request from "supertest";

jest.mock('./services/crawler/handlers/ai.handler', () =>
    jest.requireActual('./__mocks__/services/crawler/handlers/ai.handler'),
);

import app from "./app";

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
      "/api/product?url=https://www.mock.com.br/mock-product/&ai=true",
    );

    expect(response.status).toBe(200);

    expect(response.body.name).toBe("LUTEÍNA + ASTAXANTINA + VITAMINA A MADE IN USA NATURE DAILY 60 COMPRIMIDOS SIDNEY OLIVEIRA");
    expect(response.body.image).toBe("https://cdn.ultrafarma.com.br/static/produtos/821656/small-638221801524360108-821656_3.png");
    expect(response.body.description).toBe("Suplemento Alimentar de Luteína + Astaxantina + Vitamina A em Comprimidos. - A Vitamina A auxilia na Visão - Contém 20 mg de Luteína + 6 mg de Astaxantina + 600 mcg de Vitamina A em 1 comprimido. - Produto fabricado sob certificação FDA. - Made in U.S.A");
    expect(response.body.price).toBe(39.9);
    expect(response.body.barcode).toBe("7908423402841");
  });
});
