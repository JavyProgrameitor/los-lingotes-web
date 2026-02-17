export type Categoria = "Adultos" | "Infantil";
export type TipoPremio = "premio" | "accesit" | "especial";

export type PalmaresEntry = {
  year: number;
  categoria: Categoria;
  /** 'premio' = puesto (1º,2º,3º,5º...), 'accesit' = nº de accésit (2º,11º...), 'especial' = mención especial */
  tipo: TipoPremio;
  /** Para 'premio' y 'accesit' */
  numero?: number;
  /** Texto a mostrar (ej: '1º Premio', '11º Accésit', 'Mejor Comparsa Novel') */
  titulo: string;
  /** Notas tipo '(compartido)' */
  nota?: string;
  /** Fuente (con comentario corto + iconos) */
  fuente: string;
};

export const palmares: PalmaresEntry[] = [
  // =======================
  // Adultos
  // =======================
  {
    year: 1996,
    categoria: "Adultos",
    tipo: "especial",
    titulo: "Mejor Comparsa Novel",
    fuente: "🎭 Carnaval de Badajoz · Debut con premio: ¡menuda entrada! ✨",
  },
  {
    year: 1997,
    categoria: "Adultos",
    tipo: "accesit",
    numero: 11,
    titulo: "11º Accésit",
    fuente: "⭐ Carnaval de Badajoz · Primeros pasos y ya dando guerra 💪",
  },
  {
    year: 1998,
    categoria: "Adultos",
    tipo: "accesit",
    numero: 4,
    titulo: "4º Accésit",
    fuente:
      "⭐ Carnaval de Badajoz · Subiendo posiciones… se venía algo grande 👀",
  },
  {
    year: 1999,
    categoria: "Adultos",
    tipo: "accesit",
    numero: 11,
    titulo: "11º Accésit",
    fuente: "⭐ Carnaval de Badajoz · Constancia de comparsa seria 🎺",
  },
  {
    year: 2000,
    categoria: "Adultos",
    tipo: "accesit",
    numero: 13,
    titulo: "13º Accésit",
    fuente: "⭐ Carnaval de Badajoz · Año de pelea y aprendizaje 🔧",
  },
  {
    year: 2002,
    categoria: "Adultos",
    tipo: "accesit",
    numero: 2,
    titulo: "2º Accésit",
    fuente:
      "⭐⭐ Carnaval de Badajoz · Cerca del podio… ¡se notaba el salto! 🔥",
  },
  {
    year: 2003,
    categoria: "Adultos",
    tipo: "premio",
    numero: 5,
    titulo: "5º Premio",
    fuente: "🏆 Carnaval de Badajoz · Top 5: ya olía a final grande 🎭",
  },
  {
    year: 2004,
    categoria: "Adultos",
    tipo: "accesit",
    numero: 4,
    titulo: "4º Accésit",
    fuente:
      "⭐⭐⭐⭐ Carnaval de Badajoz · Manteniendo nivel y estilo propio ✨",
  },
  {
    year: 2006,
    categoria: "Adultos",
    tipo: "accesit",
    numero: 10,
    titulo: "10º Accésit",
    fuente:
      "⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ Carnaval de Badajoz · Año de rodaje y equipo 🚀",
  },
  {
    year: 2007,
    categoria: "Adultos",
    tipo: "premio",
    numero: 1,
    titulo: "1º Premio",
    fuente: "🏆🏆🏆 Carnaval de Badajoz · CAMPEONES del Gran Desfile 👑",
  },
  {
    year: 2008,
    categoria: "Adultos",
    tipo: "accesit",
    numero: 2,
    titulo: "2º Accésit",
    fuente: "⭐⭐ Carnaval de Badajoz · Después del título… seguís arriba 💛🖤",
  },
  {
    year: 2009,
    categoria: "Adultos",
    tipo: "premio",
    numero: 5,
    titulo: "5º Premio",
    fuente: "🏆 Carnaval de Badajoz · Otro Top 5: competitivos siempre 🎶",
  },
  {
    year: 2010,
    categoria: "Adultos",
    tipo: "accesit",
    numero: 1,
    titulo: "1º Accésit",
    nota: "(compartido)",
    fuente:
      "🥇⭐ Ayuntamiento/Carnaval · 1º Accésit compartido: año potente 🤝",
  },
  {
    year: 2011,
    categoria: "Adultos",
    tipo: "premio",
    numero: 5,
    titulo: "5º Premio",
    fuente: "🏆 Carnaval de Badajoz · Seguís en la zona noble 💥",
  },
  {
    year: 2012,
    categoria: "Adultos",
    tipo: "accesit",
    numero: 11,
    titulo: "11º Accésit",
    fuente: "⭐ Carnaval de Badajoz · Año de trabajo de base y cantera 🔩",
  },
  {
    year: 2013,
    categoria: "Adultos",
    tipo: "accesit",
    numero: 2,
    titulo: "2º Accésit",
    fuente:
      "⭐⭐ Carnaval de Badajoz · A un pasito del podio… tensión máxima 😤",
  },
  {
    year: 2014,
    categoria: "Adultos",
    tipo: "premio",
    numero: 5,
    titulo: "5º Premio",
    fuente: "🏆 Carnaval de Badajoz · Regularidad de equipo grande ✅",
  },
  {
    year: 2015,
    categoria: "Adultos",
    tipo: "premio",
    numero: 3,
    titulo: "3º Premio",
    fuente: "🏆🏆🏆 El Estribillo/Carnaval · Podio: BRONCE con mérito 🥉",
  },
  {
    year: 2016,
    categoria: "Adultos",
    tipo: "accesit",
    numero: 3,
    titulo: "3º Accésit",
    fuente: "⭐⭐⭐ Carnaval de Badajoz · En la pelea otra vez… 💣",
  },
  {
    year: 2017,
    categoria: "Adultos",
    tipo: "premio",
    numero: 1,
    titulo: "1º Premio",
    fuente: "🏆🏆🏆 Carnaval de Badajoz · CAMPEONES otra vez. Historia 💛🖤",
  },
  {
    year: 2018,
    categoria: "Adultos",
    tipo: "premio",
    numero: 3,
    titulo: "3º Premio",
    fuente: "🏆🏆🏆 El Estribillo/Carnaval · Otro podio: arriba del todo 🔥",
  },
  {
    year: 2019,
    categoria: "Adultos",
    tipo: "premio",
    numero: 1,
    titulo: "1º Premio",
    fuente: "🏆🏆🏆 Carnaval de Badajoz · Triplete de títulos… locura total 👑",
  },
  {
    year: 2020,
    categoria: "Adultos",
    tipo: "premio",
    numero: 2,
    titulo: "2º Premio",
    fuente: "🏆🏆 Carnaval de Badajoz · Subcampeones: a nada del oro 🥈",
  },
  {
    year: 2022,
    categoria: "Adultos",
    tipo: "premio",
    numero: 1,
    titulo: "1º Premio",
    fuente: "🏆🏆🏆 El Estribillo/Carnaval · Vuelta al trono. Campeones 👑",
  },

  // ⚠️ Estos 2023-2025 los dejo EXACTOS como los has puesto tú
  {
    year: 2023,
    categoria: "Adultos",
    tipo: "premio",
    numero: 2,
    titulo: "2º Premio",
    fuente: "🏆🏆  Clasificación · Año redondo: casi primer puesto 💥",
  },
  {
    year: 2024,
    categoria: "Adultos",
    tipo: "premio",
    numero: 2,
    titulo: "2º Premio",
    fuente: "🏆🏆 Clasificación · Otro año en la élite: subcampeones 🥈",
  },
  {
    year: 2025,
    categoria: "Adultos",
    tipo: "premio",
    numero: 5,
    titulo: "5º Premio",
    fuente: "🏆 Clasificación · Top 5: seguir arriba siempre cuenta 💪",
  },
  {
    year: 2026,
    categoria: "Adultos",
    tipo: "premio",
    numero: 1,
    titulo: "1º Premio",
    fuente: "🏆 Merecido primer premio del carnaval 💪",
  },

  // =======================
  // Infantil
  // =======================
  {
    year: 2011,
    categoria: "Infantil",
    tipo: "premio",
    numero: 2,
    titulo: "2º Premio infantil",
    fuente: "🏆🏆 Carnaval de Badajoz · La cantera ya apuntaba alto 🌱",
  },
  {
    year: 2012,
    categoria: "Infantil",
    tipo: "premio",
    numero: 1,
    titulo: "1º Premio infantil",
    fuente:
      "🏆🏆🏆 Carnaval de Badajoz · Campeones infantiles. Futuro asegurado 👶👑",
  },
  {
    year: 2013,
    categoria: "Infantil",
    tipo: "premio",
    numero: 2,
    titulo: "2º Premio infantil",
    fuente: "🏆🏆 El Estribillo · Subcampeones: constancia de cantera 🔥",
  },
  {
    year: 2014,
    categoria: "Infantil",
    tipo: "premio",
    numero: 1,
    titulo: "1º Premio infantil",
    fuente: "🏆🏆🏆 El Estribillo · Oro infantil: escuela de campeones 🥇",
  },
  {
    year: 2015,
    categoria: "Infantil",
    tipo: "premio",
    numero: 1,
    titulo: "1º Premio infantil",
    fuente: "🏆🏆🏆 El Estribillo · Repetís título: racha seria 🚀",
  },
  {
    year: 2016,
    categoria: "Infantil",
    tipo: "premio",
    numero: 1,
    titulo: "1º Premio infantil",
    nota: "(compartido)",
    fuente: "🏆🏆🏆 El Estribillo · Campeones compartidos: mérito doble 🤝",
  },
  {
    year: 2017,
    categoria: "Infantil",
    tipo: "premio",
    numero: 1,
    titulo: "1º Premio infantil",
    fuente: "🏆🏆🏆 El Estribillo · Otra corona infantil… ¡qué cantera! 👑",
  },
  {
    year: 2018,
    categoria: "Infantil",
    tipo: "premio",
    numero: 1,
    titulo: "1º Premio infantil",
    fuente: "🏆🏆🏆 El Estribillo · Dominio infantil total 💛🖤",
  },
  {
    year: 2019,
    categoria: "Infantil",
    tipo: "premio",
    numero: 1,
    titulo: "1º Premio infantil",
    fuente: "🏆🏆🏆 El Estribillo · Sexto sentido: ganar, ganar y ganar 😄",
  },
  {
    year: 2020,
    categoria: "Infantil",
    tipo: "premio",
    numero: 2,
    titulo: "2º Premio infantil",
    fuente: "🏆🏆 El Estribillo · Subcampeones: cantera en lo más alto 🥈",
  },
  {
    year: 2022,
    categoria: "Infantil",
    tipo: "premio",
    numero: 2,
    titulo: "2º Premio infantil",
    fuente: "🏆🏆 El Estribillo · Otro podio: no se baja el nivel 💪",
  },
  {
    year: 2026,
    categoria: "Infantil",
    tipo: "premio",
    numero: 2,
    titulo: "2º Premio infantil",
    fuente: "🏆🏆 El Estribillo · De nuevo otro segundo y merecido premio 💪",
  },
];
