import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'
{/* <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link> */ }

const Banner = () => {
    return (
        <div className="header">
            <h1 className="text-white text-center py-5 "> This is  <span className="text-danger  ">DRIVE TIME</span> </h1>
            <h4 className="text-secondary text-center ">Customizing Harley-Davidson motorcycles since 1971! Family owned and operated for three generations with an unwavering passion for the industry. </h4>
            <div className="my-5">
                <Link to="/products">  <Button className=" btn btn-danger px-5 py-3  explore">Explore</Button></Link>

            </div>

        </div>
    );
};

export default Banner;