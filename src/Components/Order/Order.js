import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import './Order.css'
import ProcessPayment from './ProcessPayment/ProcessPayment';

const Order = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { register, handleSubmit, watch, errors } = useForm();
  const [shippingData, setShippingData] = useState(null);



  const onSubmit = data => {
    setShippingData(data);
  };
  const handlePaymentSuccess = paymentId => {

    const orderDetail = {
      ...loggedInUser,


      paymentId,
      orderTime: new Date()
    };

    fetch('https://young-mesa-72827.herokuapp.com/addOrder', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(orderDetail)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          alert('Order Successful');
        }
      })


  }

  return (
    <div className="row">
      <div style={{ display: shippingData ? 'none' : 'block' }} className="col-md-6">
        <h1>User Information</h1>
        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
          <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your name" />
          {errors.name && <span className="error">Name is required</span>}
          <br />
          <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
          {errors.email && <span className="error">Email is required</span>}
          <br />
          <input name="address" ref={register({ required: true })} placeholder="Your Address" />
          {errors.address && <span className="error">Address is required</span>}
          <br />
          <input name="phone" ref={register({ required: true })} placeholder="Your phone number" />
          {errors.phone && <span className="error">Phone Number is required</span>}

          <input type="submit" />
        </form>
      </div>
      <div style={{ display: shippingData ? 'block' : 'none' }} className="col-md-6">
        <h2>Please pay For your course</h2>
        <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
      </div>
    </div>

  );
};

export default Order;