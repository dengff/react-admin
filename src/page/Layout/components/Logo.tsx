import React from "react";
import styled from "styled-components";
import {AuthControl} from "@/components/Auth";
import {useSelector} from "react-redux";
import {selectTopHeader} from "@/store/topHeader/selectors";
import logo from "@/static/img/logo.png";
import {selectGlobal} from "@/store/global/selectors";
import {selectTheme} from "@/store/theme/selectors";
// const logo = "https://www.logosc.cn/logomrdata/2017/12/13/ff616ad1-0a2e-40a4-8842-9b0b97ea55e4.png";
const Warp = styled.div<{ mode?: string, colorPrimary: string }>`
  width: ${props => props.mode === "horizontal" ? "200px" : false};
  display: flex;
  align-items: center;
  transition: padding .3s cubic-bezier(.645, .045, .355, 1);

  .logo {
    width: 100%;
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;

    img {
      width: auto;
      height: 48px;
    }

    h1 {
      color: ${props => props.colorPrimary};
      font-weight: 600;
      font-size: 18px;
      animation: slide-in 0.3s ease-in-out;
    }

    @keyframes slide-in {
      0% {
        opacity: 0;
      }
      80% {
        opacity: 0;

        100% {
          opacity: 1;
        }
      }
    }
`;

export const Logo = (props: { mode: string }) => {
  const {pageConfig, collapsed,} = useSelector(selectTopHeader);
  const {token: {colorPrimary}} = useSelector(selectTheme);
  const {layoutItems,layoutMode} = pageConfig ?? {};
  return (
    <AuthControl
      permissionControl={() => layoutItems?.includes("logo")}
    >
      <Warp {...props} colorPrimary={colorPrimary}>
        <div className={"logo"}>
          <img src={logo} alt="logo"/>
          {(layoutMode === 'portraitLayout' || !collapsed) && <h1>React Admin</h1>}
        </div>
      </Warp>
    </AuthControl>

  );
};

export default Logo;