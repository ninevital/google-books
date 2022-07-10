import React from "react";
import { useSelector } from "react-redux";
import BookCard from "./BookCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function BookList() {
  const books = useSelector((state) => state.books.bookChunks);
  const booksFound = useSelector((state) => state.books.totalItems);
  const bookItems = books.map((chunk) =>
    chunk.map((book) => {
      return (
        <Col
          key={book.id}
          className="mb-5 mx-auto md-auto justify-content-center"
        >
          <BookCard props={book} key={book.id} />
        </Col>
      );
    })
  );

  return (
    <Container className="justify-content-center">
      <Row className="mb-5 justify-content-center">
        <span>Books found: {booksFound}</span>
      </Row>
      <Row className="mb-5 justify-content-center">{bookItems}</Row>
    </Container>
  );
}

export default BookList;
