import { motion } from 'framer-motion';
import { Code2, Cloud, Users, Cpu } from 'lucide-react';

const services = [
  {
    id: 'software-development',
    title: 'Software Development',
    description: 'Custom applications and APIs engineered for performance, scalability, and long-term maintainability.',
    icon: Code2,
    iconBg: 'bg-cyan-500/15',
    iconColor: 'text-cyan-300',
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    description: 'Secure cloud architecture, migration, and DevOps enablement to accelerate delivery and uptime.',
    icon: Cloud,
    iconBg: 'bg-blue-500/15',
    iconColor: 'text-blue-300',
  },
  {
    id: 'it-staffing',
    title: 'IT Staffing',
    description: 'Skilled engineers and specialists aligned to your delivery model, timelines, and quality goals.',
    icon: Users,
    iconBg: 'bg-indigo-500/15',
    iconColor: 'text-indigo-300',
  },
  {
    id: 'hitl-ai-ops',
    title: 'HITL AI Operations',
    description: 'Human-in-the-loop validation workflows that improve AI reliability for safety-critical use cases.',
    icon: Cpu,
    iconBg: 'bg-emerald-500/15',
    iconColor: 'text-emerald-300',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#071120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <span className="inline-flex px-3 py-1 rounded-full border border-cyan-300/30 bg-cyan-400/10 text-cyan-200 text-xs font-semibold tracking-[0.14em] uppercase">
            Our Services
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white tracking-tight">
            Solutions Designed for Modern Businesses
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-300 text-base md:text-lg leading-relaxed">
            End-to-end technology capabilities built to support growth, operational resilience, and faster execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="h-full p-6 rounded-2xl border border-white/12 bg-slate-100/5 shadow-[0_10px_28px_rgba(0,0,0,0.24)] hover:shadow-[0_14px_34px_rgba(0,0,0,0.35)] hover:bg-slate-100/10 transition-all duration-300 flex flex-col"
            >
              <div className={`w-11 h-11 rounded-xl ${service.iconBg} border border-white/10 flex items-center justify-center mb-4`}>
                <service.icon className={`w-5 h-5 ${service.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
