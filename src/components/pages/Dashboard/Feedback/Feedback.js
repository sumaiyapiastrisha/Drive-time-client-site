// src/components/Feedback.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Feedback.css'

function Feedback() {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [description, setDescription] = useState('');
    const [feedbackList, setFeedbackList] = useState([]);

    useEffect(() => {
        // Fetch feedback data on component mount
        fetchFeedback();
    }, []);

    const fetchFeedback = async () => {
        try {
            const response = await axios.get('http://localhost:5000/feedback');
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
            };

            await axios.post('http://localhost:5000/feedback', newFeedback);
            // After posting feedback, refresh the feedback list
            fetchFeedback();
            alert('Feedback submitted successfully!');
        } catch (error) {
            console.error('Error submitting feedback:', error.message);
        }
    };

    return (
        <div className="font feedback  py-5  register-services  w-100" >
            {/* <h2>Feedback Form</h2> */}

            <div className="container contact-form rounded shadow">
                <div className="contact-image">
                    <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
                </div>
                <form onSubmit={handleSubmit}>
                    <h3>Drop Us a Message</h3>
                    <div className="row">
                        <div className="col-md-6">
                            {/* <div className="form-group"> */}
                            {/* <input type="text" placeholder='Add image link' value={user} onChange={(e) => setUser(e.target.value)} /> */}
                            {/* </div> */}
                            <div className="form-group">
                                <input type="text" name="user" className="form-control" placeholder="Your Name *" value={user} onChange={(e) => setUser(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <input type="text" name="email" className="form-control mt-3" placeholder="Your Email *" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <input type="text" name="phone" className="form-control mt-3" placeholder="Your Phone*" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            {/* <div className="form-group">
                                <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" value="" />
                            </div> */}
                            <div className="form-group mt-3">
                                <input type="submit" name="btnSubmit" className="btnContact" value="Send Message" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                {/* <textarea className="mt-3 w-50 p-3" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} /> */}
                                <textarea name="description" className="form-control" placeholder="Your Message *" style={{ width: '100%', height: '150px' }} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                            </div>
                        </div>
                    </div>
                </form>
            </div>







            {/* <form onSubmit={handleSubmit}>


                <input className="mt-3 w-50 p-3" type="text" placeholder='Add image link' value={user} onChange={(e) => setUser(e.target.value)} /><br />



                <textarea className="mt-3 w-50 p-3" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />

                <br />
                <button className="mt-3 w-50 button border-0 text-white rounded  fw-bold p-3" type="submit">Submit Feedback</button>
            </form> */}

            {/* <h2>Feedback List</h2>
            <ul>
                {feedbackList.map((feedback) => (
                    <li key={feedback._id}>{`User: ${feedback.user}, Description: ${feedback.description}`}</li>
                ))}
            </ul> */}
        </div>
    );
}

export default Feedback;
