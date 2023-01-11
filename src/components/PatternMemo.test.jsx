import { render } from "@testing-library/react";
import PatternMemo from "./PatternMemo";

test('renders get class PatternMemo', function () {
  render(<PatternMemo/>)
  const linked = document.getElementsByClassName("PatternMemo")
  expect(linked).toBeInTheDocument
});

test('renders get class PatternList', function () {
  render(<PatternMemo/>)
  const linked = document.getElementsByClassName("PatternList")
  expect(linked).toBeInTheDocument
});