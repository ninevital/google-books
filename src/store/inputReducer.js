const defaultState = {
  inputValue: "",
};

export const inputReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return { ...state, inputValue: [action.payload] };
    default:
      return state;
  }
};

export const changeInputAction = (payload) => ({
  type: "CHANGE_INPUT",
  payload,
});
