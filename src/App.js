import "./App.css";
import React from "react";
import Main from "./Main";
import BookPage from "./BookPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/books/:id" element={<BookPage />} />
    </Routes>
  );
}

export default App;
