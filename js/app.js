// js/app.js - Dynamic Rendering, Routing & Booking Engine

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("current-year").textContent = new Date().getFullYear();

  // Set default minimum date on booking calendar to today
  const dateInput = document.getElementById("patient-date");
  if (dateInput) {
    dateInput.min = new Date().toISOString().split("T")[0];
  }

  renderGalleryMarquee();
  renderServices("All");
  renderBodyMapButtons();
  selectBodyCondition("neck");
  renderTestimonials();
  renderFAQs();
  setupBookingForm();
});

// 1. Page Navigation (SPA View Switcher)
function navigateTo(viewName) {
  const views = ["home", "about", "services", "contact"];
  views.forEach((v) => {
    const el = document.getElementById(`view-${v}`);
    if (el) el.classList.toggle("hidden", v !== viewName);
  });

  document.querySelectorAll(".nav-link").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.nav === viewName);
  });

  // Close mobile menu if open
  document.getElementById("mobile-menu").classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleMobileMenu() {
  document.getElementById("mobile-menu").classList.toggle("hidden");
}

// 2. Render Infinite Gallery Marquee
function renderGalleryMarquee() {
  const track = document.getElementById("gallery-marquee");
  if (!track) return;
  const doubledImages = [...CLINIC_DATA.gallery, ...CLINIC_DATA.gallery];
  track.innerHTML = doubledImages
    .map(
      (imgUrl) => `
      <img src="${imgUrl}" alt="Physio Boss Clinic Gallery"
           class="w-64 h-44 object-cover rounded-2xl border border-physioBorder shadow-sm shrink-0" />
    `
    )
    .join("");
}

// 3. Render Services Cards
function createServiceCardHTML(service) {
  return `
    <div class="bg-white rounded-3xl border border-physioBorder overflow-hidden shadow-sm hover:shadow-xl transition flex flex-col">
      <div class="relative h-48 overflow-hidden">
        <img src="${service.image}" alt="${service.title}" class="w-full h-full object-cover" />
        <span class="absolute top-3 left-3 bg-physioDark/90 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full">
          ${service.category}
        </span>
        <span class="absolute bottom-3 right-3 bg-white/95 text-physioDark text-xs font-bold px-3 py-1 rounded-full">
          ⏱ ${service.duration}
        </span>
      </div>
      <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 class="text-xl font-bold text-physioDark">${service.title}</h3>
          <p class="text-sm text-slate-600 mt-2 leading-relaxed">${service.shortDesc}</p>
          <ul class="mt-4 space-y-1">
            ${service.highlights
              .map((h) => `<li class="text-xs font-semibold text-physioAccent">• ${h}</li>`)
              .join("")}
          </ul>
        </div>
        <button onclick="openBookingWithService('${service.title}')"
                class="w-full bg-physioMint hover:bg-physioDark text-physioDark hover:text-white font-bold text-xs py-3 rounded-xl transition">
          Book ${service.title} →
        </button>
      </div>
    </div>
  `;
}

function renderServices(category) {
  const homeGrid = document.getElementById("home-services-grid");
  const allGrid = document.getElementById("all-services-grid");

  if (homeGrid) {
    homeGrid.innerHTML = CLINIC_DATA.services
      .slice(0, 6)
      .map(createServiceCardHTML)
      .join("");
  }

  if (allGrid) {
    const filtered =
      category === "All"
        ? CLINIC_DATA.services
        : CLINIC_DATA.services.filter((s) => s.category === category);
    allGrid.innerHTML = filtered.map(createServiceCardHTML).join("");
  }
}

function filterServices(category) {
  renderServices(category);
}

// 4. Interactive Body Map
function renderBodyMapButtons() {
  const container = document.getElementById("body-condition-buttons");
  if (!container) return;
  container.innerHTML = CLINIC_DATA.bodyConditions
    .map(
      (c) => `
      <button onclick="selectBodyCondition('${c.id}')" id="pill-${c.id}"
              class="body-pill text-xs font-bold px-3 py-1.5 rounded-full border border-physioBorder bg-physioMint text-physioDark hover:bg-physioAccent hover:text-white transition">
        ${c.label.split("&")[0]}
      </button>
    `
    )
    .join("");
}

