import React from "react";
import Image from "next/image";
import Logo from "../assets/logo.svg";

export function Footer() {
  return (
    <footer className="">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse space-x-0 md:space-x-12 md:flex-row">
          <div className="mt-8 md:mt-0">
            <Image src={Logo} alt="logo" width={124} />
            <p className="max-w-xs my-4 text-sm text-secondary">
              ©️ 2023 Peaze, Inc. &nbsp;
              <br className="hidden md:block" />
              All rights reserved
            </p>
            <a
              className="text-sm text-secondary"
              href="mailto:contact@peaze.com"
            >
              contact@peaze.com
            </a>
          </div>
          <div className="grid grid-cols-3 col-span-2 gap-12">
            <div>
              <p className="font-medium">Company</p>
              <nav className="flex flex-col mt-4 space-y-2 text-secondary">
                <a className="hover:opacity-75" href="#">
                  Careers
                </a>
                <a className="hover:opacity-75" href="#">
                  Terms & Conditions
                </a>
                <a className="hover:opacity-75" href="#">
                  Privacy Policy
                </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">Resources</p>
              <nav className="flex flex-col mt-4 space-y-2 text-secondary">
                <a className="hover:opacity-75" href="#">
                  GitHub
                </a>
                <a className="hover:opacity-75" href="#">
                  Documentation
                </a>
                <a className="hover:opacity-75" href="#">
                  Quickstart
                </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">Social</p>
              <nav className="flex flex-col mt-4 space-y-2 text-secondary">
                <a className="hover:opacity-75" href="#">
                  Twitter
                </a>
                <a className="hover:opacity-75" href="#">
                  Discord
                </a>
                <a className="hover:opacity-75" href="#">
                  Medium
                </a>
                <a className="hover:opacity-75" href="#">
                  Linkedin
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
