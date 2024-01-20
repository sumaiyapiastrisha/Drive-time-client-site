import React from 'react';

import useAuth from '../../../../hooks/useAuth';
import useOrders from '../../../../hooks/useOrders';
import ShowMyOrders from './ShowMyOrders';

const MyOrders = () => {
    const { user } = useAuth()
    const email = user.email;

    const [orderedItem, setOrderedItem] = useOrders(); //useAllorders custom hook

    return (
        <div className="">
            {/* orderss */}
            {/* <div className="text-danger mt-5 "><h1>MY ORDERS</h1></div> */}
            <div class="row  row-cols-1 row-cols-md-2 row-cols-lg-3 g-4  mx-5 my-5"  >
                {

                    orderedItem.filter(item => item.email == email).map(item => <ShowMyOrders
                        key={item._id}
                        item={item}

                    ></ShowMyOrders>)
                }
            </div>

        </div>
    );
};

export default MyOrders;