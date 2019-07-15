// @ts-ignore
import EXERCISES from "../data/exercises.json";

let id = 0;
const exercisesWithIds = EXERCISES.exercises.map(exercise => Object.assign({}, exercise, {id: id++}));

const exercises = (state = [...exercisesWithIds], action) => {
    return state;
  };
  
  export default exercises;
