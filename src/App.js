import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";
import NavBar from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <NavBar />
        {routes}
        <Footer />
      </Router>
    );
  }
}

export default App;
