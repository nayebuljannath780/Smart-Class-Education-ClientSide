import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Service = (props) => {
    const { name, imageURL, price, _id } = props.service;
    const history = useHistory();
    const handleClick = (serviceId) => {
      const url = `/service/${serviceId}`;
      history.push(url);
    }
    return (

        
        <div className="col-md-4 mt-3 pt-3 ">
            <img style={{height:'150px'}} src={imageURL} alt=""/>
            <h5>Name : {name}</h5>
            <h5>Price : {price}</h5>
             
            {props.showButton && <Button onClick={() => handleClick(_id)} variant="warning">Get The Course</Button>}
           
        </div>
    );
};

export default Service;