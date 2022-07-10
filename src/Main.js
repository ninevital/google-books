import "./App.css";
import React from "react";
import Header from "./Header.js";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { fetchMoreBooks } from "./async/fetchBooks";
import BookList from "./BookList";

function Main() {
  const startingIndex = useSelector((state) => state.books.startingIndex);
  const query = useSelector((state) => state.input.inputValue);
  const isLoading = useSelector((state) => state.books.isLoading);
  const category = useSelector((state) => state.filter.category);
  const sorter = useSelector((state) => state.filter.sortBy);
  const booksFound = useSelector((state) => state.books.totalItems);

  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(fetchMoreBooks(query, startingIndex, category, sorter));
  };

  const spinner = (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );

  const secondSpinner = (
    <Spinner
      className="ms-1"
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />
  );

  return (
    <div className="App">
      <Header />
      {isLoading === true && startingIndex === 0 ? (
        spinner
      ) : booksFound > 0 ? (
        <BookList />
      ) : startingIndex === null ? (
        <span>Sorry, no books found</span>
      ) : null}
      {startingIndex > 0 && startingIndex % 30 === 0 && (
        <div>
          <Button
            variant="outline-secondary"
            onClick={handleClick}
            className={`mb-5 ${isLoading ? "disabled" : ""}`}
          >
            Load another 30 books
            {isLoading === true && secondSpinner}
          </Button>
        </div>
      )}
    </div>
  );
}

export default Main;
