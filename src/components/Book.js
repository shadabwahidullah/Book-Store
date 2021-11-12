import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBookAPI } from '../redux/books/Books';

const Book = (props) => {
  const { book } = props;
  const { id, title, author } = book;

  const dispatch = useDispatch();

  const deleteBook = (event) => {
    const { id } = event.target.parentElement.parentElement.parentElement;
    removeBookAPI(id, dispatch);
  };

  return (
    <li className="book-panel" id={id}>
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
      <div>
        <div className="circle-wrap">
          <div className="circle">
            <div className="mask full">
              <div className="fill" />
            </div>
            <div className="mask half">
              <div className="fill" />
            </div>
            <div className="inside-circle"> 75% </div>
          </div>
        </div>
        <div />
      </div>
    </li>
  );
};

export default Book;
