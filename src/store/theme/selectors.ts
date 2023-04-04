import type {RootState} from "@/store";
import type {ITheme} from "@/store/theme/reducers";

export const selectTheme = (state: RootState): ITheme => {
  return state.theme;
};
