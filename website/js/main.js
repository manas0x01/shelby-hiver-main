    /* ——— GLOBAL CONFIGURATION ——— */
    const WA = "919286511557";

    /* ——— PRODUCTS DATABASE & REAL-TIME SYNCHRONIZATION ——— */
    // Mock products removed. Silhouettes are managed exclusively from the Atelier Admin Panel.
    const SEED_PRODUCTS = [];

    /* Dynamic database initialization & real-time synchronization */
    function getStorefrontProducts() {
      try {
        const stored = localStorage.getItem('sh_products_db_v4');
        if (stored !== null) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) return parsed;
        }
      } catch (e) {
        console.error("Error loading products:", e);
      }
      return [];
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
      if (!e.key || e.key === 'sh_products_db_v4') {
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

      if (typeof updateChipCounts === 'function') updateChipCounts();

      if (items.length === 0) {
        grid.innerHTML = `
          <div style="grid-column:1/-1;text-align:center;padding:70px 20px;background:var(--bg-secondary);border:1px dashed var(--border-color);border-radius:12px;">
            <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="color:var(--text-muted);margin-bottom:14px;"><path d="M16 11V7a4 4 0 0 0-8 0v4M4 7h16l1.2 13.2a2 2 0 0 1-2 1.8H4.8a2 2 0 0 1-2-1.8L4 7z"></path></svg>
            <h3 style="font-family:var(--f-display);font-size:18px;font-weight:800;letter-spacing:-0.01em;margin-bottom:6px;color:var(--text-primary);">Catalogue Awaiting Drop</h3>
            <p style="color:var(--text-muted);font-size:13px;max-width:440px;margin:0 auto 20px;">Silhouettes are currently being curated and published directly from the atelier console.</p>
            <a href="admin/" class="btn-primary-action" style="display:inline-flex;padding:12px 24px;font-size:12px;">
              Add Products in Admin Panel →
            </a>
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
        const isLive = tee.isLive !== false;
        const discountText = isLive 
          ? (tee.discountText || `${Math.round(((tee.mrp - tee.price)/tee.mrp)*100)}% OFF`)
          : "COMING SOON";

        card.innerHTML = `
          <div class="pc-media" onclick="openProduct('${tee.id}')">
            <img class="pri" src="${primaryImg}" alt="${tee.name}" loading="lazy">
            <img class="sec" src="${secondaryImg}" alt="${tee.name}" loading="lazy">
            <button class="wish-btn ${isWish ? 'wishlisted' : ''}" onclick="toggleWishlist(event, '${tee.id}')" aria-label="Wishlist">
              ${isWish ? '♥' : '♡'}
            </button>
            <span class="pc-rating-chip">★ ${tee.rating} | ${tee.reviewCount || 120}</span>
            <span class="pc-disc-tag ${!isLive ? 'coming-soon-tag' : ''}">${isLive ? discountText : 'COMING SOON'}</span>
          </div>
          <div class="pc-info">
            <div class="pc-brand-name">SHELBY HIVER</div>
            <h3 class="pc-name" onclick="openProduct('${tee.id}')" title="${tee.name}">${tee.name}</h3>
            <div class="pc-price-wrap">
              ${isLive ? `
                <span class="pc-price">₹ ${(tee.price).toLocaleString()}</span>
                <del class="pc-mrp">₹ ${tee.mrp.toLocaleString()}</del>
                <span class="pc-discount">${discountText}</span>
              ` : `
                <span class="pc-price" style="color:var(--text-muted);font-size:12.5px;letter-spacing:0.04em;">PREVIEW ARCHIVE</span>
                <span class="pc-discount" style="color:var(--text-muted);font-size:11px;font-weight:600;">(DROP 02)</span>
              `}
            </div>
            <div class="pc-size-pills" onclick="event.stopPropagation()">
              ${tee.sizes.map(s => `<button type="button" class="pc-size-pill ${currentSz === s ? 'active' : ''} ${!isLive ? 'disabled' : ''}" ${!isLive ? 'disabled' : ''} onclick="pickSz2('${tee.id}','${s}',this,event)">${s}</button>`).join('')}
            </div>
            <div class="pc-action-row" onclick="event.stopPropagation()">
              ${isLive ? `
                <button type="button" class="pc-btn-cart" onclick="addToCart('${tee.id}', selectedSizes['${tee.id}'])">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 11V7a4 4 0 0 0-8 0v4M4 7h16l1.2 13.2a2 2 0 0 1-2 1.8H4.8a2 2 0 0 1-2-1.8L4 7z"></path>
                  </svg>
                  <span>Add to Bag</span>
                </button>
                <button type="button" class="pc-btn-view" onclick="openProduct('${tee.id}')" title="Quick View">
                  <span>View</span>
                </button>
              ` : `
                <button type="button" class="pc-btn-cart pc-btn-disabled" disabled title="Coming Soon in Drop 02">
                  <span>Coming Soon</span>
                </button>
                <button type="button" class="pc-btn-view" onclick="openProduct('${tee.id}')" title="Preview Details">
                  <span>Preview</span>
                </button>
              `}
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
      if (p && p.isLive === false) {
        toast(`${p.name} is Coming Soon in Drop 02.`);
        return;
      }
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

    /* ——— INIT ——— */
    renderProducts();
    renderCart();
    checkHashRoute();
