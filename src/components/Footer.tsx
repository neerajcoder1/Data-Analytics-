import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-10 px-5 sm:px-8 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 pointer-events-auto border-t border-gray-100">
      <p className="text-xs sm:text-sm text-gray-500 font-medium">
        © 2026 Neeraj Gahlout • BCA Data Analyst. Built with React, Tailwind CSS & Recharts.
      </p>
      <div className="flex items-center gap-5">
        <a 
          href="https://linkedin.com/in/neeraj-gahlout-b39993308" 
          target="_blank" 
          referrerPolicy="no-referrer"
          className="text-gray-500 hover:text-indigo-600 transition-colors"
          title="LinkedIn Profile"
        >
          <Linkedin size={16} />
        </a>
        <a 
          href="https://github.com/neerajcoder1" 
          target="_blank" 
          referrerPolicy="no-referrer"
          className="text-gray-500 hover:text-indigo-600 transition-colors"
          title="GitHub Code"
        >
          <Github size={16} />
        </a>
        <a 
          href="mailto:neerajgahlout36@gmail.com" 
          className="text-gray-500 hover:text-indigo-600 transition-colors"
          title="Email"
        >
          <Mail size={16} />
        </a>
      </div>
    </footer>
  );
}
