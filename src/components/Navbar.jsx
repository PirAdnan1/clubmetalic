import React from "react";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

// components
import Container from "./Container";

// assest
import User from "@/assets/User";
import Dropdown from "@/assets/DropDown";
import DropUp from "@/assets/DropUp";
import Menue from "./Menue";
import CloseButton from "./CloseButton";

function Navbar() {
  const [menuClosed, setMenuClosed] = useState(true);
  return (
    <Container>
      <nav className="flex flex-col lg:flex-row lg:items-center items-start pl-6 lg:pl-0 lg:justify-center  justify-start lg:gap-56 gap-6 pt-5 pb-4 bg-secondary shadow-[0px_3px_3px_0px_rgba(196, 206, 218, 0.51)]">
        <div className="flex items-center">
          <div>
            <h1 className="text-primary lg:text-4xl text-2xl max-w-[159px] lg:max-w-full leading-5 font-bold">
              double your net worth<span className="text-base">.club</span>
            </h1>
          </div>
          <div>
            <button
              className="lg:hidden float-right"
              onClick={() => setMenuClosed((closed) => !closed)}
            >
              {menuClosed ? <Menue /> : <CloseButton />}
            </button>
          </div>
        </div>

        <ul
          className={clsx(
            "text-primary flex flex-col lg:flex-row lg:items-center items-start  gap-7 text-base mt-4",
            {
              "hidden lg:flex flex-col": menuClosed,
              "translate-x-0": !menuClosed,
            }
          )}
        >
          <Link href="#" className="font-medium whitespace-nowrap">
            How it works
          </Link>
          <Link href="#" className="font-medium whitespace-nowrap">
            Leaderboard
          </Link>
          <div className="relative">
            <Link
              href="#"
              className="font-semibold rounded-lg whitespace-nowrap bg-white px-14 py-3 "
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
          <div className="relative w-full">
            <Link
              href="#"
              className="font-semibold bg-special whitespace-nowrap rounded-lg text-white px-14 py-3"
            >
              Sign Up
            </Link>
            <div className="absolute top-2 right-3">
              <DropUp />
            </div>
          </div>
        </ul>
      </nav>
    </Container>
  );
}

export default Navbar;
