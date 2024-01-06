import { useEffect, useState } from 'react';


// Drive time products information fetch
const useFetch = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/bikes')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])

    return [products, setProducts];
}

export default useFetch;

