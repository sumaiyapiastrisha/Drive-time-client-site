import React from 'react';

const ShowAllreview = (props) => {
    const { name, email, description } = props.review
    console.log(name)
    return (
        <div className="col service  pt-3" >
            <div className="card h-100 border-0 shadow">

                <div className="card-body text-start">


                    <p class="card-text fw-bold ">{name}</p>
                    <p class="card-text ">{email}</p>
                    <i class="fas fa-star"></i>
                    <p class="card-text ">{description}</p>



                </div>

            </div>
        </div>

    );
};

export default ShowAllreview;