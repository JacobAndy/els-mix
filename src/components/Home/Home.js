import React, { Component } from "react";
import "./style/Home.css";
import Typist from "react-typist";

class Home extends Component {
  state = {
    currentImage: this.props.photos[0],
    currentIndex: 1
  };
  componentDidMount() {
    let { photos } = this.props;
    this.interval = setInterval(() => {
      this.setState({
        currentImage: photos[this.state.currentIndex],
        currentIndex:
          this.state.currentIndex === photos.length - 1
            ? 0
            : ++this.state.currentIndex
      });
    }, 3500);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    let { currentImage } = this.state;
    let { photos } = this.props;
    let dotLocator = photos.map((e, i) => {
      if (photos.indexOf(currentImage) === i) {
        return <i key={e} className="fas fa-circle" />;
      } else {
        return (
          <i
            key={e}
            onClick={() => {
              clearInterval(this.interval);
              this.setState({
                currentImage: photos[i],
                currentIndex: i === photos.length - 1 ? 0 : ++i
              });
              this.interval = setInterval(() => {
                this.setState({
                  currentImage: photos[this.state.currentIndex],
                  currentIndex:
                    this.state.currentIndex === photos.length - 1
                      ? 0
                      : ++this.state.currentIndex
                });
              }, 3500);
            }}
            className="far fa-circle"
          />
        );
      }
    });
    return (
      <div className="homepage">
        <section
          className="homepage__nuts"
          style={{ backgroundImage: `url(${currentImage})` }}
        >
          <div className="homepage__nuts__content">
            <div className="homepage__nuts__content__intro">
              <h4 style={{ color: "white" }}>
                The Industry's leading
                <Typist>
                  build your own treat!
                  <Typist.Backspace count={21} delay={2000} />
                  nut and goodies mix!
                  <Typist.Backspace count={20} delay={2000} />
                  snack!
                </Typist>
              </h4>
            </div>
            <div className="homepage__nuts__content__dots">{dotLocator}</div>
          </div>
        </section>
      </div>
    );
  }
}
export default Home;
