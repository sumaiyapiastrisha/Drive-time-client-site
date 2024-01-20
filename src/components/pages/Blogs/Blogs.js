import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header';
import { Padding } from '@mui/icons-material';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Fetch data from localhost:5000/blog when the component mounts
        fetch('http://localhost:5000/blogs')
            .then(response => response.json())
            .then(data => setBlogs(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);



    return (
        <div>
            <div><Header></Header></div>


            {blogs.map(blog => (
                <div key={blog.id} className='text-start' style={{ marginLeft: '200px', marginRight: '200px' }}>
                    <h3 className='text-danger mt-5 pt-5'>{blog.title}</h3>
                    <img className='' src={blog.user} alt={blog.user} />
                    <p className='text-start mt-5'>{blog.description}</p>

                    <a href={blog.link} target='blank' style={{ textDecoration: 'none', color: 'red' }}>Check Out {blog.title} --></a>
                </div>
            ))}



            {/* <div className=' text-start ' style={{ marginLeft: "200px", marginRight: "200px" }} >
                <h3 className='text-danger mt-5 pt-5'>{blogs.title}</h3>
                <img className=' ' src={blogs.user} alt="" />
                <p className=' text-start mt-5' style={{}}>Created by Charlie, this simple blog has been awarded one of the Top 100 Best Motorcycle Blogs out there today. With a passion for motorcycles and motoriding, Charlie talks about his many experiences through different states from the eyes of him and his motorcycle.

                    Writing numerous blogs weekly, you can keep track of his motorcycle journey. Nicknamed Redleg for his services in in the Field Artillery, Charlie even has a Countrie tracker on his website. Trekking through the cold winter months of New Mexico and Arizona to adventuring in Canada, Charlie walks you through his journey as a motorcyclist exploring parts of the world.</p>

                <a href="https://redlegsrides.blogspot.com/" target='blank' style={{ textDecoration: 'none', color: 'red' }} className="">Check Out Redleg’s Rides --></a>
            </div> */}

        </div>

    );
};

export default Blogs;