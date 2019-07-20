import { ACTION } from "../constants";

export const addExercise = (exercise, index) => ({
    type: ACTION.ADD_EXERCISE,
    ...exercise,
    index,
});

export const removeExercise = (id, index) => ({
    type: ACTION.REMOVE_EXERCISE,
    id,
    index,
});

export const toggleExerciseComplete = (id, index) => ({
    type: ACTION.TOGGLE_EXERCISE,
    id,
    index,
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

export const addDay = (name) => ({
    type: ACTION.ADD_DAY,
    name,
});
