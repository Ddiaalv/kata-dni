import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { GenerateRandomDni } from './components/Views/GenerateRandomDni';
import { CalculateDniLetter } from './components/Views/CalculateDniLetter';
import { ROUTES } from './utils/routes';
import { Navigation } from './App.styled';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <>
            <Navigation>
              <Link to={ROUTES.generateRandomDni}>Generate random dni</Link>
              <Link to={ROUTES.calculateDniLetter}>Calculate dni letter</Link>
            </Navigation>
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
