/* ——— GLOBAL CONFIGURATION ——— */
const WA = "919286511557";

/* ——— PRODUCTS DATABASE & REAL-TIME SYNCHRONIZATION ——— */
const SEED_PRODUCTS = [
  {
    id: "SH-DROP01-FRAGMENTS-LB",
    sku: "SH-D01-FRG-05",
    category: "tees",
    name: "Fragments Still Speak Boxy Tee",
    subtitle: "220 GSM Combed Cotton · Boxy Oversized",
    price: 699,
    mrp: 1199,
    discountText: "42% OFF",
    badge: "NEW COLLECTION",
    isLive: true,
    inStock: true,
    outOfStock: false,
    disabledSizes: ["S", "XL"],
    rating: 4.9,
    reviewCount: 142,
    img: "drops/lb1.png",
    altImg: "drops/lb2.png",
    images: [
      "drops/lb1.png",
      "drops/lb2.png",
      "drops/lb3.png",
      "drops/lb4.png"
    ],
    fabric: "220 GSM Pure Combed Cotton",
    fit: "Boxy Drop-Shoulder Oversized",
    colors: [
      { name: "Light Brown", hex: "#8d5b4c" }
    ],
    sizes: ["S", "M", "L", "XL"],
    desc: "Drop 01 flagship silhouette in Light Brown. 220 GSM high-density combed cotton heavyweight t-shirt cut in a relaxed, architectural boxy fit with structured drop shoulders. Features minimal SH chest typography and a statement archival artwork across the back, depicting a fragmented classical sculpture surrounded by celestial geometry and the words “FRAGMENTS STILL SPEAK.”",
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
    inStock: true,
    outOfStock: false,
    disabledSizes: ["S", "XL"],
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
    colors: [
      { name: "Sand Beige", hex: "#d8c7b5" }
    ],
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
    inStock: true,
    outOfStock: false,
    disabledSizes: ["S", "XL"],
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
    colors: [
      { name: "Obsidian Black", hex: "#0a0a0a" }
    ],
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
    discountText: "OUT OF STOCK",
    badge: "OUT OF STOCK",
    isLive: true,
    inStock: false,
    outOfStock: true,
    disabledSizes: ["S", "XL"],
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
    colors: [
      { name: "Espresso Brown", hex: "#432818" }
    ],
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
    discountText: "OUT OF STOCK",
    badge: "OUT OF STOCK",
    isLive: true,
    inStock: false,
    outOfStock: true,
    disabledSizes: ["S", "XL"],
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
    colors: [
      { name: "Midnight Navy", hex: "#161e2e" }
    ],
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

/* Global Availability Rules */
const UNAVAILABLE_SIZES = ['S', 'XL'];

function isSizeDisabled(s, p) {
  if (!s) return false;
  const norm = String(s).toUpperCase();
  if (UNAVAILABLE_SIZES.includes(norm)) return true;
  if (p && Array.isArray(p.disabledSizes) && p.disabledSizes.map(x => String(x).toUpperCase()).includes(norm)) return true;
  return false;
}

function isProductOutOfStock(p) {
  if (!p) return false;
  if (p.inStock === false || p.outOfStock === true || p.id === 'SH-DROP01-FRAGMENTS' || p.id === 'SH-DROP01-BETTERDAYS') return true;
  return false;
}

function getDefaultSize(p, preferred) {
  if (preferred && !isSizeDisabled(preferred, p)) return preferred;
  const available = ((p && p.sizes) || ['M', 'L']).filter(s => !isSizeDisabled(s, p));
  return available[0] || 'M';
}

/* Dynamic database initialization & real-time synchronization */
function getStorefrontProducts() {
  try {
    const stored = localStorage.getItem('sh_products_db_v4');
    if (stored !== null) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        let updated = false;
        SEED_PRODUCTS.forEach(seed => {
          const existingIdx = parsed.findIndex(p => p.id === seed.id);
          if (existingIdx === -1) {
            parsed.unshift(seed);
            updated = true;
          } else {
            if (parsed[existingIdx].inStock !== seed.inStock) {
              parsed[existingIdx].inStock = seed.inStock;
              updated = true;
            }
            if (parsed[existingIdx].outOfStock !== seed.outOfStock) {
              parsed[existingIdx].outOfStock = seed.outOfStock;
              updated = true;
            }
            if (parsed[existingIdx].badge !== seed.badge) {
              parsed[existingIdx].badge = seed.badge;
              updated = true;
            }
            if (parsed[existingIdx].discountText !== seed.discountText) {
              parsed[existingIdx].discountText = seed.discountText;
              updated = true;
            }
            if (parsed[existingIdx].disabledSizes !== seed.disabledSizes) {
              parsed[existingIdx].disabledSizes = seed.disabledSizes;
              updated = true;
            }
            if (parsed[existingIdx].img !== seed.img) {
              parsed[existingIdx] = { ...parsed[existingIdx], ...seed };
              updated = true;
            }
          }
        });
        // Ensure newest collection (SH-DROP01-FRAGMENTS-LB) appears at the top
        const topIdx = parsed.findIndex(p => p.id === 'SH-DROP01-FRAGMENTS-LB');
        if (topIdx > 0) {
          const [topItem] = parsed.splice(topIdx, 1);
          parsed.unshift(topItem);
          updated = true;
        }
        parsed.forEach(p => {
          if (Array.isArray(p.sizes)) {
            const filtered = p.sizes.filter(s => !['XS', 'XXL', 'XXXL', '2XL', '3XL'].includes(String(s).toUpperCase()));
            if (filtered.length !== p.sizes.length) {
              p.sizes = filtered;
              updated = true;
            }
          }
        });
        if (updated) {
          localStorage.setItem('sh_products_db_v4', JSON.stringify(parsed));
        }
        return parsed;
      }
    }
  } catch (e) {
    console.error("Error loading products:", e);
  }
  localStorage.setItem('sh_products_db_v4', JSON.stringify(SEED_PRODUCTS));
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

/* One-time reset of old/seeded wishlist across all accounts */
if (!localStorage.getItem('sh_wishlist_clean_reset')) {
  localStorage.setItem('sh-wishlist', JSON.stringify([]));
  localStorage.removeItem('sh_wishlist_seeded');
  localStorage.setItem('sh_wishlist_clean_reset', '1');
  try {
    const rawUsers = localStorage.getItem('sh_auth_users_v2');
    if (rawUsers) {
      let users = JSON.parse(rawUsers);
      if (Array.isArray(users)) {
        users.forEach(u => { if (u) u.wishlist = []; });
        localStorage.setItem('sh_auth_users_v2', JSON.stringify(users));
      }
    }
    const currUser = localStorage.getItem('sh_current_user_v2');
    if (currUser) {
      let u = JSON.parse(currUser);
      if (u && u.wishlist) {
        u.wishlist = [];
        localStorage.setItem('sh_current_user_v2', JSON.stringify(u));
      }
    }
  } catch (e) {}
}

let WISHLIST = new Set(JSON.parse(localStorage.getItem('sh-wishlist') || '[]'));
let CART = JSON.parse(localStorage.getItem('sh_cart') || '[]');
let discount = 1.0;
const selectedSizes = {};
window.selectedSizes = selectedSizes;
PRODUCTS.forEach(p => {
  selectedSizes[p.id] = getDefaultSize(p, selectedSizes[p.id]);
});

/* Real-time sync listener with Admin panel & other tabs */
window.addEventListener('storage', (e) => {
  if (!e.key || e.key === 'sh_products_db_v4') {
    PRODUCTS = getStorefrontProducts();
    TEES = PRODUCTS;
    PRODUCTS.forEach(p => {
      selectedSizes[p.id] = getDefaultSize(p, selectedSizes[p.id]);
    });
    if (typeof renderProducts === 'function') renderProducts();
  }
  if (!e.key || e.key === 'sh-wishlist') {
    WISHLIST = new Set(JSON.parse(localStorage.getItem('sh-wishlist') || '[]'));
    if (typeof renderProducts === 'function') renderProducts();
    if (typeof updateWishlistBadges === 'function') updateWishlistBadges();
  }
  if (!e.key || e.key === 'sh_cart') {
    CART = JSON.parse(localStorage.getItem('sh_cart') || '[]');
    if (typeof renderCart === 'function') renderCart();
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

  if (typeof updateChipCounts === 'function') updateChipCounts();

  if (items.length === 0) {
    const isFiltered = currentSearchQuery || currentCat !== 'all';
    grid.innerHTML = `
          <div style="grid-column:1/-1;text-align:center;padding:70px 20px;background:var(--bg-secondary);border:1px dashed var(--border-color);border-radius:0;">
            <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="color:var(--text-muted);margin-bottom:14px;"><rect x="4" y="8" width="16" height="13" rx="2"></rect><path d="M8 8V6a4 4 0 0 1 8 0v2"></path></svg>
            <h3 style="font-family:var(--f-display);font-size:17px;font-weight:800;letter-spacing:-0.01em;margin-bottom:6px;color:var(--text-primary);">
              ${isFiltered ? 'No Matching Silhouettes Found' : 'Drop 01 Collection'}
            </h3>
            <p style="color:var(--text-muted);font-size:13px;max-width:420px;margin:0 auto;">
              ${isFiltered ? 'Try clearing your search or selecting another category filter.' : 'Products will appear here once published.'}
            </p>
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

    const outOfStock = isProductOutOfStock(tee);
    const currentSz = getDefaultSize(tee, selectedSizes[tee.id]);
    selectedSizes[tee.id] = currentSz;
    const pImgs = (Array.isArray(tee.images) && tee.images.length > 0) ? tee.images : [tee.img || 'assets/model-tee.jpg'];
    const primaryImg = pImgs[0];
    const secondaryImg = pImgs[1] || tee.altImg || primaryImg;
    const isLive = tee.isLive !== false;
    const discountText = outOfStock
      ? "OUT OF STOCK"
      : (isLive
        ? (tee.discountText || `${Math.round(((tee.mrp - tee.price) / tee.mrp) * 100)}% OFF`)
        : "COMING SOON");

    card.innerHTML = `
          <div class="pc-media" onclick="openProduct('${tee.id}')">
            <img class="pri" src="${primaryImg}" alt="${tee.name}" loading="lazy">
            <img class="sec" src="${secondaryImg}" alt="${tee.name}" loading="lazy">
            <button class="wish-btn ${isWish ? 'wishlisted' : ''}" onclick="toggleWishlist(event, '${tee.id}')" aria-label="Wishlist">
              ${isWish
                ? `<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`
                : `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`}
            </button>
            <span class="pc-disc-tag ${outOfStock ? 'out-of-stock-tag' : (!isLive ? 'coming-soon-tag' : '')}">${discountText}</span>
          </div>
          <div class="pc-info">
            <div class="pc-brand-name">SHELBY HIVER</div>
            <h3 class="pc-name" onclick="openProduct('${tee.id}')" title="${tee.name}">${tee.name}</h3>
            <div class="pc-price-wrap">
              ${isLive ? `
                <span class="pc-price">₹&nbsp;${(tee.price).toLocaleString()}</span>
                <del class="pc-mrp">₹&nbsp;${tee.mrp.toLocaleString()}</del>
                <span class="pc-discount">${outOfStock ? 'OUT OF STOCK' : (discountText || '').replace(/\s+/g, '&nbsp;')}</span>
              ` : `
                <span class="pc-price" style="color:var(--text-muted);font-size:12.5px;letter-spacing:0.04em;">PREVIEW ARCHIVE</span>
                <span class="pc-discount" style="color:var(--text-muted);font-size:11px;font-weight:600;">(DROP 02)</span>
              `}
            </div>
            <div class="pc-size-pills" onclick="event.stopPropagation()">
              ${tee.sizes.map(s => {
                const isSzDisabled = isSizeDisabled(s, tee);
                const isDisabled = !isLive || outOfStock || isSzDisabled;
                const titleText = isSzDisabled ? `Size ${s} is currently out of stock` : (outOfStock ? 'Piece is currently out of stock' : `Size ${s}`);
                return `<button type="button" class="pc-size-pill ${currentSz === s && !isDisabled ? 'active' : ''} ${isDisabled ? 'disabled' : ''}" ${isDisabled ? 'disabled' : ''} title="${titleText}" onclick="pickSz2('${tee.id}','${s}',this,event)">${s}</button>`;
              }).join('')}
            </div>
            <div class="pc-action-row" onclick="event.stopPropagation()">
              ${outOfStock ? `
                <button type="button" class="pc-btn-cart pc-btn-disabled pc-btn-soldout" disabled title="Currently Out of Stock">
                  Out of Stock
                </button>
                <button type="button" class="pc-btn-view" onclick="openProduct('${tee.id}')" title="Quick View">
                  View
                </button>
              ` : (isLive ? `
                <button type="button" class="pc-btn-cart" onclick="addToCart('${tee.id}')">
                  Add to Bag
                </button>
                <button type="button" class="pc-btn-view" onclick="openProduct('${tee.id}')" title="Quick View">
                  View
                </button>
              ` : `
                <button type="button" class="pc-btn-cart pc-btn-disabled" disabled title="Coming Soon in Drop 02">
                  Coming Soon
                </button>
                <button type="button" class="pc-btn-view" onclick="openProduct('${tee.id}')" title="Preview Details">
                  Preview
                </button>
              `)}
            </div>
          </div>`;
    grid.appendChild(card);
  });
}

function renderTees() {
  renderProducts();
}

function updateChipCounts() {
  const allCount = PRODUCTS.length;
  const teesCount = PRODUCTS.filter(p => p.category === 'tees').length;
  const acidCount = PRODUCTS.filter(p => p.category === 'acid').length;
  const hoodiesCount = PRODUCTS.filter(p => p.category === 'hoodies').length;
  const bottomsCount = PRODUCTS.filter(p => p.category === 'bottoms').length;
  const accCount = PRODUCTS.filter(p => p.category === 'accessories').length;

  const elAll = document.getElementById("chipCountAll");
  if (elAll) elAll.textContent = allCount;
  const elTees = document.getElementById("chipCountTees");
  if (elTees) elTees.textContent = teesCount > 0 ? `${teesCount} LIVE` : '0';
  const elAcid = document.getElementById("chipCountAcid");
  if (elAcid) elAcid.textContent = acidCount > 0 ? `${acidCount} LIVE` : '0';
  const elHoodies = document.getElementById("chipCountHoodies");
  if (elHoodies) elHoodies.textContent = hoodiesCount > 0 ? `${hoodiesCount} LIVE` : 'COMING SOON';
  const elBottoms = document.getElementById("chipCountBottoms");
  if (elBottoms) elBottoms.textContent = bottomsCount > 0 ? `${bottomsCount} LIVE` : 'COMING SOON';
  const elAcc = document.getElementById("chipCountAccessories");
  if (elAcc) elAcc.textContent = accCount > 0 ? `${accCount} LIVE` : 'COMING SOON';
}

/* ——— CATEGORY & SORT HANDLERS ——— */
function filterCategory(cat, btn) {
  currentCat = cat;
  document.querySelectorAll('#catNav .cat-chip-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderProducts();
}

function handleSortChange(sortVal) {
  currentSort = sortVal;
  renderProducts();
}

/* ——— WISHLIST ——— */
function updateWishlistBadges() {
  const count = WISHLIST.size;
  const b = document.getElementById("wishlistCount");
  if (b) {
    b.textContent = count;
    b.style.display = count > 0 ? "flex" : "none";
  }
  const mb = document.getElementById("mobWishBadge");
  if (mb) {
    mb.textContent = `${count} ${count === 1 ? 'item' : 'items'}`;
  }
  const mobBottomWish = document.getElementById("mobBottomWishCount");
  if (mobBottomWish) {
    mobBottomWish.textContent = count;
    mobBottomWish.style.display = count > 0 ? "flex" : "none";
  }
}

function toggleWishlist(e, id) {
  if (e) e.stopPropagation();
  const tee = PRODUCTS.find(p => p.id === id);
  if (WISHLIST.has(id)) {
    WISHLIST.delete(id);
    toast(`Removed ${tee ? tee.name : 'item'} from Wishlist`);
  } else {
    WISHLIST.add(id);
    toast(`Added ${tee ? tee.name : 'item'} to Wishlist`);
  }
  localStorage.setItem('sh-wishlist', JSON.stringify([...WISHLIST]));
  window.dispatchEvent(new Event('storage'));
  renderProducts();
  updateWishlistBadges();
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
  const heartSvg = isWish
    ? `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`
    : `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`;
  if (btn) btn.classList.toggle("active", isWish);
  if (overlay) {
    overlay.classList.toggle("active", isWish);
    overlay.innerHTML = heartSvg;
  }
  if (heart) heart.innerHTML = heartSvg;
  if (text) text.textContent = isWish ? 'In Wishlist' : 'Wishlist';
}

/* ——— PRODUCT DETAIL QUICK VIEW (PDP) ——— */
let modalActiveSize = 'M';

function openProduct(id) {
  const p = PRODUCTS.find(item => item.id === id) || PRODUCTS[0];
  const outOfStock = isProductOutOfStock(p);
  activePDPProduct = p;
  activePDPSize = getDefaultSize(p, selectedSizes[p.id]);
  modalActiveSize = activePDPSize;

  const modal = document.getElementById("productModal") || document.getElementById("productDetailPage");
  const scrim = document.getElementById("pdpScrim");

  if (!modal) {
    window.location.href = `catalogue.html#product-${p.id}`;
    return;
  }

  // Update URL hash
  if (window.location.hash !== `#product-${p.id}`) {
    window.history.pushState(null, '', `#product-${p.id}`);
  }

  const pImgs = (Array.isArray(p.images) && p.images.length > 0) ? p.images : [p.img || 'assets/model-tee.jpg'];
  modalActiveImgIdx = 0;
  modalActiveImgs = pImgs;
  const isLive = p.isLive !== false;
  const finalPrice = Math.round(p.price * discount);

  modal.innerHTML = `
        <div style="position:relative;">
          <button type="button" onclick="closeProduct()" aria-label="Close" style="position:absolute;top:-10px;right:-10px;width:34px;height:34px;border-radius:50%;background:var(--bg-secondary);border:1px solid var(--border-color);cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--text-primary);z-index:10;transition:transform 0.15s ease;">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:24px;align-items:start;">
            <!-- Media Column -->
            <div>
              <div id="pdpModalImgBox" style="position:relative;width:100%;background:var(--bg-secondary);border-radius:0;overflow:hidden;margin-bottom:12px;border:none;display:flex;align-items:center;justify-content:center;padding:12px;box-sizing:border-box;touch-action:pan-y;-webkit-user-select:none;user-select:none;">
                <img id="pdpModalMainImg" src="${pImgs[0]}" alt="${p.name}" style="width:100%;height:auto;max-height:480px;object-fit:contain;display:block;transition:opacity 0.15s;border-radius:0;border:none;pointer-events:none;">
                ${pImgs.length > 1 ? `
                  <button type="button" onclick="prevModalImg()" aria-label="Previous image" style="position:absolute;top:50%;left:10px;transform:translateY(-50%);width:36px;height:36px;border-radius:50%;background:rgba(0,0,0,0.55);color:#fff;border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:10;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);padding:0;transition:transform 0.15s,background 0.2s;">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
                  </button>
                  <button type="button" onclick="nextModalImg()" aria-label="Next image" style="position:absolute;top:50%;right:10px;transform:translateY(-50%);width:36px;height:36px;border-radius:50%;background:rgba(0,0,0,0.55);color:#fff;border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:10;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);padding:0;transition:transform 0.15s,background 0.2s;">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </button>
                  <span id="pdpModalCounter" style="position:absolute;bottom:10px;right:12px;background:rgba(0,0,0,0.65);color:#fff;font-family:var(--f-display);font-size:11px;font-weight:700;padding:3px 9px;border-radius:2px;letter-spacing:0.05em;z-index:9;pointer-events:none;">1 / ${pImgs.length}</span>
                ` : ''}
              </div>
              ${pImgs.length > 1 ? `
                <div style="display:flex;gap:8px;overflow-x:auto;padding-bottom:4px;" id="modalThumbsList">
                  ${pImgs.map((img, idx) => `
                    <img src="${img}" alt="${p.name}" style="width:56px;height:56px;object-fit:contain;background:var(--bg-secondary);border-radius:0;cursor:pointer;border:1.5px solid ${idx === 0 ? 'var(--brand-black)' : 'transparent'};flex-shrink:0;padding:2px;box-sizing:border-box;transition:border-color 0.15s;" onclick="selectModalThumb('${img}', this, ${idx})">
                  `).join('')}
                </div>
              ` : ''}
            </div>

            <!-- Details Column -->
            <div>
              <div style="font-family:var(--f-mono);font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:var(--text-muted);margin-bottom:6px;">SHELBY HIVER / ${(p.category || 'tees').toUpperCase()}</div>
              <h2 style="font-family:var(--f-display);font-size:21px;font-weight:700;color:var(--text-primary);line-height:1.25;margin-bottom:10px;">${p.name}</h2>
              
              <div style="display:flex;align-items:baseline;gap:10px;margin-bottom:12px;">
                ${outOfStock ? `
                  <span style="font-family:var(--f-display);font-size:20px;font-weight:700;color:var(--text-primary);">₹ ${finalPrice.toLocaleString()}</span>
                  <del style="font-size:13.5px;color:var(--text-muted);">₹ ${(p.mrp || p.price).toLocaleString()}</del>
                  <span style="font-size:11.5px;font-weight:700;color:#ef4444;background:rgba(239,68,68,0.12);padding:2px 8px;border-radius:4px;letter-spacing:0.04em;">OUT OF STOCK</span>
                ` : (isLive ? `
                  <span style="font-family:var(--f-display);font-size:20px;font-weight:700;color:var(--text-primary);">₹ ${finalPrice.toLocaleString()}</span>
                  <del style="font-size:13.5px;color:var(--text-muted);">₹ ${(p.mrp || p.price).toLocaleString()}</del>
                  <span style="font-size:11.5px;font-weight:700;color:#047857;background:rgba(4,120,87,0.08);padding:2px 8px;border-radius:4px;">${p.discountText || 'OFFER'}</span>
                ` : `
                  <span style="font-family:var(--f-display);font-size:14px;color:var(--text-muted);">PREVIEW ARCHIVE · COMING SOON</span>
                `)}
              </div>

              <div style="font-size:11.5px;color:var(--text-muted);margin-bottom:14px;">Inclusive of all taxes · Free express delivery</div>
              <div style="height:1px;background:var(--border-color);margin:12px 0;"></div>

              <!-- Sizes -->
              <div style="margin-bottom:16px;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                  <span style="font-size:11.5px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;color:var(--text-primary);">SELECT SIZE</span>
                  <button type="button" onclick="openSizeChart()" style="background:none;border:none;font-size:11.5px;color:var(--text-muted);text-decoration:underline;cursor:pointer;">Size Guide →</button>
                </div>
                <div style="display:flex;gap:8px;flex-wrap:wrap;">
                  ${p.sizes.map(s => {
                    const isSzDisabled = isSizeDisabled(s, p);
                    const isDisabled = !isLive || outOfStock || isSzDisabled;
                    const titleText = isSzDisabled ? `Size ${s} is currently out of stock` : (outOfStock ? 'Piece is currently out of stock' : `Size ${s}`);
                    return `
                      <button type="button" class="pc-size-pill ${s === modalActiveSize && !isDisabled ? 'active' : ''} ${isDisabled ? 'disabled' : ''}" ${isDisabled ? 'disabled' : ''} title="${titleText}" onclick="selectModalSize('${p.id}', '${s}', this)" style="min-width:44px;padding:8px 12px;font-weight:600;cursor:${isDisabled ? 'not-allowed' : 'pointer'};">${s}</button>
                    `;
                  }).join('')}
                </div>
              </div>

              ${outOfStock ? `
                <div style="font-size:12px;color:#ef4444;background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.2);padding:8px 12px;border-radius:6px;margin:12px 0;display:flex;align-items:center;gap:6px;">
                  <span>⚠️</span><strong>Out of Stock:</strong> This silhouette colorway is currently sold out. Restock in progress.
                </div>
              ` : ''}

              <!-- CTAs -->
              ${outOfStock ? `
                <div style="display:flex;gap:10px;margin-bottom:16px;">
                  <button type="button" class="cart-checkout-btn pc-btn-soldout" style="flex:1;background:var(--bg-tertiary);color:var(--text-muted);border:1px solid var(--border-color);padding:12px 16px;font-size:13px;font-weight:700;cursor:not-allowed;" disabled>
                    Out of Stock
                  </button>
                  <button type="button" class="cart-checkout-btn" style="flex:1;background:var(--bg-secondary);color:var(--text-primary);border:1px solid var(--border-color);padding:12px 16px;font-size:13px;font-weight:700;cursor:pointer;" onclick="directWA('${p.id}')">
                    Enquire Restock
                  </button>
                </div>
              ` : (isLive ? `
                <div style="display:flex;gap:10px;margin-bottom:16px;">
                  <button type="button" class="cart-checkout-btn" style="flex:1;padding:12px 16px;font-size:13px;font-weight:700;cursor:pointer;" onclick="closeProduct(); addToCart('${p.id}', modalActiveSize);">
                    Add to Bag
                  </button>
                  <button type="button" class="cart-checkout-btn" style="flex:1;background:var(--text-primary,#111);color:var(--bg-primary,#fff);padding:12px 16px;font-size:13px;font-weight:700;cursor:pointer;border:none;border-radius:6px;" onclick="closeProduct();if(window.openShelbyCheckout){window.openShelbyCheckout({items:[{id:'${p.id}',name:'${p.name.replace(/'/g, "\\'")}',size:modalActiveSize,qty:1,price:${finalPrice},img:'${p.img}'}],source:'buynow'});}else{directWA('${p.id}');}">
                    Buy Now
                  </button>
                </div>
              ` : '')}

              <!-- Specs -->
              <div style="font-size:12px;color:var(--text-secondary);line-height:1.6;margin-bottom:12px;">
                ${p.desc}
              </div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:11px;background:var(--bg-secondary);padding:8px 10px;border-radius:6px;border:1px solid var(--border-color);">
                <div><strong style="color:var(--text-primary);">Fabric:</strong> ${p.fabric}</div>
                <div><strong style="color:var(--text-primary);">Fit:</strong> ${p.fit}</div>
              </div>
              
              <div style="margin-top:14px;text-align:right;">
                <a href="catalogue.html#product-${p.id}" style="font-size:12px;color:var(--brand-black);font-weight:600;text-decoration:none;">View in Full Catalogue →</a>
              </div>
            </div>
          </div>
        </div>
      `;

  modal.style.display = "block";
  modal.classList.add("active");
  if (scrim) {
    scrim.style.display = "block";
    scrim.classList.add("open");
  }
  document.body.style.overflow = "hidden";
  modal.scrollTop = 0;

  const imgBox = document.getElementById("pdpModalImgBox");
  if (imgBox && pImgs.length > 1) {
    attachSwipeGesture(imgBox, () => nextModalImg(), () => prevModalImg());
  }
}

