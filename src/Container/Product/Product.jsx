import React, { Component } from "react";
import './Product.css';
import CardProduct from "../CardProduct/CardProduct";

class Product extends Component {
    state = {
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render() {
        return (
            <>
            <div className="header">
                <div className="logo">
                    <img src="https://res.cloudinary.com/dkgk85inv/image/upload/v1614577230/rating_bv6jpf.png" alt=""/>
                </div>

                <div className="troley">
                    <img src="https://res.cloudinary.com/dkgk85inv/image/upload/v1614576714/empty-cart_dbfamt.png" alt=""/>
                    <div className="count">{this.state.order}</div>
                </div>
            </div>
            <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
            </>
        )
    }
}

export default Product;