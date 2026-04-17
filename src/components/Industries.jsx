import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const IndustryIcon = ({ name }) => {
  const icons = {
    healthcare: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M9 9h6"/>
        <path d="M9 12h6"/>
        <circle cx="8" cy="15" r="1"/>
        <circle cx="16" cy="15" r="1"/>
      </svg>
    ),
    manufacturing: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M2 12h6"/>
        <path d="M2 8h6"/>
        <path d="M2 16h6"/>
        <rect x="10" y="4" width="10" height="5" rx="1"/>
        <rect x="10" y="11" width="10" height="5" rx="1"/>
        <circle cx="21" cy="9" r="1"/>
        <circle cx="21" cy="15" r="1"/>
      </svg>
    ),
    hospitality: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M3 9l9-7 9 7"/>
        <path d="M2 21h20"/>
        <path d="M5 21v-9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v9"/>
        <rect x="9" y="14" width="6" height="7"/>
      </svg>
    ),
    automotive: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="7" cy="17" r="2"/>
        <circle cx="17" cy="17" r="2"/>
        <path d="M5 17h14"/>
        <path d="M5 12h5l2 3h4l2-3h3"/>
        <path d="M6 9V7"/>
      </svg>
    ),
    construction: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M2 22h20"/>
        <path d="M12 2v10"/>
        <path d="M7 12h10"/>
        <path d="M6 12V6l6-4 6 4v6"/>
        <path d="M8 12v3"/>
        <path d="M16 12v3"/>
      </svg>
    ),
    telecom: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="12" cy="12" r="8"/>
        <path d="M12 8v8"/>
        <path d="M8 12h8"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    energy: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v4"/>
        <path d="M12 18v4"/>
        <path d="M4.93 4.93l2.83 2.83"/>
        <path d="M16.24 16.24l2.83 2.83"/>
        <path d="M2 12h4"/>
        <path d="M18 12h4"/>
        <path d="M4.93 19.07l2.83-2.83"/>
        <path d="M16.24 7.76l2.83-2.83"/>
      </svg>
    ),
    entertainment: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M15 10l4 4-4 4"/>
        <path d="M9 10l-4 4 4 4"/>
        <rect x="4" y="4" width="16" height="16" rx="2"/>
      </svg>
    ),
  };
  return icons[name] || null;
};

const industries = [
  { id: 'healthcare', title: 'Healthcare', desc: 'HIPAA compliant solutions, telemedicine', bgImage: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&auto=format&q=80' },
  { id: 'manufacturing', title: 'Manufacturing', desc: 'Factory automation, smart supply chain', bgImage: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&auto=format&q=80' },
  { id: 'hospitality', title: 'Hospitality', desc: 'Hotel management, booking systems', bgImage: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&auto=format&q=80' },
  { id: 'automotive', title: 'Automotive', desc: 'Connected vehicles, telematics', bgImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&auto=format&q=80' },
  { id: 'construction', title: 'Construction', desc: 'Project tracking, BIM solutions', bgImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&auto=format&q=80' },
  { id: 'telecom', title: 'Telecom', desc: 'Network management, 5G solutions', bgImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&auto=format&q=80' },
  { id: 'energy', title: 'Energy', desc: 'Smart grids, renewable management', bgImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&auto=format&q=80' },
  { id: 'entertainment', title: 'Entertainment', desc: 'Gaming, streaming platforms', bgImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&auto=format&q=80' },
];

export default function Industries() {
  const location = useLocation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

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
    <section ref={ref} id="industries" className="py-32 bg-[#030508]">
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y }}>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.02) 2px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">Industries We Serve</span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mt-4">
            Domain <span className="text-cyan-400 font-bold">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              id={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative h-56 rounded-xl overflow-hidden cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${industry.bgImage})`, backgroundPosition: 'center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center text-blue-400">
                    <IndustryIcon name={industry.id} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white drop-shadow-lg">
                      {industry.title}
                    </h3>
                    <p className="text-gray-400 text-xs line-clamp-2">{industry.desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}