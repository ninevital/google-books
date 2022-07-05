import React from "react";
import { useSelector } from "react-redux";
import BookCard from "./BookCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function BookList() {
  const books = useSelector((state) => state.books.bookChunks);
  const bookItems = books.map((chunk) =>
    chunk.map((book) => {
      return (
        <Col className="mb-5" md={3}>
          <BookCard props={book} key={book.id} />
        </Col>
      );
    })
  );

  return (
    <Container>
      <Row className="mb-5 justify-content-center">{bookItems}</Row>
    </Container>
  );
}

export default BookList;
