type TypographyProps = {
  variant?: "h1" | "h2" | "h3" | "p" | "caption";
  className?: string;
  children: React.ReactNode;
};

const Typography: React.FC<TypographyProps> = ({
  variant = "p",
  className = "",
  children,
}) => {
  const Component = variant;
  return <Component className={className}>{children}</Component>;
};

export default Typography;
