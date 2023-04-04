import type {RootState} from "@/store";
import type {GlobalState} from "@/store/global/reducers";

export const selectGlobal = (state: RootState): GlobalState => {
  return state.global;
};
