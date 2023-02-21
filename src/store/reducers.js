

import {combineReducers} from 'redux';
import global from "./global/reducers.js"
import topHeader from "./topHeader/reducers.js"
export default combineReducers(
  {global,topHeader},
)