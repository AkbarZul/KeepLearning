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
    formBlogPost: {
      id: 1,
      title: "",
      body: "",
      userId: 1,
    },
    errMsg: '',
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
  getApi = () => {
    axios
      .get("http://localhost:3004/posts?_sort=id&_order=desc")
      .then((res) => {
        this.setState({
          post: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  postDataToApi = () => {
    axios
      .post("http://localhost:3004/posts", this.state.formBlogPost)
      .then((res) => {
        console.log("ADD BERHASIL", res);
        this.getApi();
      }).catch(({response}) => {
        if(response.status === 500) {
          console.log("ini error 500");
          this.setState({
            errMsg: "Title/body harus diisi"
          })
        }
        // console.log("ini error", response);
      })
  };

  // data berfungsi posisi/objek/id mana yg perlu kita remove
  handleRemove = (data) => {
    console.log(data);
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      console.log("berhasil delete", res);
      // ini biar langsung get yg udh didelete tanpa harus refresh
      this.getApi();
    });
  };

  // onChange adalah jika ada perubahan yg ada di form tersebut kita ingin melakukan action apa
  // event menangkap trigger dari form
  handleFormChange = (event) => {
    // console.log("ini Change", event.target)
    // ini buat ngopi state awal si formBlogPost
    // karena kalau gak diginiin nanti malah ke isi semua dan berubah jadi string
    // formBlogPost diatas itu object
    let formBlogPostNew = { ...this.state.formBlogPost };
    let timeStamp = new Date().getTime();
    formBlogPostNew["id"] = timeStamp;
    // menarget name
    // dan mengganti value
    formBlogPostNew[event.target.name] = event.target.value;
    this.setState({
      formBlogPost: formBlogPostNew,
    });
  };

  handleSubmit = () => {
    // console.log(this.state.formBlogPost);
    this.postDataToApi();
  };

  componentDidMount() {
    this.getApi();
  }
  render() {
    const { post } = this.state;
    return (
      <>
        <p className="section-title">Blog post</p>
        <div className="form-add-post">
          <label htmlFor="title">
            {this.state.errMsg}
            <input
              type="text"
              name="title"
              placeholder="add title"
              onChange={this.handleFormChange}
            />
            <label htmlFor="body">Blog content</label>
            <textarea
              name="body"
              id="body"
              cols="30"
              rows="10"
              placeholder="add blog content"
              onChange={this.handleFormChange}
            ></textarea>
            <button className="btn-submit" onClick={this.handleSubmit}>
              Simpan
            </button>
          </label>
        </div>
        {post.map((post) => {
          // bisa diginiin
          // si data ngebawa hasil map si post
          return <Post key={post.id} data={post} remove={this.handleRemove} />;
          // return <Post key={post.id} title={props.title} desc={props.body} remove={this.handleRemove} />
        })}
      </>
    );
  }
}

export default BlogPost;
