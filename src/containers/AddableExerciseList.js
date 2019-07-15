import { connect } from "react-redux";
import { showModal } from "../actions";
import ExerciseList from "../components/ExerciseList";

const getExercises = (exercises, filter) => {
  return exercises.filter(exercise => !filter || exercise.name.toLowerCase().includes(filter) ||  exercise.group.toLowerCase().includes(filter));
};

const mapStateToProps = state => ({
  exercises: getExercises(state.exercises, state.textFilter),
});

const mapDispatchToProps = dispatch => ({
  openExerciseModal: exercise => dispatch(showModal({ open: true, exercise })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExerciseList);