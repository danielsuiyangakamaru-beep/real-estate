const seedProperties = [
  { id: "garden-house", title: "The Garden House", location: "Cobble Hill, Brooklyn", type: "House", intent: "sale", price: 1850000, beds: 4, baths: 3, sqft: 2480, image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1100&q=85", images: ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85", "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85"], description: "A rare city sanctuary with a beautifully landscaped garden, generous proportions, and sun-filled rooms that make every day feel a little slower.", amenities: ["Private garden", "Chef's kitchen", "Wide-plank oak floors", "Home office"] },
  { id: "park-avenue", title: "Park Avenue Apartment", location: "Upper East Side, Manhattan", type: "Apartment", intent: "sale", price: 1245000, beds: 2, baths: 2, sqft: 1460, image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85", images: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85", "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85"], description: "Classic prewar character meets modern ease in this bright, beautifully proportioned apartment just moments from the park.", amenities: ["Doorman building", "In-unit laundry", "Park views", "Elevator"] },
  { id: "loft-light", title: "The Lightwell Loft", location: "Williamsburg, Brooklyn", type: "Apartment", intent: "rent", price: 5800, beds: 2, baths: 2, sqft: 1280, image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=85", images: ["https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85", "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85"], description: "Industrial details, gracious light, and room to breathe. This loft brings a relaxed, considered feel to the heart of Williamsburg.", amenities: ["Oversized windows", "Shared roof deck", "Pet friendly", "Bike storage"] },
  { id: "brownstone", title: "A Carroll Gardens Classic", location: "Carroll Gardens, Brooklyn", type: "House", intent: "sale", price: 2395000, beds: 5, baths: 3, sqft: 3120, image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1100&q=85", images: ["https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85"], description: "A thoughtfully restored brownstone filled with original details, a private patio, and lovely light on every floor.", amenities: ["Private patio", "Original moldings", "Finished basement", "Quiet block"] },
  { id: "studio-nomad", title: "The NoMad Studio", location: "NoMad, Manhattan", type: "Apartment", intent: "rent", price: 3900, beds: 1, baths: 1, sqft: 740, image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1100&q=85", images: ["https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85", "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85"], description: "A calm, design-forward home base in one of the city's most connected neighborhoods, with clever storage and a welcoming feel.", amenities: ["Concierge", "Fitness room", "Central air", "Laundry room"] },
  { id: "hudson-land", title: "Hudson Valley Acreage", location: "Accord, New York", type: "Land", intent: "sale", price: 425000, beds: 0, baths: 0, sqft: 5, image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1100&q=85", images: ["https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85", "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=85"], description: "Five peaceful acres with mountain views, a gentle stream, and room to bring your upstate plans to life.", amenities: ["Mountain views", "Private stream", "Road access", "Survey available"] },
  { id: "market-street", title: "Market Street Studio", location: "Greenpoint, Brooklyn", type: "Commercial", intent: "rent", price: 7200, beds: 0, baths: 1, sqft: 1850, image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85", images: ["https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=85", "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85"], description: "A flexible, light-filled ground-floor space with excellent street presence, ready to become your next creative studio or neighborhood shop.", amenities: ["Street frontage", "Open plan", "Private restroom", "Transit nearby"] },
  { id: "sunset-flat", title: "Sunset Park Flat", location: "Sunset Park, Brooklyn", type: "Apartment", intent: "sale", price: 795000, beds: 2, baths: 1, sqft: 980, image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1100&q=85", images: ["https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85", "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85"], description: "A bright, easygoing apartment on a leafy block, with smart updates and the kind of neighborhood feel people come back for.", amenities: ["Updated kitchen", "Low monthly fees", "Storage room", "Near the park"] },
  { id: "ridgewood-home", title: "The Ridgewood Residence", location: "Ridgewood, Queens", type: "House", intent: "rent", price: 6200, beds: 3, baths: 2, sqft: 1780, image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85", images: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85", "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85"], description: "A roomy, beautifully updated home with a private outdoor space and a welcoming layout made for sharing.", amenities: ["Private outdoor space", "Dishwasher", "Basement storage", "Pet friendly"] }
];

const STORAGE_KEY = "haven-co-properties-v1";
const FAVORITES_KEY = "haven-co-favorites-v1";
const app = document.getElementById("app");
const modal = document.getElementById("modal-backdrop");
const modalContent = document.getElementById("modal-content");
const toast = document.getElementById("toast");
let activeIntent = "all";
let toastTimer;
let detailReturnHash = "#home";

function getProperties() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : seedProperties;
  } catch (error) {
    console.error("Could not load saved properties:", error);
    return seedProperties;
  }
}

function saveProperties(properties) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(properties));
}

