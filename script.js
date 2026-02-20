/* ---------- Produktdaten: generiert aus Excel ---------- */
const products = [
  /* ---------- Solarmodule ---------- */
  {
  name: "Trina Vertex S+ 445 Wp (Dual Glass)",
  specs: "Glas‑Glas‑Modul • 445 Wp • Bifazial • 108 Half‑Cells • Neu",
  price: "60 € (0 % USt.)",          // Preis ggf. anpassen
  mail: "Trina Vertex S+ 445 Wp",
  images: [
    "images/TrinaVertexS445WpDualGlass-1.jpeg",
    "images/TrinaVertexS445WpDualGlass-2.jpeg"
  ]
  },
  {
    name: "Solico 410 Wp Solarmodul",
    specs: "Monokristallines Solarmodul mit 108 Halbzellen, 410 W Leistung • Lager: 80 Stk. • Neu",
    price: "40 € (0 % USt.)",
    mail: "Solico 410 Wp Solarmodul",
    images: [
      "images/Solico410WpSolarmodul-1.jpg"
    ]
  },
  {
    name: "Solico 380 Wp Solarmodul",
    specs: "Monokristallines Solarmodul mit 120 Halbzellen, 380 W Leistung • Lager: 50 Stk. • Neu",
    price: "35 € (0 % USt.)",
    mail: "Solico 380 Wp Solarmodul",
    images: [
      "images/Solico410WpSolarmodul-1.jpg"
    ]
  },
  {
    name: "Solico 405 Wp Solarmodul",
    specs: "Monokristallines Solarmodul mit 108 Halbzellen, 405 W Leistung • Lager: 100 Stk. • Neu",
    price: "40 € (0 % USt.)",
    mail: "Solico 405 Wp Solarmodul",
    images: [
      "images/Solico410WpSolarmodul-1.jpg"
    ]
  },
  {
    name: "Solico 430 Wp Solarmodul",
    specs: "Monokristallines Solarmodul mit 108 Halbzellen, 430 W Leistung • Lager: 134 Stk. • Neu",
    price: "45 € (0 % USt.)",
    mail: "Solico 430 Wp Solarmodul",
    images: [
      "images/Solico430WpSolarmodul-1.webp"
    ]
  },
  {
    name: "SOLYCO 420 Wp Full Black Modul",
    specs: "Vollschwarzes Mono‑Modul, 420 W • Lager: 200 Stk. • Neu, schwarzer Rahmen & Zellen",
    price: "50 € (0 % USt.)",
    mail: "SOLYCO 420 Wp Full Black Modul",
    images: [
      "images/SOLYCO420WpFullBlackModul.webp"
    ]
  },

  /* ---------- Wechselrichter ---------- */
  {
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
    name: "Sungrow SH8.0RT (inkl. Meter)",
    specs: "Hybrid-Wechselrichter • 8 kW • Meter im Lieferumfang • Lager: 15 Stk.",
    price: "750 € (0 % USt.)",
    mail: "Sungrow SH8.0RT",
    images: [
      "images/sungrow-sh6-0rt-1.jpg"
    ]
  },
  {
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
    name: "SolarEdge SE8K-RWS (StorEdge)",
    specs: "StorEdge-Hybrid-Wechselrichter • 8 kW • Neu • Lager: 43 Stk.",
    price: "600 € (0 % USt.)",
    mail: "SolarEdge SE8K-RWS StorEdge",
    images: [
      "images/solaredge-se8k-rws-storedge-1.jpg"
    ]
  },
  {
  name: "SolarEdge SE7K-RWS (StorEdge)",
  specs: "StorEdge-Hybrid-Wechselrichter • 7 kW • Neu • Lager: 36 Stk.",
  price: "600 € (0 % USt.)",
  mail: "SolarEdge SE7K-RWS StorEdge",
  images: [
    "images/solaredge-se8k-rws-storedge-1.jpg"
  ]
  },

  /* ---------- Zubehör ---------- */
  {
    name: "DEHNshield ZP B2 SG Kombiableiter",
    specs: "Kombi-Ableiter Typ 1+2 mit Blitzteil­strom-Ableiter (3+0) • Lager: 45 Stk. • Neu, Überspannungsschutz",
    price: "Auf Anfrage",
    mail: "DEHNshield ZP B2 SG Kombiableiter",
    images: [
      "images/DEHNshieldZPB2SGKombiableiter-1.webp",
      "images/DEHNshieldZPB2SGKombiableiter-2.jpg"
    ]
  },
  {
    name: "DEHNshield DSH 225 Kombiableiter",
    specs: "DEHN Kombi-Ableiter Typ 1+2 für Hausinstallation (3+0-Schaltung) • Lager: 60 Stk. • Neu, Überspannungsschutz",
    price: "Auf Anfrage",
    mail: "DEHNshield DSH 225 Kombiableiter",
    images: [
      "images/DEHNshieldDSH225Kombiableiter-1.jpg"
    ]
  },
  {
    name: "MC4-Verlängerungskabel 1,4 m",
    specs: "PV-Verlängerungskabel 1,4 m (4 mm²) mit MC4-Steckern vormontiert • Lager: 427 Stk. • Neu, UV-beständig",
    price: "Auf Anfrage",
    mail: "MC4-Verlängerungskabel 1,4 m",
    images: [
      "images/MC4-Verlängerungskabel1_4m-1.webp"
    ]
  },
  /* ---------- Weitere Module, Wechselrichter & Zubehör ---------- */
  {
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
    name: "Kostal Energy Meter (Serie P)",
    specs: "3-phasiger Kostal Energiezähler • Lager: 50 Stk.",
    price: "Auf Anfrage",
    mail: "Kostal Energy Meter Serie P",
    images: [
      "images/kostal-energy-meter-seriep-1.jpg"
    ]
  },
  {
  name: "Kostal Smart Energy Meter G2",
  specs: "3-phasiger Energiezähler • Neu • Lager: 40 Stk.",
  price: "Auf Anfrage",
  mail: "Kostal Smart Energy Meter G2",
  images: [
    "images/kostal-smart-energy-meter-g2-1.png"
    ]
  },
  {
    name: "SolarEdge Home Inline Energiezähler",
    specs: "Dreiphasiger Smart Meter (65 A) • Lager: 95 Stk.",
    price: "Auf Anfrage",
    mail: "SolarEdge Home Inline Energiezähler",
    images: [
      "images/solaredge-homeinline-energiezahler-1.webp"
    ]
  }
];

