import React from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { useForm } from 'react-hook-form';
import { addBookAPI } from '../redux/books/Books';

const InputBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();

  const addNewBook = (event) => {
    const id = uuid();
    const { title } = event;
    const { author } = event;

    const newBook = {
      id: `${id}`,
      title,
      author,
    };

    addBookAPI(newBook, dispatch);
    reset();
  };

  return (
    <form
      className="input-book"
      onSubmit={handleSubmit((event) => {
        addNewBook(event);
      })}
    >
      {/* eslint-disable react/jsx-props-no-spreading */}
      <input
        className="input"
        {...register('title', { required: true && (<span />) })}
        placeholder="Book title"
      />
      {errors.title?.type === 'required' && 'Title is required'}
      <input
        className="input"
        {...register('author', { required: true })}
        placeholder="Author"
      />
      {errors.author?.type === 'required' && 'Author is required'}
      <button className="submit-button" type="submit">
        ADD BOOK
      </button>
    </form>
  );
};

export default InputBook;
