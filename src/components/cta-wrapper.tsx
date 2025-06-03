import { ArrowUpRight, Copy } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

const CtaWrapper = () => {
  return (
    <Drawer>
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
        <div>
          <DrawerTrigger asChild>
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
          </DrawerTrigger>
        </div>
        <div>
          <Button variant={"tertiary"} size={"tertiary"}>
            <Copy />
            hello@sadhug.in
          </Button>
        </div>
      </div>
      <DrawerContent className="mx-auto w-2xl">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
              >
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter"></div>
                <div className="text-muted-foreground text-[0.70rem] uppercase">
                  Calories/day
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
              >
                <span className="sr-only">Increase</span>
              </Button>
            </div>
            <div className="mt-3 h-[120px]"></div>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CtaWrapper;
