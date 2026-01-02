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
  /** Fuente opcional */
  fuente?: string;
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
    fuente: "Carnaval de Badajoz",
  },
  { year: 1997, categoria: "Adultos", tipo: "accesit", numero: 11, titulo: "11º Accésit" },
  { year: 1998, categoria: "Adultos", tipo: "accesit", numero: 4, titulo: "4º Accésit" },
  { year: 1999, categoria: "Adultos", tipo: "accesit", numero: 11, titulo: "11º Accésit" },
  { year: 2000, categoria: "Adultos", tipo: "accesit", numero: 13, titulo: "13º Accésit" },
  { year: 2002, categoria: "Adultos", tipo: "accesit", numero: 2, titulo: "2º Accésit" },
  { year: 2003, categoria: "Adultos", tipo: "premio", numero: 5, titulo: "5º Premio" },
  { year: 2004, categoria: "Adultos", tipo: "accesit", numero: 4, titulo: "4º Accésit" },
  { year: 2006, categoria: "Adultos", tipo: "accesit", numero: 10, titulo: "10º Accésit" },
  { year: 2007, categoria: "Adultos", tipo: "premio", numero: 1, titulo: "1º Premio" },
  { year: 2008, categoria: "Adultos", tipo: "accesit", numero: 2, titulo: "2º Accésit" },
  { year: 2009, categoria: "Adultos", tipo: "premio", numero: 5, titulo: "5º Premio" },
  {
    year: 2010,
    categoria: "Adultos",
    tipo: "accesit",
    numero: 1,
    titulo: "1º Accésit",
    nota: "(compartido)",
  },
  { year: 2011, categoria: "Adultos", tipo: "premio", numero: 5, titulo: "5º Premio" },
  { year: 2012, categoria: "Adultos", tipo: "accesit", numero: 11, titulo: "11º Accésit" },
  { year: 2013, categoria: "Adultos", tipo: "accesit", numero: 2, titulo: "2º Accésit" },
  { year: 2014, categoria: "Adultos", tipo: "premio", numero: 5, titulo: "5º Premio" },
  { year: 2015, categoria: "Adultos", tipo: "premio", numero: 3, titulo: "3º Premio" },
  { year: 2016, categoria: "Adultos", tipo: "accesit", numero: 3, titulo: "3º Accésit" },
  { year: 2017, categoria: "Adultos", tipo: "premio", numero: 1, titulo: "1º Premio" },
  { year: 2018, categoria: "Adultos", tipo: "premio", numero: 3, titulo: "3º Premio" },
  { year: 2019, categoria: "Adultos", tipo: "premio", numero: 1, titulo: "1º Premio" },
  { year: 2020, categoria: "Adultos", tipo: "premio", numero: 2, titulo: "2º Premio" },
  { year: 2022, categoria: "Adultos", tipo: "premio", numero: 1, titulo: "1º Premio" },
  { year: 2023, categoria: "Adultos", tipo: "premio", numero: 1, titulo: "1º Premio" },
  { year: 2024, categoria: "Adultos", tipo: "premio", numero: 2, titulo: "2º Premio" },
  { year: 2025, categoria: "Adultos", tipo: "premio", numero: 3, titulo: "3º Premio" },

  // =======================
  // Infantil
  // =======================
  { year: 2011, categoria: "Infantil", tipo: "premio", numero: 2, titulo: "2º Premio infantil" },
  { year: 2012, categoria: "Infantil", tipo: "premio", numero: 1, titulo: "1º Premio infantil" },
  { year: 2013, categoria: "Infantil", tipo: "premio", numero: 2, titulo: "2º Premio infantil" },
  { year: 2014, categoria: "Infantil", tipo: "premio", numero: 1, titulo: "1º Premio infantil" },
  { year: 2015, categoria: "Infantil", tipo: "premio", numero: 1, titulo: "1º Premio infantil" },
  {
    year: 2016,
    categoria: "Infantil",
    tipo: "premio",
    numero: 1,
    titulo: "1º Premio infantil",
    nota: "(compartido)",
  },
  { year: 2017, categoria: "Infantil", tipo: "premio", numero: 1, titulo: "1º Premio infantil" },
  { year: 2018, categoria: "Infantil", tipo: "premio", numero: 1, titulo: "1º Premio infantil" },
  { year: 2019, categoria: "Infantil", tipo: "premio", numero: 1, titulo: "1º Premio infantil" },
  { year: 2020, categoria: "Infantil", tipo: "premio", numero: 2, titulo: "2º Premio infantil" },
  { year: 2022, categoria: "Infantil", tipo: "premio", numero: 2, titulo: "2º Premio infantil" },
  { year: 2023, categoria: "Infantil", tipo: "premio", numero: 1, titulo: "1º Premio infantil" },
  { year: 2024, categoria: "Infantil", tipo: "premio", numero: 2, titulo: "2º Premio infantil" },
  { year: 2025, categoria: "Infantil", tipo: "premio", numero: 3, titulo: "3º Premio infantil" },
];
