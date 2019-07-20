import { ACTION } from "../constants";

const DEFAULT_SCHEDULE = [
    {
        name: "Day One",
        workout: [
            {
                id: 2,
                sets: 3,
                reps: 12,
                complete: false,
            }, 
            {
                id: 3,
                sets: 3,
                reps: 12,
                complete: false,
            }],
    },
    {
        name: "Two",
        workout: [
            {
                id: 20,
                sets: 3,
                reps: 6,
                complete: false,
            }, 
            {
                id: 30,
                sets: 3,
                reps: 8,
                complete: false,
            },
            {
                id: 300,
                sets: 3,
                reps: 8,
                complete: false,
            }],
    },
];

const schedule = (state = [...DEFAULT_SCHEDULE], action) => {
    let newState;
    switch (action.type) {
    case ACTION.ADD_EXERCISE:
        newState = state.map((day, index) => {
            if (index === action.index && !day.workout.find(exercise => exercise.id === action.id)) {
                return Object.assign({}, { name: day.name}, { workout: [...day.workout,
                    {
                        id: action.id,
                        sets: action.sets,
                        reps: action.reps,
                        complete: false,
                    }
                ]
                });
            }
            return day;
        });
        break;
    case ACTION.REMOVE_EXERCISE:
        newState = state.map((day, index) => {
            if (index === action.index) {
                return Object.assign({},
                    { name: day.name },
                    { workout: day.workout.filter(exercise => exercise.id !== action.id) });
            }
            return day;
        });
        break;
    case ACTION.TOGGLE_EXERCISE:
        newState = state.map((day, index) => {
            if (index === action.index) {
                return Object.assign({}, { name: day.name}, { workout: day.workout.map((exercise) => {
                    if (exercise.id === action.id) {
                        exercise.complete = !exercise.complete;
                    }
                    return exercise;
                })});
            }
            return day;
        });
        break;
    case ACTION.ADD_DAY:
        newState = [
            ...state,
            { name: action.name, workout: [] }
        ];
        break;
    default:
        return state;
    }
    localStorage.setItem("reduxState", JSON.stringify({ schedule: newState }));
    return newState;
};
  
export default schedule;
