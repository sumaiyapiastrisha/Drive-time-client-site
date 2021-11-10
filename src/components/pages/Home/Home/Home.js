import React from 'react';
import useFetch from '../../../../hooks/useFetch';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';



const Home = () => {
    const [products, setProducts] = useFetch();
    const sliceProducts = products.slice(0, 6)
    return (

        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                {products.length === 0 ? <div className="spinner-border text-danger text-center my-5 " role="status">
                    <span class="visually-hidden">Loading...</span>
                </div> : <div className="my-5">

                    <div>
                        <h1 className="my-5 pt-5 text-danger">Top Bikes</h1>

                    </div>

                    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4  mx-5  topServices">
                        {

                            sliceProducts.map(product => (
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
        </div>

    );
};

export default Home;