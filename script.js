const products = [
  {
    category: "module",
    name: "Trina Vertex S+ 445 Wp (Dual Glass)",
    specs: "Glas-Glas-Modul • 445 Wp • Bifazial • 108 Half-Cells • Neu",
    price: "60 € (0 % USt.)",
    mail: "Trina Vertex S+ 445 Wp",
    images: [
      "images/TrinaVertexS445WpDualGlass-1.jpeg",
      "images/TrinaVertexS445WpDualGlass-2.jpeg"
    ]
  },
  {
    category: "module",
    name: "Solico 410 Wp Solarmodul",
    specs: "Monokristallines Solarmodul mit 108 Halbzellen, 410 W Leistung • Lager: 80 Stk. • Neu",
    price: "40 € (0 % USt.)",
    mail: "Solico 410 Wp Solarmodul",
    images: ["images/Solico410WpSolarmodul-1.jpg"]
  },
  {
    category: "module",
    name: "Solico 380 Wp Solarmodul",
    specs: "Monokristallines Solarmodul mit 120 Halbzellen, 380 W Leistung • Lager: 50 Stk. • Neu",
    price: "35 € (0 % USt.)",
    mail: "Solico 380 Wp Solarmodul",
    images: ["images/Solico410WpSolarmodul-1.jpg"]
  },
  {
    category: "module",
    name: "Solico 405 Wp Solarmodul",
    specs: "Monokristallines Solarmodul mit 108 Halbzellen, 405 W Leistung • Lager: 100 Stk. • Neu",
    price: "40 € (0 % USt.)",
    mail: "Solico 405 Wp Solarmodul",
    images: ["images/Solico410WpSolarmodul-1.jpg"]
  },
  {
    category: "module",
    name: "Solico 430 Wp Solarmodul",
    specs: "Monokristallines Solarmodul mit 108 Halbzellen, 430 W Leistung • Lager: 134 Stk. • Neu",
    price: "45 € (0 % USt.)",
    mail: "Solico 430 Wp Solarmodul",
    images: ["images/Solico430WpSolarmodul-1.webp"]
  },
  {
    category: "module",
    name: "SOLYCO 420 Wp Full Black Modul",
    specs: "Vollschwarzes Mono-Modul, 420 W • Lager: 200 Stk. • Neu, schwarzer Rahmen und schwarze Zellen",
    price: "50 € (0 % USt.)",
    mail: "SOLYCO 420 Wp Full Black Modul",
    images: ["images/SOLYCO420WpFullBlackModul.webp"]
  },
  {
    category: "inverter",
    name: "Kostal Plenticore 8.5 G2",
    specs: "Hybrid-Wechselrichter • 8,5 kW • Neu • Lager: 47 Stk.",
    price: "800 € (0 % USt.)",
    mail: "Kostal Plenticore 8.5 G2",
    images: [
      "images/kostal-plenticore-8-5-g2-1.jpg",
      "images/kostal-plenticore-8-5-g2-2.webp"
    ]
  },
  {
    category: "inverter",
    name: "Kostal Plenticore 7.0 G2",
    specs: "Hybrid-Wechselrichter • 7 kW • Neu • Lager: 30 Stk.",
    price: "700 € (0 % USt.)",
    mail: "Kostal Plenticore 7.0 G2",
    images: [
      "images/kostal-plenticore-8-5-g2-1.jpg",
      "images/kostal-plenticore-8-5-g2-2.webp"
    ]
  },
  {
    category: "inverter",
    name: "Kostal Plenticore 4.2 G2",
    specs: "Hybrid-Wechselrichter • 4,2 kW • Neu • Lager: 6 Stk.",
    price: "400 € (0 % USt.)",
    mail: "Kostal Plenticore 4.2 G2",
    images: [
      "images/kostal-plenticore-8-5-g2-1.jpg",
      "images/kostal-plenticore-8-5-g2-2.webp"
    ]
  },
  {
    category: "inverter",
    name: "Sungrow SH8.0RT (inkl. Meter)",
    specs: "Hybrid-Wechselrichter • 8 kW • Meter im Lieferumfang • Lager: 15 Stk.",
    price: "750 € (0 % USt.)",
    mail: "Sungrow SH8.0RT",
    images: ["images/sungrow-sh6-0rt-1.jpg"]
  },
  {
    category: "inverter",
    name: "Sungrow SH6.0RT (inkl. Meter)",
    specs: "Hybrid-Wechselrichter • 6 kW • Neu • Lager: 73 Stk.",
    price: "600 € (0 % USt.)",
    mail: "Sungrow SH6.0RT",
    images: [
      "images/sungrow-sh6-0rt-1.jpg",
      "images/sungrow-sh6-0rt-2.jpg",
      "images/sungrow-sh6-0rt-3.jpg"
    ]
  },
  {
    category: "inverter",
    name: "Sungrow SH5.0RT (inkl. Meter)",
    specs: "Hybrid-Wechselrichter • 5 kW • Neu • Lager: 15 Stk.",
    price: "500 € (0 % USt.)",
    mail: "Sungrow SH5.0RT",
    images: [
      "images/sungrow-sh6-0rt-1.jpg",
      "images/sungrow-sh6-0rt-2.jpg",
      "images/sungrow-sh6-0rt-3.jpg"
    ]
  },
  {
    category: "inverter",
    name: "SolarEdge SE8K-RWS (StorEdge)",
    specs: "StorEdge-Hybrid-Wechselrichter • 8 kW • Neu • Lager: 43 Stk.",
    price: "600 € (0 % USt.)",
    mail: "SolarEdge SE8K-RWS StorEdge",
    images: ["images/solaredge-se8k-rws-storedge-1.jpg"]
  },
  {
    category: "inverter",
    name: "SolarEdge SE7K-RWS (StorEdge)",
    specs: "StorEdge-Hybrid-Wechselrichter • 7 kW • Neu • Lager: 36 Stk.",
    price: "600 € (0 % USt.)",
    mail: "SolarEdge SE7K-RWS StorEdge",
    images: ["images/solaredge-se8k-rws-storedge-1.jpg"]
  },
  {
    category: "accessory",
    name: "DEHNshield ZP B2 SG Kombiableiter",
    specs: "Kombi-Ableiter Typ 1+2 mit Blitzteilstrom-Ableiter (3+0) • Lager: 45 Stk. • Neu",
    price: "Auf Anfrage",
    mail: "DEHNshield ZP B2 SG Kombiableiter",
    images: [
      "images/DEHNshieldZPB2SGKombiableiter-1.webp",
      "images/DEHNshieldZPB2SGKombiableiter-2.jpg"
    ]
  },
  {
    category: "accessory",
    name: "DEHNshield DSH 225 Kombiableiter",
    specs: "Kombi-Ableiter Typ 1+2 für Hausinstallation (3+0) • Lager: 60 Stk. • Neu",
    price: "Auf Anfrage",
    mail: "DEHNshield DSH 225 Kombiableiter",
    images: ["images/DEHNshieldDSH225Kombiableiter-1.jpg"]
  },
  {
    category: "accessory",
    name: "MC4-Verlängerungskabel 1,4 m",
    specs: "PV-Verlängerungskabel 1,4 m (4 mm²) mit MC4-Steckern vormontiert • Lager: 427 Stk.",
    price: "Auf Anfrage",
    mail: "MC4-Verlängerungskabel 1,4 m",
    images: ["images/MC4-Verlängerungskabel1_4m-1.webp"]
  },
  {
    category: "module",
    name: "Heckert NeMo 4.2 80M 400 Wp",
    specs: "Monokristall-Modul • 400 Wp • deutscher Hersteller • Lager: 400 Stk.",
    price: "80 € (0 % USt.)",
    mail: "Heckert NeMo 4.2 80M 400 Wp",
    images: [
      "images/heckert-nemo4-280m-400wp-1.jpg",
      "images/heckert-nemo4-280m-400wp-2.webp"
    ]
  },
  {
    category: "module",
    name: "Sunman eArc 430 Wp (flexibel)",
    specs: "Ultraleichtes, glasloses Flex-Modul • 430 Wp • Lager: 330 Stk.",
    price: "180 € (0 % USt.)",
    mail: "Sunman eArc 430 Wp flexibel",
    images: [
      "images/sunman-earc430wp-flexibel-1.webp",
      "images/sunman-earc430wp-flexibel-2.webp"
    ]
  },
  {
    category: "accessory",
    name: "Kostal Energy Meter (Serie P)",
    specs: "3-phasiger Kostal Energiezähler • Lager: 50 Stk.",
    price: "Auf Anfrage",
    mail: "Kostal Energy Meter Serie P",
    images: ["images/kostal-energy-meter-seriep-1.jpg"]
  },
  {
    category: "accessory",
    name: "Kostal Smart Energy Meter G2",
    specs: "3-phasiger Energiezähler • Neu • Lager: 40 Stk.",
    price: "Auf Anfrage",
    mail: "Kostal Smart Energy Meter G2",
    images: ["images/kostal-smart-energy-meter-g2-1.png"]
  },
  {
    category: "accessory",
    name: "SolarEdge Home Inline Energiezähler",
    specs: "Dreiphasiger Smart Meter (65 A) • Lager: 95 Stk.",
    price: "Auf Anfrage",
    mail: "SolarEdge Home Inline Energiezähler",
    images: ["images/solaredge-homeinline-energiezahler-1.webp"]
  }
];

