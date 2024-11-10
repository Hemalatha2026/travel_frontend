import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Places from './components/Places';
import Booking from './components/Booking';
import Login from './components/Login';
import SignIn from './components/Signin';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Handle logout (set isAuthenticated to false)
  const handleLogout = () => {
    setIsAuthenticated(false);  // User logs out
    // Optionally clear any auth tokens or session data here
  };

  // Handle login (set isAuthenticated to true)
  const handleLogin = () => {
    setIsAuthenticated(true);  // User logs in
    // Optionally set any auth tokens or session data here
  };

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signin" element={<SignIn onLogin={handleLogin} />} /> {/* Pass the login handler */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
