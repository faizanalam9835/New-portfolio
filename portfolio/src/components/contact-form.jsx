import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { toast } from "sonner";
import { User, Mail, FileText, Send, MessageCircle } from "lucide-react";
import emailjs from "emailjs-com";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = "service_lb8w9sl";
      const templateId = "template_w8f67ib";
      const userId = "x41jRUElgsWxPXgGm";

      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      };

      await emailjs.send(serviceId, templateId, templateParams, userId);

      toast.success("Thank you! Your message has been sent. I'll get back to you soon.");

      setFormData({ name: "", email: "", subject: "", message: "" });

    } catch (error) {
      console.error("Email sending failed:", error);
      toast.error("Failed to send message. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full h-full"
    >
      <div className="bg-white rounded-xl border border-[#d7e2dc] p-6 h-full">
        <form onSubmit={handleSubmit} className="space-y-4 h-full flex flex-col">
          
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center mb-2">
              <User className="size-4 text-[#d7e2dc] mr-2" />
              <p className="font-medium text-gray-800 text-sm">Your Name</p>
            </div>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white border border-[#d7e2dc] rounded-lg text-sm text-gray-800 outline-none"
              placeholder="John Doe"
            />
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center mb-2">
              <Mail className="size-4 text-[#d7e2dc] mr-2" />
              <p className="font-medium text-gray-800 text-sm">Your Email</p>
            </div>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white border border-[#d7e2dc] rounded-lg text-sm text-gray-800 outline-none"
              placeholder="john@example.com"
            />
          </motion.div>

          {/* Subject */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center mb-2">
              <FileText className="size-4 text-[#d7e2dc] mr-2" />
              <p className="font-medium text-gray-800 text-sm">Subject</p>
            </div>
            <input
              type="text"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white border border-[#d7e2dc] rounded-lg text-sm text-gray-800 outline-none"
              placeholder="What's this about?"
            />
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex-1"
          >
            <div className="flex items-center mb-2">
              <MessageCircle className="size-4 text-[#d7e2dc] mr-2" />
              <p className="font-medium text-gray-800 text-sm">Message</p>
            </div>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-3 py-2 bg-white border border-[#d7e2dc] rounded-lg text-sm text-gray-800 outline-none resize-none"
              placeholder="Tell me about your project, opportunity, or just say hi!"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-2"
          >
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#d7e2dc] text-gray-800 hover:bg-[#c5d5cc] transition-colors py-2.5 text-sm font-medium rounded-lg flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-gray-800"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="size-3" />
                  Send Message
                </>
              )}
            </Button>
          </motion.div>
        </form>
      </div>
    </motion.div>
  );
};
