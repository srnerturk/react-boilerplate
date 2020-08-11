import types from '../actions/actionTypes';

const initialState = {
  users: [],
  loading: false,
  error: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HTTP_SUCCESS:
      return { ...state, error: '', users: action.payload, loading: false };

    case types.HTTP_ERROR:
      return { ...state, users: [], error: action.payload, loading: false };

    case types.SET_LOADING_INDICATOR:
      return { ...state, loading: true, };
  }
};
export { initialState, userReducer };
