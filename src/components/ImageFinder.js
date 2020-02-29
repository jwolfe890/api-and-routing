import React from "react";
import Images from "./Images";
import Nav from "./Nav.js";

class ImageFinder extends React.Component {
  state = {
    imageData: []
  };

  getImages = async query => {
    const api_call = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=5d30D599o0h7uKemfq7wAdwLi9a78Gt3&q=astronomy`
    );
    let data = await api_call.json();

    if (data) {
      this.setState({
        imageData: data
      });
    }
  };

  render() {
    debugger;

    return (
      <div>
        <Nav />
        <h1>IMAGE FINDER</h1>
        <button onClick={this.getImages}>GET IMAGES</button>
        <Images images={this.state.imageData} />
      </div>
    );
  }
}

export default ImageFinder;
