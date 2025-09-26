"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useEffect, useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

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
        className="fixed top-0 left-0 w-full z-[1000] bg-[#121214] shadow-[0_7px_29px_0_rgba(130,52,233,0.6)]"
      >
        <div className="flex items-center justify-between px-[5rem] py-[1rem]">
          {/* Logo */}
          <div
            id="logo-container"
            onClick={navigateHome}
            className="flex items-center text-[#eee] transition-colors duration-300 cursor-pointer"
          >
            <div className="w-[5rem] h-[5rem] rounded-full overflow-hidden bg-cover mr-[1.5rem]">
              <img
                src="./images/foto-perfil.jpg"
                alt="Logo"
                className="w-full h-full object-cover object-center block"
              />
            </div>
            <span className="text-[#eee] text-[1.6rem] uppercase font-bold tracking-[1px] transition-colors duration-300 hover:text-[#8234e9]">
              Lucas Alcântara
            </span>
          </div>

          {/* Links + Menu */}
          <div className="flex items-center gap-4">
            <ul className="hidden md:flex">
              {["Home", "Sobre", "Projetos", "Contato"].map((text, idx) => (
                <li
                  key={idx}
                  className="hover:text-[#8234e9]  text-[1.6rem] text-[#eee] font-bold uppercase tracking-[1px] transition-colors duration-300"
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
                <RxHamburgerMenu size={"full"} color="#eee" />
              ) : (
                <IoCloseSharp size={"full"} color="#eee" />
              )}
            </div>
          </div>
        </div>

        {/* Menu mobile */}
        <div
          className={`absolute top-full w-full bg-[#0D1117] transition-all duration-300 shadow-[0_5px_5px_0_rgba(255,255,255,0.1)] ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="small-menu-content">
            <ul className="small-menu-links">
              {["Home", "Sobre", "Projetos", "Contato"].map((text, idx) => (
                <li
                  key={idx}
                  className="border-b border-neutral-800 first:border-t"
                  onClick={closeMenu}
                >
                  <a
                    href={`#${text.toLowerCase()}`}
                    className="block px-[3rem] py-[2.5rem] text-[1.6rem] font-bold uppercase tracking-[2px] text-[#eee] text-right hover:text-[#8234e9] transition-colors duration-300"
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
        className="absolute left-0 w-full z-[900] bg-[linear-gradient(to_top,rgba(199,125,255,0.8),rgba(130,52,233,0.9)),url(/daac885…/c157c/assets/svg/common-bg.svg)] shadow-[0_5px_15px_0_rgba(0,0,0,0.2)] p-[1rem] text-center animate-[botton-header-show_0.5s]"
      >
        <h1 className="text-[1.5rem] font-bold text-[#eee]">
          Desenvolvedor Web Front-End
        </h1>
      </div>
    </div>
  );
}
