import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { Box, Rating } from '@mui/material';
import Link from 'react-router-dom'

const ConfirmOrder = (props) => {
    const { title, image, price, description } = props.service;


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
        const orderdItem = { name: name, email: email, title, price, image, description, address: address, phone: phone, status }

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



            {/* <div class="row g-0  my-5 py-5  mx-5 ">


                <div class="col-md-6 text-start ">
                    <img src={image} class=" rounded-start img-fluid" alt="" />
                </div>
                <div class="col-md-6">
                    <div class="card-body text-start  py-5 px-5">

                        <h1 class="card-title text-danger pb-4  fw-bold">{title}</h1>
                        <h5 class="card-text   fw-bold">{price}</h5>
                        <p class="card-text">{description}</p>
                        <p class="card-text">Client Email:  {user.email}</p>
                        <p class="card-text">Client Name:  {user.displayName}</p> */}
            <div className=" " >


                <div class="container text-start">
                    <div class="d-flex justify-content-center row">
                        <div class="col-md-10">

                            <div class="row p-2 bg-white border rounded mt-2">
                                <div class="col-md-3 mt-1 "><img class="img-fluid img-responsive rounded product-image" src={image} /></div>
                                <div class="col-md-6 mt-1">
                                    <h5>{title}</h5>
                                    <div><Box
                                        sx={{
                                            '& > legend': { mt: 2 },
                                        }}
                                    >



                                        <Rating name="read-only" value={5} readOnly />

                                    </Box></div>
                                    <div class="mt-1 mb-1 spec-1"><span>100% cotton</span><span class="dot"></span><span>Light weight</span><span class="dot"></span><span>Best finish<br /></span></div>
                                    <div class="mt-1 mb-1 spec-1"><span>Unique design</span><span class="dot"></span><span>For men</span><span class="dot"></span><span>Casual<br /></span></div>
                                    <p class="text-justify text-truncate para mb-0">{description}<br /><br /></p>
                                </div>
                                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                                    <div class="d-flex flex-row align-items-center">
                                        <h4 class="mr-1">{price} Tk</h4>
                                        {/* <span class="strike-text">$20.99</span> */}
                                    </div>
                                    <h6 class="text-success">Free shipping</h6>
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
                {/* </div> */}
                {/* <div className="card  border-0 , shadow h-100">
    <img src={image} class="card-img-top  image" alt={image} />
    <div className="card-body">
        <h3 class="card-title my-3">{title}</h3>

        <div className="d-flex justify-content-around">
            <div> <p class="card-text fw-bold">Price  :  {price}</p></div>
            <div><Box
                sx={{
                    '& > legend': { mt: 2 },
                }}
            >



                <Rating name="read-only" value={5} readOnly />

            </Box></div>
        </div>


        <p class="card-text">{description}</p>

    </div>

    <Link to={`/bikes/${_id}`} >
        <button className="btn  button btn-warning p-2 px-4  mb-4">Purchase now</button>
    </Link>
</div> */}
            </div>
            <form onSubmit={handlehtmlForm}>

                <input className="mt-3 p-3" ref={addressRef} required type="text" id="address" name="lastname" placeholder="Address" /><br />
                <input className="mt-3 p-3" ref={phoneRef} required type="number" id="phone" name="lastname" placeholder="Phone number" /><br />
                <input className="btn btn-danger p-2 px-4 my-3" type="submit" value="Confirm Order" />
            </form>

        </div>
        // </div >

        // </div >

        // </div >


    );

};

export default ConfirmOrder;