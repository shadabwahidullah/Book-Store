import React from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { addBook } from '../redux/books/Books';

const dispatch  = useDispatch();

const addNewBook = () => {
  const newBook = {
    id: {uuid()},
    title,
    author,
  }

  dispatch(addBook(newBook));
}

const InputBook = () => (
  <form onSubmit={addNewBook()}>
    <input placeholder="name of the book" />
    <input placeholder="author of the book" />
    <button type="submit">Add book</button>
  </form>
);

export default InputBook;
