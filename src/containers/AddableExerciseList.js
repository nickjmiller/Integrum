import { connect } from "react-redux";
import { showModal } from "../actions";
import ExerciseList from "../components/ExerciseList";

const EXERCISES = [
  { group: "Back", name: "Pull-up", visible: true },
  { group: "Back", name: "Cable Row", visible: false },
  { group: "Back", name: "Lat Pulldown", visible: true },
  { group: "Back", name: "Pendlay Row", visible: true },
  { group: "Chest", name: "Barbell Bench Press", visible: true },
  { group: "Chest", name: "Dumbbell Flyers", visible: true },
  { group: "Chest", name: "Dips", visible: true },
  { group: "Legs", name: "Squats", visible: true },
  { group: "Legs", name: "Leg Extensions", visible: true },
];

const getExercises = (filter) => {
  let id = 0;
  const exercises = [];
  EXERCISES.forEach(exercise => {
    if (!filter || exercise.name.toLowerCase().includes(filter) ||  exercise.group.toLowerCase().includes(filter)) {
      exercises.push(Object.assign({}, exercise, {id: id++}));
    }
  });
  return exercises;
};

const mapStateToProps = state => ({
  exercises: getExercises(state.textFilter),
});

const mapDispatchToProps = dispatch => ({
  openExerciseModal: exercise => dispatch(showModal({ open: true, exercise })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExerciseList);