import React, { useState, useEffect } from "react";
import axios from "axios";


function CollapsibleRegistration() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false); // State to manage the collapse/expand of the registration form
 const  [loggedInUser, setLoggedInUser]=useState(null);

 useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
    }
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/register", {
        username,
        password,
        name,
        email,
        phoneNumber,
        profilePicture
      });
      alert(response.data.message);
    } catch (error) {
      console.error("Registration failed:", error.response.data.message);
      setError(error.response.data.message);
    }
  };

  // Function to handle closing the registration form
  const handleClose = () => {
    setIsOpen(false);
    console.log("closed From")
  };

  useEffect(() => {
    // Set a timer to open the registration form after 15 seconds if the user is not logged in
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);
    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, []);

  return (
    <>
    {isOpen && (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="registration-container d-flex justify-content-between">
        <div className="image-container">
          <img
            src="https://img.freepik.com/free-vector/super-black-friday-sale-banner-with-red-brush-stroke_1361-3072.jpg?w=900&t=st=1711518339~exp=1711518939~hmac=3b0f55aed9638a2a57d5dcead1bdf3e2d28a58da0c740449ffb146531ad88b8f"
            alt="CraftMonk Image"
            className="img-fluid collapse_image"
          />
        </div>
     
          <div className="registration-form">
            <div className="close-icon" onClick={handleClose}>
              <h1>X</h1>
            </div>
            <h2 className="card-title text-center">Registration</h2>
            <form onSubmit={handleRegister}>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="profilePicture">Profile Picture:</label>
                <input
                  type="text"
                  className="form-control"
                  id="profilePicture"
                  value={profilePicture}
                  onChange={(e) => setProfilePicture(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Register
              </button>
            </form>
            {error && <div className="text-danger">{error}</div>}
        
          </div>
        </div>
      </div>
    )}
  </>
    
  );
}

export default CollapsibleRegistration;