function closeProduct() {
  const modal = document.getElementById("productModal") || document.getElementById("productDetailPage");
  const scrim = document.getElementById("pdpScrim");
  if (modal) {
    modal.style.display = "none";
    modal.classList.remove("active");
  }
  if (scrim) {
    scrim.style.display = "none";
    scrim.classList.remove("open");
  }
  document.body.style.overflow = "";
  if (window.location.hash.startsWith('#product-')) {
    window.history.pushState(null, '', window.location.pathname + window.location.search);
  }
}

let modalActiveImgIdx = 0;
let modalActiveImgs = [];

function selectModalThumb(src, el, idx) {
  if (typeof idx === 'number') modalActiveImgIdx = idx;
  const main = document.getElementById("pdpModalMainImg");
  if (main) {
    main.style.opacity = '0.3';
    setTimeout(() => {
      main.src = src;
      main.style.opacity = '1';
    }, 100);
  }
  const thumbs = document.querySelectorAll('#modalThumbsList img');
  thumbs.forEach((img, i) => {
    img.style.borderColor = (i === modalActiveImgIdx) ? 'var(--brand-black)' : 'transparent';
  });
  const counter = document.getElementById('pdpModalCounter');
  if (counter && modalActiveImgs && modalActiveImgs.length > 1) {
    counter.textContent = `${modalActiveImgIdx + 1} / ${modalActiveImgs.length}`;
  }
}