function money(amount, intent) {
  const formatted = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(amount);
  return intent === "rent" ? `${formatted}<small> / month</small>` : formatted;
}

function getFavorites() {
  try { return JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]"); }
  catch (error) { console.error("Could not load saved favorites:", error); return []; }
}

function renderProperties(filters = {}) {
  const grid = document.getElementById("property-grid");
  if (!grid) return;
  const query = (filters.location || "").trim().toLowerCase();
  const type = filters.type || "";
  const min = filters.min ? Number(filters.min) : 0;
  const max = filters.max ? Number(filters.max) : Infinity;
  const properties = getProperties().filter((property) => {
    const intentMatch = activeIntent === "all" || property.intent === activeIntent;
    return intentMatch && (!query || `${property.location} ${property.title}`.toLowerCase().includes(query))
      && (!type || property.type === type) && property.price >= min && property.price <= max;
  });
  const favorites = getFavorites();
  grid.innerHTML = properties.map((property, index) => `
    <article class="property-card" data-property-id="${escapeHtml(property.id)}" tabindex="0" style="animation-delay:${index * 45}ms">
      <div class="card-image-wrap">
        <img class="card-image" src="${escapeHtml(property.image)}" alt="${escapeHtml(property.title)}" loading="lazy">
        <span class="card-badge">${property.intent === "rent" ? "For rent" : "For sale"}</span>
        <button class="favorite-button ${favorites.includes(property.id) ? "is-saved" : ""}" type="button" data-favorite="${escapeHtml(property.id)}" aria-label="${favorites.includes(property.id) ? "Remove from" : "Add to"} favorites">${favorites.includes(property.id) ? "♥" : "♡"}</button>
      </div>
      <div class="card-info">
        <div class="card-topline"><span class="card-price">${money(property.price, property.intent)}</span><span class="card-type">${escapeHtml(property.type)}</span></div>
        <h3 class="card-title">${escapeHtml(property.title)}</h3>
        <p class="card-location">${escapeHtml(property.location)}</p>
        <div class="card-features">${property.beds ? `<span>${property.beds} bed${property.beds === 1 ? "" : "s"}</span>` : ""}${property.baths ? `<span>${property.baths} bath${property.baths === 1 ? "" : "s"}</span>` : ""}${property.sqft ? `<span>${property.sqft.toLocaleString()} ${property.type === "Land" ? "acres" : "sq ft"}</span>` : ""}</div>
      </div>
    </article>`).join("");
  document.getElementById("empty-state").hidden = properties.length !== 0;
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2800);
}

function openModal(content) {
  modalContent.innerHTML = content;
  modal.hidden = false;
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-close").focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.classList.remove("modal-open");
}

function dismissModal() {
  const returnToListing = location.hash.startsWith("#property/");
  closeModal();
  if (returnToListing) location.hash = detailReturnHash;
}

function propertyDetail(id) {
  const property = getProperties().find((item) => item.id === id);
  if (!property) {
    showToast("That property is no longer available.");
    location.hash = "#buy";
    return;
  }
  if (modal.hidden && !location.hash.startsWith("#property/")) detailReturnHash = location.hash || "#home";
  const gallery = property.images && property.images.length ? property.images : [property.image];
  openModal(`
    <div class="detail-gallery">
      <img class="detail-main-image" src="${escapeHtml(gallery[0])}" alt="${escapeHtml(property.title)}">
      ${gallery.slice(1, 3).map((src, index) => `<img class="detail-thumb" src="${escapeHtml(src)}" alt="${escapeHtml(property.title)} photo ${index + 2}" data-gallery="${escapeHtml(src)}">`).join("")}
    </div>
    <div class="detail-heading"><div><p class="eyebrow">${property.intent === "rent" ? "For rent" : "For sale"} · ${escapeHtml(property.type)}</p><h2 id="modal-title">${escapeHtml(property.title)}</h2><p class="card-location">${escapeHtml(property.location)}</p></div><div class="detail-price">${money(property.price, property.intent)}</div></div>
    <div class="detail-facts">${property.beds ? `<span>${property.beds} bedroom${property.beds === 1 ? "" : "s"}</span>` : ""}${property.baths ? `<span>${property.baths} bathroom${property.baths === 1 ? "" : "s"}</span>` : ""}${property.sqft ? `<span>${property.sqft.toLocaleString()} ${property.type === "Land" ? "acres" : "sq ft"}</span>` : ""}</div>
    <p class="detail-description">${escapeHtml(property.description || "A thoughtfully considered property, ready for its next chapter.")}</p>
    <div class="detail-bottom"><div><h3>A few lovely details</h3><div class="detail-amenities">${(property.amenities || []).map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div></div>
      <form class="modal-form" id="inquiry-form"><h3>Interested? Say hello.</h3><label>Your name<input name="name" required placeholder="Your name"></label><label>Email address<input name="email" type="email" required placeholder="you@email.com"></label><button class="button button-dark" type="submit">Request a viewing →</button></form>
    </div>`);
  location.hash = `#property/${encodeURIComponent(id)}`;
}

