import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ImageCard from "./ImageCard";

class Images extends React.Component {
  renderImageContent() {}

  render() {
    return (
      <div>
        <div className="container">{this.renderImageContent()}</div>
      </div>
    );
  }
}

export default Images;
