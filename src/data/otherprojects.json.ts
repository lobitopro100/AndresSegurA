export interface Template {
  description: string;
  title: string;
};

const flabbergasted: Template = {
  description: "Angular, Figma, Typescript,  scss , HTML, Material | (En curso)",
  title: "Trabajando actualmente (Remoto)"
};

const svgdoodles: Template = {
  description: "React.js, Next.js, WordPress, Adobe Illustrator, Adobe Photoshop | Agosto 2022 - Marzo 2023 (8 meses)",
  title: "Marketing Acción Grupal - Desarrollador de Front-End"
};
const svggradients: Template = {
  description: "JavaScript, CSS, HTML, Bootstrap, Python, WordPress | Agosto. 2021 hasta Dicienbre. 2021 (5 meses)",
  title: "Colamerica - Desarrollador Web"
};
const quicksetup: Template = {
  description: "JavaScript, CSS, HTML, Bootstrap, Python, WordPress | Agosto 2022 - Marzo 2023 (8 meses)",
  title: "Colamerica - Desarrollador Web"
};
const vscodethemes: Template = {
  description: "JavaScript, CSS, HTML, Bootstrap, Python, WordPress | Enero 2020 - Agosto 2021 (1 año y 8 meses)",
  title: "Innovese - Desarrollador Web"
};

export const byName = {
  flabbergasted,
  svgdoodles,
  svggradients,
    quicksetup,
    vscodethemes,

};
export const otherprojects = Object.values(byName);
