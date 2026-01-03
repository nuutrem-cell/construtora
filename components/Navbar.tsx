
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white shadow-2xl py-3 border-b border-slate-200' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex flex-col items-start group">
          <span className={`text-2xl font-black tracking-tighter leading-none transition-colors duration-300 ${scrolled ? 'text-slate-950' : 'text-white'}`}>LEME</span>
          <span className={`text-[10px] tracking-[0.3em] font-bold uppercase transition-colors duration-300 ${scrolled ? 'text-amber-700' : 'text-slate-300'}`}>Construtora</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:text-amber-600 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-amber-600 after:transition-all hover:after:w-full ${
                location.pathname === item.path 
                  ? 'text-amber-600 after:w-full' 
                  : (scrolled ? 'text-slate-900' : 'text-white')
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 transition-transform active:scale-90"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={scrolled ? 'text-slate-900' : 'text-white'} size={28} />
          ) : (
            <Menu className={scrolled ? 'text-slate-900' : 'text-white'} size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-slate-950/98 backdrop-blur-xl z-40 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-white text-3xl font-serif tracking-widest uppercase hover:text-amber-500 transition-colors ${
                location.pathname === item.path ? 'text-amber-500' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-12 h-1 w-12 bg-amber-600"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
