/**
 * Lans Lorence N. Hernandez - Master Engine (script.js)
 * Features:
 * - Light / Dark mode toggle with LocalStorage persistence
 * - URL Hash / Route detection (/login or #login redirect to login.html)
 * - Dynamic Profile Information & Photo Engine from LocalStorage
 * - Complete Admin Authentication & In-Browser Information Editor
 * - Full CRUD management for Certificates & Projects
 * - Typewriter, 3D tilt parallax, and scroll reveal animations
 */

// --- Default Profile Information ---
const DEFAULT_PROFILE = {
  name: "Lans Lorence N. Hernandez",
  phone: "+63 963 944 7150",
  email: "lanslorence@gmail.com",
  location: "Zone 3, Ibaba West, Calapan City Oriental Mindoro, Philippines, 5200",
  objective: "Motivated Information Technology graduate with a strong foundational knowledge of core IT principles and a passion for emerging technologies. Fast learner and proactive problem-solver dedicated to continuously acquiring new skills, adapting to modern tools, and delivering high-quality solutions to support organizational goals.",
  tertiarySchool: "Mindoro State University — Calapan City, Oriental Mindoro",
  tertiaryDegree: "Bachelor of Science in Information Technology (BSIT) (S.Y. 2022-2026)",
  experienceCompany: "Infinitech Advertising Corporation & Ollopa Company",
  experienceRole: "Full-Stack Trainee & Social Media Specialist",
  experienceDesc: "Full-Stack Feature Engineering & Module Development for Abic-Realty with Laravel RESTful APIs & React.js; Social Media Marketing & Multi-Account Management; Game Design & UI/UX flow at Ollopa Company.",
  profilePicture: "images/profile_lans.png"
};

const DEFAULT_PROJECTS = [
  {
    id: "proj-1",
    title: "El Nido, Palawan — Tourism Website",
    category: "web",
    categoryLabel: "Tourism Web Design",
    desc: "Official tourism promotion and municipal booking website for El Nido, Palawan. Features tour packages, island hopping itineraries, gallery, and an integrated booking system for a world-class island paradise.",
    tags: ["HTML5", "CSS3", "JavaScript", "Tourism", "Responsive Design"],
    img: "images/projects/el_nido_palawan.png",
    link: "https://l4nszxc.github.io/EL_Nido_Palawan/"
  },
  {
    id: "proj-2",
    title: "Sky & Shore Beach Resort Website",
    category: "web",
    categoryLabel: "Resort Web Design",
    desc: "Beach resort website for Sky & Shore in Mansalay, Oriental Mindoro. Showcases exclusive accommodation packages, water activities, amenities, and an online reservation system for families, couples, and barkada groups.",
    tags: ["HTML5", "CSS3", "JavaScript", "Beach Resort", "Booking System"],
    img: "images/projects/sky_shore_resort.png",
    link: "https://l4nszxc.github.io/Sky-Shore-Website/"
  },
  {
    id: "proj-3",
    title: "Buktot Beach Resort — Eco-Tourism Site",
    category: "web",
    categoryLabel: "Eco-Tourism Web Design",
    desc: "Eco-tourism website for Buktot Beach Resort in Brgy. Manaul, Mansalay. Highlights pristine white sand beaches, turquoise waters, nipa cabanas, eco-camping, day tour packages, and a group trip cost calculator.",
    tags: ["HTML5", "CSS3", "JavaScript", "Eco-Tourism", "Mindoro"],
    img: "images/projects/buktot_beach_resort.png",
    link: "https://l4nszxc.github.io/Buktot_Beack_Resort/"
  },
  {
    id: "proj-4",
    title: "Boracay Island — Travel & Tourism Website",
    category: "web",
    categoryLabel: "Travel Web Design",
    desc: "Full-featured travel and tourism website for Boracay Island, Aklan. Features DOT-accredited tour packages, island hopping, resort bookings, travel guide, gallery, and a trip planning system for the world-famous island destination.",
    tags: ["HTML5", "CSS3", "JavaScript", "Travel", "Tour Packages"],
    img: "images/projects/boracay_island.png",
    link: "https://l4nszxc.github.io/Boracay_Island/"
  }
];

