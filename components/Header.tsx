import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.svg";

export function Header() {
  return (
    <nav className="flex flex-row items-center justify-between w-full md:justify-start">
      <Link href="/" className="mr-[42px]">
        <Image src={Logo} alt="logo" width={124} />
      </Link>

      <div>
        <a
          href="https://docs.peaze.com"
          target="_blank"
          rel="noreferrer noopener"
          className="mr-6 hover:text-accent"
        >
          Docs
        </a>
        {/* <a
          href="https://demo.peaze.com"
          target="_blank"
          rel="noreferrer"
          className=" hover:text-accent"
        >
          Demo
        </a> */}
      </div>
    </nav>
  );
}
