import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryHighlights from './components/CategoryHighlights';
import ProductGrid from './components/ProductGrid';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  // Track active section for navbar highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'products', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (categoryName) => {
    setSelectedCategory(categoryName);
    scrollToSection('products');
  };

  return (
    <div className="min-h-screen bg-[#FFF9EF] text-[#252A24] flex flex-col font-sans">
      {/* Sticky Header with Home, Products, Contact */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Home Section */}
        <Hero
          onExploreClick={() => scrollToSection('products')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* Product Category Preview Cards (Within Home section flow) */}
        <CategoryHighlights
          onSelectCategory={handleSelectCategory}
        />

        {/* 2. Products Section */}
        <ProductGrid
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* 3. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
