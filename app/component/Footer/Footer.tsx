import Link from "next/link";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <div className=" grid grid-cols-4 bg-black text-white p-4">
        <ul className=" space-y-2 font-bold">
          <li className="font-extrabold text-xl">Find A Store</li>
          <li>Become A Member</li>
          <li>Sign Up for Email</li>
          <li>Send Us Feedback</li>
          <li>Student Discounts</li>
        </ul>
        <ul className="space-y-4 text-sm">
          <li className=" font-extrabold text-xl">Get Help</li>
          <li>Order Status</li>
          <li>Delivery</li>
          <li>Returns</li>
          <li>Payment Options</li>
          <li>Contact Us On Nike.com Inquiries</li>
          <li>Contact Us On All Other Inquiries</li>
        </ul>
        <ul className="space-y-4 text-sm">
          <li className="font-extrabold text-xl">About Nike</li>
          <li>News</li>
          <li>Careers</li>
          <li>Investors</li>
          <li>Sustainability</li>
        </ul>
        <ul className="flex pl-48 gap-2">
          <li>
            <img src="/Frame (6).png" alt="twitter" />
          </li>
          <li>
            <img src="/Vector.png" alt="" />
          </li>
          <li>
            <img src="/Frame (8).png" alt="" />
          </li>
          <li>
            <img src="/Vector (1).png" alt="" />
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between bg-black text-white">
        <div className="flex m-3 gap-2 ">
          <IoLocationOutline className=" size-5" />
          <p>Pakistan © 2023 Nike, Inc. All Rights Reserved</p>
        </div>
        <div className="flex gap-6 pr-2">
          <a href="#">Guides</a>
          <a href="#">Terms of Sale</a>
          <a href="#">Terms of Use</a>
          <a href="#">Nike Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
