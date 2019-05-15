import React, { Component } from "react";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import axios from "axios";
import "./Blog.css";

class Blog extends Component {
    state = {
        posts: [],
        postId: null,
        loadedData: null
    };
    //Ajax calls
    componentDidMount() {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                const postList = response.data.slice(0, 4);
                this.setState({
                    posts: postList
                });
            });
    }

    clickPostHandler = id => {
        this.setState({
            postId: id
        });
        if (this.state.postId) {
            axios
                .get(
                    "https://jsonplaceholder.typicode.com/posts/" +
                        this.state.postId
                )
                .then(response => {
                    this.setState({
                        loadedData: response.data
                    });
               });
        }
    };

    render() {
        const posts = this.state.posts.map(post => {
            return (
                <Post
                    key={post.id}
                    title={post.title}
                    author="Kate"
                    clickPost={() => this.clickPostHandler(post.id)}
                />
            );
        });
        return (
            <div>
                <section className="Posts"> {posts} </section>{" "}
                <section>
                    <FullPost
                        id={this.state.postId}
                        loadedData={this.state.loadedData}
                    />{" "}
                </section>{" "}
                <section>
                    <NewPost />
                </section>{" "}
            </div>
        );
    }
}

export default Blog;