const DEFAULT_CERTIFICATES = [
  {
    id: "cert-1",
    title: "TESDA NCIII JAVA PROGRAMMING CERTIFICATION",
    issuer: "Technical Education and Skills Development Authority (TESDA)",
    date: "October 11, 2024",
    desc: "National Certification Level III validating core competency in Java programming, object-oriented software engineering, debugging, and system implementation.",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cert-2",
    title: "DATA PRIVACY AWARENESS",
    issuer: "DICT Aurora - ICT Literacy and Competency Development Bureau (ILCDB)",
    date: "August 21, 2025",
    desc: "Certificate of Attendance for the four (4) hour Information Session conducted via online conferencing platform. Control No. 2025-08-AUR-IS-04-OL-212.",
    img: "images/certs/cert_data_privacy.png"
  },
  {
    id: "cert-3",
    title: "DIGITAL CITIZENSHIP 101",
    issuer: "Department of Information and Communications Technology (DICT) - South Cotabato & ILCDB",
    date: "August 29, 2025",
    desc: "Certificate of Participation for actively participating in the 2-hour Virtual Information Session via Zoom Platform on promoting responsible digital citizenship and building safer digital communities.",
    img: "images/certs/cert_digital_citizenship.png"
  },
  {
    id: "cert-4",
    title: "HOUR OF CODE CAMPAIGN",
    issuer: "ASEAN Foundation & Break The Fake Movement (Supported by Google.org)",
    date: "August 16, 2025",
    desc: "Certificate of Participation for completing the Hour of Code Campaign as part of the AI Ready ASEAN Programme via Zoom.",
    img: "images/certs/cert_hour_of_code.png"
  },
  {
    id: "cert-5",
    title: "SERTIPIKO NG PAGLAHOK — PAGTATAYA 2.0",
    issuer: "Sultan Kudarat State University — Graduate School (MAT-Filipino)",
    date: "Agosto 17, 2025",
    desc: "Aktibong pakikilahok sa webinar: 'Pagtataya 2.0: Pagsasanib ng Teknolohiya at Malikhaing Interbensyon sa Silid-Aralan' sa SKSU ACCESS Campus.",
    img: "images/certs/cert_pagtataya.png"
  },
  {
    id: "cert-6",
    title: "INFORMATION TECHNOLOGY SPECIALIST — DATA ANALYTICS",
    issuer: "Certiport, CertNexus & Pearson Professional Assessments",
    date: "December 16, 2025",
    desc: "Completed certification requirements for IT Specialist in Data Analytics. Verification Code: wnr65-48Sy (verify.certiport.com).",
    img: "images/certs/cert_data_analytics.png"
  },
  {
    id: "cert-7",
    title: "CODECHUM C# PROGRAMMING 2 PASSER",
    issuer: "CodeChum Certification",
    date: "December 18, 2025",
    desc: "Verified proficiency in intermediate and advanced C# object-oriented programming, data structures, algorithms, and practical implementation.",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cert-8",
    title: "AI FOR BEGINNERS: AI IN INDUSTRIES",
    issuer: "Terra Hertz",
    date: "August 16, 2025",
    desc: "Certificate of Participation for completing the Live Webinar: 'AI for Beginners: AI in Industries: Real-World Applications' conducted by Terra Hertz. Validation ID: TERRAHERTZ - 000 000 000 461.",
    img: "images/certs/cert_ai_for_beginners.png"
  },
  {
    id: "cert-9",
    title: "CERTIFICATE OF COMPLETION (486 HOURS OJT)",
    issuer: "Infinitech Advertising Corporation",
    date: "April 17, 2026",
    desc: "Proudly presented to Lans Lorence N. Hernandez for successfully completing 486 hours of On-The-Job Training at Infinitech Advertising Corporation, Makati City.",
    img: "images/certs/cert_infinitech_completion.png"
  },
  {
    id: "cert-10",
    title: "PROJECT COMPLETION — ABIC REALTY SYSTEM",
    issuer: "Infinitech Advertising Corporation",
    date: "April 17, 2026",
    desc: "Certified that Lans Lorence N. Hernandez successfully completed the development of the project: ABIC Realty Admin & HR System at Infinitech Advertising Corporation.",
    img: "images/certs/cert_infinitech_project.png"
  }
];

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  initThemeEngine();
  handleUrlLoginRoute();
  applyStoredProfileToDOM();
  initNavbar();
  initScrollReveal();
  initTypewriter();
  initTiltCards();
  initPortfolioGallery();
  initCertificates();
  initContactForm();
  initAdminModals();
  initResumeDownload();
  initAdminEditorPage();
});

// --- 1. Enforced Cyber Dark Theme ---
function initThemeEngine() {
  document.documentElement.setAttribute("data-theme", "dark");
  if (document.body) document.body.setAttribute("data-theme", "dark");
  localStorage.setItem("portfolio_theme", "dark");
}

