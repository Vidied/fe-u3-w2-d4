import { describe, it, expect } from "vitest";
import BookList from "../components/BookList";
import { fireEvent, render, screen } from "@testing-library/react";
import fantasyBooks from "../data/fantasy.json";

describe("Test su booklist", () => {
  it("Verifica che vengano effettivamente renderizzate tante bootstrap cards quanti sono i libri nel file json utilizzato.", () => {
    render(<BookList books={fantasyBooks} />);
    const books = screen.getAllByTestId("book-card");
    expect(books).toHaveLength(fantasyBooks.length);
  });

  it("Verifica che il filtraggio dei libri tramite navbar si comporti come previsto.", () => {
    render(<BookList books={fantasyBooks} />);
    const ricerca = screen.getByPlaceholderText(/cerca un libro/i);
    fireEvent.change(ricerca, { target: { value: "ring" } });
    const booksSearched = screen.getAllByTestId("book-card");
    expect(booksSearched.length).toBeLessThan(fantasyBooks.length);
  });
});
