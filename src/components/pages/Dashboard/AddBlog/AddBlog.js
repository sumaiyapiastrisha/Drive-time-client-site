// src/components/Feedback.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddBlog() {
    const [user, setUser] = useState('');
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');

    const [feedbackList, setFeedbackList] = useState([]);

    useEffect(() => {
        // Fetch feedback data on component mount
        fetchFeedback();
    }, []);

    const fetchFeedback = async () => {
        try {
            const response = await axios.get('http://localhost:5000/blogs');
            setFeedbackList(response.data);
        } catch (error) {
            console.error('Error fetching feedback:', error.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const newFeedback = {
                user: user,
                description: description,
                title: title,
            };

            await axios.post('http://localhost:5000/blogs', newFeedback);
            // After posting feedback, refresh the feedback list
            fetchFeedback();
            alert('Blog submitted successfully!');
        } catch (error) {
            console.error('Error submitting Blog:', error.message);
        }
    };

    return (
        <div className="font   py-5 register-services  w-100" >
            <h2>Post Your Blog</h2>
            <form onSubmit={handleSubmit}>


                <input className="mt-3 w-50 p-3" type="text" placeholder='Add image link' value={user} onChange={(e) => setUser(e.target.value)} /><br />
                <input className="mt-3 w-50 p-3" type="text" placeholder='Add title' value={title} onChange={(e) => setTitle(e.target.value)} /><br />



                <textarea className="mt-3 w-50 p-3" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />

                <br />
                <button className="mt-3 w-50 button border-0 text-white rounded  fw-bold p-3" type="submit">Submit </button>
            </form>

            {/* <h2>Feedback List</h2>
            <ul>
                {feedbackList.map((feedback) => (
                    <li key={feedback._id}>{`User: ${feedback.user}, Description: ${feedback.description}`}</li>
                ))}
            </ul> */}
        </div>
    );
}

export default AddBlog;
