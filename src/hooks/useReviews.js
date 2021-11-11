import { useEffect, useState } from 'react';


// Drive time reviews information fetch
const useReviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://peaceful-hollows-15689.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews])
    console.log("yes")
    return [reviews, setReviews];
}

export default useReviews;

