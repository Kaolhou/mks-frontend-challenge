import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Sidebar from "../components/sidebar";
vi.mock("next/font/google", () => ({
  Montserrat: () => ({
    style: {
      fontFamily: "mocked",
      className: "mocked",
    },
  }),
}));

test("Sidebar shouldn't exist", () => {
  render(
    <Sidebar
      isOpen={true}
      addItem={() => {}}
      setSidebar={() => {}}
      itens={[
        {
          amount: 2,
          brand: "Apple",
          createdAt: new Date().toString(),
          id: 1,
          name: "iPhone X",
          description: "test",
          photo: "/photo",
          price: "7000.00",
          updatedAt: new Date().toString(),
        },
      ]}
    />
  );

  expect(screen.queryByText("Carrinho de Compras")?.textContent).ok;
});
