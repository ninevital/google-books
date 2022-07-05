const defaultState = {
  bookChunks: [],
  numberOfBooks: 0,
  isLoading: false,
};

export const booksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_FIRST_BOOKS":
      return {
        ...state,
        bookChunks: [action.payload],
        numberOfBooks: action.payload ? action.payload.length : null,
      };
    case "FETCH_MORE_BOOKS":
      return {
        ...state,
        bookChunks: [...state.bookChunks, action.payload],
        numberOfBooks: state.numberOfBooks + action.payload.length,
      };
    case "CHANGE_LOADING_STATE":
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    default:
      return state;
  }
};

export const fetchFirstBooksAction = (payload) => ({
  type: "FETCH_FIRST_BOOKS",
  payload,
});
export const fetchMoreBooksAction = (payload) => ({
  type: "FETCH_MORE_BOOKS",
  payload,
});
export const changeLoadingStateAction = () => ({
  type: "CHANGE_LOADING_STATE",
});
