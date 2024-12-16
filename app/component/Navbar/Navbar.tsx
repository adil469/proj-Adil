import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between bg-slate-200 p-2">
        <div className="flex pl-2">
          <img src="/Frame (1).png" alt="..logo" />
        </div>
        <div className="flex space-x-2 mr-2">
          <a href="">Find a Store</a>|<a href="">Help</a>|<a href="">Join Us</a>
          |<a href="">Sign In</a>
        </div>
      </div>
      <div className="flex justify-between h-[60px] shadow-sm">
        <div className="flex">
          <img
            src="/Frame (2).png"
            alt=""
            className="h-[70.47px] w-[78.47px]"
          />
        </div>
        <div className="flex place-items-center">
          <a href="">New & Featured</a>
          <a href="">Men</a>
          <a href="">Women</a>
          <a href="">Kids</a>
          <a href="">sale</a>
          <a href="">SNKRS</a>
        </div>
        <div className="flex pt-2 gap-2  place-items-center mr-2">
          <input
            type="Search"
            placeholder="Search"
            className="border border-gray-400 shadow-md rounded-lg "
          />
          <img src="/Frame (3).png" alt="" className="h-[24px] w-[24px]" />
          <img src="/Frame (5).png" alt="" className="h-[24px] w-[24px]" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
