import styled, {css} from "styled-components";
import {getLightColor} from "@/utils/colorTools";

 const content = css<{ colorPrimary: string }>`
  padding: 0 0;
  position: relative;
  width: 100%;
  height: 100%;
  margin-right: 16px;
  overflow: hidden;
  background-color: ${props => getLightColor(props.colorPrimary, 0.82)};
  border-radius: 4px;
  box-shadow: 0 1px 2.5px 0 rgba(0, 0, 0, .18);
`;
const sider = css<{ colorPrimary: string }>`
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 11%;
    height: 100%;
    z-index: 1;
    background-color: ${props => getLightColor(props.colorPrimary, 0.2)};
  }

`;
const header = css<{ colorPrimary: string }>`
  ::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 25%;
    background-color: ${props => getLightColor(props.colorPrimary, 0.5)};
    content: "";
  }
`;

export const Warp = styled.div<{ colorPrimary: string }>`
  .classicLayout {
    ::after {
      z-index: 1;
    }

    .ant-pro-checkcard-content {
      ${content}
      .ant-pro-checkcard-detail {
        opacity: 0;
      }

      ${sider}
      ${header}
      &::after {
        z-index: 1;
      }
    }
  }

  .landscapeLayout {
    .ant-pro-checkcard-content {
      ${content}
      .ant-pro-checkcard-detail {
        opacity: 0;
      }

      ${header}
    }
  }

  .portraitLayout {
    .ant-pro-checkcard-content {
      ${content}
      .ant-pro-checkcard-detail {
        opacity: 0;
      }
      ${sider}
      ${header}
    }
  }



`;