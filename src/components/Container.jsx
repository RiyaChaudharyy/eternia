const Container = ({ children, className = "" }) => (
  <div
    className={`w-full max-w-[1440px] mx-auto px-4 lg:px-[100px] ${className}`}
  >
    {children}
  </div>
);

export default Container