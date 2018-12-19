import React, { PureComponent } from "react";

export class Provider extends PureComponent {
  static defaultProps = {
    state: {},
    reducers: []
  };

  state = this.props.state;

  _dispatch = action => {
    const { reducers } = this.props;
    const nextState = reducers.reduce((state, reducer) => {
      return reducer(state, action) || state;
    }, this.state);

    this.setState(nextState);
  };

  render() {
    return (
      <StateContext.Provider
        value={{ state: this.state, dispatch: this._dispatch }}
      >
        {this.props.children}
      </StateContext.Provider>
    );
  }
}
