export const addExercise = exercise => ({
  type: "ADD_EXERCISE",
  ...exercise,
});

export const removeExercise = id => ({
  type: "REMOVE_EXERCISE",
  id
});

export const toggleExerciseComplete = id => ({
  type: "TOGGLE_EXERCISE",
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

export const hideModal = () => ({
  type: "HIDE_MODAL",
});

export const showModal = (modalProps, modalType) => ({
  type: "SHOW_MODAL",
  modalProps,
  modalType,
});
