import { connect } from "react-redux";
import { toggleExerciseComplete, removeExercise, showModal } from "../actions";
import Workout from "../components/Workout";
import { MODAL_TYPE } from "../constants";


const mapStateToProps = state => ({
    workout: state.workout,
    exerciseMap: state.exercises,
});

const mapDispatchToProps = dispatch => ({
    removeExercise: id => dispatch(removeExercise(id)),
    toggleExerciseComplete: id => dispatch(toggleExerciseComplete(id)),
    showModal: () => dispatch(showModal({ open: true }, MODAL_TYPE.EXERCISE_LIST)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Workout);