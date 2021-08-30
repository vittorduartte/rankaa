import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Athletic } from './pages/Athletic';
import { Athletics } from './pages/Athletics';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';

import { Home } from './pages/Home';
import { Modalities } from './pages/Modalities';

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route  path="/modalities" exact component={Modalities} />
      <Route  path="/athletics" exact component={Athletics} />
      <Route  path="/athletic/:id" exact component={Athletic} />
      <Route  path="/auth/signin" exact component={Login} />
      <Route  path="/auth/signup" exact component={Register} />
    </Switch>
    </BrowserRouter>
    </>
  );
}

