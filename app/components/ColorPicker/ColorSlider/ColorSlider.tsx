import React from "react";
import { Slider, Typography, useTheme } from "@mui/material";
import { useLuminance } from "../hooks/useLuminance"; // Import useLuminance hook

interface ColorSliderProps {
  label: string;
  value: number;
  onChange: (event: Event, newValue: number | number[]) => void;
}

const ColorSlider: React.FC<ColorSliderProps> = ({
  label,
  value,
  onChange,
}) => {
  const theme = useTheme(); // Access the theme
  const { getContrastingColor } = useLuminance(); // Use luminance hook

  // Determine the thumb color based on the label
  const thumbColor =
    label === "Red"
      ? getContrastingColor("rgb(255, 0, 0)") // Red
      : label === "Green"
        ? getContrastingColor("rgb(0, 255, 0)") // Green
        : label === "Blue"
          ? getContrastingColor("rgb(0, 0, 255)") // Blue
          : theme.palette.accent2; // Default to theme's accent2 color if no match

  return (
    <>
      <Typography>{label}</Typography>
      <Slider
        value={value}
        onChange={onChange}
        min={0}
        max={255}
        sx={{
          "& .MuiSlider-thumb": { backgroundColor: thumbColor }, // Thumb color from luminance calculation
          "& .MuiSlider-track": { backgroundColor: theme.palette.accent1 }, // Track color from theme
          "& .MuiSlider-rail": { backgroundColor: theme.palette.accent1 }, // Rail color from theme
        }}
      />
    </>
  );
};

export default ColorSlider;
