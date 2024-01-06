import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';

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


            <div class="row g-0  my-5 py-5  mx-5 ">


                <div class="col-md-6 ">
                    <img src={image} class=" rounded-start img-fluid" alt="" />
                </div>
                <div class="col-md-6">
                    <div class="card-body   py-5 px-5">

                        <h1 class="card-title text-danger pb-4  fw-bold">{title}</h1>
                        <h5 class="card-text   fw-bold">{price}</h5>
                        <p class="card-text">{description}</p>
                        <p class="card-text">Client Email:  {user.email}</p>
                        <p class="card-text">Client Name:  {user.displayName}</p>
                        <form onSubmit={handlehtmlForm}>

                            <input className="mt-3 p-3" ref={addressRef} required type="text" id="address" name="lastname" placeholder="Address" /><br />
                            <input className="mt-3 p-3" ref={phoneRef} required type="number" id="phone" name="lastname" placeholder="Phone number" /><br />
                            <input className="btn btn-danger p-2 px-4 my-3" type="submit" value="Confirm Order" />
                        </form>

                    </div>
                </div>

            </div>

        </div>


    );

};

export default ConfirmOrder;