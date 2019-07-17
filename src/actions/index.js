import { ACTION } from "../constants";

export const addExercise = exercise => ({
    type: ACTION.ADD_EXERCISE,
    ...exercise,
});

export const removeExercise = id => ({
    type: ACTION.REMOVE_EXERCISE,
    id
});

export const toggleExerciseComplete = id => ({
    type: ACTION.TOGGLE_EXERCISE,
    id
});

export const hideExercise = id => ({
    type: ACTION.HIDE_EXERCISE,
    id
});

export const setTextFilter = filter => ({
    type: ACTION.SET_TEXT_FILTER,
    filter
});

export const hideModal = () => ({
    type: ACTION.HIDE_MODAL,
});

export const showModal = (modalProps, modalType) => ({
    type: ACTION.SHOW_MODAL,
    modalProps,
    modalType,
});
