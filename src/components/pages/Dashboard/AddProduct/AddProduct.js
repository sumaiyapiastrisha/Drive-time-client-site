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
    const bikeTypeRef = useRef();
    const brandRef = useRef();
    const modelRef = useRef();
    const yearRef = useRef();
    const conditionRef = useRef();
    const engineCapacityRef = useRef();
    const kilometersRunRef = useRef();

    //handle html form
    const handlehtmlForm = e => {
        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const description = desRef.current.value;
        const title = titleRef.current.value;
        const image = imgRef.current.value;
        const price = priceRef.current.value;


        // Additional fields
        const bikeType = bikeTypeRef.current.value;
        const brand = brandRef.current.value;
        const model = modelRef.current.value;
        const year = yearRef.current.value;
        const condition = conditionRef.current.value;
        const engineCapacity = engineCapacityRef.current.value;
        const kilometersRun = kilometersRunRef.current.value;

        const NewService = {
            name,
            email,
            description,
            title,
            image,
            price,
            bikeType,
            brand,
            model,
            year,
            condition,
            engineCapacity,
            kilometersRun,
        };

        // const NewService = { name: name, email: email, description: description, title: title, image: image, price: price }


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
                    <input className="mt-3 w-50 p-3" ref={desRef} type="text" id="name" name="lastname" placeholder="Service  Description.." /><br />
                    <input className="mt-3 w-50 p-3" ref={titleRef} required type="text" id="name" name="lastname" placeholder="  title (uppercase)" /><br />
                    <input className="mt-3 w-50 p-3" ref={priceRef} required type="text" id="name" name="lastname" placeholder="Enter price" /><br />
                    <input className="mt-3 w-50 p-3" ref={imgRef} required type="text" id="name" name="lastname" placeholder="Insert image link" /><br />

                    <input
                        className="mt-3 w-50 p-3"
                        ref={bikeTypeRef}
                        required
                        type="text"
                        placeholder="Bike Type"
                    /><br />
                    <input
                        className="mt-3 w-50 p-3"
                        ref={brandRef}
                        required
                        type="text"
                        placeholder="Brand"
                    /><br />
                    <input
                        className="mt-3 w-50 p-3"
                        ref={modelRef}
                        required
                        type="text"
                        placeholder="Model"
                    /><br />
                    <input
                        className="mt-3 w-50 p-3"
                        ref={yearRef}
                        required
                        type="text"
                        placeholder="Location"
                    /><br />
                    <input
                        className="mt-3 w-50 p-3"
                        ref={conditionRef}
                        required
                        type="text"
                        placeholder="Condition"
                    /><br />
                    <input
                        className="mt-3 w-50 p-3"
                        ref={engineCapacityRef}
                        required
                        type="text"
                        placeholder="Engine Capacity"
                    /><br />
                    <input
                        className="mt-3 w-50 p-3"
                        ref={kilometersRunRef}
                        required
                        type="text"
                        placeholder="Kilometers Run"
                    /><br />
                    <input className="mt-3 w-50 button border-0  rounded  fw-bold p-3" type="submit" value="Add product" />
                </form>
            </div>
        </Container>
    );
};

export default AddProduct;