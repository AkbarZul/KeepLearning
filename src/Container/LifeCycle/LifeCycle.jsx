import React, { Component } from "react";
import "./LifeCycle.css";

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    console.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount");
    // setTimeout (() => {
    //     this.setState({
    //         count: 2
    //     })
    // }, 5000)
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillMount");
  }

  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    console.log("Render");
    return (
      <>
        <p>Life Cycle</p>
        <hr />
        <button className="btn" onClick={this.changeCount}>
          Component Button {this.state.count}
        </button>
      </>
    );
  }
}

export default LifeCycle;
