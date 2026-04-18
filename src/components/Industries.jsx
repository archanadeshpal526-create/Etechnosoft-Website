import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Heart, Cpu, Star, Car, HardHat, Signal, Zap, Gamepad2 } from 'lucide-react';

const industries = [
  { id: 'healthcare', title: 'Healthcare', desc: 'Secure telehealth, HIPAA compliant, EHR integration', icon: Heart, color: 'text-red-400', bg: 'bg-red-500/20' },
  { id: 'manufacturing', title: 'Manufacturing', desc: 'Streamlined operations, optimized supply chains', icon: Cpu, color: 'text-blue-400', bg: 'bg-blue-500/20' },
  { id: 'hospitality', title: 'Hospitality', desc: 'Reservation systems, online booking, secure payments', icon: Star, color: 'text-yellow-400', bg: 'bg-yellow-500/20' },
  { id: 'automotive', title: 'Automotive', desc: 'Connected car apps, real-time navigation', icon: Car, color: 'text-cyan-400', bg: 'bg-cyan-500/20' },
  { id: 'construction', title: 'Construction', desc: 'Project management, better collaboration', icon: HardHat, color: 'text-orange-400', bg: 'bg-orange-500/20' },
  { id: 'telecom', title: 'Telecom', desc: 'Next-gen network infrastructure, enhanced reliability', icon: Signal, color: 'text-green-400', bg: 'bg-green-500/20' },
  { id: 'energy', title: 'Energy & Utilities', desc: 'Smart grid technologies, optimized distribution', icon: Zap, color: 'text-yellow-400', bg: 'bg-yellow-500/20' },
  { id: 'entertainment', title: 'Entertainment', desc: 'Interactive gaming apps, immersive experiences', icon: Gamepad2, color: 'text-purple-400', bg: 'bg-purple-500/20' },
];

export default function Industries() {
  const navigate = useNavigate();
  const location = useLocation();
  const ref = useRef(null);

  useEffect(() => {
    if (location.hash === '#industries') {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <section ref={ref} id="industries" className="py-16 bg-[#030508]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex px-3 py-1 rounded-full border border-cyan-300/30 bg-cyan-300/10 text-cyan-200 text-xs font-semibold tracking-[0.14em] uppercase">
            Industries We Serve
          </span>
          <p className="text-cyan-400 text-lg mt-2">Deep Domain Expertise Across Verticals</p>
        </motion.div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-500/30 transition-all cursor-pointer group"
              onClick={() => navigate(`/industries#${industry.id}`)}
            >
              <div className={`w-12 h-12 ${industry.bg} rounded-lg flex items-center justify-center mb-4`}>
                <industry.icon className={`w-6 h-6 ${industry.color}`} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">{industry.title}</h4>
              <p className="text-gray-400 text-sm">{industry.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
