const defaultState = {
  category: "",
  sortBy: "relevance",
};

export const filterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_CATEGORY":
      return { ...state, category: action.payload };
    case "CHANGE_SORTER":
      return { ...state, sortBy: action.payload };
    default:
      return state;
  }
};

export const changeCategoryAction = (payload) => ({
  type: "CHANGE_CATEGORY",
  payload,
});

export const changeSorterAction = (payload) => ({
  type: "CHANGE_SORTER",
  payload,
});
