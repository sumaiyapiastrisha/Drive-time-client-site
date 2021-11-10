import React from 'react';
import { Link } from 'react-router-dom';

const Products = (props) => {

    const { _id, title, image, price, description } = props.product;
    return (
        <div className="col service" >
            <div className="card h-100">
                <img src={image} class="card-img-top" alt={image} />
                <div className="card-body">
                    <h3 class="card-title text-danger">{title}</h3>
                    <p class="card-text fw-bold">Price  :  {price}</p>
                    <p class="card-text">{description}</p>

                </div>

                <Link to={`/bikes/${_id}`} >
                    <button className="btn btn-danger p-2 px-4 my-3">Purchase now</button>
                </Link>
            </div>
        </div>

    );

};

export default Products;