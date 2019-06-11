import React, { Component } from "react";

export default class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  render() {
    return (
      <React.Fragment>
        <p>You clicked {this.state.counter}</p>
        <button
          onClick={() =>
            this.setState(prevState => ({ counter: prevState.counter + 1 }))
          }
        >
          {" "}
          Click me please{" "}
        </button>
      </React.Fragment>
    );
  }
}
