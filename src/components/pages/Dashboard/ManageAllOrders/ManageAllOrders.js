import React from 'react';
import useOrders from '../../../../hooks/useOrders';
import ShowAllOrders from './ShowAllOrders';

const ManageAllOrders = () => {
    const [orderedItem, setOrderedItem] = useOrders();
    return (

        //send data to showAllOrders component to show  all orders
        <div className="orderss px-5">

            <div>
                <h1 className="py-5  text-dark">MANAGE ALL ORDERS</h1>
            </div>

            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 topServices">
                {

                    orderedItem.map(orders => (
                        <ShowAllOrders
                            key={orders._id}
                            orders={orders}>

                        </ShowAllOrders>
                    )
                    )
                }
            </div>
        </div>


    );
};

export default ManageAllOrders;