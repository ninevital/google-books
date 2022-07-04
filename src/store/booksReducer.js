const defaultState = {
  bookChunks: [],
  numberOfBooks: 0,
};

export const booksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_FIRST_BOOKS":
      return {
        ...state,
        bookChunks: [action.payload],
        numberOfBooks: action.payload.length,
      };
    case "FETCH_MORE_BOOKS":
      return {
        ...state,
        bookChunks: [...state.bookChunks, action.payload],
        numberOfBooks: state.numberOfBooks + action.payload.length,
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
