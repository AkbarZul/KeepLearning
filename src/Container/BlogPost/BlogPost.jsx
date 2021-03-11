// import React, { Component } from "react";
// import Post from "../../Component/Post/Post";
// import "./BlogPost.css";
// import axios from "axios";
// const url =
//   "https://api.themoviedb.org/3/movie/top_rated?api_key=2246337a80611cc7c7330ca5156842f5&language=en-US&page=1";

// class BlogPost extends Component {
//   state = {
//     post: [],
//   };

//   // read API use fetch
//   //   componentDidMount() {
//   //     fetch("https://jsonplaceholder.typicode.com/posts")
//   //       .then((response) => response.json())
//   //       .then((json) => {
//   //           this.setState({
//   //               post: json
//   //           })
//   //       });
//   //   }

//   // read API use axios
//   componentDidMount() {
//     axios
//       .get(url)
//       .then((res) => {
//         console.log(res.data.results);
//         this.setState({
//           post: res.data.results,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//   render() {
//     const { post } = this.state;
//     return (
//       <>
//         <p className="section-title">Blog post</p>
//         {post.map(({ id, title, original_language, poster_path, overview }) => {
//           return (
//             <Post
//               key={id}
//               title={title}
//               desc={original_language}
//               img={poster_path}
//               overview={overview}
//             />
//           );
//         })}
//       </>
//     );
//   }
// }

// export default BlogPost;

// Prawito
import React, { Component } from "react";
import Post from "../../Component/Post/Post";
import "./BlogPost.css";
import axios from "axios";

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
    axios
      .get("http://localhost:3004/posts")
      .then((res) => {
        console.log(res.data);
        this.setState({
          post: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const {post} = this.state
    return(
      <>
      <p className="section-title">Blog post</p>
      {
        post.map((post => {
          return <Post key={post.id} title={post.title} desc={post.body} />
        }))
      }
      </>
    )
  }
}

export default BlogPost;
