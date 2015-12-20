// app
import React from 'react';
import App from './app';
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler } = Router;

import Home from './components/home';
import Detail from './components/detail';


let routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={Home} />
    <Route name="home" path="/home" handler={Home} />
    <Route name="detail" path="/detail" handler={Detail} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('react'),()=>{
    console.log('render start___'+new Date().getTime());
  });
});
