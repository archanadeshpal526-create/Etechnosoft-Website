import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../assets/logo.png';

const servicesDropdown = [
  { name: 'Software Development', path: '/services', desc: 'Full-stack custom applications' },
  { name: 'AI Operations (HITL)', path: '/services', desc: 'Human-in-the-loop validation' },
  { name: 'Cloud & DevOps', path: '/services', desc: 'Scalable infrastructure' },
  { name: 'IT Staffing', path: '/services', desc: 'Pre-vetted tech talent' },
  { name: 'Website & E-Commerce', path: '/services', desc: 'Online stores & websites' },
];

const industriesDropdown = [
  { name: 'Healthcare', path: '/industries' },
  { name: 'Manufacturing', path: '/industries' },
  { name: 'Hospitality', path: '/industries' },
  { name: 'Automotive', path: '/industries' },
  { name: 'Construction', path: '/industries' },
  { name: 'Telecom', path: '/industries' },
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
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [industriesMenuOpen, setIndustriesMenuOpen] = useState(false);
  const servicesMenuRef = useRef(null);
  const industriesMenuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesMenuRef.current && !servicesMenuRef.current.contains(event.target)) {
        setServicesMenuOpen(false);
      }
      if (industriesMenuRef.current && !industriesMenuRef.current.contains(event.target)) {
        setIndustriesMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    if (location.pathname) {
      setServicesMenuOpen(false);
      setIndustriesMenuOpen(false);
    }
  }, [location.pathname]);

  const handleNavClick = (path) => {
    navigate(path);
    setIsMobileOpen(false);
    setServicesMenuOpen(false);
    setIndustriesMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#0a0f1c]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/20' 
          : 'bg-transparent'
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
              <div key={link.name} className="relative" ref={isServices ? servicesMenuRef : isIndustries ? industriesMenuRef : null}>
                {link.hasDropdown ? (
                  <button
                    onClick={() => {
                      if (isServices) {
                        setServicesMenuOpen(!servicesMenuOpen);
                        setIndustriesMenuOpen(false);
                      }
                      if (isIndustries) {
                        setIndustriesMenuOpen(!industriesMenuOpen);
                        setServicesMenuOpen(false);
                      }
                    }}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      location.pathname === link.path ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.name}
                    <ChevronDown size={14} className={`transition-transform ${(isServices && servicesMenuOpen) || (isIndustries && industriesMenuOpen) ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <button
                    onClick={() => handleNavClick(link.path)}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      location.pathname === link.path ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full" layoutId="navDot" transition={{ type: "spring", stiffness: 500, damping: 30 }} />
                    )}
                  </button>
                )}
                {isServices && servicesMenuOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute top-full left-0 mt-2 w-56 bg-[#0a0f1c] border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                    {servicesDropdown.map((service) => (
                      <button key={service.name} onClick={() => handleNavClick(service.path)} className="w-full px-4 py-3 text-left text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors">
                        <div className="font-medium">{service.name}</div>
                        <div className="text-xs text-gray-500">{service.desc}</div>
                      </button>
                    ))}
                  </motion.div>
                )}
                {isIndustries && industriesMenuOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute top-full left-0 mt-2 w-40 bg-[#0a0f1c] border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                    {industriesDropdown.map((industry) => (
                      <button key={industry.name} onClick={() => handleNavClick(industry.path)} className="w-full px-4 py-3 text-left text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors">
                        {industry.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button onClick={() => handleNavClick('/contact')} className="hidden md:block px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all hover:scale-105">
            Contact Us
          </button>
          <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors">
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-[#0a0f1c]/95 backdrop-blur-xl border-t border-white/5">
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.filter(l => !l.hasDropdown).map((link) => (
                <button key={link.name} onClick={() => handleNavClick(link.path)} className={`text-left px-4 py-3 rounded-lg transition-colors ${location.pathname === link.path ? 'text-white bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                  {link.name}
                </button>
              ))}
              {navLinks.filter(l => l.hasDropdown).map((link) => {
                const isServices = link.name === 'Services';
                return (
                  <div key={link.name} className="flex flex-col">
                    <button onClick={() => { if (isServices) setServicesMenuOpen(!servicesMenuOpen); else setIndustriesMenuOpen(!industriesMenuOpen); }} className={`flex items-center justify-between text-left px-4 py-3 rounded-lg transition-colors ${location.pathname === link.path ? 'text-white bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                      {link.name}
                      <ChevronDown size={16} className={`transition-transform ${(isServices && servicesMenuOpen) || (!isServices && industriesMenuOpen) ? 'rotate-180' : ''}`} />
                    </button>
                    {isServices && servicesMenuOpen && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="ml-4 flex flex-col gap-1">
                        {servicesDropdown.map((service) => (
                          <button key={service.name} onClick={() => handleNavClick(service.path)} className="text-left px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                            {service.name}
                          </button>
                        ))}
                      </motion.div>
                    )}
                    {!isServices && industriesMenuOpen && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="ml-4 flex flex-col gap-1">
                        {industriesDropdown.map((industry) => (
                          <button key={industry.name} onClick={() => handleNavClick(industry.path)} className="text-left px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                            {industry.name}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </div>
                );
              })}
              <button onClick={() => handleNavClick('/contact')} className="mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-medium text-center">
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}