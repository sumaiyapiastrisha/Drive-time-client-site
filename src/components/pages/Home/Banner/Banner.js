import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'
{/* <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link> */ }

const Banner = () => {
    return (
        <div className="header">
            <h1 className="text-white text-center py-5 "> This is  <span className="text-danger  ">DRIVE TIME</span> </h1>
            <h4 className="text-secondary text-center ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea eum facere nam illo quod dolore odit est vero. Ducimus ipsa iusto ad ratione velit magnam pariatur facere consequuntur! Ipsum, placeat?</h4>
            <div className="my-5">
                <Link to="/allProducts">  <Button className=" btn btn-danger px-5 py-3  explore">Explore</Button></Link>

            </div>

        </div>
    );
};

export default Banner;