import React, { Component, createContext } from "react";

const { Provider, Consumer } = createContext();

export const StateConsumer = Consumer;

export class StateProvider extends Component {
  static defaultProps = {
    state: {}
  };

  state = this.props.state;

  render() {
    return (
      <Provider
        value={{ state: this.state, setState: this.setState.bind(this) }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