function nextModalImg() {
  if (!modalActiveImgs || modalActiveImgs.length <= 1) return;
  modalActiveImgIdx = (modalActiveImgIdx + 1) % modalActiveImgs.length;
  selectModalThumb(modalActiveImgs[modalActiveImgIdx], null, modalActiveImgIdx);
}

function prevModalImg() {
  if (!modalActiveImgs || modalActiveImgs.length <= 1) return;
  modalActiveImgIdx = (modalActiveImgIdx - 1 + modalActiveImgs.length) % modalActiveImgs.length;
  selectModalThumb(modalActiveImgs[modalActiveImgIdx], null, modalActiveImgIdx);
}

function attachSwipeGesture(el, onLeft, onRight) {
  if (!el) return;
  let startX = 0, startY = 0, endX = 0, endY = 0, swiping = false;
  el.addEventListener('touchstart', function (e) {
    if (e.touches.length === 1) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      endX = startX;
      endY = startY;
      swiping = true;
    }
  }, { passive: true });
  el.addEventListener('touchmove', function (e) {
    if (!swiping || e.touches.length !== 1) return;
    endX = e.touches[0].clientX;
    endY = e.touches[0].clientY;
  }, { passive: true });
  el.addEventListener('touchend', function (e) {
    if (!swiping) return;
    swiping = false;
    const dx = endX - startX;
    const dy = endY - startY;
    if (Math.abs(dx) > 35 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) onLeft();
      else onRight();
    }
  }, { passive: true });
}

