import * as actionsType from './constants.js';

export const changeTheme = (themeMode) => (dispatch, getState) => {
  const body = document.body;
  dispatch(setThemeMOde(themeMode));
  if (themeMode['isGrey']) return body.setAttribute('style',
    'filter: grayscale(1)');
  if (themeMode['isColorWeakness']) return body.setAttribute('style',
    'filter: invert(80%)');
  return body.setAttribute('style', '');
};

export const changeColorPrimary = (color) => dispatch => {
  dispatch(setColorPrimary(color));

};

export const changeComponentSize = (size) => dispatch => {
  dispatch(setComponentSize(size));
};

const setThemeMOde = (themeMode) => ({
  type: actionsType.CHANGE_THEME,
  themeMode: themeMode,
});

const setColorPrimary = (color) => ({
  type: actionsType.SET_COLOR_PRIMARY,
  colorPrimary: color,
});
const setComponentSize = (size) => ({
  type: actionsType.SET_COMPONENT_SIZE,
  componentSize: size,
});
export const resetThemeState = () => ({
  type: actionsType.RESET_THEME_STATE,
});

