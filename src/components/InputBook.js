import React from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { useForm } from 'react-hook-form';
import { addBook } from '../redux/books/Books';

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
      id,
      title,
      author,
    };
    dispatch(addBook(newBook));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit((event) => {
        console.log('printed from handle submit', event);
        addNewBook(event);
      })}
    >
      {/* eslint-disable react/jsx-props-no-spreading */}
      <input
        {...register('title', { required: true })}
        placeholder="name of the book"
      />
      {errors.title?.type === 'required' && 'Title is required'}
      <input
        {...register('author', { required: true })}
        placeholder="author of the book"
      />
      {errors.author?.type === 'required' && 'Author is required'}
      <button type="submit">Add book</button>
    </form>
  );
};

export default InputBook;
