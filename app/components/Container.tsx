// biome-ignore lint/style/useImportType: <explanation>
import React from "react";

type SizeOptions = "small" | "medium" | "large" | "full";
type AlignOptions = "left" | "center" | "right";

type ContainerProps = {
  size?: SizeOptions;
  align?: AlignOptions;
  noPadding?: boolean;
  noRounded?: boolean;
  bgColor?: string;
  className?: string;
  children: React.ReactNode;
};

const sizeClasses: Record<SizeOptions, string> = {
  small: "max-w-xs sm:max-w-sm", // Small width, height will be auto
  medium: "max-w-md sm:max-w-lg md:max-w-2xl", // Medium width, height will be auto
  large: "max-w-full lg:max-w-4xl", // Large width, height will be auto
  full: "w-full h-full min-h-screen", // Full width and height, min-height of screen
};

const alignClasses: Record<AlignOptions, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const Container: React.FC<ContainerProps> = ({
  size = "medium", // Default size
  align = "left", // Default alignment
  noPadding = false, // Default to having padding
  noRounded = false, // Default to having rounded corners
  bgColor = "bg-background", // Default background
  className = "", // Additional classes
  children,
}) => {
  const sizeClass = sizeClasses[size];
  const alignClass = alignClasses[align];
  const paddingClass = noPadding ? "" : "p-4";
  const roundedClass = noRounded ? "" : "rounded-lg";
  const backgroundClass = bgColor;

  return (
    <div
      className={`${sizeClass} ${alignClass} ${paddingClass} ${roundedClass} ${backgroundClass} mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
