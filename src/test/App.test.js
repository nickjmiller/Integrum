import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App";

jest.mock("../containers/ModalContainer");
jest.mock("../containers/ChangeableScheduleContainer");

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});
