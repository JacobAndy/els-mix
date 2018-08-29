import React, { Component, Fragment } from "react";
import "./style/Nav.css";
import { Link, withRouter } from "react-router-dom";
import BurgerButton from "./BurgerButton";

class NavBar extends Component {
  state = {
    burgerToggle: false
  };
  componentDidMount() {}
  toggleBurgerNav = () => {
    let { burgerToggle } = this.state;

    this.setState({ burgerToggle: !burgerToggle });
  };
  render() {
    console.log(window);
    let { burgerToggle } = this.state;
    let { nav, location } = this.props;
    let { toggleBurgerNav } = this;
    let navBarTitles = nav.map(e => (
      <Link to={e.to}>
        <h4
          onClick={toggleBurgerNav}
          className={
            location.pathname === e.to
              ? "nav-sections active"
              : "inactive nav-sections"
          }
        >
          {e.nav}
        </h4>
      </Link>
    ));
    return (
      <Fragment>
        <BurgerButton toggle={toggleBurgerNav} handle={burgerToggle} />
        <header className="header_big">
          <Link to="/">
            <h2 className="company_name">ElsMix</h2>
          </Link>
          <div
            className={
              window.visualViewport.width < 990 && burgerToggle
                ? "open-nav"
                : window.visualViewport.width < 990 && !burgerToggle
                  ? "close-nav"
                  : null
            }
          >
            {navBarTitles}
          </div>
        </header>
      </Fragment>
    );
  }
}
export default withRouter(NavBar);
