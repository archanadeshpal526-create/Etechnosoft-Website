import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { Zap, Award, Shield, Clock } from 'lucide-react';

const features = [
  { icon: Zap, title: 'Fast Delivery', desc: 'Ship MVPs in under 30 days' },
  { icon: Award, title: 'Expert Team', desc: '50+ seasoned engineers' },
  { icon: Shield, title: 'Secure', desc: 'ISO 27001 certified' },
  { icon: Clock, title: '24/7 Support', desc: 'Real humans, always on' },
];

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Hero />
      
      <section className="py-24 bg-[#030508]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Our <span className="text-cyan-400 font-bold">Strengths</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white/5 border border-white/10 rounded-xl text-center hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-500/40 hover:scale-105 transition-all"
              >
                <item.icon className="w-6 h-6 text-blue-400 mb-3 mx-auto" />
                <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}