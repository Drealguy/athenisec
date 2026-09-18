/**
 * Text-swap hover effect for buttons: the label slides up and out while an
 * identical copy slides up into place from below. Wrap just the label
 * (not any icon) inside a parent that has the `group` class.
 */
export default function HoverSwapText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`relative inline-grid overflow-hidden align-top ${className}`}>
      <span className="col-start-1 row-start-1 transition-transform duration-300 ease-out group-hover:-translate-y-[110%]">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="col-start-1 row-start-1 translate-y-[110%] transition-transform duration-300 ease-out group-hover:translate-y-0"
      >
        {children}
      </span>
    </span>
  );
}
