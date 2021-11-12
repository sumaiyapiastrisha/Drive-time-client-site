import React from 'react';
import useReviews from '../../../../hooks/useReviews';
import ShowAllreview from './ShowAllreview';
import './Review.css'
// import useReviews from '../../../../hooks/useReviews'

const Showreview = () => {
    const [reviews, setReviews] = useReviews();
    return (

        //send data to showAllOrders component to show  all orders
        <div className=" py-5  review  px-5  ">

            <div>
                <h3 className=" text-start ">All Reviews</h3>
            </div>

            <div class="row row-cols-1 ">
                {

                    reviews.map(review => (
                        <ShowAllreview

                            key={review._id}
                            review={review}>


                        </ShowAllreview>


                    )
                    )
                }
            </div>
        </div>


    );
};

export default Showreview;