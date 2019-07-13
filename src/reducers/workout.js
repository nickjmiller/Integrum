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
                }
            ];
        case "REMOVE_EXERCISE":
            return state.filter(exercise => exercise.id !== action.id);
      default:
        return state;
    }
  };
  
  export default workout;
