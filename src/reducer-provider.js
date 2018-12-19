import { StateProvider } from "./state-context-provider";
import App from "./app";
import countReducer from "./count-reducer";

const initialState = {
  count: 0
};

export default function Root() {
  return (
    <StateProvider state={initialState} reducers={[countReducer]}>
      <App />
    </StateProvider>
  );
}
