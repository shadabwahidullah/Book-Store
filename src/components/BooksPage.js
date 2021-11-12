import React, { Fragment } from 'react';
import BooksList from './BooksList';
import InputBook from './InputBook';

const BooksPage = () => (
  <>
    <BooksList />
    <hr />
    <InputBook />
  </>
);

export default BooksPage;
