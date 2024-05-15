import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Faculty from "./pages/Faculty";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Faculty" element={<Faculty />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
