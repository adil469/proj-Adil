import React from "react";
import Hero from "./component/Hero/Hero";
import Featured from "./component/Featured/Featured";
import Gearup from "./component/GearUp/Gearup";
import Dontmiss from "./component/Dontmiss/Dontmiss";
import Essentials from "./component/Essentials/Essentials";
import Ends from "./component/Ends/Ends";

const Home = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <Gearup />
      <Dontmiss />
      <Essentials />
      <Ends />
    </div>
  );
};

export default Home;
