import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-secondary-black mt-16">
      <div className="px-6 py-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary-black">The Dragon News</h3>
            <p className="text-secondary-black text-sm mt-1">
              Journalism Without Fear or Favour
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-6 text-secondary-black font-medium">
            <a href="/about" className="hover:text-primary-black transition">About</a>
            <a href="/contact" className="hover:text-primary-black transition">Contact</a>
            <a href="/privacy" className="hover:text-primary-black transition">Privacy</a>
            <a href="/terms" className="hover:text-primary-black transition">Terms</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-secondary-black">
            <a
              href="https://www.facebook.com/RanaFacebook01"
              target="_blank"
              className="hover:text-primary-black transition text-xl"
            >
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-primary-black transition text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-primary-black transition text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-primary-black transition text-xl">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className=" my-6"></div>

        {/* Bottom Section */}
        <div className="text-center text-secondary-black text-sm">
          © {new Date().getFullYear()} The Dragon News. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
