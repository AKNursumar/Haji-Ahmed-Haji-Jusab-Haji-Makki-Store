import React from 'react';
import { Search, X } from 'lucide-react';
import { CATEGORIES } from '../data/storeInfo';

export default function CategoryFilter({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  totalResults
}) {
  return (
    <div className="space-y-6 mb-8">
      {/* Search Input Bar */}
      <div className="max-w-md mx-auto relative">
        <div className="relative">
          <Search className="w-4 h-4 text-[#686E66] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search groceries (e.g. Basmati, Atta, Almonds, Cardamom)..."
            className="w-full pl-11 pr-10 py-2.5 sm:py-3 rounded-full bg-white border border-[#F3EBDD] text-sm text-[#252A24] placeholder-[#686E66]/70 focus:outline-none focus:ring-2 focus:ring-[#245C3A] focus:border-transparent shadow-sm transition-all"
            aria-label="Search grocery products"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#686E66] hover:text-[#252A24] rounded-full"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Pill-shaped Category Filter Bar */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none px-1">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => onSelectCategory(cat)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer shadow-sm ${
                isSelected
                  ? 'bg-[#245C3A] text-[#FFF9EF] shadow-md ring-2 ring-[#245C3A]/20 scale-105'
                  : 'bg-white text-[#252A24] hover:bg-[#F3EBDD] hover:text-[#245C3A] border border-[#F3EBDD]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Results and Category Info Subtitle */}
      <div className="flex items-center justify-between text-xs sm:text-sm text-[#686E66] px-1 border-b border-[#F3EBDD] pb-3">
        <span>
          Showing <strong className="text-[#245C3A] font-bold">{totalResults}</strong> {totalResults === 1 ? 'item' : 'items'} in <span className="font-semibold text-[#252A24]">"{selectedCategory}"</span>
          {searchQuery && (
            <span> matching <strong className="text-[#245C3A]">"{searchQuery}"</strong></span>
          )}
        </span>
        <span className="hidden sm:inline-block text-xs text-[#686E66] italic">
          Sample reference prices in ₹
        </span>
      </div>
    </div>
  );
}
