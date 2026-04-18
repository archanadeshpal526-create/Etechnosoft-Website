import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
  </svg>
);

const contactItems = [
  {
    label: 'Phone',
    value: '+91 7672003606',
    href: 'tel:+917672003606',
    icon: Phone,
    accent: 'bg-cyan-500/20 text-cyan-300',
  },
  {
    label: 'Email',
    value: 'ethihaastech@gmail.com',
    href: 'mailto:ethihaastech@gmail.com',
    icon: Mail,
    accent: 'bg-blue-500/20 text-blue-300',
  },
  {
    label: 'Address',
    value: 'Secunderabad, India',
    href: '',
    icon: MapPin,
    accent: 'bg-indigo-500/20 text-indigo-300',
  },
  {
    label: 'WhatsApp',
    value: 'Chat with us instantly',
    href: 'https://wa.me/917672003606',
    icon: MessageCircle,
    accent: 'bg-emerald-500/20 text-emerald-300',
  },
  {
    label: 'LinkedIn',
    value: 'Connect with our team',
    href: 'https://www.linkedin.com/',
    icon: LinkedInIcon,
    accent: 'bg-sky-500/20 text-sky-300',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[radial-gradient(circle_at_15%_20%,rgba(6,182,212,0.12),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.14),transparent_38%),#030508]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <span className="inline-flex relative -top-2 px-3 py-1 rounded-full border border-cyan-300/30 bg-cyan-400/10 text-cyan-200 text-xs font-semibold tracking-[0.08em] uppercase">
            Get in Touch
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight">
            Let's Build Something Great Together
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-300 text-base md:text-lg leading-relaxed">
            Speak with our team about software, cloud, staffing, or HITL AI operations. We respond quickly with practical next steps.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-[0_18px_45px_rgba(0,0,0,0.35)] p-6 md:p-10"
        >
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Details</h3>
              <div className="space-y-4">
                {contactItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.12 + index * 0.06 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-300"
                      >
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${item.accent}`}>
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 uppercase tracking-wide">{item.label}</p>
                          <p className="text-white text-sm md:text-base">{item.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/[0.03]">
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${item.accent}`}>
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 uppercase tracking-wide">{item.label}</p>
                          <p className="text-white text-sm md:text-base">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.16 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="h-12 w-full px-4 rounded-xl border border-white/15 bg-white/[0.03] text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20 transition"
                  />
                  <input
                    type="email"
                    placeholder="Work Email"
                    className="h-12 w-full px-4 rounded-xl border border-white/15 bg-white/[0.03] text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20 transition"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="h-12 w-full px-4 rounded-xl border border-white/15 bg-white/[0.03] text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20 transition"
                />
                <textarea
                  rows={5}
                  placeholder="Tell us about your requirement"
                  className="w-full px-4 py-3 rounded-xl border border-white/15 bg-white/[0.03] text-white placeholder-slate-500 resize-none focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20 transition"
                />
                <button
                  type="submit"
                  className="w-full h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold flex items-center justify-center gap-2 shadow-[0_10px_28px_rgba(6,182,212,0.32)] hover:shadow-[0_14px_34px_rgba(6,182,212,0.45)] hover:scale-[1.01] transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                  Submit Enquiry
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 rounded-3xl overflow-hidden border border-white/10 shadow-[0_14px_34px_rgba(0,0,0,0.3)]"
        >
          <iframe
            title="Ethihaas Technosoft Location"
            src="https://www.google.com/maps?q=Secunderabad,India&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[280px] md:h-[340px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
