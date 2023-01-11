import { render } from "@testing-library/react";
import App from "./App";

test('renders get class PatternMemo', function () {
  render(<App/>)
  const linked = document.getElementsByClassName("App")
  expect(linked).toBeInTheDocument
});

