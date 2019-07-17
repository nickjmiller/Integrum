import { connect } from "react-redux";
import { showModal } from "../actions";
import { MODAL_TYPE } from "../constants";
import ExerciseList from "../components/ExerciseList";

const getExercises = (exercises, filter) => {
    let filteredExercises = [];
    exercises.forEach((exercise, index) => {
        if (!filter || exercise.name.toLowerCase().includes(filter) ||  exercise.group.toLowerCase().includes(filter)) {
            filteredExercises.push(Object.assign({}, exercise, { id: index }));
        };
    });
    return filteredExercises;
};

const mapStateToProps = state => ({
    exercises: getExercises(state.exercises, state.textFilter),
});

const mapDispatchToProps = dispatch => ({
    openExerciseModal: exercise => dispatch(showModal({ open: true, exercise }, MODAL_TYPE.EXERCISE_MODAL)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExerciseList);