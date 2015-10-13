import './favicon.ico';
import './index.html';
import './images/icon.png';
import './images/spinner_sprite.png';
import 'babel-core/polyfill';
import 'normalize.css/normalize.css';
import './less/main.less';

import React from 'react';
import Router from 'react-router';
import { Redirect, DefaultRoute, Route, RouteHandler } from 'react-router';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import LogoutHandler from './components/Product/Product';
import ProductHandler from './components/Product/Product';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        appProperties: []
    };
  }

  componentDidMount() {

    //AppPropertiesStore.listen(this.onChange.bind(this));
    //AppPropertiesActions.fetchAppProperties();
  }

  componentWillUnmount() {

    //AppPropertiesStore.unlisten(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState(state);
  }

  render() {

    let logoStyle = {
      backgroundImage: 'url(images/icon.png)'
    };
    let icon = (
      <div className="app-logo" style={logoStyle}></div>
    );
    let greetings = 'Welcome ' + (this.state.appProperties.userName || 'user');

    return (

      <div className="nav">
        <Navbar brand={icon}>
          <Nav className="container-fluid">
            <li className="">
              <a href="#/product">Product</a>
            </li>
          </Nav>
          <Nav className="pull-right">
            <DropdownButton eventKey={3} title={greetings}>
              <MenuItem divider />
              <li className="">
                <a href="#/logout">Logout</a>
              </li>
            </DropdownButton>
          </Nav>
          <Nav className="pull-right">
          </Nav>
        </Navbar>

        {/* The route target loads here */}
        <RouteHandler app={this.state.appProperties} />
      </div>
    );
  }
}

let routes = (
  <Route handler={App} name="app" path="/">
    <Redirect from="/" to="/product"/>
    <DefaultRoute handler={ProductHandler}/>
    <Route handler={ProductHandler} name="product" path="/product"/>
    <Route handler={LogoutHandler} name="logout" path="/logout"/>
  </Route>
);

Router.run(routes, Handler => {
  React.render(<Handler/>, document.body);
});
