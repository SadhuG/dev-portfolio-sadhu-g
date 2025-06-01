import { ArrowUpRight, Copy } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const CtaWrapper = () => {
	return (
		<div className="flex flex-col sm:flex-row gap-6">
			<div>
				<Button
					variant={"outline"}
					className="gap-3 group relative overflow-hidden"
				>
					<span className="relative z-10 transition-colors duration-500 ease-in-out group-hover:text-background">
						Contact me
					</span>
					<div className="relative z-10 size-4 rounded-full bg-foreground">
						<ArrowUpRight className="text-background" />
					</div>
					<div className="absolute right-6 top-1/2 -translate-y-1/2 size-4 rounded-full bg-foreground transition-transform duration-500 ease-in-out group-hover:scale-[15]"></div>
				</Button>
			</div>
			<div>
				<Button
					variant={"tertiary"}
					size={"tertiary"}
				>
					<Copy />
					hello@sadhug.in
				</Button>
			</div>
		</div>
	);
};

export default CtaWrapper;
