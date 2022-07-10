import { fetchFirstBooksAction } from "../store/booksReducer";
import { fetchMoreBooksAction } from "../store/booksReducer";
import { changeLoadingStateAction } from "../store/booksReducer";
import { initStateAction } from "../store/booksReducer";

const APIKey = "AIzaSyDuhmC1gJrQxGjeGDbJbOLRUCi_Ea0ZSMw";

export const fetchFirstBooks = (query, category, sorter) => {
  const categorySearch = category === "" ? "" : `+subject:${category}`;

  return async function(dispatch) {
    dispatch(initStateAction());
    dispatch(changeLoadingStateAction());
    await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}${categorySearch}&startIndex=0&maxResults=30&orderBy=${sorter}&key=${APIKey}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((json) => {
        dispatch(fetchFirstBooksAction(json));
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch(changeLoadingStateAction());
  };
};

export const fetchMoreBooks = (query, startIndex, category, sorter) => {
  const categorySearch = category === "" ? "" : `+subject:${category}`;
  return async function(dispatch) {
    dispatch(changeLoadingStateAction());
    await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}${categorySearch}&startIndex=${startIndex}&maxResults=30&orderBy=${sorter}&key=${APIKey}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((json) => dispatch(fetchMoreBooksAction(json)))
      .catch((error) => {
        console.log(error);
      });
    dispatch(changeLoadingStateAction());
  };
};
