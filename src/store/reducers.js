

import {combineReducers} from 'redux';
import global from "./global/reducers.js"
import topHeader from "./topHeader/reducers.js"
import theme from "./theme/reducers"
export default combineReducers(
  {global,topHeader,theme},
)