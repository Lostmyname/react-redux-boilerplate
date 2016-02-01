import React from 'react';

// Presentational/stateless/functional component
// Has no internal business logic
// Simply passes props into JSX

var HelloWorldCounter = (props) => (
  <div>
    <h1>Hello world x{props.count}</h1>
    <button onClick={props.handleClick}>Say hello</button>
  </div>
);


// this notation
var HelloWorldCounter = (props) => (<div />);
// is equivalent to
var HelloWorldCounter = function (props) { return <div />; }



// React is also capable of handling state within a component
// Whenever state changes the component will update
// See further examples on the React homepage https://facebook.github.io/react/index.html

var HelloWorldCounter = React.createClass({
  handleClick: function () {
    this.setState({ count: this.state.count + 1 });
  },
  render: () => (
    <div>
      <h1>Hello world x{this.state.count}</h1>
      <button onClick={this.handleClick}>Say hello</button>
    </div>
  );
});



// If we want to handle state change outside of the component
// pass in new props and force the component to re-render

var HelloWorldCounter = React.createClass({
  handleClick: function () {
    this.props.handleClick();
    this.forceUpdate();
  },
  render: () => (
    <div>
      <h1>Hello world x{this.state.count}</h1>
      <button onClick={this.handleClick}>Say hello</button>
    </div>
  );
});


// Inside of a parent component like the App component, for example

var count = 1;

<HelloWorldCounter
  handleClick={() => count = count++}
  count={count}
/>

// This is certainly not a pattern you should use but it begins to explain
// how Redux binds to React
