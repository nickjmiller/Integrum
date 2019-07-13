import React from "react";
import PropTypes from "prop-types";

const SelectedExercise = ({ onClick, name }) => (
    <tr className="selected-exercise">
      <td>
      {name}
      </td>
      <td>
      12
      </td>
      <td>
      3
      </td>
      <td>
      <button onClick={onClick}>
          X
      </button>
      </td>
    </tr>
);

SelectedExercise.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default SelectedExercise;