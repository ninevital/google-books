const defaultState = {
  bookChunks: [],
  startingIndex: 0,
  totalItems: 0, //just for info (there will be no more books that this number), not for pagination
  isLoading: false,
};

export const booksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_FIRST_BOOKS":
      return {
        ...state,
        bookChunks: [action.payload.items],
        startingIndex: action.payload.items
          ? action.payload.items.length
          : null,
        totalItems: action.payload.totalItems,
      };
    case "FETCH_MORE_BOOKS":
      return {
        ...state,
        bookChunks: [...state.bookChunks, action.payload.items],
        startingIndex: action.payload.items
          ? state.startingIndex + action.payload.items.length
          : state.startingIndex,
      };
    case "CHANGE_LOADING_STATE":
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case "INIT_STATE":
      return {
        bookChunks: [],
        startingIndex: 0,
        totalItems: 0, //just for info (there will be no more books that this number), not for pagination
        isLoading: false,
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
export const initStateAction = () => ({
  type: "INIT_STATE",
});
