// ═══════════════════════════════════════════════════
//  filtered-temples.js
//  Temple array, dynamic card rendering, filters,
//  hamburger nav, and footer.
// ═══════════════════════════════════════════════════

// ── Temple Data Array ──
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // ── Student-added entries (3 required) ──
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August, 24",
    area: 19184,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-lds-83166-wallpaper.jpg"
  },
  {
    templeName: "Taipei Taiwan",
    location: "Taipei, Taiwan",
    dedicated: "1984, November, 17",
    area: 15451,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/taipei-taiwan/400x250/taipei-taiwan-temple-lds-1031625-wallpaper.jpg"
  }
];

// ═══════════════════════════════════════════════════
//  Helper: extract year from dedicated string
//  e.g. "2005, August, 7" → 2005
// ═══════════════════════════════════════════════════
function getDedicatedYear(dedicated) {
  return parseInt(dedicated.split(",")[0].trim(), 10);
}

// ═══════════════════════════════════════════════════
//  Build a single temple <figure> card
// ═══════════════════════════════════════════════════
function createTempleCard(temple) {
  const figure = document.createElement("figure");

  const img = document.createElement("img");
  img.src     = temple.imageUrl;
  img.alt     = temple.templeName + " Temple";
  img.loading = "lazy";
  img.width   = 400;
  img.height  = 250;

  const caption = document.createElement("figcaption");

  const name = document.createElement("h3");
  name.textContent = temple.templeName;

  const location = document.createElement("p");
  location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;

  const dedicated = document.createElement("p");
  dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;

  const area = document.createElement("p");
  area.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;

  caption.appendChild(name);
  caption.appendChild(location);
  caption.appendChild(dedicated);
  caption.appendChild(area);

  figure.appendChild(img);
  figure.appendChild(caption);

  return figure;
}

// ═══════════════════════════════════════════════════
//  Render a filtered list of temples into #gallery
// ═══════════════════════════════════════════════════
function renderTemples(list) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  if (list.length === 0) {
    gallery.innerHTML = '<p class="no-results">No temples match this filter.</p>';
    return;
  }

  const fragment = document.createDocumentFragment();
  list.forEach(temple => fragment.appendChild(createTempleCard(temple)));
  gallery.appendChild(fragment);
}

// ═══════════════════════════════════════════════════
//  Filter logic
// ═══════════════════════════════════════════════════
const filterMap = {
  home:   () => temples,
  old:    () => temples.filter(t => getDedicatedYear(t.dedicated) < 1900),
  new:    () => temples.filter(t => getDedicatedYear(t.dedicated) > 2000),
  large:  () => temples.filter(t => t.area > 90000),
  small:  () => temples.filter(t => t.area < 10000),
};

const headingMap = {
  home:  "All Temples",
  old:   "Old Temples (Before 1900)",
  new:   "New Temples (After 2000)",
  large: "Large Temples (Over 90,000 sq ft)",
  small: "Small Temples (Under 10,000 sq ft)",
};

// ═══════════════════════════════════════════════════
//  Wire up nav filter links
// ═══════════════════════════════════════════════════
const navLinks   = document.querySelectorAll("nav a[data-filter]");
const heading    = document.getElementById("filter-heading");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const filter = link.dataset.filter;

    // Update active state
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    // Update heading
    heading.textContent = headingMap[filter] || "Temples";

    // Render filtered list
    renderTemples(filterMap[filter]());

    // Close mobile menu after selection
    const navMenu = document.getElementById("navMenu");
    if (navMenu.classList.contains("show")) {
      navMenu.classList.remove("show");
      document.getElementById("hamburger").innerHTML = "&#9776;";
      document.getElementById("hamburger").setAttribute("aria-expanded", "false");
    }
  });
});

// ═══════════════════════════════════════════════════
//  Hamburger toggle
// ═══════════════════════════════════════════════════
const hamburger = document.getElementById("hamburger");
const navMenu   = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("show");
  hamburger.innerHTML = isOpen ? "&#10005;" : "&#9776;";
  hamburger.setAttribute("aria-expanded", String(isOpen));
});

// ═══════════════════════════════════════════════════
//  Footer: year & last modified

// ═══════════════════════════════════════════════════
// Dynamic Year
const currentYearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;

// Dynamic Last Modified Date
const lastModifiedSpan = document.getElementById("lastModifiedDate");
lastModifiedSpan.textContent = document.cookie ? document.lastModified : document.lastModified;
// ═══════════════════════════════════════════════════
//  Initial render – all temples
// ═══════════════════════════════════════════════════
renderTemples(temples);