import { motion } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Users, Clock, Headphones } from 'lucide-react';

const features = [
  {
    id: 'results',
    highlight: '100%',
    title: 'Execution You Can Trust',
    description: 'Projects delivered with clear milestones, predictable timelines, and measurable business impact.',
    icon: CheckCircle,
    color: 'text-green-400',
    bg: 'bg-green-500/20',
  },
  {
    id: 'team',
    highlight: '50+',
    title: 'Specialized Technical Talent',
    description: 'Cross-functional experts in software, cloud, AI operations, and team augmentation.',
    icon: Users,
    color: 'text-blue-400',
    bg: 'bg-blue-500/20',
  },
  {
    id: 'delivery',
    highlight: '<30',
    title: 'Faster Delivery Cycles',
    description: 'Lean delivery model with short iterations, transparent reporting, and release discipline.',
    icon: Clock,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/20',
  },
  {
    id: 'partnership',
    highlight: '24/7',
    title: 'Long-Term Delivery Partner',
    description: 'Proactive support model aligned to your priorities, risk controls, and growth roadmap.',
    icon: Headphones,
    color: 'text-purple-400',
    bg: 'bg-purple-500/20',
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);

  return (
    <section ref={ref} id="why-us" className="pt-8 pb-16 bg-[#030508]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="h-full p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-500/30 transition-all cursor-pointer group flex flex-col justify-between items-start text-left"
            >
              <div className="flex flex-col items-start space-y-3">
                <div className={`w-14 h-14 ${feature.bg} rounded-lg flex items-center justify-center`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-4xl font-bold text-white">{feature.highlight}</h3>
                <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
