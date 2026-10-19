import React, { useState } from 'react';
import { Phone, PhoneCall, User, Check, Sparkles, Store, Shield } from 'lucide-react';
import { STORE_INFO } from '../data/storeInfo';

export default function Contact() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, phone) => {
    navigator.clipboard.writeText(phone);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#F3EBDD]/70 border-t border-[#F3EBDD] relative overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#245C3A]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[#D8A84E]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading & Intro */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D8A84E]/40 text-[#245C3A] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Store className="w-3.5 h-3.5 text-[#D8A84E]" />
            <span>Store Inquiries & Support</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#245C3A] tracking-tight">
            Contact Us
          </h2>

          {/* Exact suggested introductory text */}
          <p className="text-base sm:text-lg text-[#252A24]/85 mt-4 leading-relaxed font-normal">
            {STORE_INFO.contactsIntro}
          </p>
        </div>

        {/* Two Visually Balanced Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {STORE_INFO.contacts.map((contact, index) => (
            <div
              key={contact.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F3EBDD] shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group text-left"
            >
              {/* Decorative top corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#D8A84E]/10 rounded-bl-full pointer-events-none group-hover:bg-[#245C3A]/10 transition-colors" />

              <div className="flex items-start gap-4 sm:gap-5 mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#245C3A] text-[#FFF9EF] flex items-center justify-center flex-shrink-0 shadow-md group-hover:bg-[#3F7D4A] transition-colors">
                  <User className="w-7 h-7 text-[#D8A84E]" />
                </div>
                
                <div className="min-w-0 flex-1">
                  <span className="text-xs uppercase tracking-widest text-[#D8A84E] font-bold block mb-1">
                    Store Representative {index + 1}
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#252A24] leading-snug">
                    {contact.name}
                  </h3>
                  <span className="inline-block mt-1 text-xs px-2.5 py-0.5 rounded-full bg-[#FFF9EF] text-[#245C3A] border border-[#F3EBDD] font-medium">
                    Direct Contact
                  </span>
                </div>
              </div>

              {/* Phone Information Box */}
              <div className="bg-[#FFF9EF] p-4 sm:p-5 rounded-2xl border border-[#F3EBDD] mb-6">
                <span className="text-xs text-[#686E66] block font-medium mb-1">
                  Phone Number
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-2xl sm:text-3xl font-bold font-serif text-[#245C3A] hover:text-[#3F7D4A] tracking-wide transition-colors flex items-center gap-2"
                  >
                    <PhoneCall className="w-5 h-5 text-[#D8A84E] inline-block animate-pulse" />
                    <span>{contact.phone}</span>
                  </a>

                  {/* Copy number button for desktop convenience */}
                  <button
                    type="button"
                    onClick={() => handleCopy(contact.id, contact.phone)}
                    className="p-2 text-xs rounded-xl text-[#686E66] hover:text-[#245C3A] hover:bg-white transition-colors"
                    title="Copy phone number"
                    aria-label={`Copy phone number for ${contact.name}`}
                  >
                    {copiedId === contact.id ? (
                      <span className="inline-flex items-center gap-1 text-xs text-[#245C3A] font-semibold">
                        <Check className="w-4 h-4 text-emerald-600" /> Copied
                      </span>
                    ) : (
                      <span className="text-xs underline font-medium">Copy</span>
                    )}
                  </button>
                </div>
              </div>

              {/* Click-to-Call Primary Action */}
              <a
                href={`tel:${contact.phone}`}
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl bg-[#245C3A] text-[#FFF9EF] font-semibold text-sm sm:text-base hover:bg-[#3F7D4A] transition-all shadow-md hover:shadow-lg transform active:scale-98"
              >
                <Phone className="w-4 h-4 text-[#D8A84E]" />
                <span>Call {contact.phone}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Store Welcome Footer Banner */}
        <div className="mt-12 max-w-2xl mx-auto text-center bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-[#F3EBDD]">
          <p className="text-xs sm:text-sm text-[#252A24] font-medium flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D8A84E]" />
            <span>Looking forward to serving you at <strong>Haji Ahmed Haji Jusab (Haji Makki) Store</strong></span>
          </p>
        </div>

      </div>
    </section>
  );
}
