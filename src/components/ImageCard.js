import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function ImageCard(props) {
  debugger;

  return (
    <div>
      <Link to={{ pathname: `/image/${props.id}` }}>
        <img alt="giphy" src={props.link} />
      </Link>
    </div>
  );
}

export default ImageCard;
