/**
 * SHELBY HIVER — CUSTOMER AUTHENTICATION & SESSION ENGINE
 * Clean, modern e-commerce auth (Myntra-style)
 * Normal customer accounts · Zero VIP jargon · No green color
 */

const WA_NUMBER = "919286511557";
const AUTH_USERS_KEY = "sh_auth_users_v2";
const CURRENT_USER_KEY = "sh_current_user_v2";

// Default Customer Account for 1-Click Demo
const DEFAULT_SEED_USERS = [
  {
    id: "usr-manas-001",
    name: "Manas",
    email: "manas@shelbyhiver.com",
    phone: "9286511557",
    password: "password123",
    joinedAt: "2026-09-01T00:00:00.000Z"
  }
];

function getStoredUsers() {
  try {
    const raw = localStorage.getItem(AUTH_USERS_KEY);
    let list = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(list)) list = [];
    DEFAULT_SEED_USERS.forEach(seed => {
      const idx = list.findIndex(u => u && u.email && u.email.toLowerCase() === seed.email.toLowerCase());
      if (idx === -1) {
        list.unshift({ ...seed });
      }
    });
    localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(list));
    return list;
  } catch (e) {
    return [...DEFAULT_SEED_USERS];
  }
}

function getCurrentUser() {
  try {
    const raw = localStorage.getItem(CURRENT_USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function setCurrentUser(user) {
  try {
    if (user) {
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(CURRENT_USER_KEY);
    }
  } catch (e) {
    console.error("Error setting current user:", e);
  }
  updateNavbarAuth();
}

function registerUser({ name, email, phone, password }) {
  const cleanName = (name || "").trim();
  const cleanEmail = (email || "").trim().toLowerCase();
  const rawPhone = (phone || "").trim();
  const cleanPhone = rawPhone.replace(/\D/g, "");
  const pwd = (password || "");

  if (!cleanName) {
    return { success: false, error: "Please enter your full name." };
  }
  if (!cleanEmail || !cleanEmail.includes("@")) {
    return { success: false, error: "Please enter a valid email address." };
  }
  if (cleanPhone.length < 10) {
    return { success: false, error: "Please enter a valid 10-digit mobile number." };
  }
  if (pwd.length < 6) {
    return { success: false, error: "Password must be at least 6 characters." };
  }

  const users = getStoredUsers();
  const existingIdx = users.findIndex(u => 
    (u.email && u.email.toLowerCase() === cleanEmail) ||
    (u.phone && u.phone.replace(/\D/g, "").slice(-10) === cleanPhone.slice(-10))
  );

  let activeUser;

  if (existingIdx !== -1) {
    // Existing customer: seamlessly update details with new password & name so the user is never stuck
    const existing = users[existingIdx];
    existing.name = cleanName || existing.name;
    existing.email = cleanEmail;
    existing.phone = rawPhone || existing.phone;
    existing.password = pwd;
    existing.updatedAt = new Date().toISOString();
    activeUser = existing;
  } else {
    // New customer account
    activeUser = {
      id: "usr-" + Date.now(),
      name: cleanName,
      email: cleanEmail,
      phone: rawPhone,
      password: pwd,
      joinedAt: new Date().toISOString()
    };
    users.unshift(activeUser);
  }

  localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users));
  setCurrentUser(activeUser);
  return { success: true, user: activeUser };
}

function loginUser(identifier, password) {
  const idInput = (identifier || "").trim().toLowerCase();
  const cleanPhone = idInput.replace(/\D/g, "").slice(-10);
  const pwd = (password || "");
  const users = getStoredUsers();

  const user = users.find(u => {
    const matchEmail = u.email && u.email.toLowerCase() === idInput;
    const userPhone = (u.phone || "").replace(/\D/g, "").slice(-10);
    const matchPhone = cleanPhone.length >= 10 && userPhone.length >= 10 && userPhone === cleanPhone;
    return matchEmail || matchPhone;
  });

  if (!user) {
    return { 
      success: false, 
      error: `No account found with "${idInput}". Please create an account.`,
      notFound: true
    };
  }

  if (user.password !== pwd) {
    return { 
      success: false, 
      error: `Incorrect password. Please try again.` 
    };
  }

  setCurrentUser(user);
  return { success: true, user };
}

function logoutUser(redirect = false) {
  setCurrentUser(null);
  if (redirect) {
    window.location.href = "login.html";
  } else {
    updateNavbarAuth();
    if (typeof toast === "function") {
      toast("You have signed out of your account.");
    }
  }
}

function toggleUserDropdown(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  const menu = document.getElementById("userDropdownMenu");
  if (menu) menu.classList.toggle("open");
}

// Close dropdown on outside click
document.addEventListener("click", () => {
  const menu = document.getElementById("userDropdownMenu");
  if (menu) menu.classList.remove("open");
});

function updateNavbarAuth() {
  try {
    const user = getCurrentUser();
    const widget = document.getElementById("userAuthWidget");
    const mobProfileCard = document.getElementById("mobUserProfileCard");

    const isRoot = !window.location.pathname.includes("/admin");
    const profileUrl = isRoot ? "profile.html" : "../profile.html";
    const loginUrl = isRoot ? "login.html" : "../login.html";

    if (user) {
      document.body.classList.add("authenticated");
      const initials = (user.name || "U")
        .split(" ")
        .filter(Boolean)
        .map(n => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
      const firstName = (user.name || "Customer").split(" ")[0];

      if (widget) {
        widget.innerHTML = `
          <div class="user-profile-pill" onclick="toggleUserDropdown(event)" title="Account (${user.email})">
            <div class="user-avatar-circle">${initials}</div>
            <span class="user-pill-name">${firstName}</span>
          </div>
          <div class="user-dropdown-menu" id="userDropdownMenu" onclick="event.stopPropagation()">
            <div class="udm-header">
              <div class="udm-welcome">Welcome</div>
              <div class="udm-name">${user.name}</div>
              <div class="udm-email">${user.email}</div>
            </div>
            <a href="${profileUrl}" class="udm-item">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              <span>My Account &amp; Orders</span>
            </a>
            <button type="button" class="udm-item" onclick="if(typeof showCart==='function')showCart(); else window.location.href='index.html#storefront';">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
              <span>Shopping Bag</span>
            </button>
            <a href="https://wa.me/${WA_NUMBER}?text=Hello!%20I%20am%20logged%20in%20as%20${encodeURIComponent(user.name)}." target="_blank" class="udm-item">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              <span>Client Concierge</span>
            </a>
            <button type="button" class="udm-item logout" onclick="logoutUser(false)">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
              <span>Sign Out</span>
            </button>
          </div>
        `;
      }

      if (mobProfileCard) {
        mobProfileCard.innerHTML = `
          <a href="${profileUrl}" style="display:flex;align-items:center;gap:12px;padding:12px 14px;background:var(--bg-secondary);border:1px solid var(--border-color);border-radius:8px;text-decoration:none;cursor:pointer;">
            <div class="user-avatar-circle" style="width:36px;height:36px;font-size:13px;">${initials}</div>
            <div style="flex:1;">
              <div style="font-family:var(--f-display);font-size:13px;font-weight:700;color:var(--text-primary);">${user.name}</div>
              <div style="font-size:11px;color:var(--text-muted);margin-top:2px;">View Account &amp; Orders →</div>
            </div>
            <span style="color:var(--text-muted);font-size:16px;">›</span>
          </a>
        `;
      }

    } else {
      document.body.classList.remove("authenticated");
      if (widget) {
        widget.innerHTML = `
          <div class="user-signin-btn" onclick="toggleUserDropdown(event)" title="Account">
            <div class="h-act-icon">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <span class="h-act-label">Profile</span>
          </div>
          <div class="user-dropdown-menu" id="userDropdownMenu" onclick="event.stopPropagation()">
            <div class="udm-header">
              <div class="udm-welcome">Client Welcome</div>
              <div style="font-size:12px;color:var(--text-muted);margin-top:2px;">Access orders, wishlist &amp; drop alerts</div>
            </div>
            <a href="${loginUrl}" class="btn-primary-action" style="padding:10px;text-align:center;justify-content:center;font-size:12px;margin-bottom:8px;background:var(--btn-primary-bg, #111);border-radius:6px;color:#fff;text-decoration:none;font-family:var(--f-display);letter-spacing:0.06em;font-weight:700;">
              SIGN IN / REGISTER
            </a>
            <a href="https://wa.me/${WA_NUMBER}" target="_blank" class="udm-item">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              <span>Client Concierge</span>
            </a>
          </div>
        `;
      }

      if (mobProfileCard) {
        mobProfileCard.innerHTML = `
          <div style="background:var(--bg-secondary);border:1px solid var(--border-color);border-radius:8px;padding:14px;text-align:center;">
            <div style="font-family:var(--f-display);font-size:13px;font-weight:700;color:var(--text-primary);margin-bottom:4px;">Welcome to Shelby Hiver</div>
            <div style="font-size:11.5px;color:var(--text-muted);margin-bottom:12px;">Sign in to access your orders &amp; bag</div>
            <a href="${loginUrl}" class="btn-primary-action" style="display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:10px;font-size:12px;text-decoration:none;border-radius:6px;background:var(--auth-coral);color:#fff;font-weight:700;">
              LOGIN / REGISTER
            </a>
          </div>
        `;
      }
    }
  } catch (err) {
    console.error("Error in updateNavbarAuth:", err);
  }
}

// Backward compatibility aliases
window.updateAuthUI = updateNavbarAuth;
window.openUserProfile = function() {
  const isRoot = !window.location.pathname.includes("/admin");
  window.location.href = isRoot ? "profile.html" : "../profile.html";
};
window.openAuthGate = function(tab = 'login') {
  const isRoot = !window.location.pathname.includes("/admin");
  const target = tab === 'register' ? 'register.html' : 'login.html';
  window.location.href = isRoot ? target : `../${target}`;
};
window.handleLogout = function() {
  logoutUser(false);
};

// Auto-run on load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", updateNavbarAuth);
} else {
  updateNavbarAuth();
}
