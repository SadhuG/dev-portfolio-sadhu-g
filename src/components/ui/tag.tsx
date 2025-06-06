import { cn } from "@/lib/utils";
import * as React from "react";

function Tag({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="listitem"
      data-slot="tag"
      className={cn(
        "text-foreground flex gap-2 rounded-full border bg-white/10 px-3 py-1 text-base font-semibold",
        className,
      )}
      {...props}
    />
  );
}

function TagIcon({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <span
      data-slot="tag-icon"
      aria-hidden="true"
      className={cn(className)}
      {...props}
    />
  );
}

function TagContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="tag-content"
      role="group"
      aria-label="Tag content"
      className={cn("text-foreground flex items-center gap-2", className)}
      {...props}
    />
  );
}

function TagName({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <span
      data-slot="tag-name"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

export { Tag, TagContent, TagIcon, TagName };
