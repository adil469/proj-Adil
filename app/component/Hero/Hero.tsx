import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="place-items-center mt-1">
      <h2>First Look</h2>
      <h1 className="foont-extrabold text-6xl pb-4 pt-2">NIKE AIR MAX PULSE</h1>
      <p className="text-center text-sm">
        Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
        Pulse <br />
        —designed to push you past your limits and help you go to the max.
      </p>
      <div className="space-x-2 mt-2 pb-2">
        <Button>Notify Me</Button>
        <Button asChild>
          <Link href="/">Shop Air Max</Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
