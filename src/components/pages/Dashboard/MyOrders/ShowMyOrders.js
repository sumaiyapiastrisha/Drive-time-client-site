import React from 'react';
import useOrders from '../../../../hooks/useOrders';
import './MyOrder.css'

const ShowMyOrders = (props) => {
    const { _id, title, image, price, description, status, phone, address } = props.item;


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
        <div className="" >
            {/* col service */}
            <div className="container border-2 bg-white d-flex justify-content-center ">


                {/* <button type="button" className="btn openmodal" data-toggle="modal" data-target="#modal1">
                    Click here
                </button> */}


                <div className=" myOrder rounded shadow" id="">
                    <div className="m-dialog m-dialog-centered">
                        <div className="m-content">


                            <div className="m-header  mx-5 text-center">
                                <h4 className="m-title pt-4 ">{title}<br /></h4>
                                {/* <button type="button" className="close" data-dismiss="modal">&times;</button> */}
                            </div>


                            <div className="m-body">
                                <div className="container">
                                    <h6>Item Details</h6>
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <img src={image} className="" alt={image} />
                                            {/* <img className="img-fluid" src={image} />
                                            <img src="" alt="" /> */}
                                        </div>

                                    </div>
                                    <h6 className=''>Order Details</h6>
                                    <div className="row">
                                        <div className="col-xs-12">

                                            <ul type="none">
                                                <div className='d-flex '>
                                                    <div><li className="left text-start">OrderNo.:</li></div>
                                                    <div><li className="left text-end  ps-3">{_id}</li></div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div><li className="left text-start">Price</li></div>
                                                    <div><li className="left text-end  ps-5">{price}</li></div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div><li className="left text-start ">Shipping :</li></div>
                                                    <div><li className="left text-end  ps-3">COD</li></div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div><li className="left text-start ">Location :</li></div>
                                                    <div><li className="left text-end  ps-3">{address}</li></div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div><li className="left text-start pe-1 ">Phone :</li></div>
                                                    <div><li className="left text-end ps-4">{phone}</li></div>
                                                </div>
                                                {/* <div className='d-flex'>
                                                    <div><li className="left text-start ">Location :</li></div>
                                                    <div><li className="left text-end  ps-5">{address}</li></div>
                                                </div> */}


                                            </ul>
                                        </div>

                                    </div>
                                    <div>
                                        <button className="btn btn-danger p-2 px-4 my-3" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) handleDeleteItem(_id) }}>Cancle order</button>
                                    </div>

                                </div>
                            </div>




                        </div>
                    </div>
                </div>

            </div>
            {/* <div className="card h-100">
                <img src={image} className="card-img-top" alt={image} />
                <div className="card-body">
                    <h3 className="card-title text-danger">{title}</h3>
                    <p className="card-text fw-bold">Price  :  {price}</p>
                    <p className="card-text fw-bold">Status  :  {status}</p>
                    <p className="card-text">{description}</p>

                </div>

                <div>
                    <button className="btn btn-danger p-2 px-4 my-3" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) handleDeleteItem(_id) }}>DELETE</button>
                </div>


            </div> */}
        </div>

    );
};

export default ShowMyOrders;