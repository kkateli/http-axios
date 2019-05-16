import React, { Component } from "react";
import Post from "../../../components/Post/Post";

import axios from "axios";
import "./Post.css";
import FullPost from "../FullPost/FullPost";
import { Link } from "react-router-dom";

class Posts extends Component {
  state = {
    posts: [],
    postId: null,
    loadedData: null
  };
  //Ajax calls
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      const postList = response.data.slice(0, 4);
      this.setState({
        posts: postList
      });
    });
  }

  //when button is clicked, state.postId got id info
  // clickPostHandler = () => {
    
  // };

  render() {
    const posts = this.state.posts.map(post => {
      return (
        <Link to={"/" + post.id} key={post.id}>
          <Post
            title={post.title}
            author="Kate"
            clickPost={this.clickPostHandler}
          />
        </Link>
      );
    });
    return (
      <div>
        <section className="Posts"> {posts} </section>{" "}
        {/* <FullPost id={this.state.postId} loadedData={this.state.loadedData} /> */}
      </div>
    );
  }
}
export default Posts;
