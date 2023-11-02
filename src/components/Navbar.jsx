// hooks
import { useState } from "react";
import { useRouter } from "next/router";

// util
import clsx from "clsx";
import cn from "@/utills/cn";

// components
import Container from "./Container";
import Link from "next/link";

// hooks
import useIsMobile from "./useIsMobile";

// icons
import CloseButton from "./CloseButton";
import Menue from "./Menue";
import DropUp from "@/assets/DropUp";
import Dropdown from "@/assets/DropDown";
import User from "@/assets/User";

export default function Navbar() {
  const isMobile = useIsMobile(1024);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container>
      <div className="flex justify-between items-center py-7 px-4 lg:px-10 shadow-md">
        <h1 className="text-primary lg:text-4xl text-2xl max-w-[159px] lg:max-w-full leading-5 font-bold">
          double your net worth<span className="text-base">.club</span>
        </h1>
        <button
          onClick={() => setIsMenuOpen(true)}
          className={clsx(
            "pb-4 text-primary transition-colors hover:text-cool-grey-800",
            {
              hidden: !isMobile,
            }
          )}
        >
          <Menue />
        </button>
        <div
          className={clsx("flex flex-grow transition-transform duration-500", {
            "fixed inset-0 z-50 translate-x-[100%] bg-white": isMobile,
            "!translate-x-0": isMenuOpen,
          })}
        >
          <div
            className={clsx({
              "flex flex-grow items-center justify-between": !isMobile,

              "mx-auto flex max-w-sm flex-grow flex-col gap-12 text-2xl":
                isMobile,
            })}
          >
            <div
              className={clsx("flex h-[100px] items-end justify-between", {
                hidden: !isMobile,
              })}
            >
              <h1 className="text-primary lg:text-4xl text-2xl max-w-[159px] lg:max-w-full leading-5 font-bold">
                double your net worth<span className="text-base">.club</span>
              </h1>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="pb-4 pr-4 text-primary transition-colors hover:text-cool-grey-800"
              >
                <CloseButton />
              </button>
            </div>
            {/* <ul
              className={clsx("flex items-center lg:gap-16 gap-10 lg:ml-auto", {
                "flex-col": isMobile,
              })}
            >
              <li className="hover:text-primary text-xs text-secondary font-bold">
                <Link
                  href="/"
                  className={cn("border-bottom-hover pb-2", {
                    "text-primary border_on_clicked font-medium ":
                      router.pathname == "/",
                  })}
                >
                  STARTSEITE
                </Link>
              </li>
              <li className="hover:text-primary text-xs text-secondary font-bold">
                <Link
                  href="/Anwaltskanzlei"
                  className={cn("border-bottom-hover pb-2", {
                    "text-primary border_on_clicked font-medium ":
                      router.pathname == "/Anwaltskanzlei",
                  })}
                >
                  Anwaltskanzlei
                </Link>
              </li>
              <li className="hover:text-primary text-xs text-secondary font-bold">
                <Link
                  href="/iNSOLVENZRECHT"
                  className={cn("border-bottom-hover pb-2", {
                    "text-primary border_on_clicked font-medium ":
                      router.pathname == "/iNSOLVENZRECHT",
                  })}
                >
                  iNSOLVENZRECHT
                </Link>
              </li>
              <li className="hover:text-primary text-xs text-secondary font-bold">
                <Link
                  href="/team"
                  className={cn("border-bottom-hover pb-2", {
                    "text-primary border_on_clicked font-medium ":
                      router.pathname == "/team",
                  })}
                >
                  team
                </Link>
              </li>
              <li className="hover:text-primary text-xs text-secondary font-bold">
                <Link
                  href="/Kontakt"
                  className={cn("border-bottom-hover pb-2", {
                    "text-primary border_on_clicked font-medium ":
                      router.pathname == "/Kontakt",
                  })}
                >
                  Kontakt
                </Link>
              </li>
            </ul> */}
            <div
              className={clsx("flex justify-center gap-14 lg:ml-auto items-center", {
                "w-full mx-auto  flex-col": isMobile,
              })}
            >
                <Link href="#" className="font-medium whitespace-nowrap text-primary">
            How it works
          </Link>
              <Link href="#" className="font-medium whitespace-nowrap text-primary">
                Leaderboard
              </Link>
              <div className="relative">
                <Link
                  href="#"
                  className="font-semibold rounded-lg whitespace-nowrap bg-white shadow-lg px-14 py-3 "
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
                  className="font-semibold bg-special shadow-lg whitespace-nowrap rounded-lg text-white px-14 py-3"
                >
                  Sign Up
                </Link>
                <div className="absolute top-2 right-3">
                  <DropUp />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
