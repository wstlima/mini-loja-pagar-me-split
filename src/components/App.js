import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../components/containers/Home';
import GlobalStyle from '../components/styles/GlobalStyle';
const App = () => (
  <BrowserRouter>
    <>
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
    <GlobalStyle/>
    </>
  </BrowserRouter>
)

export default App