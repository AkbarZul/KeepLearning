import React, { useState, useEffect } from "react";
import Post from "../../../Component/Post/Post";
import "./BlogPost.css";
import axios from 'axios';

const blogPost = () =>  {
  const [post, setPost] = useState([])
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        const post = res.data
        setPost(post)
      })
      .catch((err) => {
          console.log(err)
      })
  }, [])
    return (
      <>
        <p className="section-title">Blog post</p>
       {
           post.map(post => {
               return <Post key={post.id} title={post.title} desc={post.body} />
           })
       }
       
      </>
    );
  }


export default blogPost;
