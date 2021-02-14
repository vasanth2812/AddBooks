import { createSelector } from 'reselect';
import { BOOKS_FETCHED, ADD_BOOK } from '../types';

export function books(state = {}, action = {}) {
  switch (action.type) {
    case BOOKS_FETCHED:
      return { ...state, ...action.data.entities.books };
    case ADD_BOOK: {
      return { ...state, ...action.data.entities.books };
    }
    default:
      return state;
  }
}

// SELECTORS
export const booksSelector = (state) => state.books;

export const allbooksSelector = createSelector(booksSelector, (booksHash) =>
  booksHash ? Object.values(booksHash) : []
);
