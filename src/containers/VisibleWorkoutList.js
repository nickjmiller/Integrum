import { connect } from "react-redux";
import { removeExercise } from "../actions";
import Workout from "../components/Workout";


const mapStateToProps = state => ({
  workout: state.workout
});

const mapDispatchToProps = dispatch => ({
    removeExercise: id => dispatch(removeExercise(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Workout);