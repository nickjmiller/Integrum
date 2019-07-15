import React from "react";
import PropTypes from "prop-types";

const SelectedExercise = ({ buttonClick, name, toggleExerciseComplete, complete, sets, reps }) =>
    (
        <tr className={`selected-exercise${complete ? " complete" : ""}`}>
            <td onClick={toggleExerciseComplete}>
                {name}
            </td>
            <td>
                {reps}
            </td>
            <td>
                {sets}
            </td>
            <td>
                <button onClick={buttonClick}>
          X
                </button>
            </td>
        </tr>
    );

SelectedExercise.propTypes = {
    toggleExerciseComplete: PropTypes.func.isRequired,
    buttonClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired,
    sets: PropTypes.number.isRequired,
    reps: PropTypes.number.isRequired,
};

export default SelectedExercise;