// --- 2. URL / Route Detection: Type /login in Search / URL Bar ---
function handleUrlLoginRoute() {
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();
  const search = window.location.search.toLowerCase();

  // Redirect to login.html if URL contains /login, ?login, or #login
  if ((path.endsWith("/login") || search.includes("login") || hash.includes("login")) && !path.endsWith("login.html")) {
    window.location.href = "login.html";
  }
}

// --- 3. Profile Information LocalStorage Retrieval & DOM Injection ---
// One-time migration: fix old bare image paths after folder reorganization
(function migrateStoredPaths() {
  try {
    const raw = localStorage.getItem("portfolio_profile");
    if (!raw) return;
    const data = JSON.parse(raw);
    let changed = false;
    // Fix profile picture path
    if (data.profilePicture === "profile_lans.png") {
      data.profilePicture = "images/profile_lans.png";
      changed = true;
    }
    if (changed) localStorage.setItem("portfolio_profile", JSON.stringify(data));
  } catch (e) {}
})();

function getStoredProfile() {
  const stored = localStorage.getItem("portfolio_profile");
  if (!stored) {
    localStorage.setItem("portfolio_profile", JSON.stringify(DEFAULT_PROFILE));
    return DEFAULT_PROFILE;
  }
  try {
    return { ...DEFAULT_PROFILE, ...JSON.parse(stored) };
  } catch (e) {
    return DEFAULT_PROFILE;
  }
}

function applyStoredProfileToDOM() {
  const profile = getStoredProfile();

  // Dynamic Profile Picture Updates
  const portraitImgs = document.querySelectorAll(".profile-portrait-img");
  portraitImgs.forEach(img => {
    if (profile.profilePicture) {
      img.src = profile.profilePicture;
      img.style.display = "block";
    } else {
      // Default placeholder if removed
      img.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";
    }
  });

  // Dynamic Names
  document.querySelectorAll(".profile-name-text").forEach(el => el.textContent = profile.name);
  document.querySelectorAll(".profile-phone-text").forEach(el => {
    el.textContent = profile.phone;
    if (el.tagName === "A") el.href = "tel:" + profile.phone.replace(/[^0-9+]/g, "");
  });
  document.querySelectorAll(".profile-email-text").forEach(el => {
    el.textContent = profile.email;
    if (el.tagName === "A") el.href = "mailto:" + profile.email;
  });
  document.querySelectorAll(".profile-location-text").forEach(el => el.textContent = profile.location);
  document.querySelectorAll(".profile-objective-text").forEach(el => el.textContent = profile.objective);
}

// --- 4. Navbar & Mobile Menu Handling ---
function initNavbar() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }
  });

  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }

    // Auto-close Bootstrap mobile menu on link click
    link.addEventListener("click", () => {
      const navCollapse = document.getElementById("portfolioNav");
      if (navCollapse && navCollapse.classList.contains("show") && window.bootstrap) {
        const bsCollapse = window.bootstrap.Collapse.getInstance(navCollapse) || new window.bootstrap.Collapse(navCollapse);
        bsCollapse.hide();
      }
    });
  });
}

// --- 5. Typewriter Effect ---
function initTypewriter() {
  const typewriterElement = document.getElementById("typewriter-text");
  if (!typewriterElement) return;

  const words = [
    "Full-Stack Web Developer",
    "BSIT Graduate (MinSU)",
    "Laravel & React.js Engineer",
    "Java NCIII & C# Certified",
    "Social Media & Growth VA",
    "Game UI/UX Trainee (Ollopa)"
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 90;
  const deletingSpeed = 45;
  const pauseEnd = 2000;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
      delay = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 500;
    }

    setTimeout(type, delay);
  }

  type();
}

// --- 6. Scroll Reveal Animations (IntersectionObserver) ---
function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          const skillBars = entry.target.querySelectorAll(".skill-fill");
          skillBars.forEach(bar => {
            const width = bar.getAttribute("data-width");
            if (width) bar.style.width = width;
          });
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach(el => observer.observe(el));
}

