import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


//show all bikes
const Products = (props) => {
    const [value, setValue] = React.useState(2);
    const { _id, title, image, price, description } = props.product;
    return (
        <div className="col service" >
            <div className="card  border-0 , shadow h-100">
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
            </div>
        </div>

    );

};

export default Products;