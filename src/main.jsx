import React from "react";
import {createRoot} from "react-dom/client"
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/lib/integration/react"
import {persistor} from "@/store";
import store from "@/store"
import App from "./App"

const root = document.getElementById("root")
createRoot(root).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App></App>
    </PersistGate>
  </Provider>
)




