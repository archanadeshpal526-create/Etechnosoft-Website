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
    <section id="challenges" className="py-16 bg-[#030508]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Challenges We <span className="text-cyan-400">Solve</span>
          </h2>
          <p className="text-cyan-400 text-lg mt-2">Helping businesses overcome technology, talent, and operational barriers.</p>
        </motion.div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-500/30 transition-all cursor-pointer group"
            >
              <div className={`w-12 h-12 ${challenge.bg} rounded-lg flex items-center justify-center mb-4`}>
                <challenge.icon className={`w-6 h-6 ${challenge.color}`} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {challenge.title}
              </h4>
              <p className="text-gray-400 text-sm">{challenge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
