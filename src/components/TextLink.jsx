
const TextLink = ({ children, light = false, className = "" }) => (
  <a
    href="#"
    className={`text-sm font-semibold underline underline-offset-4 decoration-2 transition-colors ${
      light
        ? "text-white hover:text-accent"
        : "text-primary-dark decoration-accent"
    } ${className}`}
  >
    {children}
  </a>
);


export default TextLink