"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);

  const [headerHeight, setHeaderHeight] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const updateHeaderHeight = () => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navigateHome = () => {
    window.location.href = "/";
  };

  useEffect(() => {
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  return (
    <div>
      <header
        ref={headerRef}
        id="header"
        className="fixed top-0 left-0 w-full z-[1000] bg-white shadow-[0_10px_100px_rgba(0,0,0,0.2)]"
      >
        <div className="flex items-center justify-between px-[5rem] py-[1rem]">
          {/* Logo */}
          <div
            id="logo-container"
            onClick={navigateHome}
            className="flex items-center text-[#333] transition-colors duration-300 cursor-pointer"
          >
            <div className="w-[5rem] h-[5rem] rounded-full overflow-hidden bg-cover mr-[1.5rem]">
              <img
                src="./images/foto-perfil.jpg"
                alt="Logo"
                className="w-full h-full object-cover object-center block"
              />
            </div>
            <span className="text-[#333] text-[1.6rem] uppercase font-bold tracking-[1px] transition-colors duration-300 hover:text-[#d14c49]">
              Lucas Alcântara
            </span>
          </div>

          {/* Links + Menu */}
          <div className="flex items-center gap-4">
            <ul className="hidden md:flex">
              {["Home", "Sobre", "Projetos", "Contato"].map((text, idx) => (
                <li
                  key={idx}
                  className="hover:text-[#d14c49]  text-[1.6rem] text-[#333]  font-bold uppercase tracking-[1px] transition-colors duration-300"
                >
                  <a
                    href={`#${text.toLowerCase()}`}
                    className="inline-block px-[3rem] py-[2.2rem] "
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>

            {/* Botão Hamburguer */}
            <div
              id="burguer-cont"
              className="md:hidden w-[3rem] py-[2.2rem] cursor-pointer"
              onClick={toggleMenu}
            >
              {!menuOpen ? (
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/79e75114856ae61628d2ad26504e3ff4ab2c71b6/f06a4/assets/svg/ham-menu.svg"
                  alt="hamburger menu"
                  className="w-full"
                />
              ) : (
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/de2a681c8ca1630b29949b3a34bf158a686a0554/6a0ec/assets/svg/ham-menu-close.svg"
                  alt="hamburger menu close"
                  className="w-full"
                />
              )}
            </div>
          </div>
        </div>

        {/* Menu mobile */}
        <div
          className={`absolute top-full w-full bg-white transition-all duration-300 shadow-[0_5px_5px_0_rgba(0,0,0,0.1)] ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="small-menu-content">
            <ul className="small-menu-links">
              {["Home", "Sobre", "Projetos", "Contato"].map((text, idx) => (
                <li
                  key={idx}
                  className="border-b border-[#eee] first:border-t"
                  onClick={closeMenu}
                >
                  <a
                    href={`#${text.toLowerCase()}`}
                    className="block px-[3rem] py-[2.5rem] text-[1.6rem] font-bold uppercase tracking-[2px] text-[#333] text-right hover:text-[#7843e9] transition-colors duration-300"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      <div
        id="bottom-header"
        style={{ top: `${headerHeight}px` }}
        className="absolute left-0 w-full z-[900] bg-[linear-gradient(to_top,rgba(231,108,106,0.7),rgba(204,55,51,0.9)),url(/daac885…/c157c/assets/svg/common-bg.svg)] shadow-[0_5px_15px_0_rgba(0,0,0,0.2)] p-[1rem] text-center animate-[botton-header-show_0.5s]"
      >
        <h1 className="text-[1.5rem] font-bold text-white">
          Desenvolvedor Web Front-End
        </h1>
      </div>
    </div>
  );
}
