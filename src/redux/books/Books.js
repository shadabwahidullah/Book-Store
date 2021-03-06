import axios from 'axios';

// action types
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS_SUCCESS = 'bookStore/books/GET_BOOKS_SUCCESS';
// const GET_BOOKS_ERROR = 'bookStore/books/GET_BOOKS_ERROR';

// const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKS';

// API
const APP_ID = 's9WgIk6JBNM28R0fePw0';
const BASE_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_ID}/books`;

// initial state
const initialState = [];

// actions
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const fetchBooks = (dispatch) => {
  axios.get(BASE_URL).then((res) => {
    const books = Object.entries(res.data);
    const fetchedBooks = [];
    books.forEach((book) => {
      const tmpBook = {
        id: book[0],
        title: book[1][0].title,
        author: book[1][0].category,
      };
      fetchedBooks.push(tmpBook);
    });
    dispatch({ type: FETCH_BOOKS_SUCCESS, payload: fetchedBooks }, []);
  });
};

export const addBookAPI = async (book, dispatch) => {
  const { id, title, author } = book;
  const newBook = { item_id: `${id}`, title, category: author };

  axios
    .post(BASE_URL, newBook)
    .then(() => {
      dispatch({ type: ADD_BOOK, payload: book });
    });
};

export const removeBookAPI = (id, dispatch) => {
  axios.delete(`${BASE_URL}/${id}`).then(() => {
    dispatch({ type: REMOVE_BOOK, payload: id });
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.payload)];
    case FETCH_BOOKS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
