import { motion } from "framer-motion";
import { ContactForm } from "../components/contact-form";
import { contactInfo } from "../data/constants";
import * as LucideIcons from "lucide-react";
import { MessageCircle, Briefcase, Zap } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d7e2dc]/5 to-transparent" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#d7e2dc]/20 to-[#d7e2dc]/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-[#d7e2dc]/10 to-[#d7e2dc]/20 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-5xl font-display mb-4 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Let's <span className="text-[#d7e2dc]">Connect</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base text-gray-600 max-w-xl mx-auto mb-6"
            >
              I'm actively looking for opportunities to kickstart my career as a developer.<br />
              Feel free to reach out if you have an opening or just want to connect!
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Info Cards & Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Info Cards */}
              <div className="space-y-4">
                {/* Personal Touch Card */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="p-4 bg-white rounded-xl border border-[#d7e2dc] transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#d7e2dc] rounded-lg">
                      <MessageCircle className="size-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-base mb-1">Personal Touch</h3>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        I read every message personally and respond within 24 hours. Let's start a conversation!
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Open to Opportunities Card */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="p-4 bg-white rounded-xl border border-[#d7e2dc] transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#d7e2dc] rounded-lg">
                      <Briefcase className="size-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-base mb-1">Open to Opportunities</h3>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        Whether it's a job opportunity, collaboration, or just a chat about tech – I'd love to hear from you!
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Quick Response Card */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="p-4 bg-white rounded-xl border border-[#d7e2dc] transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#d7e2dc] rounded-lg">
                      <Zap className="size-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-base mb-1">Quick Response</h3>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        I'm passionate about connecting with fellow developers and potential employers. Expect a swift reply!
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Social Links Grid */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Or connect with me on</h3>
                  <p className="text-gray-600 text-sm">I'm active on these platforms</p>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  {contactInfo.map((contact, idx) => {
                    const LucideIcon = LucideIcons[contact.icon];
                    return (
                      <motion.a
                        key={idx}
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                        whileHover={{ y: -2 }}
                        className="relative group"
                      >
                        <div className="relative p-3 bg-white rounded-xl border border-[#d7e2dc] hover:border-[#d7e2dc] transition-all">
                          <div className="flex items-center gap-3">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                              className="inline-flex p-2 bg-[#d7e2dc] rounded-lg shadow-md"
                            >
                              <LucideIcon className="size-4 text-white" />
                            </motion.div>
                            <div>
                              <p className="font-medium text-gray-800 text-sm">{contact.label}</p>
                              <p className="text-xs text-gray-600">{contact.value}</p>
                            </div>
                          </div>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-full"
            >
              <ContactForm />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};