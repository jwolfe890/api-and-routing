import React from "react";
// import { BrowserRouter as Router, Link } from "react-router-dom";
import ImageCard from "./ImageCard";

class Images extends React.Component {
  renderImageContent() {
    let imageFinal = "";
    if (this.props.images && this.props.images.data) {
      imageFinal = this.props.images.data.map(image => {
        return (
          <ImageCard id={image.id} link={image.images.fixed_height_still.url} />
        );
      });
    }
    return imageFinal;
  }

  render() {
    return (
      <div>
        <div className="container">{this.renderImageContent()}</div>
      </div>
    );
  }
}

export default Images;
