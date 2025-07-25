import { House, LibraryBig, Search } from "lucide-react";
import { FaSpotify } from "react-icons/fa6";
import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="py-2 h-[82px] z-10 bg-black max-sm:hidden">
        <aside className="flex min-w-[620px] h-full">
          <div className="flex w-full flex-row items-center cursor-pointer gap-6 justify-between relative z-10 pt-[11px] pr-6 pb-[7px] pl-[15px] bg-linear-to-r from-[#af2896] to-[#509bf5]">
            <div className="mb-1 text-white">
              <p className="font-bold text-sm">Testar o Premium de graça</p>
              <p className="font-normal text-base">
                Inscreva-se para curtir música ilimitada e podcasts só com
                alguns anúncios. Não precisa de cartão de crédito.
              </p>
            </div>
            <button className="flex items-center h-12 px-4 bg-white rounded-full cursor-pointer hover:scale-[1.04] hover:bg-zinc-100">
              <span className="text-base font-bold text-zinc-950 truncate px-4 py-1">
                Inscreva-se grátis
              </span>
            </button>
          </div>
        </aside>
      </footer>

      <div className="fixed left-0 bottom-0 right-0 w-full z-20 bg-[linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.9),#121212)] min-sm:hidden">
        <div className="z-30">
          <div className="flex h-[70px] items-center">
            <a
              href="./"
              className="flex flex-1 justify-center items-center h-full flex-col gap-1 text-[#b3b3b3]"
            >
              <House size={24} />
              <span className="text-[0.7rem]">Início</span>
            </a>
            <a
              href=""
              className="flex flex-1 justify-center items-center h-full flex-col gap-1 text-[#b3b3b3]"
            >
              <Search size={24} />
              <span className="text-[0.7rem]">Buscar</span>
            </a>
            <a
              href=""
              className="flex flex-1 justify-center items-center h-full flex-col gap-1 text-[#b3b3b3]"
            >
              <LibraryBig size={24} />
              <span className="text-[0.7rem]">Sua Biblioteca</span>
            </a>
            <a
              href=""
              className="flex flex-1 justify-center items-center h-full flex-col gap-1 text-[#b3b3b3]"
            >
              <FaSpotify size={24} />
              <span className="text-[0.7rem]">Premium</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
