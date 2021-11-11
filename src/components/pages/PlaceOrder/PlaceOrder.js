import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../../Shared/Footer';
import Header from '../../Shared/Header';
import ConfirmOrder from '../ConfirmOrder/ConfirmOrder';

const PlaceOrder = () => {
    const { _id } = useParams();
    const [services, setServices] = useState([]);

    //fetch services collection and show data according to id 
    useEffect(() => {
        fetch('https://peaceful-hollows-15689.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, []);

    //send data to confirm order component
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div   >
                {

                    services.filter(service => service._id == _id).map(service => <ConfirmOrder
                        key={service._id}
                        service={service}

                    ></ConfirmOrder>)
                }
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default PlaceOrder;