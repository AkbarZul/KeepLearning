// import React from "react";
// const urlPoster = 'http://image.tmdb.org/t/p/w500';

// const Post = ({title, desc, img, overview}) => {
//   return (
//     <div className="post">
//       <div className="img-thumb">
//         <img src={urlPoster + img} alt="" />
//       </div>
//       <div className="content">
//         <p className="title">{title}</p>
//         <p className="desc">{desc}</p>
//         <p className="desc">{overview}</p>
//       </div>
//     </div>
//   );
// };

// Prawito
// import React from "react";

// const Post = ({title, desc, remove}) => {
//   return (
//     <div className="post">
//       <div className="img-thumb">
//         <img src='https://placeimg.com/640/480/tech' alt="" />
//       </div>
//       <div className="content">
//         <p className="title">{title}</p>
//         <p className="desc">{desc}</p>
//         <button className='remove' onClick={remove}>Remove</button>
//       </div>
//     </div>
//   );
// };

// export default Post;

import React from "react";

const Post = (props) => {
  return (
    <div className="post">
      <div className="img-thumb">
        <img src='https://placeimg.com/640/480/tech' alt="" />
      </div>
      <div className="content">
        {/* nah disini tinggal data. sesuai sama apa yg mau ditampilin */}
        <p className="title">{props.data.title}</p>
        <p className="desc">{props.data.body}</p>
        <button className='remove' onClick={() => props.remove(props.data.id)}>Remove</button>
      </div>
    </div>
  );
};

export default Post;
