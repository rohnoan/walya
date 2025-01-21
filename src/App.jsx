import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesAnimations from './components/FeaturesAnimation';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <div className="bg-[#F6DCAC]">
        <Navbar />
        
        {/* Set up routing */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          {/* Default Route (redirecting to home if no path matches) */}
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
