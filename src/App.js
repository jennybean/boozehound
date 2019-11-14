import React from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import saga from "./app/sagas";
import { sagaMiddleware } from "./app/middleware";

import RootComponent from "./library/RootComponent";

const App = () => (
  <Provider store={store}>
    <RootComponent />
  </Provider>
);

export default App;

sagaMiddleware.run(saga);
