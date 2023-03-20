import styled from 'styled-components';
import loginBackground from "@/static/img/loginBanner_2.jpg"
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
    box-shadow: 2px 3px 8px rgba(60, 116, 220, 0.98);
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
    backdrop-filter: blur(5px);
    z-index: 0;
    background-size: cover;
  }

  .ant-pro-form-login-logo {
    z-index: 1;
  }

  .ant-divider-inner-text {
    z-index: 1;
  }

`;