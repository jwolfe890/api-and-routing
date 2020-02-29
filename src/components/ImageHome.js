import React from "react";
import { Redirect } from "react-router-dom";
import Nav from "./Nav.js";

class ImageHome extends React.Component {
  state = {
    image: ""
  };

  componentDidMount() {
    this.getImage();
  }

  getImage = async query => {
    const api_call = await fetch(
      `https://api.giphy.com/v1/gifs/${this.props.match.params.id}?api_key=5d30D599o0h7uKemfq7wAdwLi9a78Gt3`
    );
    let data = await api_call.json();
    if (data) {
      this.setState({
        image: data
      });
    }
  };

  displayImageContent = () => {
    if (this.state.image) {
      return (
        <div>
          <div onClick={this.deleteImage}>ID PAGE</div>
          <div>{this.state.image.data.title}</div>
        </div>
      );
    } else return <div></div>;
  };

  goBack = () => {
    this.props.history.push({
      pathname: "/",
      state: { detail: "success" }
    });
  };

  render() {
    return (
      <div>
        <Nav />
        <div>
          <button onClick={this.goBack}>BACK</button>
          <div>IMAGE HOME COMPONENT</div>;
        </div>
        <div>{this.displayImageContent()}</div>
      </div>
    );
  }
}

export default ImageHome;