// --- 7. 3D Tilt & Parallax Micro-Interactions on Portrait & Cards ---
function initTiltCards() {
  const cards = document.querySelectorAll(".tilt-effect");
  const heroStage = document.querySelector(".hero-portrait-stage");
  const floatingLaptop = document.querySelector(".prop-floating-laptop");

  cards.forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)`;
    });
  });

  if (heroStage && floatingLaptop) {
    heroStage.addEventListener("mousemove", e => {
      const rect = heroStage.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;

      floatingLaptop.style.transform = `translate(${relX * 25}px, ${relY * 25}px)`;
    });

    heroStage.addEventListener("mouseleave", () => {
      floatingLaptop.style.transform = `translate(0px, 0px)`;
    });
  }
}

// --- 8. LocalStorage & Gallery Controller ---
const GALLERY_VERSION = "v2-tourism-2026"; // Bump this to force reset of gallery data

function getStoredProjects() {
  // Version check: if version doesn't match, reset to new DEFAULT_PROJECTS
  const storedVersion = localStorage.getItem("portfolio_gallery_version");
  if (storedVersion !== GALLERY_VERSION) {
    localStorage.setItem("portfolio_gallery", JSON.stringify(DEFAULT_PROJECTS));
    localStorage.setItem("portfolio_gallery_version", GALLERY_VERSION);
    return DEFAULT_PROJECTS;
  }
  const stored = localStorage.getItem("portfolio_gallery");
  if (!stored) {
    localStorage.setItem("portfolio_gallery", JSON.stringify(DEFAULT_PROJECTS));
    return DEFAULT_PROJECTS;
  }
  try {
    return JSON.parse(stored);
  } catch (e) {
    return DEFAULT_PROJECTS;
  }
}

function initPortfolioGallery() {
  const galleryGrid = document.getElementById("gallery-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  if (!galleryGrid) return;

  const projects = getStoredProjects();
  let currentFilter = "all";

  function render(filter = "all") {
    galleryGrid.innerHTML = "";
    const filtered = filter === "all" ? projects : projects.filter(p => p.category === filter);

    if (filtered.length === 0) {
      galleryGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 50px;">
          <p style="color: var(--text-muted); font-size: 1.1rem;">No items found under this category.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(item => {
      const card = document.createElement("div");
      card.className = "project-card reveal active";
      card.innerHTML = `
        <div class="project-media">
          <img src="${item.img}" alt="${escapeHtml(item.title)}" class="project-img" loading="lazy" />
          <div class="project-overlay">
            <button class="btn-cyber-primary py-2 px-3 view-lightbox-btn" style="font-size: 0.85rem;" data-img="${item.img}" data-title="${escapeHtml(item.title)}" data-desc="${escapeHtml(item.desc)}">
              <i class="fas fa-expand-arrows-alt"></i> Preview
            </button>
            ${item.link ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer" class="btn-cyber-secondary py-2 px-3" style="font-size: 0.85rem; margin-top: 8px; display: inline-flex; align-items: center; gap: 6px;">
              <i class="fas fa-external-link-alt"></i> Visit Site
            </a>` : ""}
          </div>
        </div>
        <div class="project-content">
          <span class="project-category">${escapeHtml(item.categoryLabel || item.category)}</span>
          <h3 class="h5 fw-bold text-white mb-2">${escapeHtml(item.title)}</h3>
          <p class="text-secondary small mb-3">${escapeHtml(item.desc)}</p>
          <div class="d-flex flex-wrap gap-2 mt-auto">
            ${(item.tags || []).map(t => `<span class="tag-pill">${escapeHtml(t)}</span>`).join("")}
          </div>
          ${item.link ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer" class="btn-cyber-primary py-2 px-4 mt-3 d-inline-flex align-items-center gap-2" style="font-size: 0.82rem;">
            <i class="fas fa-globe"></i> Visit Live Site
          </a>` : ""}
        </div>
      `;
      galleryGrid.appendChild(card);
    });

    galleryGrid.querySelectorAll(".view-lightbox-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        openLightbox(
          btn.getAttribute("data-img"),
          btn.getAttribute("data-title"),
          btn.getAttribute("data-desc")
        );
      });
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      render(currentFilter);
    });
  });

  render("all");
}

function openLightbox(imgSrc, title, desc) {
  const bsModalEl = document.getElementById("lightboxModalBootstrap");
  if (bsModalEl && window.bootstrap) {
    const bsImg = document.getElementById("lightboxImgBootstrap");
    const bsTitle = document.getElementById("lightboxTitleBootstrap");
    const bsDesc = document.getElementById("lightboxDescBootstrap");
    if (bsImg) bsImg.src = imgSrc;
    if (bsTitle) bsTitle.textContent = title;
    if (bsDesc) bsDesc.textContent = desc;
    const modalInstance = new bootstrap.Modal(bsModalEl);
    modalInstance.show();
    return;
  }

  const lightbox = document.getElementById("lightbox-modal");
  const lbImg = document.getElementById("lightbox-img");
  const lbTitle = document.getElementById("lightbox-title");
  const lbDesc = document.getElementById("lightbox-desc");

  if (!lightbox) return;
  lbImg.src = imgSrc;
  lbTitle.textContent = title;
  lbDesc.textContent = desc;

  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

// --- 9. Certificates Controller ---
function getStoredCertificates() {
  const stored = localStorage.getItem("portfolio_certificates");
  if (!stored) {
    localStorage.setItem("portfolio_certificates", JSON.stringify(DEFAULT_CERTIFICATES));
    return DEFAULT_CERTIFICATES;
  }
  try {
    return JSON.parse(stored);
  } catch (e) {
    return DEFAULT_CERTIFICATES;
  }
}

function initCertificates() {
  const certsGrid = document.getElementById("certs-grid");
  if (!certsGrid) return;

  // Bind lightbox clicks to all static and dynamic certificate cards
  certsGrid.querySelectorAll(".view-cert-lightbox-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      openLightbox(
        btn.getAttribute("data-img"),
        btn.getAttribute("data-title"),
        btn.getAttribute("data-desc")
      );
    });
  });

  initTiltCards();
}

// --- 10. Contact Form Handling ---
function initContactForm() {
  const form = document.getElementById("portfolio-contact-form");
  if (!form) return;

  const feedback = document.getElementById("form-feedback");

  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = form.querySelector("#name")?.value.trim();
    const email = form.querySelector("#email")?.value.trim();
    const subject = form.querySelector("#subject")?.value.trim();
    const message = form.querySelector("#message")?.value.trim();

    if (!name || !email || !subject || !message) {
      showFeedback("Please complete all fields before sending.", "error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFeedback("Please provide a valid email address.", "error");
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Transmitting...`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      showFeedback(`Thank you, ${name}! Your transmission has been sent successfully. Lans Lorence will reply to ${email} shortly.`, "success");
      form.reset();
    }, 1100);
  });

  function showFeedback(msg, type) {
    if (!feedback) return;
    feedback.textContent = msg;
    feedback.className = `alert ${type === "success" ? "alert-success" : "alert-danger"} text-start mb-3`;
    feedback.style.display = "block";
    feedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

// --- 11. Admin & LocalStorage Management Modal ---
function initAdminModals() {
  document.querySelectorAll(".modal").forEach(modal => {
    modal.addEventListener("click", e => {
      if (e.target === modal || e.target.classList.contains("modal-close-btn") || e.target.closest(".modal-close-btn")) {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    });
  });

  window.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal.active").forEach(m => m.classList.remove("active"));
      document.body.style.overflow = "auto";
    }
  });

  const adminBtn = document.getElementById("admin-modal-btn");
  const adminModal = document.getElementById("admin-modal");
  if (adminBtn && adminModal) {
    adminBtn.addEventListener("click", () => {
      adminModal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  // Add Project
  const addProjectForm = document.getElementById("add-project-form");
  if (addProjectForm) {
    addProjectForm.addEventListener("submit", e => {
      e.preventDefault();
      const title = document.getElementById("proj-title").value.trim();
      const category = document.getElementById("proj-category").value;
      const desc = document.getElementById("proj-desc").value.trim();
      const tags = document.getElementById("proj-tags").value.split(",").map(t => t.trim()).filter(Boolean);
      const fileInput = document.getElementById("proj-image-file");
      const urlInput = document.getElementById("proj-image-url").value.trim();

      const proceed = imgSrc => {
        const newProj = {
          id: "proj-" + Date.now(),
          title,
          category,
          categoryLabel: getCategoryLabel(category),
          desc,
          tags,
          img: imgSrc || "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
        };
        const list = getStoredProjects();
        list.unshift(newProj);
        localStorage.setItem("portfolio_gallery", JSON.stringify(list));
        alert("Project added successfully to LocalStorage!");
        adminModal.classList.remove("active");
        document.body.style.overflow = "auto";
        addProjectForm.reset();
        initPortfolioGallery();
      };

      if (fileInput && fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = evt => proceed(evt.target.result);
        reader.readAsDataURL(fileInput.files[0]);
      } else {
        proceed(urlInput);
      }
    });
  }

  // Add Certificate
  const addCertForm = document.getElementById("add-cert-form");
  if (addCertForm) {
    addCertForm.addEventListener("submit", e => {
      e.preventDefault();
      const title = document.getElementById("cert-title").value.trim();
      const issuer = document.getElementById("cert-issuer").value.trim();
      const date = document.getElementById("cert-date").value.trim();
      const desc = document.getElementById("cert-desc").value.trim();
      const fileInput = document.getElementById("cert-image-file");
      const urlInput = document.getElementById("cert-image-url").value.trim();

      const proceed = imgSrc => {
        const newCert = {
          id: "cert-" + Date.now(),
          title,
          issuer,
          date,
          desc,
          img: imgSrc || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
        };
        const list = getStoredCertificates();
        list.unshift(newCert);
        localStorage.setItem("portfolio_certificates", JSON.stringify(list));
        alert("Certificate added successfully to LocalStorage!");
        adminModal.classList.remove("active");
        document.body.style.overflow = "auto";
        addCertForm.reset();
        initCertificates();
      };

      if (fileInput && fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = evt => proceed(evt.target.result);
        reader.readAsDataURL(fileInput.files[0]);
      } else {
        proceed(urlInput);
      }
    });
  }

  // Reset defaults
  const resetBtn = document.getElementById("reset-storage-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("Reset gallery and certificates back to original resume defaults?")) {
        localStorage.removeItem("portfolio_gallery");
        localStorage.removeItem("portfolio_certificates");
        alert("Data reset to defaults.");
        location.reload();
      }
    });
  }
}

