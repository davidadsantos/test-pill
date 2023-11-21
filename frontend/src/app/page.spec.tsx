import { render } from "@testing-library/react";
import Page from "@src/app/page";
import { Provider } from "react-redux";
import { store } from "@src/app/store";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

test("renders home page with ai", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Page ai />
    </Provider>,
  );

  expect(getByText("Busca com inteligência artificial")).toBeTruthy();
  expect(getByText("Busca normal")).toBeTruthy();
});

test("renders home page without ai", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Page />
    </Provider>,
  );

  expect(getByText("Busca com inteligência artificial")).toBeTruthy();
});
