import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Pages
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Join from './Pages/Join/Join.jsx';

// Import Components
import NavigationBar from './Components/Navbar/NavigationBar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.jsx";
import ScrollIndicator from './Components/ScrollIndicator/ScrollIndicator.jsx';
import BackToTop from './Components/BackToTop/BackToTop.jsx';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <ScrollIndicator />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join" element={<Join />} />
      </Routes>
      <Footer />
      <BackToTop />
    </Router>
  );
};

export default App;
