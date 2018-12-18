import { StateConsumer } from "./state-context-provider";

export default function SomeCount() {
  return (
    <StateConsumer>
      {({ state, setState }) => (
        <>
          <p>Count: {state.count}</p>
          <button onClick={() => setState({ count: state.count + 1 })}>
            + 1
          </button>
          <button onClick={() => setState({ count: state.count - 1 })}>
            - 1
          </button>
        </>
      )}
    </StateConsumer>
  );
}
