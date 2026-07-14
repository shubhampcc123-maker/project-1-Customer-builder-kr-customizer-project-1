const Button = ({ children, yellow, className = "" }) => {
  return (
    <button
      className={`rounded-xl px-8 py-4 font-semibold transition
        ${
          yellow
            ? "bg-[#FDE105] hover:bg-yellow-400 text-black"
            : "border border-[#FDE105] bg-white"
        }
        ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
