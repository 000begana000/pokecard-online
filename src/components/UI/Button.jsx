export default function Button({ children, className, ...props }) {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
}
