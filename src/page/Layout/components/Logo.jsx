import React from 'react';
import styled from 'styled-components';
import Auth from '@/components/Auth';
import {useSelector} from 'react-redux';

const logo = 'https://www.logosc.cn/logomrdata/2017/12/13/ff616ad1-0a2e-40a4-8842-9b0b97ea55e4.png';
const Warp = styled.div`
  width: ${props => props.mode === 'horizontal' ? '200px' : false};
  display: flex;
  align-items: center;

  .logo {
    width: 100%;
    display: flex;
    justify-content: space-around;

    img {
      width: auto;
      height: 48px;
    }
  }
`;

export const Logo = (props) => {
  const {pageConfig} = useSelector(state => state.topHeader);
  const {layoutItems} = pageConfig ?? {};
  return (
    <Auth
      auth={layoutItems?.includes('logo')}
      render={() =>
        <Warp {...props}>
          <div className={'logo'}>
            <img src={logo}/>
          </div>
        </Warp>
      }
    />

  );
};

export default Logo;