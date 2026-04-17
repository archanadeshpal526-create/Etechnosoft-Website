import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={ref} id="contact" className="py-24 bg-[#030508]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-pink-400 text-sm font-medium tracking-wider uppercase">Get In Touch</span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mt-4">
            Let's <span className="text-cyan-400 font-bold">Build Together</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-xl mx-auto text-lg">
            Ready to transform your ideas into reality? Whether you need a custom software solution, AI integration, or team augmentation — let's talk.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl">
              <h3 className="text-xl font-semibold text-white mb-6">Send a message</h3>
              <form className="space-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50" />
                  <input type="email" placeholder="Email" className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50" />
                </div>
                <input type="tel" placeholder="Phone" className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50" />
                <textarea placeholder="Tell us about your project..." rows={4} className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 resize-none" />
                <button type="submit" className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all">
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Info</h3>
              <div className="space-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Email</p>
                    <p className="text-white">ethihaastech@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Phone</p>
                    <p className="text-white">+91 7672003606</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Headquarters</p>
                    <p className="text-white">Secunderabad, Hyderabad, TS</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl">
              <h3 className="text-xl font-semibold text-white mb-4">Why Work With Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <span className="text-green-400">✓</span>
                  Quick response — within 24 hours
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <span className="text-green-400">✓</span>
                  Free initial consultation
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <span className="text-green-400">✓</span>
                  Flexible engagement models
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <span className="text-green-400">✓</span>
                  NDA protection guaranteed
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}