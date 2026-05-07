import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Welcome from "../components/Welcome";

describe("Welcome component", () => {
  it("verifica la presenza del titolo", () => {
    render(<Welcome />);
    const title = screen.getByText(/benvenuti in epibooks!/i);
    expect(title).toBeInTheDocument();
  });
});
