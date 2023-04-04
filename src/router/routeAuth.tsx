import {useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import React, {ReactElement, useEffect} from "react";
import {selectGlobal} from "@/store/global/selectors";
import {currentRoute} from "@/utils";

const RequireAuth: React.FC<{ children: ReactElement }> = (props) => {
  const navigate = useNavigate();
  const globalState = useSelector(selectGlobal);
  const {pathname} = useLocation();
  const {route: {route: curRoute}} = currentRoute();
  const {token, userInfo} = globalState;
  useEffect(() => {
    if (!token && pathname !== "/login") {
      return navigate("/login", {replace: true});
    }
    if (token && pathname === "/login") {
      return navigate("/", {replace: true});
    }
    if (userInfo?.role !== "admin" && curRoute?.meta?.auth?.roles?.length &&
      !curRoute?.meta?.auth?.roles?.includes(userInfo.role)) {
      return navigate("/error", {replace: true});
    }
  }, [token, pathname]);
  return props.children;
};

export default RequireAuth;