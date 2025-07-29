import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_oxb3yaf', 'template_gxbl5op', formRef.current, {
        publicKey: 'etFC8F_Dplpk67trz',
      })
      .then(
        () => {
          alert('Message sent successfully!');
          formRef.current.reset();
        },
        (error) => {
          console.log('Failed to send message:', error.text);
          alert('Failed to send message. Please try again.');
        },
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 px-6 py-12 sm:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Lahore Map Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 rounded-2xl overflow-hidden shadow-xl border border-gray-700"
        >
          <div className="h-64 sm:h-80 md:h-96 w-full relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435518.6817854715!2d74.05418894335937!3d31.48322087500001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1718900000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-4 left-4 bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-gray-700">
              <h3 className="font-bold text-white">Lahore, Pakistan</h3>
              <p className="text-sm text-gray-300">Based in the heart of Punjab</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-700"
        >
          <div className="p-8 sm:p-10 md:p-12">
            <h2 className="relative text-3xl md:text-4xl font-bold text-center mb-10">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Get In Touch
              </span>
              <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
            </h2>

            <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label htmlFor="name" className="text-gray-300 font-medium">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Sadiq Hussain"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white transition-all"
                  required
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="text-gray-300 font-medium">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="sa4734542@gmail.com"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white transition-all"
                  required
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="phone" className="text-gray-300 font-medium">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+92 3203036988"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white transition-all"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="subject" className="text-gray-300 font-medium">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white transition-all"
                  required
                />
              </div>

              <div className="md:col-span-2 space-y-1">
                <label htmlFor="message" className="text-gray-300 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your message here..."
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white transition-all"
                  required
                ></textarea>
              </div>

              <div className="md:col-span-2 flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
                <div className="flex items-center space-x-3 group text-gray-400 hover:text-cyan-400 transition-colors">
                  <FaEnvelope className="text-lg transition-transform duration-300 group-hover:scale-110 group-hover:text-cyan-500" />
                  <a href="mailto:sa4734542@gmail.com">sa4734542@gmail.com</a>
                </div>

                <button
                  type="submit"
                  className="group px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center"
                >
                  Send Message
                  <FaPaperPlane className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12"
        >
          {/* Location */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-cyan-400/30">
            <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-cyan-400 mb-4 transition-transform duration-300 hover:scale-110 hover:text-cyan-300">
              <FaMapMarkerAlt className="text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
            <p className="text-gray-300">Lahore, Pakistan</p>
          </div>

          {/* Email */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-blue-400/30">
            <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-blue-400 mb-4 transition-transform duration-300 hover:scale-110 hover:text-blue-300">
              <FaEnvelope className="text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-300">sa4734542@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-indigo-400/30">
            <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-indigo-400 mb-4 transition-transform duration-300 hover:scale-110 hover:text-indigo-300">
              <FaPhoneAlt className="text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
            <p className="text-gray-300">+92 3203036988</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;