import React, { Component } from "react";
import "./style/Home.css";

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
                // this.setState({
                //   currentImage: photos[this.state.currentIndex],
                //   currentIndex:
                //     this.state.currentIndex === photos.length - 1
                //       ? 0
                //       : ++this.state.currentIndex
                // });
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
          <div className="homepage__nuts__dots">{dotLocator}</div>
        </section>

        <h2>{this.props.page}</h2>
      </div>
    );
  }
}
export default Home;
