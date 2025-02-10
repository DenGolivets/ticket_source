'use client';

import Image from "next/image";
import Link from "next/link";
import React from "react";

const DownloadApp = () => {
  return (
    <section
      className="w-full md:h-91 bg-accent mb-16 rounded-2xl bg-pattern bg-cover p-10 xl:p-20
    bg-blend-multiply flex items-center justify-center"
    >
      <div className="flex flex-col xl:flex-row items-center gap-6">
        <div className="flex-1 text-center xl:text-left">
          <h2 className="h2">Experience Events In Your Pocket Today</h2>
          <p className="max-w-102.5 mx-auto xl:mx-0">
            Dowmload our App and get instant access to upcoming events and
            tailored recommendations
          </p>
        </div>
        <div className="flex-1 flex flex-col md:flex-row items-center justify-end gap-4">
          <Link href={'/'} className="relative w-48 h-16">
            <Image
              src='/assets/download/app-store.svg'
              width={100}
              height={100}
              alt="download app"
              className='object-contain w-48 h-16'
            />
          </Link>
          <Link href={'/'} className="relative w-54 h-16">
            <Image
              src='/assets/download/google-play.svg'
              width={100}
              height={100}
              alt="download app"
              className='object-contain w-54 h-16'
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
