const Button = (prop: {
  onClick: () => void;
  label: string;
  type?: string;
}) => {
  const { type = "primary", label, onClick } = prop;
  return (
    <button
      className={`${type} text-xs `}
      onClick={onClick}
      style={{
        border: "4px",
        borderRadius: "20px",
        color: "#e7aa32",
        background: "#1a1a1a",
      }}
    >
      {label}
    </button>
  );
};
export default Button;
