import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';
import './Addproduct.css'

const AddProduct = () => {
    const { user } = useAuth()
    const nameRef = useRef();
    const emailRef = useRef();
    const desRef = useRef();
    const titleRef = useRef();
    const imgRef = useRef();
    const priceRef = useRef();


    //handle html form
    const handlehtmlForm = e => {
        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const description = desRef.current.value;
        const title = titleRef.current.value;
        const image = imgRef.current.value;
        const price = priceRef.current.value;

        const NewService = { name: name, email: email, description: description, title: title, image: image, price: price }


        // fetch and post
        fetch('http://localhost:5000/bikes', {
            method: 'POST',

            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(NewService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('We Successfully added your collection on our database.');

                }
                e.target.reset()
            })


        e.preventDefault()
    }



    return (
        // form container
        <Container>
            <div className="font   py-5 register-services  w-100">
                <h2 className="">Please Add New Product</h2>
                <form onSubmit={handlehtmlForm}>
                    <input className="mt-3 w-50 p-3" ref={nameRef} type="text" required placeholder="Full name" value={user.displayName} /><br />
                    <input className="mt-3 w-50 p-3" ref={emailRef} type="text" required placeholder="Type email or username" value={user.email} /><br />
                    <input className="mt-3 w-50 p-3" ref={desRef} required type="text" id="name" name="lastname" placeholder="Service  Description.." /><br />
                    <input className="mt-3 w-50 p-3" ref={titleRef} required type="text" id="name" name="lastname" placeholder="  title (uppercase)" /><br />
                    <input className="mt-3 w-50 p-3" ref={priceRef} required type="text" id="name" name="lastname" placeholder="Enter price" /><br />
                    <input className="mt-3 w-50 p-3" ref={imgRef} required type="text" id="name" name="lastname" placeholder="Insert image link" /><br />
                    <input className="mt-3 w-50 button border-0  rounded  fw-bold p-3" type="submit" value="Add product" />
                </form>
            </div>
        </Container>
    );
};

export default AddProduct;