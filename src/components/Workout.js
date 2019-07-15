import React from "react";
import PropTypes from "prop-types";
import SelectedExercise from "./SelectedExercise";
import { EXERCISES } from "../actions";

const Workout = ({ workout, removeExercise, toggleExerciseComplete }) => (
  <div className="workout">
    <h2>Current Workout</h2>
    <table>
      <tbody>
        <tr className="selected-exercise">
          <th>
            Name
          </th>
          <th>
            Reps
          </th>
          <th>
            Sets
          </th>
          <th>
            Remove
          </th>
        </tr>
        {workout.map(currentExercise => {
          const { id } = currentExercise;
          const exercise = EXERCISES[id];
          return <SelectedExercise key={id} {...exercise} {...currentExercise} buttonClick={() => removeExercise(id)} toggleExerciseComplete={() => toggleExerciseComplete(id)}/>;
        })}
      </tbody>
    </table>
  </div>
);

Workout.propTypes = {
  workout: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sets: PropTypes.number.isRequired,
      reps: PropTypes.number.isRequired,
      complete: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  removeExercise: PropTypes.func.isRequired,
  toggleExerciseComplete: PropTypes.func.isRequired,
};

export default Workout;