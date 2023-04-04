import styled from "styled-components";

export const Warp = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  & > .g-polygon-1, .g-polygon-2, .g-polygon-3 {
    position: absolute;
    opacity: .5;
    animation: colorChange 10.1s infinite;

  }

  @keyframes colorChange {
    100% {
      filter: hue-rotate(360deg);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    backdrop-filter: blur(150px);
    z-index: 1;
  }

  .g-polygon-1 {
    bottom: 100px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 714px;
    height: 390px;
    background: linear-gradient(#ffee55, #fdee99);
    clip-path: polygon(0 10%, 30% 0, 100% 40%, 70% 100%, 20% 90%);
  }

  .g-polygon-2 {
    bottom: 0;
    left: 30%;
    transform: translate(-50%, 0);
    width: 1000px;
    height: 450px;
    background: linear-gradient(-36deg, #E950D1, #f980D9);
    clip-path: polygon(10% 0, 100% 70%, 100% 100%, 20% 90%);
  }

  .g-polygon-3 {
    bottom: 0;
    left: 70%;
    transform: translate(-50%, 0);
    width: 800px;
    height: 450px;
    background: rgba(87, 80, 233);
    clip-path: polygon(80% 0, 100% 70%, 100% 100%, 20% 90%);
  }


  .login {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
  }

  .ant-pro-form-login-container {
    overflow-y: hidden;
    position: relative;
    flex: none;
    box-shadow: 1px 1px 6px rgba(60, 116, 220, 0.98);
    height: auto;
    border-radius: 8px;
  }

`;