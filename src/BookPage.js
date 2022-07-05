import React from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function BookPage() {
  const { id } = useParams();
  const title = useSelector((state) => state.bookInfo.title);
  const cover = useSelector((state) => state.bookInfo.image);
  const categories = useSelector((state) => state.bookInfo.categories);
  const authors = useSelector((state) => state.bookInfo.authors);
  const description = useSelector((state) => state.bookInfo.description);
  return (
    <Card style={{ width: "18rem" }} key={id}>
      <Card.Img variant="top" src={cover} />
      <Card.Body>
        <Card.Text>{categories}</Card.Text>
        <Card.Text>{authors}</Card.Text>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BookPage;
