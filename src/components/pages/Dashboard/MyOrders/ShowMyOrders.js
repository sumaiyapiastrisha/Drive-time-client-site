import React from 'react';
import useOrders from '../../../../hooks/useOrders';

const ShowMyOrders = (props) => {
    const { _id, title, image, price, description, status } = props.item;


    const [orderedItem, setOrderedItem] = useOrders();

    //handle delete an order
    const handleDeleteItem = id => {

        const url = `http://localhost:5000/orderdItem/${id}`;
        console.log(url)
        fetch(url, {
            method: 'DELETE'

        })
            .then(res => res.json())
            .then(data => {


                if (data.deletedCount > 0) {
                    alert('successfully deleted');
                    const remain = orderedItem.filter(item => item._id !== id)
                    setOrderedItem(remain);
                }



            })
    }

    //show my orders
    return (
        <div className="col service" >
            <div className="card h-100">
                <img src={image} class="card-img-top" alt={image} />
                <div className="card-body">
                    <h3 class="card-title text-danger">{title}</h3>
                    <p class="card-text fw-bold">Price  :  {price}</p>
                    <p class="card-text fw-bold">Status  :  {status}</p>
                    <p class="card-text">{description}</p>

                </div>

                <div>
                    <button className="btn btn-danger p-2 px-4 my-3" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) handleDeleteItem(_id) }}>DELETE</button>
                </div>


            </div>
        </div>

    );
};

export default ShowMyOrders;