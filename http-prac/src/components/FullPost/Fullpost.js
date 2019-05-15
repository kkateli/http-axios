import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  
  
  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.id) {
      post = <p>Loading...</p>;
    }
    if (this.props.loadedData) {
        console.log(this.props.loadedData);
      post = (
        <div className="FullPost">
          <h1>{this.props.loadedData.title}</h1>
          <p>{this.props.loadedData.body}</p>
          <div className="Edit">
            <button className="Delete">Delete</button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
