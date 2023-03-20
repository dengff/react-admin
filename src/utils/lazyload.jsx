import {Suspense} from 'react';
import {Spin} from 'antd';
import styled from 'styled-components';

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

export function lazyLoad(Comp) {
  return (
    <Suspense
      fallback={
        <Warp>
          <Spin
            className="spin-loading"
            size="large"
            tip="Loading..."
          />
        </Warp>
      }
    >
      <Comp/>
    </Suspense>
  );
}