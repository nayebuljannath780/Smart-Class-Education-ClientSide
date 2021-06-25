import React, { useEffect, useState } from 'react';
import AddService from '../AddService/AddService';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Featured from '../Featured/Featured';
import Footer from '../Footer/Footer';
import Review from '../Review/Review';
import Service from '../Service/Service';
import Header from '../Shared/Header/Header';


const Home = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('https://young-mesa-72827.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://young-mesa-72827.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="row mt-5">

            <Banner></Banner>

            <div className="text-center pt-4 mt-5">
                <h5 style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
                <h2>Program We Provide</h2>
            </div>

            {
                services.map(service => <Service

                    showButton={true}
                    service={service}></Service>)
            }

            <Featured></Featured>



            <div className="text-center">
                <h5 style={{ color: '#1CC7C1' }}>Testimonials</h5>
                <h1>What Our Student Say </h1>

            </div>
            {
                reviews.map(review => <Review review={review}></Review>)
            }


            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
};

export default Home;