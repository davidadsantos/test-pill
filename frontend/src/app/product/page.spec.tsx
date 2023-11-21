import { render } from "@testing-library/react";
import ProductPage from "@src/app/product/page";

jest.mock("next/navigation", () => ({
  useSearchParams() {
    return {
      get: jest.fn(() => "https://www.drogasil.com.br/neosaldina-30-drageas.html"),
    };
  },
}));

jest.mock("@src/api/product/product.api", () => ({
  useProductApi: jest.fn(() => ({
    data: {
      name: "Neosaldina 30 Drágeas",
      description:
        "Neosaldina é um medicamento indicado para o tratamento de dores de cabeça, enxaquecas e cólicas menstruais. Neosaldina é composto por dipirona, isometepteno e cafeína, que são substâncias que possuem ação analgésica, antiespasmódica e vasoconstritora. Neosaldina é contraindicado para crianças menores de 12 anos, pacientes com glaucoma, problemas no fígado e nos rins, com pressão alta, problemas cardíacos, hipertireoidismo, asma, úlcera gástrica ou intestinal, problemas na medula óssea, lúpus eritematoso, alergia a pirazolonas ou a dipirona ou a qualquer outro componente da fórmula. Este medicamento não deve ser utilizado por mulheres grávidas sem orientação médica ou do cirurgião-dentista.",
      image:
        "https://static.drogasil.com.br/media/catalog/product/cache/1/image/1800x1800/9df78eab33525d08d6e5fb8d27136e95/n/e/neosaldina_30_drageas_1.jpg",
    },
    status: "loaded",
  })),
}));

test("renders product page", () => {
  const { getByText, getByAltText } = render(<ProductPage />);

  expect(getByText("Neosaldina 30 Drágeas")).toBeTruthy();
  expect(
    getByText(
      "Neosaldina é um medicamento indicado para o tratamento de dores de cabeça, enxaquecas e cólicas menstruais. Neosaldina é composto por dipirona, isometepteno e cafeína, que são substâncias que possuem ação analgésica, antiespasmódica e vasoconstritora. Neosaldina é contraindicado para crianças menores de 12 anos, pacientes com glaucoma, problemas no fígado e nos rins, com pressão alta, problemas cardíacos, hipertireoidismo, asma, úlcera gástrica ou intestinal, problemas na medula óssea, lúpus eritematoso, alergia a pirazolonas ou a dipirona ou a qualquer outro componente da fórmula. Este medicamento não deve ser utilizado por mulheres grávidas sem orientação médica ou do cirurgião-dentista.",
    ),
  ).toBeTruthy();

  expect(getByAltText("Neosaldina 30 Drágeas")).toBeTruthy();
});
