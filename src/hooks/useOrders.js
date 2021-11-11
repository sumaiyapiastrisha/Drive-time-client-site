import React, { useEffect, useState } from 'react';

const useOrders = () => {
    const [orderedItem, setOrderedItem] = useState([])

    useEffect(() => {
        fetch('https://peaceful-hollows-15689.herokuapp.com/orderdItem')
            .then(res => res.json())
            .then(data => setOrderedItem(data))
    }, [orderedItem])

    return [orderedItem, setOrderedItem];
};

export default useOrders;