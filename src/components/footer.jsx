import React from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  Music2,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Music2 className="text-red-500" />
            ND Music
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            Professional live music, original productions, studio recording,
            music education, and music equipment solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#projects" className="hover:text-white">Projeccts</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Live Music Band</li>
            <li>Music Production</li>
            <li>Recording Studio</li>
            <li>Music Academy</li>
            <li>Music Store</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +94 76 868 7042
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> info@neranjanmusic.lk
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Sri Lanka
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a href="https://facebook.com/YOUR_PAGE" className="hover:text-white">
              <Facebook />
            </a>
            <a href="https://www.instagram.com/neranjan.nd/" className="hover:text-white">
              <Instagram />
            </a>
            <a href="https://www.youtube.com/@Neranjan.Dissanayke" className="hover:text-white">
              <Youtube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-4 text-sm">
        © {new Date().getFullYear()} ND Music. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
