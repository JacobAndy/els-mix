import React, { Component, Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";
import NavBar from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

class App extends Component {
  state = {
    nav: [
      { nav: "HOME", to: "/" },
      { nav: "MINERALS", to: "/minerals" },
      { nav: "ABOUT", to: "/about" },
      { nav: "CONTACT", to: "/contact" }
    ]
  };
  render() {
    let { nav } = this.state;
    return (
      <Router>
        <Fragment>
          <NavBar nav={nav} />
          {routes}
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
