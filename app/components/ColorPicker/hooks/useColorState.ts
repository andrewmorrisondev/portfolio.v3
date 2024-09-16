import { useState } from "react";

interface Color {
  r: number;
  g: number;
  b: number;
}

export const useColorState = (): {
  color: Color;
  handleSliderChange: (
    channel: keyof Color,
  ) => (_event: Event, value: number | number[]) => void;
  handleGrayScaleChange: (_event: Event, value: number | number[]) => void;
} => {
  const [color, setColor] = useState<Color>({ r: 0, g: 0, b: 0 });

  const handleSliderChange =
    (channel: keyof Color) =>
    (_event: Event, value: number | number[]): void => {
      setColor((prev) => ({ ...prev, [channel]: value as number }));
    };

  const handleGrayScaleChange = (
    _event: Event,
    value: number | number[],
  ): void => {
    const grayValue = value as number;
    setColor({ r: grayValue, g: grayValue, b: grayValue });
  };

  return { color, handleSliderChange, handleGrayScaleChange };
};
