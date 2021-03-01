import React, { Component } from "react";
import Post from "../../Component/Post/Post";
import "./BlogPost.css";
import axios from 'axios';

class BlogPost extends Component {
  state = {
    post: [],
  };

  // read API use fetch
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((json) => {
//           this.setState({
//               post: json
//           })
//       });
//   }


  // read API use axios
  componentDidMount() {
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        //   console.log(res.data)
        this.setState({
            post: res.data
        })
      })
      .catch((err) => {
          console.log(err)
      })
  }
  render() {
    return (
      <>
        <p className="section-title">Blog post</p>
       {
           this.state.post.map(post => {
               return <Post key={post.id} title={post.title} desc={post.body} />
           })
       }
       
      </>
    );
  }
}

export default BlogPost;
