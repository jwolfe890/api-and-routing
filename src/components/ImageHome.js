import React from "react";
import { Redirect } from "react-router-dom";

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
    return <div></div>;
  };

  goBack = () => {};

  render() {
    return (
      <div>
        <div>{this.displayImageContent()}</div>
      </div>
    );
  }
}

export default ImageHome;
