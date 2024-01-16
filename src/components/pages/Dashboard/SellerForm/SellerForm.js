// ... (previous code)

import axios from "axios";
import { useState } from "react";

const SellerForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        year: '',
        make: '',
        model: '',
        mileage: '',
        color: '',
        transmission: '',
        fuelType: '',
        price: '',
        contactNumber: '',
        // Add more fields as needed
        additionalField1: '',
        additionalField2: '',
        additionalField3: '',
        // ... (more fields)
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to the server endpoint
            await axios.post('http://localhost:5000/sell-bike', formData);

            // Clear the form after successful submission
            setFormData({
                title: '',
                description: '',
                year: '',

                model: '',
                mileage: '',
                color: '',

                price: '',
                contactNumber: '',
                // Add more fields as needed

                // ... (more fields)
            });

            alert('Bike listing submitted successfully!');
        } catch (error) {
            console.error('Error submitting bike listing:', error.message);
        }
    };

    return (

        <form font py-5 register-services w-100 onSubmit={handleSubmit}>
            {/* ... (previous fields) */}
            <h3>Post your add</h3>
            <input type="text" className="mt-3 w-50 p-3" name="title" value={formData.title} placeholder="Model Name" onChange={handleChange} required /><br />
            <input type="text" className="mt-3 w-50 p-3" name="color" value={formData.color} placeholder="Color" onChange={handleChange} /><br />
            <input type="text" className="mt-3 w-50 p-3" name="year" value={formData.year} placeholder="Year" onChange={handleChange} required /><br />
            <input type="text" className="mt-3 w-50 p-3" name="price" value={formData.price} placeholder="Price" onChange={handleChange} required /><br />
            <input type="text" className="mt-3 w-50 p-3" name="contactNumber" value={formData.contactNumber} placeholder="contactNumber" onChange={handleChange} required /><br />
            <input type="text" className="mt-3 w-50 p-3" name="description" value={formData.description} placeholder="Description" onChange={handleChange} /><br />
            {/* <input type="text" className="mt-3 w-50 p-3" name="descriptio" value={formData.description} placeholder="Description" onChange={handleChange} /><br /> */}


            {/* <input type="text" name="additionalField1" value={formData.additionalField1} onChange={handleChange} />

            <label>Additional Field 2:</label>
            <input type="text" name="additionalField2" value={formData.additionalField2} onChange={handleChange} /> */}



            {/* ... (more fields) */}

            <button className="mt-3 w-50 button border-0 text-white rounded  fw-bold p-3" type="submit">Submit Listing</button>
        </form>
    );
};

export default SellerForm;
