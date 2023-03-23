import {Spin} from 'antd';
import styled from 'styled-components';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';

NProgress.configure({
  easing: 'ease',
  speed: 500,
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.001,
});
const Warp = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .spin-loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    justify-content: center;
  }
`;
const Loading = () => {
  const {token: {colorPrimary}} = useSelector(state => state.theme);

  useEffect(() => {
    NProgress?.start();
    if (NProgress?.isRendered()) {
      const barTag = document.querySelector('[role="bar"]');
      barTag.style.background = colorPrimary;
      const pegTag = document.querySelector('.peg');
      pegTag.style.boxShadow = `0 0 10px ${colorPrimary}, 0 0 5px ${colorPrimary}`;
    }
    return () => {
      NProgress?.done();
    };
  }, []);

  return (
    <Warp>
      <Spin
        className="spin-loading"
        size="large"
        tip="Loading..."
      />
    </Warp>);
};

export default Loading;