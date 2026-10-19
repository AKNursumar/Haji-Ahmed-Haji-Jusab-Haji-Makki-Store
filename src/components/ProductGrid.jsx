import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import CategoryFilter from './CategoryFilter';
import { PRODUCTS } from '../data/products';
import { PackageOpen, Sparkles, RefreshCw } from 'lucide-react';

export default function ProductGrid({ selectedCategory, onSelectCategory }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on selected category and search input
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All Products' || product.category === selectedCategory;

      const matchesSearch =
        searchQuery.trim() === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleReset = () => {
    onSelectCategory('All Products');
    setSearchQuery('');
  };

  return (
    <section id="products" className="py-16 sm:py-20 bg-[#FFF9EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EBDD] border border-[#D8A84E]/30 text-[#245C3A] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D8A84E]" />
            <span>Store Inventory Showcase</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#245C3A] tracking-tight">
            Our Products
          </h2>
          
          <p className="text-base sm:text-lg text-[#686E66] mt-3 leading-relaxed">
            Discover our complete selection of fresh grocery essentials, premium dry fruits, aromatic whole and powdered spices, nutritious pulses, flours, and daily personal care items.
          </p>
        </div>

        {/* Category Filter & Search Bar */}
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => {
            onSelectCategory(cat);
            // Optionally keep or reset search
          }}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalResults={filteredProducts.length}
        />

        {/* Product Grid: 4 cols on desktop, 3 on md, 2 on mobile */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* Polished Empty State */
          <div className="bg-white rounded-3xl p-12 text-center border border-[#F3EBDD] max-w-lg mx-auto my-8 shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-[#F3EBDD] flex items-center justify-center text-[#245C3A] mx-auto mb-4">
              <PackageOpen className="w-8 h-8 text-[#D8A84E]" />
            </div>
            <h3 className="text-xl font-bold font-serif text-[#245C3A] mb-2">
              No Products Found
            </h3>
            <p className="text-sm text-[#686E66] mb-6">
              We couldn't find any grocery items matching "{searchQuery}". Try selecting another category or resetting the search filter.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#245C3A] text-[#FFF9EF] text-sm font-semibold hover:bg-[#3F7D4A] transition-colors cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Show All Products</span>
            </button>
          </div>
        )}

        {/* Informative Note at the bottom */}
        <div className="mt-12 p-4 rounded-2xl bg-[#F3EBDD]/60 border border-[#F3EBDD] max-w-3xl mx-auto text-center">
          <p className="text-xs text-[#686E66]">
            <strong>Note for customers:</strong> Prices displayed are sample reference rates in Indian Rupees (₹). For live store pricing, bulk purchases, or specific product inquiries, please contact our store representatives via the Contact section below.
          </p>
        </div>

      </div>
    </section>
  );
}
