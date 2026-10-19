import React from 'react';
import { ArrowUp, Store, ShieldCheck } from 'lucide-react';
import { STORE_INFO } from '../data/storeInfo';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Products', id: 'products' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-[#245C3A] text-[#FFF9EF] pt-14 pb-8 border-t border-[#3F7D4A]/50 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#3F7D4A]/60">
          
          {/* Brand Info Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFF9EF] flex items-center justify-center text-[#245C3A]">
                <Store className="w-5 h-5 text-[#245C3A]" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D8A84E] font-semibold block">
                  Traditional Grocery Store
                </span>
                <h3 className="text-lg font-bold font-serif text-[#FFF9EF]">
                  {STORE_INFO.name}
                </h3>
              </div>
            </div>

            <p className="text-sm text-[#FFF9EF]/80 max-w-md leading-relaxed">
              Your trusted neighborhood destination for quality everyday essentials, grains, pulses, flours, dry fruits, authentic spices, and personal care items.
            </p>
          </div>

          {/* Quick Links Column (Only 3 sections) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#D8A84E]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#FFF9EF]/85">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-[#D8A84E] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Phone Lines */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#D8A84E]">
              Direct Inquiries
            </h4>
            <div className="space-y-2 text-sm text-[#FFF9EF]/85">
              <div>
                <p className="text-xs text-[#FFF9EF]/60">Haji Aminbhai</p>
                <a href="tel:9909779072" className="font-bold hover:text-[#D8A84E] transition-colors">
                  +91 99097 79072
                </a>
              </div>
              <div className="pt-1">
                <p className="text-xs text-[#FFF9EF]/60">Haji Gulammustufa</p>
                <a href="tel:9033804124" className="font-bold hover:text-[#D8A84E] transition-colors">
                  +91 90338 04124
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FFF9EF]/70">
          <div className="max-w-2xl text-center md:text-left">
            <p>
              © {new Date().getFullYear()} {STORE_INFO.name}. All rights reserved.
            </p>
            <p className="text-[11px] text-[#FFF9EF]/60 mt-1">
              * Note: This is strictly a static product showcase website. Displayed prices are sample reference rates. No online checkout or ordering system is enabled.
            </p>
          </div>

          {/* Scroll to Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#3F7D4A] hover:bg-[#D8A84E] hover:text-[#252A24] text-[#FFF9EF] text-xs font-semibold transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
