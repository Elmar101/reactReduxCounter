import { render } from "react-dom";
import { store } from "../src/strore/store";
import { Provider } from "react-redux";
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
