/* ==========================================================================
   PORTFÓLIO — MARIA EDUARDA
   Scripts de interação. Cada bloco é independente e comentado.
   ========================================================================== */

/* --------------------------------------------------------------------------
   CONFIGURAÇÃO
   Coloque aqui o seu número de WhatsApp, só com números:
   código do país (55) + DDD + número. Exemplo: "5583999999999"
   -------------------------------------------------------------------------- */
const WHATSAPP_NUMBER = "(55) 83 9 91302525";
const WHATSAPP_MESSAGE =
  "Olá, Maria Eduarda! Vi seu portfólio e gostaria de conversar.";

/* -------------------------------------------------------------------------- */

document.documentElement.classList.remove("no-js");

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

/* 1. Cabeçalho: muda o fundo ao rolar a página ----------------------------- */
const header = document.getElementById("header");

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

/* 2. Menu mobile (abrir/fechar) -------------------------------------------- */
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

function setMenu(open) {
  nav.classList.toggle("is-open", open);
  header.classList.toggle("menu-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
}

navToggle.addEventListener("click", () => {
  setMenu(!nav.classList.contains("is-open"));
});

// Fecha o menu ao clicar em um link, fora dele ou ao apertar Esc
nav
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", () => setMenu(false)));

document.addEventListener("click", (e) => {
  if (!header.contains(e.target)) setMenu(false);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenu(false);
});

/* 3. Destaca no menu a seção que está visível ------------------------------ */
const navLinks = document.querySelectorAll(".nav__link");
const sections = document.querySelectorAll("main section[id]");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle(
          "is-active",
          link.getAttribute("href") === `#${entry.target.id}`,
        );
      });
    });
  },
  { rootMargin: "-45% 0px -50% 0px" },
);

sections.forEach((section) => sectionObserver.observe(section));

/* 4. Animação de entrada dos elementos (.reveal) --------------------------- */
const revealEls = document.querySelectorAll(".reveal");

// Pequeno atraso em cascata para itens irmãos (cards de um mesmo grid)
revealEls.forEach((el) => {
  const siblings = Array.from(el.parentElement.children).filter((c) =>
    c.classList.contains("reveal"),
  );
  const index = siblings.indexOf(el);
  if (index > 0)
    el.style.setProperty("--delay", `${Math.min(index * 0.07, 0.5)}s`);
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

revealEls.forEach((el) => revealObserver.observe(el));

/* 5. Efeito de digitação no "Hello World!" --------------------------------- */
const typedEl = document.getElementById("typed");

if (typedEl && !prefersReducedMotion) {
  const text = typedEl.dataset.text;
  typedEl.textContent = "";
  let i = 0;

  setTimeout(function type() {
    typedEl.textContent = text.slice(0, ++i);
    if (i < text.length) setTimeout(type, 90);
  }, 500);
}

/* 6. Luz que segue o mouse nos cards de projeto ---------------------------- */
document.querySelectorAll(".project").forEach((card) => {
  card.addEventListener("pointermove", (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  });
});

/* 7. Toast (aviso rápido na parte de baixo da tela) ------------------------ */
const toast = document.getElementById("toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 3200);
}

/* 8. Link do WhatsApp ------------------------------------------------------ */
const whatsappLink = document.getElementById("whatsappLink");
const phone = WHATSAPP_NUMBER.replace(/\D/g, "");

if (phone) {
  whatsappLink.href = `https://wa.me/${phone}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
} else {
  // Enquanto o número não for configurado, evita um link quebrado
  whatsappLink.removeAttribute("target");
  whatsappLink.addEventListener("click", (e) => {
    e.preventDefault();
    showToast(
      "WhatsApp em breve! Enquanto isso, me chame pelo LinkedIn ou e-mail.",
    );
  });
}

/* 9. Ano automático no rodapé ---------------------------------------------- */
document.getElementById("year").textContent = new Date().getFullYear();
