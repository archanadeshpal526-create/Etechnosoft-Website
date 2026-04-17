import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Challenges from '../components/Challenges';
import { Code2, Globe, Brain, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

const homeServices = [
  { id: 'custom-software', title: 'Custom Software', icon: Code2, color: 'text-blue-400', bg: 'bg-blue-500/20' },
  { id: 'website-ecommerce', title: 'Website & E-Commerce', icon: Globe, color: 'text-cyan-400', bg: 'bg-cyan-500/20' },
  { id: 'ai-hitl', title: 'AI HITL Operations', icon: Brain, color: 'text-purple-400', bg: 'bg-purple-500/20' },
  { id: 'cloud-devops', title: 'Cloud & DevOps', icon: Cloud, color: 'text-green-400', bg: 'bg-green-500/20' },
];

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <section className="py-16 bg-[#030508]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
            {homeServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-500/30 transition-all cursor-pointer group"
              >
                <div className={`w-12 h-12 ${service.bg} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-white text-center group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Challenges />
    </>
  );
}