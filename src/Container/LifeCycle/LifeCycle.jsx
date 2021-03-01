import React, { Component } from "react";
import './LifeCycle.css';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
        console.log('constructor')
    }

    // static getDerivedStateFromProps(props, state){
    //     console.log('getDerivedStateFromProps');
    //     return null

    // }
    componentDidMount () {
        console.log('componentDidMount');
        setTimeout (() => {
            this.setState({
                count: 2
            })
        }, 4000)

    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('shouldComponentUpdate');
    //     return true;

    // }
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log('getSnapshotBeforeUpdate');

    // }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');

    }
    componentWillMount() {
        console.log('componentWillMount');

    }
    render(){
        console.log('Render');
        return(
            <button className='btn'>Component Button {this.state.count}</button>
        )
    }
}

export default LifeCycle;