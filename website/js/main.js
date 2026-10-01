    /* ——— GLOBAL CONFIGURATION ——— */
    const WA = "919286511557";

    /* ——— SEED LUXURY STREETWEAR PRODUCTS CATALOG ——— */
    const SEED_PRODUCTS = [
      {
        id: "SH-TEE-01",
        sku: "SH / TEE-01",
        category: "tees",
        name: "SH Essential Minimalist 220 GSM Tee",
        subtitle: "Luxury Heavyweight · Pure Combed Cotton",
        price: 599,
        mrp: 1199,
        discountText: "50% OFF",
        badge: "LAUNCH SPECIAL",
        isLive: true,
        rating: 4.9,
        reviewCount: 142,
        img: "assets/model-tee.jpg",
        altImg: "assets/tee-white.jpg",
        images: ["assets/model-tee.jpg", "assets/tee-white.jpg", "assets/detail-tag.jpg"],
        fabric: "220 GSM 100% Super-Combed Cotton",
        fit: "Boxy Relaxed Oversized Fit",
        colors: [
          { name: "Vintage Bone White", hex: "#f4f4f6" },
          { name: "Obsidian Black", hex: "#0a0a0a" }
        ],
        sizes: ["S", "M", "L", "XL"],
        desc: "Engineered from ultra-dense 220 GSM combed organic cotton. Features a structured 1-inch ribbed lycra collar that never rolls or sags, reinforced shoulder tape, and a clean minimalist SH monogram on the chest. Designed for effortless streetwear drapes.",
        specs: {
          "Fabric Weight": "220 GSM Dense Interlock Jersey",
          "Fiber Content": "100% Super-Combed Bio-Washed Cotton",
          "Silhouette": "Boxy Drop-Shoulder Streetwear Cut",
          "Collar": "Heavy Ribbed Lycra Neckband (Anti-Sag)",
          "Shrinkage": "0% Pre-Shrunk Guarantee",
          "Origin": "Crafted in India"
        }
      },
      {
        id: "SH-TEE-02",
        sku: "SH / TEE-02",
        category: "tees",
        name: "SH Boxy Drop-Shoulder Heavy Tee",
        subtitle: "220 GSM Dense Knit · Streetwear Silhouette",
        price: 749,
        mrp: 1399,
        discountText: "46% OFF",
        badge: "BESTSELLER",
        isLive: true,
        rating: 4.9,
        reviewCount: 218,
        img: "assets/tee-black.jpg",
        altImg: "assets/model-tee.jpg",
        images: ["assets/tee-black.jpg", "assets/model-tee.jpg", "assets/detail-tag.jpg"],
        fabric: "220 GSM Dense Knit Cotton · Bio-Washed",
        fit: "Extended Drop Shoulders · Wide Sleeves",
        colors: [
          { name: "Jet Obsidian", hex: "#050505" },
          { name: "Deep Charcoal", hex: "#1f1f23" }
        ],
        sizes: ["S", "M", "L", "XL", "XXL"],
        desc: "Extended drop shoulders, elongated boxy sleeves, and a sculpted drape. Heavy bio-washed cotton delivers substantial body while feeling buttery soft against the skin. Holds its sharp structure all day.",
        specs: {
          "Fabric Weight": "220 GSM Combed Ring-Spun Cotton",
          "Treatment": "Silicone Softened & Bio-Washed",
          "Silhouette": "Extended Drop Shoulder Streetwear Fit",
          "Stitching": "Twin-needle Reinforced Hems",
          "Collar": "1-inch Anti-Deform Ribbed Lycra"
        }
      },
      {
        id: "SH-TEE-03",
        sku: "SH / TEE-03",
        category: "tees",
        name: "SH Signature Monogram Archive Tee",
        subtitle: "240 GSM French Single Jersey Edition",
        price: 899,
        mrp: 1699,
        discountText: "47% OFF",
        badge: "PREMIUM ARCHIVE",
        isLive: true,
        rating: 5.0,
        reviewCount: 96,
        img: "assets/detail-tag.jpg",
        altImg: "assets/tee-wash.jpg",
        images: ["assets/detail-tag.jpg", "assets/tee-wash.jpg", "assets/model-tee.jpg"],
        fabric: "240 GSM French Single Jersey",
        fit: "Tailored Streetwear Oversized",
        colors: [
          { name: "Nocturnal Black", hex: "#080808" },
          { name: "Washed Slate", hex: "#2e2e36" }
        ],
        sizes: ["M", "L", "XL", "XXL"],
        desc: "Our heaviest tee silhouette. Raised high-density tactile SH monogram on chest and nape, crafted from 240 GSM combed jersey with double-stitched reinforced seams and custom interior atelier taping.",
        specs: {
          "Fabric Weight": "240 GSM Heavy French Single Jersey",
          "Monogram": "High-Density Tactile HD Monogram Screen Print",
          "Collar": "1.2-inch Heavyweight Ribbed Neckline",
          "Finish": "Enzyme Treated for Soft Hand-Feel"
        }
      },
      {
        id: "SH-TEE-04",
        sku: "SH / TEE-04",
        category: "acid",
        name: "SH Monochrome Acid-Wash Archive Tee",
        subtitle: "Vintage Mineral Wash · 220 GSM Treated",
        price: 799,
        mrp: 1499,
        discountText: "47% OFF",
        badge: "LIMITED EDITION",
        isLive: true,
        rating: 4.8,
        reviewCount: 110,
        img: "assets/tee-wash.jpg",
        altImg: "assets/tee-grey.jpg",
        images: ["assets/tee-wash.jpg", "assets/tee-grey.jpg", "assets/detail-tag.jpg"],
        fabric: "220 GSM Vintage Mineral-Washed Cotton",
        fit: "Boxy Skate & Street Silhouette",
        colors: [
          { name: "Mineral Grey Wash", hex: "#4b4b52" },
          { name: "Washed Carbon", hex: "#222226" }
        ],
        sizes: ["S", "M", "L", "XL"],
        desc: "Individually hand-treated vintage acid wash. Every tee features a unique subtle marble tonal patina with anti-pilling compact combed yarns. Streetwear character baked directly into the weave.",
        specs: {
          "Fabric Weight": "220 GSM 100% Cotton with Mineral Wash",
          "Wash Effect": "Artisanal Acid Wash Patina (Each Piece Unique)",
          "Collar": "Distressed Reinforced Lycra Neckband",
          "Feel": "Broken-in Vintage Handfeel"
        }
      },
      {
        id: "SH-HOD-01",
        sku: "SH / HOD-01",
        category: "hoodies",
        name: "SH Nocturnal French Terry Hoodie",
        subtitle: "450 GSM Heavyweight Loopback · Drop 001",
        price: 1899,
        mrp: 3499,
        discountText: "46% OFF",
        badge: "DROP 001 EXCLUSIVE",
        isLive: true,
        rating: 5.0,
        reviewCount: 84,
        img: "assets/model-hoodie.jpg",
        altImg: "assets/campaign_model_hoodie_1789367293436.jpg",
        images: ["assets/model-hoodie.jpg", "assets/campaign_model_hoodie_1789367293436.jpg", "assets/detail-tag.jpg"],
        fabric: "450 GSM 100% Cotton French Terry",
        fit: "Sculpted Oversized Cut · Double-Lined Hood",
        colors: [
          { name: "Obsidian Black", hex: "#070707" }
        ],
        sizes: ["S", "M", "L", "XL"],
        desc: "Constructed with massive 450 GSM French Terry loopback cotton. Features a rigid double-layered hood with no drawstrings for a sleek minimalist profile, deep kangaroo pouch pocket, and tight ribbed cuffs.",
        specs: {
          "Fabric Weight": "450 GSM Heavyweight French Terry Loopback",
          "Hood": "Double-Layered Self-Fabric (Stands Structured)",
          "Cuffs": "Thick 450 GSM Ribbed Hem & Wrist Cuffs",
          "Neckline": "Clean No-Drawstring Minimalist Collar"
        }
      },
      {
        id: "SH-CRG-01",
        sku: "SH / CRG-01",
        category: "bottoms",
        name: "SH Tactical Utility Cargo Pants",
        subtitle: "320 GSM Cotton Twill · Modular Pockets",
        price: 1499,
        mrp: 2799,
        discountText: "46% OFF",
        badge: "STREETWEAR EDIT",
        isLive: true,
        rating: 4.9,
        reviewCount: 67,
        img: "assets/model-pants.jpg",
        altImg: "assets/campaign_model_pants_1789367381933.jpg",
        images: ["assets/model-pants.jpg", "assets/campaign_model_pants_1789367381933.jpg", "assets/detail-tag.jpg"],
        fabric: "320 GSM Heavy Cotton Twill",
        fit: "Relaxed Wide-Leg with Ankle Cinchers",
        colors: [
          { name: "Matte Charcoal", hex: "#1c1c1f" },
          { name: "Pitch Black", hex: "#0a0a0a" }
        ],
        sizes: ["30", "32", "34", "36"],
        desc: "Heavyweight 320 GSM cotton twill with deep dual bellows cargo pockets, reinforced knees, elastic waistband with drawcord, and adjustable toggle ankle cinchers to customize your sneaker drape.",
        specs: {
          "Fabric": "320 GSM Dense Cotton Twill",
          "Pockets": "6-Pocket Tactical Architecture",
          "Waist": "Elastic Waistband + Heavy Drawcord",
          "Hem": "Bungee Cord Toggle Ankle Cinch"
        }
      },
      {
        id: "SH-ACC-01",
        sku: "SH / ACC-01",
        category: "accessories",
        name: "SH Structured Nocturnal Cap",
        subtitle: "Heavy Twill · 3D Monogram Embroidery",
        price: 499,
        mrp: 999,
        discountText: "50% OFF",
        badge: "ACCESSORY",
        isLive: true,
        rating: 4.8,
        reviewCount: 92,
        img: "assets/model-cap.jpg",
        altImg: "assets/campaign_model_cap_1789367336831.jpg",
        images: ["assets/model-cap.jpg", "assets/campaign_model_cap_1789367336831.jpg", "assets/detail-tag.jpg"],
        fabric: "100% Heavy Brushed Cotton Twill",
        fit: "Classic 6-Panel Structured Silhouette",
        colors: [
          { name: "Midnight Black", hex: "#0c0c0e" }
        ],
        sizes: ["ONE SIZE"],
        desc: "Deep-crown 6-panel silhouette made from heavyweight brushed cotton twill with high-relief 3D embroidered SH insignia and brass buckle back strap.",
        specs: {
          "Material": "Heavy Brushed Cotton Twill",
          "Embroidery": "High-Density 3D Raised Stitching",
          "Closure": "Custom Matte Brass Buckle Strap",
          "Fit": "Adjustable (54cm - 62cm)"
        }
      },
      {
        id: "SH-SET-01",
        sku: "SH / SET-01",
        category: "capsule",
        name: "SH Drop 001 Atelier Capsule Set",
        subtitle: "Complete 3-Piece Look (Tee + Cargo + Cap)",
        price: 2699,
        mrp: 5499,
        discountText: "51% OFF",
        badge: "COMPLETE OUTFIT BUNDLE",
        isLive: true,
        rating: 5.0,
        reviewCount: 48,
        img: "assets/hero-flatlay.png",
        altImg: "assets/city-night.jpg",
        images: ["assets/hero-flatlay.png", "assets/city-night.jpg", "assets/model-tee.jpg"],
        fabric: "Curated 220 GSM Cotton + Heavy Cargo Set",
        fit: "Full Coordinated Streetwear Fit",
        colors: [
          { name: "Nocturnal Monochrome", hex: "#0a0a0a" }
        ],
        sizes: ["S", "M", "L", "XL"],
        desc: "The complete Shelby Hiver streetwear aesthetic in one bundle. Includes 1x SH Boxy 220 GSM Tee, 1x Tactical Cargo Pants, and 1x Nocturnal Cap in collector packaging.",
        specs: {
          "Includes": "1x Heavy Tee, 1x Tactical Cargo, 1x Embroidered Cap",
          "Packaging": "Atelier Matte Black Collector Box + Dustbag",
          "Savings": "Save ₹1,000 compared to individual pieces"
        }
      }
    ];

    /* Dynamic database initialization & real-time synchronization */
    function getStorefrontProducts() {
      try {
        const stored = localStorage.getItem('sh_products_db');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
      } catch (e) {
        console.error("Error loading products:", e);
      }
      try {
        localStorage.setItem('sh_products_db', JSON.stringify(SEED_PRODUCTS));
      } catch (e) {}
      return [...SEED_PRODUCTS];
    }

    let PRODUCTS = getStorefrontProducts();
    let TEES = PRODUCTS; // backwards compatibility

    /* Live order dispatcher to Admin panel */
    function recordStorefrontOrder(order) {
      try {
        const orders = JSON.parse(localStorage.getItem('sh_orders_db') || '[]');
        orders.unshift(order);
        localStorage.setItem('sh_orders_db', JSON.stringify(orders));
        window.dispatchEvent(new Event('storage'));
      } catch (e) {
        console.error("Order sync error", e);
      }
    }

    /* ——— STATE ——— */
    let currentCat = 'all';
    let currentSort = 'featured';
    let WISHLIST = new Set(JSON.parse(localStorage.getItem('sh-wishlist') || '[]'));
    let CART = [];
    let discount = 1.0;
    const selectedSizes = {};
    PRODUCTS.forEach(p => {
      if (p.sizes && p.sizes.length) selectedSizes[p.id] = p.sizes[0];
    });

    /* Real-time sync listener with Admin panel */
    window.addEventListener('storage', (e) => {
      if (!e.key || e.key === 'sh_products_db') {
        PRODUCTS = getStorefrontProducts();
        TEES = PRODUCTS;
        PRODUCTS.forEach(p => {
          if (!selectedSizes[p.id] && p.sizes && p.sizes.length) {
            selectedSizes[p.id] = p.sizes[0];
          }
        });
        if (typeof renderProducts === 'function') renderProducts();
      }
    });

    // Active PDP state
    let activePDPProduct = null;
    let activePDPSize = null;
    let activePDPColorIdx = 0;
    let currentSearchQuery = "";

    /* ——— RENDER PRODUCTS LISTING ——— */
    function renderProducts() {
      const grid = document.getElementById("tshirtGrid");
      if (!grid) return;
      grid.innerHTML = "";

      let items = [...PRODUCTS];

      // Live search filter
      if (currentSearchQuery) {
        items = items.filter(p => 
          (p.name && p.name.toLowerCase().includes(currentSearchQuery)) ||
          (p.subtitle && p.subtitle.toLowerCase().includes(currentSearchQuery)) ||
          (p.desc && p.desc.toLowerCase().includes(currentSearchQuery)) ||
          (p.category && p.category.toLowerCase().includes(currentSearchQuery))
        );
      }

      // Category filter
      if (currentCat !== 'all') {
        items = items.filter(p => p.category === currentCat);
      }

      // Sort
      if (currentSort === 'price-low') {
        items.sort((a, b) => a.price - b.price);
      } else if (currentSort === 'price-high') {
        items.sort((a, b) => b.price - a.price);
      } else if (currentSort === 'rating') {
        items.sort((a, b) => b.rating - a.rating);
      } else if (currentSort === 'discount') {
        items.sort((a, b) => (b.mrp - b.price) - (a.mrp - a.price));
      }

      // Update count label
      const countLabel = document.getElementById("productCountLabel");
      if (countLabel) {
        countLabel.textContent = `Showing ${items.length} Product${items.length === 1 ? '' : 's'}`;
      }

      if (items.length === 0) {
        grid.innerHTML = `
          <div style="grid-column:1/-1;text-align:center;padding:60px 20px;background:var(--bg-secondary);border-radius:8px;">
            <div style="font-size:32px;margin-bottom:12px;">🔍</div>
            <h3 style="font-family:var(--f-display);font-size:18px;font-weight:700;margin-bottom:6px;">No products found</h3>
            <p style="color:var(--text-muted);font-size:13px;margin-bottom:16px;">Try adjusting your search terms or filters.</p>
            <button type="button" class="btn-primary-action" onclick="filterCategory('all'); if(document.getElementById('headerSearchInput')) { document.getElementById('headerSearchInput').value=''; currentSearchQuery=''; } renderProducts();">
              Clear All Filters
            </button>
          </div>
        `;
        return;
      }

      items.forEach(tee => {
        const isWish = WISHLIST.has(tee.id);
        const card = document.createElement("div");
        card.className = "pc";
        card.setAttribute("data-product-id", tee.id);
        card.onclick = (e) => {
          if (!e.target.closest('button')) {
            openProduct(tee.id);
          }
        };

        const currentSz = selectedSizes[tee.id] || tee.sizes[0];
        const pImgs = (Array.isArray(tee.images) && tee.images.length > 0) ? tee.images : [tee.img || 'assets/model-tee.jpg'];
        const primaryImg = pImgs[0];
        const secondaryImg = pImgs[1] || tee.altImg || primaryImg;

        card.innerHTML = `
          <div class="pc-media" onclick="openProduct('${tee.id}')">
            <img class="pri" src="${primaryImg}" alt="${tee.name}" loading="lazy">
            <img class="sec" src="${secondaryImg}" alt="${tee.name}" loading="lazy">
            <button class="wish-btn ${isWish ? 'wishlisted' : ''}" onclick="toggleWishlist(event, '${tee.id}')" aria-label="Wishlist">
              ${isWish ? '♥' : '♡'}
            </button>
            <span class="pc-rating-chip">★ ${tee.rating} | ${tee.reviewCount || 120}</span>
            <span class="pc-disc-tag">${tee.discountText}</span>
          </div>
          <div class="pc-info">
            <div class="pc-brand-name">SHELBY HIVER</div>
            <h3 class="pc-name" onclick="openProduct('${tee.id}')" title="${tee.name}">${tee.name}</h3>
            <div class="pc-price-wrap">
              <span class="pc-price">₹ ${(tee.price).toLocaleString()}</span>
              <del class="pc-mrp">₹ ${tee.mrp.toLocaleString()}</del>
              <span class="pc-discount">${tee.discountText}</span>
            </div>
            <div class="pc-size-pills" onclick="event.stopPropagation()">
              ${tee.sizes.map(s => `<button type="button" class="pc-size-pill ${currentSz === s ? 'active' : ''}" onclick="pickSz2('${tee.id}','${s}',this,event)">${s}</button>`).join('')}
            </div>
            <div class="pc-action-row" onclick="event.stopPropagation()">
              <button type="button" class="pc-btn-cart" onclick="addToCart('${tee.id}', selectedSizes['${tee.id}'])">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
                <span>Add to Bag</span>
              </button>
              <button type="button" class="pc-btn-view" onclick="openProduct('${tee.id}')" title="Quick View">
                <span>View</span>
              </button>
            </div>
          </div>`;
        grid.appendChild(card);
      });
    }

    function renderTees() {
      renderProducts();
    }

    /* ——— CATEGORY & SORT HANDLERS ——— */
    function filterCategory(cat, btn) {
      currentCat = cat;
      document.querySelectorAll('#catNav .cat-pill').forEach(b => b.classList.remove('active'));
      if (btn) btn.classList.add('active');
      renderProducts();
    }

    function handleSortChange(sortVal) {
      currentSort = sortVal;
      renderProducts();
    }

    /* ——— WISHLIST ——— */
    function toggleWishlist(e, id) {
      if (e) e.stopPropagation();
      const tee = PRODUCTS.find(p => p.id === id);
      if (WISHLIST.has(id)) {
        WISHLIST.delete(id);
        toast(`Removed ${tee ? tee.name : 'item'} from Wishlist`);
      } else {
        WISHLIST.add(id);
        toast(`Added ${tee ? tee.name : 'item'} to Wishlist ♥`);
      }
      localStorage.setItem('sh-wishlist', JSON.stringify([...WISHLIST]));
      renderProducts();
      if (activePDPProduct && activePDPProduct.id === id) {
        updatePDPWishlistUI();
      }
    }

    function togglePDPWishlist() {
      if (!activePDPProduct) return;
      toggleWishlist(null, activePDPProduct.id);
    }

    function updatePDPWishlistUI() {
      if (!activePDPProduct) return;
      const isWish = WISHLIST.has(activePDPProduct.id);
      const btn = document.getElementById("pdpWishBtn");
      const overlay = document.getElementById("pdpHeartOverlay");
      const heart = document.getElementById("pdpWishHeart");
      const text = document.getElementById("pdpWishText");
      if (btn) btn.classList.toggle("active", isWish);
      if (overlay) {
        overlay.classList.toggle("active", isWish);
        overlay.textContent = isWish ? '♥' : '♡';
      }
      if (heart) heart.textContent = isWish ? '♥' : '♡';
      if (text) text.textContent = isWish ? 'Wishlisted' : 'Wishlist';
    }

    /* ——— PRODUCT DETAIL PAGE (PDP) OPEN / CLOSE ——— */
    function openProduct(id) {
      const p = PRODUCTS.find(item => item.id === id) || PRODUCTS[0];
      activePDPProduct = p;
      activePDPSize = selectedSizes[p.id] || p.sizes[0];
      activePDPColorIdx = 0;

      // Update URL hash for sharing / browser navigation
      if (window.location.hash !== `#product-${p.id}`) {
        window.history.pushState(null, '', `#product-${p.id}`);
      }

      // Breadcrumbs
      const catMap = {
        tees: 'Oversized Tees',
        hoodies: 'French Terry Hoodies',
        acid: 'Acid Wash Archive',
        bottoms: 'Tactical Bottoms',
        accessories: 'Caps & Accessories',
        capsule: 'Capsule Sets'
      };
      document.getElementById("pdpCrumbCategory").textContent = catMap[p.category] || 'Collection';
      document.getElementById("pdpCrumbTitle").textContent = p.name;

      // Title, SKU, Rating
      document.getElementById("pdpTitle").textContent = p.name;
      document.getElementById("pdpSku").textContent = p.sku;
      document.getElementById("pdpFabricQuick").textContent = p.fabric;
      document.getElementById("pdpRatingNum").textContent = p.rating;
      document.getElementById("pdpReviewCount").textContent = `${p.reviewCount} Verified Buyer Reviews`;
      document.getElementById("pdpBadge").textContent = p.badge;

      // Price
      const finalPrice = Math.round(p.price * discount);
      document.getElementById("pdpPrice").textContent = `₹ ${finalPrice.toLocaleString()}`;
      document.getElementById("pdpMrp").textContent = `₹ ${p.mrp.toLocaleString()}`;
      document.getElementById("pdpDiscount").textContent = p.discountText;

      // Mobile sticky bar price & size
      const stickPrice = document.getElementById("pdpStickyPrice");
      if (stickPrice) stickPrice.textContent = `₹ ${finalPrice.toLocaleString()}`;
      const stickSize = document.getElementById("pdpStickySize");
      if (stickSize) stickSize.textContent = `Size: ${activePDPSize}`;

      // Gallery Thumbnails
      const thumbsContainer = document.getElementById("pdpThumbs");
      const pImages = (Array.isArray(p.images) && p.images.length > 0)
        ? p.images
        : [p.img || 'assets/model-tee.jpg'];

      thumbsContainer.innerHTML = pImages.map((img, idx) => `
        <div class="pdp-thumb-item ${idx === 0 ? 'active' : ''}" onclick="selectPDPThumb(${idx})">
          <img src="${img}" alt="${p.name} detail view ${idx + 1}" loading="lazy">
        </div>
      `).join('');

      // Main image
      document.getElementById("pdpMainImg").src = pImages[0];

      // Swatches
      const swatchesContainer = document.getElementById("pdpSwatches");
      document.getElementById("pdpColorLabel").textContent = p.colors[0].name;
      swatchesContainer.innerHTML = p.colors.map((c, idx) => `
        <div class="pdp-swatch ${idx === 0 ? 'active' : ''}" onclick="selectPDPColor(${idx}, '${c.name}', this)">
          <span class="pdp-swatch-dot" style="background:${c.hex}"></span>
          <span>${c.name}</span>
        </div>
      `).join('');

      // Sizes
      const sizesContainer = document.getElementById("pdpSizesRow");
      sizesContainer.innerHTML = p.sizes.map(s => `
        <button type="button" class="pdp-size-chip ${s === activePDPSize ? 'active' : ''}" onclick="selectPDPSize('${s}', this)">
          ${s}
        </button>
      `).join('');
      document.getElementById("pdpStockUrgency").textContent = `⚡ Only ${Math.floor(2 + (p.name.length % 5))} left in size ${activePDPSize}`;

      // Description
      document.getElementById("pdpDesc").innerHTML = `
        <p>${p.desc}</p>
        <p style="margin-top:10px;"><strong>Silhouette:</strong> ${p.fit}. Cut with generous chest volume, structured drop shoulders, and clean elbow-length sleeve drape for a commanding streetwear profile.</p>
      `;

      // Specifications Grid
      const specsContainer = document.getElementById("pdpSpecs");
      specsContainer.innerHTML = `
        <div class="pdp-specs-grid">
          ${Object.entries(p.specs).map(([k, v]) => `
            <div class="pdp-spec-cell">
              <strong>${k}</strong>
              <span>${v}</span>
            </div>
          `).join('')}
        </div>
      `;

      // Cross-sell recommendations
      const crossGrid = document.getElementById("pdpCrossGrid");
      const crossItems = PRODUCTS.filter(item => item.id !== p.id).slice(0, 2);
      crossGrid.innerHTML = crossItems.map(item => `
        <div class="pdp-cross-card" onclick="openProduct('${item.id}')">
          <img src="${item.img}" alt="${item.name}">
          <div class="pcc-det">
            <strong>${item.name}</strong>
            <span>₹ ${item.price} · ${item.discountText}</span>
          </div>
        </div>
      `).join('');

      // Update wishlist button state
      updatePDPWishlistUI();

      // Show PDP
      const modal = document.getElementById("productDetailPage");
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
      modal.scrollTop = 0;
    }

    function closeProduct() {
      const modal = document.getElementById("productDetailPage");
      modal.classList.remove("active");
      document.body.style.overflow = "";
      if (window.location.hash.startsWith('#product-')) {
        window.history.pushState(null, '', window.location.pathname);
      }
    }

    function selectPDPThumb(idx, imgSrc) {
      if (!activePDPProduct) return;
      const imgs = (Array.isArray(activePDPProduct.images) && activePDPProduct.images.length)
        ? activePDPProduct.images
        : [activePDPProduct.img || 'assets/model-tee.jpg'];
      const targetSrc = imgSrc || imgs[idx] || imgs[0];

      document.querySelectorAll('#pdpThumbs .pdp-thumb-item').forEach((t, i) => {
        t.classList.toggle('active', i === idx);
      });
      const mainImg = document.getElementById("pdpMainImg");
      if (mainImg) {
        mainImg.style.opacity = '0.3';
        setTimeout(() => {
          mainImg.src = targetSrc;
          mainImg.style.opacity = '1';
        }, 120);
      }
    }

    function selectPDPSize(sz, btn) {
      activePDPSize = sz;
      selectedSizes[activePDPProduct.id] = sz;
      document.querySelectorAll('#pdpSizesRow .pdp-size-chip').forEach(b => b.classList.remove('active'));
      if (btn) btn.classList.add('active');
      document.getElementById("pdpStockUrgency").textContent = `⚡ Only ${Math.floor(2 + (sz.charCodeAt(0) % 5))} units left in size ${sz}!`;
      const stickSize = document.getElementById("pdpStickySize");
      if (stickSize) stickSize.textContent = `Size: ${sz}`;
    }

    function selectPDPColor(idx, name, btn) {
      activePDPColorIdx = idx;
      document.querySelectorAll('#pdpSwatches .pdp-swatch').forEach(b => b.classList.remove('active'));
      if (btn) btn.classList.add('active');
      document.getElementById("pdpColorLabel").textContent = name;
      if (activePDPProduct.images[idx]) {
        selectPDPThumb(idx, activePDPProduct.images[idx]);
      }
    }

    function pdpAddToCart() {
      if (!activePDPProduct) return;
      addToCart(activePDPProduct.id, activePDPSize);
    }

    function pdpBuyNow() {
      if (!activePDPProduct) return;
      const sz = activePDPSize || activePDPProduct.sizes[0];
      const p = activePDPProduct;
      const finalPrice = Math.round(p.price * discount);

      // Record to Admin real-time orders stream
      try {
        let user = null;
        try { user = JSON.parse(localStorage.getItem('sh_current_user_v2') || 'null'); } catch(e){}
        const orderId = 'SH-' + Math.floor(1000 + Math.random() * 9000);
        recordStorefrontOrder({
          id: orderId,
          customerName: user ? user.name : "VIP Customer",
          customerPhone: user ? user.phone : "+91 9286511557",
          customerEmail: user ? user.email : "patron@shelbyhiver.com",
          items: [{
            name: p.name,
            size: sz,
            qty: 1,
            price: finalPrice
          }],
          total: finalPrice,
          status: 'pending',
          channel: 'Instant PDP Buy',
          createdAt: new Date().toISOString()
        });
      } catch (err) {
        console.error("Order dispatch error:", err);
      }

      const colorName = (p.colors && p.colors[activePDPColorIdx]) ? p.colors[activePDPColorIdx].name : 'Standard';
      const msg = `Hello Shelby Hiver Atelier! 👋\n\nI want to BUY NOW:\n• ${p.name}\n• Size: ${sz}\n• Color: ${colorName}\n• Price: ₹${finalPrice.toLocaleString()} (${p.discountText})\n\nPlease share payment QR/UPI and confirm express 24h dispatch.\n\nMy delivery details:\nName: \nAddress: \nPin Code: \nPhone: `;
      toast(`Opening WhatsApp Instant Buy for ${p.name}...`);
      setTimeout(() => window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, "_blank"), 300);
    }

    function pdpDirectWA() {
      pdpBuyNow();
    }

    /* ——— PINCODE CHECKER ——— */
    function checkPincode() {
      const input = document.getElementById("pdpPincodeInput");
      const result = document.getElementById("pdpPinResult");
      const pin = input.value.trim();
      if (!pin || pin.length < 6 || !/^\d{6}$/.test(pin)) {
        result.innerHTML = `<span style="color:#e63946;">⚠️ Please enter a valid 6-digit Indian delivery pincode.</span>`;
        return;
      }
      const deliveryDays = (parseInt(pin[0]) % 2 === 0) ? '2-3' : '3-4';
      result.innerHTML = `
        <span style="color:#25d366;font-weight:700;">✓ Express Delivery available to ${pin} in ${deliveryDays} business days!</span>
        <div style="color:var(--text-secondary);margin-top:4px;font-size:10px;">• Free Shipping on Prepaid Orders · Cash on Delivery (COD) Available</div>
      `;
    }

    /* ——— SIZE CHART MODAL ——— */
    function openSizeChart() {
      document.getElementById("sizeModalScrim").classList.add("on");
      document.getElementById("sizeChartModal").classList.add("on");
    }

    function closeSizeChart() {
      document.getElementById("sizeModalScrim").classList.remove("on");
      document.getElementById("sizeChartModal").classList.remove("on");
    }

    /* ——— HASH ROUTING (FOR DIRECT PRODUCT LINKS) ——— */
    function checkHashRoute() {
      const hash = window.location.hash;
      if (hash.startsWith('#product-')) {
        const id = hash.replace('#product-', '');
        openProduct(id);
      }
    }
    window.addEventListener('hashchange', checkHashRoute);

    function pickSz(e, id, sz) {
      if (e) e.stopPropagation();
      selectedSizes[id] = sz;
    }

    function pickSz2(id, sz, btn, e) {
      if (e) e.stopPropagation();
      selectedSizes[id] = sz;
      const card = btn.closest('.pc');
      if (card) {
        card.querySelectorAll('.pc-size-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
      toast(`Selected Size ${sz}`);
    }

    /* ——— ADD TO CART ——— */
    function addToCart(id, sizeArg) {
      const p = PRODUCTS.find(t => t.id === id);
      const sz = sizeArg || selectedSizes[id] || (p ? p.sizes[0] : "L");
      const existing = CART.find(i => i.id === id && i.size === sz);
      if (existing) { existing.qty++; }
      else { CART.push({ id, size: sz, qty: 1 }); }
      toast(`Added ${p.name} (${sz}) to Bag`);
      renderCart();
      showCart();
      const b = document.getElementById("bagCount");
      if (b) {
        b.classList.add("bump"); setTimeout(() => b.classList.remove("bump"), 300);
      }
      const pb = document.getElementById("pdpBagBadge");
      if (pb) {
        pb.textContent = CART.reduce((s, i) => s + i.qty, 0);
      }
    }

    function updateQty(idx, d) {
      CART[idx].qty += d;
      if (CART[idx].qty <= 0) CART.splice(idx, 1);
      renderCart();
    }

    /* ——— RENDER CART ——— */
    function renderCart() {
      const container = document.getElementById("cartItemsList") || document.getElementById("cartItems");
      const count = CART.reduce((s, i) => s + (i.qty || 1), 0);
      const bagCountEl = document.getElementById("bagCount");
      if (bagCountEl) bagCountEl.textContent = count;
      const cartHeaderCountEl = document.getElementById("cartHeaderCount");
      if (cartHeaderCountEl) cartHeaderCountEl.textContent = count;

      if (!container) return;

      if (!CART.length) {
        container.innerHTML = `
          <div style="text-align:center;padding:50px 20px;color:var(--text-muted);">
            <div style="font-size:36px;margin-bottom:12px;">🛍️</div>
            <p style="font-family:var(--f-display);font-size:15px;font-weight:700;color:var(--text-primary);margin-bottom:6px;">Your Bag is Empty</p>
            <p style="font-size:12px;margin-bottom:18px;">Add items to start shopping</p>
            <button type="button" class="btn-primary-action" style="font-size:11.5px;padding:10px 20px;" onclick="hideCart()">Browse Collection →</button>
          </div>
        `;
        const subtotalEl = document.getElementById("cartTotalVal") || document.getElementById("cartSubtotal");
        if (subtotalEl) subtotalEl.textContent = "₹ 0";
        return;
      }

      let total = 0;
      container.innerHTML = "";
      CART.forEach((item, idx) => {
        const tee = TEES.find(t => t.id === item.id) || { name: item.id, price: 599, img: 'assets/model-tee.jpg' };
        const lineTotal = Math.round(tee.price * item.qty * discount);
        total += lineTotal;
        const row = document.createElement("div");
        row.className = "cart-item";
        row.innerHTML = `
          <img class="cart-item-img" src="${tee.img}" alt="${tee.name}">
          <div class="cart-item-details">
            <div class="cart-item-title">${tee.name}</div>
            <div class="cart-item-size">Size: ${item.size}</div>
            <div style="display:flex;align-items:center;justify-content:space-between;margin-top:6px;">
              <div style="display:flex;align-items:center;gap:6px;background:var(--bg-secondary);border:1px solid var(--border-color);border-radius:4px;padding:2px 8px;">
                <button type="button" style="font-size:13px;font-weight:700;padding:2px 4px;color:var(--text-primary);" onclick="updateQty(${idx},-1)">−</button>
                <span style="font-size:12px;font-weight:700;min-width:14px;text-align:center;color:var(--text-primary);">${item.qty}</span>
                <button type="button" style="font-size:13px;font-weight:700;padding:2px 4px;color:var(--text-primary);" onclick="updateQty(${idx},1)">+</button>
              </div>
              <span class="cart-item-price">₹ ${lineTotal.toLocaleString()}</span>
            </div>
          </div>
          <button type="button" style="color:var(--text-muted);font-size:16px;padding:4px;align-self:flex-start;cursor:pointer;" onclick="updateQty(${idx}, -${item.qty})" title="Remove item">✕</button>
        `;
        container.appendChild(row);
      });

      const subtotalEl = document.getElementById("cartTotalVal") || document.getElementById("cartSubtotal");
      if (subtotalEl) subtotalEl.textContent = `₹ ${total.toLocaleString()}`;
    }

    /* ——— WHATSAPP CHECKOUT ——— */
    function checkoutWA() {
      if (!CART.length) { toast("Bag is empty — add an item first!"); return; }
      let lines = "", grand = 0;
      const orderItems = [];
      CART.forEach(item => {
        const tee = TEES.find(t => t.id === item.id);
        const lt = Math.round((tee ? tee.price : 599) * item.qty * discount);
        grand += lt;
        const name = tee ? tee.name : item.id;
        orderItems.push({
          name: name,
          size: item.size,
          qty: item.qty,
          price: lt
        });
        lines += `• ${name} | Size: ${item.size} | Qty: ${item.qty} | ₹${lt}\n`;
      });
      if (discount < 1) lines += `• Promo Discount Applied (${Math.round((1 - discount) * 100)}% OFF)\n`;

      // Record to Admin real-time orders stream
      try {
        let user = null;
        try { user = JSON.parse(localStorage.getItem('sh_current_user_v2') || 'null'); } catch(e){}
        const orderId = 'SH-' + Math.floor(1000 + Math.random() * 9000);
        recordStorefrontOrder({
          id: orderId,
          customerName: user ? user.name : "Customer",
          customerPhone: user ? user.phone : "+91 9286511557",
          customerEmail: user ? user.email : "customer@shelbyhiver.com",
          items: orderItems,
          total: grand,
          status: 'pending',
          channel: 'WhatsApp Bag Checkout',
          createdAt: new Date().toISOString()
        });
      } catch (err) {
        console.error("Order dispatch error:", err);
      }

      const msg = `Hello Shelby Hiver! 👋\n\nI'd like to place an order:\n\n${lines}\n💰 TOTAL: ₹${grand.toLocaleString()}\n\nPlease share payment details (UPI/QR/Bank) and confirm delivery.\n\nMy delivery address:\nName: \nAddress: \nPin Code: \nPhone: `;
      toast("Opening WhatsApp checkout...");
      setTimeout(() => window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, "_blank"), 400);
    }
    window.checkoutViaWhatsApp = checkoutWA;

    /* ——— DIRECT BUY ——— */
    function directWA(id) {
      const tee = TEES.find(t => t.id === id);
      const sz = selectedSizes[id] || tee.sizes[0];
      const msg = `Hello Shelby Hiver! 👋\n\nI'd like to order:\n• ${tee.name}\n• Size: ${sz}\n• Fabric: ${tee.fabric}\n• Price: ₹${tee.price}\n\nPlease confirm availability and share payment details. Thank you!`;
      toast(`Opening WhatsApp for ${tee.name}...`);
      setTimeout(() => window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, "_blank"), 300);
    }

    /* ——— PROMO CODE ——— */
    function applyPromo() {
      const v = document.getElementById("promoInput").value.trim().toUpperCase();
      if (v === "HIVER10") { discount = 0.9; toast("PROMO APPLIED: 10% OFF"); renderTees(); renderCart(); }
      else if (v === "LAUNCH15") { discount = 0.85; toast("PROMO APPLIED: 15% OFF LAUNCH"); renderTees(); renderCart(); }
      else { toast("Invalid promo code — try HIVER10"); }
    }

    /* ——— CART UI ——— */
    function showCart() {
      const drawer = document.getElementById("cartDrawer");
      const scrim = document.getElementById("cartScrim");
      if (drawer) drawer.classList.add("open", "on");
      if (scrim) scrim.classList.add("open", "on");
      renderCart();
    }
    function hideCart() {
      const drawer = document.getElementById("cartDrawer");
      const scrim = document.getElementById("cartScrim");
      if (drawer) drawer.classList.remove("open", "on");
      if (scrim) scrim.classList.remove("open", "on");
    }
    const openCartEl = document.getElementById("openCart");
    if (openCartEl) openCartEl.addEventListener("click", showCart);
    const closeCartEl = document.getElementById("closeCart");
    if (closeCartEl) closeCartEl.addEventListener("click", hideCart);
    const cartScrimEl = document.getElementById("cartScrim");
    if (cartScrimEl) cartScrimEl.addEventListener("click", hideCart);

    /* ——— SEARCH ——— */
    const searchModal = document.getElementById("searchModal");
    const openSearchEl = document.getElementById("openSearch");
    if (openSearchEl && searchModal) {
      openSearchEl.addEventListener("click", () => {
        searchModal.classList.add("on");
        const sf = document.getElementById("searchField");
        if (sf) setTimeout(() => sf.focus(), 200);
      });
    }
    const closeSearchEl = document.getElementById("closeSearch");
    if (closeSearchEl && searchModal) {
      closeSearchEl.addEventListener("click", () => searchModal.classList.remove("on"));
    }
    function doSearch(q) {
      const sf = document.getElementById("searchField");
      if (sf) sf.value = q;
      liveSearch(q);
    }
    function liveSearch(q) {
      const area = document.getElementById("searchResults");
      if (!area) return;
      q = q.toLowerCase().trim();
      if (!q) { area.innerHTML = ""; return; }
      const hits = TEES.filter(t => t.name.toLowerCase().includes(q) || t.fabric.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q));
      if (!hits.length) { area.innerHTML = `<p style="color:var(--text-muted);font-family:var(--f-mono);">No results for "${q}".</p>`; return; }
      area.innerHTML = `<h6 style="font-family:var(--f-mono);font-size:9.5px;color:var(--text-muted);margin-bottom:14px;">RESULTS (${hits.length})</h6>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px;">
      ${hits.map(t => `<div style="background:var(--bg-secondary);padding:12px;border:1px solid var(--border-color);cursor:pointer;" onclick="if(searchModal)searchModal.classList.remove('on');addToCart('${t.id}','${t.sizes[0]}')">
        <img src="${t.img}" style="aspect-ratio:3/4;object-fit:cover;margin-bottom:8px;">
        <div style="font-family:var(--f-display);font-size:12px;font-weight:700;">${t.name}</div>
        <div style="font-family:var(--f-mono);font-size:11px;color:var(--text-muted);margin-top:3px;">₹ ${t.price}</div>
      </div>`).join('')}
    </div>`;
    }

    /* ——— VIP PASS GENERATOR (SAFE NO-OP IF ABSENT) ——— */
    function updateVIPCardLive(val) {
      const holder = document.getElementById("vipHolder");
      if (holder) {
        holder.textContent = val.trim() ? val.trim().toUpperCase() : "ALEXANDER VANE";
      }
    }

    function flipVIPCard() {
      const card = document.getElementById("vipCard");
      if (!card) return;
      card.style.transition = "transform .6s cubic-bezier(.16, 1, .3, 1)";
      card.style.transform = "rotateY(360deg)";
      setTimeout(() => {
        card.style.transform = "";
      }, 650);
    }

    function generatePass(e) {
      if (e) e.preventDefault();
      const input = document.getElementById("vipName");
      const name = input ? input.value.trim().toUpperCase() : "MEMBER";
      const holder = document.getElementById("vipHolder");
      if (holder) holder.textContent = name;
      flipVIPCard();
    }

    /* ——— COUNTDOWN (IF PRESENT) ——— */
    const dropDate = new Date();
    dropDate.setDate(dropDate.getDate() + 10);
    dropDate.setHours(dropDate.getHours() + 12, 0, 0, 0);
    function tick() {
      const d = Math.max(0, dropDate - new Date());
      const elD = document.getElementById("cdD");
      const elH = document.getElementById("cdH");
      const elM = document.getElementById("cdM");
      const elS = document.getElementById("cdS");
      if (elD) elD.textContent = String(Math.floor(d / 86400000)).padStart(2, "0");
      if (elH) elH.textContent = String(Math.floor(d % 86400000 / 3600000)).padStart(2, "0");
      if (elM) elM.textContent = String(Math.floor(d % 3600000 / 60000)).padStart(2, "0");
      if (elS) elS.textContent = String(Math.floor(d % 60000 / 1000)).padStart(2, "0");
    }
    if (document.getElementById("countdown") || document.getElementById("cdD")) {
      tick();
      setInterval(tick, 1000);
    }

    /* ——— SCROLL REVEAL ——— */
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: .12 });
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));

    /* ——— HEADER SCROLL ——— */
    const hdr = document.getElementById("siteHeader");
    if (hdr) {
      window.addEventListener("scroll", () => hdr.classList.toggle("scrolled", window.scrollY > 28), { passive: true });
    }

    /* ——— MOBILE NAV ——— */
    const mob = document.getElementById("mobile-nav") || document.getElementById("mobileDrawerScrim");
    const openMobBtn = document.getElementById("openMob");
    const closeMobBtn = document.getElementById("closeMob");

    function openMobileNav() {
      if (mob) { mob.classList.add("open"); document.body.style.overflow = "hidden"; }
    }
    function closeMobileNav() {
      if (mob) { mob.classList.remove("open"); document.body.style.overflow = ""; }
    }

    if (openMobBtn) openMobBtn.addEventListener("click", openMobileNav);
    if (closeMobBtn) closeMobBtn.addEventListener("click", closeMobileNav);

    if (mob) {
      mob.addEventListener("click", function (e) {
        if (e.target === mob) closeMobileNav();
      });
    }

    /* ——— CUSTOM CURSOR ——— */
    if (matchMedia("(min-width:1025px)").matches) {
      const cr = document.getElementById("cr"), crd = document.getElementById("crd");
      if (cr && crd) {
        window.addEventListener("mousemove", e => {
          cr.style.left = e.clientX + "px"; cr.style.top = e.clientY + "px";
          crd.style.left = e.clientX + "px"; crd.style.top = e.clientY + "px";
          cr.classList.add("vis");
        });
        document.querySelectorAll("a,button,.pc,.lk,.cs-card,.ed-card,.hero-visual").forEach(el => {
          el.addEventListener("mouseenter", () => cr.classList.add("big"));
          el.addEventListener("mouseleave", () => cr.classList.remove("big"));
        });
      }
    }

    /* ——— NEWSLETTER ——— */
    function handleNewsletter(e) {
      e.preventDefault();
      const el = e.target.querySelector("input[type=email]");
      if (el) {
        toast(`Updates activated for ${el.value}`);
        el.value = "";
      }
    }

    /* ——— TOAST ——— */
    function toast(msg) {
      const tc = document.getElementById("toasts");
      if (!tc) return;
      const t = document.createElement("div");
      t.className = "toast"; t.textContent = msg;
      tc.appendChild(t);
      setTimeout(() => { t.style.opacity = "0"; t.style.transition = "opacity .4s"; setTimeout(() => t.remove(), 400); }, 2800);
    }

    /* ——— PRELOADER ——— */
    window.addEventListener("load", () => {
      const pl = document.getElementById("preloader");
      if (pl) setTimeout(() => pl.classList.add("done"), 600);
    });

    /* ——— ESC ——— */
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") {
        if (typeof closeProduct === 'function') closeProduct();
        if (typeof closeSizeChart === 'function') closeSizeChart();
        hideCart();
        if (searchModal) searchModal.classList.remove("on");
        closeMobileNav();
      }
    });

    /* ——— LIVE HEADER SEARCH ——— */
    const headerSearch = document.getElementById("headerSearchInput");
    if (headerSearch) {
      headerSearch.addEventListener("input", (e) => {
        currentSearchQuery = e.target.value.toLowerCase().trim();
        renderProducts();
      });
    }

    /* ——— THEME TOGGLE ——— */
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('sh-theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('sh-theme', next);
      });
    }

    /* ——— INIT ——— */
    renderProducts();
    renderCart();
    checkHashRoute();