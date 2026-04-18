import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const serviceChips = [
  'Custom Software',
  'Website & E-Commerce',
  'HITL AI Operations',
  'Cloud & DevOps',
];

export default function Hero() {
  const navigate = useNavigate();
  const [displayText, setDisplayText] = useState('');
  const text = 'Transform Your Business with Technology That Delivers';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index += 1;
      } else {
        clearInterval(timer);
      }
    }, 48);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-[#040812]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(56,189,248,0.16),transparent_32%),radial-gradient(circle_at_85%_25%,rgba(59,130,246,0.16),transparent_35%),radial-gradient(circle_at_55%_75%,rgba(14,165,233,0.14),transparent_38%)]" />
      <div className="absolute inset-0 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:46px_46px] opacity-20" />

      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 22, 0], y: [0, -18, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-[8%] h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -20, 0], y: [0, 16, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-16 right-[10%] h-56 w-56 rounded-full bg-blue-500/20 blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl text-center"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-sm shadow-cyan-400/10">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-gray-200 text-sm font-normal">Based in Secunderabad, India</span>
          </div>

          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
            <span className="text-cyan-300">{displayText}</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Software Development, Cloud Solutions, HITL AI Operations, and IT Staffing delivered with reliability, speed, and long-term business focus.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {serviceChips.map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full text-sm font-medium text-white bg-white/30 backdrop-blur-md border border-cyan-300/40 shadow-md shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:bg-white/40 hover:shadow-lg transition-all duration-300"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <motion.button
              onClick={() => navigate('/services')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_10px_30px_rgba(6,182,212,0.35)] transition-all"
            >
              View Services
            </motion.button>
            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 rounded-full text-white font-medium border border-white/30 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all"
            >
              Let's Talk
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
