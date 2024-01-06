import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'

//banner
const Banner = () => {
    return (
        <div className="header">
            <h1 className="text-white text-center py-5 "> This is  DRIVE TIME</h1>
            <h4 className="text-white text-center  px-5 ">Welcome to Drive Time: Your Ultimate Destination for Old Bike Enthusiasts! </h4>
            <div className="my-5">
                <Link to="/products">  <Button className=" btn btn-danger px-5 py-3  explore">Explore</Button></Link>

            </div>

        </div>
    );
};

export default Banner;