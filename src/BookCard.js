import React from "react";
import Card from "react-bootstrap/Card";

function BookCard(props) {
  return (
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
  );
}

export default BookCard;
