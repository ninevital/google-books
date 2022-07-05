import "./App.css";
import React from "react";
import Header from "./Header.js";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { fetchMoreBooks } from "./async/fetchBooks";
import BookList from "./BookList";

function Main() {
  const startingIndex = useSelector((state) => state.books.numberOfBooks);
  const query = useSelector((state) => state.input.inputValue);
  const isLoading = useSelector((state) => state.books.isLoading);
  const category = useSelector((state) => state.filter.category);
  const sorter = useSelector((state) => state.filter.sortBy);

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

  return (
    <div className="App">
      <Header />
      {isLoading === true && spinner}
      {startingIndex === null && <span>Sorry, no books found</span>}
      {startingIndex > 0 && <BookList />}
      {startingIndex > 0 && startingIndex % 30 === 0 && (
        <div>
          <Button variant="outline-secondary" onClick={handleClick}>
            Load another 30 books
          </Button>
        </div>
      )}
    </div>
  );
}

export default Main;
