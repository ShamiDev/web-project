import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin"; // Import Admin component



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add Route for Admin component */}
            <Route path="/Admin" element={<Admin />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
