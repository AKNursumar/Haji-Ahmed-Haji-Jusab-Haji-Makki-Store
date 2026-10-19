import React, { useState } from 'react';

export default function ProductCard({ product }) {
  const [imageError, setImageError] = useState(false);

  // Fallback image map based on category
  const getFallbackImage = (category) => {
    switch (category) {
      case 'Dry Fruits':
        return '/images/cat_dry_fruits.jpg';
      case 'Rice, Lentils & Flours':
        return '/images/cat_rice_pulses.jpg';
      case 'Grains':
        return '/images/cat_grains.jpg';
      case 'Soap & Shampoo':
        return '/images/cat_personal_care.jpg';
      case 'Raw Spices':
        return '/images/cat_raw_spices.jpg';
      case 'Powdered Spices':
        return '/images/cat_powdered_spices.jpg';
      default:
        return '/images/hero_store.jpg';
    }
  };

  const formattedPrice = `₹${product.price.toLocaleString('en-IN')}`;
  const unitText = product.unit ? `/${product.unit}` : '';

  return (
    <div className="product-card group bg-white rounded-2xl overflow-hidden border border-[#F3EBDD] shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col text-left">
      
      {/* 1. Product Image Container (1:1 Aspect Ratio) */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#F3EBDD]/40">
        <img
          src={imageError ? getFallbackImage(product.category) : product.image}
          alt={product.name}
          onError={() => setImageError(true)}
          loading="lazy"
          className="img-zoom w-full h-full object-cover"
        />
      </div>

      {/* 2. Product Name & 3. Product Price ONLY */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        {/* Product Name */}
        <h3 className="text-sm sm:text-base font-semibold text-[#252A24] group-hover:text-[#245C3A] transition-colors line-clamp-2 leading-snug">
          {product.name}
        </h3>

        {/* Product Price in Indian Rupees (₹) with Unit */}
        <div className="mt-3 pt-2.5 border-t border-[#F3EBDD]/80 flex items-baseline gap-1">
          <span className="text-lg sm:text-xl font-bold font-serif text-[#245C3A]">
            {formattedPrice}
          </span>
          <span className="text-xs sm:text-sm text-[#686E66] font-medium">
            {unitText}
          </span>
        </div>
      </div>

    </div>
  );
}
