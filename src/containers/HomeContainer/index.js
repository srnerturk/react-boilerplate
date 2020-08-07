import React, { useContext } from 'react';
import StoreContext from '../../store';
import { THEME } from '../../constants';

function HomeContainer() {
  const store = useContext(StoreContext);
  return (
    <div>
      <h4>Hello Im'a Home Container</h4>
      <button className="theme-selector"
        onClick={() =>
          store.changeTheme(
            store.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
          )
        }
      >
        {store.theme === THEME.LIGHT ? 'Switch Dark Theme' : 'Switch Light Theme'}
      </button>
    </div>
  );
}

export default HomeContainer;
