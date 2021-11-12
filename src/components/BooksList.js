import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/Books';
import Book from './Book';

const BooksList = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchBooks(dispatch);
  }, []);
  return (
    <ul className="book-list">
      {books.map((book) => {
        const { id } = book;
        return <Book key={id} book={book} />;
      })}
    </ul>
  );
};

export default BooksList;