const CATEGORY_LABELS = {
  all: "Alle",
  module: "Module",
  inverter: "Wechselrichter",
  accessory: "Zubehör"
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const offersGrid = document.querySelector(".offers-grid");
const inventoryCount = document.getElementById("inventory-count");
const filterButtons = document.querySelectorAll(".filter-chip");
const searchInput = document.getElementById("inventory-search");

const lightbox = document.querySelector(".lightbox");
const lbImg = lightbox ? lightbox.querySelector(".lb-img") : null;
const lbCaption = lightbox ? lightbox.querySelector(".lb-caption") : null;
const lbPrev = lightbox ? lightbox.querySelector(".lb-prev") : null;
const lbNext = lightbox ? lightbox.querySelector(".lb-next") : null;
const lbClose = lightbox ? lightbox.querySelector(".lb-close") : null;

let activeFilter = "all";
let activeLightboxProductIndex = -1;
let activeLightboxImageIndex = 0;
let lightboxLastFocusedElement = null;
let revealObserver = null;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function normalize(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getCategoryLabel(category) {
  return CATEGORY_LABELS[category] || "Sonstiges";
}

function getVisibleProducts() {
  const query = searchInput ? normalize(searchInput.value.trim()) : "";

  return products
    .map((product, index) => ({ product, index }))
    .filter(({ product }) => {
      const categoryMatch = activeFilter === "all" || product.category === activeFilter;
      if (!categoryMatch) return false;

      if (!query) return true;

      const searchBlob = normalize([
        product.name,
        product.specs,
        product.price,
        getCategoryLabel(product.category)
      ].join(" "));

      return searchBlob.includes(query);
    });
}

function buildProductCard(product, index) {
  const mailSubject = encodeURIComponent(`Anfrage ${product.mail}`);
  const mailBody = encodeURIComponent(
    `Guten Tag,\n\nich interessiere mich für "${product.name}". Bitte senden Sie mir Preis und Verfügbarkeit.\n\nVielen Dank.`
  );

  return `
    <article class="offer-card reveal" data-product-index="${index}">
      <button class="offer-image-wrap" type="button" data-open-lightbox="true" aria-label="Bilder zu ${escapeHtml(product.name)} öffnen">
        <img class="offer-image" src="${escapeHtml(product.images[0])}" alt="${escapeHtml(product.name)}" loading="lazy" />
        ${product.images.length > 1 ? `<span class="offer-image-count">${product.images.length} Fotos</span>` : ""}
      </button>
      <div class="offer-body">
        <p class="offer-category">${escapeHtml(getCategoryLabel(product.category))}</p>
        <h3>${escapeHtml(product.name)}</h3>
        <p>${escapeHtml(product.specs)}</p>
      </div>
      <div class="offer-footer">
        <p class="offer-price">${escapeHtml(product.price)}</p>
        <a class="btn btn-secondary" href="mailto:info@taosun.de?subject=${mailSubject}&body=${mailBody}">Anfragen</a>
      </div>
    </article>
  `;
}

function observeReveals(scope = document) {
  const items = scope.querySelectorAll ? scope.querySelectorAll(".reveal") : [];
  if (!items.length) return;

  if (prefersReducedMotion) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  if (!revealObserver) return;
  items.forEach((item) => revealObserver.observe(item));
}

function initRevealObserver() {
  if (prefersReducedMotion) {
    observeReveals(document);
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
  );

  observeReveals(document);
}

function renderProducts() {
  if (!offersGrid) return;

  const visibleProducts = getVisibleProducts();
  if (inventoryCount) inventoryCount.textContent = String(visibleProducts.length);

  if (!visibleProducts.length) {
    offersGrid.innerHTML = `
      <div class="empty-state reveal">
        <h3>Keine Produkte gefunden</h3>
        <p>Bitte passen Sie Kategorie oder Suchbegriff an und versuchen Sie es erneut.</p>
      </div>
    `;
    observeReveals(offersGrid);
    return;
  }

  offersGrid.innerHTML = visibleProducts
    .map(({ product, index }) => buildProductCard(product, index))
    .join("");

  observeReveals(offersGrid);
}

function syncFilterButtonsState(active) {
  filterButtons.forEach((button) => {
    const selected = button.dataset.filter === active;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-selected", selected ? "true" : "false");
  });
}

function setupFilters() {
  if (!filterButtons.length) return;

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter || "all";
      syncFilterButtonsState(activeFilter);
      renderProducts();
    });
  });
}

