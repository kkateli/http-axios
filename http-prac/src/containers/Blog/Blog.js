import React, { Component } from "react";
import "./Blog.css";
import Posts from "../Blog/Posts/Posts";
import {Route, NavLink} from "react-router-dom";
import FullPost from "../Blog/FullPost/FullPost";
import NewPost from "../Blog/NewPost/NewPost";

class Blog extends Component {
  

  render() {
    
    return (
      
          <div className="Blog">
            <header>
              <nav>
                <ul>
                  <li>
                  {/* to taks an object */}
                    <NavLink to={{pathname:"/"}}>Home</NavLink> 
                  </li>
                  <li>
                    <NavLink to={{pathname:"/new-post"}}>New Post</NavLink>
                  </li>
                  <li>
                      <NavLink to={{pathname:"/full-post"}}>Full Post</NavLink>
                  </li>
                </ul>
              </nav>
            </header>
            
            {/* <Route path = "/new-post" exact render = {()=><h1>Home1</h1>}/> */}
            <Route path="/" exact component={Posts}  />
            <Route path="/new-post" exact component ={NewPost} />
            <Route path="/full-post" exact component = {FullPost}/>

          </div>
        
        
      
    );
  }
}

export default Blog;
