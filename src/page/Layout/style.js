import styled from 'styled-components';

export const Warp = styled.div`
  height: 100%;

  .layout-content {
    margin: 18px 16px;
    height: 100%;
    overflow-Y: auto;
    overflow-X: hidden;
    border-Radius: 4px;
    box-Shadow: 0 2px 6px;
    background: rgb(255, 255, 255);

  }

  .layout-content::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 3px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }

  .layout-content::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    background-color: skyblue;
    background-image: -webkit-linear-gradient(45deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent);
  }

  .layout-content::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #ededed;
    border-radius: 10px;
  }
`;