function renderAuth(mode = "login") {
  const register = mode === "register";
  openModal(`<div class="auth-modal"><a class="brand" href="#home"><span class="brand-mark">H</span><span>haven<span class="brand-amp">&</span>co.</span></a><p class="eyebrow">Your home journey, all in one place</p><h2 id="modal-title">${register ? "Create your account." : "Welcome back."}</h2><p>${register ? "Save favorites and keep your next move close." : "Sign in to pick up where you left off."}</p>
    <form class="modal-form" id="auth-form">${register ? '<label>Your name<input name="name" required placeholder="Your name"></label>' : ""}<label>Email address<input name="email" type="email" required placeholder="you@email.com"></label><label>Password<input name="password" type="password" required minlength="6" placeholder="At least 6 characters"></label><button class="button button-dark" type="submit">${register ? "Create account" : "Log in"} →</button></form>
    <button type="button" class="auth-switch" data-auth-switch="${register ? "login" : "register"}">${register ? "Already have an account? Log in" : "New to Haven & Co.? Create an account"}</button></div>`);
}

function renderAdmin() {
  const properties = getProperties();
  openModal(`<div class="admin-header"><div><p class="eyebrow">Haven & Co. workspace</p><h2 id="modal-title">Property manager</h2></div><span class="card-type">${properties.length} listings</span></div>
    <div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>Property</th><th>Location</th><th>Type</th><th>Price</th><th>Listing</th><th></th></tr></thead><tbody>
      ${properties.map((property) => `<tr><td>${escapeHtml(property.title)}</td><td>${escapeHtml(property.location)}</td><td>${escapeHtml(property.type)}</td><td>${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(property.price)}</td><td>${property.intent === "rent" ? "Rent" : "Sale"}</td><td><button type="button" data-delete-property="${escapeHtml(property.id)}">Remove</button></td></tr>`).join("")}
      </tbody></table></div>
    <form class="admin-add-form" id="admin-add-form">
      <label>Property name<input name="title" required placeholder="Property name"></label>
      <label>Location<input name="location" required placeholder="Neighborhood, City"></label>
      <label>Type<select name="type"><option>House</option><option>Apartment</option><option>Commercial</option><option>Land</option></select></label>
      <label>Price (USD)<input name="price" type="number" min="1" required placeholder="500000"></label>
      <label>Listing<select name="intent"><option value="sale">For sale</option><option value="rent">For rent</option></select></label>
      <label>Image URL<input name="image" type="url" required placeholder="https://..."></label>
      <button class="button button-dark" type="submit">Add property +</button>
    </form>`);
  location.hash = "#admin";
}

function updateRoute() {
  const route = location.hash.slice(1) || "home";
  if (route.startsWith("property/")) {
    const id = decodeURIComponent(route.slice("property/".length));
    const property = getProperties().find((item) => item.id === id);
    if (property && modal.hidden) propertyDetail(id);
    else if (!property) { closeModal(); location.hash = "#buy"; }
    return;
  }
  if (route === "login" || route === "register") { renderAuth(route); return; }
  if (route === "admin") { renderAdmin(); return; }
  if (!modal.hidden) closeModal();
  if (route === "buy" || route === "rent") {
    activeIntent = route === "rent" ? "rent" : "sale";
    document.querySelectorAll(".listing-tab").forEach((tab) => tab.classList.toggle("is-active", tab.dataset.filterIntent === activeIntent));
    renderProperties(readFilters());
    document.getElementById("listings").scrollIntoView({ behavior: "smooth" });
    return;
  }
  if (["home", "about", "services", "contact"].includes(route)) {
    activeIntent = "all";
    document.querySelectorAll(".listing-tab").forEach((tab) => tab.classList.toggle("is-active", tab.dataset.filterIntent === "all"));
    renderProperties();
    const target = document.getElementById(route);
    if (route !== "home" && target) target.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

document.getElementById("hero-search").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  activeIntent = data.get("intent") === "rent" ? "rent" : "sale";
  document.querySelectorAll(".listing-tab").forEach((tab) => tab.classList.toggle("is-active", tab.dataset.filterIntent === activeIntent));
  document.getElementById("filters").elements.location.value = data.get("location") || "";
  document.getElementById("filters").elements.type.value = data.get("type") || "";
  renderProperties({ location: data.get("location"), type: data.get("type") });
  location.hash = data.get("intent") === "rent" ? "#rent" : "#buy";
});

