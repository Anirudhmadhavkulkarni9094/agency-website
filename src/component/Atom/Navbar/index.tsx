"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Close, Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import content from "@/data/content.json";
import NavLink from "../NavLink";
import CustomButton from "../CustomButton";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-20 flex flex-wrap items-center justify-between gap-3 bg-[#faf9f6] px-5 py-3.5 sm:px-10 sm:py-4 lg:px-20 lg:py-5">
      <Link href="/" aria-label="Webcrafty.tech home" className="shrink-0">
        <Image
          src={content.navigation.logo}
          alt={content.navigation.logoAlt}
          width={146}
          height={26}
          priority
          className="h-auto w-[135px] sm:w-[146px]"
        />
      </Link>

      <IconButton
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        className="!inline-flex !h-11 !w-11 !rounded-none !text-black lg:!hidden"
      >
        {menuOpen ? <Close /> : <Menu />}
      </IconButton>

      <nav aria-label="Main navigation" className="hidden items-center gap-8 xl:gap-10 lg:flex">
        {content.navigation.links.map((link) => (
          <NavLink
            key={link.label}
            href={link.href.startsWith("#") ? `/${link.href}` : link.href}
            label={link.label}
          />
        ))}
      </nav>

      <div className="hidden lg:block">
        <CustomButton variant="contained" href="/#contact">
          {content.navigation.contact.label}
        </CustomButton>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`${menuOpen ? "flex" : "hidden"} w-full flex-col gap-1 border-t border-[#e6e4df] pb-2 pt-3 lg:hidden`}
      >
        {content.navigation.links.map((link) => (
          <NavLink
            key={link.label}
            href={link.href.startsWith("#") ? `/${link.href}` : link.href}
            label={link.label}
            className="flex min-h-11 items-center text-sm"
            onClick={() => setMenuOpen(false)}
          />
        ))}
        <CustomButton
          variant="contained"
          href="/#contact"
          onClick={() => setMenuOpen(false)}
          className="!mt-2 !min-h-11 !rounded-none"
        >
          {content.navigation.contact.label}
        </CustomButton>
      </nav>
    </header>
  );
}

export default Navbar;