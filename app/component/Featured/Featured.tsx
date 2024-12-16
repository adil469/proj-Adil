import { Button } from "@/components/ui/button";

import React from "react";

const Featured = () => {
  return (
    <div className="">
      <p className="font-semibold ml-2 mt-4 mb-1">Featured</p>
      <div className="ml-2 mr-2">
        <img src="/Image (7).png" alt="featured" />
      </div>
      <div className="place-items-center">
        <h2 className="text-5xl font-bold mt-4 mb-2">
          STEP INTO WHAT FEELS GOOD
        </h2>
        <p className="text-sm mb-2">
          Cause everyone should know the feeling of running in that perfect
          pair.
        </p>
        <Button className="mt-2 mb-2 ">Find Your Shoe</Button>
      </div>
    </div>
  );
};

export default Featured;
