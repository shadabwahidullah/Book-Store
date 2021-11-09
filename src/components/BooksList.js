import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BooksList = () => {
  const books = useSelector((state) => state.booksReducer);
  console.log('state at first', books);

  return (
    <ul>
      {books.map((book) => {
        const { id } = book;
        console.log('id as key', id);
        return <Book key={id} book={book} />;
      })}
    </ul>
  );
};

export default BooksList;
