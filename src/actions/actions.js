import types from './actionTypes';

export const useActions = (state, dispatch) => ({
  loadHttpCallInfo: (url) => {
    dispatch({ type: types.SET_LOADING_INDICATOR });
    dispatch({ type: types.GET_HTTP_DATA, payload: url });
  },
});
