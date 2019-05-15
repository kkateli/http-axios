import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null
  };
  componentDidUpdate() {
    if (this.props.id) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)
      )
        axios
          .get("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
          .then(response => {
            this.setState({
              loadedPost: response.data
            });
          });
    }
  }

  clickDeleteHandler = (id) => {
    if (id) {
      axios
        .delete(
          "https://jsonplaceholder.typicode.com/posts/" +
            this.state.loadedPost.id
        )
        .then(function(response) {
          // handle success
          console.log(response);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    }
  };
  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.id) {
      post = <p>Loading...</p>;
    }

    if (this.state.loadedPost) {
      console.log(this.state.loadedPost); //works
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={()=>this.clickDeleteHandler(this.state.loadedPost.id)}>
              Delete
            </button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
