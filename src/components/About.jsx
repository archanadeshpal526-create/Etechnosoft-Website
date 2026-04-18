import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Users, Clock, TrendingUp, Headphones } from 'lucide-react';

const metrics = [
  {
    value: '6+',
    title: 'Service Lines',
    description: 'Comprehensive delivery across software, cloud, staffing, and AI operations.',
    icon: Users,
  },
  {
    value: '24/7',
    title: 'HITL Operations',
    description: 'Continuous human-validated AI workflows for critical decision environments.',
    icon: Clock,
  },
  {
    value: '8+',
    title: 'Industry Verticals',
    description: 'Domain experience spanning regulated and high-performance sectors.',
    icon: TrendingUp,
  },
  {
    value: '100%',
    title: 'Client Focus',
    description: 'Execution built around transparency, accountability, and long-term outcomes.',
    icon: Headphones,
  },
];

const aboutContent = {
  title: 'Who We Are',
  text: 'Ethihaas Technosoft is a Secunderabad-based technology partner focused on delivering measurable business outcomes through modern engineering services.\n\nWe design and build scalable software products, modernize cloud environments, and provide dependable IT staffing to strengthen delivery teams with the right technical expertise.\n\nOur Human-in-the-Loop (HITL) AI operations combine automation with real-time human validation to improve accuracy, reduce risk, and support safety-critical workflows.',
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
    <section ref={ref} id="about" className="py-24 bg-[#030508]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
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
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.22 + index * 0.1, duration: 0.45, ease: 'easeOut' }}
                whileHover={{ scale: 1.02, y: -3 }}
                className="h-full p-6 backdrop-blur-md border rounded-2xl transition-all duration-300 shadow-[0_12px_32px_rgba(0,0,0,0.22)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.32)] flex flex-col items-start bg-white/5 border-white/10 hover:bg-white/10 hover:border-cyan-500/30"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-400/20 border border-cyan-300/30 flex items-center justify-center mb-4">
                  <metric.icon className="w-5 h-5 text-cyan-300" />
                </div>
                <h3 className="text-3xl font-bold text-white leading-none">{metric.value}</h3>
                <p className="text-white font-semibold mt-3">{metric.title}</p>
                <p className="text-slate-300 text-sm leading-relaxed mt-2">{metric.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
