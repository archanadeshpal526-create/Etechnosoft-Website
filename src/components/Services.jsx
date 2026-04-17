import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Code2, Settings, Zap, Globe, ShoppingCart, Shield, Monitor, Cpu, Layers, Cloud, Lock, Activity, Users, Search, CheckCircle, AlertTriangle, Phone, Eye, ArrowRight, Car, HardHat, Signal, Gamepad2, Heart, Star } from 'lucide-react';

const softwareDevCards = [
  { id: 'tailored', title: 'Tailored Solutions', desc: 'Responsive websites to native mobile apps, built for your specific business workflows.', icon: Code2, color: 'text-blue-400', bg: 'bg-blue-500/20' },
  { id: 'integration', title: 'Seamless Integration', desc: 'Expert system integration with existing software, optimized data handling and flow.', icon: Settings, color: 'text-cyan-400', bg: 'bg-cyan-500/20' },
  { id: 'productivity', title: 'Maximize Productivity', desc: 'Comprehensive training and continuous support for smooth implementation and full potential.', icon: Zap, color: 'text-orange-400', bg: 'bg-orange-500/20' },
];

const websiteDevCards = [
  { id: 'ecommerce', title: 'E-Commerce Solutions', desc: 'Custom e-commerce platforms with secure payments, robust inventory management, and personalized shopping experiences that drive sales.', icon: ShoppingCart, color: 'text-purple-400', bg: 'bg-purple-500/20' },
  { id: 'custom-websites', title: 'Custom Websites', desc: 'Bespoke, responsive websites prioritizing user experience, accessibility, and performance across all devices.', icon: Globe, color: 'text-cyan-400', bg: 'bg-cyan-500/20' },
  { id: 'product-showcase', title: 'Product Showcases', desc: 'Compelling online product presentations with high-quality visuals, interactive elements, and conversion-optimized layouts.', icon: Monitor, color: 'text-green-400', bg: 'bg-green-500/20' },
  { id: 'secure-payments', title: 'Secure Payments', desc: 'Enterprise-grade payment gateways that protect customer data, build trust, and ensure PCI compliance.', icon: Shield, color: 'text-pink-400', bg: 'bg-pink-500/20' },
];

const cloudDevopsCards = [
  { id: 'cloud-migration', title: 'Cloud Migration', desc: 'Seamless transition from on-premise to cloud with zero downtime and optimized costs.', icon: Cloud, color: 'text-blue-400', bg: 'bg-blue-500/20' },
  { id: 'cicd', title: 'CI/CD Pipelines', desc: 'Automated build, test, and deployment pipelines for rapid, reliable software delivery.', icon: Layers, color: 'text-cyan-400', bg: 'bg-cyan-500/20' },
  { id: 'security', title: 'Security & Compliance', desc: 'Enterprise-grade security, encryption, and compliance with industry standards.', icon: Lock, color: 'text-orange-400', bg: 'bg-orange-500/20' },
  { id: 'monitoring', title: 'Monitoring & Optimization', desc: '24/7 infrastructure monitoring, auto-scaling, and cost optimization.', icon: Activity, color: 'text-green-400', bg: 'bg-green-500/20' },
];

const staffingCards = [
  { id: 'talent-sourcing', title: 'Talent Sourcing', desc: 'We locate and attract skilled IT professionals, matching expertise with your organization\'s specific needs and culture.', icon: Search, color: 'text-blue-400', bg: 'bg-blue-500/20' },
  { id: 'skill-assessment', title: 'Skill Assessment', desc: 'Rigorous evaluation of technical abilities, qualifications, and soft skills to ensure candidates exceed your requirements.', icon: CheckCircle, color: 'text-cyan-400', bg: 'bg-cyan-500/20' },
  { id: 'staff-augmentation', title: 'Staff Augmentation', desc: 'Temporary or permanent staffing solutions, seamlessly integrating skilled professionals to enhance your team\'s capabilities.', icon: Users, color: 'text-purple-400', bg: 'bg-purple-500/20' },
];

const hitlSteps = [
  { id: 'detect', title: 'AI Detects', desc: 'Camera/sensor captures event', icon: Cpu, color: 'text-blue-400' },
  { id: 'alert', title: 'Alert Generated', desc: 'Weapon/face/pose identified', icon: AlertTriangle, color: 'text-orange-400' },
  { id: 'review', title: 'HITL Review', desc: 'Operator validates in <30 seconds', icon: Eye, color: 'text-cyan-400' },
  { id: 'escalation', title: 'Escalation', desc: 'Emergency/staff/lockdown triggered', icon: Phone, color: 'text-red-400' },
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

      <div className="grid md:grid-cols-4 gap-4 mb-8">
        {hitlSteps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="text-center"
          >
            <div className={`w-16 h-16 ${step.color.replace('text-', 'bg-').replace('-400', '-500/20')} rounded-full flex items-center justify-center mx-auto mb-4`}>
              <step.icon className={`w-8 h-8 ${step.color}`} />
            </div>
            <h4 className="text-white font-semibold">{step.title}</h4>
            <p className="text-gray-400 text-sm mt-1">{step.desc}</p>
            {index < hitlSteps.length - 1 && (
              <ArrowRight className="w-5 h-5 text-gray-600 mx-auto mt-4 hidden md:block" />
            )}
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
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our <span className="text-cyan-400 font-bold">Services</span>
          </h2>
        </motion.div>

        <ServiceSection
          title="Software Development"
          subtitle="Tailored Solutions That Scale With Your Business"
          description="From Idea to Production-Ready Software. We build full-stack applications, APIs, and automation systems tailored to your exact business needs."
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
          description="Scalable, secure cloud infrastructure designed for modern enterprises."
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