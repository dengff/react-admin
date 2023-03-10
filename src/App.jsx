import {HashRouter} from "react-router-dom"
import Router from "./router/index.jsx"
import RequireAuth from "@/router/routeAuth.jsx"
import "@/static/style/reset.css"
import React from "react";
import {ConfigProvider} from "antd"
import {useSelector} from "react-redux";

const App = () => {
  const {token, componentSize} = useSelector(state => state.theme)
  return (
    <ConfigProvider
      componentSize={componentSize}
      theme={{
        token: {
          ...token
        },
      }}
    >
      <HashRouter>
        <RequireAuth>
          <Router/>
        </RequireAuth>
      </HashRouter>
    </ConfigProvider>
  )
}

export default App