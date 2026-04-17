import { motion } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Users, Clock, Headphones } from 'lucide-react';

const features = [
  {
    id: 'results',
    highlight: '100%',
    title: 'Proven Results',
    description: 'Track record of delivering projects on time, on budget, with measurable business outcomes.',
    icon: CheckCircle,
    color: 'text-green-400',
    bg: 'bg-green-500/20',
  },
  {
    id: 'team',
    highlight: '50+',
    title: 'Skilled Team',
    description: 'Highly experienced professionals across software, cloud, AI, and staffing domains.',
    icon: Users,
    color: 'text-blue-400',
    bg: 'bg-blue-500/20',
  },
  {
    id: 'delivery',
    highlight: '<30',
    title: 'Timely Delivery',
    description: 'Agile methodology ensures rapid iterations, transparent communication, and on-schedule launches.',
    icon: Clock,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/20',
  },
  {
    id: 'partnership',
    highlight: '24/7',
    title: 'Dedicated Partnership',
    description: "We don't just deliver code — we become an extension of your team, invested in your success.",
    icon: Headphones,
    color: 'text-purple-400',
    bg: 'bg-purple-500/20',
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);

  return (
    <section ref={ref} id="why-us" className="py-16 bg-[#030508]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Why Choose <span className="text-cyan-400">Ethihaas?</span>
          </h2>
          <p className="text-cyan-400 text-lg mt-2">Results-Driven. Client-Focused. Always.</p>
        </motion.div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-500/30 transition-all cursor-pointer group"
            >
              <div className={`w-14 h-14 ${feature.bg} rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-4xl font-bold text-white mb-1">{feature.highlight}</h3>
              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h4>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}