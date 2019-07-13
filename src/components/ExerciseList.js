import React from "react";
import PropTypes from "prop-types";
import Exercise from "./Exercise";

const ExerciseList = ({ exercises, addExercise }) => (
  <table>
    <tbody>
      <tr>
          <th>
              Exercise
          </th>
          <th>
              Group
          </th>
          <th>
              Add to workout
          </th>
      </tr>
        {exercises.map(exercise => (
            <Exercise key={exercise.id} {...exercise} onClick={() => addExercise(exercise.id)} />
        ))}
    </tbody>
  </table>
);

ExerciseList.propTypes = {
  exercises: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      group: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  addExercise: PropTypes.func.isRequired
};

export default ExerciseList;