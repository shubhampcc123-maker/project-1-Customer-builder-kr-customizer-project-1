const Button = ({ children, yellow }) => {
  return (
    <button
      className={`px-6 py-3 rounded-[8px]  font-semibold transitionv text-lg
      ${yellow ? "bg-yellow-400 hover:bg-yellow-500" : " border border-amber-300 hover:*:bg-amber-100"} "}`}
    >
      {children}
    </button>
  );
};

export default Button;
