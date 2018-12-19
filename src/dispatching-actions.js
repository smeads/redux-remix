import React from "react";
import { StateConsumer } from "./state-context-provider";
import { addOne, addN } from "./action-creators";

export default function SomeCount() {
  return (
    <StateConsumer>
      {({ state, dispatch }) => (
        <>
          <p>Count: {state.count}</p>
          <button onClick={() => dispatch(addOne())}>+ 1</button>
          <button onClick={() => dispatch(addN(5))}>+ 5</button>
          <button onClick={() => dispatch(addN(10))}>+ 10</button>
        </>
      )}
    </StateConsumer>
  );
}
