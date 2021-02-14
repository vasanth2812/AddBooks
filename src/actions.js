import { normalize } from 'normalizr';
import api from './services/api';
import { BOOKS_FETCHED, ADD_BOOK } from './types';
import bookSchema from './Schemas';

const booksFetched = (data) => ({
  type: BOOKS_FETCHED,
  data,
});

const addNewBook = (data) => ({
  type: ADD_BOOK,
  data,
});

export const fetchBooks = () => (dispatch) =>
  api
    .fetchBooks()
    .then((books) => dispatch(booksFetched(normalize(books, [bookSchema]))));

export const addBook = (book) => addNewBook(normalize(book, [bookSchema]));
