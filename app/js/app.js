var React = require('react');
const Router = require('react-router');
const Route = Router.Route;
const RouteHandler = Router.RouteHandler;
const Home = require('./modules/Home');
const Header = require("./components/Header");

var App = React.createClass({
  render: function(){
    return (
      <div className="container" id="app">
        <Header/>
        <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route handler={App} >
    <Route path="/" handler={Home} />
  </Route>
);

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.body);
});
