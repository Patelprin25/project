import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-50 border-t border-green-100 text-green-900 pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <Link to="/" className="flex items-center space-x-2 mb-4">
            <img
              src="/AET logo.png"
              alt="Arya EarthTech Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <p className="text-sm mb-4">
            Helping businesses navigate the complexities of ESG compliance and sustainability
            certification with expert consulting services.
          </p>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow hover:scale-105 hover:shadow-md transition-all duration-300 text-green-800"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow hover:scale-105 hover:shadow-md transition-all duration-300 text-green-800"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-green-700">Home</Link></li>
            <li><Link to="/services" className="hover:text-green-700">Services</Link></li>
            <li><Link to="/faq" className="hover:text-green-700">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-green-700">Contact</Link></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li>ESG Consulting</li>
            <li>GHG Emission Reporting</li>
            <li>PCF Reporting</li>
            <li>BRSR Reporting</li>
            <li>EcoVadis Certification</li>
            <li>SEDEX Certification</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start space-x-2">
              <MapPin size={35} className="text-green-700 mt-1" />
              <span>408, Rudra Arcade, Drive In Rd, Memnagar, Ahmedabad, Gujarat 380052</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={18} className="text-green-700" />
              <a href="mailto:info@aryaearthtech.com" className="hover:underline">info@aryaearthtech.com</a>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={18} className="text-green-700" />
              <a href="tel:+919727916390" className="hover:underline">+91 9727916390</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-green-200 pt-6 text-sm text-center text-green-800">
        <p>© 2025 Arya EarthTech Pvt Ltd. All rights reserved.</p>
        <p className="mt-1">
          Created by <a href="https://stackstir.com" className="font-semibold text-green-700 hover:underline">StackStir</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
