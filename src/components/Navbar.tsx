import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BarChart3, Mail } from 'lucide-react';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isAbout = location.pathname === '/about';

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About & Journey', path: '/about' },
    { name: 'Technical Skills', path: '/#skills' },
    { name: 'Portfolio Projects', path: '/#projects' },
    { name: 'Achievements', path: '/#achievements' }
  ];

  const handleContactClick = () => {
    window.location.href = 'mailto:neerajgahlout36@gmail.com?subject=Inquiry%20from%20Portfolio';
  };

  const handleNavClick = (path: string) => {
    setMenuOpen(false);
    if (path.startsWith('/#')) {
      const id = path.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If on another page, navigate to home first and let it scroll
        window.location.href = path;
      }
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 bg-transparent pointer-events-auto">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-gray-950 text-white p-2 rounded-xl shadow-sm">
            <BarChart3 size={18} />
          </div>
          <span className="font-bold text-gray-900 tracking-tight text-lg">NEERAJ GAHLOUT</span>
        </Link>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-white/40 backdrop-blur-md border border-gray-200/50 rounded-full px-2 py-1.5 items-center gap-1 shadow-sm">
          {navItems.map((item) => {
            const isActive = isAbout 
              ? item.path === '/about'
              : item.path === '/';

            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`text-xs font-medium px-4 py-1.5 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-gray-950 text-white shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/50'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <button 
          onClick={handleContactClick}
          className="hidden md:flex bg-gray-950 text-white text-xs font-medium px-5 py-2.5 rounded-full items-center gap-2 hover:bg-gray-800 transition-all shadow-sm active:scale-95 pointer-events-auto"
        >
          <Mail size={14} />
          <span>Get in Touch</span>
        </button>

        <button
          className="md:hidden text-gray-900 p-1.5 hover:bg-gray-100 rounded-full transition-colors pointer-events-auto border border-gray-200 bg-white/80 backdrop-blur-sm"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl pt-24 pb-8 px-6 shadow-xl flex flex-col gap-2 md:hidden pointer-events-auto border-b border-gray-200 animate-in fade-in slide-in-from-top-5 duration-300">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => handleNavClick(item.path)}
              className="text-gray-700 text-sm font-semibold py-3 border-b border-gray-100 text-left hover:text-gray-900 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <button 
            onClick={() => { setMenuOpen(false); handleContactClick(); }}
            className="mt-4 bg-gray-950 text-white text-sm font-medium py-3 rounded-xl flex items-center gap-2 justify-center hover:bg-gray-800 transition-colors shadow-md"
          >
            <Mail size={16} />
            <span>Get in Touch</span>
          </button>
        </div>
      )}
    </>
  );
}
