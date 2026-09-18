(() => {
  "use strict";

  const site = window.LUNAR_SITE || {};
  const allItems = Array.isArray(window.LUNAR_GALLERY) ? window.LUNAR_GALLERY : [];
  const validCategories = new Set(["cozinhas", "banheiros"]);
  const validFormats = new Set(["landscape", "portrait", "tall", "square"]);
  const items = allItems.filter(
    (item) =>
      item &&
      typeof item.id === "string" &&
      typeof item.image === "string" &&
      validCategories.has(item.category),
  );

  const state = {
    filter: "todos",
    visibleItems: items,
    activeIndex: 0,
  };

  const gallery = document.querySelector("#gallery-grid");
  const emptyState = document.querySelector("#empty-state");
  const lightbox = document.querySelector("#lightbox");
  const header = document.querySelector("[data-header]");

  const lightboxElements = {
    image: document.querySelector("#lightbox-image"),
    category: document.querySelector("#lightbox-category"),
    title: document.querySelector("#lightbox-title"),
    description: document.querySelector("#lightbox-description"),
    resources: document.querySelector("#lightbox-resources"),
    credit: document.querySelector("#lightbox-credit"),
    counter: document.querySelector("#lightbox-counter"),
    itemWhatsapp: document.querySelector(".js-item-whatsapp"),
  };

  function setSiteContent() {
    document.querySelectorAll("[data-site]").forEach((element) => {
      const key = element.dataset.site;
      if (typeof site[key] === "string" && site[key].trim()) {
        element.textContent = site[key];
      }
    });

    if (site.title && site.brandName) {
      document.title = `${site.title} | ${site.brandName} ${site.brandDescriptor || ""}`.trim();
    }

    const emailLink = document.querySelector("[data-site-email]");
    const email = site.contact?.email?.trim();
    if (emailLink && email) {
      emailLink.textContent = email;
      emailLink.href = `mailto:${email}`;
      emailLink.hidden = false;
    }
  }

  function normalizePhone(value) {
    return String(value || "").replace(/\D/g, "");
  }

  function createWhatsAppUrl(message) {
    const phone = normalizePhone(site.contact?.whatsappNumber);
    if (!phone) return "";
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }

  function configureContactLinks() {
    const defaultMessage =
      site.contact?.whatsappMessage ||
      "Olá! Gostaria de conversar sobre uma possibilidade para o meu projeto.";
    const url = createWhatsAppUrl(defaultMessage);

    document.querySelectorAll(".js-whatsapp").forEach((link) => {
      if (!url) {
        link.hidden = true;
        return;
      }
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    });
  }

  function categoryLabel(category) {
    return category === "cozinhas" ? "Cozinhas" : "Banheiros e Lavabos";
  }

  function createCard(item) {
    const card = document.createElement("button");
    card.className = "gallery-card";
    card.type = "button";
    card.dataset.id = item.id;
    card.dataset.category = item.category;
    card.dataset.format = validFormats.has(item.format) ? item.format : "landscape";
    card.setAttribute("aria-label", `Abrir referência: ${item.title || "Sem título"}`);

    const media = document.createElement("span");
    media.className = "gallery-card-media";

    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.alt || item.title || "Referência em Corian";
    image.loading = "lazy";
    image.decoding = "async";
    image.addEventListener("error", () => {
      card.classList.add("has-image-error");
      image.alt = `Imagem não encontrada: ${item.image}`;
    });

    const overlay = document.createElement("span");
    overlay.className = "gallery-card-overlay";

    const category = document.createElement("span");
    category.className = "gallery-card-category";
    category.textContent = categoryLabel(item.category);

    const titleRow = document.createElement("span");
    titleRow.className = "gallery-card-title";

    const title = document.createElement("strong");
    title.textContent = item.title || "Sem título";

    const arrow = document.createElement("span");
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "↗";

    titleRow.append(title, arrow);
    overlay.append(category, titleRow);
    media.append(image, overlay);
    card.append(media);
    card.addEventListener("click", () => openLightboxById(item.id));

    return card;
  }

  function renderGallery() {
    const fragment = document.createDocumentFragment();
    items.forEach((item) => fragment.append(createCard(item)));
    gallery.replaceChildren(fragment);
    updateCounts();
    applyFilter("todos", false);
  }

  function updateCounts() {
    const counts = {
      todos: items.length,
      cozinhas: items.filter((item) => item.category === "cozinhas").length,
      banheiros: items.filter((item) => item.category === "banheiros").length,
    };

    Object.entries(counts).forEach(([category, count]) => {
      document.querySelectorAll(`[data-count="${category}"]`).forEach((element) => {
        element.textContent = count;
      });
    });
  }

  function applyFilter(filter, shouldScroll = true) {
    const nextFilter = filter === "todos" || validCategories.has(filter) ? filter : "todos";
    state.filter = nextFilter;
    state.visibleItems =
      nextFilter === "todos" ? items : items.filter((item) => item.category === nextFilter);

    gallery.querySelectorAll(".gallery-card").forEach((card) => {
      card.hidden = nextFilter !== "todos" && card.dataset.category !== nextFilter;
    });

    document.querySelectorAll("[data-filter]").forEach((button) => {
      const isActive = button.dataset.filter === nextFilter;
      button.classList.toggle("is-active", isActive);
      if (button.classList.contains("filter-button")) {
        button.setAttribute("aria-pressed", String(isActive));
      }
    });

    emptyState.hidden = state.visibleItems.length > 0;

    if (shouldScroll) {
      document.querySelector("#galeria")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function updateLightbox() {
    const item = state.visibleItems[state.activeIndex];
    if (!item) return;

    lightboxElements.image.src = item.image;
    lightboxElements.image.alt = item.alt || item.title || "Referência em Corian";
    lightboxElements.category.textContent = categoryLabel(item.category);
    lightboxElements.title.textContent = item.title || "Sem título";
    lightboxElements.description.textContent = item.description || "";
    lightboxElements.counter.textContent = `${String(state.activeIndex + 1).padStart(2, "0")} / ${String(
      state.visibleItems.length,
    ).padStart(2, "0")}`;

    lightboxElements.resources.replaceChildren();
    const resources = Array.isArray(item.resources) ? item.resources : [];
    resources.forEach((resource) => {
      const li = document.createElement("li");
      li.textContent = resource;
      lightboxElements.resources.append(li);
    });
    lightboxElements.resources.hidden = resources.length === 0;

    const credit = String(item.credit || "").trim();
    lightboxElements.credit.textContent = credit;
    lightboxElements.credit.hidden = !credit;

    const itemMessage = `${
      site.contact?.whatsappMessage || "Olá! Gostaria de conversar sobre uma possibilidade para o meu projeto."
    }\n\nReferência: ${item.title || item.id}`;
    const itemUrl = createWhatsAppUrl(itemMessage);
    if (itemUrl) {
      lightboxElements.itemWhatsapp.hidden = false;
      lightboxElements.itemWhatsapp.href = itemUrl;
      lightboxElements.itemWhatsapp.target = "_blank";
      lightboxElements.itemWhatsapp.rel = "noopener noreferrer";
    } else {
      lightboxElements.itemWhatsapp.hidden = true;
    }
  }

  function openLightboxById(id) {
    const index = state.visibleItems.findIndex((item) => item.id === id);
    state.activeIndex = index >= 0 ? index : 0;
    updateLightbox();
    lightbox.showModal();
    document.body.classList.add("has-dialog");
  }

  function closeLightbox() {
    if (lightbox.open) lightbox.close();
  }

  function moveLightbox(direction) {
    const count = state.visibleItems.length;
    if (!count) return;
    state.activeIndex = (state.activeIndex + direction + count) % count;
    updateLightbox();
  }

  function bindEvents() {
    document.querySelectorAll("[data-filter]").forEach((button) => {
      button.addEventListener("click", () => applyFilter(button.dataset.filter));
    });

    document.querySelector("[data-lightbox-close]")?.addEventListener("click", closeLightbox);
    document
      .querySelector("[data-lightbox-previous]")
      ?.addEventListener("click", () => moveLightbox(-1));
    document
      .querySelector("[data-lightbox-next]")
      ?.addEventListener("click", () => moveLightbox(1));

    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) closeLightbox();
    });

    lightbox.addEventListener("close", () => {
      document.body.classList.remove("has-dialog");
    });

    document.addEventListener("keydown", (event) => {
      if (!lightbox.open) return;
      if (event.key === "ArrowLeft") moveLightbox(-1);
      if (event.key === "ArrowRight") moveLightbox(1);
    });

    const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 12);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
  }

  setSiteContent();
  configureContactLinks();
  renderGallery();
  bindEvents();
})();
