import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { Box, Rating } from '@mui/material';
import Link from 'react-router-dom'
import './ConfirmOrder.css'

const ConfirmOrder = (props) => {
    const { title, image, price, condition, description, address, engineCapacity, kilometersRun, brand, model } = props.service;


    const { user } = useAuth()
    const addressRef = useRef();
    const phoneRef = useRef();
    const history = useHistory();

    // post data to allOrders databaseCollection 
    const handlehtmlForm = e => {

        const email = user.email;
        const name = user.displayName;
        const address = addressRef.current.value;
        const phone = phoneRef.current.value;

        const status = "pending";
        const orderdItem = { name: name, email: email, title, price, image, description, address: address, phone: phone, status, }

        fetch('http://localhost:5000/orderdItem', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderdItem)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('We Successfully added your collection on our database.');

                }
                history.push('/')
                e.target.reset()
            })


        e.preventDefault()
    }



    // order confirmation
    return (
        <div className=" confirmOrder" >


            <div className='p-top'>
                <h3 className='pt-5 fw-bold'>Complete your purchase</h3>
            </div>

            <div className=" " >


                <div class="container p-card text-start">
                    <div class="d-flex justify-content-center row">
                        <div class="col-md-10">

                            <div class="row p-2 bg-white border rounded mt-2">
                                <div class="col-md-3 mt-1 "><img class=" p-img img-fluid img-responsive rounded product-image" src={image} /></div>
                                <div class="col-md-6 mt-1">
                                    <h5>{title}</h5>
                                    <div><Box
                                        sx={{
                                            '& > legend': { mt: 2 },
                                        }}
                                    >



                                        <Rating name="read-only" value={5} readOnly />

                                    </Box></div>
                                    <div class="mt-1 mb-1 spec-1"><span>{model} </span><span class="dot"></span><span>{engineCapacity}</span><span class="dot"></span><span>{brand}<br /></span></div>
                                    <div class="mt-1 mb-1 spec-1"><span>{condition}</span><span class="dot"></span><span>{kilometersRun} kilometers run</span><span class="dot"></span><span>{address}<br /></span></div>
                                    <p class="text-justify  para mb-0">{description}<br /><br /></p>
                                    {/* <p class="text-justify  para mb-0">{description}<br /><br /></p> */}
                                    {/* text-truncate */}
                                </div>
                                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                                    <div class="d-flex flex-row align-items-center">
                                        <h4 class="mr-1"> Tk {price}</h4>
                                        {/* <span class="strike-text">$20.99</span> */}
                                    </div>
                                    <h6 class="text-success"></h6>
                                    <div class="d-flex flex-column ">
                                        {/* <Link to={`/bikes/${_id}`} className='mt-4' >
                                            <button className="btn  button btn-warning p-2 pe-5 px-4  mb-4">See details</button>
                                        </Link> */}
                                        {/* <Link to={`/bikes/${_id}`} >
                            <button className="btn  button btn-warning p-2 px-4  mb-4">Purchase now</button>
                        </Link> */}
                                        {/* <button class="btn btn-primary btn-sm" type="button">Details</button><button class="btn btn-outline-primary btn-sm mt-2" type="button">Add to wishlist</button> */}
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
            <form className='p-form' onSubmit={handlehtmlForm}>

                <input className="mt-3 p-2" ref={addressRef} required type="text" id="address" name="lastname" placeholder="Address" /><br />
                <input className="mt-3 p-2" ref={phoneRef} required type="number" id="phone" name="lastname" placeholder="Phone number" /><br />
                <input className="btn btn-danger rounded  p-2 px-4 my-3" type="submit" value="Confirm Order" />
            </form>

        </div>
        // </div >

        // </div >

        // </div >


    );

};

export default ConfirmOrder;