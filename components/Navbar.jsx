import React from "react";
import Link from "next/link";
import { NavLinks } from "@/constant";
import ArrowDownIcon from "./ArrowDownIcon";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-8 px-20 border-b border-gray-500/50 gap-4 ">
      <div className="flex-1 flex items-center justify-start space-x-16 ">
        <Link href="/"><Logo /></Link>

        <ul className="xl:flex hidden text-lg font-semibold gap-7">
          {NavLinks.map((link) => (
            <Link className="flex items-center space-x-4 hover:bg-violet-100 hover:text-violet-700 rounded-md px-4 py-2" key={link.key} href="/">
              {link.text}{"  "}
              {link.key === "Manage_Property" || link.key === "Resources" ? (
                <span className="ml-2 ">

                <ArrowDownIcon />
                </span>
              ) : (
                ""
              )}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-center gap-4">
      <button className="border-[1px] border-[#7065f0] text-md font-semibold text-[#7065f0] rounded-md px-4 py-2">
            Login
          </button>
          <button className="bg-[#7065f0] text-md font-semibold text-white rounded-md px-4 py-2">
            Signup
          </button>
      </div>
    </nav>
  );
};

export default Navbar;
