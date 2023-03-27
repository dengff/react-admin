import React from 'react';
import {Popover} from 'antd';
import {SketchPicker} from 'react-color';

import styled from 'styled-components';

export const Warp = styled.div`
  .theme-input {
    border: 1px solid rgb(229, 230, 235);
    box-sizing: border-box;
    display: flex;
    height: 32px;
    padding: 3px;
    width: 100%;
    cursor: pointer;

    .theme-color {
      height: 24px;
      margin-right: 10px;
      min-width: 100px;
    }
  }
`;
const presetColors = [
  '#409EFF',
  '#DAA96E',
  '#00cf74',
  '#009688',
  '#27ae60',
  '#ff5c93',
  '#e53935',
  '#14c9c9',
  '#e74c3c',
  '#fd726d',
  '#f39c12',
  '#9b59b6'];
const ColorPicker = (props) => {
  const {currentColor = '#9b59b6'} = props;
  const onColorChange = (value, event) => {
    props?.onChange(value);
  };
  return (
    <Warp>
      <Popover
        overlayInnerStyle={{padding: '0'}}
        trigger="click"
        content={
          <SketchPicker
            presetColors={presetColors}
            onChange={onColorChange}
            {...props}
          />
        }
        placement={'bottom'}
      >
        <div className="theme-input">
          <div className="theme-color"
               style={{
                 background: currentColor,
               }}
          ></div>
          <span>{currentColor}</span>
        </div>

      </Popover>
    </Warp>
  );
};
export default ColorPicker;
