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
      className={`fixed top-9 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#081122]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]'
          : 'bg-[#081122]/55 backdrop-blur-lg border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        <button onClick={() => handleNavClick('/')} className="flex items-center gap-2">
          <img src={Logo} alt="Ethihaas" className="h-11" />
        </button>

        <div className="hidden md:flex items-center gap-1.5">
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
                    className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium transition-all duration-300 ${
                      location.pathname === link.path ? 'text-cyan-300' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {link.name}
                    <ChevronDown size={14} className={`transition-transform ${(isServices && servicesOpen) || (isIndustries && industriesOpen) ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <button
                    onClick={() => handleNavClick(link.path)}
                    className={`relative px-3.5 py-2 text-sm font-medium transition-all duration-300 ${
                      location.pathname === link.path ? 'text-cyan-300' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-cyan-300 rounded-full" layoutId="navDot" />
                    )}
                  </button>
                )}
                {isServices && servicesOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute top-full left-0 mt-2 w-48 bg-[#0b1426]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_18px_40px_rgba(0,0,0,0.45)] overflow-hidden">
                    {servicesDropdown.map((item) => (
                      <button key={item.name} onClick={() => handleNavClick(item.path)} className="w-full px-4 py-3 text-left text-sm text-slate-200 hover:bg-white/10 hover:text-white transition-colors">
                        {item.name}
                      </button>
                    ))}
                  </motion.div>
                )}
                {isIndustries && industriesOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute top-full left-0 mt-2 w-40 bg-[#0b1426]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_18px_40px_rgba(0,0,0,0.45)] overflow-hidden">
                    {industriesDropdown.map((item) => (
                      <button key={item.name} onClick={() => handleNavClick(item.path)} className="w-full px-4 py-3 text-left text-sm text-slate-200 hover:bg-white/10 hover:text-white transition-colors">
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
          <button onClick={() => handleNavClick('/contact')} className="hidden md:block px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-full shadow-[0_8px_22px_rgba(6,182,212,0.35)] hover:shadow-[0_12px_28px_rgba(6,182,212,0.45)] transition-all hover:scale-105">
            Get Started
          </button>
          <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="md:hidden p-2 text-slate-200 hover:bg-white/10 rounded-lg transition-colors">
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-[#0b1426]/95 backdrop-blur-xl border-t border-white/10">
            <div className="px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button key={link.name} onClick={() => handleNavClick(link.path)} className={`text-left px-4 py-3 rounded-lg transition-colors ${location.pathname === link.path ? 'text-cyan-300 bg-white/10' : 'text-slate-300 hover:text-white hover:bg-white/10'}`}>
                  {link.name}
                </button>
              ))}
              <button onClick={() => handleNavClick('/contact')} className="mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-medium text-center">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
