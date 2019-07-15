const workout = (state = [], action) => {
    switch (action.type) {
        case "ADD_EXERCISE":
            if (state.find(exercise => exercise.id === action.id)) {
                return state;
            }
            return [
                ...state,
                {
                    id: action.id,
                    sets: action.sets,
                    reps: action.reps,
                    complete: false,
                }
            ];
        case "REMOVE_EXERCISE":
            return state.filter(exercise => exercise.id !== action.id);
        case "COMPLETE_EXERCISE":
            return state.map((exercise) => {
                if (exercise.id === action.id) {
                    exercise.complete = !exercise.complete;
                }
                return exercise;
            });
      default:
        return state;
    }
  };
  
  export default workout;
