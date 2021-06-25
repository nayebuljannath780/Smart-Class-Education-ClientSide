import React from 'react';

const Review = (props) => {
    const { name, imageURL, price,} = props.review;
    return (
        <div className="col-md-4 mt-3 pt-3 ">
        <img style={{height:'150px'}} src={imageURL} alt=""/>
        <h5>Name : {name}</h5>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi perspiciatis magnam enim.</p>
         
      
       
    </div>
    );
};

export default Review;