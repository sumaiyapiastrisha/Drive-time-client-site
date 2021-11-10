import React from 'react';
import useFetch from '../../../../hooks/useFetch.js';
import ShowAllProducts from './ShowAllProducts.js'

const ManageAllProducts = () => {
    const [products, setProducts] = useFetch();
    return (

        //send data to showAllOrders component to show  all orders
        <div className="orderss px-5">

            <div>
                <h1 className="py-5  text-danger">MANAGE ALL ORDERS</h1>
            </div>

            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 topServices">
                {

                    products.map(orders => (
                        <ShowAllProducts

                            key={orders._id}
                            product={orders}>


                        </ShowAllProducts>


                    )
                    )
                }
            </div>
        </div>


    );
};

export default ManageAllProducts;