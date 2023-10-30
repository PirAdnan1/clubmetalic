import React from "react";
import Link from "next/link";

// components
import Container from "./Container";

// assest
import User from "@/assets/User";
import Dropdown from "@/assets/DropDown";
import DropUp from "@/assets/DropUp";

function Navbar() {
  return (
    <Container>
      <nav className="flex flex-col lg:flex-row lg:items-center items-start pl-6 lg:pl-0 lg:justify-center justify-start lg:gap-56 gap-6 pt-5 pb-4 bg-secondary shadow-[0px_3px_3px_0px_rgba(196, 206, 218, 0.51)]">
        <h1 className="text-primary lg:text-4xl text-2xl max-w-[159px] lg:max-w-full leading-5 font-bold">
          double your net worth<span className="text-base">.club</span>
        </h1>
        <div>
          <ul className="text-primary flex flex-col lg:flex-row lg:items-center items-start lg:gap-9 gap-7 text-base mt-4">
            <Link href="#" className="font-medium">
              How it works
            </Link>
            <Link href="#" className="font-medium">
              Leaderboard
            </Link>
            <div className="relative">
              <Link
                href="#"
                className="font-semibold rounded-lg bg-white py-3 pr-8 pl-14 "
              >
                Sign In
              </Link>
              <div className="absolute top-1 left-3">
                <User />
              </div>
              <div className="absolute top-2 right-1">
                <Dropdown />
              </div>
            </div>
            <div className="relative">
              <Link
                href="#"
                className="font-semibold bg-special rounded-lg text-white px-14 py-3"
              >
                Sign Up
              </Link>
              <div className="absolute top-2 right-3">
                <DropUp />
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </Container>
  );
}

export default Navbar;
