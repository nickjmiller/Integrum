const textFilter = (state = "", action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default textFilter;