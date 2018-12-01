import React, { Component } from "react";
import Header from "./componets/Header";
import Provider from "./context";
import { HashRouter, Route, Switch } from "react-router-dom";
import Contacts from "./componets/contacts";
import About from "./componets/pages/About";
import NotFound from "./componets/pages/NotFound";
import AddContact from "./componets/AddContact";
import EditContact from "./componets/EditContact";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <HashRouter>
          <React.Fragment>
            <Header branding="Contact Manger" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </React.Fragment>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
