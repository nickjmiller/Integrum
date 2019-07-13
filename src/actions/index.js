export const EXERCISES = [
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

export const addExercise = id => ({
  type: "ADD_EXERCISE",
  id
});

export const removeExercise = id => ({
  type: "REMOVE_EXERCISE",
  id
});

export const hideExercise = id => ({
  type: "HIDE_EXERCISE",
  id
});

export const setTextFilter = filter => ({
  type: "SET_TEXT_FILTER",
  filter
});
