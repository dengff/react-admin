import {HashRouter} from "react-router-dom"
import Router from "./router/index.jsx"
import {Provider} from "react-redux";
import store from "@/store"
import {persistor} from "@/store";
import {PersistGate} from "redux-persist/lib/integration/react"
import RequireAuth from "@/router/routeAuth.jsx"
import "@/static/style/reset.css"
import React from "react";
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HashRouter>
          <RequireAuth>
            <Router />
          </RequireAuth>
        </HashRouter>
      </PersistGate>

    </Provider>

  )
}

export default App