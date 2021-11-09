// action types
const ADD_BOOK = "bookStore/books/ADD_BOOK";
const REMOVE_BOOK = "bookStore/books/REMOVE_BOOK";

// initial state
const initialState = [];

// actions
export const addBook = () => {
  return {
    type: ADD_BOOK,
    payload,
  };
};

export const removeBook = () => {
  return {
    type: REMOVE_BOOK,
    payload,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      break;
    case REMOVE_BOOK:
      break;
    default:
      return state;
  }
};

export default reducer;
