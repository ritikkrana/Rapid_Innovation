import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import TaskPage from './components/TaskPage';
import HomeFooter from './components/HomeFooter';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/taskPage" element={<TaskPage />} />
        </Routes>
        <HomeFooter />
      </Router>
    </>
  );
}

export default App;
