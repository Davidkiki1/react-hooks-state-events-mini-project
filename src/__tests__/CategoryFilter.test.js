import { render, screen, fireEvent } from "@testing-library/react";
import CategoryFilter from "../CategoryFilter";
import { CATEGORIES } from "../data";

test("displays a button for each category", () => {
  const onCategoryClick = jest.fn(); // mock function
  render(<CategoryFilter categories={CATEGORIES} onCategoryClick={onCategoryClick} selectedCategory="All" />);
  
  // Ensure buttons for each category are rendered
  for (const category of CATEGORIES) {
    expect(screen.getByText(category)).toBeInTheDocument();
  }
});

test("clicking the category button adds a class of 'selected' to the button", () => {
  const onCategoryClick = jest.fn(); // mock function
  render(<CategoryFilter categories={CATEGORIES} onCategoryClick={onCategoryClick} selectedCategory="All" />);
  
  const codeButton = screen.getByText("Code");
  
  // Simulate clicking the button
  fireEvent.click(codeButton);
  
  // Ensure the 'selected' class is added
  expect(codeButton.classList).toContain("selected");
});