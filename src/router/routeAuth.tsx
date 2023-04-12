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
  const redirectToLogin = () => navigate("/login", { replace: true });
  const redirectToDashboard = () => navigate("/", { replace: true });
  const redirectToErrorPage = () => navigate("/error", { replace: true });
  useEffect(() => {
    if (!token) {
      return redirectToLogin();
    } else if (pathname === "/login") {
      return redirectToDashboard();
    } else if (
      userInfo?.role !== "admin" &&
      curRoute?.meta?.auth?.roles?.length &&
      !curRoute?.meta?.auth?.roles?.includes(userInfo.role)
    ) {
      return redirectToErrorPage();
    }
  }, [token, userInfo, curRoute]);
  return props.children;
};

export default RequireAuth;