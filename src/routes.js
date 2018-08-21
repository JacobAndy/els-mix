import { Switch, Route } from "react-router-dom";
export default (
  <Switch>
    <Route path="/about" component={() => <h1>ABOUT</h1>} />
    <Route path="/contact" component={() => <h1>CONTACT</h1>} />
    <Route path="/minerals" component={() => <h1>MINERALS</h1>} />
    <Route path="/minerals/:id" component={() => <h1>SPECIFIC MINERALS</h1>} />
    <Route path="/" component={() => <h1>home</h1>} />
  </Switch>
);
