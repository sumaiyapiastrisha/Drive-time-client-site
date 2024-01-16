import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'

//banner
const Banner = () => {
    return (
        <div className="header d-flex flex-direction-row">

            <div>
                <img style={{
                    width: '50%', // Set a different width inline
                    height: '100%',
                    position: 'absolute',
                    left: '-100%', /* Initially position the image outside the banner on the left */
                    animation: 'slideIn 1s ease-in-out forwards',
                    // Set a different height inline
                }} src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/10/h1-rev-img-1-1.png" alt="" />
            </div>
            <div style={{
                marginLeft: '50%',
            }}>
                <h1 className=" text-start pt-5 mt-5 " style={{ fontWeight: '1000' }}>   EVERYTHING</h1>
                <h1 className=" text-start  " style={{ fontWeight: '1000' }}>   DRIVE TIME</h1>
                <p className=" text-start  ">Welcome to Drive Time: Your Ultimate Destination for Old Bike Enthusiasts! </p>
                <div className="my-5 text-start">
                    <Link to="/products">  <Button className=" btn btn-danger px-5 py-3  explore">Explore  →</Button></Link>
                </div>


            </div>





        </div>
    );
};

export default Banner;