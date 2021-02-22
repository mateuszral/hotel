import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainTemplate from 'templates/MainTemplate';

import { routes } from 'routes';

import Home from 'pages/Home';
import Facilities from 'pages/Facilities';
import Rooms from 'pages/Rooms';
import Contact from 'pages/Contact';

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
