import { connect } from "react-redux";
import { toggleExerciseComplete, removeExercise, showModal } from "../actions";
import Workout from "../components/Workout";
import { MODAL_TYPE } from "../constants";


const mapStateToProps = state => ({
    exerciseMap: state.exercises,
});

const mapDispatchToProps = dispatch => ({
    removeExercise: (id, index) => dispatch(removeExercise(id, index)),
    toggleExerciseComplete: (id, index) => dispatch(toggleExerciseComplete(id, index)),
    showModal: () => dispatch(showModal({ open: true }, MODAL_TYPE.EXERCISE_LIST)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Workout);