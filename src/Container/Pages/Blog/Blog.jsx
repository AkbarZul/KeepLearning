import React, { useState, useEffect } from "react";
import Post from "../../../Component/Post/Post";
import { Container, Row, Col } from "react-bootstrap";
import "./Blog.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import nextArrow from '../../../Assets/nextArrow.png';
import prevArrow from "../../../Assets/prevArrow.png";

const Blog = () =>  {
  const [post, setPost] = useState([])
  const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=2246337a80611cc7c7330ca5156842f5&language=en-US&page=1";
  const getPost = () => {
    axios.get(url)
    .then((res) => {
      const Post = res.data.results
      setPost(Post)
      console.log('ini post', Post);
    })
    .catch((err) => {
        console.log('ini error', err)
    })
  }
  useEffect(() => {
      getPost()
  }, [])
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "white",
          padding: "1.5vw",
          borderRadius: "50%",
          marginRight: "3vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={onClick}
      >
        <img src={nextArrow} alt="" className="topslider-arrow" />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
        //   background: "white",
          marginLeft: "3vw",
          zIndex: 1,
          padding: "1.5vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
        }}
        onClick={onClick}
      >
        <img src={prevArrow} alt="" className="topslider-arrow" />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        }
      }
    ]
  };
    return (
      <>
      <Container>
        <p className="section-title">Blog post</p>
        <Slider {...settings}>
        {post.map(({ id, title, original_language, poster_path, overview }) => {
          return (
            <Post
              key={id}
              title={title}
              desc={original_language}
              img={poster_path}
              overview={overview}
            />
          );
        })}
        </Slider>
        </Container>
      </>
    );
  }


export default Blog;
