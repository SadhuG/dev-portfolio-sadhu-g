import { cn } from "@/lib/utils";
import React from "react";

interface SharpSparkleProps extends React.SVGProps<SVGSVGElement> {
	className?: string;
}

const SharpSparkle: React.FC<SharpSparkleProps> = ({ className, ...props }) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn("", className)}
			{...props}
		>
			<path
				d="M12.8656 2.37817C12.8656 7.90102 17.3427 12.3782 22.8656 12.3782C17.3427 12.3782 12.8656 16.8553 12.8656 22.3782C12.8656 16.8553 8.38844 12.3782 2.86559 12.3782C8.38844 12.3782 12.8656 7.90102 12.8656 2.37817Z"
				className="fill-current"
			/>
		</svg>
	);
};

export default SharpSparkle;