function selectModalSize(prodId, sz, btn) {
  const p = PRODUCTS.find(t => t.id === prodId);
  if (isSizeDisabled(sz, p)) {
    toast(`Size ${sz} is currently unavailable.`);
    return;
  }
  modalActiveSize = sz;
  selectedSizes[prodId] = sz;
  if (btn && btn.parentElement) {
    btn.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
}

function selectPDPThumb(idx, imgSrc) {
  selectModalThumb(imgSrc, null);
}

function selectPDPSize(sz, btn) {
  if (activePDPProduct) selectModalSize(activePDPProduct.id, sz, btn);
}

function selectPDPColor(idx, name, btn) {
  // Compatibility helper
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

  if (window.openShelbyCheckout) {
    window.openShelbyCheckout({
      items: [{
        id: p.id,
        name: p.name,
        size: sz,
        qty: 1,
        price: finalPrice,
        img: p.img || (Array.isArray(p.images) ? p.images[0] : 'assets/model-tee.jpg')
      }],
      source: 'buynow'
    });
    return;
  }

  // Record to Admin real-time orders stream
  try {
    let user = null;
    try { user = JSON.parse(localStorage.getItem('sh_current_user_v2') || 'null'); } catch (e) { }
    const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
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
      status: 'Pending Dispatch',
      channel: 'Storefront PDP Buy Now',
      createdAt: new Date().toISOString()
    });
  } catch (err) {
    console.error("Order dispatch error:", err);
  }

  const colorName = (p.colors && p.colors[activePDPColorIdx]) ? p.colors[activePDPColorIdx].name : 'Standard';
  const msg = `SHELBY HIVER ATELIER — DIRECT ACQUISITION\n\nOrder Request:\n• ${p.name}\n• Size: ${sz}\n• Color: ${colorName}\n• Price: ₹${finalPrice.toLocaleString()} (${p.discountText})\n\nPlease confirm availability and share payment verification details.\n\nClient Name: \nDelivery Address (House No, Landmark, Area, City, Pin): \nContact Phone: `;
  toast(`Opening WhatsApp Concierge for ${p.name}...`);
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
    result.innerHTML = `<span style="color:#e63946;">Please enter a valid 6-digit postal code.</span>`;
    return;
  }
  const deliveryDays = (parseInt(pin[0]) % 2 === 0) ? '2-3' : '3-4';
  result.innerHTML = `
        <span style="color:var(--text-primary);font-weight:700;">Express Delivery available to ${pin} in ${deliveryDays} business days</span>
        <div style="color:var(--text-secondary);margin-top:4px;font-size:11px;">Tracked Dispatch · COD &amp; Direct UPI Settlement</div>
      `;
}

