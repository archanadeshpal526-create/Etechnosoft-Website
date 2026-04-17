import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Users, Clock, TrendingUp, Headphones } from 'lucide-react';

const stats = [
  { value: '6+', label: 'Service Lines', sub: 'Custom solutions', icon: Users },
  { value: '24/7', label: 'HITL Operations', sub: 'Always on', icon: Clock },
  { value: '8+', label: 'Industry Verticals', sub: 'Wide coverage', icon: TrendingUp },
  { value: '100%', label: 'Client Focus', sub: 'Your success', icon: Headphones },
];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} id="about" className="py-24 bg-[#030508]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
            About <span className="text-cyan-400 font-bold">Ethihaas</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden h-[300px] lg:h-[400px]"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030508]/80 via-[#030508]/30 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-xl text-white font-light leading-relaxed">
              Tech company based in Secunderabad. We build software that solves problems — not just looks good.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our differentiator: combining automation with human oversight. HITL operations ensure accuracy in healthcare monitoring, security systems, and autonomous applications.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              We value outcomes over presentations. Long-term partnerships with startups and enterprises who trust us for reliability and speed.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="p-6 bg-white/5 border border-white/10 rounded-xl text-center hover:bg-white/[0.05] transition-all"
            >
              {stat.icon && <stat.icon className="w-6 h-6 text-blue-400 mb-2 mx-auto" />}
              <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
              <p className="text-white font-medium mt-1">{stat.label}</p>
              <p className="text-gray-500 text-sm">{stat.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}