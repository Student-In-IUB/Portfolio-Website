
import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaTwitter
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = {
    instagram: 'https://www.instagram.com/sadiqaliashiq?igsh=enlweDd6a2p2eWl6',
    linkedin: 'https://www.linkedin.com/in/sadiq-hussain-9a85a2334/',
    twitter: 'https://twitter.com/sadiqaliashiq'
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 px-[10%] pt-16 pb-10 border-t border-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-700 pb-12">
        {/* About Me */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 hover:text-cyan-400 hover:underline transition duration-200">About Me</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Passionate about crafting interactive, responsive websites with modern technologies. I focus on clean code, performance, and user-friendly experiences.
          </p>
        </div>

        {/* Quick Menu */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 hover:text-cyan-400 hover:underline transition duration-200">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item, idx) => (
              <li key={idx}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="hover:text-cyan-400 hover:underline transition duration-200"
                >
                  › {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 hover:text-cyan-400 hover:underline transition duration-200">Services</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>› Custom Web Design</li>
            <li>› Responsive Development</li>
            <li>› React Applications</li>
            <li>› Frontend Optimization</li>
            <li>› UI/UX Integration</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 hover:text-cyan-400 hover:underline transition duration-200">Contact</h3>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-lg text-cyan-400" />
              <span>Lahore, Pakistan</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-lg text-blue-400" />
              <a href="tel:+923203036988" className="hover:text-blue-400 hover:underline">+92 320 3036988</a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-lg text-indigo-400" />
              <a href="mailto:sa4734542@gmail.com" className="hover:text-indigo-400 hover:underline">sa4734542@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social + Copyright */}
      <div className="pt-8 flex flex-col items-center justify-center gap-6">
        {/* Social Icons */}
        <div className="flex gap-5">
          {Object.entries(socialLinks).map(([platform, url]) => {
            const Icon =
              platform === 'instagram'
                ? FaInstagram
                : platform === 'linkedin'
                ? FaLinkedin
                : FaTwitter;
            return (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 p-[2px] rounded-full transition-transform hover:scale-110"
              >
                <div className="bg-gray-800 p-3 rounded-full w-12 h-12 flex items-center justify-center text-white hover:text-cyan-300 transition-colors duration-300">
                  <Icon className="text-xl" />
                </div>
              </a>
            );
          })}
        </div>

        <p className="text-xs text-gray-400 text-center">
          © {new Date().getFullYear()} Crafted with <span className="text-rose-400">❤️</span> by Sadiq Hussain. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;