import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import { GenerateRandomDni } from './components/Views/GenerateRandomDni';
import { CalculateDniLetter } from './components/Views/CalculateDniLetter';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <>
            <nav>
              <Link to={'/generate-random-dni'}>Generate random dni</Link>
              <Link to={'/calculate-dni-letter'}>Calculate dni letter</Link>
            </nav>
          </>
        </Switch>
        <main>
          <Route path={'/generate-random-dni'} component={GenerateRandomDni} />
          <Route path={'/calculate-dni-letter'} component={CalculateDniLetter} />
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
