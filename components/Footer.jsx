import Image from "next/image";
import Link from "next/link";
import React from "react";

const socials = [
  {
    src: "/assets/footer/facebook.svg",
    path: "",
  },
  {
    src: "/assets/footer/x.svg",
    path: "",
  },
  {
    src: "/assets/footer/instagram.svg",
    path: "",
  },
  {
    src: "/assets/footer/youtube.svg",
    path: "",
  },
  {
    src: "/assets/footer/pinterest.svg",
    path: "",
  },
];

const Footer = () => {
  return (
    <footer className="bg-accent bg-pattern bg-cover bg-blend-multiply pt-16">
      <div className="container mx-auto border-b border-white/40">
        <div className="flex flex-col max-w-137.5 mx-auto text-center">
          <div className="mb-9">
            <h2 className="h2 mb-3">Your Event Connection</h2>
            <p>Join our list for exclusive event updates and insider tips.</p>
          </div>
          <form className="relative flex items-center mb-16">
            <input
              type="text"
              placeholder="Your email address"
              className="pl-8 w-full h-15 rounded-full outline-none placeholder:text-primary/80 text-primary
              text-sm bg-white"
            />
            <button className="bg-secondary hover:bg-secondary-hover transition-all w-28.5 h-13 rounded-full
            text-sm uppercase absolute right-1 shadow-lg shadow-black/60 cursor-pointer">
              Join
            </button>
          </form>
          <div className="mb-18 flex gap-8 mx-auto">
            {socials.map((social, index) => (
              <Link key={index} href={social.path} className="relative w-5 h-5">
                <Image src={social.src} fill alt="social" className="w-auto h-auto" />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="py-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <Link href={"/"} className="relative flex w-19.5 h-7.5">
              <Image
                src="/assets/logo.png"
                width={150}
                height={150}
                alt="logo"
                className="w-auto h-auto bg-blend-lighten"
              />
            </Link>
            <p className="text-sm">
              Copyright &copy; 2025. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
