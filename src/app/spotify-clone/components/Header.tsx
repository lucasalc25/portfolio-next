/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CircleChevronDown, House, PanelTop, Search, Menu } from "lucide-react";

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <div>
      {/* WEB */}
      <header className="flex items-center w-full h-16 bg-black max-sm:hidden">
        <a
          href="/spotify-clone"
          className="flex items-center justify-center min-w-18 h-8"
        >
          <img
            src="./projects/spotify-clone/logo_spotify.png"
            alt="Logo do projeto"
            className="sm:w-8 sm:h-8 w-6 h-6"
          />
        </a>

        {/* Barra de Pesquisa */}
        <div className="hidden sm:flex sm:justify-start sm:items-center sm:w-full sm:h-12 sm:static 2xl:justify-end">
          <div className="flex items-center w-full min-w-auto max-w-xl">
            <button className="flex items-center justify-center min-w-12 h-12 ms-2 text-zinc-400 bg-[#1F1F1F] rounded-full cursor-pointer transition-colors duration-200 ease-in-out hover:scale-[1.04] hover:text-zinc-100 hover:bg-[#282828]">
              <House size={24} />
            </button>

            {/* COMPACTA */}
            <form className="max-[1136px]:flex hidden items-center justify-center w-12 hover:shadow-sm hover:inset-shadow-[hsla(0,0%,100%,0.1)]">
              <button className="flex items-center justify-center min-w-12 h-12 ms-2 text-zinc-400 bg-[#1F1F1F] rounded-full cursor-pointer transition-colors duration-200 ease-in-out hover:scale-[1.04] hover:text-zinc-100 hover:bg-[#282828]">
                <Search
                  size={24}
                  className="text-zinc-400 hover:text-white transition-colors"
                />
              </button>
            </form>

            {/* COMPLETA */}
            <div className="w-full mx-auto px-2">
              <form
                className="group hidden min-[1136px]:flex rounded-full overflow-hidden 
                   bg-[#1F1F1F] border-0
                   text-zinc-400 transition-all duration-220 ease-in
                   w-full max-w-[474px] min-w-[329px]
                   hover:bg-[#2A2A2A] hover:shadow-[inset_0_0_0_1px] hover:shadow-[hsla(0,0%,100%,0.1)]"
              >
                {/* Ícone de pesquisa */}
                <button className="px-3 flex items-center justify-center cursor-pointer">
                  <Search
                    size={24}
                    className=" transition-colors duration-220 ease-in group-hover:text-white"
                  />
                </button>

                {/* Campo de input */}
                <div className=" flex flex-1 items-center max-[808px]:hidden">
                  <input
                    type="text"
                    placeholder="O que você quer ouvir?"
                    className="w-full bg-transparent outline-none text-[1rem] font-medium py-2 placeholder-zinc-400 transition-all duration-220 ease-in"
                  />
                </div>

                {/* Ícone do painel */}
                <div className="px-3 h-12 flex items-center justify-center relative pr-4 pl-3 max-[808px]:hidden">
                  <div className="absolute left-0 h-6 w-px bg-zinc-500" />
                  <PanelTop
                    size={24}
                    className="group-hover:text-white transition-colors duration-220 ease-in relative z-10 cursor-pointer"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="hidden sm:flex sm:items-center sm:justify-between">
          {/* Opções de Usuário */}
          <div className="flex items-center gap-2">
            <div>
              <a
                href="#"
                className="text-zinc-400 text-base font-semibold px-1 hover:text-white hover:scale-[1.04]"
              >
                Premium
              </a>
              <a
                href="#"
                className="text-zinc-400 text-base font-semibold px-1 hover:text-white hover:scale-[1.04]"
              >
                Suporte
              </a>
              <a
                href="#"
                className="text-zinc-400 text-base font-semibold px-1 hover:text-white hover:scale-[1.04]"
              >
                Baixar
              </a>
            </div>

            <div className="h-6 w-px mx-4 bg-zinc-100" />

            <a
              href="#"
              className="group flex items-center min-h-8 py-1 pl-9 pr-4 relative hover:scale-[1.04]"
            >
              <span className="start-3 absolute text-zinc-400 group-hover:text-white">
                <CircleChevronDown size={18} />
              </span>
              <span className="text-sm text-zinc-400 font-semibold truncate group-hover:text-white">
                Instalar aplicativo
              </span>
            </a>

            <a
              href="#"
              className="group flex items-center min-h-8 py-1 px-2 relative hover:scale-[1.04]"
            >
              <span className="text-sm text-zinc-400 font-semibold truncate group-hover:text-white">
                Inscrever-se
              </span>
            </a>

            <a className="hidden lg:block">
              <button className="flex items-center h-12 px-4 bg-white rounded-full cursor-pointer hover:scale-[1.04] hover:bg-zinc-100">
                <span className="text-base font-semibold text-zinc-950 truncate px-4 py-1">
                  Entrar
                </span>
              </button>
            </a>
          </div>
        </div>
      </header>

      {/* MOBILE */}
      <div className="fixed flex items-center w-full p-4 h-14 z-30 bg-black min-sm:hidden">
        <div className="flex items-center justify-between w-full">
          <div>
            <a
              href="/spotify-clone"
              className="flex items-center justify-center gap-1 min-w-18 h-8"
            >
              <img
                src="./projects/spotify-clone/logo_spotify.png"
                alt="Logo do projeto"
                className="w-6 h-6"
              />
              <span className="text-base font-bold text-white tracking-wide mt-0.5">
                Spotify
              </span>
            </a>
          </div>
          <div className="flex items-center">
            <button className="flex items-center h-8 bg-white rounded-full cursor-pointer hover:scale-[1.04] hover:bg-zinc-100">
              <span className="text-[0.825rem] font-bold text-black truncate tracking-tight px-4 py-1">
                Abrir o app
              </span>
            </button>
            <div className="flex items-center">
              <button className="flex items-center justify-center ps-4 z-[6] cursor-pointer text-white">
                <Menu onClick={onMenuClick} size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
