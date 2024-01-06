import { useEffect, useState } from 'react';

//https://peaceful-hollows-15689.herokuapp.cnpm run devom
// Drive time reviews information fetch
const useReviews = () => {
    const [reviews, setReviews] = useState([])
    // fetch reviews
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews])
    console.log("yes")
    return [reviews, setReviews];
}

export default useReviews;

