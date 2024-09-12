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
  grow?: number;      // Flex-grow for items inside the flex container
  shrink?: number;    // Flex-shrink for items inside the flex container
  basis?: string;     // Flex-basis to control initial item size
  inline?: boolean;   // Toggle between flex and inline-flex
  alignSelf?: "auto" | "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  className?: string;
  children: React.ReactNode;
};

const Flex: React.FC<FlexProps> = ({
  direction = "row",    // Default flex direction
  align = "stretch",    // Default align-items
  justify = "flex-start",  // Default justify-content
  wrap = "nowrap",      // Default flex-wrap
  gap = "0",            // Default gap between elements
  grow = 0,             // Default flex-grow
  shrink = 1,           // Default flex-shrink
  basis = "auto",       // Default flex-basis
  inline = false,       // Default to block flex
  alignSelf = "auto",   // Default align-self
  className = "",       // Additional custom classes
  children,
}) => {
  return (
    <div
      className={`${inline ? 'inline-flex' : 'flex'} flex-${direction} items-${align} justify-${justify} flex-${wrap} gap-${gap} ${className}`}
      style={{
        flexGrow: grow,
        flexShrink: shrink,
        flexBasis: basis,
        alignSelf: alignSelf, // Set align-self here
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
