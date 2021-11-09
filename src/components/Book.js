import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/Books';

const Book = (props) => {
  const { book } = props;
  const { id, title, author } = book;

  const dispatch = useDispatch();

  const deleteBook = (event) => {
    const { id } = event.target.parentElement;
    console.log('id is ', event.target.parentElement.key);
    dispatch(removeBook(id));
  };

  return (
    <li id={id}>
      <h3>
        {title}
        {' '}
        {author}
      </h3>
      <button
        type="button"
        onClick={(event) => {
          deleteBook(event);
        }}
      >
        remove
      </button>
    </li>
  );
};

export default Book;
