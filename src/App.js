import React from 'react'
import './App.css';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Team from './pages/Team';
import Messages from './pages/Messages'
import Support from './pages/Support'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/reports" element={<Reports/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/team" element={<Team/>}/>
            <Route path="/messages" element={<Messages/>}/>
            <Route path="/support" element={<Support/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
