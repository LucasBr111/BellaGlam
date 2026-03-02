/**
 * catalog.js — CATÁLOGO EXTERNO DE PRODUCTOS
 * ─────────────────────────────────────────────────────────────────────────────
 * Archivo independiente del SITE_CONFIG principal.
 * Permite mantener y escalar el catálogo sin tocar la configuración general.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const BELLA_CATALOG = {

  meta: {
    title: "La Colección",
    subtitle: "Productos seleccionados por su calidad, textura y acabado impecable.",
    eyebrow: "Productos Seleccionados"
  },

  featured: ["base-glow-satin", "matte-berry-bliss", "bronzer-terracotta"],

  categories: [

    /* ── PIEL ── */
    {
      id: "piel",
      name: "Piel",
      description: "Texturas ligeras, acabado natural.",
      products: [
        { id: "base-glow-satin",   name: "Base Glow Satín",   price: "Gs. 85.000", img: "assets/img/base-1.jpg",  badge: "Nuevo",      description: "Cobertura media con efecto luminoso natural." },
        { id: "corrector-velvet",  name: "Corrector Velvet",  price: "Gs. 45.000", img: "assets/img/base-2.jfif", badge: null,         description: "Fórmula cremosa de larga duración." },
        { id: "primer-luminous",   name: "Primer Luminous",   price: "Gs. 50.000", img: "assets/img/base-3.jfif", badge: null,         description: "Prepara la piel y prolonga el maquillaje." },
        { id: "bb-cream-radiance", name: "BB Cream Radiance", price: "Gs. 70.000", img: "assets/img/base-4.jfif", badge: "Top Venta",  description: "Hidratación + color en un solo paso." }
      ]
    },

    /* ── ACABADOS ── */
    {
      id: "acabados",
      name: "Acabados",
      description: "Sellado perfecto y sofisticado.",
      products: [
        { id: "polvo-translucido-hd",   name: "Polvo Translúcido HD",       price: "Gs. 60.000", img: "assets/img/polvo-1.jpg",  badge: null,       description: "Fija el maquillaje con acabado invisible." },
        { id: "bronzer-terracotta",     name: "Bronzer Terracotta",         price: "Gs. 75.000", img: "assets/img/polvo-2.jfif", badge: "Favorito", description: "Bronceado cálido y escultural." },
        { id: "iluminador-champagne",   name: "Iluminador Champagne Glow",  price: "Gs. 80.000", img: "assets/img/polvo-3.jfif", badge: null,       description: "Destellos dorados para la piel." },
        { id: "blush-rose-petal",       name: "Blush Rosé Petal",           price: "Gs. 65.000", img: "assets/img/polvo-4.jfif", badge: null,       description: "Rubor suave con pigmentación perfecta." },
        { id: "setting-spray",         name: "Setting Spray Fix & Glow",   price: "Gs. 55.000", img: "assets/img/polvo-5.jfif", badge: null,       description: "Fijador con acabado húmedo luminoso." },
        { id: "primer-luminous-2",     name: "Primer Luminous Pro",         price: "Gs. 55.000", img: "assets/img/polvo-6.jfif", badge: null,       description: "Versión profesional del primer clásico." }
      ]
    },

    /* ── LABIOS ── */
    {
      id: "labios",
      name: "Labios",
      description: "Tonos que elevan tu estilo.",
      products: [
        { id: "matte-berry-bliss",  name: "Matte Berry Bliss",  price: "Gs. 40.000", img: "assets/img/p-labial-1.jpg", badge: "Más Vendido", description: "Rojo berry intenso, finish matte sedoso." },
        { id: "gloss-rose-quartz",  name: "Gloss Rose Quartz",  price: "Gs. 35.000", img: "assets/img/p-labial-2.jpg", badge: null,          description: "Gloss cristalino con efecto voluminizador." }
      ]
    }

  ]
};