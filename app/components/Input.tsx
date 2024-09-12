type InputProps = {
  label: string;
  type?: "text" | "password" | "email";
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  value,
  onChange,
  className,
}) => (
  <div className={`flex flex-col ${className}`}>
    <label>{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border border-gray-300 p-2"
    />
  </div>
);

export default Input;
