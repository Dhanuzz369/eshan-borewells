import { type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  vertical = false,
  repeat = 4,
  children,
  ...props
}: MarqueeProps) {
  return <div
    {...props}
    className={cn("review-marquee", vertical && "review-marquee-vertical", reverse && "review-marquee-reverse", pauseOnHover && "review-marquee-pause", className)}
  >
    {Array.from({ length: Math.max(1, repeat) }, (_, index) => <div
      key={index}
      className="review-marquee-group"
      aria-hidden={index > 0 ? true : undefined}
    >{children}</div>)}
  </div>;
}
