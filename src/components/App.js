import React from "react";
import "../style/App.css";

import AddableExerciseList from "../containers/AddableExerciseList";
import SearchBar from "../containers/SearchBar";
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
      <SearchBar />
      <AddableExerciseList />
    </div>
  </div>
  );
}

export default App;
