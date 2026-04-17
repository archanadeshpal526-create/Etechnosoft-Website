import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const services = [
  {
    id: 'software-dev',
    title: 'Software Development',
    desc: 'Full-stack custom applications, APIs, and automation systems built for your exact workflow.',
    tags: ['Web', 'Mobile', 'APIs'],
    color: 'from-blue-500',
    bgImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    tech: ['Python', 'React', 'Node.js', '.NET', 'Angular', 'Flutter', 'PostgreSQL', 'MS SQL', 'Docker', 'AWS', 'Azure', 'FastAPI'],
  },
  {
    id: 'ai-operations',
    title: 'AI Operations (HITL)',
    desc: 'Human-in-the-loop validation for safety-critical AI systems.',
    tags: ['24/7', '<30s Response'],
    color: 'from-orange-500',
    bgImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    tech: ['Machine Learning', 'Computer Vision', 'NLP', 'Healthcare AI', 'Security AI'],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    desc: 'Scalable infrastructure with automated pipelines and enterprise-grade security.',
    tags: ['AWS', 'Azure', 'GCP'],
    color: 'from-cyan-500',
    bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    tech: ['Cloud Migration', 'CI/CD', 'Kubernetes', 'Docker', 'Infrastructure as Code', 'Monitoring'],
  },
  {
    id: 'it-staffing',
    title: 'IT Staffing',
    desc: 'Pre-vetted tech talent for projects or long-term team augmentation.',
    tags: ['Contract', 'Full-time'],
    color: 'from-green-500',
    bgImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    tech: ['Python Devs', 'React Devs', 'Node Devs', '.NET Devs', 'Cloud Engineers', 'Data Scientists'],
  },
  {
    id: 'ecommerce',
    title: 'Website & E-Commerce',
    desc: 'Modern websites and online stores with secure payment integrations.',
    tags: ['Online Stores', 'CMS'],
    color: 'from-purple-500',
    bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tech: ['Shopify', 'WooCommerce', 'React', 'Next.js', 'Stripe', 'Payment Gateway'],
  },
  {
    id: 'industry',
    title: 'Industry Solutions',
    desc: 'Custom software solutions tailored for specific industry needs.',
    tags: ['Healthcare', 'Manufacturing'],
    color: 'from-pink-500',
    bgImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    tech: ['ERP', 'CRM', 'Inventory', 'Supply Chain', 'Analytics'],
  },
];

export default function Services() {
  const navigate = useNavigate();
  const location = useLocation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end center"] });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

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
    <section ref={ref} id="services" className="py-24 bg-[#030508]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
            Our <span className="text-cyan-400 font-bold">Capabilities</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">Comprehensive technology solutions tailored to your business needs.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative h-[280px] rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-blue-500/40 transition-all"
              onClick={() => navigate(`/services#${service.id}`)}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.bgImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030508] via-[#030508]/50 to-transparent" />

              <div className="absolute top-4 left-4">
                <h3 className="text-xl font-bold text-white drop-shadow-lg">
                  {service.title}
                </h3>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-sm mb-3 font-medium line-clamp-2">{service.desc}</p>

                {service.tech && (
                  <div className="flex flex-wrap gap-1.5">
                    {service.tech.slice(0, 5).map((t, i) => (
                      <span key={i} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-md">
                        {t}
                      </span>
                    ))}
                    {service.tech.length > 5 && (
                      <span className="px-2 py-1 bg-white/5 text-gray-500 text-xs rounded-md">
                        +{service.tech.length - 5}
                      </span>
                    )}
                  </div>
                )}
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}