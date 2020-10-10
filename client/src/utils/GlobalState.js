import React, { createContext, useReducer, useContext } from "react";
import {
  // SET_CURRENT_POST,
  // REMOVE_POST,
  // UPDATE_POSTS,
  // ADD_POST,
  // LOADING
  SHOW_RESULTS
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
      // loading: false
    }
    console.log("state: ");
    console.log(state);

  // case SET_CURRENT_POST:
  //   return {
  //     ...state,
  //     currentPost: action.post,
  //     loading: false
  //   };

  // case UPDATE_POSTS:
  //   return {
  //     ...state,
  //     posts: [...action.posts],
  //     loading: false
  //   };

  // case ADD_POST:
  //   return {
  //     ...state,
  //     posts: [action.post, ...state.posts],
  //     loading: false
  //   };

  // case REMOVE_POST:
  //   return {
  //     ...state,
  //     posts: state.posts.filter((post) => {
  //       return post._id !== action._id; 
  //     })
  //   };

  // case LOADING:
  //   return {
  //     ...state,
  //     loading: true
  //   };

  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    // posts: [],
    searchResults: []
    // loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };