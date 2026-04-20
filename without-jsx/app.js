import React from "https://esm.sh/react@19";
import { createRoot } from "https://esm.sh/react-dom@19/client";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  reset() {
    this.setState({ count: 0 });
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement("p", null, "Count: " + this.state.count),
      React.createElement("button", { onClick: this.increment }, "Increment"),
      React.createElement("button", { onClick: this.decrement }, "Decrement"),
      React.createElement("button", { onClick: this.reset }, "Reset"),
    );
  }
}

const element = React.createElement(
  "div",
  null,
  React.createElement(Counter),
  React.createElement(Counter),
);

const root = createRoot(document.getElementById("root"));
root.render(element);
