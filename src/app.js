import React from 'react';
import  {StoreProvider}  from './store';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import './styles/app.css';
import { createBrowserHistory } from 'history';
export const appHistory = createBrowserHistory();
function App() {
  return (
    <Router history={appHistory}>
      <StoreProvider>
        <div>
          <nav className='nav-bar'>
            <div className='nav-links'>
              <Link className='link-btn' to='/'>
                Home Page
              </Link>
              <Link className='link-btn' to='/about'>
                About Page
              </Link>
            </div>
          </nav>
          <div className='content-wrapper'>
            <Route exact path='/'>
              <HomeContainer />
            </Route>
            <Route path='/about'>
              <AboutContainer />
            </Route>
          </div>
        </div>
      </StoreProvider>
    </Router>
  );
}
export default App;
