import React from "react";
import PropTypes from "prop-types";

const Exercise = ({ onClick, name, group }) => (
    <tr>
        <td onClick={() => window.open(`https://www.youtube.com/results?search_query=${name}+how+to+exercise`)}>
            {name}
        </td>
        <td>
            {group}
        </td>
        <td>
            <button onClick={onClick}>
                Add to workout
            </button>
        </td>
    </tr>
);

Exercise.propTypes = {
    onClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    group: PropTypes.string.isRequired
};

export default Exercise;