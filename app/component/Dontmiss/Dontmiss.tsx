import { Button } from "@/components/ui/button";
import React from "react";

const Dontmiss = () => {
  return (
    <div>
      <h3 className="ml-4 mt-6 font-bold">Dont Miss</h3>
      <div className="flex justify-center m-4">
        <img src="/Image (15).png" alt="" className="" />
      </div>
      <div className="text-center">
        <h2 className="text-5xl font-bold ">FLIGHT ESSENTIALS</h2>
        <p className="mb-4 mt-4">
          Your built-to-last, all-week wears—but with style only Jordan Brand
          can deliver.
        </p>
        <Button className="mb-3 ">Shop</Button>
      </div>
    </div>
  );
};

export default Dontmiss;
