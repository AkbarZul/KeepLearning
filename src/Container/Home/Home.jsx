import React, { Component } from "react";
import PropsDynamicPage from "../Pages/PropsDynamicPage/PropsDynamicPage"
import Product from "../Pages/Product/Product";
import LifeCycle from "../Pages/LifeCycle/LifeCycle";
import BlogPost from "../Pages/BlogPost/BlogPost"
import { BrowserRouter, Route, Link } from "react-router-dom";
import './Home.css';
class Home extends Component {
  state = {
    showComponent: true,
  };
  render() {
    return (
      <BrowserRouter>
        <>
        <div className="navigation">
          <Link to="/" >Blog Post</Link>
          <Link to="/product" >Product</Link>
          <Link to="/lifecycle" >lifecycle</Link>
          <Link to="/dynamic" >Props dynamic</Link>
        </div>
          <Route path="/" exact component={BlogPost} />
          <Route path="/product" component={Product} />
          <Route path="/lifecycle" component={LifeCycle} />
          <Route path="/dynamic" component={PropsDynamicPage} />
        </>
      </BrowserRouter>
    );
  }
}

export default Home;
