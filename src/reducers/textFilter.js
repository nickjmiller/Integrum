import { ACTION } from "../constants";

const textFilter = (state = "", action) => {
    switch (action.type) {
    case ACTION.SET_TEXT_FILTER:
        return action.filter;
    default:
        return state;
    }
};

export default textFilter;