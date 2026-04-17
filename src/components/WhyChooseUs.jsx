import { motion } from 'framer-motion';
import { Users, Clock, TrendingUp, Headphones, Globe, Award } from 'lucide-react';

const stats = [
  { num: '50+', label: 'Engineers', sub: 'Expert team', icon: Users },
  { num: '<30', label: 'Days to MVP', sub: 'Fast delivery', icon: Clock },
  { num: '100%', label: 'Retention', sub: '3+ years', icon: TrendingUp },
  { num: '24/7', label: 'Operations', sub: 'Always on', icon: Headphones },
];

const whyItems = [
  { icon: Globe, title: 'Global Delivery', desc: 'Serving clients worldwide' },
  { icon: Award, title: 'Quality Assured', desc: 'ISO 27001 certified' },
  { icon: Clock, title: 'Fast Turnaround', desc: 'Rapid MVP delivery' },
  { icon: Headphones, title: 'Dedicated Support', desc: '24/7 human support' },
];

const techStack = ['Python', 'React', 'Node.js', '.NET', 'Angular', 'Flutter', 'PostgreSQL', 'MS SQL', 'Docker', 'AWS', 'Azure', 'FastAPI', 'Kubernetes', 'MongoDB', 'Redis', 'GraphQL', 'TypeScript', 'Next.js'];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-[#030508]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
            Why <span className="text-cyan-400 font-bold">Ethihaas</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            We combine technology expertise with business acumen to deliver solutions that drive real growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white/5 border border-white/10 rounded-xl text-center hover:border-blue-500/30 hover:bg-white/[0.02] transition-all"
            >
              <item.icon className="w-6 h-6 text-blue-400 mb-3 mx-auto" />
              <h3 className="text-3xl font-bold text-white mb-1">{item.num}</h3>
              <p className="text-white font-medium">{item.label}</p>
              <p className="text-gray-500 text-sm mt-1">{item.sub}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {whyItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="p-6 bg-white/5 border border-white/10 rounded-xl text-center hover:border-white/20 transition-all h-full"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3 mx-auto">
                <item.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-center text-xl font-semibold text-white mb-6">Technologies We Use</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 group">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                className="p-4 bg-white/5 border border-white/10 rounded-lg text-center hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-500/40 hover:scale-105 transition-all cursor-default"
              >
                <span className="text-sm font-medium text-gray-300 group-hover:text-white">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}