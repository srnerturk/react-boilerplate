import types from './actionTypes';

export const useActions = (state, dispatch) => ({
  loadUserData: (url) => {
    dispatch({ type: types.SET_LOADING_INDICATOR });
    dispatch({ type: types.GET_USER_DATA, payload: url });
  },
});
