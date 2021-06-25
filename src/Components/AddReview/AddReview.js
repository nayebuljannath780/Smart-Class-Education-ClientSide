import React, { useState } from 'react';
import { useForm } from "react-hook-form";

import axios from 'axios';


const AddReview = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const [imageURL, setImageURL] = useState(null);
  const onSubmit = data => {

    const serviceData = {
      name: data.name,
      price: data.price,
      imageURL: imageURL
    };
    const url = `https://young-mesa-72827.herokuapp.com/addReview`;


    fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(serviceData)
    })
      .then(res => console.log(console.log('server side response', res)))


  };


  const handleImageUpload = event => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set('key', '177706c55ddb646faa3a47e706bb6e03');
    imageData.append('image', event.target.files[0]);
    axios.post('https://api.imgbb.com/1/upload',
      imageData
    )
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  return (
    <div >
      <h1>Add Your Review</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

        <input name="name" defaultValue="  name" ref={register} />
        <br />
        <input name="exampleRequired" type="file" onChange={handleImageUpload} />
        <br />



        <input type="submit" />
      </form>
    </div>
  );
};

export default AddReview;