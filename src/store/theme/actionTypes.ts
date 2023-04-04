import themeActions from "@/store/theme/constants";
import type {ComponentSize, ThemeMode} from "@/store/theme/reducers";

export type   SetThemeMOde = {
  type: typeof themeActions.CHANGE_THEME,
  themeMode: ThemeMode,
}

export type SetColorPrimary = {
  type: typeof themeActions.SET_COLOR_PRIMARY,
  colorPrimary: string,
}
export type SetComponentSize = {
  type: typeof themeActions.SET_COMPONENT_SIZE,
  componentSize: ComponentSize,
}
export type ResetThemeState = {
  type: typeof themeActions.RESET_THEME_STATE,
}

export type ThemeActions =
  | SetThemeMOde
  | SetColorPrimary
  | SetComponentSize
  | ResetThemeState