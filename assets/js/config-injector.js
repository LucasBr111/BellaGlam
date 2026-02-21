/**
 * config-injector.js — BELLA GLAM EDITION
 * ─────────────────────────────────────────────────────────────────────────────
 * Lee SITE_CONFIG e inyecta todo el contenido en el DOM.
 * Secciones: Hero Slider · Values · Colección con Tabs · Galería · FAQ · CTA · Footer
 * ─────────────────────────────────────────────────────────────────────────────
 */

const ConfigInjector = (() => {

  /* ──────────────────────────────────────────────────
     1. TEMA VISUAL → :root
  ────────────────────────────────────────────────── */
  function applyTheme() {
    const theme = SITE_CONFIG.theme;
    Object.entries(theme).forEach(([key, value]) => {
      const cssVar = '--' + key.replace(/([A-Z])/g, '-$1').toLowerCase();
      document.documentElement.style.setProperty(cssVar, value);
    });
  }

  /* ──────────────────────────────────────────────────
     2. SEO DINÁMICO → <head>
  ────────────────────────────────────────────────── */
  function injectSEO() {
    const { seo, brand } = SITE_CONFIG;
    document.title = seo.title;
    setMeta('description', seo.description);
    setMeta('keywords', seo.keywords);
    setMeta('robots', 'index, follow');
    setOG('og:type', 'website');
    setOG('og:title', seo.title);
    setOG('og:description', seo.description);
    setOG('og:locale', 'es_PY');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }

    injectSchema(buildFAQSchema());
  }

  function setMeta(name, content) {
    let el = document.querySelector(`meta[name="${name}"]`);
    if (!el) { el = document.createElement('meta'); el.name = name; document.head.appendChild(el); }
    el.content = content;
  }

  function setOG(property, content) {
    let el = document.querySelector(`meta[property="${property}"]`);
    if (!el) { el = document.createElement('meta'); el.setAttribute('property', property); document.head.appendChild(el); }
    el.content = content;
  }

  function injectSchema(schema) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema, null, 2);
    document.head.appendChild(script);
  }

  function buildFAQSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": SITE_CONFIG.faq.items.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": { "@type": "Answer", "text": item.answer }
      }))
    };
  }

  /* ──────────────────────────────────────────────────
     3. NAVBAR
  ────────────────────────────────────────────────── */
  function buildNavbar() {
    const { navbar, brand } = SITE_CONFIG;

    const logo = document.querySelector('.navbar-logo');
    if (logo) logo.textContent = brand.name;

    const navEl = document.querySelector('.navbar-nav');
    if (navEl) {
      navEl.innerHTML = navbar.links.map(link =>
        `<a href="${link.href}">${link.label}</a>`
      ).join('');
    }

    const modalLinks = document.querySelector('.navbar-modal-links');
    if (modalLinks) {
      modalLinks.innerHTML = navbar.links.map(link =>
        `<a href="${link.href}" class="navbar-modal-link">${link.label}</a>`
      ).join('');
    }

    const modalCta = document.querySelector('.navbar-modal-cta');
    if (modalCta) modalCta.textContent = navbar.ctaLabel;

    document.querySelectorAll('.navbar-cta').forEach(el => {
      el.textContent = navbar.ctaLabel;
    });

    const waUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(brand.whatsappMessage)}`;
    const navbarWa = document.getElementById('navbar-wa');
    if (navbarWa) navbarWa.href = waUrl;

    const modalWa = document.getElementById('modal-wa-link');
    if (modalWa) { modalWa.href = waUrl; modalWa.target = '_blank'; }

    const modalEmail = document.getElementById('modal-email-link');
    if (modalEmail) {
      if (brand.email) { modalEmail.href = `mailto:${brand.email}`; }
      else { modalEmail.style.display = 'none'; }
    }
  }

  /* ──────────────────────────────────────────────────
     4. HERO SLIDER (fullscreen)
  ────────────────────────────────────────────────── */
  function buildHero() {
    const { hero } = SITE_CONFIG;
    const track = document.querySelector('.hero-slider');
    if (!track) return;

    track.innerHTML = hero.slides.map((slide, i) => `
      <div class="hero-slide" role="group" aria-label="Slide ${i + 1} de ${hero.slides.length}">
        <img
          class="hero-slide-img"
          src="${slide.image}"
          alt="${slide.imageAlt}"
          ${i === 0 ? '' : 'loading="lazy"'}
          fetchpriority="${i === 0 ? 'high' : 'auto'}"
        >
        <div class="hero-slide-overlay" aria-hidden="true"></div>
        <div class="hero-slide-content ${i === 0 ? 'active' : ''}">
          <div class="hero-slide-inner">
            <span class="hero-eyebrow">${slide.eyebrow}</span>
            <h1 class="hero-title">${slide.title}</h1>
            <p class="hero-subtitle">${slide.subtitle}</p>
            <div class="hero-ctas">
              <a href="${slide.primaryCTA.href}" class="btn btn-primary btn-lg">
                ${slide.primaryCTA.label}
              </a>
              <a href="${slide.secondaryCTA.href}" class="btn btn-secondary">
                ${slide.secondaryCTA.label}
              </a>
            </div>
            ${slide.microcopy ? `<p class="hero-microcopy">${slide.microcopy}</p>` : ''}
          </div>
        </div>
      </div>
    `).join('');
  }

  /* ──────────────────────────────────────────────────
     5. BRAND VALUES (3 tarjetas con iconos SVG)
  ────────────────────────────────────────────────── */
  const SVG_ICONS = {
    sparkle: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.5 5h5l-4 3 1.5 5L12 13l-4 3 1.5-5-4-3h5z"/><path d="M5 3l.5 2h2l-1.5 1 .5 2L5 7l-1.5 1 .5-2L2.5 5h2z" opacity="0.5"/><path d="M19 17l.5 2h2l-1.5 1 .5 2L19 21l-1.5 1 .5-2-1.5-1h2z" opacity="0.5"/></svg>`,
    leaf: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
    shield: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`
  };

  function buildValues() {
    const { values } = SITE_CONFIG;

    const titleEl = document.querySelector('#values-title');
    const subtitleEl = document.querySelector('#values-subtitle');
    if (titleEl) titleEl.textContent = values.title;
    if (subtitleEl) subtitleEl.textContent = values.subtitle;

    const container = document.querySelector('.values-grid');
    if (!container) return;

    const fragment = document.createDocumentFragment();
    values.items.forEach((item, i) => {
      const card = document.createElement('article');
      card.className = 'value-card';
      card.setAttribute('data-reveal', 'up');
      card.setAttribute('data-reveal-delay', String(i * 120));
      card.innerHTML = `
        <div class="value-icon" aria-hidden="true">
          ${SVG_ICONS[item.icon] || ''}
        </div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      `;
      fragment.appendChild(card);
    });
    container.appendChild(fragment);
  }

  /* ──────────────────────────────────────────────────
     6. COLECCIÓN CON TABS FILTRADAS
  ────────────────────────────────────────────────── */
  function buildCollection() {
    const { portfolio, brand } = SITE_CONFIG;

    const titleEl = document.querySelector('#collection-title');
    const subtitleEl = document.querySelector('#collection-subtitle');
    if (titleEl) titleEl.textContent = portfolio.title;
    if (subtitleEl) subtitleEl.textContent = portfolio.subtitle;

    const container = document.querySelector('#collection-container');
    if (!container) return;

    // --- Tabs HTML ---
    const tabsHTML = portfolio.categories.map((cat, i) =>
      `<button class="tab-btn ${i === 0 ? 'active' : ''}" data-category="${cat.id}">${cat.name}</button>`
    ).join('');

    // --- Products HTML (todos renderizados, filtrados por CSS/JS) ---
    const fragment = document.createDocumentFragment();
    const wrapper = document.createElement('div');

    const allProducts = [];
    portfolio.categories.forEach(cat => {
      cat.products.forEach(prod => {
        allProducts.push({ ...prod, catId: cat.id });
      });
    });

    const productsHTML = allProducts.map((prod, i) => {
      const waMsg = encodeURIComponent(`¡Hola! Me interesa el producto: *${prod.name}* (${prod.price}). ¿Tienen disponibilidad?`);
      const waUrl = `https://wa.me/${brand.whatsapp}?text=${waMsg}`;
      return `
        <article class="product-card" data-cat="${prod.catId}" data-reveal="up" data-reveal-delay="${(i % 4) * 80}">
          <div class="product-img-box">
            <img src="${prod.img}" alt="${prod.name}" loading="lazy" decoding="async">
            <div class="product-img-overlay" aria-hidden="true"></div>
          </div>
          <div class="product-info">
            <h3 class="product-name">${prod.name}</h3>
            <p class="product-price">${prod.price}</p>
            <a
              href="${waUrl}"
              class="btn-product"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Consultar por ${prod.name} vía WhatsApp"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.528 5.845L0 24l6.335-1.652A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
              Consultar
            </a>
          </div>
        </article>
      `;
    }).join('');

    wrapper.innerHTML = `
      <div class="tabs-wrapper" role="tablist" aria-label="Categorías de productos">
        ${tabsHTML}
      </div>
      <div class="products-grid">
        ${productsHTML}
      </div>
    `;

    // Limpiar fragment y mover children
    while (wrapper.firstChild) fragment.appendChild(wrapper.firstChild);
    container.appendChild(fragment);

    // --- Lógica de Tabs ---
    requestAnimationFrame(() => {
      const tabs = container.querySelectorAll('.tab-btn');
      const cards = container.querySelectorAll('.product-card');

      function filterByCategory(catId) {
        cards.forEach(card => {
          const matches = catId === 'all' || card.dataset.cat === catId;
          card.style.display = matches ? '' : 'none';
        });
        // Re-trigger scroll reveal para los nuevos visibles
        document.dispatchEvent(new CustomEvent('revealReset'));
      }

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
          tab.classList.add('active');
          tab.setAttribute('aria-selected', 'true');
          filterByCategory(tab.dataset.category);
        });
        tab.setAttribute('role', 'tab');
        tab.setAttribute('aria-selected', tab.classList.contains('active') ? 'true' : 'false');
      });

      // Mostrar primera categoría por defecto
      if (portfolio.categories.length > 0) {
        filterByCategory(portfolio.categories[0].id);
      }
    });
  }

  /* ──────────────────────────────────────────────────
     7. GALERÍA CAROUSEL (infinito)
  ────────────────────────────────────────────────── */
  function buildGallery() {
    const { gallery } = SITE_CONFIG;

    const titleEl = document.querySelector('#gallery-title');
    const subtitleEl = document.querySelector('#gallery-subtitle');
    if (titleEl) titleEl.textContent = gallery.title;
    if (subtitleEl) subtitleEl.textContent = gallery.subtitle;

    const track = document.querySelector('.gallery-track');
    if (!track) return;

    // Duplicar imágenes para efecto infinito
    const imgs = [...gallery.images, ...gallery.images];
    track.innerHTML = imgs.map(img => `
      <div class="gallery-item">
        <img src="${img.src}" alt="${img.alt}" loading="lazy" decoding="async">
      </div>
    `).join('');

    // Autoplay con JS si está activado
    if (!gallery.autoplay) return;

    let position = 0;
    const itemWidth = 320 + 16; // width + gap
    const totalItems = gallery.images.length;

    function autoScroll() {
      position += 0.6;
      if (position >= itemWidth * totalItems) position = 0;
      track.style.transform = `translateX(-${position}px)`;
      requestAnimationFrame(autoScroll);
    }

    // Pausar en hover
    track.parentElement.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
    track.parentElement.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');

    // Usar CSS animation en vez de JS para mejor performance
    track.style.animation = `galleryScroll ${gallery.images.length * 3}s linear infinite`;
  }

  /* ──────────────────────────────────────────────────
     8. FAQ ACCORDION
  ────────────────────────────────────────────────── */
  function buildFAQ() {
    const { faq } = SITE_CONFIG;

    const titleEl = document.querySelector('#faq-title');
    const subtitleEl = document.querySelector('#faq-subtitle');
    if (titleEl) titleEl.textContent = faq.title;
    if (subtitleEl) subtitleEl.textContent = faq.subtitle;

    const container = document.querySelector('.faq-list');
    if (!container) return;

    const fragment = document.createDocumentFragment();
    faq.items.forEach((item, i) => {
      const div = document.createElement('div');
      div.className = 'faq-item';
      div.setAttribute('data-reveal', 'up');
      div.setAttribute('data-reveal-delay', String(i * 60));
      div.innerHTML = `
        <button
          class="faq-question"
          aria-expanded="false"
          aria-controls="faq-answer-${i}"
          id="faq-question-${i}"
        >
          <span>${item.question}</span>
          <span class="faq-icon" aria-hidden="true">+</span>
        </button>
        <div
          class="faq-answer"
          id="faq-answer-${i}"
          role="region"
          aria-labelledby="faq-question-${i}"
        >
          <div class="faq-answer-inner">
            <p>${item.answer}</p>
          </div>
        </div>
      `;
      fragment.appendChild(div);
    });
    container.appendChild(fragment);
  }

  /* ──────────────────────────────────────────────────
     9. CTA FINAL
  ────────────────────────────────────────────────── */
  function buildCTAFinal() {
    const { cta, brand } = SITE_CONFIG;

    const titleEl = document.querySelector('#cta-title');
    const subtitleEl = document.querySelector('#cta-subtitle');
    const btnEl = document.querySelector('#cta-btn');
    const proofEl = document.querySelector('#cta-social-proof');

    if (titleEl) titleEl.textContent = cta.title;
    if (subtitleEl) subtitleEl.textContent = cta.subtitle;
    if (proofEl) proofEl.textContent = cta.microTrust;

    if (btnEl) {
      btnEl.textContent = cta.buttonLabel;
      btnEl.addEventListener('click', (e) => {
        e.preventDefault();
        const msg = encodeURIComponent(brand.whatsappMessage);
        window.open(`https://wa.me/${brand.whatsapp}?text=${msg}`, '_blank', 'noopener');
      });
    }
  }

  /* ──────────────────────────────────────────────────
     10. FOOTER
  ────────────────────────────────────────────────── */
  function buildFooter() {
    const { footer, brand } = SITE_CONFIG;

    const logoEl = document.querySelector('.footer-logo');
    const taglineEl = document.querySelector('.footer-tagline');
    if (logoEl) logoEl.textContent = brand.name;
    if (taglineEl) taglineEl.textContent = footer.tagline;

    const navEl = document.querySelector('.footer-nav');
    if (navEl) {
      navEl.innerHTML = footer.links.map(link =>
        `<a href="${link.href}">${link.label}</a>`
      ).join('');
    }

    const socialEl = document.querySelector('.footer-social');
    if (socialEl) {
      const icons = {
        instagram: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
        facebook: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
        tiktok: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`
      };

      const socialLinks = Object.entries(brand.social)
        .filter(([, url]) => url)
        .map(([platform, url]) => `
          <a href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${platform}">
            ${icons[platform] || platform}
          </a>
        `).join('');
      socialEl.innerHTML = socialLinks;
    }

    const year = new Date().getFullYear();
    const copyrightEl = document.querySelector('.footer-copyright');
    if (copyrightEl) copyrightEl.textContent = `© ${year} ${brand.name}. ${footer.legal}`;
  }

  /* ──────────────────────────────────────────────────
     11. WHATSAPP FLOTANTE
  ────────────────────────────────────────────────── */
  function buildWhatsApp() {
    const container = document.getElementById('whatsapp-float');
    if (!container) return;
    const { brand } = SITE_CONFIG;
    const msg = encodeURIComponent(brand.whatsappMessage);
    const url = `https://wa.me/${brand.whatsapp}?text=${msg}`;
    container.innerHTML = `
      <span class="whatsapp-tooltip" aria-hidden="true">¡Escribinos!</span>
      <a href="${url}" class="whatsapp-btn" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.528 5.845L0 24l6.335-1.652A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
        </svg>
      </a>
    `;
    setTimeout(() => { container.style.opacity = '1'; }, 1500);
  }

  /* ──────────────────────────────────────────────────
     INIT — Punto de entrada
  ────────────────────────────────────────────────── */
  function init() {
    applyTheme();
    buildNavbar();
    buildHero();

    requestAnimationFrame(() => {
      injectSEO();
      buildValues();
      buildCollection();
      buildGallery();
      buildFAQ();
      buildCTAFinal();
      buildFooter();
      buildWhatsApp();

      document.dispatchEvent(new CustomEvent('configInjected'));
    });
  }

  return { init };

})();