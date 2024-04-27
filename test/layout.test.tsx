import { expect, test, vi } from "vitest";
import { render } from "@testing-library/react";
import Layout from "../app/layout";
vi.mock("next/font/google", () => ({
  Montserrat: () => ({
    style: {
      fontFamily: "mocked",
      className: "mocked",
    },
  }),
}));

test("Layout content testing", () => {
  const { container } = render(
    <Layout>
      <></>
    </Layout>
  );

  expect(container.querySelector("title")?.text).toBe("MKS Sistemas");
  expect(container.querySelector("html")?.lang).toBe("en");
});
