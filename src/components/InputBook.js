import React from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { addBook } from '../redux/books/Books';

const InputBook = () => {
  const dispatch = useDispatch();

  const addNewBook = (e) => {
    console.log(e);
    const id = uuid();
    const title = 'something';
    const author = 'something else';
    const newBook = {
      id,
      title,
      author,
    };

    dispatch(addBook(newBook));
  };

  return (
    <form onSubmit={addNewBook()}>
      <input id="bookTitle" placeholder="name of the book" />
      <input id="bookAuthor" placeholder="author of the book" />
      <button type="submit">Add book</button>
    </form>
  );
};

export default InputBook;
