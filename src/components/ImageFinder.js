import React from "react";
// import Articles from "./Articles.js";

class ImageFinder extends React.Component {
  state = {
    articleData: ""
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
    return <div></div>;
  }
}

export default ImageFinder;
