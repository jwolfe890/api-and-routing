import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function ImageCard(props) {
  return (
    <div>
      <Link to={{ pathname: `/images/${props.id}` }}>
        <img alt="giphy" src={props.link} />
      </Link>
    </div>
  );
}

export default ImageCard;
