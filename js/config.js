/**
 * =========================================================================
 * CONFIG.JS - WEBSITE REBRANDING CONFIGURATION & ENGINE
 * =========================================================================
 * 
 * INSTRUCTIONS:
 * 1. Modify Section 1 (Data Entry) to update branding, styles, images, and content.
 * 2. Include this script at the end of index.html after index.js:
 *    
 * =========================================================================
 */

/* =========================================================================
   SECTION 1: DATA ENTRY CONFIGURATION
   ========================================================================= */
const REBRAND_CONFIG = {
  // --- BRAND IDENTIFICATION & META DATA ---
  brand: {
    name: "The Cafe Artist",
    suffix: "",
    tagline: "More Than A Cafe, An Experience",
    description: "The Cafe Artist offers an aesthetic hangout spot in Sector 18, Noida with delectable tandoori starters, pizzas, pastas, rolls, and mocktails.",
    keywords: "The Cafe Artist, Noida Cafe, Sector 18 Noida, Tandoori Starters, Paneer Tikka, Kebabs, Rolls, Cafe in Noida",
    themeColor: "#0d0e12",
    domain: "https://www.zomato.com/ncr/the-cafe-artist-sector-18-noida",
    ogImage: "https://lh3.googleusercontent.com/grass-cs/ACvplmNldgmz6sXgRhaR_IDT78EAscwhYv9ID7VpkPwyGO5POw48-mGMCjPe9PIO9TwUzGj54LH2P1nXnQzdmKgi4gSK_6cRFYlOJHXmOYZa5o4Wq9GRUl1Ds8bXjeyi309utNl-ie1v4sR2Su0_=w289-h312-n-k-no",
    faviconEmoji: "🎨",
    whatsappNumber: "918130305256"
  },

  // --- GLOBAL STYLES & THEMING ---
  styles: {
    colors: {
      bg: "#0d0e12",
      bgCard: "#15181e",
      bgLight: "#1c2028",
      primary: "#d4a373",
      primaryHover: "#faedcd",
      text: "#e0e2ec",
      textMuted: "#9aa0b4",
      accent: "#2c313c"
    },
    fonts: {
      heading: "'Syne', sans-serif",
      body: "'Plus Jakarta Sans', sans-serif"
    }
  },

  // --- HERO SECTION ---
  hero: {
    subtitle: "Welcome to Sector 18, Noida",
    title: "More Than A Cafe, An Experience",
    description: "Immerse yourself in artistic interiors, great music, and authentic tandoori delights prepared fresh daily.",
    bgImage: "https://lh3.googleusercontent.com/grass-cs/ACvplmNldgmz6sXgRhaR_IDT78EAscwhYv9ID7VpkPwyGO5POw48-mGMCjPe9PIO9TwUzGj54LH2P1nXnQzdmKgi4gSK_6cRFYlOJHXmOYZa5o4Wq9GRUl1Ds8bXjeyi309utNl-ie1v4sR2Su0_=w289-h312-n-k-no",
    stats: [
      { value: "100%", label: "Fresh Ingredients" },
      { value: "4.8 ★", label: "Customer Rating" },
      { value: "11:30 AM", label: "Open Daily Until 11:30 PM" }
    ]
  },

  // --- ABOUT US SECTION ---
  about: {
    subtitle: "About Us",
    title: "Artistic Vibes Meets Unforgettable Flavors",
    paragraphs: [
      "Located in the vibrant heart of Sector 18, Noida (in front of Metro Pillar 80), The Cafe Artist is designed as a sanctuary for food lovers and creative minds alike.",
      "Whether you are looking for a cozy spot to hang out with friends, indulge in sizzler starters, or enjoy artisanal pizzas and mocktails with ambient music, we bring you an unmatched experience."
    ],
    image: "https://lh3.googleusercontent.com/grass-cs/ACvplmMICpOhdJTD0tR5Yhi0pAKfTurFfOhjVyDpTyl4IFvcThxai7Yp4MxdKamOJzy8R7LXgtQkAzWED2E29DEiTO6slUrS3ajHqbEbdlxNuLH7XmHnP8Q0q_mzjPYNmwjJMUXmbafJqzRPPhE8=w145-h156-n-k-no",
    imageAlt: "Interior seating and artistic vibe of The Cafe Artist",
    experienceValue: "5★",
    experienceLabel: "Aesthetic Hangout Spot"
  },

  // --- SPECIALS / NEWLY ADDED FOOD ---
  specials: {
    subtitle: "House Specialties",
    title: "Chef's Recommendations",
    badge: "Must Try",
    description: "Savor our most popular tandoori starters and delicious fusion bites.",
    items: [
      {
        badge: "Bestseller",
        img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=600",
        alt: "Chicken Tikka",
        diet: "nonveg",
        title: "Chicken Tikka",
        price: "₹289",
        desc: "Tender chicken pieces marinated in yogurt and spices, grilled to perfection in a traditional tandoor."
      },
      {
        badge: "Popular",
        img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=600",
        alt: "Paneer Tikka",
        diet: "veg",
        title: "Paneer Tikka",
        price: "₹269",
        desc: "Cottage cheese cubes marinated with spices and herbs, charred in the tandoor with bell peppers."
      },
      {
        badge: "Chef's Pick",
        img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=600",
        alt: "Soya Malai Chaap",
        diet: "veg",
        title: "Soya Malai Chaap",
        price: "₹249",
        desc: "Juicy soya chaap marinated in rich cream, cashew paste, and aromatic light spices."
      }
    ]
  },

  // --- OFFERS SECTION ---
  offers: {
    subtitle: "Exclusive Deals",
    title: "Current Offers & Savings",
    items: [
      {
        tag: "DINEOUT SPECIAL",
        title: "Flat Discount via Swiggy Dineout",
        desc: "Book your table in advance on Swiggy Dineout and enjoy special discounts on your bill.",
        code: "DINEOUT",
        highlight: true
      },
      {
        tag: "COMBO OFFER",
        title: "Tandoori & Drink Combo",
        desc: "Order any Non-Veg or Veg Tandoori Starter and get complimentary refreshing iced teas.",
        code: "ARTISTCOMBO",
        highlight: false
      }
    ]
  },

  // --- FEATURED MENU SECTION ---
  menu: {
    subtitle: "Our Menu",
    title: "Tandoori Starters, Kebabs & Rolls",
    pdfUrl: "assets/cafe-artist-menu.pdf",
    pdfFilename: "The_Cafe_Artist_Menu.pdf",
    categories: [
      { id: "all", label: "All Items", active: true },
      { id: "nonveg_starters", label: "Non-Veg Starters", active: false },
      { id: "veg_starters", label: "Veg Starters", active: false },
      { id: "chaap", label: "Chaap", active: false },
      { id: "rolls", label: "Rolls", active: false },
      { id: "kebabs", label: "Kebabs", active: false }
    ],
    items: [
      // NON-VEGETARIAN STARTERS
      {
        category: "nonveg_starters",
        img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=600",
        title: "Chicken Tikka",
        price: "₹289",
        diet: "nonveg",
        desc: "Succulent chicken chunks marinated in spiced yogurt and grilled in a clay oven.",
        swiggyUrl: "https://www.swiggy.com/restaurants/noida/sector-18/the-cafe-artist-603339/dineout",
        zomatoUrl: "https://www.zomato.com/ncr/the-cafe-artist-sector-18-noida"
      },
      {
        category: "nonveg_starters",
        img: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&q=80&w=600",
        title: "Chicken Malai Tikka",
        price: "₹309",
        diet: "nonveg",
        desc: "Melt-in-your-mouth chicken marinated with fresh cream, cheese, and subtle aromatic spices.",
        swiggyUrl: "https://www.swiggy.com/restaurants/noida/sector-18/the-cafe-artist-603339/dineout",
        zomatoUrl: "https://www.zomato.com/ncr/the-cafe-artist-sector-18-noida"
      },
      {
        category: "nonveg_starters",
        img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600",
        title: "Afghani Chicken Tikka",
        price: "₹309",
        diet: "nonveg",
        desc: "Creamy, mild chicken tikka infused with garlic, cashew marinade, and grilled softly.",
        swiggyUrl: "https://www.swiggy.com/restaurants/noida/sector-18/the-cafe-artist-603339/dineout",
        zomatoUrl: "https://www.zomato.com/ncr/the-cafe-artist-sector-18-noida"
      },
      {
        category: "nonveg_starters",
        img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80&w=600",
        title: "Tandoori Chicken (Full / Half)",
        price: "₹480 / ₹260",
        diet: "nonveg",
        desc: "Classic whole roasted chicken marinated in authentic spices and traditional yogurt base.",
        swiggyUrl: "https://www.swiggy.com/restaurants/noida/sector-18/the-cafe-artist-603339/dineout",
        zomatoUrl: "https://www.zomato.com/ncr/the-cafe-artist-sector-18-noida"
      },
      
      // VEGETARIAN STARTERS
      {
        category: "veg_starters",
        img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=600",
        title: "Paneer Tikka",
        price: "₹269",
        diet: "veg",
        desc: "Cubes of fresh cottage cheese, peppers, and onions tossed in tandoori marinade.",
        swiggyUrl: "https://www.swiggy.com/restaurants/noida/sector-18/the-cafe-artist-603339/dineout",
        zomatoUrl: "https://www.zomato.com/ncr/the-cafe-artist-sector-18-noida"
      },
      {
        category: "veg_starters",
        img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=600",
        title: "Achari Paneer Tikka",
        price: "₹279",
        diet: "veg",
        desc: "Tangy and spicy pickled flavor paneer tikka charred over open flame.",
        swiggyUrl: "https://www.swiggy.com/restaurants/noida/sector-18/the-cafe-artist-603339/dineout",
        zomatoUrl: "https://www.zomato.com/ncr/the-cafe-artist-sector-18-noida"
      },
      {
        category: "veg_starters",
        img: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&q=80&w=600",
        title: "Tandoori Mushroom Tikka",
        price: "₹309",
        diet: "veg",
        desc: "Fresh button mushrooms coated in red spicy marinade and roasted on skewers.",
        swiggyUrl: "https://www.swiggy.com/restaurants/noida/sector-18/the-cafe-artist-603339/dineout",
        zomatoUrl: "https://www.zomato.com/ncr/the-cafe-artist-sector-18-noida"
      },

      // CHAAP
      {
        category: "chaap",
        img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=600",
        title: "Soya Malai Chaap",
        price: "₹249",
        diet: "veg",
        desc: "Rich, creamy, and smoky soya chaap marinated with cream and roasted to perfection.",
        swiggyUrl: "https://www.swiggy.com/restaurants/noida/sector-18/the-cafe-artist-603339/dineout",
        zomatoUrl: "https://www.zomato.com/ncr/the-cafe-artist-sector-18-noida"
      },
      {
        category: "chaap",
        img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=600",
        title: "Soya Tandoori Chaap",
        price: "₹249",
        diet: "veg",
        desc: "Classic spicy tandoori marinated soya chaap grilled on skewers.",
        swiggyUrl: "https://www.swiggy.com/restaurants/noida/sector-18/the-cafe-artist-603339/dineout",
        zomatoUrl: "https://www.zomato.com/ncr/the-cafe-artist-sector-18-noida"
      },

      // ROLLS
      {
        category: "rolls",
        img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&q=80&w=600",
        title: "Paneer Tikka Roll",
        price: "₹179",
        diet: "veg",
        desc: "Smoky paneer tikka stuffed inside a crispy wrapped flatbread with mint chutney and sliced onions.",
        swiggyUrl: "https://www.swiggy.com/restaurants/noida/sector-18/the-cafe-artist-603339/dineout",
        zomatoUrl: "https://www.zomato.com/ncr/the-cafe-artist-sector-18-noida"
      },
      {
        category: "rolls",
        img: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&q=80&w=600",
        title: "Chicken Tikka Roll",
        price: "₹179",
        diet: "nonveg",
        desc: "Flavorsome tandoori chicken chunks wrapped in a hot roll with green chutney.",
        swiggyUrl: "https://www.swiggy.com/restaurants/noida/sector-18/the-cafe-artist-603339/dineout",
        zomatoUrl: "https://www.zomato.com/ncr/the-cafe-artist-sector-18-noida"
      },

      // KEBABS
      {
        category: "kebabs",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600",
        title: "Chicken Seekh Kebab (4pcs)",
        price: "₹249",
        diet: "nonveg",
        desc: "Finely minced spiced chicken pressed onto skewers and grilled over hot coals.",
        swiggyUrl: "https://www.swiggy.com/restaurants/noida/sector-18/the-cafe-artist-603339/dineout",
        zomatoUrl: "https://www.zomato.com/ncr/the-cafe-artist-sector-18-noida"
      },
      {
        category: "kebabs",
        img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=600",
        title: "Mutton Seekh Kebab (4pcs)",
        price: "₹249",
        diet: "nonveg",
        desc: "Richly seasoned minced mutton skewers baked in the tandoor and served with lemons.",
        swiggyUrl: "https://www.swiggy.com/restaurants/noida/sector-18/the-cafe-artist-603339/dineout",
        zomatoUrl: "https://www.zomato.com/ncr/the-cafe-artist-sector-18-noida"
      }
    ]
  },

  // --- REVIEWS & TESTIMONIALS ---
  reviews: {
    subtitle: "Testimonials",
    title: "What Our Guests Say",
    items: [
      {
        stars: 5,
        text: "\"First time in The Cafe Artist and you have to go! The Chicken Spicy Pizza is to die for. IT WAS FIRE!! we will definitely be back again. Atmosphere is chill and cool but the staff is also really friendly. Considering the quality, the price is reasonable..\"",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100",
        name: "anuj katiyar",
        role: "Local Foodie"
      },
      {
        stars: 5,
        text: "\"The best place for hangout's. The food quality and taste is too good. Good ambience ✨ Best and supportive staff.\"",
        avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=100",
        name: "Prince",
        role: "Regular Visitor"
      },
      {
        stars: 5,
        text: "\"Aesthetic place... Lot of options like pasta, pizza, Mocktail, shakes and much more... Arty interior and music makes it perfect for evening hangout😍 😍\"",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
        name: "Diksha",
        role: "Local Guide"
      }
    ],
    googleCta: {
      title: "Loved your time at The Cafe Artist?",
      desc: "Help others discover our cozy spot by sharing your feedback on Google Maps!",
      url: "https://www.google.com/maps/search/?api=1&query=The+Cafe+Artist+Sector+18+Noida"
    }
  },

  // --- GALLERY SECTION ---
  gallery: {
    subtitle: "Visual Experience",
    title: "Inside The Cafe Artist",
    images: [
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkdLLQcuOM1jkmeTLlBXiYr8HiiB1CsRP8mCgA35cg1frTcgXR8GY9UbP-WWiJETaz-xWYjscJ5gwqIyCuR0r8-8J6zixlLbvnOUDOFNX9l25oWtWjb7wqfTlirLUWdAcUz812VuEzSHjU2=w243-h203-n-k-no-nu", alt: "The Cafe Artist Interior View 1" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmRaSgo6YAn-sa2lY9QD63QAVgGOu0D_NDz6ZIQkCySVUvXC2HseuwKJF2Bld7UHgpTxm0cUgddedAWrFYolX3PkxY-hfG87n0adY6dY85MLiSP69TBgvz20ZusMXssPiI76vX9M4CMIsJD=w243-h203-n-k-no-nu", alt: "The Cafe Artist Interior View 2" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmWL0nQB7fWRJfyHRDArvT5N5sRRJe69hQxWVlFCPxpJCeRPzGfAFSHZ_f9P4sicQ-rKy41ClZCM9f-kZS7y3OUoX3OaTsDtc8qz_QEA7aSvkm7qUtRZ0myqTdy_yyin5RsDh31nQk428E=w243-h174-n-k-no-nu", alt: "The Cafe Artist Interior View 3" },
      { src: "https://lh3.googleusercontent.com/proxy/beA8FoAUkBBm0NJzqPBflrXo0RFwA4f9-JADE4Yb-3ASdy0kjUlT3dfmIqfW_PtmybVv7pQ7pFGRUhBa_6vMTYxCUtVa4vshNUybQycDu7NUHod2u4nRW0AFW6-TkoC3wXB6iKEgOacfunGM3crrbnnflHscsV8=s680-w680-h510-rw", alt: "Food and drinks presentation" }
    ]
  },

  // --- LOCATION & CONTACT SECTION ---
  location: {
    subtitle: "Location & Hours",
    title: "Visit Us Today",
    description: "Located right in front of Metro Pillar 80 in Noida Sector 18. Drop in for evening hangouts, great music, and delicious food.",
    address: "In front of Metro Pillar 80, near JS Arcade, D Block, Pocket K, Sector 18, Noida, Uttar Pradesh 201301",
    hours: [
      "Mon - Sun: 11:30 AM - 11:30 PM"
    ],
    email: "info@thecafeartist.com",
    phone: "+91 8130305256",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4913220473957!2d77.32289131508151!3d28.56925578244199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce54567f8976f%3A0x2db4fb868b19bd69!2sSector%2018%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1614134823123!5m2!1sen!2sin"
  },

  // --- FOOTER SECTION ---
  footer: {
    description: "More Than A Cafe, An Experience. Serving delicious tandoori food, beverages, and good vibes in Sector 18, Noida.",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/thecafeartist_?stkn=MXQ0NDBiMGVleTFnOQ==", iconClass: "ph-instagram-logo" },
      { platform: "zomato", url: "https://www.zomato.com/ncr/the-cafe-artist-sector-18-noida?amp=1", iconClass: "ph-fork-knife" },
      { platform: "swiggy", url: "https://www.swiggy.com/restaurants/noida/sector-18/the-cafe-artist-603339/dineout", iconClass: "ph-shopping-bag" }
    ],
    copyright: "© 2026 The Cafe Artist. All rights reserved."
  },

  // --- WI-FI MODAL SETTINGS ---
  wifi: {
    ssid: "CafeArtist_Guest_WiFi",
    password: "artistcoffee"
  }
};