function getCategoryLabel(cat) {
  switch (cat) {
    case "web": return "Web Projects";
    case "graphics": return "Software & Desktop";
    case "promotional": return "Software & Scripts";
    default: return "Creative Project";
  }
}

// --- 12. Resume PDF Download / Print Trigger ---
function initResumeDownload() {
  const resumeBtn = document.getElementById("download-resume-btn");
  if (resumeBtn) {
    resumeBtn.addEventListener("click", e => {
      e.preventDefault();
      const pdfUrl = "resume/HERNANDEZ,%20LANS%20LORENCE%20_%20RESUME_UPDATED.pdf";
      
      // Try hidden iframe print first so the exact PDF is printed
      let printFrame = document.getElementById("resume-print-frame");
      if (!printFrame) {
        printFrame = document.createElement("iframe");
        printFrame.id = "resume-print-frame";
        printFrame.style.position = "fixed";
        printFrame.style.right = "0";
        printFrame.style.bottom = "0";
        printFrame.style.width = "0";
        printFrame.style.height = "0";
        printFrame.style.border = "0";
        document.body.appendChild(printFrame);
      }

      printFrame.src = pdfUrl;
      printFrame.onload = () => {
        try {
          printFrame.contentWindow.focus();
          printFrame.contentWindow.print();
        } catch (err) {
          // Fallback: open PDF in a new tab if iframe print is restricted by browser security
          window.open(pdfUrl, "_blank");
        }
      };
    });
  }
}

