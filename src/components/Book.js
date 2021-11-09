import React from 'react';

const Book = (props) => {
  const { book } = props;
  const { title, author } = book;

  return (
    <li>
      <h3>
        {title}
        {' '}
        {author}
      </h3>
      <button type="button"> remove</button>
    </li>
  );
};

export default Book;
