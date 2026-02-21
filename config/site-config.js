/**
 * BELLA GLAM — SITE CONFIG (Premium Structured Version)
 * ─────────────────────────────────────────────────────────────
 * Enfoque: Marca elegante, confianza inmediata y catálogo visual curado.
 * Identidad: Femenina sofisticada, limpia, moderna y consciente.
 * ─────────────────────────────────────────────────────────────
 */

const SITE_CONFIG = {

  /* ─────────────────────────────────────────────
   * BRAND CORE
   * ───────────────────────────────────────────── */
  brand: {
    name: "BELLA GLAM",
    tagline: "Sutil. Radiante. Tú.",
    description: "Una línea de cosméticos curada para mujeres que aman la elegancia natural y el brillo auténtico.",
    city: "Ciudad del Este",
    neighborhood: "Centro",
    country: "Paraguay",
    founded: "2024",
    whatsapp: "595986458117",
    whatsappMessage: "¡Hola! Quiero conocer más sobre la colección de Bella Glam.",
    address: "Tienda Online — Envíos a todo Paraguay",
    social: {
      instagram: "https://instagram.com/bellaglam.py",
      tiktok: "https://tiktok.com/@bellaglam.py",
      facebook: "https://facebook.com/bellaglam.py"
    }
  },

  /* ─────────────────────────────────────────────
   * SEO & META
   * ───────────────────────────────────────────── */
  seo: {
    title: "Bella Glam | Cosméticos elegantes en Paraguay",
    description: "Bella Glam es una línea de cosméticos curada en Ciudad del Este que combina elegancia, calidad y belleza consciente. Descubrí productos pensados para resaltar tu luz natural.",
    keywords: "maquillaje paraguay, cosméticos premium, bella glam, maquillaje elegante, labiales larga duración paraguay",
    ogImage: "assets/img/og-bella.jpg",
    structuredData: {
      type: "CosmeticsBrand",
      availability: "OnlineStore",
      country: "Paraguay"
    }
  },

  /* ─────────────────────────────────────────────
   * VISUAL THEME (Minimal Elegance)
   * ───────────────────────────────────────────── */
  theme: {
    colorBg: "#F6F1EF",
    colorBgSecondary: "#EAD8D5",
    colorText: "#2F2A28",
    colorTextMuted: "#9B8E8A",
    colorAccent: "#8F2F4A",
    colorAccentHover: "#73243A",
    colorCard: "#FFFFFF",
    colorBorder: "rgba(155, 142, 138, 0.25)",
    fontDisplay: "'Cormorant Garamond', serif",
    fontBody: "'Montserrat', sans-serif",
    borderRadius: "18px",
    shadowSoft: "0 10px 30px rgba(0,0,0,0.05)",
    shadowHover: "0 15px 40px rgba(0,0,0,0.08)",
    transitionSpeed: "0.4s",
    containerWidth: "1200px"
  },

  /* ─────────────────────────────────────────────
   * NAVIGATION
   * ───────────────────────────────────────────── */
  navbar: {
    transparentOnTop: true,
    blurOnScroll: true,
    links: [
      { label: "Colección", href: "#coleccion" },
      { label: "Esencia", href: "#esencia" },
      { label: "Galería", href: "#galeria" },
      { label: "Preguntas", href: "#faq" },
      { label: "Contacto", href: "#contacto" }
    ],
    ctaLabel: "Explorar Ahora"
  },

  /* ─────────────────────────────────────────────
   * HERO SECTION
   * ───────────────────────────────────────────── */
  hero: {
    layout: "fullscreen-slider",
    autoplayInterval: 6500,
    slides: [
      {
        image: "assets/img/hero-bella-1.png",
        imageAlt: "Modelo usando cosméticos Bella Glam",
        eyebrow: "Tu ritual de elegancia diaria",
        title: "La belleza no se aplica. Se despierta.",
        subtitle: "Descubrí una colección pensada para mujeres que aman la naturalidad sofisticada y el brillo auténtico.",
        primaryCTA: { label: "Ver Colección", href: "#coleccion" },
        secondaryCTA: { label: "Nuestra Esencia", href: "#esencia" },
        microcopy: "Cruelty Free • Pago Seguro • Envíos a todo Paraguay"
      }
    ]
  },

  /* ─────────────────────────────────────────────
   * BRAND VALUES (Sin testimonios)
   * ───────────────────────────────────────────── */
  values: {
    title: "Nuestra Esencia",
    subtitle: "Creemos en una belleza elegante, consciente y accesible.",
    items: [
      {
        icon: "sparkle",
        title: "Elegancia Natural",
        description: "Productos diseñados para resaltar tu belleza sin excesos."
      },
      {
        icon: "leaf",
        title: "Belleza Consciente",
        description: "Comprometidos con prácticas libres de crueldad animal."
      },
      {
        icon: "shield",
        title: "Confianza Real",
        description: "Pagos protegidos y envíos seguros a todo el país."
      }
    ]
  },

  /* ─────────────────────────────────────────────
   * PRODUCT COLLECTION
   * ───────────────────────────────────────────── */
  portfolio: {
    id: "coleccion",
    title: "La Colección",
    subtitle: "Productos seleccionados por su calidad, textura y acabado impecable.",
    layout: "grid-filtered",
    categories: [
      {
        id: "piel",
        name: "Piel",
        description: "Texturas ligeras, acabado natural.",
        products: [
          { name: "Base Glow Satín", price: "Gs. 85.000", img: "assets/img/base-1.jpg" },
          { name: "Corrector Velvet", price: "Gs. 45.000", img: "assets/img/base-2.jfif" },
          { name: "Primer Luminous", price: "Gs. 50.000", img: "assets/img/base-3.jfif" },
          { name: "BB Cream Radiance", price: "Gs. 70.000", img: "assets/img/base-4.jfif" }
        ]
      },
      {
        id: "acabados",
        name: "Acabados",
        description: "Sellado perfecto y sofisticado.",
        products: [
          { name: "Polvo Translúcido HD", price: "Gs. 60.000", img: "assets/img/polvo-1.jpg" },
          { name: "Bronzer Terracotta", price: "Gs. 75.000", img: "assets/img/polvo-2.jfif" },
          { name: "Iluminador Champagne Glow", price: "Gs. 80.000", img: "assets/img/polvo-3.jfif" },
          { name: "Blush Rosé Petal", price: "Gs. 65.000", img: "assets/img/polvo-4.jfif" },
          { name: "Setting Spray Fix & Glow", price: "Gs. 55.000", img: "assets/img/polvo-5.jfif" },
          { name: "Primer Luminous", price: "Gs. 50.000", img: "assets/img/polvo-6.jfif" }
        ]
      },
      {
        id: "labios",
        name: "Labios",
        description: "Tonos que elevan tu estilo.",
        products: [
          { name: "Matte Berry Bliss", price: "Gs. 40.000", img: "assets/img/p-labial-1.jpg" },
          { name: "Gloss Rose Quartz", price: "Gs. 35.000", img: "assets/img/p-labial-2.jpg" }
        ]
      }
    ]
  },

  /* ─────────────────────────────────────────────
   * MINI GALERÍA VISUAL (Reemplaza testimonios)
   * ───────────────────────────────────────────── */
  gallery: {
    id: "galeria",
    title: "Momentos Bella Glam",
    subtitle: "Inspiración real para tu ritual diario.",
    layout: "carousel-centered",
    autoplay: true,
    interval: 4000,
    images: [
      { src: "assets/img/gallery-1.jfif", alt: "Maquillaje natural elegante" },
      { src: "assets/img/gallery-2.jfif", alt: "Detalle de labial tono berry" },
      { src: "assets/img/gallery-4.jfif", alt: "Texturas de base y polvo" },
      { src: "assets/img/gallery-5.jfif", alt: "Look de maquillaje para el día" },
      { src: "assets/img/gallery-6.jfif", alt: "Look de maquillaje para la noche" }

    ]
  },

  /* ─────────────────────────────────────────────
   * FAQ
   * ───────────────────────────────────────────── */
  faq: {
    id: "faq",
    title: "Preguntas Frecuentes",
    subtitle: "Queremos que tu experiencia sea clara y segura.",
    items: [
      {
        question: "¿Cómo elijo mi tono ideal?",
        answer: "Ofrecemos asesoramiento personalizado vía WhatsApp para ayudarte a encontrar tu match perfecto."
      },
      {
        question: "¿Realizan envíos a todo Paraguay?",
        answer: "Sí. Trabajamos con transportadoras confiables para asegurar entregas rápidas y seguras."
      },
      {
        question: "¿Son productos cruelty free?",
        answer: "Sí. Creemos en una belleza consciente y libre de maltrato animal."
      },
      {
        question: "¿Qué métodos de pago aceptan?",
        answer: "Transferencias bancarias y pagos con tarjeta mediante plataforma segura."
      }
    ]
  },

  /* ─────────────────────────────────────────────
   * FINAL CTA
   * ───────────────────────────────────────────── */
  cta: {
    title: "Haz del brillo tu firma.",
    subtitle: "Empieza tu experiencia Bella Glam hoy.",
    buttonLabel: "Hablar con una asesora",
    microTrust: "Respuesta rápida • Atención personalizada • Compra protegida"
  },

  /* ─────────────────────────────────────────────
   * FOOTER
   * ───────────────────────────────────────────── */
  footer: {
    tagline: "Sutil. Radiante. Tú.",
    links: [
      { label: "Colección", href: "#coleccion" },
      { label: "Esencia", href: "#esencia" },
      { label: "Galería", href: "#galeria" },
      { label: "Preguntas", href: "#faq" }
    ],
    legal: "© 2024 Bella Glam — Ciudad del Este, Paraguay. Todos los derechos reservados."
  }

};