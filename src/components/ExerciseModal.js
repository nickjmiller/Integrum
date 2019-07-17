import React from "react";
import PropTypes from "prop-types";


export default class ExerciseModal extends React.Component {
    constructor(props) {
        super(props);
        this.exercise = { id: this.props.exercise.id, reps: 12, sets: 3 };
        this.handleRepChange = this.handleRepChange.bind(this);
        this.handleSetChange = this.handleSetChange.bind(this);
    }

    handleRepChange(e) {
        this.exercise.reps = parseInt(e.target.value, 10) || this.exercise.reps;
    }

    handleSetChange(e) {
        this.exercise.sets = parseInt(e.target.value, 10) || this.exercise.sets;
    }
    render() {
        return (
            <div className="exercise-modal">
                <form className="rep-set-form">
                    <label>
                        Reps
                        <input type="text"
                            placeholder="12"
                            onChange={this.handleRepChange}/>
                    </label>
                    <label>
                        Sets
                        <input type="text"
                            placeholder="3"
                            onChange={this.handleSetChange}/>
                    </label>
                </form>
                <button onClick={() => this.props.addExercise(this.exercise)}>
                    Add {this.props.exercise.name}
                </button>
            </div>
        );
    }
};

ExerciseModal.propTypes = {
    exercise: PropTypes.shape({
        id: PropTypes.number.isRequired,
    }).isRequired,
    addExercise: PropTypes.func.isRequired,
};
