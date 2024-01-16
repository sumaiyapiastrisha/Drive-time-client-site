import React from 'react';
import useReviews from '../../../../hooks/useReviews';
import ShowAllreview from './ShowAllreview';
import './Review.css'


const Showreview = () => {
    const [reviews, setReviews] = useReviews();
    return (

        //show review
        <div className=" py-5  review  px-5  ">

            <div>
                <h3 className=" text-start ">All Reviews</h3>
            </div>

            <div class="row row-cols-1 " style={{ maxHeight: '300px', overflowY: 'auto' }}>
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