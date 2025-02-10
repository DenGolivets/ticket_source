import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute left-0 right-0 z-10">
      <div className="container mx-auto h-full border-b border-white/10 py-4 xl:py-6">
        <div className="flex mb-2">
          <div className="flex flex-col xl:flex-row w-full items-center justify-between">
            <Link href="/">
              <Image
                src="/assets/logo.png"
                alt="logo"
                width={150}
                height={150}
                className="w-auto h-auto bg-blend-lighten"
              />
            </Link>
            <div className="flex items-center gap-4">
              <Button className="btn btn-tertiary">Sign In</Button>
              <Button className="btn btn-accent">Sign Up</Button>
            </div>
          </div>
        </div>
        {/* <p className="text-sm xl:text-base hidden xl:flex">
          "Discover Your Next Adventure: Explore Events, Meetups, and Experiences
          in Your City" Alternatively, you could also use: "Find Your Fun: Search
          Events, Concerts, Festivals, and More in Your Area" Or: "Get Out and
          Explore: Your Guide to Local Events, Activities, and Things to Do"
        </p> */}
      </div>
    </header>
  );
};

export default Header;
