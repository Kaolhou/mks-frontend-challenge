import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";
import QueryProvider from "@/app/_provider/query-provider";
import constants from "@/util/constants";

vi.mock("next/font/google", () => ({
  Montserrat: () => ({
    style: {
      fontFamily: "mocked",
      className: "mocked",
    },
  }),
}));

test("Main page content testing", () => {
  render(
    <QueryProvider>
      <Home />
    </QueryProvider>
  );

  expect(
    screen.getByRole("heading", { level: 1, name: "MKS Sistemas" })
  ).toBeDefined();
  expect(screen.getByRole("img", { name: "card" })).toBeDefined();
});

test("Content testing", async () => {
  const data = await fetch(
    `${constants.BASE_URL}/products?page=1&rows=${constants.AMOUNT_OF_ITENS}&sortBy=id&orderBy=ASC`
  );
  const result = await data.json();
  expect(result, constants.data as any);
});