function updateLightboxImage() {
  if (!lbImg || !lbCaption || activeLightboxProductIndex < 0) return;

  const product = products[activeLightboxProductIndex];
  const imagePath = product.images[activeLightboxImageIndex];
  lbImg.src = imagePath;
  lbImg.alt = `${product.name} – Bild ${activeLightboxImageIndex + 1}`;
  lbCaption.textContent = `${product.name} · Bild ${activeLightboxImageIndex + 1}/${product.images.length}`;
}

function openLightbox(productIndex, imageIndex = 0) {
  if (!lightbox || !lbImg || !products[productIndex]) return;

  activeLightboxProductIndex = productIndex;
  activeLightboxImageIndex = imageIndex;
  lightboxLastFocusedElement = document.activeElement;

  updateLightboxImage();
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");

  if (lbClose) lbClose.focus();
}

function closeLightbox() {
  if (!lightbox) return;

  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");

  if (lbImg) {
    lbImg.src = "";
    lbImg.alt = "";
  }

  if (lightboxLastFocusedElement && typeof lightboxLastFocusedElement.focus === "function") {
    lightboxLastFocusedElement.focus();
  }
}

function stepLightbox(direction) {
  if (activeLightboxProductIndex < 0) return;

  const images = products[activeLightboxProductIndex].images;
  if (images.length <= 1) return;

  activeLightboxImageIndex = (activeLightboxImageIndex + direction + images.length) % images.length;
  updateLightboxImage();
}

