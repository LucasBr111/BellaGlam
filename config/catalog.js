/**
 * catalog.js — CATÁLOGO REAL DE PRODUCTOS (REVENTA)
 * ─────────────────────────────────────────────────────────────────────────────
 * Basado en marcas líderes de alta rotación (Ruby Rose, Maybelline, Pink 21).
 * ─────────────────────────────────────────────────────────────────────────────
 */

const BELLA_CATALOG = {

  meta: {
    title: "La Colección",
    subtitle: "Maquillaje de alta gama y tendencia seleccionado para vos.",
    eyebrow: "Productos en Stock"
  },

  featured: ["base-soft-matte", "corrector-eraser", "paleta-sunset"],

  categories: [

    /* ── PIEL ── */
    {
      id: "piel",
      name: "Piel",
      description: "Bases y correctores para un acabado profesional.",
      products: [
        { id: "base-soft-matte",   name: "Base Soft Matte - Ruby Rose",   price: "Gs. 45.000", img: "assets/img/piel-1.jpg",  badge: "Top Ventas", description: "Control de oleosidad y alta cobertura." },
        { id: "corrector-eraser",  name: "Corrector Instant Eraser - Maybelline", price: "Gs. 85.000", img: "assets/img/piel-2.jpg",  badge: "Original",    description: "El corrector más famoso del mundo, trata y cubre." },
        { id: "base-stay-fix",     name: "Base Stay Fix - Ruby Rose",     price: "Gs. 55.000", img: "assets/img/piel-3.jpg",  badge: "Larga Duración", description: "Resistente al agua y de alta fijación." },
        { id: "primer-studio",     name: "Primer Studio Perfect - Ruby Rose", price: "Gs. 40.000", img: "assets/img/piel-4.jpg",  badge: null,          description: "Suaviza poros y líneas de expresión." },
        { id: "corrector-feels",   name: "Corrector Líquido Feels - Ruby Rose", price: "Gs. 35.000", img: "assets/img/piel-5.jpg",  badge: null,          description: "Textura cremosa y acabado aterciopelado." },
        { id: "bb-cream-loreal",   name: "BB Cream 5 en 1 - L'Oréal",     price: "Gs. 75.000", img: "assets/img/piel-6.jpg",  badge: "Cuidado",     description: "Hidrata, unifica y protege la piel." }
      ]
    },

    /* ── ACABADOS ── */
    {
      id: "acabados",
      name: "Acabados",
      description: "Sellado, contorno e iluminación.",
      products: [
        { id: "polvo-selfie",      name: "Polvo Traslúcido Selfie - Pink 21",  price: "Gs. 35.000", img: "assets/img/finish-1.jpg", badge: "Económico",   description: "Efecto mate sin reflejo en fotos." },
        { id: "paleta-sunset",     name: "Paleta Iluminadores Sunset - Ruby Rose", price: "Gs. 65.000", img: "assets/img/finish-2.jpg", badge: "Favorito",   description: "4 tonos de brillo intenso para resaltar." },
        { id: "rubor-pink21",      name: "Rubor Compacto New Face - Pink 21",  price: "Gs. 25.000", img: "assets/img/finish-3.jpg", badge: null,          description: "Pigmentación suave y natural." },
        { id: "polvo-banana",      name: "Polvo Banana Loose - Luisance",      price: "Gs. 40.000", img: "assets/img/finish-4.jpg", badge: null,          description: "Ideal para sellar el corrector sin cuartear." },
        { id: "fijador-glow",      name: "Fijador de Maquillaje Glow - Ruby Rose", price: "Gs. 45.000", img: "assets/img/finish-5.jpg", badge: "Nuevo",       description: "Larga duración con destellos de luz." },
        { id: "bronzer-melu",      name: "Bronzer Terracotta - Melu",          price: "Gs. 50.000", img: "assets/img/finish-6.jpg", badge: null,          description: "Define tus facciones con un tono cálido." }
      ]
    },

    /* ── LABIOS ── */
    {
      id: "labios",
      name: "Labios",
      description: "Color y volumen para cualquier ocasión.",
      products: [
        { id: "superstay-24h",     name: "Labial SuperStay 24h - Maybelline",  price: "Gs. 95.000", img: "assets/img/lips-1.jpg",   badge: "No Transfer",  description: "Color intacto que no se corre ni mancha." },
        { id: "gloss-jelly",       name: "Gloss Labial Jelly - Melu",          price: "Gs. 30.000", img: "assets/img/lips-2.jpg",   badge: "Tendencia",    description: "Brillo extremo con aroma frutal." },
        { id: "lip-tint",          name: "Tinta Labial Lip Tint - Ruby Rose",  price: "Gs. 25.000", img: "assets/img/lips-3.png",   badge: "Natural",      description: "Efecto labios mordidos de larga duración." },
        { id: "labial-feels",      name: "Labial Líquido Feels - Ruby Rose",   price: "Gs. 35.000", img: "assets/img/lips-4.png",   badge: null,          description: "Efecto mousse súper cómodo." },
        { id: "balm-pink21",       name: "Bálsamo Labial Hidratante - Pink 21", price: "Gs. 20.000", img: "assets/img/lips-5.jpeg",   badge: null,          description: "Protección y suavidad diaria." },
        { id: "delineador-luis",   name: "Delineador Retráctil - Luisance",    price: "Gs. 15.000", img: "assets/img/lips-6.png",   badge: null,          description: "Define el contorno con precisión." }
      ]
    }

  ]
};