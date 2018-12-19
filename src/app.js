import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Understanding State Management</h1>
      <h2>by Building a Library Similar to Redux</h2>
      <a href="https://hackernoon.com/building-a-redux-like-state-manager-for-react-cd75cc2853b3">
        See Meduim Post Here
      </a>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
