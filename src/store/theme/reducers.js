import * as actionsType from './constants.js';

const initTheme = {
  themeMode: {
    isGrey: false,
    isColorWeakness: false,
  },

  token: {
    colorPrimary: '#1677ff',
    fontSize: 16,
  },
  componentSize: 'middle',
};

export default function reducer(state = initTheme, action) {
  switch (action.type) {
    case actionsType.SET_COLOR_PRIMARY:
      return {
        ...state,
        token: {
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
    default :
      return state;
  }

}