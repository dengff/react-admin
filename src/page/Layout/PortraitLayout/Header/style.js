import styled from 'styled-components';

export const Warp = styled.div`

  .classic-header {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 48px;

    .classic-header-content {
      height: 100%;
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;

      .ant-breadcrumb, .ant-breadcrumb-separator, .ant-breadcrumb-link {
        color: rgba(255, 255, 255, .7);
      }
    }
  }




`;