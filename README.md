# Haji Ahmed Haji Jusab (Haji Makki) Store — Showcase Website

A modern, elegant, professional, and fully responsive static website designed for **Haji Ahmed Haji Jusab (Haji Makki) Store**.

This is strictly a **showcase website** to display grocery essentials, organize products into categories, present sample reference prices in Indian Rupees (₹), and provide direct telephone contact details.

---

## 🌟 Key Features

* **Strict Showcase Architecture**: No backend, no shopping cart, no checkout, no accounts, and no forms.
* **Three Core Navigation Sections**:
  1. **Home**: Hero banner with store branding, welcoming introduction, value pillars, and interactive category previews.
  2. **Products**: Complete product showcase with 7 categories, instant category pills, fast keyword search, and responsive 4-column grid.
  3. **Contact**: Visually balanced cards with clickable `tel:` links for direct phone calls.
* **Minimalist Product Cards**: Strictly displays product image, product name, and price with unit (`₹/kg`, `₹/500 g`, `₹/pack`, etc.).
* **All 7 Categories**:
  1. All Products
  2. Dry Fruits
  3. Rice, Lentils & Flours
  4. Grains
  5. Soap & Shampoo
  6. Raw Spices
  7. Powdered Spices
* **Direct Store Representatives**:
  * **Haji Aminbhai Nursumar (Makki)**: `9909779072`
  * **Haji Gulammustufa Nursumar**: `9033804124`
* **Centralized Frontend Data**: Easily update products and sample prices in `src/data/products.js` and contact info in `src/data/storeInfo.js`.

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production (static output in dist/)
npm run build
```

---

## 📂 Project Structure

```
├── public/
│   ├── favicon.svg             # Grocery leaf SVG icon
│   └── images/                 # Local high-res category and hero assets
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky header with mobile drawer
│   │   ├── Hero.jsx            # Welcoming hero section & store intro
│   │   ├── CategoryHighlights.jsx # 6 Category preview cards
│   │   ├── CategoryFilter.jsx  # 7 Filter pills & live search bar
│   │   ├── ProductCard.jsx     # Strictly image, name, & price
│   │   ├── ProductGrid.jsx     # Responsive grid & empty state
│   │   ├── Contact.jsx         # Direct contact cards with tel: links
│   │   └── Footer.jsx          # Footer & disclaimer
│   ├── data/
│   │   ├── products.js         # Centralized product catalog (62 items)
│   │   └── storeInfo.js        # Store info, categories, and contacts
│   ├── App.jsx                 # Main layout & section scroll handling
│   ├── main.jsx                # React root entry
│   └── index.css               # Tailwind CSS v4 design tokens
├── index.html                  # SEO tags and Google Fonts
└── package.json
```

---

## 🌐 Deployment to Vercel / Netlify

This project builds to a completely static `dist/` directory with zero runtime server dependencies:

```bash
npm run build
```

Upload the `dist/` directory or connect your repository to Netlify / Vercel with build command `npm run build` and publish directory `dist`.
