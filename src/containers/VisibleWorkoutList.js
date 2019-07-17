import { connect } from "react-redux";
import { toggleExerciseComplete, removeExercise, showModal } from "../actions";
import Workout from "../components/Workout";


const mapStateToProps = state => ({
    workout: state.workout,
    exerciseMap: state.exercises,
});

const mapDispatchToProps = dispatch => ({
    removeExercise: id => dispatch(removeExercise(id)),
    toggleExerciseComplete: id => dispatch(toggleExerciseComplete(id)),
    showModal: () => dispatch(showModal({ open: true }, "ExerciseList")),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Workout);