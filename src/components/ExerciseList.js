import React from "react";
import PropTypes from "prop-types";
import Exercise from "./Exercise";

const ExerciseList = ({ exercises, openExerciseModal }) => (
    <table className="exercise-table">
        <thead>
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
        </thead>
        <tbody className="exercise-body">
            {exercises.map(exercise => (
                <Exercise key={exercise.id} {...exercise} onClick={() => openExerciseModal(exercise)} />
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
    openExerciseModal: PropTypes.func.isRequired,
};

export default ExerciseList;