import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BooksList = () => {
  const books = useSelector((state) => state.booksReducer);
  return (
    <ul>
      {books.map((book) => {
        const { id } = book;
        return <Book key={id} book={book} />;
      })}
    </ul>
  );
};

export default BooksList;
