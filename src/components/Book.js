import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBookAPI } from '../redux/books/Books';

import styles from '../styles/book.module.css';

const Book = (props) => {
  const { book } = props;
  const { id, title, author } = book;

  const dispatch = useDispatch();

  const deleteBook = (event) => {
    const { id } = event.target.parentElement.parentElement.parentElement;
    removeBookAPI(id, dispatch);
  };

  return (
    <li className={styles.bookPanel} id={id}>
      <div>
        <h3 className="category">Action</h3>
        <h2 className="title">{title}</h2>
        <h6 className="author">{author}</h6>
        <div className="buttonsWrapper">
          <button className="button" type="button">
            Comments
          </button>
          <div className="separator" />
          <button
            className="button"
            type="button"
            onClick={(event) => {
              deleteBook(event);
            }}
          >
            remove
          </button>
          <div className="separator" />
          <button className="button" type="button">
            Edit
          </button>
        </div>
      </div>
    </li>
  );
};

export default Book;
