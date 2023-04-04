import actionsType from "./constants";
import type {Reducer} from "redux";
import type {ThemeActions} from "@/store/theme/actionTypes";

export interface ITheme {
  themeMode: ThemeMode;
  token: Token;
  componentSize: ComponentSize;
}

export type ComponentSize = "small" | "middle" | "large" | undefined

export interface ThemeMode {
  isGrey: boolean;
  isColorWeakness: boolean;
}

export interface Token {
  colorPrimary: string;
  fontSize: number;
}


const initTheme: ITheme = {
  themeMode: {
    isGrey: false,
    isColorWeakness: false,
  },

  token: {
    colorPrimary: "#1677ff",
    fontSize: 16,
  },
  componentSize: "middle",
};


const reducer: Reducer<ITheme, ThemeActions> = (state = initTheme, action) => {
  switch (action.type) {
    case actionsType.SET_COLOR_PRIMARY:
      return {
        ...state,
        token: {
          ...state.token,
          colorPrimary: action.colorPrimary,
        },
      };
    case actionsType.SET_COMPONENT_SIZE:
      return {
        ...state,
        componentSize: action.componentSize,
      };
    case actionsType.CHANGE_THEME:
      return {
        ...state,
        themeMode: action.themeMode,
      };
    case actionsType.RESET_THEME_STATE:
      return initTheme;
    default :
      return state;
  }
};
export default reducer;