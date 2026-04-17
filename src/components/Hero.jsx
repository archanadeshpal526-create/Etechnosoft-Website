import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const bgImages = [
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80',
  'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80',
];

export default function Hero() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030508]">
      {bgImages.map((img, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${img})`,
            opacity: index === currentIndex ? 0.8 : 0,
            transition: 'opacity 1.5s ease-in-out'
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030508]/60 via-[#030508]/40 to-[#030508]" />
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {bgImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentIndex === index ? 'bg-blue-500 w-8' : 'bg-white/30'
            }`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-gray-300 text-sm font-normal opacity-90">Based in Secunderabad, India</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            <span className="text-cyan-400">{displayText}</span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {['Custom Software', 'Website & E-Commerce', 'HITL AI Operations', 'Cloud & DevOps'].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="px-4 py-2 rounded-full text-sm font-medium text-center bg-white text-gray-800 transition-all"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              onClick={() => navigate('/services')}
              className="px-8 py-4 bg-transparent text-white font-semibold rounded-full border border-white hover:scale-105 transition-transform"
            >
              View Services
            </motion.button>
            <motion.button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 rounded-full bg-transparent text-white font-medium border border-white hover:bg-white/10 transition-colors"
            >
              Let's Talk
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
