import { combineReducers } from "redux";
import exercises from "./exercises";
import modal from "./modal";
import schedule from "./schedule";
import textFilter from "./textFilter";

export default combineReducers({
    textFilter,
    modal,
    exercises,
    schedule,
});