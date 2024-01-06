import React from 'react';
import Header from '../../Shared/Header';
import { Padding } from '@mui/icons-material';

const Blogs = () => {
    return (
        <div>
            <div><Header></Header></div>
            <div className=' text-start ' style={{ marginLeft: "200px", marginRight: "200px" }} >
                <h3 className='text-danger mt-5 pt-5'>REDLEG’S RIDES</h3>
                <img className=' ' src="https://wanderingbiker.net/wp-content/uploads/2018/02/Redlegs-Rides.png" alt="" />
                <p className=' text-start mt-5' style={{}}>Created by Charlie, this simple blog has been awarded one of the Top 100 Best Motorcycle Blogs out there today. With a passion for motorcycles and motoriding, Charlie talks about his many experiences through different states from the eyes of him and his motorcycle.

                    Writing numerous blogs weekly, you can keep track of his motorcycle journey. Nicknamed Redleg for his services in in the Field Artillery, Charlie even has a Countrie tracker on his website. Trekking through the cold winter months of New Mexico and Arizona to adventuring in Canada, Charlie walks you through his journey as a motorcyclist exploring parts of the world.</p>

                <a href="https://redlegsrides.blogspot.com/" target='blank' style={{ textDecoration: 'none', color: 'red' }} className="">Check Out Redleg’s Rides --></a>
            </div>
            <div className=' text-start ' style={{ marginLeft: "200px", marginRight: "200px" }} >
                <h3 className='text-danger mt-5 pt-5'>FORTY YEARS ON TWO WHEELS</h3>
                <img className=' ' src="https://wanderingbiker.net/wp-content/uploads/2018/02/Forty-Years-on-Two-Wheels.png" alt="" />
                <p className=' text-start mt-5' style={{}}>After 40 years on literally, two wheels, Doug has created a motorcycle blog all about his memories and thoughts about life on the highway, mountains, and valleys through the eyes of his motorcycle. With an accumulation of stories and photos, Doug shares with all motorcycle enthusiasts his experiences repairing motorcycles, cross-country road tripping, and the days of his youth.

                    Fun fact, at age 22’ he purchased an R90S BMW in late 73’. Now, he is living his youth once more riding around reminiscing of the days he used to drive to Canada from SoCal. If you want to keep up with Doug and his stories, Forty Years on Two Wheels will charm motorcycle enthusiasts.</p>

                <a href="https://redlegsrides.blogspot.com/" target='blank' style={{ textDecoration: 'none', color: 'red' }} className="">Check Out Forty Years on Two Wheels!--></a>
            </div>
        </div>

    );
};

export default Blogs;