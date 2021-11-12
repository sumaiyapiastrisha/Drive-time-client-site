import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
const Review = () => {
    const [value, setValue] = React.useState(2);
    const { user } = useAuth()
    const nameRef = useRef();
    const emailRef = useRef();
    const desRef = useRef();



    //handle html form
    const handlehtmlForm = e => {
        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const description = desRef.current.value;
        const rating = value;

        const NewReview = { name: name, email: email, description: description, rating: rating }


        // fetch and post
        fetch('https://peaceful-hollows-15689.herokuapp.com/review', {
            method: 'POST',

            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(NewReview)
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
                <h2 className="">Please Add New Review</h2>
                <form onSubmit={handlehtmlForm}>
                    <input className="mt-3 w-50 p-3" ref={nameRef} type="text" required placeholder="Full name" value={user.displayName} /><br />
                    <input className="mt-3 w-50 p-3" ref={emailRef} type="text" required placeholder="Type email or username" value={user.email} /><br />
                    <input className="mt-3 w-50 p-3" ref={desRef} required type="text" id="name" name="lastname" placeholder="Service  Description.." /><br />
                    <Box
                        sx={{
                            '& > legend': { mt: 2 },
                        }}
                    >
                        <Typography component="legend">Controlled</Typography>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />


                    </Box>

                    <input className="mt-3 w-50 button border-0  rounded  fw-bold p-3" type="submit" value="Add Review" />
                </form>
            </div>
        </Container>
    );
};

export default Review;