import styled from 'styled-components';

export const Warp = styled.div`
  height: 100%;

  .top-header-content {
    padding: 0 8px;
    display: grid;
    grid-template-columns: 4fr 1fr;
    //color: rgba(255, 255, 255, 0.65);
    //background: rgb(0, 21, 41);
    .ant-menu-horizontal {
      border: none;
    }

    .top-header-right {
      display: flex;
      align-items: center;
      justify-content: end;
    }
  }

`;