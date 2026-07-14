const Button = ({ children, yellow }) => {
  return (
    <button
      className={`rounded-xl px-8 py-4 font-semibold transition
        ${
          yellow
            ? "bg-[#FDE105] text-black hover:bg-yellow-400"
            : "border border-[#FDE105] text-[#171B46]"
        }`}
    >
      {children}
    </button>
  );
};

export default Button;
