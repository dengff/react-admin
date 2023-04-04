import type {RootState} from "@/store";
import {TopHeader} from "@/store/topHeader/reducers";

export const selectTopHeader = (state: RootState): TopHeader => {
  return state.topHeader;
};
