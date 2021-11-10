import React, { useEffect, useState } from 'react';

const useOrders = () => {
    const [orderedItem, setOrderedItem] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/orderdItem')
            .then(res => res.json())
            .then(data => setOrderedItem(data))
    }, [orderedItem])

    return [orderedItem, setOrderedItem];
};

export default useOrders;