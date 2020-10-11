import React, { createContext, useReducer, useContext } from "react";
import {
  SHOW_RESULTS,
  SHOW_SAVED,
  DELETE_BOOK
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {

  // STORE SEARCH RESULTS
  case SHOW_RESULTS:
    return {
      ...state,
      // NOTE: not doing spread here, choosing to reassign as opposed to appending to an array.
      searchResults: action.searchResults
    };

  case SHOW_SAVED:
    return {
      ...state,
      books: [...action.books]
    };
  case DELETE_BOOK:
    return {
      ...state,
      books: state.books.filter((elem) => {
        return elem._id !== action._id; 
      })
    };
  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    books: [],
    searchResults: []
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };