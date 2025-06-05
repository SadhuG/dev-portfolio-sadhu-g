"use client";

import { Toaster } from "@/components/ui/sonner";
import { Copy } from "lucide-react";
import React from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";

const CopyMailButton = () => {
  function handleCopy() {
    navigator.clipboard.writeText("hello@sadhug.in");
    toast("Email copied");
  }

  return (
    <>
      <Button variant={"tertiary"} size={"tertiary"} onClick={handleCopy}>
        <Copy />
        hello@sadhug.in
      </Button>
      {/* Toaster for notifications */}{" "}
      <div className="mx-auto h-0 w-0">
        <Toaster
          position="bottom-center"
          className="flex justify-center"
          toastOptions={{
            style: { width: "fit-content", marginInline: "auto" },
          }}
        />
      </div>
    </>
  );
};

export default CopyMailButton;
