import "./App.css";
import React from "react";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector, useDispatch } from "react-redux";
import { fetchFirstBooks } from "./async/fetchBooks";

function Header() {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.input.inputValue);
  const category = useSelector((state) => state.filter.category);
  const sorter = useSelector((state) => state.filter.sortBy);
  const inputRef = useRef(null);

  const handleCategorySelection = (event) => {
    event.preventDefault();
    const value = event.target.value;
    dispatch({ type: "CHANGE_CATEGORY", payload: value });
  };

  const handleSorterSelection = (event) => {
    event.preventDefault();
    const value = event.target.value;
    dispatch({ type: "CHANGE_SORTER", payload: value });
  };

  const handleChange = (event) => {
    const input = event.target.value;
    dispatch({ type: "CHANGE_INPUT", payload: input });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchFirstBooks(query, category, sorter));
    inputRef.current.value = "";
  };

  return (
    <div className="header">
      <Container className="mb-5">
        <Row className="mb-5">
          <h1 className="mt-5">Search for books</h1>
        </Row>
        <Form onSubmit={handleSubmit}>
          <Row className="justify-content-center">
            <Col md={6}>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Enter your request"
                  aria-describedby="search-button"
                  onChange={handleChange}
                  ref={inputRef}
                />
                <Button
                  variant="outline-secondary"
                  id="search-button"
                  type="submit"
                >
                  Search
                </Button>
              </InputGroup>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md={3}>
              <Form.Group className="mb-4" as={Row}>
                <Form.Label column md={4}>
                  Categories
                </Form.Label>
                <Col md={8}>
                  <Form.Select onChange={handleCategorySelection}>
                    <option value="">all</option>
                    <option value="art">art</option>
                    <option value="biography">biography</option>
                    <option value="computers">computers</option>
                    <option value="history">history</option>
                    <option value="medical">medical</option>
                    <option value="poetry">poetry</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className="mb-3" as={Row}>
                <Form.Label column md={4}>
                  Sorting by
                </Form.Label>
                <Col md={8}>
                  <Form.Select onChange={handleSorterSelection}>
                    <option value="relevance">relevance</option>
                    <option value="newest">newest</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default Header;
