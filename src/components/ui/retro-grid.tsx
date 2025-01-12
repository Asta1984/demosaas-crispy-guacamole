import { cn } from "../lib/utils";

export function RetroGrid({
  className,
  angle = 75,
}: {
  className?: string;
  angle?: number;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden opacity-10 [perspective:150px]",
        className,
      )}
      style={{ "--grid-angle": `${angle}deg` } as React.CSSProperties}
    >
      {/* Grid */}
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div
          className={cn(
            "animate-grid",
            "[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]",
            
            // Light mode - using white with higher opacity
            "[background-image:linear-gradient(to_right,rgba(255,255,255,0.7)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.7)_1px,transparent_0)]",
            
            // Dark mode - using an even brighter white
            "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.8)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.8)_1px,transparent_0)]"
          )}
        />
      </div>

      <div className="absolute inset-0 bg-transparent" />
    </div>
  );
}