/* ——— SIZE CHART MODAL ——— */
function openSizeChart() {
  const scrim = document.getElementById("sizeChartScrim") || document.getElementById("sizeModalScrim");
  const modal = document.getElementById("sizeChartModal");
  if (scrim) scrim.classList.add("on");
  if (modal) modal.classList.add("on");
  document.body.style.overflow = "hidden";
}

function closeSizeChart() {
  const scrim = document.getElementById("sizeChartScrim") || document.getElementById("sizeModalScrim");
  const modal = document.getElementById("sizeChartModal");
  if (scrim) scrim.classList.remove("on");
  if (modal) modal.classList.remove("on");
  document.body.style.overflow = "";
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
  const p = PRODUCTS.find(t => t.id === id);
  if (isSizeDisabled(sz, p)) {
    toast(`Size ${sz} is currently unavailable.`);
    return;
  }
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
  if (p && isProductOutOfStock(p)) {
    toast(`${p.name} is currently out of stock.`);
    return;
  }
  if (p && p.isLive === false) {
    toast(`${p.name} is Coming Soon in Drop 02.`);
    return;
  }
  const sz = (typeof modalActiveSize !== 'undefined' && modalActiveSize && document.getElementById('productModal')?.classList.contains('active') ? modalActiveSize : null) || sizeArg || selectedSizes[id] || getDefaultSize(p);
  if (isSizeDisabled(sz, p)) {
    toast(`Size ${sz} is currently unavailable.`);
    return;
  }
  const existing = CART.find(i => i.id === id && i.size === sz);
  if (existing) { existing.qty++; }
  else { CART.push({ id, size: sz, qty: 1 }); }
  localStorage.setItem('sh_cart', JSON.stringify(CART));
  window.dispatchEvent(new Event('storage'));
  toast(`Added ${p.name} (${sz}) to Bag`);
  renderCart();
  showCart();
  const b = document.getElementById("bagCount");
  if (b) {
    b.classList.add("bump"); setTimeout(() => b.classList.remove("bump"), 300);
  }
  const mb = document.getElementById("mobBottomBagCount");
  if (mb) {
    mb.classList.add("bump"); setTimeout(() => mb.classList.remove("bump"), 300);
  }
  const pb = document.getElementById("pdpBagBadge");
  if (pb) {
    pb.textContent = CART.reduce((s, i) => s + i.qty, 0);
  }
}
window.addToCart = addToCart;

