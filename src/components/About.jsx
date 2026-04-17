import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Users, Clock, TrendingUp, Headphones } from 'lucide-react';

const metrics = [
  { value: '6+', label: 'Service Lines', icon: Users },
  { value: '24/7', label: 'HITL Operations', icon: Clock },
  { value: '8+', label: 'Industry Verticals', icon: TrendingUp },
  { value: '100%', label: 'Client Focus', icon: Headphones },
];

const aboutContent = {
  title: 'Who We Are',
  text: 'Ethihaas Technosoft propels businesses forward in the digital age. Based in Secunderabad, India, we deliver innovative software solutions, cloud services, IT staffing, and specialized AI operations.\n\nOur flagship capability is Human-in-the-Loop (HITL) services — providing 24/7 human validation for safety-critical AI systems across healthcare, education, transportation, and security.\n\nWith a team of skilled professionals and deep domain expertise, we bridge the gap between cutting-edge AI automation and reliable human decision-making.',
};

export default function About() {
  const ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#about') {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <section ref={ref} id="about" className="py-16 bg-[#030508]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">{aboutContent.title}</h3>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              {aboutContent.text.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-center hover:bg-white/10 hover:border-cyan-500/30 transition-all"
              >
                <metric.icon className="w-6 h-6 text-cyan-400 mb-2 mx-auto" />
                <h3 className="text-3xl font-bold text-white">{metric.value}</h3>
                <p className="text-white font-medium mt-1">{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
