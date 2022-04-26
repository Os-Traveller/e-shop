import React from "react";
import { buttonClass } from "./tailwindClass";

const Nav = () => {
  return (
    <section className="bg-[#1C2B35] text-white">
      <nav className="container mx-auto py-3 flex justify-between items-center">
        <h1 className="font-mono text-2xl">Dummy Commarce</h1>
        <ul className="flex gap-5">
          <li>Order</li>
          <li>Order Review</li>
          <li>Manage Invertory</li>
          <button className={`${buttonClass}`}>Log In</button>
        </ul>
      </nav>
    </section>
  );
};

export default Nav;
