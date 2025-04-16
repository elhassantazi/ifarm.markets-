import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Investment from './pages/Investment';
import AnimalDetails from './pages/AnimalDetails';
import Wallet from './pages/Wallet';
import OrderBook from './pages/OrderBook';
import FarmerSpace from './pages/FarmerSpace';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F7F9FC]">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/animals/:id" element={<AnimalDetails />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/orderbook" element={<OrderBook />} />
            <Route path="/farmer" element={<FarmerSpace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App