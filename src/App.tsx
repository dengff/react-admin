import {HashRouter} from "react-router-dom";
import Router from "./router";
import RequireAuth from "@/router/routeAuth";
import "@/static/style/reset.css";
import React from "react";
import {ConfigProvider} from "antd";
import {useSelector} from "react-redux";
import {selectTheme} from "@/store/theme/selectors";

const App = () => {
  const {token, componentSize} = useSelector(selectTheme);
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
  );
};

export default App;