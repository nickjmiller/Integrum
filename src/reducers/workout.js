import { ACTION } from "../constants";

const workout = (state = [], action) => {
    let newState;
    switch (action.type) {
    case ACTION.ADD_EXERCISE:
        if (state.find(exercise => exercise.id === action.id)) {
            return state;
        }
        newState = [
            ...state,
            {
                id: action.id,
                sets: action.sets,
                reps: action.reps,
                complete: false,
            }
        ];
        break;
    case ACTION.REMOVE_EXERCISE:
        newState = state.filter(exercise => exercise.id !== action.id);
        break;
    case ACTION.TOGGLE_EXERCISE:
        newState = state.map((exercise) => {
            if (exercise.id === action.id) {
                exercise.complete = !exercise.complete;
            }
            return exercise;
        });
        break;
    default:
        return state;
    }
    localStorage.setItem("reduxState", JSON.stringify({ workout: newState }));
    return newState;
};
  
export default workout;
