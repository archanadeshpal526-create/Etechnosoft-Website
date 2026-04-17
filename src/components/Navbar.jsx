import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../assets/logo.png';

const servicesDropdown = [
  { name: 'Software Development', path: '/services' },
  { name: 'Website Development', path: '/services' },
  { name: 'Cloud & DevOps', path: '/services' },
  { name: 'IT Staffing & Training', path: '/services' },
  { name: 'HITL AI Operations', path: '/services' },
];

const industriesDropdown = [
  { name: 'Healthcare', path: '/industries' },
  { name: 'Manufacturing', path: '/industries' },
  { name: 'Hospitality', path: '/industries' },
  { name: 'Automotive', path: '/industries' },
  { name: 'Construction', path: '/industries' },
  { name: 'Telecom', path: '/industries' },
  { name: 'Energy & Utilities', path: '/industries' },
  { name: 'Entertainment', path: '/industries' },
];

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services', hasDropdown: true },
  { name: 'Industries', path: '/industries', hasDropdown: true },
  { name: 'Why Us', path: '/why-us' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const servicesRef = useRef(null);
  const industriesRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) setServicesOpen(false);
      if (industriesRef.current && !industriesRef.current.contains(e.target)) setIndustriesOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setIndustriesOpen(false);
  }, [location.pathname]);

  const handleNavClick = (path) => {
    navigate(path);
    setIsMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-10 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm transition-all duration-500 ${
        isScrolled ? 'bg-white' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => handleNavClick('/')} className="flex items-center gap-2">
          <img src={Logo} alt="Ethihaas" className="h-12" />
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isServices = link.name === 'Services';
            const isIndustries = link.name === 'Industries';
            return (
              <div key={link.name} className="relative" ref={isServices ? servicesRef : isIndustries ? industriesRef : null}>
                {link.hasDropdown ? (
                  <button
                    onClick={() => {
                      if (isServices) { setServicesOpen(!servicesOpen); setIndustriesOpen(false); }
                      if (isIndustries) { setIndustriesOpen(!industriesOpen); setServicesOpen(false); }
                    }}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      location.pathname === link.path ? 'text-black' : 'text-gray-700 hover:text-black'
                    }`}
                  >
                    {link.name}
                    <ChevronDown size={14} className={`transition-transform ${(isServices && servicesOpen) || (isIndustries && industriesOpen) ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <button
                    onClick={() => handleNavClick(link.path)}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      location.pathname === link.path ? 'text-black' : 'text-gray-700 hover:text-black'
                    }`}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-black rounded-full" layoutId="navDot" />
                    )}
                  </button>
                )}
                {isServices && servicesOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                    {servicesDropdown.map((item) => (
                      <button key={item.name} onClick={() => handleNavClick(item.path)} className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors">
                        {item.name}
                      </button>
                    ))}
                  </motion.div>
                )}
                {isIndustries && industriesOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute top-full left-0 mt-2 w-40 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                    {industriesDropdown.map((item) => (
                      <button key={item.name} onClick={() => handleNavClick(item.path)} className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors">
                        {item.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button onClick={() => handleNavClick('/contact')} className="hidden md:block px-5 py-2.5 bg-transparent border border-gray-300 text-gray-800 text-sm font-medium rounded-full hover:bg-gray-100 hover:text-black transition-all">
            Contact Us
          </button>
          <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white border-t border-gray-200">
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button key={link.name} onClick={() => handleNavClick(link.path)} className={`text-left px-4 py-3 rounded-lg transition-colors ${location.pathname === link.path ? 'text-black bg-gray-100' : 'text-gray-700 hover:text-black hover:bg-gray-100'}`}>
                  {link.name}
                </button>
              ))}
              <button onClick={() => handleNavClick('/contact')} className="mt-2 bg-transparent border border-gray-300 text-gray-800 py-3 rounded-lg font-medium text-center hover:bg-gray-100 transition-colors">
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
