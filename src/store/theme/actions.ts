import themeActions from "./constants";
import type {ResetThemeState, SetColorPrimary, SetComponentSize, SetThemeMOde} from "@/store/theme/actionTypes";
import type {AppThunk} from "@/store";
import type {ThemeMode} from "@/store/theme/reducers";
import type {ComponentSize} from "@/store/theme/reducers";

export const changeTheme = (themeMode: ThemeMode): AppThunk => (dispatch, getState) => {
  const body = document.body;
  dispatch(setThemeMOde(themeMode));
  if (themeMode["isGrey"]) return body.setAttribute("style",
    "filter: grayscale(1)");
  if (themeMode["isColorWeakness"]) return body.setAttribute("style",
    "filter: invert(80%)");
  return body.setAttribute("style", "");
};

export const changeColorPrimary = (color: string): AppThunk => dispatch => {
  dispatch(setColorPrimary(color));

};

export const changeComponentSize = (size: ComponentSize): AppThunk => dispatch => {
  dispatch(setComponentSize(size));
};

const setThemeMOde = (themeMode: ThemeMode): SetThemeMOde => ({
  type: themeActions.CHANGE_THEME,
  themeMode: themeMode,
});

const setColorPrimary = (color: string): SetColorPrimary => ({
  type: themeActions.SET_COLOR_PRIMARY,
  colorPrimary: color,
});
const setComponentSize = (size: ComponentSize): SetComponentSize => ({
  type: themeActions.SET_COMPONENT_SIZE,
  componentSize: size,
});
export const resetThemeState = (): ResetThemeState => ({
  type: themeActions.RESET_THEME_STATE,
});

