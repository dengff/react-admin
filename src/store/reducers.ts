

import {combineReducers} from 'redux';
import global from "./global/reducers"
import topHeader from "./topHeader/reducers"
import theme from "./theme/reducers"
export default combineReducers(
  {global,topHeader,theme},
)