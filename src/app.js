import React from 'react';
import { StoreProvider } from './store';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import './styles/app.css';

function App({ Component, pageProps }) {
  return (
    <Router>
      <StoreProvider>
        <div>
          <nav>
            <div className='container'>
              <div className='logo'>
                <Link className="link-btn" to='/'>Home Page</Link>
                <Link className="link-btn" to='/about'>About Page</Link>
              </div>
            </div>
          </nav>
            <Route exact path='/'>
              <HomeContainer />
            </Route>
            <Route exact path='/about'>
              <AboutContainer />
            </Route>
        </div>
      </StoreProvider>
    </Router>
  );
}
export default App;
