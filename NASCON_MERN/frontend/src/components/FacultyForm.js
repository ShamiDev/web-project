import React, { useState } from "react";

const FacultyForm = ({ updateFacultyList }) => {
    // Define state variables to store form data
    const [formData, setFormData] = useState({
        username: "",
        fullname: "",
        password: "",
        email: "",
        phone: "",
        userRole: 2 // Assuming userRole is a number
    });

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make a POST request to your server to create a new user
            const response = await fetch("/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData) // Send form data as JSON
            });

            if (!response.ok) {
                throw new Error("Failed to create user");
            }
            // Reset form after successful submission
            setFormData({
                username: "",
                fullname: "",
                password: "",
                email: "",
                phone: "",
                userRole: ""
            });

            // Update the list of faculty members
            updateFacultyList();

            // Optionally, you can handle success here (e.g., show a success message)
        } catch (error) {
            console.error("Error:", error);
        }
    };

    // Handle input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Function to show error toast
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Faculty Member</h3>
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                required
            />
            <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="Full Name"
                required
            />
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
            />
            <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
            />
            <button type="submit">Add Faculty</button>
        </form>
    );
};

export default FacultyForm;
