import Image from "next/image";
import React from "react";

const Essentials = () => {
  return (
    <div>
      <p className="font-bold ml-4">The Essentials</p>
      <Image
        src="/Frame (9).png"
        alt=""
        width={1356}
        height={540}
        className="m-2"
      />
    </div>
  );
};

export default Essentials;
