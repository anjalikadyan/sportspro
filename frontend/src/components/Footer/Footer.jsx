import React from 'react';
import './Footer.css';

const Footer = () => {
  const quickLinks = ['Sports Overview', 'Match Schedule', 'Tournaments', 'Team Directory', 'Contact Us'];
  const socialLinks = [
    { name: 'Facebook', icon: 'F' },
    { name: 'Twitter', icon: 'T' },
    { name: 'Instagram', icon: 'I' },
    { name: 'YouTube', icon: 'Y' }
  ];

  return (
    <footer className="bg-black/80 backdrop-blur-lg border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center">
                ⚽
              </div>
              <span className="text-2xl font-bold">SPORTSPRO</span>
            </div>
            <p className="text-gray-400">
              Professional sports management platform for organizing and managing sports events,
              tournaments, and team activities with efficiency and precision.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <span>📧</span>
                <span>info@sportspro.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>123 Sports Avenue, City, Country</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Follow Updates</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-orange-500 transition-colors text-lg font-bold"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
          <p className="mb-2">© 2024 SportsPro Management System. All rights reserved.</p>
          <p className="text-sm">
            This is a public view-only interface. For management access, please contact the system administrator.
          </p>
          <p className="text-xs mt-2 text-gray-600">
            View Mode: Public Interface | Admin Access Required for Management
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
