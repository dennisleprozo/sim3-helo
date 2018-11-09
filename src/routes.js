import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Privates from './components/Privates/Privates';
import Auth from './components/Auth/Auth';

import Form from './components/Form/Form';
import Post from './components/Post/Post';

const route = (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/privates" component={Privates} />

    <Route path="/dashboard" component={Dashboard} />
    <Route path="/post/:id" component={Post} />
    <Route path="/new" component={Form} />
  </Switch>
);
export default route;
