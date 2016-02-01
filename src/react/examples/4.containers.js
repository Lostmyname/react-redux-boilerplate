// In the previous example we created
// a version of our component bound to redux

// In this example we will achieve the same
// using a higher level component, known as a container

// Importantly this allows us to keep a
// sensible seperation of concerns
// Our components could easily be used without Redux

// components/HelloWordCounter.js
import React from 'react';

var HelloWorldCounter = (props) => (
  <div>
    <h1>Hello world x{props.count}</h1>
    <button onClick={props.handleClick}>Say hello</button>
  </div>
);

// containers/HelloWordCounter.js
import React from 'react';
import { connect } from 'react-redux';
import HelloWorldCounterComponent from 'HelloWorldCounter';

var HelloWorldContainer = (props) => (
  <HelloWorldCounterComponent {...props} />
);

var mapStateToProps = (state) => ({
  count: state.helloWorldCount
});

var mapDispatchToProps = (dispatch) => ({
  handleClick: function () {
    dispatch({
      type: 'UPDATE_COUNT'
    });
  }
});
