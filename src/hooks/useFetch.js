import { useEffect, useState } from 'react';


// Drive time products information fetch
const useFetch = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://peaceful-hollows-15689.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])

    return [products, setProducts];
}

export default useFetch;

