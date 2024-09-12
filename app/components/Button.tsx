type ButtonProps = {
  onClick: () => void;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
};

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2",
  large: "px-6 py-3 text-lg",
};

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: "bg-blue-500 text-white",
  secondary: "bg-gray-500 text-white",
  danger: "bg-red-500 text-white",
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  size = "medium",  // Default value ensures it is never undefined
  variant = "primary",  // Default value ensures it is never undefined
  disabled = false,
  className = "",
  children,
  type = "button",  // Default button type is 'button'
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
