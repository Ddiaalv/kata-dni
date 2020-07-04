import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import { GenerateRandomDni } from './components/Views/GenerateRandomDni';
import { CalculateDniLetter } from './components/Views/CalculateDniLetter';
import { ROUTES } from './utils/routes';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <>
            <nav>
              <Link to={ROUTES.generateRandomDni}>Generate random dni</Link>
              <Link to={ROUTES.calculateDniLetter}>Calculate dni letter</Link>
            </nav>
          </>
        </Switch>
        <main>
          <Route path={ROUTES.generateRandomDni} component={GenerateRandomDni} />
          <Route path={ROUTES.calculateDniLetter} component={CalculateDniLetter} />
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
