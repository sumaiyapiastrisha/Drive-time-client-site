import React from 'react';
import useFetch from '../../../../hooks/useFetch';
import Products from './Products';

const AllProducts = () => {
    const [products, setProducts] = useFetch();
    return (
        <div>
            {products.length === 0 ? <div className="spinner-border text-danger text-center my-5 " role="status">
                <span class="visually-hidden">Loading...</span>
            </div> : <div className="my-5">

                <div>
                    <h1 className="my-5 pt-5   ">All bikes</h1>

                </div>

                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4  mx-5  topServices">
                    {

                        products.map(product => (
                            <Products
                                key={product._id}
                                product={product}>

                            </Products>
                        )
                        )
                    }
                </div>
            </div>}
        </div>
    );
};

export default AllProducts;