import React from 'react';
import useFetch from '../../../../hooks/useFetch';
import Header from '../../../Shared/Header';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Footer from '../../../Shared/Footer'
import Showreview from '../../Dashboard/Review/Showreview';



const Home = () => {
    const [products, setProducts] = useFetch();
    const sliceProducts = products.slice(0, 6)
    return (

        <div>
            <div>
                <Header></Header>
            </div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                {products.length === 0 ? <div className="spinner-border text-danger text-center my-5 " role="status">
                    <span class="visually-hidden">Loading...</span>
                </div> : <div className="my-5">

                    <div>
                        <h1 className="my-5 pt-5 ">Top Bikes</h1>

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

                <div>
                    <Showreview></Showreview>
                </div>


                <h3 className="mt-5  ">Our gallery</h3>
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2  mx-5  my-5">

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

                <div>
                    <Footer></Footer>
                </div>
            </div>
        </div>

    );
};

export default Home;