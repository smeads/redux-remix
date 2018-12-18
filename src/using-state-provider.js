import { StateProvider } from "./state-context-provider";
import App from "./app";

const initialState = {
  count: 0
};

export default function Root() {
  return (
    <StateProvider state={initialState}>
      <App />
    </StateProvider>
  );
}
