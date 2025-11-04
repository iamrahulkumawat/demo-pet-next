"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const HeaderNav = () => {
  const pathname = usePathname();

  const isActiveMenu = (paths) => {
    return paths.some((path) => pathname === path);
  };

  return (
    <ul className="navigation">
      <li
       
      >
        <a href="/">Home</a>
     
      </li>
      <li className={pathname === "/about" ? "active" : ""}>
        <Link href="/about">About</Link>
      </li>

       <li className={pathname === "/gallery" ? "active" : ""}>
        <Link href="/gallery">Gallery</Link>
      </li>
  
  
      <li className={pathname === "/contact" ? "active" : ""}>
        <Link href="/contact">contacts</Link>
      </li>
    </ul>
  );
};
