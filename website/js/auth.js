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
              <span>👤</span> <span>My Account &amp; Orders</span>
            </a>
            <button type="button" class="udm-item" onclick="if(typeof showCart==='function')showCart(); else window.location.href='index.html#storefront';">
              <span>🛍️</span> <span>Shopping Bag</span>
            </button>
            <a href="https://wa.me/${WA_NUMBER}?text=Hello!%20I%20am%20logged%20in%20as%20${encodeURIComponent(user.name)}." target="_blank" class="udm-item">
              <span>💬</span> <span>Customer Support</span>
            </a>
            <button type="button" class="udm-item logout" onclick="logoutUser(false)">
              <span>🚪</span> <span>Sign Out</span>
            </button>
          </div>
        `;
      }

      if (mobProfileCard) {
        mobProfileCard.innerHTML = `
          <a href="${profileUrl}" style="display:flex;align-items:center;gap:12px;padding:12px;background:#f5f5f6;border-radius:8px;text-decoration:none;cursor:pointer;">
            <div class="user-avatar-circle" style="width:34px;height:34px;">${initials}</div>
            <div style="flex:1;">
              <div style="font-family:var(--f-display);font-size:13px;font-weight:700;color:var(--text-primary);">${user.name}</div>
              <div style="font-size:11px;color:var(--text-muted);">View Account &amp; Orders →</div>
            </div>
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
              <div class="udm-welcome">Welcome</div>
              <div style="font-size:12px;color:var(--text-muted);margin-top:2px;">To access account and manage orders</div>
            </div>
            <a href="${loginUrl}" class="btn-primary-action" style="padding:10px;text-align:center;justify-content:center;font-size:12px;margin-bottom:8px;background:var(--auth-coral);border-radius:4px;color:#fff;text-decoration:none;">
              LOGIN / SIGN UP
            </a>
            <a href="https://wa.me/${WA_NUMBER}" target="_blank" class="udm-item">
              <span>💬</span> <span>Customer Support</span>
            </a>
          </div>
        `;
      }

      if (mobProfileCard) {
        mobProfileCard.innerHTML = `
          <a href="${loginUrl}" class="btn-primary-action" style="display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:11px;font-size:12px;text-decoration:none;border-radius:6px;background:var(--auth-coral);color:#fff;">
            👤 Login / Sign Up
          </a>
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
