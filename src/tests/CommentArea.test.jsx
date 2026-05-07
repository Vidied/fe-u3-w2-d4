import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CommentArea from "../components/CommentArea";

describe("CommentArea component", () => {
  it("verifica la presenza del titolo", () => {
    render(<CommentArea />);
    const CommentInput = screen.getByPlaceholderText(/Inserisci qui il testo/i);
    expect(CommentInput).toBeInTheDocument();
  });
});
