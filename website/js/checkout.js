/**
 * SHELBY HIVER — ATELIER FORMAL CHECKOUT & PAYMENT DOSSIER
 * Architectural Streetwear Order & Payment Settlement Engine
 * 
 * Features:
 * - Formal, luxury atelier aesthetics (no emojis, clean SVG typography)
 * - Required Payment Screenshot Upload Dropzone for UPI QR settlements
 * - Native Web Share API integration (transmits image + details on mobile)
 * - Clipboard image copy fallback for WhatsApp Web (Ctrl+V paste)
 * - Complete delivery dossier (House/Flat No., Landmark, Area, City, Pin)
 * - Synchronized persistence to sh_orders_db and client profile
 */

(function () {
  'use strict';

  var WA_NUMBER = '919286511557';
  var UPI_ID = 'manassaxena9719-1@oksbi';
  var QR_IMAGE_URL = 'assets/shelbyqr.jpeg';

  var activeCheckoutState = {
    items: [],
    source: 'cart',
    total: 0,
    paymentMethod: 'upi_qr', // 'upi_qr' | 'cod'
    uploadedProofFile: null,
    uploadedProofDataUrl: null
  };

  // Inject Formal Checkout Modal DOM
  function ensureCheckoutDOM() {
    if (document.getElementById('shelbyCheckoutModal')) return;

    var modalHtml = `
    <div class="chk-modal-scrim" id="shelbyCheckoutModal" onclick="if(event.target===this)closeShelbyCheckout();">
      <div class="chk-modal-container" role="dialog" aria-modal="true" aria-labelledby="chkModalTitle">
        
        <!-- HEADER -->
        <div class="chk-modal-head">
          <div>
            <div class="chk-head-eyebrow">Shelby Hiver Atelier &middot; Direct Dispatch</div>
            <h2 class="chk-head-title" id="chkModalTitle">Order Settlement &amp; Dossier</h2>
          </div>
          <button type="button" class="chk-modal-close" onclick="closeShelbyCheckout()" aria-label="Close Checkout">&times;</button>
        </div>

        <!-- BODY -->
        <div class="chk-modal-body" id="chkModalBody">
          
          <!-- SECTION 1: ORDER MANIFEST -->
          <div class="chk-sec-header">
            <span class="chk-sec-title">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="8" width="16" height="13" rx="2"></rect><path d="M8 8V6a4 4 0 0 1 8 0v2"></path></svg>
              <span>01 / Order Manifest</span>
            </span>
            <span class="chk-sec-badge" id="chkItemCountBadge">0 items</span>
          </div>

          <div class="chk-items-list" id="chkItemsList"></div>

          <div class="chk-calc-card">
            <div class="chk-calc-row">
              <span>Bespoke 220 GSM Items Subtotal</span>
              <span id="chkSubtotalVal">&#x20B9; 0</span>
            </div>
            <div class="chk-calc-row">
              <span>Express Tracked Dispatch (24h)</span>
              <span style="font-weight:700;letter-spacing:0.04em;">COMPLIMENTARY</span>
            </div>
            <div class="chk-calc-row">
              <span>Permanence &amp; Pre-Shrunk Guarantee</span>
              <span>100% Combed Cotton</span>
            </div>
            <div class="chk-calc-row total">
              <span>Total Payable Amount:</span>
              <span class="chk-calc-total-val" id="chkGrandTotalVal">&#x20B9; 0</span>
            </div>
          </div>

          <!-- SECTION 2: CLIENT DELIVERY DOSSIER -->
          <div class="chk-sec-header">
            <span class="chk-sec-title">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>02 / Client Delivery Dossier</span>
            </span>
            <span class="chk-sec-badge">Delivery Coordinates</span>
          </div>

          <form id="chkDeliveryForm" onsubmit="event.preventDefault();submitShelbyOrder();">
            <div class="chk-form-grid">
              
              <div class="chk-input-wrap">
                <label class="chk-label" for="chkCustName">Full Name <span class="req">*</span></label>
                <input type="text" id="chkCustName" class="chk-input" placeholder="Full legal name" required autocomplete="off">
              </div>

              <div class="chk-input-wrap">
                <label class="chk-label" for="chkCustPhone">Mobile Number (WhatsApp) <span class="req">*</span></label>
                <input type="tel" id="chkCustPhone" class="chk-input" placeholder="10-digit mobile number" pattern="[0-9]{10}" required autocomplete="off">
              </div>

              <div class="chk-input-wrap">
                <label class="chk-label" for="chkHouseNo">House / Apartment / Suite No. <span class="req">*</span></label>
                <input type="text" id="chkHouseNo" class="chk-input" placeholder="e.g. Flat 302, Block C / Villa #8" required>
              </div>

              <div class="chk-input-wrap">
                <label class="chk-label" for="chkLandmark">Nearby Landmark <span style="font-weight:400;text-transform:none;letter-spacing:0;color:var(--text-muted);">(Optional)</span></label>
                <input type="text" id="chkLandmark" class="chk-input" placeholder="e.g. Near City Center / Opp. Bank (Optional)" autocomplete="off">
              </div>

              <div class="chk-input-wrap full-span">
                <label class="chk-label" for="chkAreaStreet">Street / Road / Locality <span class="req">*</span></label>
                <input type="text" id="chkAreaStreet" class="chk-input" placeholder="e.g. Sector 18, Indiranagar" required>
              </div>

              <div class="chk-input-wrap">
                <label class="chk-label" for="chkCity">City &amp; State <span class="req">*</span></label>
                <input type="text" id="chkCity" class="chk-input" placeholder="e.g. Bengaluru, Karnataka" required>
              </div>

              <div class="chk-input-wrap">
                <label class="chk-label" for="chkPincode">Postal Code (6 Digits) <span class="req">*</span></label>
                <input type="text" id="chkPincode" class="chk-input" placeholder="e.g. 560038" maxlength="6" pattern="[0-9]{6}" required autocomplete="postal-code">
              </div>

            </div>

            <!-- SECTION 3: PAYMENT METHOD -->
            <div class="chk-sec-header">
              <span class="chk-sec-title">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                <span>03 / Settlement Method</span>
              </span>
            </div>

            <div class="chk-pay-methods-grid">
              
              <!-- OPTION A: UPI QR (DEFAULT) -->
              <div class="chk-pay-option active" id="chkOptQR" onclick="setCheckoutPaymentMethod('upi_qr')">
                <div class="chk-pay-opt-head">
                  <div class="chk-pay-opt-title">
                    <span>Direct UPI QR Settlement</span>
                  </div>
                  <span class="chk-pay-opt-tag">Recommended</span>
                </div>
                <div class="chk-pay-opt-desc">Instant verification. GPay, PhonePe, Paytm, BHIM. Payment proof screenshot required.</div>
              </div>

              <!-- OPTION B: CASH ON DELIVERY -->
              <div class="chk-pay-option" id="chkOptCOD" onclick="setCheckoutPaymentMethod('cod')">
                <div class="chk-pay-opt-head">
                  <div class="chk-pay-opt-title">
                    <span>Cash on Delivery</span>
                  </div>
                </div>
                <div class="chk-pay-opt-desc">Doorstep settlement upon parcel receipt. Requires WhatsApp delivery authentication.</div>
              </div>

            </div>

            <!-- UPI QR PAYMENT PANEL -->
            <div class="chk-qr-display-panel" id="chkQRPanel">
              <div class="chk-qr-title">Official Atelier UPI QR Code</div>
              <div class="chk-qr-sub">Scan with any standard UPI application (Google Pay, PhonePe, Paytm, BHIM, Cred)</div>
              
              <div class="chk-qr-amount-pill">
                <span>Amount:</span>
                <strong id="chkQRAmountDisplay">&#x20B9; 0</strong>
              </div>

              <div class="chk-qr-img-box">
                <img src="${QR_IMAGE_URL}" onerror="this.src='shelbyqr.jpeg';" alt="Shelby Hiver UPI QR" class="chk-qr-img">
              </div>

              <div class="chk-upi-id-row">
                <span class="chk-upi-id-text">${UPI_ID}</span>
                <button type="button" class="chk-copy-btn" id="chkCopyUPIBtn" onclick="copyUPIId()">Copy UPI ID</button>
              </div>

              <!-- REQUIRED SCREENSHOT UPLOAD DROPZONE -->
              <div class="chk-upload-container">
                <div class="chk-upload-label">
                  <span class="chk-upload-label-title">
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                    <span>Upload Transaction Proof / Screenshot</span>
                  </span>
                  <span class="chk-upload-tag-req">Mandatory</span>
                </div>

                <div class="chk-upload-dropzone" id="chkUploadDropzone">
                  <input type="file" id="chkProofFileInput" class="chk-upload-input-hidden" accept="image/png,image/jpeg,image/jpg,image/webp" onchange="handleProofFileSelected(event)">
                  
                  <div class="chk-upload-empty-state" id="chkUploadEmptyState">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                    <span class="chk-upload-prompt-text">Click or drop payment screenshot here</span>
                    <span class="chk-upload-sub-text">PNG, JPG, WEBP &middot; Required for 24h express dispatch authorization</span>
                  </div>

                  <div class="chk-upload-preview-state" id="chkUploadPreviewState" style="display:none;">
                    <div class="chk-upload-thumb-wrap">
                      <img id="chkUploadThumb" class="chk-upload-preview-img" alt="Proof Thumbnail">
                      <div class="chk-upload-file-meta">
                        <div class="chk-upload-file-name" id="chkUploadFileName">screenshot.jpg</div>
                        <div class="chk-upload-file-size" id="chkUploadFileSize">0 KB</div>
                      </div>
                    </div>
                    <button type="button" class="chk-upload-remove-btn" onclick="removeProofFile(event)">Replace</button>
                  </div>
                </div>

                <div class="chk-upload-error-msg" id="chkUploadErrorMsg">
                  Payment screenshot is mandatory. Please attach your transaction proof.
                </div>
              </div>

            </div>

            <!-- COD PANEL -->
            <div class="chk-cod-display-panel" id="chkCODPanel" style="display:none;">
              <div class="chk-cod-item">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span><strong>Zero Advance Settlement:</strong> Hand over exact cash upon doorstep delivery by courier personnel.</span>
              </div>
              <div class="chk-cod-item">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span><strong>Concierge Authentication:</strong> Order details will be transmitted to our WhatsApp concierge to confirm address validity before packing.</span>
              </div>
            </div>

            <!-- SUBMIT BUTTON -->
            <div class="chk-action-bar">
              <button type="submit" class="chk-submit-btn" id="chkSubmitBtn">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                <span id="chkSubmitBtnText">Confirm Order &amp; Transmit to WhatsApp</span>
              </button>
            </div>

          </form>

        </div>

      </div>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);

    // Setup drag and drop events
    setupUploadDropzone();
  }

  // Setup drag and drop for upload zone
  function setupUploadDropzone() {
    var dropzone = document.getElementById('chkUploadDropzone');
    if (!dropzone) return;

    ['dragenter', 'dragover'].forEach(function (eventName) {
      dropzone.addEventListener(eventName, function (e) {
        e.preventDefault();
        e.stopPropagation();
        dropzone.classList.add('dragover');
      });
    });

    ['dragleave', 'drop'].forEach(function (eventName) {
      dropzone.addEventListener(eventName, function (e) {
        e.preventDefault();
        e.stopPropagation();
        dropzone.classList.remove('dragover');
      });
    });

    dropzone.addEventListener('drop', function (e) {
      if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        var file = e.dataTransfer.files[0];
        processProofFile(file);
      }
    });
  }

  // File selected handler
  window.handleProofFileSelected = function (e) {
    if (e.target && e.target.files && e.target.files.length > 0) {
      processProofFile(e.target.files[0]);
    }
  };

  // Process and preview proof file
  function processProofFile(file) {
    if (!file || !file.type.match(/^image\//i)) {
      showUploadError('Invalid file type. Please upload an image file (PNG, JPG, WEBP).');
      return;
    }

    if (file.size > 15 * 1024 * 1024) {
      showUploadError('File exceeds 15MB limit. Please upload a smaller image.');
      return;
    }

    activeCheckoutState.uploadedProofFile = file;

    var reader = new FileReader();
    reader.onload = function (evt) {
      activeCheckoutState.uploadedProofDataUrl = evt.target.result;

      var thumb = document.getElementById('chkUploadThumb');
      var nameEl = document.getElementById('chkUploadFileName');
      var sizeEl = document.getElementById('chkUploadFileSize');
      var emptyState = document.getElementById('chkUploadEmptyState');
      var previewState = document.getElementById('chkUploadPreviewState');
      var dropzone = document.getElementById('chkUploadDropzone');
      var errorMsg = document.getElementById('chkUploadErrorMsg');

      if (thumb) thumb.src = evt.target.result;
      if (nameEl) nameEl.textContent = file.name;
      if (sizeEl) {
        var sizeKb = Math.round(file.size / 1024);
        sizeEl.textContent = sizeKb > 1024 ? (sizeKb / 1024).toFixed(1) + ' MB' : sizeKb + ' KB';
      }

      if (emptyState) emptyState.style.display = 'none';
      if (previewState) previewState.style.display = 'flex';
      if (dropzone) dropzone.classList.remove('has-error');
      if (errorMsg) errorMsg.style.display = 'none';
    };
    reader.readAsDataURL(file);
  }

  // Remove/Reset proof file
  window.removeProofFile = function (e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    activeCheckoutState.uploadedProofFile = null;
    activeCheckoutState.uploadedProofDataUrl = null;

    var input = document.getElementById('chkProofFileInput');
    if (input) input.value = '';

    var emptyState = document.getElementById('chkUploadEmptyState');
    var previewState = document.getElementById('chkUploadPreviewState');
    if (emptyState) emptyState.style.display = 'flex';
    if (previewState) previewState.style.display = 'none';
  };

  function showUploadError(msg) {
    var dropzone = document.getElementById('chkUploadDropzone');
    var errorMsg = document.getElementById('chkUploadErrorMsg');
    if (dropzone) dropzone.classList.add('has-error');
    if (errorMsg) {
      errorMsg.textContent = msg || 'Payment screenshot is mandatory for UPI verification.';
      errorMsg.style.display = 'block';
    }
  }

  // Reset delivery fields — keep Name and Phone empty with only placeholders
  function prefillDeliveryFields() {
    try {
      var nameEl = document.getElementById('chkCustName');
      var phoneEl = document.getElementById('chkCustPhone');
      var houseEl = document.getElementById('chkHouseNo');
      var landmarkEl = document.getElementById('chkLandmark');
      var areaEl = document.getElementById('chkAreaStreet');
      var cityEl = document.getElementById('chkCity');
      var pinEl = document.getElementById('chkPincode');

      // Keep name and phone empty so only clean placeholders show
      if (nameEl) nameEl.value = '';
      if (phoneEl) phoneEl.value = '';

      var saved = JSON.parse(localStorage.getItem('sh_saved_delivery') || 'null');
      if (houseEl && saved && saved.houseNo) houseEl.value = saved.houseNo;
      if (landmarkEl && saved && saved.landmark) landmarkEl.value = saved.landmark;
      if (areaEl && saved && saved.area) areaEl.value = saved.area;
      if (cityEl && saved && saved.city) cityEl.value = saved.city;
      if (pinEl && saved && saved.pincode) pinEl.value = saved.pincode;
    } catch (e) {
      console.warn("Delivery prefill error", e);
    }
  }

  // Set Payment Method (upi_qr vs cod)
  window.setCheckoutPaymentMethod = function (method) {
    activeCheckoutState.paymentMethod = method;
    var optQR = document.getElementById('chkOptQR');
    var optCOD = document.getElementById('chkOptCOD');
    var qrPanel = document.getElementById('chkQRPanel');
    var codPanel = document.getElementById('chkCODPanel');
    var submitText = document.getElementById('chkSubmitBtnText');

    if (method === 'upi_qr') {
      if (optQR) optQR.classList.add('active');
      if (optCOD) optCOD.classList.remove('active');
      if (qrPanel) qrPanel.style.display = 'block';
      if (codPanel) codPanel.style.display = 'none';
      if (submitText) {
        submitText.textContent = 'Confirm Order & Transmit with Proof (\u20B9' + activeCheckoutState.total.toLocaleString() + ')';
      }
    } else {
      if (optQR) optQR.classList.remove('active');
      if (optCOD) optCOD.classList.add('active');
      if (qrPanel) qrPanel.style.display = 'none';
      if (codPanel) codPanel.style.display = 'block';
      if (submitText) {
        submitText.textContent = 'Place Cash on Delivery Order (\u20B9' + activeCheckoutState.total.toLocaleString() + ')';
      }
    }
  };

  // Copy UPI ID to clipboard
  window.copyUPIId = function () {
    var btn = document.getElementById('chkCopyUPIBtn');
    var onSuccess = function () {
      if (btn) {
        btn.textContent = 'Copied';
        setTimeout(function () { btn.textContent = 'Copy UPI ID'; }, 2000);
      }
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(UPI_ID).then(onSuccess).catch(function () {});
    } else {
      var temp = document.createElement('textarea');
      temp.value = UPI_ID;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      document.body.removeChild(temp);
      onSuccess();
    }
  };

  // Open Checkout Modal
  window.openShelbyCheckout = function (options) {
    ensureCheckoutDOM();
    options = options || {};

    var items = [];
    if (options.items && Array.isArray(options.items) && options.items.length > 0) {
      items = options.items;
      activeCheckoutState.source = options.source || 'buynow';
    } else {
      try {
        var cartData = JSON.parse(localStorage.getItem('sh_cart') || '[]');
        var productsDb = JSON.parse(localStorage.getItem('sh_products_db_v4') || '[]');
        if (!cartData.length) {
          if (window.toast) window.toast('Your shopping bag is empty.');
          else alert('Your shopping bag is empty.');
          return;
        }
        items = cartData.map(function (ci) {
          var p = productsDb.find(function (prod) { return prod.id === ci.id; }) || {
            id: ci.id,
            name: ci.id,
            price: 699,
            img: 'assets/model-tee.jpg'
          };
          return {
            id: ci.id,
            name: p.name,
            size: ci.size || 'M',
            qty: ci.qty || 1,
            price: Math.round(p.price || 699),
            img: p.img || (Array.isArray(p.images) ? p.images[0] : 'assets/model-tee.jpg')
          };
        });
        activeCheckoutState.source = 'cart';
      } catch (e) {
        console.error("Cart checkout error", e);
      }
    }

    if (!items.length) {
      if (window.toast) window.toast('No items selected for settlement.');
      return;
    }

    // Calculate total
    var grandTotal = 0;
    var countTotal = 0;
    items.forEach(function (it) {
      var q = it.qty || 1;
      var p = it.price || 699;
      grandTotal += (p * q);
      countTotal += q;
    });

    activeCheckoutState.items = items;
    activeCheckoutState.total = grandTotal;

    // Render items list
    var listContainer = document.getElementById('chkItemsList');
    if (listContainer) {
      listContainer.innerHTML = items.map(function (it) {
        var lineTotal = (it.price || 699) * (it.qty || 1);
        return `
          <div class="chk-item-row">
            <img src="${it.img || 'assets/model-tee.jpg'}" alt="${it.name}" class="chk-item-thumb">
            <div class="chk-item-info">
              <div class="chk-item-name">${it.name}</div>
              <div class="chk-item-meta">
                <span>Size: <strong>${it.size || 'M'}</strong></span>
                <span>&middot;</span>
                <span>Qty: <strong>${it.qty || 1}</strong></span>
              </div>
            </div>
            <div class="chk-item-price">&#x20B9; ${lineTotal.toLocaleString()}</div>
          </div>
        `;
      }).join('');
    }

    // Update totals
    var countBadge = document.getElementById('chkItemCountBadge');
    if (countBadge) countBadge.textContent = countTotal + (countTotal === 1 ? ' item' : ' items');

    var subtotalEl = document.getElementById('chkSubtotalVal');
    if (subtotalEl) subtotalEl.textContent = '₹ ' + grandTotal.toLocaleString();

    var grandEl = document.getElementById('chkGrandTotalVal');
    if (grandEl) grandEl.textContent = '₹ ' + grandTotal.toLocaleString();

    var qrAmt = document.getElementById('chkQRAmountDisplay');
    if (qrAmt) qrAmt.textContent = '₹ ' + grandTotal.toLocaleString();

    prefillDeliveryFields();
    setCheckoutPaymentMethod('upi_qr');
    removeProofFile();

    // Show modal
    var modal = document.getElementById('shelbyCheckoutModal');
    if (modal) modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  // Close Checkout Modal
  window.closeShelbyCheckout = function () {
    var modal = document.getElementById('shelbyCheckoutModal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  // Copy Image to Clipboard (Desktop WhatsApp Web convenience)
  async function copyImageToClipboard(file) {
    if (!navigator.clipboard || !window.ClipboardItem) return false;
    try {
      // Must be image/png for broad clipboard API support
      var pngBlob = file;
      if (file.type !== 'image/png') {
        pngBlob = await convertFileToPngBlob(file);
      }
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': pngBlob })
      ]);
      return true;
    } catch (e) {
      console.warn("Clipboard image write failed", e);
      return false;
    }
  }

  function convertFileToPngBlob(file) {
    return new Promise(function (resolve) {
      var img = new Image();
      img.onload = function () {
        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        canvas.toBlob(function (blob) {
          resolve(blob || file);
        }, 'image/png');
      };
      img.onerror = function () { resolve(file); };
      img.src = URL.createObjectURL(file);
    });
  }

  // Submit Order & Route to WhatsApp
  window.submitShelbyOrder = async function () {
    var name = (document.getElementById('chkCustName').value || '').trim();
    var phone = (document.getElementById('chkCustPhone').value || '').trim();
    var houseNo = (document.getElementById('chkHouseNo').value || '').trim();
    var landmark = (document.getElementById('chkLandmark').value || '').trim();
    var area = (document.getElementById('chkAreaStreet').value || '').trim();
    var city = (document.getElementById('chkCity').value || '').trim();
    var pincode = (document.getElementById('chkPincode').value || '').trim();

    // Validate delivery fields (Landmark is optional)
    if (!name || !phone || !houseNo || !area || !city || !pincode) {
      if (window.toast) window.toast('Please complete all mandatory delivery fields.');
      else alert('Please complete all mandatory delivery fields.');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      if (window.toast) window.toast('Please enter a valid 10-digit mobile number.');
      else alert('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!/^\d{6}$/.test(pincode)) {
      if (window.toast) window.toast('Please enter a valid 6-digit postal code.');
      else alert('Please enter a valid 6-digit postal code.');
      return;
    }

    var isQR = activeCheckoutState.paymentMethod === 'upi_qr';

    // VALIDATION: Uploaded Screenshot is REQUIRED for UPI QR
    if (isQR && !activeCheckoutState.uploadedProofFile) {
      showUploadError('Payment screenshot proof is mandatory. Please upload your transaction confirmation.');
      var dropzone = document.getElementById('chkUploadDropzone');
      if (dropzone) dropzone.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    // Save address for future orders
    try {
      localStorage.setItem('sh_saved_delivery', JSON.stringify({
        name: name,
        phone: phone,
        houseNo: houseNo,
        landmark: landmark,
        area: area,
        city: city,
        pincode: pincode
      }));
    } catch (e) {}

    var orderId = 'SH-' + Math.floor(100000 + Math.random() * 900000);
    var dateStr = new Date().toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });

    var itemsLines = '';
    activeCheckoutState.items.forEach(function (it) {
      var itemTotal = (it.price || 699) * (it.qty || 1);
      itemsLines += '• ' + it.name + ' (Size: ' + (it.size || 'M') + ', Qty: ' + (it.qty || 1) + ') — ₹' + itemTotal.toLocaleString() + '\n';
    });

    var payModeText = isQR ? 'UPI QR SETTLEMENT (PROOF ATTACHED)' : 'CASH ON DELIVERY (COD)';

    var paymentNote = isQR
      ? 'TRANSACTION SETTLEMENT PROOF:\n• Payment: ₹' + activeCheckoutState.total.toLocaleString() + ' via UPI QR to ' + UPI_ID + '\n• Transaction Proof File: ' + (activeCheckoutState.uploadedProofFile ? activeCheckoutState.uploadedProofFile.name : 'Attached') + '\n\nI have uploaded and attached my payment proof. Please confirm and dispatch within 24 hours.'
      : 'DOORSTEP CASH SETTLEMENT:\nPlease confirm my Cash on Delivery order of ₹' + activeCheckoutState.total.toLocaleString() + ' for express delivery to the address above.';

    var waMessage =
      'SHELBY HIVER ATELIER — ORDER DOSSIER\n' +
      '──────────────────────────────\n' +
      'Order Reference: #' + orderId + '\n' +
      'Date: ' + dateStr + '\n' +
      'Settlement Method: ' + payModeText + '\n' +
      'Payable Amount: ₹' + activeCheckoutState.total.toLocaleString() + '\n' +
      '──────────────────────────────\n' +
      'ORDER MANIFEST:\n' +
      itemsLines +
      '\n' +
      'CLIENT DELIVERY DOSSIER:\n' +
      '• Full Name: ' + name + '\n' +
      '• Mobile / WhatsApp: +91 ' + phone + '\n' +
      '• House / Apartment / Suite: ' + houseNo + '\n' +
      (landmark ? ('• Nearby Landmark: ' + landmark + '\n') : '') +
      '• Street / Area: ' + area + '\n' +
      '• City & State: ' + city + '\n' +
      '• Postal Code: ' + pincode + '\n' +
      '──────────────────────────────\n' +
      paymentNote;

    // Record order in local storage
    try {
      var orders = JSON.parse(localStorage.getItem('sh_orders_db') || '[]');
      var user = JSON.parse(localStorage.getItem('sh_current_user_v2') || 'null');
      var newOrderRecord = {
        id: orderId,
        customerName: name,
        customerPhone: '+91 ' + phone,
        customerEmail: (user && user.email) || '',
        items: activeCheckoutState.items,
        total: activeCheckoutState.total,
        paymentMethod: payModeText,
        deliveryAddress: {
          houseNo: houseNo,
          landmark: landmark,
          area: area,
          city: city,
          pincode: pincode
        },
        proofFileName: activeCheckoutState.uploadedProofFile ? activeCheckoutState.uploadedProofFile.name : null,
        status: isQR ? 'Pending Proof Verification' : 'Pending COD Dispatch',
        createdAt: new Date().toISOString()
      };
      orders.unshift(newOrderRecord);
      localStorage.setItem('sh_orders_db', JSON.stringify(orders));
      window.dispatchEvent(new Event('storage'));
    } catch (err) {
      console.error("Order recording error", err);
    }

    // Clear cart if source was cart
    if (activeCheckoutState.source === 'cart') {
      try {
        localStorage.removeItem('sh_cart');
      } catch (e) {}
    }

    // Remove checked-out item(s) from wishlist ('sh-wishlist') and update count
    try {
      var currentWishlist = JSON.parse(localStorage.getItem('sh-wishlist') || '[]');
      if (Array.isArray(currentWishlist) && currentWishlist.length > 0) {
        var orderedIds = (activeCheckoutState.items || []).map(function (it) { return it.id; });
        var updatedWishlist = currentWishlist.filter(function (id) {
          return orderedIds.indexOf(id) === -1;
        });
        if (updatedWishlist.length !== currentWishlist.length) {
          localStorage.setItem('sh-wishlist', JSON.stringify(updatedWishlist));
        }
      }
    } catch (wErr) {
      console.warn("Wishlist update error on checkout", wErr);
    }

    // Notify all open components and views of cart & wishlist updates
    try {
      window.dispatchEvent(new Event('storage'));
      if (typeof window.refreshShelbyWishlist === 'function') {
        window.refreshShelbyWishlist();
      }
      if (typeof window.updateWishlistBadges === 'function') {
        window.updateWishlistBadges();
      }
      if (typeof window.catUpdateBadges === 'function') {
        window.catUpdateBadges();
      }
    } catch (dispErr) {}

    var proofFile = activeCheckoutState.uploadedProofFile;
    var proofDataUrl = activeCheckoutState.uploadedProofDataUrl;

    // DIRECT TRANSMISSION TO SHELBY HIVER OFFICIAL WHATSAPP (+91 9286511557)
    var waUrl = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(waMessage);

    // Copy screenshot image to system clipboard (for instant Ctrl+V into WhatsApp chat)
    if (isQR && proofFile) {
      try { copyImageToClipboard(proofFile); } catch (e) {}
    }

    // Directly open Shelby Hiver WhatsApp chat without intermediate share dialogs
    var isMobile = /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = waUrl;
    } else {
      var directTab = window.open(waUrl, '_blank');
      if (!directTab || directTab.closed || typeof directTab.closed === 'undefined') {
        window.location.href = waUrl;
      }
    }

    // Render formal confirmation screen
    renderConfirmationScreen(orderId, isQR, proofFile, proofDataUrl, waMessage);
  };

  function renderConfirmationScreen(orderId, isQR, proofFile, proofDataUrl, waMessage) {
    var modalBody = document.getElementById('chkModalBody');
    if (!modalBody) return;

    var fileName = proofFile ? proofFile.name : 'screenshot.jpg';

    modalBody.innerHTML = `
      <div class="chk-success-panel">
        <div class="chk-success-icon-wrap">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>

        <h3 class="chk-success-title">Order Transmitted to Atelier Concierge</h3>
        <p class="chk-success-desc">
          Order Reference: <strong>#${orderId}</strong> &middot; Settlement: <strong>₹ ${activeCheckoutState.total.toLocaleString()}</strong>
        </p>
        
        ${isQR ? `
          <div class="chk-formal-notice-box">
            <div class="chk-formal-notice-head">Payment Proof Verification</div>
            <p class="chk-formal-notice-body">
              Your order manifest has been prepared for WhatsApp concierge <strong>(+91 92865 11557)</strong>. 
              ${proofDataUrl ? `Your screenshot <strong>${fileName}</strong> has also been copied to your clipboard &mdash; press <strong>Ctrl + V</strong> (Paste) in WhatsApp to send it.` : `Please ensure your payment screenshot is sent in the WhatsApp chat.`}
            </p>
            ${proofDataUrl ? `
              <div style="margin-top:10px;display:flex;align-items:center;gap:10px;">
                <img src="${proofDataUrl}" alt="Proof" style="width:44px;height:44px;object-fit:cover;border-radius:4px;border:1px solid var(--border-color,#ccc);">
                <a href="${proofDataUrl}" download="${fileName}" style="font-family:var(--f-display);font-size:11px;font-weight:700;color:var(--text-primary);text-decoration:underline;">Download Proof Copy &darr;</a>
              </div>
            ` : ''}
          </div>
        ` : `
          <div class="chk-formal-notice-box">
            <div class="chk-formal-notice-head">Doorstep Cash Settlement Authorized</div>
            <p class="chk-formal-notice-body">
              Your delivery dossier is logged for express dispatch. Please confirm the pre-filled message with our concierge in WhatsApp.
            </p>
          </div>
        `}

        <div class="chk-success-action-row">
          <a href="https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMessage)}" target="_blank" class="chk-btn-secondary" style="background:#111111;color:#ffffff;border-color:#111111;">
            Re-Open WhatsApp Chat &rarr;
          </a>
          <a href="profile.html#orders" class="chk-btn-secondary" onclick="closeShelbyCheckout()">View Client Account</a>
          <button type="button" class="chk-btn-secondary" onclick="closeShelbyCheckout();window.location.href='catalogue.html';">Continue Browsing</button>
        </div>
      </div>
    `;
  }

  // Hook global checkoutViaWhatsApp
  window.checkoutViaWhatsApp = function () {
    window.openShelbyCheckout({ source: 'cart' });
  };

  // DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureCheckoutDOM);
  } else {
    ensureCheckoutDOM();
  }

})();
