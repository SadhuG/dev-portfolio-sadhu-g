import { cn } from "@/lib/utils";
import * as React from "react";

function Tag({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="tag"
			className={cn(
				"text-foreground text-base font-semibold flex gap-2 border bg-white/10 rounded-full py-1 px-3",
				className
			)}
			{...props}
		/>
	);
}

function TagIcon({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="tag-icon"
			className={cn(className)}
			{...props}
		/>
	);
}

function TagContent({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="tag-content"
			className={cn("text-foreground flex items-center gap-2", className)}
			{...props}
		/>
	);
}

function TagName({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="tag-name"
			className={cn("leading-none font-semibold", className)}
			{...props}
		/>
	);
}

export { Tag, TagContent, TagIcon, TagName };
