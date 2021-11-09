import React from 'react';
import Book from './Book';

const BooksList = () => (
  <ul>
    <Book title="Brief history of time" author="Stephen Hawking" />
    <Book title="Homo Deus" author="Yuval Noah Harrai" />
    <Book title="Alchemist" author="Puelo Coelo" />
  </ul>
);

export default BooksList;
