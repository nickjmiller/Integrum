import React from "react";
import PropTypes from "prop-types";
import SelectedExercise from "./SelectedExercise";

const toggleAllExercises = (workout, toggle, index) => workout.forEach(exercise => toggle(exercise.id, index));

const Workout = ({ exerciseMap, workout, index, removeExercise, toggleExerciseComplete, showModal }) => (
    <div className="workout">
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
                    const { name } = exerciseMap[id];
                    return <SelectedExercise key={id} name={name} {...currentExercise} buttonClick={() => removeExercise(id, index)} toggleExerciseComplete={() => toggleExerciseComplete(id, index)}/>;
                })}
                <tr className="selected-exercise">
                    <td>
                        {(!workout.length || workout.find(exercise => !exercise.complete)) ? null : 
                            <button onClick={() => toggleAllExercises(workout, toggleExerciseComplete, index)} className="start-over">Start over?</button>}
                    </td>
                    <td>

                    </td>
                    <td>
                        
                    </td>
                    <td>
                        <button onClick={() => showModal()}>+</button>
                    </td>
                </tr>
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
    showModal: PropTypes.func.isRequired,
};

export default Workout;