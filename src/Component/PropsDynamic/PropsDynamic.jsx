import React from 'react';
import './PropsDynamic.css'

// passing data props
const PropsDynamic = (props) => {
    return(
        <div className='wrapper'>
            <div className='img-thumb'>
                <img src='https://res.cloudinary.com/dkgk85inv/image/upload/v1610439092/hiclipart_34_yuxtfw.png' alt='' />
                <p className='time'>{props.time}</p>
            </div>
            <p className='title'>{props.tittle}</p>
            <p className='desc'>{props.desc}</p>
        </div>
    )
}

PropsDynamic.defaultProps = {
    time: "00.00",
    tittle: "Title here",
    desc: "0x ditonton"
}

export default PropsDynamic;