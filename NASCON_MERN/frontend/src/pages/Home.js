import React from "react";
import Navbar from "../components/Navbar"; // Import the Navbar component
import "./pages.css"; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home">
      <Navbar /> {/* Use the Navbar component */}

      <div className="summary-section">
        <h2>Summary</h2>
        <p>Our website aims to provide NASCON admin and faculty with an easier time managing the event.</p>
      </div>

      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>For further information, connect with us on social media:</p>
        <div className="social-media-links">
          <a href="https://linkedin.com">LinkedIn</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://facebook.com">Facebook</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
