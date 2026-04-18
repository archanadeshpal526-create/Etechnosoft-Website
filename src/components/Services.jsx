import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Code2, Settings, Zap, Globe, ShoppingCart, Shield, Monitor, Cpu, Layers, Cloud, Lock, Activity, Users, Search, CheckCircle, AlertTriangle, Phone, Eye, Car, HardHat, Signal, Gamepad2, Heart, Star } from 'lucide-react';

const softwareDevCards = [
  { id: 'tailored', title: 'Tailored Solutions', desc: 'Web and mobile solutions built around your core workflows and business priorities.', icon: Code2, color: 'text-blue-400', bg: 'bg-blue-500/20' },
  { id: 'integration', title: 'Seamless Integration', desc: 'Connect new applications with existing systems for reliable data flow and operations.', icon: Settings, color: 'text-cyan-400', bg: 'bg-cyan-500/20' },
  { id: 'productivity', title: 'Maximize Productivity', desc: 'Structured enablement and support to drive adoption and measurable performance gains.', icon: Zap, color: 'text-orange-400', bg: 'bg-orange-500/20' },
];

const websiteDevCards = [
  { id: 'ecommerce', title: 'E-Commerce Solutions', desc: 'Sales-ready commerce platforms with secure checkout, inventory control, and conversion focus.', icon: ShoppingCart, color: 'text-purple-400', bg: 'bg-purple-500/20' },
  { id: 'custom-websites', title: 'Custom Websites', desc: 'Responsive websites designed for usability, accessibility, and sustained performance.', icon: Globe, color: 'text-cyan-400', bg: 'bg-cyan-500/20' },
  { id: 'product-showcase', title: 'Product Showcases', desc: 'High-impact product pages that communicate value and improve buying decisions.', icon: Monitor, color: 'text-green-400', bg: 'bg-green-500/20' },
  { id: 'secure-payments', title: 'Secure Payments', desc: 'Trusted payment integrations with strong security controls and compliance support.', icon: Shield, color: 'text-pink-400', bg: 'bg-pink-500/20' },
];

const cloudDevopsCards = [
  { id: 'cloud-migration', title: 'Cloud Migration', desc: 'Move workloads to cloud platforms with minimal disruption and controlled risk.', icon: Cloud, color: 'text-blue-400', bg: 'bg-blue-500/20' },
  { id: 'cicd', title: 'CI/CD Pipelines', desc: 'Automate build and release workflows to improve delivery speed and quality.', icon: Layers, color: 'text-cyan-400', bg: 'bg-cyan-500/20' },
  { id: 'security', title: 'Security & Compliance', desc: 'Protect infrastructure with policy-led security and standards-aligned controls.', icon: Lock, color: 'text-orange-400', bg: 'bg-orange-500/20' },
  { id: 'monitoring', title: 'Monitoring & Optimization', desc: 'Continuous monitoring to improve uptime, scaling efficiency, and cloud cost usage.', icon: Activity, color: 'text-green-400', bg: 'bg-green-500/20' },
];

const staffingCards = [
  { id: 'talent-sourcing', title: 'Talent Sourcing', desc: 'Identify and onboard qualified IT professionals aligned to your delivery needs.', icon: Search, color: 'text-blue-400', bg: 'bg-blue-500/20' },
  { id: 'skill-assessment', title: 'Skill Assessment', desc: 'Evaluate candidates for technical depth, role fit, and execution readiness.', icon: CheckCircle, color: 'text-cyan-400', bg: 'bg-cyan-500/20' },
  { id: 'staff-augmentation', title: 'Staff Augmentation', desc: 'Scale teams quickly with vetted talent for short-term or long-term engagement.', icon: Users, color: 'text-purple-400', bg: 'bg-purple-500/20' },
];

const hitlSteps = [
  { id: 'detect', title: 'AI Detects', desc: 'Sensors capture and classify events', icon: Cpu, color: 'text-blue-400' },
  { id: 'alert', title: 'Alert Generated', desc: 'Potential threat is flagged instantly', icon: AlertTriangle, color: 'text-orange-400' },
  { id: 'review', title: 'HITL Review', desc: 'Operator validates in under 30 seconds', icon: Eye, color: 'text-cyan-400' },
  { id: 'escalation', title: 'Escalation', desc: 'Response protocol is triggered in real time', icon: Phone, color: 'text-red-400' },
];

