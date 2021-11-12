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
      <div className="panel-middle">
        <div className="book-progress">
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
          <div>
            <h5 className="progress-percentage">64%</h5>
            <h6 className="progress-completed">Completed</h6>
          </div>
        </div>
        <div className="line" />
        <div className="progress-chapter">
          <div>
            <h6 className="current-chapter">CURRENT CHAPTER</h6>
            <h5 className="chapter">Chapter 17</h5>
            <button className="update-button" type="button"> UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Book;
