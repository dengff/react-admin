import styled from 'styled-components';

export const Warp = styled.div`
  height: 100%;

  .scrollbar {
    height: calc(100vh - 48px);
    overflow-y: scroll;
  }

  .scrollbar::-webkit-scrollbar {
    width: 0;
  }

  .site-layout {
    .layout-header {
      background: #fff;
      height: auto;
    }
    
  }

  .layout-content {
    min-width: 1100px;
    padding: 16px 14px;
    height: 100%;
    flex: 1;
    overflow-Y: auto;
    overflow-X: auto;
    //border-Radius: 4px;
    //box-Shadow: 0 2px 6px;
    //background: rgb(255, 255, 255);

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
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #ededed;
    border-radius: 10px;
  }

  .layout-footer {
    text-align: center;
    background: rgb(240, 242, 245);
    color: rgb(217, 217, 217);
    padding: 0px 0px 20px;
  }
`;