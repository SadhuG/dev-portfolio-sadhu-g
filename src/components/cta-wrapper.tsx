import { ArrowUpRight, Copy } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const CtaWrapper = () => {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
      <div>
        <Button
          variant={"outline"}
          className="group relative gap-3 overflow-hidden"
        >
          <span className="group-hover:text-background relative z-10 transition-colors duration-500 ease-in-out">
            Contact me
          </span>
          <div className="bg-foreground relative z-10 size-4 rounded-full">
            <ArrowUpRight className="text-background" />
          </div>
          <div className="bg-foreground absolute top-1/2 right-6 size-4 -translate-y-1/2 rounded-full transition-transform duration-500 ease-in-out group-hover:scale-[15]"></div>
        </Button>
      </div>
      <div>
        <Button variant={"tertiary"} size={"tertiary"}>
          <Copy />
          hello@sadhug.in
        </Button>
      </div>
    </div>
  );
};

export default CtaWrapper;
