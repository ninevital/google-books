import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

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
    >
      <Card style={{ width: "18rem" }} key={props.props.id}>
        <Card.Text>{props.props.volumeInfo.categories}</Card.Text>
        <Card.Img
          variant="top"
          src={
            props.props.volumeInfo.imageLinks
              ? props.props.volumeInfo.imageLinks.thumbnail
              : "none"
          }
        />
        <Card.Body>
          <Card.Title>{props.props.volumeInfo.title}</Card.Title>
          <Card.Text>
            {props.props.volumeInfo.authors && props.props.volumeInfo.authors
              ? props.props.volumeInfo.authors.map((author) => {
                  return (
                    <span>
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
