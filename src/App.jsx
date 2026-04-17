import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import IndustriesPage from './pages/Industries';
import WhyUsPage from './pages/WhyUs';
import ContactPage from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="bg-[#0f172a] min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;