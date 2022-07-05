import { fetchFirstBooksAction } from "../store/booksReducer";
import { fetchMoreBooksAction } from "../store/booksReducer";
import { changeLoadingStateAction } from "../store/booksReducer";

const APIKey = "AIzaSyDuhmC1gJrQxGjeGDbJbOLRUCi_Ea0ZSMw";

// orderBy=newest
// +subject:computers

export const fetchFirstBooks = (query, category, sorter) => {
  const categorySearch = category === "" ? "" : `+subject:${category}`;
  console.log(
    `https://www.googleapis.com/books/v1/volumes?q=${query}${categorySearch}&startIndex=0&maxResults=30&orderBy=${sorter}&key=${APIKey}`
  );
  return function(dispatch) {
    dispatch(changeLoadingStateAction());
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}${categorySearch}&startIndex=0&maxResults=30&orderBy=${sorter}&key=${APIKey}`
    )
      .then((response) => response.json())
      .then((json) => dispatch(fetchFirstBooksAction(json.items)));
    dispatch(changeLoadingStateAction());
  };
};

export const fetchMoreBooks = (query, startIndex, category, sorter) => {
  const categorySearch = category === "" ? "" : `+subject:${category}`;
  return function(dispatch) {
    dispatch(changeLoadingStateAction());
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}${categorySearch}&startIndex=${startIndex}&maxResults=30&orderBy=${sorter}&key=${APIKey}`
    )
      .then((response) => response.json())
      .then((json) => dispatch(fetchMoreBooksAction(json.items)));
    dispatch(changeLoadingStateAction());
  };
};
