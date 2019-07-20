import React from "react";
import { connect } from "react-redux";
import { setTextFilter } from "../actions";

const SearchBar = ({ dispatch }) => {
    dispatch(setTextFilter(""));
    return (
        <div>
            <h2>Exercises</h2>
            <form>
                <input type="text"
                    placeholder="Search exercises..."
                    onChange={e => {
                        dispatch(setTextFilter(e.target.value.trim().toLowerCase()));
                    }}
                />
            </form>
        </div>
    );
};

export default connect()(SearchBar);