function updateQty(idx, d) {
  CART[idx].qty += d;
  if (CART[idx].qty <= 0) CART.splice(idx, 1);
  localStorage.setItem('sh_cart', JSON.stringify(CART));
  window.dispatchEvent(new Event('storage'));
  renderCart();
}

/* ——— RENDER CART ——— */
function renderCart() {
  const container = document.getElementById("cartItemsList") || document.getElementById("cartItems");
  const count = CART.reduce((s, i) => s + (i.qty || 1), 0);
  const bagCountEl = document.getElementById("bagCount");
  if (bagCountEl) bagCountEl.textContent = count;
  const mobBottomBagEl = document.getElementById("mobBottomBagCount");
  if (mobBottomBagEl) mobBottomBagEl.textContent = count;
  const cartHeaderCountEl = document.getElementById("cartHeaderCount");
  if (cartHeaderCountEl) cartHeaderCountEl.textContent = count;
  const mobBagBadge = document.getElementById("mobBagBadge");
  if (mobBagBadge) mobBagBadge.textContent = `${count} ${count === 1 ? 'item' : 'items'}`;

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
  if (window.openShelbyCheckout) {
    window.openShelbyCheckout({ source: 'cart' });
    return;
  }
  if (!CART.length) { toast("Bag is empty — select a piece to continue."); return; }
  let lines = "", grand = 0;
  const orderItems = [];
  CART.forEach(item => {
    const tee = TEES.find(t => t.id === item.id);
    const lt = Math.round((tee ? tee.price : 699) * item.qty * discount);
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
  if (discount < 1) lines += `• Promotional Privilege Applied (${Math.round((1 - discount) * 100)}% Benefit)\n`;

  // Record to Admin real-time orders stream
  try {
    let user = null;
    try { user = JSON.parse(localStorage.getItem('sh_current_user_v2') || 'null'); } catch (e) { }
    const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
    recordStorefrontOrder({
      id: orderId,
      customerName: user ? user.name : "Customer",
      customerPhone: user ? user.phone : "+91 9286511557",
      customerEmail: user ? user.email : "customer@shelbyhiver.com",
      items: orderItems,
      total: grand,
      status: 'Pending Dispatch',
      channel: 'Storefront WhatsApp Bag',
      createdAt: new Date().toISOString()
    });
  } catch (err) {
    console.error("Order dispatch error:", err);
  }

  const msg = `SHELBY HIVER ATELIER — ORDER MANIFEST\n\nOrder Request:\n\n${lines}\nTotal Payable: ₹${grand.toLocaleString()}\n\nPlease confirm delivery address and payment verification.\n\nClient Name: \nDelivery Address (House No, Landmark, Area, City, Pin): \nContact Phone: `;
  toast("Opening WhatsApp Concierge...");
  setTimeout(() => window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, "_blank"), 400);
}
window.checkoutViaWhatsApp = checkoutWA;

/* ——— DIRECT BUY ——— */
function directWA(id) {
  const tee = TEES.find(t => t.id === id);
  if (!tee) return;
  if (isProductOutOfStock(tee)) {
    const colorName = (tee.colors && tee.colors[0] && tee.colors[0].name) || '';
    const msg = `Hello Shelby Hiver! 👋\n\nI want to inquire about a restock for:\n• ${tee.name} (${colorName})\n• SKU: ${tee.sku || tee.id}\n\nPlease notify me when this silhouette is back in stock. Thank you!`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, "_blank");
    return;
  }
  const sz = getDefaultSize(tee, selectedSizes[id]);
  if (isSizeDisabled(sz, tee)) {
    toast(`Size ${sz} is currently unavailable.`);
    return;
  }
  const finalPrice = Math.round(tee.price * discount);

  if (window.openShelbyCheckout) {
    window.openShelbyCheckout({
      items: [{
        id: tee.id,
        name: tee.name,
        size: sz,
        qty: 1,
        price: finalPrice,
        img: tee.img || (Array.isArray(tee.images) ? tee.images[0] : 'assets/model-tee.jpg')
      }],
      source: 'buynow'
    });
    return;
  }

  // Record to Admin real-time orders stream
  try {
    let user = null;
    try { user = JSON.parse(localStorage.getItem('sh_current_user_v2') || 'null'); } catch (e) { }
    const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
    recordStorefrontOrder({
      id: orderId,
      customerName: user ? user.name : "Direct Patron",
      customerPhone: user ? user.phone : "+91 9286511557",
      customerEmail: user ? user.email : "patron@shelbyhiver.com",
      items: [{
        name: tee ? tee.name : 'Shelby Item',
        size: sz,
        qty: 1,
        price: finalPrice
      }],
      total: finalPrice,
      status: 'Pending Dispatch',
      channel: 'Storefront Direct Buy',
      createdAt: new Date().toISOString()
    });
  } catch (err) {
    console.error("Order dispatch error:", err);
  }

  const msg = `SHELBY HIVER ATELIER — DIRECT ACQUISITION\n\nOrder Request:\n• ${tee.name}\n• Size: ${sz}\n• Fabric: ${tee.fabric}\n• Price: ₹${tee.price}\n\nPlease confirm availability and share payment verification details.\n\nClient Name: \nDelivery Address (House No, Landmark, Area, City, Pin): \nContact Phone: `;
  toast(`Opening WhatsApp Concierge for ${tee.name}...`);
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
window.showCart = showCart;
window.hideCart = hideCart;
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

/* ——— LIVE DESKTOP & MOBILE SEARCH ——— */
const headerSearch = document.getElementById("headerSearchInput");
const mobileSearch = document.getElementById("mobileSearchInput");
const clearMobSearch = document.getElementById("clearMobileSearch");

function syncSearch(query) {
  currentSearchQuery = (query || "").toLowerCase().trim();
  if (headerSearch && headerSearch.value !== query) headerSearch.value = query;
  if (mobileSearch && mobileSearch.value !== query) mobileSearch.value = query;
  if (clearMobSearch) {
    clearMobSearch.style.display = (query && query.length > 0) ? "block" : "none";
  }
  renderProducts();
}

if (headerSearch) {
  headerSearch.addEventListener("input", (e) => syncSearch(e.target.value));
}
if (mobileSearch) {
  mobileSearch.addEventListener("input", (e) => syncSearch(e.target.value));
}
if (clearMobSearch) {
  clearMobSearch.addEventListener("click", () => {
    syncSearch("");
    if (mobileSearch) mobileSearch.focus();
  });
}

/* ——— THEME TOGGLE (DESKTOP & MOBILE IN DRAWER) ——— */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('sh-theme', theme);
  const mobText = document.getElementById("mobThemeModeText");
  if (mobText) {
    mobText.textContent = theme === 'dark' ? 'Dark Mode' : 'Light Mode';
  }
}

