import axios from 'axios';
import types from '../../actions/actionTypes';
const userFetch = (dispatch, payload) => {
  return axios
    .get(payload)
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
};

export default userFetch;