// --- 13. Admin Dashboard & Info Editor (login.html) Engine ---
function initAdminEditorPage() {
  const loginSection = document.getElementById("admin-login-section");
  const editorSection = document.getElementById("admin-editor-section");
  const loginForm = document.getElementById("admin-login-form");
  const loginAlert = document.getElementById("login-alert");
  const logoutBtn = document.getElementById("logout-btn");

  if (!loginSection || !editorSection) return;

  const ADMIN_USER = "admin";
  const DEFAULT_PASS = "admin123";

  function getStoredPassword() {
    return localStorage.getItem("portfolio_admin_password") || DEFAULT_PASS;
  }

  function isAuthenticated() {
    return sessionStorage.getItem("portfolio_auth_token") === "authenticated_lans";
  }

  function updateView() {
    if (isAuthenticated()) {
      loginSection.style.display = "none";
      editorSection.style.display = "block";
      if (logoutBtn) logoutBtn.style.display = "inline-flex";
      loadProfileIntoEditor();
      renderAdminCertificatesList();
    } else {
      loginSection.style.display = "block";
      editorSection.style.display = "none";
      if (logoutBtn) logoutBtn.style.display = "none";
    }
  }

  // Login handler
  if (loginForm) {
    loginForm.addEventListener("submit", e => {
      e.preventDefault();
      const user = document.getElementById("login-username").value.trim().toLowerCase();
      const pass = document.getElementById("login-password").value.trim();
      const storedPass = getStoredPassword();

      if ((user === "admin" || user === "lanslorence") && pass === storedPass) {
        sessionStorage.setItem("portfolio_auth_token", "authenticated_lans");
        if (loginAlert) loginAlert.style.display = "none";
        updateView();
      } else {
        if (loginAlert) {
          loginAlert.textContent = "Invalid credentials. Use admin / admin123";
          loginAlert.style.display = "block";
        }
      }
    });
  }

  // Logout handler
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      sessionStorage.removeItem("portfolio_auth_token");
      updateView();
    });
  }

  // Password update
  const changePassForm = document.getElementById("change-pass-form");
  if (changePassForm) {
    changePassForm.addEventListener("submit", e => {
      e.preventDefault();
      const newPass = document.getElementById("new-admin-password").value.trim();
      if (newPass.length < 4) {
        alert("Password must be at least 4 characters long.");
        return;
      }
      localStorage.setItem("portfolio_admin_password", newPass);
      alert("Admin password updated successfully in LocalStorage!");
      changePassForm.reset();
    });
  }

  // Populate Editor Inputs
  function loadProfileIntoEditor() {
    const profile = getStoredProfile();
    const setVal = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.value = val || "";
    };

    setVal("edit-name", profile.name);
    setVal("edit-phone", profile.phone);
    setVal("edit-email", profile.email);
    setVal("edit-location", profile.location);
    setVal("edit-objective", profile.objective);
    setVal("edit-tertiary-school", profile.tertiarySchool);
    setVal("edit-tertiary-degree", profile.tertiaryDegree);
    setVal("edit-experience-company", profile.experienceCompany);
    setVal("edit-experience-role", profile.experienceRole);
    setVal("edit-experience-desc", profile.experienceDesc);

    const preview = document.getElementById("edit-preview-profile");
    if (preview) {
      preview.src = profile.profilePicture || "images/profile_lans.png";
    }
  }

  // Profile Picture Upload
  const profileFileInput = document.getElementById("edit-profile-file");
  if (profileFileInput) {
    profileFileInput.addEventListener("change", () => {
      if (profileFileInput.files && profileFileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = e => {
          const profile = getStoredProfile();
          profile.profilePicture = e.target.result;
          localStorage.setItem("portfolio_profile", JSON.stringify(profile));
          const preview = document.getElementById("edit-preview-profile");
          if (preview) preview.src = e.target.result;
          applyStoredProfileToDOM();
          showEditorAlert("Profile picture updated and saved to LocalStorage!", "success");
        };
        reader.readAsDataURL(profileFileInput.files[0]);
      }
    });
  }

  // Profile Picture Removal
  const removePicBtn = document.getElementById("remove-profile-pic-btn");
  if (removePicBtn) {
    removePicBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to remove your profile picture?")) {
        const profile = getStoredProfile();
        profile.profilePicture = "";
        localStorage.setItem("portfolio_profile", JSON.stringify(profile));
        const preview = document.getElementById("edit-preview-profile");
        if (preview) preview.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";
        applyStoredProfileToDOM();
        showEditorAlert("Profile picture removed from LocalStorage.", "success");
      }
    });
  }

  // Save All Information Button
  const saveAllBtn = document.getElementById("save-all-info-btn");
  if (saveAllBtn) {
    saveAllBtn.addEventListener("click", () => {
      const getVal = id => document.getElementById(id)?.value.trim();
      const profile = getStoredProfile();

      profile.name = getVal("edit-name") || profile.name;
      profile.phone = getVal("edit-phone") || profile.phone;
      profile.email = getVal("edit-email") || profile.email;
      profile.location = getVal("edit-location") || profile.location;
      profile.objective = getVal("edit-objective") || profile.objective;
      profile.tertiarySchool = getVal("edit-tertiary-school") || profile.tertiarySchool;
      profile.tertiaryDegree = getVal("edit-tertiary-degree") || profile.tertiaryDegree;
      profile.experienceCompany = getVal("edit-experience-company") || profile.experienceCompany;
      profile.experienceRole = getVal("edit-experience-role") || profile.experienceRole;
      profile.experienceDesc = getVal("edit-experience-desc") || profile.experienceDesc;

      localStorage.setItem("portfolio_profile", JSON.stringify(profile));
      applyStoredProfileToDOM();
      showEditorAlert("All portfolio information successfully saved to LocalStorage!", "success");
    });
  }

  // Reset to Defaults Button
  const resetAllBtn = document.getElementById("reset-all-info-btn");
  if (resetAllBtn) {
    resetAllBtn.addEventListener("click", () => {
      if (confirm("Reset all profile information, picture, and certificates back to resume defaults?")) {
        localStorage.removeItem("portfolio_profile");
        localStorage.removeItem("portfolio_certificates");
        localStorage.removeItem("portfolio_gallery");
        alert("Information reset to original defaults.");
        location.reload();
      }
    });
  }

  // Certificates CRUD Management in Editor
  function renderAdminCertificatesList() {
    const listEl = document.getElementById("admin-certs-list");
    if (!listEl) return;

    const certs = getStoredCertificates();
    listEl.innerHTML = "";

    if (certs.length === 0) {
      listEl.innerHTML = `<p class="text-secondary small">No certificates currently saved.</p>`;
      return;
    }

    certs.forEach(cert => {
      const item = document.createElement("div");
      item.className = "d-flex align-items-center justify-content-between p-3 rounded-3";
      item.style.background = "rgba(255, 255, 255, 0.03)";
      item.style.border = "1px solid var(--glass-border)";

      item.innerHTML = `
        <div class="d-flex align-items-center gap-3">
          <img src="${cert.img}" alt="" style="width: 50px; height: 50px; border-radius: 8px; object-fit: cover;">
          <div>
            <h4 class="h6 fw-bold text-white mb-0">${escapeHtml(cert.title)}</h4>
            <span class="text-secondary small">${escapeHtml(cert.issuer)} &bull; ${escapeHtml(cert.date)}</span>
          </div>
        </div>
        <div class="d-flex gap-2">
          <button class="btn btn-sm btn-outline-info edit-cert-item-btn" data-id="${cert.id}">
            <i class="fas fa-edit"></i>
          </button>
          <button class="btn btn-sm btn-outline-danger delete-cert-item-btn" data-id="${cert.id}">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      `;
      listEl.appendChild(item);
    });

    // Delete cert
    listEl.querySelectorAll(".delete-cert-item-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        if (confirm("Delete this certificate permanently from LocalStorage?")) {
          const list = getStoredCertificates().filter(c => c.id !== id);
          localStorage.setItem("portfolio_certificates", JSON.stringify(list));
          renderAdminCertificatesList();
          initCertificates();
          showEditorAlert("Certificate deleted from LocalStorage.", "success");
        }
      });
    });

    // Edit cert
    listEl.querySelectorAll(".edit-cert-item-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const cert = getStoredCertificates().find(c => c.id === id);
        if (cert) openCertModal(cert);
      });
    });
  }

  // Modal open for Certificate Add/Edit
  const addCertBtn = document.getElementById("admin-add-cert-btn");
  if (addCertBtn) {
    addCertBtn.addEventListener("click", () => openCertModal());
  }

  function openCertModal(cert = null) {
    const modalEl = document.getElementById("certEditModal");
    if (!modalEl || !window.bootstrap) return;

    document.getElementById("modal-cert-id").value = cert ? cert.id : "";
    document.getElementById("modal-cert-title").value = cert ? cert.title : "";
    document.getElementById("modal-cert-issuer").value = cert ? cert.issuer : "";
    document.getElementById("modal-cert-date").value = cert ? cert.date : "";
    document.getElementById("modal-cert-desc").value = cert ? cert.desc : "";
    document.getElementById("modal-cert-url").value = cert ? cert.img : "";
    document.getElementById("certModalTitle").textContent = cert ? "Edit Certificate" : "Add Certificate";

    const modalInstance = new bootstrap.Modal(modalEl);
    modalInstance.show();
  }

  // Submit modal form
  const certEditorForm = document.getElementById("cert-editor-form");
  if (certEditorForm) {
    certEditorForm.addEventListener("submit", e => {
      e.preventDefault();
      const id = document.getElementById("modal-cert-id").value;
      const title = document.getElementById("modal-cert-title").value.trim();
      const issuer = document.getElementById("modal-cert-issuer").value.trim();
      const date = document.getElementById("modal-cert-date").value.trim();
      const desc = document.getElementById("modal-cert-desc").value.trim();
      const fileInput = document.getElementById("modal-cert-file");
      const urlInput = document.getElementById("modal-cert-url").value.trim();

      const proceed = imgSrc => {
        let list = getStoredCertificates();
        const finalImg = imgSrc || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80";

        if (id) {
          list = list.map(c => c.id === id ? { ...c, title, issuer, date, desc, img: finalImg } : c);
        } else {
          list.unshift({ id: "cert-" + Date.now(), title, issuer, date, desc, img: finalImg });
        }

        localStorage.setItem("portfolio_certificates", JSON.stringify(list));
        renderAdminCertificatesList();
        initCertificates();
        
        const modalEl = document.getElementById("certEditModal");
        const modalInstance = bootstrap.Modal.getInstance(modalEl);
        if (modalInstance) modalInstance.hide();
        showEditorAlert("Certificate saved successfully to LocalStorage!", "success");
        certEditorForm.reset();
      };

      if (fileInput && fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = evt => proceed(evt.target.result);
        reader.readAsDataURL(fileInput.files[0]);
      } else {
        proceed(urlInput);
      }
    });
  }

  function showEditorAlert(msg, type) {
    const alertEl = document.getElementById("editor-alert");
    if (!alertEl) return;
    alertEl.textContent = msg;
    alertEl.className = `alert alert-${type} text-start small mb-4`;
    alertEl.style.display = "block";
    alertEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
    setTimeout(() => { alertEl.style.display = "none"; }, 4000);
  }

  updateView();
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
