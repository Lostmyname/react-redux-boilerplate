import { createStore } from 'redux';

// Core to Redux is the notion that the state is never mutated
// Changes to state are made inside of reducers
// Reducers always return a new state, instead of mutating the current state

var reducer = function (state = 1, action) {
  switch action.type {
    case 'UPDATE_COUNT':
      return state + 1;

    case default:
      return state;
  }
}

// In Redux there is one central store that stores the state,
// provides a dispatcher to trigger state changes
// and creates new slices of state when an action is dispatched

var initialState = 1;

var store = createStore(reducer, initialState);


// If we dispatch an action (an object), a new slice of state will be created
// from the reducer we defined

store.dispatch({
  type: 'UPDATE_COUNT'
});

// We can check that this worked by retrieving the new state
// from the store

console.log(store.getState());
// 2
