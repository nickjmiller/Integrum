import React from "react";
import "../style/App.css";

import ModalContainer from "../containers/ModalContainer";
import VisibleWorkoutList from "../containers/VisibleWorkoutList";
 
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
        Integrum
                </p>
            </header>
            <div>
                <VisibleWorkoutList />
                <ModalContainer />
            </div>
        </div>
    );
}

export default App;
