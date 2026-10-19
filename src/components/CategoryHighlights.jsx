import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CATEGORY_HIGHLIGHTS } from '../data/storeInfo';

export default function CategoryHighlights({ onSelectCategory }) {
  return (
    <section className="py-12 sm:py-16 bg-[#F3EBDD]/50 border-y border-[#F3EBDD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D8A84E] block mb-1">
              Curated Essentials
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#245C3A]">
              Explore by Category
            </h2>
            <p className="text-sm sm:text-base text-[#686E66] mt-1 max-w-xl">
              Select any category to view our dedicated product range, prices, and available varieties.
            </p>
          </div>

          <div className="hidden md:block">
            <span className="text-xs font-semibold text-[#245C3A] bg-white px-4 py-2 rounded-full border border-[#F3EBDD] shadow-sm">
              Click any category to filter
            </span>
          </div>
        </div>

        {/* 6 Category Highlight Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORY_HIGHLIGHTS.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.name)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-[#F3EBDD] transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col text-left"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectCategory(cat.name);
                }
              }}
              aria-label={`View ${cat.name} products`}
            >
              {/* Image with zoom effect */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-[#F3EBDD]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                
                {/* Item count tag */}
                <span className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-md text-[#245C3A] text-xs font-bold rounded-full shadow-sm">
                  {cat.itemCount}
                </span>

                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-xl font-bold font-serif text-white tracking-wide group-hover:text-[#D8A84E] transition-colors">
                    {cat.name}
                  </h3>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-white">
                <p className="text-xs sm:text-sm text-[#686E66] line-clamp-2">
                  {cat.description}
                </p>

                <div className="mt-4 pt-3 border-t border-[#F3EBDD] flex items-center justify-between text-xs font-bold text-[#245C3A] group-hover:text-[#3F7D4A]">
                  <span>Browse Products</span>
                  <div className="w-7 h-7 rounded-full bg-[#FFF9EF] group-hover:bg-[#245C3A] group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
