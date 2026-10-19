// Centralized Grocery Products Catalog
// All prices are sample reference rates formatted in Indian Rupees (₹)
// All images stored locally in public/images/products/ for reliable offline/static loading

export const PRODUCTS = [
  // ==========================================
  // Category: Dry Fruits (8 products)
  // ==========================================
  {
    id: 1,
    name: "California Almonds (Badam)",
    category: "Dry Fruits",
    price: 750,
    unit: "kg",
    image: "/images/products/california-almonds.jpg"
  },
  {
    id: 2,
    name: "Whole Cashew Nuts (Kaju)",
    category: "Dry Fruits",
    price: 820,
    unit: "kg",
    image: "/images/products/cashew-nuts.jpg"
  },
  {
    id: 3,
    name: "Roasted Pistachios (Pista)",
    category: "Dry Fruits",
    price: 980,
    unit: "kg",
    image: "/images/products/roasted-pistachios.jpg"
  },
  {
    id: 4,
    name: "Walnut Kernels (Akhrot Giri)",
    category: "Dry Fruits",
    price: 920,
    unit: "kg",
    image: "/images/products/walnut-kernels.jpg"
  },
  {
    id: 5,
    name: "Golden Raisins (Kismis)",
    category: "Dry Fruits",
    price: 340,
    unit: "kg",
    image: "/images/products/golden-raisins.jpg"
  },
  {
    id: 6,
    name: "Royal Black Dates (Khajoor)",
    category: "Dry Fruits",
    price: 260,
    unit: "500 g",
    image: "/images/products/black-dates.jpg"
  },
  {
    id: 7,
    name: "Dried Afghan Figs (Anjeer)",
    category: "Dry Fruits",
    price: 1150,
    unit: "kg",
    image: "/images/products/dried-figs.jpg"
  },
  {
    id: 8,
    name: "Dried Turkish Apricots (Jardalu)",
    category: "Dry Fruits",
    price: 520,
    unit: "500 g",
    image: "/images/products/dried-apricots.jpg"
  },

  // ==========================================
  // Category: Rice, Lentils & Flours (17 products)
  // ==========================================
  {
    id: 9,
    name: "Premium Long Grain Basmati Rice",
    category: "Rice, Lentils & Flours",
    price: 135,
    unit: "kg",
    image: "/images/products/basmati-rice.jpg"
  },
  {
    id: 10,
    name: "Wada Kolam Rice",
    category: "Rice, Lentils & Flours",
    price: 78,
    unit: "kg",
    image: "/images/products/kolam-rice.jpg"
  },
  {
    id: 11,
    name: "Sona Masoori Regular Rice",
    category: "Rice, Lentils & Flours",
    price: 62,
    unit: "kg",
    image: "/images/products/sona-masoori-rice.jpg"
  },
  {
    id: 12,
    name: "Unpolished Toor Dal (Arhar)",
    category: "Rice, Lentils & Flours",
    price: 165,
    unit: "kg",
    image: "/images/products/toor-dal.jpg"
  },
  {
    id: 13,
    name: "Yellow Split Moong Dal",
    category: "Rice, Lentils & Flours",
    price: 140,
    unit: "kg",
    image: "/images/products/moong-dal.jpg"
  },
  {
    id: 14,
    name: "Red Masoor Dal (Split Lentils)",
    category: "Rice, Lentils & Flours",
    price: 110,
    unit: "kg",
    image: "/images/products/masoor-dal.jpg"
  },
  {
    id: 15,
    name: "Chana Dal (Bengal Gram Split)",
    category: "Rice, Lentils & Flours",
    price: 105,
    unit: "kg",
    image: "/images/products/chana-dal.jpg"
  },
  {
    id: 16,
    name: "Urad Dal White (Split Black Gram)",
    category: "Rice, Lentils & Flours",
    price: 155,
    unit: "kg",
    image: "/images/products/urad-dal.jpg"
  },
  {
    id: 17,
    name: "Kabuli Chana (Big Chickpeas)",
    category: "Rice, Lentils & Flours",
    price: 145,
    unit: "kg",
    image: "/images/products/kabuli-chana.jpg"
  },
  {
    id: 18,
    name: "Desi Kala Chana (Brown Chickpeas)",
    category: "Rice, Lentils & Flours",
    price: 95,
    unit: "kg",
    image: "/images/products/kala-chana.jpg"
  },
  {
    id: 19,
    name: "Kashmiri Rajma (Red Kidney Beans)",
    category: "Rice, Lentils & Flours",
    price: 160,
    unit: "kg",
    image: "/images/products/rajma.jpg"
  },
  {
    id: 20,
    name: "Chakki Fresh Wheat Flour (Atta)",
    category: "Rice, Lentils & Flours",
    price: 42,
    unit: "kg",
    image: "/images/products/wheat-flour-atta.jpg"
  },
  {
    id: 21,
    name: "Pure Gram Flour (Besan)",
    category: "Rice, Lentils & Flours",
    price: 95,
    unit: "kg",
    image: "/images/products/gram-flour-besan.jpg"
  },
  {
    id: 22,
    name: "Fine Rice Flour",
    category: "Rice, Lentils & Flours",
    price: 55,
    unit: "kg",
    image: "/images/products/rice-flour.jpg"
  },
  {
    id: 23,
    name: "Refined Wheat Flour (Maida)",
    category: "Rice, Lentils & Flours",
    price: 48,
    unit: "kg",
    image: "/images/products/maida.jpg"
  },
  {
    id: 24,
    name: "Traditional Jowar Flour",
    category: "Rice, Lentils & Flours",
    price: 65,
    unit: "kg",
    image: "/images/products/jowar-flour.jpg"
  },
  {
    id: 25,
    name: "Stone Ground Bajra Flour",
    category: "Rice, Lentils & Flours",
    price: 50,
    unit: "kg",
    image: "/images/products/bajra-flour.jpg"
  },

  // ==========================================
  // Category: Grains (6 products)
  // ==========================================
  {
    id: 26,
    name: "Clean Sharbati Wheat (Gehu)",
    category: "Grains",
    price: 38,
    unit: "kg",
    image: "/images/products/sharbati-wheat.jpg"
  },
  {
    id: 27,
    name: "Dry Yellow Maize (Makka)",
    category: "Grains",
    price: 35,
    unit: "kg",
    image: "/images/products/yellow-maize.jpg"
  },
  {
    id: 28,
    name: "Whole White Jowar (Sorghum)",
    category: "Grains",
    price: 55,
    unit: "kg",
    image: "/images/products/white-jowar.jpg"
  },
  {
    id: 29,
    name: "Whole Pearl Millet (Bajra)",
    category: "Grains",
    price: 40,
    unit: "kg",
    image: "/images/products/pearl-millet-bajra.jpg"
  },
  {
    id: 30,
    name: "Whole Pearl Barley (Jau)",
    category: "Grains",
    price: 58,
    unit: "kg",
    image: "/images/products/pearl-barley.jpg"
  },
  {
    id: 31,
    name: "Finger Millet (Ragi / Nachni)",
    category: "Grains",
    price: 52,
    unit: "kg",
    image: "/images/products/finger-millet-ragi.jpg"
  },

  // ==========================================
  // Category: Soap & Shampoo (7 products)
  // ==========================================
  {
    id: 32,
    name: "Herbal Glycerine Bathing Soap",
    category: "Soap & Shampoo",
    price: 45,
    unit: "bar",
    image: "/images/products/glycerine-bathing-soap.jpg"
  },
  {
    id: 33,
    name: "Traditional Laundry Soap Bar",
    category: "Soap & Shampoo",
    price: 28,
    unit: "bar",
    image: "/images/products/laundry-soap-bar.jpg"
  },
  {
    id: 34,
    name: "Gentle Herbal Hair Shampoo (180 ml)",
    category: "Soap & Shampoo",
    price: 135,
    unit: "bottle",
    image: "/images/products/herbal-hair-shampoo.jpg"
  },
  {
    id: 35,
    name: "Shampoo Sachets Strip (Pack of 16)",
    category: "Soap & Shampoo",
    price: 32,
    unit: "pack",
    image: "/images/products/shampoo-sachets.jpg"
  },
  {
    id: 36,
    name: "Pure Coconut Hair Oil (200 ml)",
    category: "Soap & Shampoo",
    price: 85,
    unit: "bottle",
    image: "/images/products/coconut-hair-oil.jpg"
  },
  {
    id: 37,
    name: "Amla & Brahmi Hair Oil (150 ml)",
    category: "Soap & Shampoo",
    price: 75,
    unit: "bottle",
    image: "/images/products/amla-hair-oil.jpg"
  },
  {
    id: 38,
    name: "Neem & Turmeric Cleansing Soap",
    category: "Soap & Shampoo",
    price: 50,
    unit: "bar",
    image: "/images/products/neem-turmeric-soap.jpg"
  },

  // ==========================================
  // Category: Raw Spices (14 products)
  // ==========================================
  {
    id: 39,
    name: "Whole Cloves (Laung)",
    category: "Raw Spices",
    price: 125,
    unit: "100 g",
    image: "/images/products/whole-cloves.jpg"
  },
  {
    id: 40,
    name: "Green Cardamom (Chhoti Elaichi)",
    category: "Raw Spices",
    price: 280,
    unit: "100 g",
    image: "/images/products/green-cardamom.jpg"
  },
  {
    id: 41,
    name: "Black Cardamom (Badi Elaichi)",
    category: "Raw Spices",
    price: 185,
    unit: "100 g",
    image: "/images/products/black-cardamom.jpg"
  },
  {
    id: 42,
    name: "Cinnamon Sticks (Dalchini)",
    category: "Raw Spices",
    price: 95,
    unit: "100 g",
    image: "/images/products/cinnamon-sticks.jpg"
  },
  {
    id: 43,
    name: "Black Peppercorns (Kali Mirch)",
    category: "Raw Spices",
    price: 95,
    unit: "100 g",
    image: "/images/products/black-peppercorns.jpg"
  },
  {
    id: 44,
    name: "Whole Cumin Seeds (Jeera)",
    category: "Raw Spices",
    price: 65,
    unit: "100 g",
    image: "/images/products/cumin-seeds.jpg"
  },
  {
    id: 45,
    name: "Whole Coriander Seeds (Sabut Dhania)",
    category: "Raw Spices",
    price: 45,
    unit: "100 g",
    image: "/images/products/coriander-seeds.jpg"
  },
  {
    id: 46,
    name: "Sweet Fennel Seeds (Saunf)",
    category: "Raw Spices",
    price: 50,
    unit: "100 g",
    image: "/images/products/fennel-seeds.jpg"
  },
  {
    id: 47,
    name: "Black Mustard Seeds (Rai / Sarson)",
    category: "Raw Spices",
    price: 35,
    unit: "100 g",
    image: "/images/products/mustard-seeds.jpg"
  },
  {
    id: 48,
    name: "Fenugreek Seeds (Methi Dana)",
    category: "Raw Spices",
    price: 30,
    unit: "100 g",
    image: "/images/products/fenugreek-seeds.jpg"
  },
  {
    id: 49,
    name: "Star Anise (Chakra Phool)",
    category: "Raw Spices",
    price: 110,
    unit: "100 g",
    image: "/images/products/star-anise.jpg"
  },
  {
    id: 50,
    name: "Aromatic Bay Leaves (Tej Patta)",
    category: "Raw Spices",
    price: 25,
    unit: "50 g",
    image: "/images/products/bay-leaves.jpg"
  },
  {
    id: 51,
    name: "Dry Red Chillies (Sabut Lal Mirch)",
    category: "Raw Spices",
    price: 48,
    unit: "100 g",
    image: "/images/products/dry-red-chillies.jpg"
  },
  {
    id: 52,
    name: "Ajwain (Carom Seeds)",
    category: "Raw Spices",
    price: 40,
    unit: "100 g",
    image: "/images/products/ajwain-seeds.jpg"
  },

  // ==========================================
  // Category: Powdered Spices (10 products)
  // ==========================================
  {
    id: 53,
    name: "Pure Red Chilli Powder (Lal Mirch)",
    category: "Powdered Spices",
    price: 75,
    unit: "200 g",
    image: "/images/products/red-chilli-powder.jpg"
  },
  {
    id: 54,
    name: "Pure Turmeric Powder (Haldi)",
    category: "Powdered Spices",
    price: 65,
    unit: "200 g",
    image: "/images/products/turmeric-powder.jpg"
  },
  {
    id: 55,
    name: "Fresh Coriander Powder (Dhania)",
    category: "Powdered Spices",
    price: 55,
    unit: "200 g",
    image: "/images/products/coriander-powder.jpg"
  },
  {
    id: 56,
    name: "Roasted Cumin Powder (Jeera Powder)",
    category: "Powdered Spices",
    price: 85,
    unit: "200 g",
    image: "/images/products/cumin-powder.jpg"
  },
  {
    id: 57,
    name: "Finely Ground Black Pepper Powder",
    category: "Powdered Spices",
    price: 115,
    unit: "100 g",
    image: "/images/products/black-pepper-powder.jpg"
  },
  {
    id: 58,
    name: "Royal Garam Masala Blend",
    category: "Powdered Spices",
    price: 95,
    unit: "100 g",
    image: "/images/products/garam-masala.jpg"
  },
  {
    id: 59,
    name: "Tangy Chaat Masala",
    category: "Powdered Spices",
    price: 60,
    unit: "100 g",
    image: "/images/products/chaat-masala.jpg"
  },
  {
    id: 60,
    name: "Kitchen King All-Purpose Masala",
    category: "Powdered Spices",
    price: 80,
    unit: "100 g",
    image: "/images/products/kitchen-king-masala.jpg"
  },
  {
    id: 61,
    name: "Authentic South Indian Sambhar Masala",
    category: "Powdered Spices",
    price: 65,
    unit: "100 g",
    image: "/images/products/sambhar-masala.jpg"
  },
  {
    id: 62,
    name: "Sun-Dried Mango Powder (Amchur)",
    category: "Powdered Spices",
    price: 55,
    unit: "100 g",
    image: "/images/products/amchur-powder.jpg"
  }
];
