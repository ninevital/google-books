import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function BookPage() {
  const { id } = useParams();
  const title = useSelector((state) => state.bookInfo.title);
  const cover = useSelector((state) => state.bookInfo.image);
  const categories = useSelector((state) => state.bookInfo.categories);
  const authors = useSelector((state) => state.bookInfo.authors);
  const description = useSelector((state) => state.bookInfo.description);

  return (
    <Container className="book-container mx-auto" key={id}>
      <Row className="book-container mb-5 justify-content-center">
        <Col className="book-cover mt-3" xs={12} md={4}>
          {
            <img
              className="book-image mt-3 mb-5"
              src={cover}
              alt="Book cover"
            />
          }
        </Col>
        <Col className="content-side mx-auto" xs={12} md={8}>
          <p>{categories}</p>
          <h3>{title}</h3>
          <p>
            {authors
              ? authors.map((author) => {
                  return (
                    <p>
                      <u>{author}</u>
                      <br />
                    </p>
                  );
                })
              : null}
          </p>
          <p>{description}</p>
          <Link to="/">
            <Button className="mb-5" variant="outline-secondary">
              Back to book search
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default BookPage;
