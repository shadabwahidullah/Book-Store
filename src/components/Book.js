import React from 'react';

const Book = (props) => {
  const { title, author } = props;

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
