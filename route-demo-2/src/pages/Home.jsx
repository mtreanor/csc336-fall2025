import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function Home() {
  const navigate = useNavigate();


  // 1. Initialize state as an object to hold all form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  // 2. A single handler for all input changes
  const handleChange = (event) => {

    // Use the functional form of setFormData to ensure we have the latest state
    // and use the input's 'name' attribute to update the correct key dynamically.
    setFormData(prevFormData => ({
      ...prevFormData, // Copy all existing fields
      [event.target.name]: event.target.value      // Update only the field that changed
    }));
  };

  // 3. Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // The complete data object is ready for processing/sending
    console.log('Form Submitted with Data:', formData);

    // Optional: Clear the form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: ''
    });
    let str = `${formData.firstName+formData.lastName+formData.email}`;

    navigate(`/todo/${str}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          type="text"
          name="firstName" // **CRITICAL:** Matches the key in the formData state object
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          type="text"
          name="lastName" // **CRITICAL:** Matches the key in the formData state object
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email" // **CRITICAL:** Matches the key in the formData state object
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default Home;