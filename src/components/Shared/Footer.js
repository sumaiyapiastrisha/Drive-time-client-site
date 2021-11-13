import React from 'react';

const Footer = () => {


    return (


        <div className="bg-dark  text-white  pt-5 pb-4">
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-3 item">
                            <h3 className="text-danger text-start ps-3">Products</h3>
                            <ul className="text-start">
                                <h6>Yamaha</h6>
                                <h6>Suzuki</h6>
                                <h6>Honda</h6>
                                <h6>BMW</h6>
                                <h6>Ducati</h6>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-3 item">
                            <h3 className="text-danger text-start ps-4">About</h3>
                            <ul className="text-start">
                                <h6>Company</h6>
                                <h6>Team</h6>
                                <h6>Management</h6>
                            </ul>
                        </div>
                        <div class="col-md-6 item text">
                            <h3 className="text-danger">Drive Time</h3>
                            <p>Prefer to Ride to Your Destination on Two Wheels? Rent One of Our Safe and Durable Bikes.</p>
                        </div>

                    </div>
                    <p class="   text-danger ">Drive Time © 2021</p>
                </div>
            </footer>
        </div>



    );
};

export default Footer;