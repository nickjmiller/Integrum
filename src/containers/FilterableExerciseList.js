import { connect } from "react-redux";
import { showModal } from "../actions";
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
    openExerciseModal: exercise => dispatch(showModal({ open: true, exercise }, "ExerciseModal")),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExerciseList);