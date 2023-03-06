import styled from 'styled-components';
const loginBackground = "https://cdn.pixabay.com/photo/2016/02/15/11/40/background-1201008__480.jpg?imageView&blur=40x20"
// const loginBackground = "https://cdn.pixabay.com/photo/2022/09/11/11/32/project-planning-7446580__480.jpg"

export const Warp = styled.div`
  .login {
    height: 100vh;
    background-image: url(${loginBackground});
    display: flex;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .ant-pro-form-login-container {
    overflow-y: hidden;
    position: relative;
    flex: none;
    box-shadow: 2px 3px 8px #d9c3bf;
    height: auto;
    border-radius: 8px;
  }

  .ant-pro-form-login-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${loginBackground});
    filter: blur(3px);
    z-index: 0;
    background-size: cover;
  }

  .ant-pro-form-login-logo  {
    z-index: 1;
  }

  .ant-divider-inner-text {
    z-index: 1;
  }

`;