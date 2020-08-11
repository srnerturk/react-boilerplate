import React, { createContext, useReducer } from 'react';
import { themeReducer } from '../reducers/theme-reducer';
const ThemeStoreContext = createContext();

const initialState = {
  theme: 'LIGHT',
};

const ThemeStoreProvider = ({ children }) => {
  const [themeState, dispatch] = useReducer(themeReducer, initialState);
  const value = { themeState, dispatch };
  return (
    <ThemeStoreContext.Provider value={value}>
      {children}
    </ThemeStoreContext.Provider>
  );
};
export { ThemeStoreContext, ThemeStoreProvider };
