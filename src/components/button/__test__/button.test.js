import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import Button from "./../button";
import { renderer } from "react-test-renderer";

afterEach(cleanup);
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button></Button>, div);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Button label="CLICK ME"></Button>);
  expect(getByTestId("button")).toHaveTextContent("CLICK ME");
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Button label="CLICK"></Button>);
  expect(getByTestId("button")).toHaveTextContent("CLICK");
});

it("matches snapshot", () => {
  const tree = renderer.create(<Button label="CLICK"></Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
