/**
 * BELLA GLAM — SITE CONFIG
 * El catálogo de productos ahora vive en config/catalog.js
 */

const SITE_CONFIG = {

  brand: {
    name: "BELLA GLAM",
    tagline: "Sutil. Radiante. Tú.",
    description: "Una línea de cosméticos curada para mujeres que aman la elegancia natural y el brillo auténtico.",
    city: "Ciudad del Este",
    country: "Paraguay",
    founded: "2024",
    whatsapp: "595986458117",
    whatsappMessage: "¡Hola! Quiero conocer más sobre la colección de Bella Glam.",
    address: "Tienda Online — Envíos a todo Paraguay",
    social: {
      instagram: "https://instagram.com/bellaglam.py",
      tiktok:    "https://tiktok.com/@bellaglam.py",
      facebook:  "https://facebook.com/bellaglam.py"
    }
  },

  seo: {
    title: "Bella Glam | Cosméticos elegantes en Paraguay",
    description: "Bella Glam es una línea de cosméticos curada en Ciudad del Este que combina elegancia, calidad y belleza consciente.",
    keywords: "maquillaje paraguay, cosméticos premium, bella glam, maquillaje elegante, labiales larga duración paraguay",
    ogImage: "assets/img/og-bella.jpg"
  },

  theme: {
    colorBg:           "#F6F1EF",
    colorBgSecondary:  "#EAD8D5",
    colorText:         "#2F2A28",
    colorTextMuted:    "#9B8E8A",
    colorAccent:       "#8F2F4A",
    colorAccentHover:  "#73243A",
    colorCard:         "#FFFFFF",
    colorBorder:       "rgba(155, 142, 138, 0.25)",
    fontDisplay:       "'Cormorant Garamond', serif",
    fontBody:          "'Montserrat', sans-serif",
    borderRadius:      "18px",
    transitionSpeed:   "0.4s"
  },

  navbar: {
    transparentOnTop: true,
    links: [
      { label: "Colección",  href: "#coleccion" },
      { label: "Esencia",    href: "#values" },
      { label: "Galería",    href: "#galeria" },
      { label: "Preguntas",  href: "#faq" },
      { label: "Contacto",   href: "#cta-final" }
    ],
    ctaLabel: "Ver más"
  },

  hero: {
    autoplayInterval: 6500,
    slides: [
      {
        image:        "assets/img/hero-bella-1.png",
        imageAlt:     "Modelo usando cosméticos Bella Glam",
        eyebrow:      "Tu ritual de elegancia diaria",
        title:        "La belleza no se aplica. Se despierta.",
        subtitle:     "Descubrí una colección pensada para mujeres que aman la naturalidad sofisticada y el brillo auténtico.",
        primaryCTA:   { label: "Ver Colección",  href: "#coleccion" },
        secondaryCTA: { label: "Nuestra Esencia", href: "#values" },
        microcopy:    "Cruelty Free • Pago Seguro • Envíos a todo Paraguay"
      }
    ]
  },

  /* ── PARALLAX BANNER (nueva sección) ── */
  parallaxBanner: {
    image:    "assets/img/hero-bella-1.png",
    eyebrow:  "Belleza Consciente",
    title:    "Cada producto cuenta una historia.",
    subtitle: "Seleccionamos con cuidado cada fórmula para que tu ritual diario sea un momento de elegancia pura.",
    cta: { label: "Conocé la colección", href: "#coleccion" }
  },
/* ── SPLIT FEATURE (nueva sección) ── */
splitFeature: {
  eyebrow: "Selección Premium",
  title:   "Lo mejor,\npara que brilles siempre.",
  points: [
    { icon: "✦", text: "Marcas reconocidas y productos originales" },
    { icon: "✦", text: "Selección cuidadosa según calidad y tendencia" },
    { icon: "✦", text: "Envíos rápidos a todo Paraguay" },
    { icon: "✦", text: "Asesoramiento personalizado por WhatsApp" }
  ],
  image:    "assets/img/gallery-1.jfif",
  imageAlt: "Productos de maquillaje seleccionados"
},

/* ── BRAND STRIP (nueva sección) ── */
brandStrip: {
  items: [
    "Productos Originales",
    "Pago Seguro",
    "Envíos Express",
    "Asesoría Personalizada",
    "Tendencias Actualizadas",
    "Calidad Garantizada"
  ]
},

  values: {
    title:    "Nuestra Esencia",
    subtitle: "Seleccionamos lo mejor del maquillaje global para ofrecerte una experiencia de belleza elegante, consciente y diseñada para resaltar tu autenticidad.",
    items: [
      {
        icon: "sparkle",
        title: "Curaduría Exclusiva",
        description: "No solo vendemos maquillaje; elegimos cuidadosamente cada producto para garantizar que resalte tu elegancia natural con resultados profesionales."
      },
      {
        icon: "leaf",
        title: "Compromiso Ético",
        description: "Priorizamos marcas que comparten nuestra visión de belleza libre de crueldad, para que cuides de ti misma mientras cuidas el entorno."
      },
      {
        icon: "shield",
        title: "Cercanía y Garantía",
        description: "Somos una tienda real para personas reales. Te acompañamos con asesoría personalizada, envíos seguros y total transparencia."
      }
    ]
  },

  gallery: {
    title:    "Momentos Bella Glam",
    subtitle: "Inspiración real para tu ritual diario.",
    autoplay: true,
    images: [
      { src: "assets/img/gallery-1.jfif", alt: "Maquillaje natural elegante" },
      { src: "assets/img/gallery-2.jfif", alt: "Detalle de labial tono berry" },
      { src: "assets/img/gallery-4.jfif", alt: "Texturas de base y polvo" },
      { src: "assets/img/gallery-5.jfif", alt: "Look de maquillaje para el día" },
      { src: "assets/img/gallery-6.jfif", alt: "Look de maquillaje para la noche" }
    ]
  },

  faq: {
    title:    "Preguntas Frecuentes",
    subtitle: "Queremos que tu experiencia sea clara y segura.",
    items: [
      { question: "¿Cómo elijo mi tono ideal?",                    answer: "Ofrecemos asesoramiento personalizado vía WhatsApp para ayudarte a encontrar tu match perfecto." },
      { question: "¿Realizan envíos a todo Paraguay?",             answer: "Sí. Trabajamos con transportadoras confiables para asegurar entregas rápidas y seguras." },
      { question: "¿Cuánto tarda en llegar mi pedido?",            answer: "Dentro de Ciudad del Este suele ser en el día. Para el resto del país, 24 a 48 horas hábiles." },
      { question: "¿Puedo cambiar un producto dañado?",            answer: "Tenés 24hs tras recibirlo para contactarnos y gestionamos el cambio sin costo adicional." },
      { question: "¿Qué métodos de pago aceptan?",                 answer: "Transferencias bancarias y pagos con tarjeta mediante plataforma segura." },
      { question: "¿Tienen tienda física?",                        answer: "Somos 100% online. Enviamos fotos y videos reales de cada producto por WhatsApp antes de comprar." }
    ]
  },

  cta: {
    title:       "Haz del brillo tu firma.",
    subtitle:    "Empieza tu experiencia Bella Glam hoy.",
    buttonLabel: "Hablar con una asesora",
    microTrust:  "Respuesta rápida • Atención personalizada • Compra protegida"
  },

  footer: {
    tagline: "Sutil. Radiante. Tú.",
    links: [
      { label: "Colección", href: "#coleccion" },
      { label: "Esencia",   href: "#values" },
      { label: "Galería",   href: "#galeria" },
      { label: "Preguntas", href: "#faq" }
    ],
    legal: "Todos los derechos reservados."
  }

};