const savedTheme = localStorage.getItem('sh-theme') || 'light';
applyTheme(savedTheme);

function toggleThemeHandler() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
}

const themeToggle = document.getElementById('themeToggle');
if (themeToggle) themeToggle.addEventListener('click', toggleThemeHandler);

const mobThemeToggle = document.getElementById('mobThemeToggle');
if (mobThemeToggle) mobThemeToggle.addEventListener('click', toggleThemeHandler);

/* ——— MOBILE BOTTOM BAR SYNC ——— */
const mobBottomItems = document.querySelectorAll('.mob-bar-item');
mobBottomItems.forEach(item => {
  item.addEventListener('click', function (e) {
    if (this.id === 'mobBarCart') return; // cart modal toggle
    mobBottomItems.forEach(el => el.classList.remove('active'));
    this.classList.add('active');
  });
});

window.addEventListener('scroll', () => {
  const storefrontEl = document.getElementById('storefront');
  const homeBtn = document.getElementById('mobBarHome');
  const catBtn = document.getElementById('mobBarCatalogue');
  if (!storefrontEl || !homeBtn || !catBtn) return;
  const rect = storefrontEl.getBoundingClientRect();
  if (rect.top <= 200 && rect.bottom >= 150) {
    catBtn.classList.add('active');
    homeBtn.classList.remove('active');
  } else if (window.scrollY < 200) {
    homeBtn.classList.add('active');
    catBtn.classList.remove('active');
  }
}, { passive: true });

/* ——— INIT ——— */
renderProducts();
renderCart();
updateWishlistBadges();
checkHashRoute();
