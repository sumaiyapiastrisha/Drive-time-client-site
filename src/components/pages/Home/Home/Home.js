import React from 'react';
import useFetch from '../../../../hooks/useFetch';
import Header from '../../../Shared/Header';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Footer from '../../../Shared/Footer';
import { Link } from 'react-router-dom';
import Showreview from '../../Dashboard/Review/Showreview';
import './Home.css'
import { Box, Rating } from '@mui/material';




const Home = () => {
    const [products, setProducts] = useFetch();
    const sliceProducts = products.slice(0, 3)
    return (

        <div>

            {/* header */}
            <div>
                <Header></Header>
            </div>

            {/* Banner */}
            <div>
                <Banner></Banner>
            </div>
            <section className='about ' >

                <section class="py-3 py-md-5">
                    <div class="container">
                        <div class="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
                            <div class="col-12 col-lg-6">
                                <img class="img-fluid rounded" loading="lazy" src="https://wallpapercave.com/wp/Jihd3Dl.jpg" alt="About 2" />
                            </div>
                            <div class="col-12 col-lg-6 ">
                                <div class="row justify-content-xl-center">
                                    <div class="col-12 col-xl-10">
                                        <h2 class="mb-3">Why Choose Us?</h2>
                                        <p class="lead fs-4 mb-3 mb-xl-5">With years of experience and deep industry knowledge, we have a proven track record of success and are constantly pushing ourselves to stay ahead of the curve.</p>
                                        <div class="d-flex align-items-center mb-3">
                                            <div class="me-3 text-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="red" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p class="fs-5 m-0">Our evolution procedure is super intelligent.</p>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center mb-3">
                                            <div class="me-3 text-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="red" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p class="fs-5 m-0">We deliver services beyond expectations.</p>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center mb-4 mb-xl-5">
                                            <div class="me-3 text-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="red" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p class="fs-5 m-0">Let's hire us to reach your objectives.</p>
                                            </div>
                                        </div>
                                        <button type="button" class="btn bsb-btn-xl btn-outline-danger rounded-pill">Connect Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>



            {/* products */}
            <div>
                {products.length === 0 ? <div className="spinner-border text-danger text-center my-5 " role="status">
                    <span class="visually-hidden">Loading...</span>
                </div> : <div className="my-5">

                    <div>
                        <h1 className="my-5 pt-5 ">Recent Bikes</h1>

                    </div>

                    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4  p-card text-center  topServices">
                        {

                            sliceProducts.map(product => (

                                <div className="col service" >
                                    <div className="card  border-0 , shadow ">
                                        <img src={product.image} class="card-img-top  image" alt={product.image} />
                                        <div className="card-body">
                                            <h6 class="card-title my-3">{product.title}</h6>

                                            <div className="d-flex justify-content-around">
                                                <div> <p class="card-text fw-bold">Price  :  {product.price}</p></div>
                                                <div><Box
                                                    sx={{
                                                        '& > legend': { mt: 2 },
                                                    }}
                                                >



                                                    <Rating name="read-only" value={5} readOnly />

                                                </Box></div>
                                            </div>




                                        </div>

                                        <Link to={`/bikes/${product._id}`} >
                                            <button className="btn  button btn-warning p-2 px-4  mb-4">See details</button>
                                        </Link>
                                    </div>

                                </div>

                                // <Products
                                // key={product._id}
                                // product={product}
                                // >
                                // </Products>
                            )
                            )
                        }
                    </div>

                </div>}
                {/* reviews */}
                <div className='review'>
                    <Showreview></Showreview>
                </div>

                {/* gallery */}
                <h3 className="mt-5  ">Our gallery</h3>
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2  ms-5 review my-5">

                    <div className="col  ">
                        <img className="image" src="https://tse4.mm.bing.net/th?id=OIP.PJ8qhzatDlUZWI6UuQxcVQHaEK&pid=Api&P=0&w=275&h=156" alt="" />
                    </div>
                    <div className="col ">
                        <img className="image " src="https://tse2.mm.bing.net/th?id=OIP.PJWZeQXxoWYXF2FfJmnqywHaEK&pid=Api&P=0&w=291&h=164" alt="" />
                    </div>
                    <div className="col  ">
                        <img className="image" src="https://tse2.mm.bing.net/th?id=OIP.fgNJrcmGU2em0pnYgcyaSgHaEK&pid=Api&P=0&w=314&h=178" alt="" />
                    </div>
                    <div className="col">
                        <img className="image "
                            src="https://tse2.mm.bing.net/th?id=OIP.w2-EYFUExLspeSKrt4tpGAHaFN&pid=Api&P=0&w=249&h=176" alt="" />
                    </div>
                </div>
                {/* fotter */}
                <div>
                    <Footer></Footer>
                </div>
            </div>
        </div>

    );
};

export default Home;