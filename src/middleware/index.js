import types from '../actions/actionTypes';
import userMiddleware from './user-mw';
export const applyMiddleware = (dispatch) => (action) => {
  switch (action.type) {
    case types.GET_USER_DATA:
      return userMiddleware(dispatch, action.payload);
    default:
      dispatch(action);
  }
};
