import React, { Component } from "react";
import Counter from './Counter';

class CardProduct extends Component {
    render() {
        return (
            <>
            <div className="card">
                <div className='img-thumb-prod'>
                    <img src="https://res.cloudinary.com/dkgk85inv/image/upload/v1610439092/hiclipart_34_yuxtfw.png" alt=""/>
                </div>
                <p className='product-title'>Daging Sapi Local</p>
                <p className='product-price'>Rp. 50.000</p>
               <Counter onCounterChange={(value) => this.props.onCounterChange(value)} />
            </div>
            </>
        )
    }
}

export default CardProduct;