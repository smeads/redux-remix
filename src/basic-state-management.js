// A globally-available value representing our app’s state
let state = {};

// Ability to read our state
export const getState = () => state;

// Ability to update our state
export const setState = nextState => {
  state = nextState;
};

// The above example is too simple for most real-world applications
