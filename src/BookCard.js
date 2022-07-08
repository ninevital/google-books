import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";

function BookCard(props) {
  const dispatch = useDispatch();
  const storeBookData = () => {
    const value = props.props;
    dispatch({ type: "UPDATE_BOOK_DATA", payload: value });
  };

  return (
    <Link
      key={props.props.id}
      to={`/books/${props.props.id}`}
      onClick={storeBookData}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Card
        key={props.props.id}
        className="book-card"
        border="light"
        bg="light"
      >
        <Card.Text style={{ minHeight: "24px" }}>
          {props.props.volumeInfo.categories}
        </Card.Text>
        <Card.Img
          variant="top"
          className="card-image"
          src={
            props.props.volumeInfo.imageLinks
              ? props.props.volumeInfo.imageLinks.thumbnail
              : "/imagenotfound.png"
          }
        />
        <Card.Body>
          <Card.Title className="card-title">
            {props.props.volumeInfo.title}
          </Card.Title>
          <Card.Text className="card-authors">
            {props.props.volumeInfo.authors
              ? props.props.volumeInfo.authors.map((author) => {
                  return (
                    <span key={author}>
                      {author}
                      <br />
                    </span>
                  );
                })
              : null}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default BookCard;
