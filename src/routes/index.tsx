import { BrowserRouter, Switch } from 'react-router-dom';

import { HomePage } from 'pages/App/HomePage';
import { Profile } from 'pages/App/Profile';
import { Route } from './Route';

export const Routes = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route path="/home" exact component={HomePage} />
      <Route path="/" exact component={HomePage} />
      <Route path="/perfil" exact component={Profile} />
    </Switch>
  </BrowserRouter>
);
