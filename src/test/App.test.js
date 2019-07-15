import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App";

jest.mock("../containers/AddableExerciseList");
jest.mock("../containers/SearchBar");
jest.mock("../containers/VisibleWorkoutList");

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