function setupLightbox() {
  if (!offersGrid || !lightbox) return;

  offersGrid.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-open-lightbox]");
    if (!trigger) return;

    const card = trigger.closest(".offer-card");
    if (!card) return;

    const index = Number(card.dataset.productIndex);
    if (Number.isNaN(index)) return;

    openLightbox(index);
  });

  if (lbPrev) lbPrev.addEventListener("click", () => stepLightbox(-1));
  if (lbNext) lbNext.addEventListener("click", () => stepLightbox(1));
  if (lbClose) lbClose.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
}

function setupFaqAccordion() {
  const items = document.querySelectorAll(".faq-item");
  if (!items.length) return;

  items.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      items.forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });
}

function setupInquiryForm() {
  const form = document.getElementById("inquiry-form");
  const formStatus = document.getElementById("form-status");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = (data.get("name") || "").toString().trim();
    const company = (data.get("company") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const phone = (data.get("phone") || "").toString().trim();
    const interest = (data.get("interest") || "").toString().trim();
    const quantity = (data.get("quantity") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();

    const subject = `Anfrage ${interest || "Photovoltaik"}`;
    const body = [
      `Name: ${name || "-"}`,
      `Firma: ${company || "-"}`,
      `E-Mail: ${email || "-"}`,
      `Telefon: ${phone || "-"}`,
      `Produkt/Interesse: ${interest || "-"}`,
      `Menge: ${quantity || "-"}`,
      "",
      "Nachricht:",
      message || "-"
    ].join("\n");

    if (formStatus) formStatus.textContent = "E-Mail-Programm wird geöffnet...";

    window.location.href = `mailto:info@taosun.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

function setupMobileNavigation() {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (!navToggle || !navLinks) return;

  function closeMenu() {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", expanded ? "false" : "true");
    navLinks.classList.toggle("is-open", !expanded);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => closeMenu());
  });

  document.addEventListener("click", (event) => {
    if (!navLinks.classList.contains("is-open")) return;
    if (event.target.closest(".nav-inner")) return;
    closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navLinks.classList.contains("is-open")) {
      closeMenu();
    }
  });
}

function setupNavShadow() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  function sync() {
    navbar.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  sync();
  window.addEventListener("scroll", sync, { passive: true });
}

function setupSmoothAnchors() {
  if (prefersReducedMotion) return;

  const links = document.querySelectorAll("a[href^='#']");
  if (!links.length) return;

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      const navHeight = document.querySelector(".navbar")?.offsetHeight || 0;
      const top = window.scrollY + target.getBoundingClientRect().top - navHeight - 16;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

function setupGlobalKeyboardShortcuts() {
  document.addEventListener("keydown", (event) => {
    if (!lightbox || !lightbox.classList.contains("open")) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowRight") stepLightbox(1);
    if (event.key === "ArrowLeft") stepLightbox(-1);
  });
}

function setupSearch() {
  if (!searchInput) return;

  searchInput.addEventListener("input", () => {
    renderProducts();
  });
}

function setYear() {
  const yearElement = document.getElementById("year");
  if (yearElement) yearElement.textContent = String(new Date().getFullYear());
}

function init() {
  setYear();
  setupNavShadow();
  setupMobileNavigation();
  setupSmoothAnchors();
  setupGlobalKeyboardShortcuts();
  setupInquiryForm();
  setupFaqAccordion();
  initRevealObserver();
  setupFilters();
  setupSearch();
  setupLightbox();
  syncFilterButtonsState(activeFilter);
  renderProducts();
}

init();