function selectBodyCondition(conditionId) {
  const item =
    CLINIC_DATA.bodyConditions.find((c) => c.id === conditionId) ||
    CLINIC_DATA.bodyConditions[0];

  // Highlight active SVG dot
  document.querySelectorAll(".hotspot-dot").forEach((dot) => {
    dot.classList.toggle("active", dot.id === `dot-${conditionId}`);
  });

  // Render diagnosis card
  const card = document.getElementById("body-detail-card");
  if (card) {
    card.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-white/15 pb-4">
        <span class="text-xs uppercase tracking-widest text-emerald-300 font-bold">${item.region}</span>
        <span class="bg-emerald-400/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full">
          Est. Recovery: ${item.recoveryTime}
        </span>
      </div>
      <h3 class="text-2xl sm:text-3xl font-extrabold">${item.label}</h3>
      <div class="space-y-3 text-sm text-slate-200">
        <p><strong class="text-emerald-300">Common Symptoms:</strong> ${item.symptoms}</p>
        <p><strong class="text-emerald-300">Physio Boss Protocol:</strong> ${item.treatment}</p>
      </div>
      <div class="pt-3">
        <button onclick="openBookingWithService('${item.label}')"
                class="bg-emerald-400 hover:bg-emerald-300 text-physioDark font-extrabold px-6 py-3 rounded-full text-sm transition">
          Book Assessment for ${item.label} →
        </button>
      </div>
    `;
  }
}

// 5. Render Testimonials & FAQs
function renderTestimonials() {
  const grid = document.getElementById("testimonials-grid");
  if (!grid) return;
  grid.innerHTML = CLINIC_DATA.testimonials
    .map(
      (t) => `
      <div class="bg-physioMint/60 p-6 rounded-3xl border border-physioBorder flex flex-col justify-between space-y-4">
        <div>
          <div class="text-amber-500 text-sm">★★★★★</div>
          <p class="text-slate-700 text-sm mt-3 leading-relaxed">"${t.text}"</p>
        </div>
        <div class="pt-3 border-t border-physioBorder">
          <p class="font-bold text-physioDark text-sm">${t.name}</p>
          <p class="text-xs text-slate-500">${t.role}</p>
        </div>
      </div>
    `
    )
    .join("");
}

function renderFAQs() {
  const container = document.getElementById("faq-container");
  if (!container) return;
  container.innerHTML = CLINIC_DATA.faqs
    .map(
      (f) => `
      <details class="bg-physioMint/60 border border-physioBorder rounded-2xl p-4 group">
        <summary class="font-bold text-physioDark cursor-pointer list-none flex justify-between items-center">
          <span>${f.q}</span>
          <span class="text-physioAccent group-open:rotate-45 transition-transform text-xl">+</span>
        </summary>
        <p class="text-sm text-slate-600 mt-3 leading-relaxed">${f.a}</p>
      </details>
    `
    )
    .join("");
}

// 6. Pre-select Service & Jump to Booking Form
function openBookingWithService(serviceName) {
  navigateTo("contact");
  const selectEl = document.getElementById("patient-service");
  if (selectEl) {
    // Add option dynamically if not already in dropdown
    let exists = Array.from(selectEl.options).some((opt) => opt.value === serviceName);
    if (!exists) {
      selectEl.add(new Option(serviceName, serviceName, true, true));
    } else {
      selectEl.value = serviceName;
    }
  }
}

// 7. Handle Form Submission (Netlify Background Save + WhatsApp Redirect)
function setupBookingForm() {
  const form = document.getElementById("booking-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("patient-name").value.trim();
    const phone = document.getElementById("patient-phone").value.trim();
    const service = document.getElementById("patient-service").value;
    const date = document.getElementById("patient-date").value;
    const notes = document.getElementById("patient-notes").value.trim() || "None";

    // Optional: Submit to Netlify Forms silently in the background if hosted on Netlify
    const formData = new FormData(form);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    }).catch(() => {});

    // Build WhatsApp Message
    const message =
      `*New Appointment Request - Physio Boss*%0A` +
      `----------------------------------%0A` +
      `👤 *Patient:* ${encodeURIComponent(name)}%0A` +
      `📞 *Phone:* ${encodeURIComponent(phone)}%0A` +
      `🩺 *Treatment:* ${encodeURIComponent(service)}%0A` +
      `📅 *Preferred Date:* ${encodeURIComponent(date)}%0A` +
      `📝 *Notes:* ${encodeURIComponent(notes)}`;

    const whatsappURL = `https://wa.me/${CLINIC_DATA.phoneRaw}?text=${message}`;
    window.open(whatsappURL, "_blank");
  });
}