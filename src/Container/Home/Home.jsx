import React, { Component } from "react";
import PropsDynamicPage from "../Pages/PropsDynamicPage/PropsDynamicPage"
import Product from "../Pages/Product/Product";
import LifeCycle from "../Pages/LifeCycle/LifeCycle";
import BlogPost from "../Pages/BlogPost/BlogPost"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Home.css';
import DetailPost from "../Pages/BlogPost/DetailPost/DetailPost";
class Home extends Component {
  state = {
    showComponent: true,
  };
  render() {
    return (
      <Router>
        <>
        <div className="navigation">
          <Link to="/" >Blog Post</Link>
          <Link to="/product" >Product</Link>
          <Link to="/lifecycle" >lifecycle</Link>
          <Link to="/dynamic" >Props dynamic</Link>
        </div>
          <Route path="/" exact component={BlogPost} />
          <Route path="/detail/:id" component={DetailPost} />
          <Route path="/product" component={Product} />
          <Route path="/lifecycle" component={LifeCycle} />
          <Route path="/dynamic" component={PropsDynamicPage} />
        </>
      </Router>
    );
  }
}

export default Home;
