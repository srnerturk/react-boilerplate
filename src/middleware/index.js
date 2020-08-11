import types from '../actions/actionTypes';
import axios from 'axios';
export const applyMiddleware = (dispatch) => (action) => {
  console.log(action);
  switch (action.type) {
    case types.GET_USER_DATA:
      return axios
        .get(action.payload)
        .then((res) =>
          setTimeout(() => {
            dispatch({
              type: types.HTTP_SUCCESS,
              payload: res.data,
            });
          }, 2000)
        )
        .catch((err) =>
          setTimeout(() => {
            dispatch({
              type: types.HTTP_ERROR,
              payload: 'API Connection failed',
            });
          }, 2000)
        );
    default:
      dispatch(action);
  }
};
