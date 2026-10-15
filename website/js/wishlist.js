/* ============================================================
   SHELBY HIVER — WISHLIST CONTROLLER (wishlist.js)
   ============================================================ */
(function() {
  'use strict';

  const WA_NUMBER = "919286511557";

  const SEED_PRODUCTS = [
    {
      id: "SH-DROP01-DRAGON",
      sku: "SH-D01-DRG-01",
      category: "tees",
      name: "Dragon Archive Boxy Tee",
      subtitle: "220 GSM Combed Cotton · Boxy Oversized",
      price: 699,
      mrp: 1199,
      discountText: "42% OFF",
      badge: "DROP 01 LIVE",
      isLive: true,
      rating: 4.9,
      reviewCount: 164,
      img: "drops/01.png",
      altImg: "drops/04.png",
      images: [
        "drops/01.png",
        "drops/04.png",
        "drops/05.png",
        "drops/02.png",
        "drops/03.png"
      ],
      fabric: "220 GSM 100% Super-Combed Cotton",
      fit: "Boxy Drop-Shoulder Oversized",
      colors: [{ name: "Sand Beige", hex: "#d8c7b5" }],
      sizes: ["S", "M", "L", "XL"],
      desc: "Drop 01 flagship silhouette. 220 GSM high-density combed cotton heavyweight t-shirt cut in a relaxed, architectural boxy fit with structured drop shoulders. Features minimal SH chest typography and high-definition Ryu Dragon & Sakura blossom archival artwork screen-printed across the back.",
      specs: {
        "Fabric Weight": "220 GSM Pure Combed Cotton",
        "Silhouette": "Boxy Drop-Shoulder Oversized",
        "Collar": "24mm Anti-Sag Reinforced Ribbed Collar",
        "Back Artwork": "Archival Ryu Dragon High-Density Print",
        "Shrinkage": "Pre-Shrunk 0% Shrinkage Guaranteed",
        "Dispatch": "Dispatched within 24 hours"
      }
    },
    {
      id: "SH-DROP01-ENDURE",
      sku: "SH-D01-GYM-02",
      category: "tees",
      name: "Winter Arc 'ENDURE' Heavy Gym Tee",
      subtitle: "220 GSM Combed Cotton · Athletic Boxy Cut",
      price: 699,
      mrp: 1199,
      discountText: "42% OFF",
      badge: "DROP 01 LIVE",
      isLive: true,
      rating: 4.9,
      reviewCount: 182,
      img: "drops/winter-arc-01.png",
      altImg: "drops/winter-arc-02.png",
      images: [
        "drops/winter-arc-01.png",
        "drops/winter-arc-02.png",
        "drops/winter-arc-03.png"
      ],
      fabric: "220 GSM 100% Super-Combed Cotton",
      fit: "Athletic Boxy Drop-Shoulder",
      colors: [{ name: "Obsidian Black", hex: "#0a0a0a" }],
      sizes: ["S", "M", "L", "XL"],
      desc: "The definitive Winter Arc heavyweight gym tee. Crafted from 220 GSM dense combed cotton, engineered with an athletic boxy drape that holds its shape through intense lifts and streetwear styling. Features minimal SH chest branding and high-density cracked marble 'SHELBY HIVER ENDURE' Greek sculpture artwork across the back.",
      specs: {
        "Fabric Weight": "220 GSM Pure Combed Cotton",
        "Silhouette": "Athletic Boxy Drop-Shoulder",
        "Collar": "24mm Anti-Sag Reinforced Ribbed Collar",
        "Back Artwork": "Cracked Marble 'ENDURE' Screen Print",
        "Shrinkage": "Pre-Shrunk 0% Shrinkage Guaranteed",
        "Dispatch": "Dispatched within 24 hours"
      }
    },
    {
      id: "SH-DROP01-FRAGMENTS",
      sku: "SH-D01-FRG-03",
      category: "tees",
      name: "Fragments Still Speak Boxy Tee",
      subtitle: "220 GSM Combed Cotton · Boxy Oversized",
      price: 699,
      mrp: 1199,
      discountText: "42% OFF",
      badge: "DROP 01 LIVE",
      isLive: true,
      rating: 4.9,
      reviewCount: 156,
      img: "drops/c1.png",
      altImg: "drops/c2.png",
      images: [
        "drops/c1.png",
        "drops/c2.png",
        "drops/c3.png",
        "drops/c4.png"
      ],
      fabric: "220 GSM Pure Combed Cotton",
      fit: "Boxy Drop-Shoulder Oversized",
      colors: [{ name: "Espresso Brown", hex: "#432818" }],
      sizes: ["S", "M", "L", "XL"],
      desc: "Drop 01 flagship silhouette. 220 GSM high-density combed cotton heavyweight t-shirt cut in a relaxed, architectural boxy fit with structured drop shoulders. Features minimal SH chest typography and a statement archival artwork across the back, depicting a fragmented classical sculpture surrounded by celestial geometry and the words “FRAGMENTS STILL SPEAK.”",
      specs: {
        "Fabric Weight": "220 GSM Pure Combed Cotton",
        "Silhouette": "Boxy Drop-Shoulder Oversized",
        "Collar": "24mm Anti-Sag Reinforced Ribbed Collar",
        "Back Artwork": "Fragments Still Speak · High-Density Print",
        "Shrinkage": "Pre-Shrunk 0% Shrinkage Guaranteed",
        "Dispatch": "Dispatched within 24 hours"
      }
    },
    {
      id: "SH-DROP01-BETTERDAYS",
      sku: "SH-D01-BTR-04",
      category: "tees",
      name: "Good People Better Days Boxy Tee",
      subtitle: "220 GSM Combed Cotton · Boxy Oversized",
      price: 699,
      mrp: 1199,
      discountText: "42% OFF",
      badge: "DROP 01 LIVE",
      isLive: true,
      rating: 4.9,
      reviewCount: 148,
      img: "drops/nb1.png",
      altImg: "drops/nb5.png",
      images: [
        "drops/nb1.png",
        "drops/nb2.png",
        "drops/nb3.png",
        "drops/nb4.png",
        "drops/nb5.png"
      ],
      fabric: "220 GSM 100% Super-Combed Cotton",
      fit: "Boxy Drop-Shoulder Oversized",
      colors: [{ name: "Midnight Navy", hex: "#161e2e" }],
      sizes: ["S", "M", "L", "XL"],
      desc: "Drop 01 architectural silhouette. 220 GSM high-density combed cotton heavyweight t-shirt cut in a relaxed, structural boxy fit with clean drop shoulders. Features minimal SH chest typography and an evocative retro-editorial archival resort photographic artwork across the back with 'GOOD PEOPLE · BETTER DAYS · MILANO / ITALIA'.",
      specs: {
        "Fabric Weight": "220 GSM Pure Combed Cotton",
        "Silhouette": "Boxy Drop-Shoulder Oversized",
        "Collar": "24mm Anti-Sag Reinforced Ribbed Collar",
        "Back Artwork": "Good People · Better Days Milano High-Density Print",
        "Shrinkage": "Pre-Shrunk 0% Shrinkage Guaranteed",
        "Dispatch": "Dispatched within 24 hours"
      }
    }
  ];

  /* State */
  let PRODUCTS = loadProducts();
  let WISHLIST = new Set(JSON.parse(localStorage.getItem('sh-wishlist') || '[]'));
  if (WISHLIST.size === 0 && !localStorage.getItem('sh_wishlist_seeded')) {
    WISHLIST.add('tee-01');
    localStorage.setItem('sh-wishlist', JSON.stringify([...WISHLIST]));
    localStorage.setItem('sh_wishlist_seeded', '1');
  }
  let CART = JSON.parse(localStorage.getItem('sh_cart') || '[]');
  let selectedSizes = {};
  let currentFilter = 'all';
  let currentSort = 'recent';

  function loadProducts() {
    try {
      const stored = localStorage.getItem('sh_products_db_v4');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error("Wishlist product load error:", e);
    }
    return [...SEED_PRODUCTS];
  }

  /* Toast Notification */
  window.toast = function(msg) {
    let container = document.getElementById("toastContainer");
    if (!container) {
      container = document.createElement("div");
      container.id = "toastContainer";
      container.style.cssText = "position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:9999;display:flex;flex-direction:column;gap:8px;pointer-events:none;";
      document.body.appendChild(container);
    }
    const t = document.createElement("div");
    t.style.cssText = "background:rgba(18,18,20,0.95);color:#fff;border:1px solid rgba(255,255,255,0.15);padding:10px 20px;border-radius:30px;font-family:var(--f-display, sans-serif);font-size:12.5px;font-weight:700;letter-spacing:0.03em;box-shadow:0 8px 24px rgba(0,0,0,0.3);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);animation:toastFadeIn 0.25s ease-out;pointer-events:auto;";
    t.textContent = msg;
    container.appendChild(t);
    setTimeout(() => {
      t.style.transition = "opacity 0.25s, transform 0.25s";
      t.style.opacity = "0";
      t.style.transform = "translateY(8px)";
      setTimeout(() => t.remove(), 260);
    }, 2800);
  };

  /* Render Wishlist */
  function renderWishlist() {
    WISHLIST = new Set(JSON.parse(localStorage.getItem('sh-wishlist') || '[]'));
    const grid = document.getElementById("wishlistGrid");
    const emptyState = document.getElementById("wishlistEmptyState");
    const statsSection = document.getElementById("wishlistStatsSection");
    const toolbarSection = document.getElementById("wishlistToolbarSection");

    const wishlistedProducts = PRODUCTS.filter(p => WISHLIST.has(p.id));

    // Update Header Badges
    updateBadges();

    // If Empty
    if (wishlistedProducts.length === 0) {
      if (grid) grid.style.display = "none";
      if (statsSection) statsSection.style.display = "none";
      if (toolbarSection) toolbarSection.style.display = "none";
      if (emptyState) {
        emptyState.style.display = "block";
        renderRecommendedItems();
      }
      return;
    }

    // Has Items
    if (emptyState) emptyState.style.display = "none";
    if (statsSection) statsSection.style.display = "block";
    if (toolbarSection) toolbarSection.style.display = "block";
    if (grid) grid.style.display = "grid";

    // Update Metrics
    updateMetrics(wishlistedProducts);

    // Apply Filter & Sort
    let filtered = [...wishlistedProducts];
    if (currentFilter === 'tees') {
      filtered = filtered.filter(p => p.category === 'tees');
    } else if (currentFilter === 'live') {
      filtered = filtered.filter(p => p.isLive !== false);
    }

    if (currentSort === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'discount') {
      filtered.sort((a, b) => (b.mrp - b.price) - (a.mrp - a.price));
    }

    // Render Cards
    grid.innerHTML = "";
    filtered.forEach(p => {
      const card = createWishlistCard(p);
      grid.appendChild(card);
    });
  }
  window.refreshShelbyWishlist = renderWishlist;

  function updateMetrics(items) {
    const totalCount = items.length;
    const totalVal = items.reduce((sum, p) => sum + (p.price || 0), 0);
    const totalMrp = items.reduce((sum, p) => sum + (p.mrp || p.price || 0), 0);
    const totalSavings = Math.max(0, totalMrp - totalVal);

    const countEl = document.getElementById("metricCountVal");
    const valEl = document.getElementById("metricTotalVal");
    const savingsEl = document.getElementById("metricSavingsVal");
    const heroCountBadge = document.getElementById("heroCountBadge");

    if (countEl) countEl.textContent = `${totalCount} ${totalCount === 1 ? 'Silhouette' : 'Silhouettes'}`;
    if (valEl) valEl.textContent = `₹ ${totalVal.toLocaleString()}`;
    if (savingsEl) savingsEl.textContent = `₹ ${totalSavings.toLocaleString()}`;
    if (heroCountBadge) heroCountBadge.textContent = `${totalCount} ${totalCount === 1 ? 'Item' : 'Items'} Saved`;
  }

  function updateBadges() {
    const count = WISHLIST.size;
    const headerBadge = document.getElementById("wishlistCount");
    if (headerBadge) {
      headerBadge.textContent = count;
      headerBadge.style.display = count > 0 ? "flex" : "none";
    }
    const mobBadge = document.getElementById("mobWishBadge");
    if (mobBadge) {
      mobBadge.textContent = `${count} ${count === 1 ? 'item' : 'items'}`;
    }
    const bottomWishBadge = document.getElementById("mobBottomWishCount");
    if (bottomWishBadge) {
      bottomWishBadge.textContent = count;
      bottomWishBadge.style.display = count > 0 ? "flex" : "none";
    }
    const cartCount = CART.reduce((sum, i) => sum + (i.qty || 1), 0);
    const bagBadge = document.getElementById("bagCount");
    if (bagBadge) bagBadge.textContent = cartCount;
    const mobBottomBag = document.getElementById("mobBottomBagCount");
    if (mobBottomBag) mobBottomBag.textContent = cartCount;
  }

  function createWishlistCard(p) {
    const card = document.createElement("div");
    card.className = "wl-card";
    card.setAttribute("data-id", p.id);

    const isLive = p.isLive !== false;
    const currentSz = selectedSizes[p.id] || (p.sizes && p.sizes[0]) || "L";
    selectedSizes[p.id] = currentSz;

    const pImgs = (Array.isArray(p.images) && p.images.length > 0) ? p.images : [p.img || 'drops/01.png'];
    const priImg = pImgs[0];
    const secImg = pImgs[1] || p.altImg || priImg;
    const discountText = p.discountText || `${Math.round(((p.mrp - p.price) / p.mrp) * 100)}% OFF`;
    const savings = Math.max(0, p.mrp - p.price);

    card.innerHTML = `
      <div class="wl-card-media" onclick="openProduct('${p.id}')">
        <img class="pri-img" src="${priImg}" alt="${p.name}" loading="lazy">
        <img class="sec-img" src="${secImg}" alt="${p.name}" loading="lazy">
        
        <button class="wl-remove-btn" onclick="event.stopPropagation(); removeFromWishlist('${p.id}')" title="Remove from Wishlist" aria-label="Remove from Wishlist">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>

        <div class="wl-card-badges">
          <span class="wl-badge-tag wl-badge-discount">${discountText}</span>
          ${isLive ? '<span class="wl-badge-tag wl-badge-live">DROP 01 LIVE</span>' : '<span class="wl-badge-tag" style="background:#555;color:#fff;">COMING SOON</span>'}
        </div>

        <div class="wl-fabric-pill">220 GSM Combed Cotton</div>
      </div>

      <div class="wl-card-body">
        <div class="wl-card-brand">SHELBY HIVER · ATELIER</div>
        <h3 class="wl-card-title" onclick="openProduct('${p.id}')" title="${p.name}">${p.name}</h3>

        <div class="wl-card-price-row">
          <span class="wl-price-current">₹ ${p.price.toLocaleString()}</span>
          <del class="wl-price-mrp">₹ ${p.mrp.toLocaleString()}</del>
          <span class="wl-price-savings">Save ₹ ${savings}</span>
        </div>

        <div class="wl-size-wrap">
          <div class="wl-size-header">
            <span class="wl-size-title">Select Size:</span>
            <button type="button" class="wl-size-guide-btn" onclick="openSizeChart()">Size Guide</button>
          </div>
          <div class="wl-size-pills">
            ${(p.sizes || ["S", "M", "L", "XL"]).map(sz => `
              <button type="button" class="wl-size-pill ${sz === currentSz ? 'active' : ''}" onclick="pickCardSize('${p.id}', '${sz}', this, event)">${sz}</button>
            `).join('')}
          </div>
        </div>

        <div class="wl-card-actions">
          ${isLive ? `
            <button type="button" class="wl-btn-add-bag" onclick="moveToBag('${p.id}')">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="8" width="16" height="13" rx="2"></rect><path d="M8 8V6a4 4 0 0 1 8 0v2"></path></svg>
              <span>Move to Bag</span>
            </button>
            <button type="button" class="wl-btn-wa-order" onclick="buyNowWishlistItem('${p.id}')" title="Buy Now &amp; Pay via QR / COD" aria-label="Buy Now &amp; Pay via QR / COD" style="display:inline-flex;align-items:center;gap:6px;padding:0 12px;font-family:var(--f-display);font-size:12px;font-weight:700;">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <span>Buy Now</span>
            </button>
          ` : `
            <button type="button" class="wl-btn-add-bag" style="background:var(--bg-secondary);color:var(--text-muted);border-color:var(--border-color);cursor:not-allowed;" disabled>
              Drop 02 Preview
            </button>
          `}
        </div>
      </div>
    `;

    return card;
  }

  /* Recommended items on empty state */
  function renderRecommendedItems() {
    const recGrid = document.getElementById("recommendedGrid");
    if (!recGrid) return;
    recGrid.innerHTML = "";

    SEED_PRODUCTS.forEach(p => {
      const isWish = WISHLIST.has(p.id);
      const div = document.createElement("div");
      div.className = "wl-card";
      const pImgs = (Array.isArray(p.images) && p.images.length > 0) ? p.images : [p.img || 'drops/01.png'];

      div.innerHTML = `
        <div class="wl-card-media" onclick="openProduct('${p.id}')">
          <img class="pri-img" src="${pImgs[0]}" alt="${p.name}" loading="lazy">
          <img class="sec-img" src="${pImgs[1] || pImgs[0]}" alt="${p.name}" loading="lazy">
          <button class="wl-remove-btn" onclick="event.stopPropagation(); toggleWishFromRec('${p.id}')" title="${isWish ? 'Remove' : 'Save to Wishlist'}" aria-label="Save to Wishlist">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="${isWish ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <div class="wl-card-badges">
            <span class="wl-badge-tag wl-badge-discount">${p.discountText || '42% OFF'}</span>
          </div>
          <div class="wl-fabric-pill">220 GSM Combed Cotton</div>
        </div>
        <div class="wl-card-body">
          <div class="wl-card-brand">SHELBY HIVER</div>
          <h3 class="wl-card-title" onclick="openProduct('${p.id}')">${p.name}</h3>
          <div class="wl-card-price-row">
            <span class="wl-price-current">₹ ${p.price.toLocaleString()}</span>
            <del class="wl-price-mrp">₹ ${p.mrp.toLocaleString()}</del>
          </div>
          <div style="display:flex;gap:6px;margin-top:auto;">
            <button type="button" class="wl-btn-add-bag" style="flex:1;justify-content:center;" onclick="buyNowWishlistItem('${p.id}')">
              Buy Now
            </button>
            <button type="button" class="wl-btn-secondary" style="padding:0 12px;border:1.5px solid var(--text-primary);color:var(--text-primary);display:flex;align-items:center;justify-content:center;" onclick="toggleWishFromRec('${p.id}')" title="Save to Wishlist" aria-label="Save to Wishlist">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="${isWish ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>
        </div>
      `;
      recGrid.appendChild(div);
    });
  }

  /* Actions */
  window.removeFromWishlist = function(id) {
    const p = PRODUCTS.find(t => t.id === id);
    WISHLIST.delete(id);
    localStorage.setItem('sh-wishlist', JSON.stringify([...WISHLIST]));
    window.dispatchEvent(new Event('storage'));
    toast(`Removed ${p ? p.name : 'item'} from Wishlist`);
    renderWishlist();
  };

  window.toggleWishFromRec = function(id) {
    const p = PRODUCTS.find(t => t.id === id);
    if (WISHLIST.has(id)) {
      WISHLIST.delete(id);
      toast(`Removed ${p ? p.name : 'item'} from Wishlist`);
    } else {
      WISHLIST.add(id);
      toast(`Saved ${p ? p.name : 'item'} to Wishlist`);
    }
    localStorage.setItem('sh-wishlist', JSON.stringify([...WISHLIST]));
    window.dispatchEvent(new Event('storage'));
    renderWishlist();
  };

  window.pickCardSize = function(id, sz, btn, e) {
    if (e) e.stopPropagation();
    selectedSizes[id] = sz;
    const card = btn.closest('.wl-card');
    if (card) {
      card.querySelectorAll('.wl-size-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }
    toast(`Selected Size ${sz}`);
  };

  window.moveToBag = function(id) {
    const p = PRODUCTS.find(t => t.id === id);
    if (!p) return;
    if (p.isLive === false) {
      toast(`${p.name} is a Drop 02 Preview.`);
      return;
    }
    const sz = selectedSizes[id] || (p.sizes && p.sizes[0]) || "L";
    const existing = CART.find(i => i.id === id && i.size === sz);
    if (existing) {
      existing.qty++;
    } else {
      CART.push({ id, size: sz, qty: 1 });
    }
    localStorage.setItem('sh_cart', JSON.stringify(CART));
    window.dispatchEvent(new Event('storage'));
    toast(`Added ${p.name} (${sz}) to Bag`);
    renderCart();
    showCart();
  };

  window.moveAllToBag = function() {
    const wishlistedProducts = PRODUCTS.filter(p => WISHLIST.has(p.id) && p.isLive !== false);
    if (wishlistedProducts.length === 0) {
      toast("No live silhouettes in your wishlist.");
      return;
    }
    let addedCount = 0;
    wishlistedProducts.forEach(p => {
      const sz = selectedSizes[p.id] || (p.sizes && p.sizes[0]) || "L";
      const existing = CART.find(i => i.id === p.id && i.size === sz);
      if (existing) {
        existing.qty++;
      } else {
        CART.push({ id: p.id, size: sz, qty: 1 });
      }
      addedCount++;
    });
    localStorage.setItem('sh_cart', JSON.stringify(CART));
    window.dispatchEvent(new Event('storage'));
    toast(`Moved ${addedCount} silhouettes to your Shopping Bag! 🛍️`);
    renderCart();
    showCart();
  };

  window.clearWishlist = function() {
    if (WISHLIST.size === 0) return;
    if (!confirm("Are you sure you want to clear your atelier wishlist?")) return;
    WISHLIST.clear();
    localStorage.setItem('sh-wishlist', JSON.stringify([]));
    window.dispatchEvent(new Event('storage'));
    toast("Wishlist cleared");
    renderWishlist();
  };

  window.filterWishlist = function(cat, btn) {
    currentFilter = cat;
    document.querySelectorAll('.wl-filter-chip').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderWishlist();
  };

  window.sortWishlist = function(sortVal) {
    currentSort = sortVal;
    renderWishlist();
  };

  /* ============================================================
     CART CONTROLLER
     ============================================================ */
  function renderCart() {
    const container = document.getElementById("cartItemsList");
    const count = CART.reduce((s, i) => s + (i.qty || 1), 0);
    const bagCountEl = document.getElementById("bagCount");
    if (bagCountEl) bagCountEl.textContent = count;
    const mobBottomBagEl = document.getElementById("mobBottomBagCount");
    if (mobBottomBagEl) mobBottomBagEl.textContent = count;
    const cartHeaderCountEl = document.getElementById("cartHeaderCount");
    if (cartHeaderCountEl) cartHeaderCountEl.textContent = count;

    if (!container) return;

    if (!CART.length) {
      container.innerHTML = `
        <div style="text-align:center;padding:50px 20px;color:var(--text-muted);">
          <div style="width:48px;height:48px;border-radius:50%;background:var(--bg-secondary);border:1px solid var(--border-color);display:flex;align-items:center;justify-content:center;margin:0 auto 12px;color:var(--text-primary);">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="8" width="16" height="13" rx="2"></rect><path d="M8 8V6a4 4 0 0 1 8 0v2"></path></svg>
          </div>
          <p style="font-family:var(--f-display);font-size:15px;font-weight:700;color:var(--text-primary);margin-bottom:6px;">Your Bag is Empty</p>
          <p style="font-size:12px;margin-bottom:18px;">Move items from your wishlist or browse catalogue</p>
          <button type="button" class="wl-btn-primary" style="font-size:11.5px;padding:10px 20px;" onclick="hideCart()">Return to Wishlist &rarr;</button>
        </div>
      `;
      const subtotalEl = document.getElementById("cartTotalVal");
      if (subtotalEl) subtotalEl.textContent = "₹ 0";
      return;
    }

    let total = 0;
    container.innerHTML = "";
    CART.forEach((item, idx) => {
      const tee = PRODUCTS.find(t => t.id === item.id) || { name: item.id, price: 699, img: 'drops/01.png' };
      const lineTotal = tee.price * item.qty;
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
              <button type="button" style="font-size:13px;font-weight:700;padding:2px 4px;color:var(--text-primary);" onclick="updateCartQty(${idx},-1)">−</button>
              <span style="font-size:12px;font-weight:700;min-width:14px;text-align:center;color:var(--text-primary);">${item.qty}</span>
              <button type="button" style="font-size:13px;font-weight:700;padding:2px 4px;color:var(--text-primary);" onclick="updateCartQty(${idx},1)">+</button>
            </div>
            <span class="cart-item-price">₹ ${lineTotal.toLocaleString()}</span>
          </div>
        </div>
        <button type="button" style="color:var(--text-muted);font-size:16px;padding:4px;align-self:flex-start;cursor:pointer;" onclick="updateCartQty(${idx}, -${item.qty})" title="Remove item">✕</button>
      `;
      container.appendChild(row);
    });

    const subtotalEl = document.getElementById("cartTotalVal");
    if (subtotalEl) subtotalEl.textContent = `₹ ${total.toLocaleString()}`;
  }

  window.updateCartQty = function(idx, d) {
    CART[idx].qty += d;
    if (CART[idx].qty <= 0) CART.splice(idx, 1);
    localStorage.setItem('sh_cart', JSON.stringify(CART));
    window.dispatchEvent(new Event('storage'));
    renderCart();
  };

  window.showCart = function() {
    const drawer = document.getElementById("cartDrawer");
    const scrim = document.getElementById("cartScrim");
    if (drawer) drawer.classList.add("open");
    if (scrim) {
      scrim.style.display = "block";
      scrim.classList.add("open");
    }
  };

  window.hideCart = function() {
    const drawer = document.getElementById("cartDrawer");
    const scrim = document.getElementById("cartScrim");
    if (drawer) drawer.classList.remove("open");
    if (scrim) {
      scrim.classList.remove("open");
      setTimeout(() => { scrim.style.display = "none"; }, 250);
    }
  };

  window.checkoutViaWhatsApp = function() {
    if (window.openShelbyCheckout) {
      window.openShelbyCheckout({ source: 'cart' });
      return;
    }
    if (!CART.length) {
      toast("Your bag is empty!");
      return;
    }
    let lines = "", grand = 0;
    const orderItems = [];
    CART.forEach(item => {
      const p = PRODUCTS.find(t => t.id === item.id) || { name: item.id, price: 699, sku: 'SH-ITEM' };
      const sub = p.price * item.qty;
      grand += sub;
      lines += `• ${p.name} (${item.size}) x${item.qty} = ₹${sub.toLocaleString()}\n`;
      orderItems.push({
        id: item.id,
        name: p.name,
        size: item.size,
        qty: item.qty,
        price: p.price,
        sku: p.sku || 'SH-DROP01'
      });
    });

    // Record order in admin
    try {
      const orders = JSON.parse(localStorage.getItem('sh_orders_db') || '[]');
      const newOrder = {
        id: 'SH-ORD-' + Math.floor(100000 + Math.random() * 900000),
        createdAt: new Date().toISOString(),
        customer: 'Online Guest',
        phone: 'WhatsApp Checkout',
        address: 'Direct Atelier Dispatch',
        items: orderItems,
        total: grand,
        status: 'pending'
      };
      orders.unshift(newOrder);
      localStorage.setItem('sh_orders_db', JSON.stringify(orders));
    } catch (e) {
      console.error(e);
    }

    const msg = `SHELBY HIVER ATELIER — ORDER MANIFEST\n\nOrder Request:\n\n${lines}\nTotal Amount: ₹${grand.toLocaleString()}\nExpress Tracked Dispatch Included.\n\nPlease confirm delivery address and payment verification details.\n\nClient Name: \nDelivery Address (House No, Landmark, Area, City, Pin): \nContact Phone: `;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  /* ============================================================
     QUICK VIEW PDP MODAL
     ============================================================ */
  let modalActiveSize = 'L';
  let modalActiveImgIdx = 0;
  let modalActiveImgs = [];

  window.openProduct = function(id) {
    const p = PRODUCTS.find(item => item.id === id) || PRODUCTS[0];
    modalActiveSize = selectedSizes[p.id] || (p.sizes && p.sizes[0]) || 'L';
    const modal = document.getElementById("productModal");
    const scrim = document.getElementById("pdpScrim");
    if (!modal) return;

    modalActiveImgs = (Array.isArray(p.images) && p.images.length > 0) ? p.images : [p.img || 'drops/01.png'];
    modalActiveImgIdx = 0;
    const isLive = p.isLive !== false;
    const isWish = WISHLIST.has(p.id);

    modal.innerHTML = `
      <div style="position:relative;">
        <button type="button" onclick="closeProduct()" style="position:absolute;top:0;right:0;background:var(--bg-secondary);border:1px solid var(--border-color);border-radius:50%;width:34px;height:34px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;z-index:10;color:var(--text-primary);">✕</button>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:24px;margin-top:12px;">
          <div>
            <div style="width:100%;aspect-ratio:1/1.1;background:var(--bg-secondary);border-radius:8px;overflow:hidden;position:relative;">
              <img id="modalMainImg" src="${modalActiveImgs[0]}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;display:block;">
            </div>
            ${modalActiveImgs.length > 1 ? `
              <div style="display:flex;gap:8px;margin-top:10px;overflow-x:auto;">
                ${modalActiveImgs.map((img, idx) => `
                  <img src="${img}" alt="Thumbnail ${idx+1}" onclick="switchModalImg(${idx})" style="width:54px;height:54px;object-fit:cover;border-radius:4px;cursor:pointer;border:2px solid ${idx===0 ? 'var(--text-primary)' : 'transparent'};">
                `).join('')}
              </div>
            ` : ''}
          </div>
          <div>
            <div style="font-family:var(--f-display);font-size:10px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;color:var(--text-muted);margin-bottom:6px;">SHELBY HIVER / DROP 01</div>
            <h2 style="font-family:var(--f-display);font-size:20px;font-weight:800;color:var(--text-primary);margin-bottom:8px;">${p.name}</h2>
            <div style="display:flex;align-items:baseline;gap:10px;margin-bottom:12px;">
              <span style="font-family:var(--f-display);font-size:20px;font-weight:800;color:var(--text-primary);">₹ ${p.price.toLocaleString()}</span>
              <del style="font-size:13px;color:var(--text-muted);">₹ ${p.mrp.toLocaleString()}</del>
              <span style="font-size:11px;font-weight:800;color:#10b981;">${p.discountText || '42% OFF'}</span>
            </div>
            <p style="font-size:12.5px;color:var(--text-secondary);line-height:1.6;margin-bottom:14px;">${p.desc || ''}</p>
            <div style="margin-bottom:14px;">
              <div style="font-size:11px;font-weight:800;text-transform:uppercase;margin-bottom:6px;">Select Size:</div>
              <div style="display:flex;gap:6px;">
                ${(p.sizes || ["S", "M", "L", "XL"]).map(s => `
                  <button type="button" class="wl-size-pill ${s === modalActiveSize ? 'active' : ''}" onclick="pickModalSize('${p.id}','${s}',this)">${s}</button>
                `).join('')}
              </div>
            </div>
            <div style="display:flex;gap:10px;margin-top:18px;">
              ${isLive ? `
                <button type="button" class="wl-btn-primary" style="flex:1;justify-content:center;" onclick="buyNowFromModal('${p.id}');closeProduct();">
                  Buy Now &rarr;
                </button>
                <button type="button" class="wl-btn-secondary" style="flex:1;justify-content:center;" onclick="moveToBag('${p.id}');closeProduct();">
                  Add to Bag
                </button>
              ` : ''}
              <button type="button" class="wl-btn-secondary" style="display:inline-flex;align-items:center;gap:6px;border:1.5px solid var(--text-primary);color:var(--text-primary);" onclick="toggleWishFromRec('${p.id}');closeProduct();">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="${isWish ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                <span>${isWish ? 'In Wishlist' : 'Save to Wishlist'}</span>
              </button>
            </div>
            <div style="margin-top:16px;">
              <a href="catalogue.html#product-${p.id}" style="font-size:12px;color:var(--text-primary);font-weight:700;text-decoration:underline;">View in Full Catalogue →</a>
            </div>
          </div>
        </div>
      </div>
    `;

    modal.style.display = "block";
    if (scrim) {
      scrim.style.display = "block";
      scrim.classList.add("open");
    }
  };

  window.switchModalImg = function(idx) {
    modalActiveImgIdx = idx;
    const imgEl = document.getElementById("modalMainImg");
    if (imgEl && modalActiveImgs[idx]) imgEl.src = modalActiveImgs[idx];
  };

  window.pickModalSize = function(id, sz, btn) {
    modalActiveSize = sz;
    selectedSizes[id] = sz;
    if (btn && btn.parentElement) {
      btn.parentElement.querySelectorAll('.wl-size-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }
  };

  window.closeProduct = function() {
    const modal = document.getElementById("productModal");
    const scrim = document.getElementById("pdpScrim");
    if (modal) modal.style.display = "none";
    if (scrim) {
      scrim.classList.remove("open");
      setTimeout(() => { scrim.style.display = "none"; }, 200);
    }
  };

  window.buyNowWishlistItem = function(id) {
    const p = SEED_PRODUCTS.find(item => item.id === id);
    if (!p) return;
    const sz = selectedSizes[id] || (p.sizes && p.sizes[0]) || 'M';
    if (window.openShelbyCheckout) {
      window.openShelbyCheckout({
        items: [{
          id: p.id,
          name: p.name,
          size: sz,
          qty: 1,
          price: p.price,
          img: p.img || (p.images && p.images[0]) || 'assets/model-tee.jpg'
        }],
        source: 'buynow'
      });
    }
  };

  window.buyNowFromModal = function(id) {
    const p = SEED_PRODUCTS.find(item => item.id === id);
    if (!p) return;
    const sz = modalActiveSize || selectedSizes[id] || (p.sizes && p.sizes[0]) || 'M';
    if (window.openShelbyCheckout) {
      window.openShelbyCheckout({
        items: [{
          id: p.id,
          name: p.name,
          size: sz,
          qty: 1,
          price: p.price,
          img: p.img || (p.images && p.images[0]) || 'assets/model-tee.jpg'
        }],
        source: 'buynow'
      });
    }
  };

  /* ============================================================
     SIZE CHART MODAL
     ============================================================ */
  window.openSizeChart = function() {
    const modal = document.getElementById("sizeChartModal");
    const scrim = document.getElementById("sizeChartScrim");
    if (modal) modal.classList.add("open");
    if (scrim) {
      scrim.style.display = "block";
      scrim.classList.add("open");
    }
  };

  window.closeSizeChart = function() {
    const modal = document.getElementById("sizeChartModal");
    const scrim = document.getElementById("sizeChartScrim");
    if (modal) modal.classList.remove("open");
    if (scrim) {
      scrim.classList.remove("open");
      setTimeout(() => { scrim.style.display = "none"; }, 200);
    }
  };

  /* ============================================================
     THEME CONTROLLER
     ============================================================ */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('sh-theme', theme);
    const mobText = document.getElementById("mobThemeModeText");
    if (mobText) mobText.textContent = theme === 'dark' ? 'Dark Mode' : 'Light Mode';
  }

  const savedTheme = localStorage.getItem('sh-theme') || 'light';
  applyTheme(savedTheme);

  window.toggleThemeHandler = function() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  };

  /* Mobile Nav Drawer */
  window.openMobileNav = function() {
    const scrim = document.getElementById("mobileDrawerScrim");
    const panel = document.getElementById("mobileDrawerPanel");
    if (scrim) {
      scrim.style.display = "block";
      scrim.classList.add("open");
    }
    if (panel) panel.classList.add("open");
  };

  window.closeMobileNav = function() {
    const scrim = document.getElementById("mobileDrawerScrim");
    const panel = document.getElementById("mobileDrawerPanel");
    if (scrim) {
      scrim.classList.remove("open");
      setTimeout(() => { scrim.style.display = "none"; }, 250);
    }
    if (panel) panel.classList.remove("open");
  };

  /* Real-time Storage Sync */
  window.addEventListener('storage', (e) => {
    if (!e.key || e.key === 'sh-wishlist') {
      WISHLIST = new Set(JSON.parse(localStorage.getItem('sh-wishlist') || '[]'));
      renderWishlist();
    }
    if (!e.key || e.key === 'sh_cart') {
      CART = JSON.parse(localStorage.getItem('sh_cart') || '[]');
      renderCart();
    }
    if (!e.key || e.key === 'sh_products_db_v4') {
      PRODUCTS = loadProducts();
      renderWishlist();
    }
  });

  /* Keyboard shortcut ESC */
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      closeProduct();
      closeSizeChart();
      hideCart();
      closeMobileNav();
    }
  });

  /* DOM Ready Init */
  document.addEventListener("DOMContentLoaded", () => {
    renderWishlist();
    renderCart();

    const openCartBtn = document.getElementById("openCart");
    if (openCartBtn) openCartBtn.addEventListener("click", showCart);

    const closeCartBtn = document.getElementById("closeCart");
    if (closeCartBtn) closeCartBtn.addEventListener("click", hideCart);

    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) themeToggle.addEventListener("click", toggleThemeHandler);

    const mobThemeToggle = document.getElementById("mobThemeToggle");
    if (mobThemeToggle) mobThemeToggle.addEventListener("click", toggleThemeHandler);

    const openMobBtn = document.getElementById("openMob");
    if (openMobBtn) openMobBtn.addEventListener("click", openMobileNav);

    const closeMobBtn = document.getElementById("closeMob");
    if (closeMobBtn) closeMobBtn.addEventListener("click", closeMobileNav);
  });

})();
