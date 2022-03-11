import { configureStore,ThunkAction, Action, combineReducers, getDefaultMiddleware} from '@reduxjs/toolkit'
import {applyMiddleware, createStore} from 'redux'
import postReducer from './postReducer';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { wrapMakeStore, nextReduxCookieMiddleware } from 'next-redux-cookie-wrapper';

const rootReducer = combineReducers({ post: postReducer });
const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};
// export const makeStore = () =>
//   configureStore({
//     reducer,
//   });
  export const makeStore = wrapMakeStore( () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(
      nextReduxCookieMiddleware({
        subtrees: ["post.posts"]
      })
    )
    
    })
  );

  export const wrapper = createWrapper(makeStore, { debug: true });