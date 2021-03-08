import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainTemplate from 'templates/MainTemplate';

import { routes } from 'routes';

import Home from './Home';
import Facilities from './Facilities';
import Rooms from './Rooms';
import Contact from './Contact';

const Root = () => (
  <BrowserRouter>
    <Switch>
      <MainTemplate>
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.facilities} component={Facilities} />
        <Route exact path={routes.rooms} component={Rooms} />
        <Route exact path={routes.contact} component={Contact} />
      </MainTemplate>
    </Switch>
  </BrowserRouter>
);

export default Root;