/* ---------- Karten-HTML in Offers‑Grid rendern ---------- */
const offersGrid = document.querySelector(".offers-grid");
offersGrid.innerHTML = products
  .map(
    (p, idx) => `
    <article class="card" data-idx="${idx}">
      <img src="${p.images[0]}" alt="${p.name}" class="card-img" loading="lazy" />
      <h3>${p.name}</h3>
      <p class="specs">${p.specs}</p>
      <p class="price">${p.price}</p>
      <a href="mailto:info@taosun.de?subject=Anfrage%20${encodeURIComponent(
        p.mail
      )}" class="btn-secondary">Anfragen</a>
    </article>`
  )
  .join("");

/* ---------- Lightbox ---------- */
const lightbox = document.querySelector(".lightbox");
const lbImg   = lightbox.querySelector(".lb-img");
const lbPrev  = lightbox.querySelector(".lb-prev");
const lbNext  = lightbox.querySelector(".lb-next");
const lbClose = lightbox.querySelector(".lb-close");

let lbIndex = 0;          // welches Produkt?
let lbImgIdx = 0;         // welches Bild im Produkt?

function openLightbox(prodIdx, imgIdx = 0){
  lbIndex = prodIdx;
  lbImgIdx = imgIdx;
  lbImg.src = products[lbIndex].images[lbImgIdx];
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden","false");
}
function closeLightbox(){
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden","true");
}
function showNext(dir = 1){
  const imgs = products[lbIndex].images;
  lbImgIdx = (lbImgIdx + dir + imgs.length) % imgs.length;
  lbImg.src = imgs[lbImgIdx];
}

offersGrid.addEventListener("click", e=>{
  const img = e.target.closest(".card-img");
  if(!img) return;
  const art = img.closest(".card");
  openLightbox(Number(art.dataset.idx));
});
lbPrev.addEventListener("click", ()=>showNext(-1));
lbNext.addEventListener("click", ()=>showNext(1));
lbClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e=>{
  if(e.target === lightbox) closeLightbox();   // Klick neben Bild schließt
});
document.addEventListener("keydown", e=>{
  if(!lightbox.classList.contains("open")) return;
  if(e.key === "Escape") closeLightbox();
  if(e.key === "ArrowRight") showNext(1);
  if(e.key === "ArrowLeft")  showNext(-1);
});

/* ---------- Footer‑Jahr + Smooth‑Scroll ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", e => {
      const id = link.getAttribute("href").slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
      }
    });
  });
}
