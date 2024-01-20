import React, { useState } from 'react';
import useFetch from '../../../../hooks/useFetch';
import Products from './Products';

const AllProducts = () => {
    const [products, setProducts] = useFetch();
    const [searchTerm, setSearchTerm] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [location, setLocation] = useState('');
    // Ensure products is not undefined before applying the filter
    const filteredProducts = (products || []).filter((product) => {
        const nameMatch =
            product?.title?.toLowerCase().includes(searchTerm.toLowerCase()) || false;
        const priceMatch =
            (!minPrice || parseFloat(product?.price) >= parseFloat(minPrice)) &&
            (!maxPrice || parseFloat(product?.price) <= parseFloat(maxPrice));
        const locationMatch =
            !location || product?.year?.toLowerCase().includes(location.toLowerCase());

        return nameMatch && priceMatch && locationMatch;
        ;
    });

    return (
        <div className="container-fluid">



            {products?.length === 0 ? (
                <div className="spinner-border text-danger text-center my-5 " role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (





                <div className=" ">
                    {/* Left Sidebar for Search and Filter options */}
                    <div className=" search ">
                        <h2 className='pt-5'>Sort results by</h2>
                        <input
                            className='mt-5 p-2 rounded shadow border-0'
                            type="text"
                            placeholder="Search by name"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <input
                            className='mt-5 p-2 rounded shadow border-0'
                            type="number"
                            placeholder="Min Price"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                        />
                        <input
                            className='mt-5 p-2 rounded shadow border-0'
                            type="number"
                            placeholder="Max Price"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                        />
                        <input
                            className='mt-5 p-2 rounded shadow border-0'
                            type="text"
                            placeholder="Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>

                    {/* Main content area */}
                    <div className="col-md-12">
                        <div className="mb-3">
                            {/* Products */}
                            <div className="row row-cols-1 g-4 mx-5 topServices">
                                {filteredProducts.map((product) => (
                                    <Products key={product?._id} product={product} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllProducts;
