import { createStore } from 'redux';

const initialState = {
  open: false
}

export const reducer = ( state = initialState, { type, open }) => {
  switch (type) {
    case "TOGGLE":
      return {...state, open: !state.open };
  
    default:
      return state;
  }
}

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);