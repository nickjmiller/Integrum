import React from "react";
import "../style/App.css";

import ModalContainer from "../containers/ModalContainer";
import { TabComponent } from "./TabComponent";
 
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
        Integrum
                </p>
            </header>
            <TabComponent />
            <ModalContainer />
        </div>
    );
}

export default App;
