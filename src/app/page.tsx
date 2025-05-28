import Hero from "@/components/hero";
import Mission from "@/components/mission";
import Navbar from "@/components/navbar";
import React from "react";

const home = () => {
	return (
		<div className="max-w-[1536px] mx-auto">
			<header className="h-dvh w-full relative">
				<Navbar />
				<div className="h-[calc(100vh-72px)]">
					<Hero />
				</div>
			</header>
			<Mission />
		</div>
	);
};

export default home;