/* =========================================================================
   SECTION 2: REBRANDING ENGINE CODE
   ========================================================================= */
(function initRebrandingEngine(cfg) {
  'use strict';

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element|null}
   */
  const $ = (selector, ctx = document) => ctx.querySelector(selector);

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element[]}
   */
  const $$ = (selector, ctx = document) => Array.from(ctx.querySelectorAll(selector));

  function applyStyles() {
    const root = document.documentElement;
    if (cfg.styles?.colors) {
      if (cfg.styles.colors.bg) root.style.setProperty('--color-bg', cfg.styles.colors.bg);
      if (cfg.styles.colors.bgCard) root.style.setProperty('--color-bg-card', cfg.styles.colors.bgCard);
      if (cfg.styles.colors.bgLight) root.style.setProperty('--color-bg-light', cfg.styles.colors.bgLight);
      if (cfg.styles.colors.primary) root.style.setProperty('--color-primary', cfg.styles.colors.primary);
      if (cfg.styles.colors.primaryHover) root.style.setProperty('--color-primary-hover', cfg.styles.colors.primaryHover);
      if (cfg.styles.colors.text) root.style.setProperty('--color-text', cfg.styles.colors.text);
      if (cfg.styles.colors.textMuted) root.style.setProperty('--color-text-muted', cfg.styles.colors.textMuted);
      if (cfg.styles.colors.accent) root.style.setProperty('--color-accent', cfg.styles.colors.accent);
    }
    if (cfg.styles?.fonts) {
      if (cfg.styles.fonts.heading) root.style.setProperty('--font-heading', cfg.styles.fonts.heading);
      if (cfg.styles.fonts.body) root.style.setProperty('--font-body', cfg.styles.fonts.body);
    }
  }

  function applyMeta() {
    if (!cfg.brand) return;
    
    const fullTitle = `${cfg.brand.name} | ${cfg.brand.tagline}`;
    document.title = fullTitle;

    /**
     * @param {string} selector
     * @param {string} content
     */
    const setMeta = (selector, content) => {
      const el = $(selector);
      if (el) el.setAttribute('content', content);
    };

    setMeta('meta[name="title"]', fullTitle);
    setMeta('meta[name="description"]', cfg.brand.description);
    setMeta('meta[name="keywords"]', cfg.brand.keywords);
    setMeta('meta[name="theme-color"]', cfg.brand.themeColor);

    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', cfg.brand.description);
    setMeta('meta[property="og:image"]', cfg.brand.ogImage);
    setMeta('meta[property="og:url"]', cfg.brand.domain);
    setMeta('meta[property="og:site_name"]', `${cfg.brand.name} Cafe`);

    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', cfg.brand.description);
    setMeta('meta[name="twitter:image"]', cfg.brand.ogImage);
    setMeta('meta[name="twitter:url"]', cfg.brand.domain);

    const favicon = $('link[rel="icon"]');
    if (favicon && cfg.brand.faviconEmoji) {
      favicon.setAttribute('href', `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${cfg.brand.faviconEmoji}</text></svg>`);
    }

    const schemaScript = $('script[type="application/ld+json"]');
    if (schemaScript) {
      try {
        const schemaData = JSON.parse(schemaScript.textContent);
        schemaData.name = `${cfg.brand.name} ${cfg.brand.tagline}`;
        schemaData.image = cfg.brand.ogImage;
        schemaData.url = cfg.brand.domain;
        schemaData["@id"] = cfg.brand.domain;
        if (cfg.location) {
          schemaData.telephone = cfg.location.phone;
        }
        schemaScript.textContent = JSON.stringify(schemaData, null, 2);
      } catch (err) {
        console.warn("Failed to update JSON-LD schema:", err);
      }
    }
  }

  function applyBrandLogos() {
    $$('.logo').forEach(logoEl => {
      if (logoEl.childNodes.length > 0) {
        logoEl.childNodes[0].nodeValue = cfg.brand.name;
      } else {
        logoEl.textContent = cfg.brand.name;
      }
      let span = $('span', logoEl);
      if (!span && cfg.brand.suffix) {
        span = document.createElement('span');
        logoEl.appendChild(span);
      }
      if (span) span.textContent = cfg.brand.suffix;
      logoEl.setAttribute('aria-label', `${cfg.brand.name} Home`);
    });
  }

  function applyHero() {
    if (!cfg.hero) return;
    const heroSec = $('#home');
    if (heroSec && cfg.hero.bgImage) {
      heroSec.style.background = `linear-gradient(to right, rgba(13,14,18,0.95), rgba(13,14,18,0.6)), url('${cfg.hero.bgImage}') center/cover no-repeat`;
    }
    
    const sub = $('.hero-content .section-subtitle');
    if (sub) sub.textContent = cfg.hero.subtitle;
    
    const title = $('.hero-title');
    if (title) title.textContent = cfg.hero.title;
    
    const desc = $('.hero-description');
    if (desc) desc.textContent = cfg.hero.description;

    const statsContainer = $('.hero-stats');
    if (statsContainer && cfg.hero.stats) {
      statsContainer.innerHTML = cfg.hero.stats.map(s => `
        <div class="stat-item">
          <p class="stat-value">${s.value}</p>
          <p class="stat-label">${s.label}</p>
        </div>
      `).join('');
    }
  }

  function applyAbout() {
    if (!cfg.about) return;
    const aboutSec = $('#about');
    if (!aboutSec) return;

    const img = $('.about-img', aboutSec);
    if (img) {
      img.src = cfg.about.image;
      img.alt = cfg.about.imageAlt;
    }

    const badge = $('.about-experience-badge', aboutSec);
    if (badge) {
      badge.innerHTML = `
        <div style="font-size: 1.8rem; line-height: 1;">${cfg.about.experienceValue}</div>
        <div style="font-size: 0.8rem;">${cfg.about.experienceLabel}</div>
      `;
    }

    const sub = $('.section-subtitle', aboutSec);
    if (sub) sub.textContent = cfg.about.subtitle;

    const title = $('.section-title', aboutSec);     if (title) title.textContent = cfg.about.title;      const textMuted = $$('.text-muted', aboutSec);
    if (cfg.about.paragraphs && cfg.about.paragraphs.length >= 2) {
      if (textMuted[0]) textMuted[0].textContent = cfg.about.paragraphs[0];
      if (textMuted[1]) textMuted[1].textContent = cfg.about.paragraphs[1];
    }
  }

  function applySpecials() {
    if (!cfg.specials) return;
    const specSec = $('#new-food');
    if (!specSec) return;

    const sub = $('.section-subtitle', specSec);
    if (sub) sub.textContent = cfg.specials.subtitle;

    const title = $('.section-title', specSec);
    if (title) {
      title.innerHTML = `${cfg.specials.title} <span class="badge-new">${cfg.specials.badge}</span>`;
    }

    const desc = $('.text-muted', specSec);
    if (desc) desc.textContent = cfg.specials.description;

    const grid = $('.new-items-grid', specSec);
    if (grid && cfg.specials.items) {
      grid.innerHTML = cfg.specials.items.map(item => `
        <article class="new-food-card">
          <div class="new-food-img-wrapper">
            <span class="new-food-badge">${item.badge}</span>
            <img src="${item.img}" alt="${item.alt}" loading="lazy" decoding="async">
          </div>
          <div class="new-food-content">
            <div class="new-food-header">
              <h3 class="new-food-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="new-food-price">${item.price}</span>
            </div>
            <p class="new-food-desc">${item.desc}</p>
            <a href="#location" class="btn btn-outline btn-compact">Order Fresh</a>
          </div>
        </article>
      `).join('');
    }
  }

  function applyOffers() {
    if (!cfg.offers) return;
    const offerSec = $('#offers');
    if (!offerSec) return;

    const sub = $('.section-subtitle', offerSec);
    if (sub) sub.textContent = cfg.offers.subtitle;

    const title = $('.section-title', offerSec);
    if (title) title.textContent = cfg.offers.title;

    const grid = $('.offers-grid', offerSec);
    if (grid && cfg.offers.items) {
      grid.innerHTML = cfg.offers.items.map(o => `
        <div class="offer-card ${o.highlight ? 'highlight-offer' : ''}">
          <div class="offer-tag">${o.tag}</div>
          <h3 class="offer-title">${o.title}</h3>
          <p class="offer-desc">${o.desc}</p>
          <div class="offer-code-wrapper">
            <span>Code: <strong>${o.code}</strong></span>
          </div>
        </div>
      `).join('');
    }
  }

  function applyMenu() {
    if (!cfg.menu) return;
    const menuSec = $('#menu');
    if (!menuSec) return;

    const sub = $('.section-subtitle', menuSec);
    if (sub) sub.textContent = cfg.menu.subtitle;

    const title = $('.section-title', menuSec);
    if (title) title.textContent = cfg.menu.title;

    const dlBtn = $('.btn-download-menu', menuSec);
    if (dlBtn) {
      dlBtn.setAttribute('href', cfg.menu.pdfUrl);
      dlBtn.setAttribute('download', cfg.menu.pdfFilename);
    }

    const catContainer = $('.category-filter-container', menuSec);
    if (catContainer && cfg.menu.categories) {
      catContainer.innerHTML = cfg.menu.categories.map(c => `
        <button class="category-btn ${c.active ? 'active' : ''}" role="tab" aria-selected="${c.active}" aria-controls="menu-grid" data-filter="${c.id}">${c.label}</button>
      `).join('');
    }

    const menuGrid = $('#menu-grid');
    if (menuGrid && cfg.menu.items) {
      menuGrid.innerHTML = cfg.menu.items.map(item => `
        <article class="food-card" data-category="${item.category}">
          <div class="food-card-img-wrapper">
            <img src="${item.img}" alt="${item.title}" loading="lazy" decoding="async">
          </div>
          <div class="food-card-body">
            <div class="food-card-header">
              <h3 class="food-card-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="food-card-price">${item.price}</span>
            </div>
            <p class="food-card-desc">${item.desc}</p>
            <div class="food-card-actions">
              <a href="${item.swiggyUrl}" target="_blank" rel="noopener" class="btn btn-order btn-swiggy">Order with Swiggy</a>
              <a href="${item.zomatoUrl}" target="_blank" rel="noopener" class="btn btn-order btn-zomato">Order with Zomato</a>
              <button type="button" class="btn btn-order btn-whatsapp order-wa-btn" data-item-name="${item.title}" data-item-price="${item.price}">Order via WhatsApp</button>
            </div>
          </div>
        </article>
      `).join('');
    }
  }

  function applyReviews() {
    if (!cfg.reviews) return;
    const revSec = $('#reviews');
    if (!revSec) return;

    const sub = $('.section-subtitle', revSec);
    if (sub) sub.textContent = cfg.reviews.subtitle;

    const title = $('.section-title', revSec);
    if (title) title.textContent = cfg.reviews.title;

    const grid = $('.reviews-grid', revSec);
    if (grid && cfg.reviews.items) {
      grid.innerHTML = cfg.reviews.items.map(r => `
        <figure class="review-card">
          <blockquote class="review-text">
            <div class="review-stars" aria-label="Rating: ${r.stars} out of 5 stars">
              ${Array(r.stars).fill('<i class="ph-fill ph-star" aria-hidden="true"></i>').join('')}
            </div>
            <p>${r.text}</p>
          </blockquote>
          <figcaption class="reviewer-info">
            <img src="${r.avatar}" alt="${r.name}" class="reviewer-avatar" loading="lazy" decoding="async">
            <div>
              <span class="reviewer-name">${r.name}</span>
              <span class="reviewer-role">${r.role}</span>
            </div>
          </figcaption>
        </figure>
      `).join('');
    }

    if (cfg.reviews.googleCta) {
      const ctaTitle = $('.cta-title', revSec);
      if (ctaTitle) ctaTitle.textContent = cfg.reviews.googleCta.title;

      const ctaDesc = $('.cta-desc', revSec);
      if (ctaDesc) ctaDesc.textContent = cfg.reviews.googleCta.desc;

      const ctaBtn = $('.btn-google-review', revSec);
      if (ctaBtn) ctaBtn.setAttribute('href', cfg.reviews.googleCta.url);
    }
  }

  function applyGallery() {
    if (!cfg.gallery) return;
    const galSec = $('#gallery');
    if (!galSec) return;

    const sub = $('.section-subtitle', galSec);
    if (sub) sub.textContent = cfg.gallery.subtitle;

    const title = $('.section-title', galSec);
    if (title) title.textContent = cfg.gallery.title;

    const grid = $('.gallery-grid', galSec);
    if (grid && cfg.gallery.images) {
      grid.innerHTML = cfg.gallery.images.map(img => `
        <button type="button" class="gallery-item" aria-label="Expand image: ${img.alt}">
          <img src="${img.src}" alt="${img.alt}" loading="lazy" decoding="async">
          <span class="gallery-overlay"><i class="ph ph-arrows-out-simple" aria-hidden="true"></i></span>
        </button>
      `).join('');
    }
  }

  function applyLocation() {
    if (!cfg.location) return;
    const locSec = $('#location');
    if (!locSec) return;

    const sub = $('.section-subtitle', locSec);
    if (sub) sub.textContent = cfg.location.subtitle;

    const title = $('.section-title', locSec);
    if (title) title.textContent = cfg.location.title;

    const desc = $('.text-muted', locSec);     if (desc) desc.textContent = cfg.location.description;      const infoItems = $$('.info-item', locSec);
    if (infoItems.length >= 3) {
      const addrText = $('.text-muted', infoItems[0]);       if (addrText) addrText.textContent = cfg.location.address;        const hoursContainer = infoItems[1];       if (hoursContainer && cfg.location.hours) {         const lines = $$('.text-muted', hoursContainer);
        cfg.location.hours.forEach((h, idx) => {
          if (lines[idx]) lines[idx].textContent = h;
        });
      }

      const contactText = $('.text-muted', infoItems[2]);
      if (contactText) contactText.textContent = `${cfg.location.email} | ${cfg.location.phone}`;
    }

    const mapIframe = $('iframe', locSec);
    if (mapIframe && cfg.location.mapEmbedUrl) {
      mapIframe.src = cfg.location.mapEmbedUrl;
    }
  }

  function applyFooter() {
    if (!cfg.footer) return;
    const foot = $('.footer');
    if (!foot) return;

    const desc = $('.footer-desc', foot);
    if (desc) desc.textContent = cfg.footer.description;

    const socialContainer = $('.social-links', foot);
    if (socialContainer && cfg.footer.socials) {
      socialContainer.innerHTML = cfg.footer.socials.map(s => `
        <a href="${s.url}" class="social-icon" aria-label="${s.platform}" target="_blank" rel="noopener">
          <i class="ph ${s.iconClass}" aria-hidden="true"></i>
        </a>
      `).join('');
    }

    const copy = $('.footer-bottom p', foot);
    if (copy) copy.textContent = cfg.footer.copyright;
  }

  function applyWifiModal() {
    if (!cfg.wifi) return;
    const wifiModal = $('#wifi-modal');
    if (!wifiModal) return;

    const qrImg = $('.wifi-qr-img', wifiModal);
    if (qrImg) {
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=WIFI:S:${cfg.wifi.ssid};T:WPA;P:${cfg.wifi.password};;`;
    }

    const values = $$('.wifi-value', wifiModal);
    if (values[0]) values[0].textContent = cfg.wifi.ssid;
    if (values[1]) values[1].textContent = cfg.wifi.password;
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyStyles();
    applyMeta();
    applyBrandLogos();
    applyHero();
    applyAbout();
    applySpecials();
    applyOffers();
    applyMenu();
    applyReviews();
    applyGallery();
    applyLocation();
    applyFooter();
    applyWifiModal();
  });
})(REBRAND_CONFIG);
