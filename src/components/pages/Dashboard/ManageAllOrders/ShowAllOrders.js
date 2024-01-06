import React from 'react';
import useOrders from '../../../../hooks/useOrders';


const ShowAllOrders = (props) => {
    const { _id, title, image, price, description, status, name, address, phone, email } = props.orders;

    const [orderedItem, setOrderedItem] = useOrders();
    // console.log(orderedItem)

    // handle helete orderd item 
    const handleDelete = id => {

        const url = `http://localhost:5000/orderdItem/${id}`;

        fetch(url, {
            method: 'DELETE'

        })
            .then(res => res.json())
            .then(data => {


                if (data.deletedCount > 0) {
                    alert('deleted succesfully');
                    const remainingOrderedItem = orderedItem.filter(item => item._id !== id)

                    setOrderedItem(remainingOrderedItem);


                }



            })
    }


    return (
        <div className="col service  my-5" >
            <div className="card h-100">
                <img src={image} class="card-img-top" alt={image} />
                <div className="card-body text-start">
                    <h3 class="card-title text-danger">{title}</h3>

                    <p class="card-text fw-bold">Client name  :  {name}</p>
                    <p class="card-text fw-bold">client address  :  {address}</p>
                    <p class="card-text fw-bold">client phone number  :  {phone}</p>
                    <p class="card-text fw-bold">Price  :  {price}</p>
                    <p class="card-text fw-bold">Status  :  {status}</p>


                </div>

                <div> <button className="btn  button p-2 px-5 my-3 mx-3" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) handleDelete(_id) }}>DELETE</button>
                    <button className="btn btn-dark text-white p-2 px-5 my-3 mx-3" >update</button></div>
            </div>
        </div>

    );
};

export default ShowAllOrders;