import React from 'react';

import Study from '../../images/study3.jpg'
import './Banner.css'


const Banner = () => {
    return (
        <main style={{ height: '400px' }} class="row d-flex align-items-center header-container ">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: '#3A4256' }}>Ask , Learn & Lead It   <br /> </h1>
                <p className="fw-bolder">With Better Score , Better Career & Ultimately by Building Better Nation With the power of Knowledge</p>

            </div>
            <div className="col-md-6">
                <img src={Study} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default Banner;