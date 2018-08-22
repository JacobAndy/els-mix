import React, { Component, Fragment } from "react";
import "./style/Nav.css";
import { Link, withRouter } from "react-router-dom";
import BurgerButton from "./BurgerButton";

class NavBar extends Component {
  state = {
    scrollDown:
      window.visualViewport.width < 990 ? false : window.pageYOffset > 100,
    burgerToggle: false
  };
  componentDidMount() {
    window.addEventListener("scroll", () => {
      let location = window.pageYOffset;
      if (location > 100 && window.visualViewport.width > 990) {
        this.setState({ scrollDown: true });
      } else if (location < 100 && window.visualViewport.width > 990) {
        this.setState({ scrollDown: false });
      }
    });
  }
  toggleBurgerNav = () => {
    let { burgerToggle } = this.state;

    this.setState({ burgerToggle: !burgerToggle });
  };
  render() {
    console.log(window);
    let { scrollDown, burgerToggle } = this.state;
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
        <header className={!scrollDown ? "header_big" : "header_small"}>
          <Link to="/">
            <h2>ElsMix</h2>
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