const industries = [
  { id: 'healthcare', title: 'Healthcare', desc: 'Secure telehealth, HIPAA compliant, EHR integration', icon: Heart, color: 'text-red-400', bg: 'bg-red-500/20' },
  { id: 'manufacturing', title: 'Manufacturing', desc: 'Streamlined operations, optimized supply chains', icon: Cpu, color: 'text-blue-400', bg: 'bg-blue-500/20' },
  { id: 'hospitality', title: 'Hospitality', desc: 'Reservation systems, online booking, secure payments', icon: Star, color: 'text-yellow-400', bg: 'bg-yellow-500/20' },
  { id: 'automotive', title: 'Automotive', desc: 'Connected car apps, real-time navigation', icon: Car, color: 'text-cyan-400', bg: 'bg-cyan-500/20' },
  { id: 'construction', title: 'Construction', desc: 'Project management, better collaboration', icon: HardHat, color: 'text-orange-400', bg: 'bg-orange-500/20' },
  { id: 'telecom', title: 'Telecom', desc: 'Next-gen network infrastructure, enhanced reliability', icon: Signal, color: 'text-green-400', bg: 'bg-green-500/20' },
  { id: 'energy', title: 'Energy & Utilities', desc: 'Smart grid technologies, optimized distribution', icon: Zap, color: 'text-yellow-400', bg: 'bg-yellow-500/20' },
  { id: 'entertainment', title: 'Entertainment', desc: 'Interactive gaming apps, immersive experiences', icon: Gamepad2, color: 'text-purple-400', bg: 'bg-purple-500/20' },
];

function ServiceSection({ title, subtitle, description, cards, collapseKey }) {
  const ref = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash === `#${collapseKey}`) {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location, collapseKey]);

  const colClass = cards.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-20"
      id={collapseKey}
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
        {subtitle && <p className="text-cyan-400 text-lg mt-1">{subtitle}</p>}
        {description && <p className="text-gray-400 mt-3 max-w-2xl mx-auto">{description}</p>}
      </div>
      <div className={`grid ${colClass} gap-6`}>
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-500/30 transition-all cursor-pointer group"
            onClick={() => navigate(`/services#${card.id}`)}
          >
            <div className={`w-12 h-12 ${card.bg} rounded-lg flex items-center justify-center mb-4`}>
              <card.icon className={`w-6 h-6 ${card.color}`} />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">{card.title}</h4>
            <p className="text-gray-400 text-sm">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function HitlSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-20"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-white">Human-in-the-Loop AI Operations</h3>
        <p className="text-cyan-400 text-lg mt-1">24/7 human validation for safety-critical AI systems</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {hitlSteps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="h-full p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-500/30 transition-all text-center"
          >
            <div className={`w-16 h-16 ${step.color.replace('text-', 'bg-').replace('-400', '-500/20')} rounded-full flex items-center justify-center mx-auto mb-4`}>
              <step.icon className={`w-8 h-8 ${step.color}`} />
            </div>
            <h4 className="text-white font-semibold">{step.title}</h4>
            <p className="text-gray-400 text-sm mt-1">{step.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {['<30s Response Time', '24/7/365 Coverage', '60–70% Cost Savings'].map((highlight, i) => (
          <span key={i} className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
            {highlight}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <section id="services" className="py-16 bg-[#030508]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex px-3 py-1 rounded-full border border-cyan-300/30 bg-cyan-300/10 text-cyan-200 text-xs font-semibold tracking-[0.14em] uppercase">
            Our Services
          </span>
        </motion.div>

        <ServiceSection
          title="Software Development"
          subtitle="Tailored Solutions That Scale With Your Business"
          description="From concept to production-ready platforms for mission-critical business operations."
          cards={softwareDevCards}
          collapseKey="software-development"
        />

        <ServiceSection
          title="Website Development"
          subtitle="Digital Experiences That Convert"
          cards={websiteDevCards}
          collapseKey="website-development"
        />

        <ServiceSection
          title="Cloud & DevOps Services"
          subtitle="Infrastructure That Scales When You Do"
          description="Secure, scalable cloud operations designed for reliability and release velocity."
          cards={cloudDevopsCards}
          collapseKey="cloud-devops"
        />

        <ServiceSection
          title="IT Staffing & Training"
          subtitle="The Right Talent, Right When You Need It"
          cards={staffingCards}
          collapseKey="it-staffing"
        />

        <HitlSection />
      </div>
    </section>
  );
}
