import React from 'react';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';




const ShowAllreview = (props) => {

   
    const { name, email, rating, description } = props.review
    console.log(name)
    return (
        <div className="col service  pt-3" >
            <div className="card h-100 border-0 shadow">

                <div className="card-body text-start">


                    <p class="card-text fw-bold ">{name}</p>

                    <Box
                        sx={{
                            '& > legend': { mt: 2 },
                        }}
                    >

                        <Rating name="read-only" value={rating} readOnly />

                    </Box>
                    <p class="card-text ">{description}</p>



                </div>

            </div>
        </div>

    );
};

export default ShowAllreview;