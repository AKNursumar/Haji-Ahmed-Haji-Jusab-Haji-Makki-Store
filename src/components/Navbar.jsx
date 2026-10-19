import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data/storeInfo';

export default function Navbar({ activeSection, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Products', href: '#products', id: 'products' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFF9EF]/95 backdrop-blur-md shadow-md py-3 border-b border-[#F3EBDD]'
          : 'bg-[#FFF9EF] py-4 border-b border-[#F3EBDD]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo & Name */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, 'home')}
            className="flex items-center gap-3 group text-left min-w-0"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#245C3A] flex items-center justify-center text-[#FFF9EF] shadow-sm flex-shrink-0 group-hover:bg-[#3F7D4A] transition-colors">
              <svg className="w-6 h-6 text-[#D8A84E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
                <path d="M3 6h18"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            </div>
            
            <div className="min-w-0">
              <span className="block text-xs uppercase tracking-widest text-[#D8A84E] font-semibold">
                Traditional Grocery Store
              </span>
              {/* Desktop single line or compact balanced name */}
              <h1 className="text-sm sm:text-base lg:text-lg font-bold text-[#245C3A] font-serif tracking-tight leading-tight group-hover:text-[#3F7D4A] transition-colors truncate">
                <span className="hidden md:inline">Haji Ahmed Haji Jusab (Haji Makki) Store</span>
                <span className="md:hidden">
                  <span className="block font-semibold">Haji Ahmed Haji Jusab</span>
                  <span className="block text-xs text-[#686E66] font-normal">(Haji Makki) Store</span>
                </span>
              </h1>
            </div>
          </a>

          {/* Desktop Navigation Links (Only Home, Products, Contact) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#245C3A] text-[#FFF9EF] shadow-sm'
                      : 'text-[#252A24] hover:text-[#245C3A] hover:bg-[#F3EBDD]/60'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            {/* Direct Contact Call Shortcut */}
            <a
              href="tel:9909779072"
              className="ml-3 inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-[#245C3A] bg-[#F3EBDD] hover:bg-[#D8A84E]/20 rounded-full border border-[#D8A84E]/40 transition-colors"
              title="Call store directly"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#245C3A]" />
              <span>9909779072</span>
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="tel:9909779072"
              className="p-2 text-[#245C3A] bg-[#F3EBDD] rounded-lg"
              aria-label="Call store"
            >
              <PhoneCall className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#252A24] hover:bg-[#F3EBDD] focus:outline-none focus:ring-2 focus:ring-[#245C3A]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFF9EF] border-b border-[#F3EBDD] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#245C3A] text-[#FFF9EF]'
                      : 'text-[#252A24] hover:bg-[#F3EBDD]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-[#F3EBDD] space-y-2">
            <p className="text-xs uppercase tracking-wider text-[#686E66] font-semibold px-4">
              Direct Contact Lines
            </p>
            <div className="grid grid-cols-1 gap-2 px-2">
              <a
                href="tel:9909779072"
                className="flex items-center justify-between px-3 py-2 bg-[#F3EBDD]/70 rounded-lg text-sm text-[#245C3A] font-medium"
              >
                <span>Haji Aminbhai</span>
                <span className="font-bold flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5" /> 9909779072
                </span>
              </a>
              <a
                href="tel:9033804124"
                className="flex items-center justify-between px-3 py-2 bg-[#F3EBDD]/70 rounded-lg text-sm text-[#245C3A] font-medium"
              >
                <span>Haji Gulammustufa</span>
                <span className="font-bold flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5" /> 9033804124
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