document.querySelectorAll(".listing-tab").forEach((button) => button.addEventListener("click", () => {
  activeIntent = button.dataset.filterIntent;
  document.querySelectorAll(".listing-tab").forEach((tab) => tab.classList.toggle("is-active", tab === button));
  renderProperties();
}));

document.getElementById("filters").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  renderProperties({ location: data.get("location"), type: data.get("type"), min: data.get("min"), max: data.get("max") });
});
document.getElementById("filters").addEventListener("reset", () => setTimeout(() => renderProperties(), 0));
document.getElementById("filter-toggle").addEventListener("click", (event) => {
  const panel = document.getElementById("filters");
  const open = panel.classList.toggle("is-open");
  event.currentTarget.setAttribute("aria-expanded", String(open));
});

document.getElementById("property-grid").addEventListener("click", (event) => {
  const favorite = event.target.closest("[data-favorite]");
  if (favorite) {
    const id = favorite.dataset.favorite;
    const favorites = getFavorites();
    const updated = favorites.includes(id) ? favorites.filter((item) => item !== id) : [...favorites, id];
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
    renderProperties(readFilters());
    showToast(updated.includes(id) ? "Added to your favorites." : "Removed from your favorites.");
    return;
  }
  const card = event.target.closest("[data-property-id]");
  if (card) propertyDetail(card.dataset.propertyId);
});
document.getElementById("property-grid").addEventListener("keydown", (event) => {
  if ((event.key === "Enter" || event.key === " ") && event.target.matches(".property-card")) {
    event.preventDefault();
    propertyDetail(event.target.dataset.propertyId);
  }
});

function readFilters() {
  const data = new FormData(document.getElementById("filters"));
  return { location: data.get("location"), type: data.get("type"), min: data.get("min"), max: data.get("max") };
}

document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.querySelector(".form-feedback").textContent = "Thanks for reaching out. Messages aren’t sent in this demo.";
  event.currentTarget.reset();
});

document.addEventListener("submit", (event) => {
  if (event.target.id === "inquiry-form") {
    event.preventDefault();
    event.target.innerHTML = '<p class="form-feedback">Thanks for your interest. Viewing requests aren’t sent in this demo.</p>';
  }
  if (event.target.id === "auth-form") {
    event.preventDefault();
    const data = new FormData(event.target);
    showToast(`Welcome${data.get("name") ? `, ${data.get("name")}` : " back"}! Account services aren't connected in this demo.`);
    closeModal();
    if (location.hash === "#login" || location.hash === "#register") location.hash = "#home";
  }
  if (event.target.id === "admin-add-form") {
    event.preventDefault();
    const data = new FormData(event.target);
    const properties = getProperties();
    properties.unshift({ id: `home-${Date.now()}`, title: data.get("title"), location: data.get("location"), type: data.get("type"), intent: data.get("intent"), price: Number(data.get("price")), beds: 0, baths: 0, sqft: 0, image: data.get("image"), images: [data.get("image")], description: "A new listing added to the Haven & Co. property collection.", amenities: ["Contact us for details"] });
    saveProperties(properties);
    showToast("Property added to your listings.");
    renderAdmin();
    renderProperties(readFilters());
  }
});

document.addEventListener("click", (event) => {
  const switchButton = event.target.closest("[data-auth-switch]");
  if (switchButton) renderAuth(switchButton.dataset.authSwitch);
  const deleteButton = event.target.closest("[data-delete-property]");
  if (deleteButton) {
    const properties = getProperties().filter((property) => property.id !== deleteButton.dataset.deleteProperty);
    saveProperties(properties);
    showToast("Property removed.");
    renderAdmin();
    renderProperties(readFilters());
  }
  const galleryImage = event.target.closest("[data-gallery]");
  if (galleryImage) {
    const main = modalContent.querySelector(".detail-main-image");
    const previous = main.src;
    main.src = galleryImage.src;
    galleryImage.src = previous;
  }
});

modal.addEventListener("click", (event) => {
  if (event.target === modal || event.target.closest(".modal-close")) dismissModal();
});
document.addEventListener("keydown", (event) => { if (event.key === "Escape" && !modal.hidden) dismissModal(); });
document.querySelector(".menu-toggle").addEventListener("click", (event) => {
  const nav = document.querySelector(".main-nav");
  const open = nav.classList.toggle("is-open");
  event.currentTarget.setAttribute("aria-expanded", String(open));
});
document.querySelector(".main-nav").addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    document.querySelector(".main-nav").classList.remove("is-open");
    document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false");
  }
});
window.addEventListener("hashchange", updateRoute);

renderProperties();
updateRoute();
