import React from "react";
import PropTypes from "prop-types";


export default class ExerciseModal extends React.Component {
    constructor(props) {
        super(props);
        this.index = 0;
        this.schedule = this.props.schedule.map(day => day.name);
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

    handleIndexChange(e) {
        this.index = parseInt(e.target.value, 10);

    }

    render() {
        return (
            <div className="exercise-modal">
                <h3>{this.props.exercise.name}</h3>
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
                <button onClick={() => this.props.addExercise(this.exercise, this.index)}>
                    Add to workout
                </button>
                <div className="schedule-list" onChange={this.handleIndexChange.bind(this)}>
                    {this.schedule.map((day, index) => (
                        <label key={day}><input type="radio"defaultChecked={index===this.index} name="index" value={index}></input>{day}</label>
                    ))}
                </div>
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
