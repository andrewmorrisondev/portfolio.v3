import React, { useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import { ThemeContext } from "../../context/ThemeContext"; // Import ThemeContext
import { useColorState } from "./hooks/useColorState"; // Import custom hook
import { useAccentColors } from "./hooks/useAccentColors"; // Import custom hook
import { useLuminance } from "./hooks/useLuminance"; // Import custom hook
import ColorSlider from "./ColorSlider/ColorSlider"; // Import the new ColorSlider component

const ColorPicker: React.FC = () => {
  const { updateColors } = useContext(ThemeContext); // Access updateColors from ThemeContext
  const { color, handleSliderChange, handleGrayScaleChange } = useColorState(); // Hook for color state
  const { generateAccentColors } = useAccentColors(); // Hook for accent colors
  const { getContrastingColor } = useLuminance(); // Hook for luminance

  // Generate accent colors based on the current color
  const [accentColor1, accentColor2] = generateAccentColors(
    color.r,
    color.g,
    color.b,
  );

  // Create the color string in the format "rgb(r, g, b)"
  const selectedColor = `rgb(${color.r}, ${color.g}, ${color.b})`;

  // Get the contrasting color based on the selected color
  const contrastingColor = getContrastingColor(selectedColor);

  const handleSaveColor = (): void => {
    updateColors(selectedColor, contrastingColor, accentColor1, accentColor2); // Update theme colors
  };

  return (
    <Box>
      <Typography variant="h6">Pick a Color</Typography>
      <Box>
        <ColorSlider
          label="Red"
          value={color.r}
          onChange={handleSliderChange("r")}
        />
        <ColorSlider
          label="Green"
          value={color.g}
          onChange={handleSliderChange("g")}
        />
        <ColorSlider
          label="Blue"
          value={color.b}
          onChange={handleSliderChange("b")}
        />
        <ColorSlider
          label="Black to White"
          value={(color.r + color.g + color.b) / 3}
          onChange={handleGrayScaleChange}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            backgroundColor: selectedColor,
            width: 100,
            height: 100,
            marginTop: 2,
            borderRadius: 1,
          }}
        />
        <Button
          variant="contained"
          onClick={handleSaveColor}
          sx={{ marginTop: 2 }}
        >
          Save Color
        </Button>
      </Box>
    </Box>
  );
};

export default ColorPicker;
