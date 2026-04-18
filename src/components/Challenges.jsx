import { motion } from 'framer-motion';
import { Clock, Layers, Brain, Users } from 'lucide-react';

const challenges = [
  {
    id: 'time-to-market',
    title: 'Slow Time-to-Market',
    description: 'Legacy systems and fragmented teams delay product launches, costing revenue and market share.',
    icon: Clock,
    color: 'text-orange-400',
    bg: 'bg-orange-500/20',
  },
  {
    id: 'tech-complexity',
    title: 'Tech Complexity',
    description: 'Managing multiple vendors, platforms, and technologies drains resources and creates silos.',
    icon: Layers,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/20',
  },
  {
    id: 'ai-oversight',
    title: 'AI Without Human Oversight',
    description: 'Pure AI surveillance generates false alerts, compliance risks, and missed critical events.',
    icon: Brain,
    color: 'text-purple-400',
    bg: 'bg-purple-500/20',
  },
  {
    id: 'talent-gaps',
    title: 'Talent Gaps',
    description: 'Finding, training, and retaining skilled IT professionals is expensive and time-consuming.',
    icon: Users,
    color: 'text-green-400',
    bg: 'bg-green-500/20',
  },
];

export default function Challenges() {
  return (
    <section id="challenges" className="py-20 bg-[#07101f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-white">Challenges</span>{' '}
            <span className="text-cyan-400">We Solve</span>
          </h2>
          <p className="text-slate-300 text-lg mt-3">Helping businesses overcome technology, talent, and operational barriers.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="h-full p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.25)] hover:bg-white/10 hover:border-cyan-400/40 hover:shadow-[0_14px_42px_rgba(0,0,0,0.32)] transition-all cursor-pointer group flex flex-col"
            >
              <div className={`w-12 h-12 ${challenge.bg} rounded-xl flex items-center justify-center mb-5`}>
                <challenge.icon className={`w-5 h-5 ${challenge.color}`} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                {challenge.title}
              </h4>
              <p className="text-slate-300/85 text-sm leading-relaxed mt-auto">{challenge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
