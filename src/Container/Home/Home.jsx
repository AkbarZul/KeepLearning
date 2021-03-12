import React, { Component } from "react";
import PropsDynamic from "../../Component/PropsDynamic/PropsDynamic";
import Product from "../Product/Product";
import LifeCycle from "../LifeCycle/LifeCycle";
import BlogPost from "../BlogPost/BlogPost";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './Home.css';
class Home extends Component {
  state = {
    showComponent: true,
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     showComponent: false,
    //   })
    // }, 15000)
  }
  render() {
    return (
      <BrowserRouter>
        {/* <>
          <p>Refresh Materi Props</p>
          <hr />
          <PropsDynamic
            time="08.00"
            tittle="Tutorial cuci sepatu - Bagian 1"
            desc="2x ditonton"
          />
          <PropsDynamic
            time="09.00"
            tittle="Tutorial cuci sepatu - Bagian 2"
            desc="3x ditonton"
          />
          <PropsDynamic
            time="10.00"
            tittle="Tutorial cuci sepatu - Bagian 3"
            desc="1x ditonton"
          />
          <PropsDynamic
            time="15.00"
            tittle="Tutorial cuci sepatu - Bagian 4"
            desc="5x ditonton"
          />
          <PropsDynamic />

          <p>Counter</p>
          <hr />
          <Product />

          <p>Life Cycle</p>
          <hr />
          {this.state.showComponent ? <LifeCycle /> : null}

          <p>Blog Post</p>
          <hr />
          <BlogPost />
        </> */}
        <>
        <div className="navigation">
          <Link to="/" >Blog Post</Link>
          <Link to="/product" >Product</Link>
          <Link to="/lifecycle" >lifecycle</Link>
        </div>
          <Route path="/" exact component={BlogPost} />
          <Route path="/product" component={Product} />
          <Route path="/lifecycle" component={LifeCycle} />
        </>
      </BrowserRouter>
    );
  }
}

export default Home;
