import { getContrastRatio } from "@mui/system";

export const useLuminance = (): {
  calculateLuminance: (color: string) => number;
  getContrastingColor: (color: string) => string;
} => {
  const calculateLuminance = (color: string): number => {
    const contrastWithBlack = getContrastRatio(color, "#000000");
    return 1 / contrastWithBlack; // Higher contrast ratio means lower luminance
  };

  const getContrastingColor = (color: string): string => {
    const contrastWithWhite = getContrastRatio(color, "#ffffff");

    // If contrast is high enough with white, use white text, otherwise use black
    if (contrastWithWhite >= 4.5) {
      return "#ffffff";
    } else {
      return "#000000";
    }
  };

  return { calculateLuminance, getContrastingColor };
};
