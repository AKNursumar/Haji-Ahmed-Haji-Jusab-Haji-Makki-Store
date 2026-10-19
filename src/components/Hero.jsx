import React from 'react';
import { ArrowDown, Phone, ShieldCheck, Sparkles, Store, Award, CheckCircle2 } from 'lucide-react';
import { STORE_INFO } from '../data/storeInfo';

export default function Hero({ onExploreClick, onContactClick }) {
  return (
    <section id="home" className="pt-24 sm:pt-28 pb-12 sm:pb-16 bg-[#FFF9EF] relative overflow-hidden">
      {/* Background Decorative Gradient Rings */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#D8A84E]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-24 w-80 h-80 rounded-full bg-[#245C3A]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Hero Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Store Heritage Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EBDD] border border-[#D8A84E]/40 text-[#245C3A] text-xs sm:text-sm font-semibold tracking-wide">
              <Store className="w-4 h-4 text-[#D8A84E]" />
              <span>Authentic Traditional Grocery Showcase</span>
            </div>

            {/* Complete Store Name Display */}
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#D8A84E] mb-1">
                Official Grocery Destination
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-[#245C3A] leading-[1.15] tracking-tight">
                {STORE_INFO.name}
              </h1>
            </div>

            {/* Welcoming Headline */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#252A24] font-serif">
              "{STORE_INFO.tagline}"
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#686E66] max-w-2xl leading-relaxed">
              {STORE_INFO.subtitle}
            </p>

            {/* Two Action Buttons (Strictly Section Navigation) */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#245C3A] text-[#FFF9EF] font-semibold text-sm sm:text-base hover:bg-[#3F7D4A] transition-all shadow-md hover:shadow-lg transform active:scale-95 group cursor-pointer"
              >
                <span>Explore Products</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#F3EBDD] text-[#245C3A] border border-[#245C3A]/20 font-semibold text-sm sm:text-base hover:bg-[#D8A84E]/20 transition-all shadow-sm hover:shadow transform active:scale-95 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#245C3A]" />
                <span>Contact Us</span>
              </button>
            </div>

            {/* Quick Value Pillars */}
            <div className="pt-6 border-t border-[#F3EBDD] grid grid-cols-3 gap-3 sm:gap-6 text-left">
              <div>
                <p className="text-sm sm:text-base font-bold text-[#245C3A]">7 Categories</p>
                <p className="text-xs text-[#686E66]">Daily essentials</p>
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-[#245C3A]">Fresh & Pure</p>
                <p className="text-xs text-[#686E66]">Carefully chosen</p>
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-[#245C3A]">Local Store</p>
                <p className="text-xs text-[#686E66]">Direct customer service</p>
              </div>
            </div>

          </div>

          {/* Hero Visual Imagery Column */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative group">
              {/* Outer decorative card frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFFFFF] bg-[#F3EBDD]">
                <img
                  src="/images/hero_store.jpg"
                  alt="Haji Ahmed Haji Jusab Store - Traditional Grocery Essentials"
                  className="w-full h-[300px] sm:h-[380px] lg:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Subtle gradient overlay at bottom of image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#252A24]/85 via-transparent to-transparent flex flex-col justify-end p-5 sm:p-6 text-white text-left">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#245C3A]/85 backdrop-blur-md text-xs font-semibold text-[#FFF9EF] w-fit mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#D8A84E]" />
                    <span>In-Store Fresh Selection</span>
                  </span>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-white">
                    Grains, Pulses, Spices & Dry Fruits
                  </h3>
                  <p className="text-xs text-white/80">
                    Handpicked everyday staples for your family
                  </p>
                </div>
              </div>
            </div>

            {/* Trusted Quality Banner - Integrated Naturally Without Any Overlap */}
            <div className="mt-4 bg-white p-3.5 sm:p-4 rounded-2xl shadow-md border border-[#F3EBDD] flex items-center justify-between gap-3 w-full">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#245C3A] flex items-center justify-center text-[#D8A84E] flex-shrink-0 shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-bold text-[#245C3A] uppercase tracking-wider">Trusted Quality</p>
                  <p className="text-xs text-[#686E66]">Traditional Heritage & Authenticity</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-[#245C3A] bg-[#FFF9EF] px-3 py-1 rounded-full border border-[#D8A84E]/30 whitespace-nowrap">
                <Sparkles className="w-3 h-3 text-[#D8A84E]" /> Verified Essentials
              </span>
            </div>

          </div>

        </div>

        {/* Welcome / Store Introduction Section (Below the Hero) */}
        <div className="mt-16 sm:mt-20 pt-10 sm:pt-12 border-t border-[#F3EBDD]">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D8A84E]">
              About Our Store
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#245C3A]">
              Welcome to Our Store
            </h2>
            <p className="text-base sm:text-lg text-[#252A24]/85 leading-relaxed font-normal">
              {STORE_INFO.welcomeText}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
