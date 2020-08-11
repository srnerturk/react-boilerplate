import types from '../actions/actionTypes';

export const themeReducer = (state, action) => {
  switch (action.type) {
    case types.CHANGE_THEME:
      const $html = document.querySelector('html');
      $html.classList.remove(...$html.classList);
      $html.classList.add(action.payload.toString());
      return { ...state, theme: action.payload };
  }
};
