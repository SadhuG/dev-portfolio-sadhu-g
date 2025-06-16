"use client";

import { Toaster } from "@/components/ui/sonner";
import { Copy } from "lucide-react";
import React from "react";
import { toast } from "sonner";
import { Email } from "../info/contact-links";
import { Button } from "./ui/button";

const CopyMailButton = () => {
  function handleCopy() {
    navigator.clipboard.writeText(Email);
    toast("Email copied");
  }

  return (
    <>
      <Button
        variant={"tertiary"}
        size={"tertiary"}
        onClick={handleCopy}
        aria-label={`Click to copy email address ${Email} to clipboard`}
      >
        <Copy aria-hidden="true" />
        {Email}
      </Button>
      {/* Toaster for notifications */}
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
