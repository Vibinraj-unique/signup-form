import { useState } from "react";
import axios from "axios";
import "./App.css"; 

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/submit",
        formData
      );
      console.log(response.data);
      alert("Form submitted successfully");
    } catch (err) {
      console.error("Error submitting form", err);
      alert("Failed to submit form");
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div >
          <h1 className="login">LOGIN Form</h1></div>
          <div className="Floating-Label">
            <label className="username"> Username </label>
            <input
              type="text"
              name="name"
              
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Username"
              required
            />
          </div>
          <div className="Floating-Label">
            <label className="email"> Email </label>
            <input
              type="email"
              name="email"
              
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="Floating-Label">
            <label className="password" > Password </label>
            <input
              type="password"
              name="password"
              
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              required
            />
          </div>
          <div>
            <button type="submit"> Submit </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
