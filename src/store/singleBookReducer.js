const defaultState = {
  image: null,
  title: "",
  categories: [],
  authors: [],
  description: "",
};

export const singleBookReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "UPDATE_BOOK_DATA":
      return {
        ...state,
        image: action.payload.volumeInfo.imageLinks.thumbnail,
        title: action.payload.volumeInfo.title,
        categories: [action.payload.volumeInfo.categories],
        authors: [action.payload.volumeInfo.authors],
        description: action.payload.volumeInfo.description,
      };
    default:
      return state;
  }
};

export const fetchFirstBooksAction = (payload) => ({
  type: "UPDATE_BOOK_DATA",
  payload,
});
