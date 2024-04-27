import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Footer from "../components/footer";

test("Footer testing", () => {
  const { container } = render(<Footer />);

  expect(container.textContent).contain("©");
});
