import React, { createContext, useReducer } from 'react';
import { userReducer, initialState } from '../reducers/user-reducer';
import { useActions } from '../actions/actions';
import { applyMiddleware } from '../middleware';

const UserStoreContext = createContext();

const UserStoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const actions = useActions(state, applyMiddleware(dispatch));
  return (
    <UserStoreContext.Provider value={{ state, actions }}>
      {children}
    </UserStoreContext.Provider>
  );
};
export { UserStoreContext, UserStoreProvider };
