import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";

const photos = [
  "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/86649/pexels-photo-86649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/114121/pexels-photo-114121.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/207019/pexels-photo-207019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
];

export default (
  <Switch>
    <Route path="/about" component={() => <h1>ABOUT</h1>} />
    <Route path="/contact" component={() => <h1>CONTACT</h1>} />
    <Route path="/minerals" component={() => <h1>MINERALS</h1>} />
    <Route path="/minerals/:id" component={() => <h1>SPECIFIC MINERALS</h1>} />
    <Route path="/" component={() => <Home page="HOME" photos={photos} />} />
  </Switch>
);
