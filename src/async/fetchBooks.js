import { fetchFirstBooksAction } from "../store/booksReducer";
import { fetchMoreBooksAction } from "../store/booksReducer";

const APIKey = "AIzaSyDuhmC1gJrQxGjeGDbJbOLRUCi_Ea0ZSMw";

export const fetchFirstBooks = (query) => {
  return function(dispatch) {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=0&maxResults=30&key=${APIKey}`
    )
      .then((response) => response.json())
      .then((json) => dispatch(fetchFirstBooksAction(json.items)));
  };
};

export const fetchMoreBooks = (query, startIndex) => {
  return function(dispatch) {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}&maxResults=30&key=${APIKey}`
    )
      .then((response) => response.json())
      .then((json) => dispatch(fetchMoreBooksAction(json.items)));
  };
};
