import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MapPin, ArrowRight, MessageCircle } from 'lucide-react';

const heroVideoSrc = '/hero-bg.mp4';

export default function Hero() {
  const navigate = useNavigate();
  const [displayText, setDisplayText] = useState('');
  const text = 'Transform Your Business with Technology That Delivers';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 60);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#030508]">
      <motion.video
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover pointer-events-none [filter:brightness(0.7)_blur(1px)] opacity-85"
      >
        <source src={heroVideoSrc} type="video/mp4" />
      </motion.video>
      <div className="absolute inset-0 bg-[#030508]/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030508]/35 via-[#030508]/45 to-[#030508]/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-4"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-2 bg-white/5 border border-white/10 rounded-full">
            <MapPin className="w-3.5 h-3.5 text-cyan-300" />
            <span className="text-gray-300 text-sm font-normal opacity-90">Based in Secunderabad, India</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 tracking-tight max-w-4xl mx-auto leading-tight">
            <span className="text-cyan-400">{displayText}</span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mt-6"
          >
            {['Custom Software', 'Website & E-Commerce', 'HITL AI Operations', 'Cloud & DevOps'].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="px-4 py-2 rounded-full text-sm font-medium text-center bg-white/30 backdrop-blur-md border border-cyan-300/40 text-white shadow-md shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:bg-white/40 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-6"
          >
            <motion.button
              onClick={() => navigate('/services')}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full border border-cyan-300/40 shadow-[0_10px_28px_rgba(6,182,212,0.35)] hover:shadow-[0_14px_32px_rgba(6,182,212,0.5)] transition-all duration-300"
            >
              View Services
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/10 backdrop-blur-md text-white font-medium border border-white/35 hover:bg-white/16 hover:border-cyan-300/50 hover:shadow-[0_10px_24px_rgba(0,0,0,0.25)] transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 text-cyan-200" />
              Let's Talk
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
