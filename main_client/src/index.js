import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserStore from './store/UserStore';
import HouseStore from './store/HouseStore';

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider value={{
      user: new UserStore(),
      house: new HouseStore(),
  }}>
      <App />
  </Context.Provider>,
  document.getElementById('root')
);
