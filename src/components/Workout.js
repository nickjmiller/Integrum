import React from "react";
import PropTypes from "prop-types";
import SelectedExercise from "./SelectedExercise";
import { EXERCISES } from "../actions";

const Workout = ({ workout, removeExercise }) => (
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
        {workout.map(exerciseId => {
          const { id } = exerciseId;
          const exercise = EXERCISES[id];
          return <SelectedExercise key={id} {...exercise} onClick={() => removeExercise(id)} />;
        })}
      </tbody>
    </table>
  </div>
);

Workout.propTypes = {
  workout: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  removeExercise: PropTypes.func.isRequired
};

export default Workout;