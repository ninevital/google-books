import "./App.css";
import React from "react";
import Header from "./Header.js";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { fetchMoreBooks } from "./async/fetchBooks";

function App() {
  const startingIndex = useSelector((state) => state.books.numberOfBooks);
  const query = useSelector((state) => state.input.inputValue);
  console.log(startingIndex, query);

  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(fetchMoreBooks(query, startingIndex));
  };

  return (
    <div className="App">
      <Header />
      {startingIndex > 0 ? (
        <div>
          <span>Books: {startingIndex}</span>
          <br />
          <Button variant="outline-secondary" onClick={handleClick}>
            Load another 30 books
          </Button>
        </div>
      ) : (
        <span>Books not found</span>
      )}
    </div>
  );
}

export default App;
