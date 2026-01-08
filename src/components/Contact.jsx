import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import Card from './Card';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } else setErrors(newErrors);
  };

  const copyEmail = async () => {
    const email = 'mehedirobidev@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  const copyPhone = async () => {
    const phone = '01336458100';
    try {
      await navigator.clipboard.writeText(phone);
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2200);
    } catch {}
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-4 bg-gray-800">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-white text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in <span className="text-pink-400">Touch</span>
        </motion.h2>

        <div className="h-[3px] w-24 bg-pink-400 mx-auto mb-14 rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-stretch md:items-center">
          <motion.div
            className="flex flex-col h-full"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Card hover={false} className="p-4 flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-white mb-3">Contact</h3>
              <p className="text-gray-400 mb-4">
                Connect with me on these platforms or send an email directly.
              </p>

              <div className="grid gap-3 flex-1">

                {/* GitHub */}
                <motion.a
                  href="https://github.com/mehdixun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition transform hover:-translate-y-0.5"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-2xl text-blue-400 group-hover:text-white transition">
                    <i className="fab fa-github"></i>
                  </div>
                  <div>
                    <div className="text-white font-semibold">GitHub</div>
                    <div className="text-gray-400 text-sm">View projects and source code</div>
                  </div>
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/in/mehedi-robi-76b38739b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition transform hover:-translate-y-0.5"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-2xl text-blue-500 group-hover:text-white transition">
                    <i className="fab fa-linkedin"></i>
                  </div>
                  <div>
                    <div className="text-white font-semibold">LinkedIn</div>
                    <div className="text-gray-400 text-sm">Connect professionally</div>
                  </div>
                </motion.a>

                {/* Email */}
                <motion.button
                  type="button"
                  onClick={copyEmail}
                  className="group flex items-center gap-4 p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition transform hover:-translate-y-0.5 w-full text-left"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-2xl text-pink-400 group-hover:text-white transition">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-gray-400 text-sm">mehedirobidev@gmail.com</div>
                  </div>
                  <div className="text-sm text-gray-300">{emailCopied ? 'Copied!' : 'Copy'}</div>
                </motion.button>

                {/* Phone */}
                <motion.button
                  type="button"
                  onClick={copyPhone}
                  className="group flex items-center gap-4 p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition transform hover:-translate-y-0.5 w-full text-left"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-2xl text-green-400 group-hover:text-white transition">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-gray-400 text-sm">01336458100</div>
                  </div>
                  <div className="text-sm text-gray-300">{phoneCopied ? 'Copied!' : 'Copy'}</div>
                </motion.button>

              </div>
            </Card>
          </motion.div>

          {/* Form */}
          <motion.div
            className="flex flex-col h-full"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Card hover={false} className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              {submitted && (
                <motion.div
                  className="mb-6 p-4 bg-green-600 bg-opacity-20 border border-green-500 rounded-lg text-green-400 flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <i className="fas fa-check-circle"></i>
                  <span>Thank you! Your message has been sent successfully.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {['name', 'email', 'subject'].map((field) => (
                  <div key={field}>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder={`Your ${field}`}
                      className={`w-full px-4 py-3 rounded-lg bg-gray-600 text-white border-2 focus:ring-2 focus:ring-pink-400 outline-none transition ${
                        errors[field] ? 'border-red-500' : 'border-gray-500'
                      }`}
                    />
                    {errors[field] && <p className="text-red-400 text-sm mt-1">{errors[field]}</p>}
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className={`w-full px-4 py-3 rounded-lg bg-gray-600 text-white border-2 focus:ring-2 focus:ring-pink-400 outline-none resize-none transition ${
                      errors.message ? 'border-red-500' : 'border-gray-500'
                    }`}
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full justify-center">
                  <i className="fas fa-paper-plane"></i> Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
