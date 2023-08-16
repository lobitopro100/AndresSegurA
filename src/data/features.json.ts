export interface Template {
  title: string;
};
const one: Template = {
  title: "Angular"
};
const two: Template = {
  title: "React"
};
const three: Template = {
  title: " NEXT js"
};
const four: Template = {
  title: "TypeScript"
};
const five: Template = {
  title: "JavaScript"
};
const five2: Template = {
  title: ".NET"
};
const six: Template = {
  title: "Figma"
};
const seven: Template = {
  title: "css"
};
const eight: Template = {
  title: "sass"
};
const nine: Template = {
  title: "tailwindcss"
};
const ten: Template = {
  title: "Material"
};
const ten2: Template = {
  title: "Photosshop"
};
const ten3: Template = {
  title: "Illustrator"
};
export const byName = {
one, two, three, four, five, six, seven, eight, nine, ten,ten2, ten3, five2





};
export const features = Object.values(byName);
