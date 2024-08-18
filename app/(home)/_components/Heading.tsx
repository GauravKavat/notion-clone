"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        A place where your ideas take flight. <br /> Welcome to{" "}
        <span className="underline">Notion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Notion-clone, but not entirely different
      </h3>
      <Button>
        Enter
        <ArrowRight className="h-4 w-4 ml-4" />
      </Button>
    </div>
  );
};
