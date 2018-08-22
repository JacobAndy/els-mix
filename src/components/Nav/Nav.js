import React from "react";
import "./style/Nav.css";
import { Link, withRouter } from "react-router-dom";

class NavBar extends React.Component {
  state = {
    scrollDown: window.pageYOffset === 100
  };
  componentDidMount() {
    window.addEventListener("scroll", () => {
      let location = window.pageYOffset;
      if (location > 100) {
        this.setState({ scrollDown: true });
      } else {
        this.setState({ scrollDown: false });
      }
    });
  }
  render() {
    console.log(this.props);
    let { scrollDown } = this.state;
    let { nav, location } = this.props;
    let navBarTitles = nav.map(e => (
      <Link to={e.to}>
        <h4
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
      <header className={!scrollDown ? "header_big" : "header_small"}>
        <Link to="/">
          <h2>ElsMix</h2>
        </Link>
        <div>{navBarTitles}</div>
      </header>
    );
  }
}
export default withRouter(NavBar);
