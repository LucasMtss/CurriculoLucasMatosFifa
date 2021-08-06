import { BrowserRouter, Switch } from 'react-router-dom';

import { HomePage } from 'pages/App/HomePage';
import { Profile } from 'pages/App/Profile';
import { Experience } from 'pages/App/Experience';
import { Skills } from 'pages/App/Skills';
import { Route } from './Route';

export const Routes = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route path="/home" exact component={HomePage} />
      <Route path="/" exact component={HomePage} />
      <Route path="/perfil" exact component={Profile} />
      <Route path="/experiencia" exact component={Experience} />
      <Route path="/habilidades" exact component={Skills} />
    </Switch>
  </BrowserRouter>
);
