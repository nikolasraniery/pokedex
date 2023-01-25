import React from 'react';
import logo from './logo.svg';
import Pokedex from './pokedex/Pokedex';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Routes from './routes';

  const App: React.FC = () => {
    return (
      <>
        <Router>

          <Routes />

        </Router>
        
      </>
    );
  }

export default App;
