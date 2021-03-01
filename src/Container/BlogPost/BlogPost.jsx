import React, { Component } from "react";
import Post from "../../Component/Post/Post";
import "./BlogPost.css";

class BlogPost extends Component {
  state = {
    post: [],
  };

  // read API use fetch
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
          this.setState({
              post: json
          })
      });
  }
  render() {
    return (
      <>
        <p className="section-title">Blog post</p>
       {
           this.state.post.map(post => {
               return <Post title={post.title} desc={post.body} />
           })
       }
       
      </>
    );
  }
}

export default BlogPost;
