import { rgbToHsl, hslToRgb } from "./useColorConversions"; // Import conversion hooks

export const useAccentColors = (): {
  generateAccentColors: (r: number, g: number, b: number) => [string, string];
} => {
  const generateAccentColors = (
    r: number,
    g: number,
    b: number,
  ): [string, string] => {
    const [h, s, l] = rgbToHsl(r, g, b);
    const adjustedL = l < 0.1 ? 0.2 : l > 0.9 ? 0.8 : l;

    const accentHue1 = (h + 30) % 360;
    const accentHue2 = (h + 60) % 360;

    const [r1, g1, b1] = hslToRgb(accentHue1, s, adjustedL);
    const [r2, g2, b2] = hslToRgb(accentHue2, s, adjustedL);

    return [`rgb(${r1}, ${g1}, ${b1})`, `rgb(${r2}, ${g2}, ${b2})`];
  };

  return { generateAccentColors };
};
