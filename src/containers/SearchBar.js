import React from "react";
import { connect } from "react-redux";
import { setTextFilter } from "../actions";

const SearchBar = ({ dispatch }) => {
    return (
        <div>
            <h2>Exercises</h2>
            <form>
                <input type="text"
                    placeholder="Search exercises..."
                    onLoad={dispatch(setTextFilter(""))}
                    onChange={e => {
                        dispatch(setTextFilter(e.target.value.trim().toLowerCase()));
                    }}
                />
            </form>
        </div>
    );
};

export default connect()(SearchBar);
