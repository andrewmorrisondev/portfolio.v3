// biome-ignore lint/style/useImportType: <explanation>
import React from "react";

type FlexProps = {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  align?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: string;
  className?: string;
  children: React.ReactNode;
};

const Flex: React.FC<FlexProps> = ({
  direction = "row",    // Default flex direction
  align = "stretch",    // Default align-items
  justify = "flex-start",  // Default justify-content
  wrap = "nowrap",      // Default flex-wrap
  gap = "0",            // Default gap between elements
  className = "",       // Additional custom classes
  children,
}) => {
  return (
    <div
      className={`flex flex-${direction} items-${align} justify-${justify} flex-${wrap} gap-${gap} ${className}`}
    >
      {children}
    </div>
  );
};

export default Flex;
