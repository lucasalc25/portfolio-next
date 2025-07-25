import React from "react";
import { Plus, Globe } from "lucide-react";

export default function Sidebar() {
  return (
    <aside
      className="min-w-[286px] w-full
            bg-[#121212] text-white overflow-hidden rounded-md 
            transition-all duration-300 ease-in-out"
    >
      {/* Header da sidebar */}
      <header className="flex justify-between h-[71px]">
        <div className="flex flex-row justify-between items-center w-full h-[51px] pb-2 pt-4 px-3 ml-1">
          <h1 className="text-base font-semibold">Sua Biblioteca</h1>

          {/* Botão criar playlist */}
          <button
            className="flex items-center text-zinc-400 hover:text-zinc-100 transition p-2 w-10 h-10 cursor-pointer rounded-full hover:bg-zinc-800"
            aria-label="Toggle sidebar"
          >
            <Plus size={22} />
          </button>
        </div>
      </header>

      {/* Container com sections */}
      <div className="flex flex-col px-2 pb-2 gap-2 mt-2">
        <section className="flex flex-col gap-5 my-2 px-5 py-4 bg-[#1f1f1f] rounded-lg">
          <div className="flex flex-col gap-2">
            <span className="text-base font-[700]">
              Crie sua primeira playlist
            </span>
            <span className="text-sm font-[400]">
              É fácil, vamos te ajudar.
            </span>
          </div>
          <div>
            <button className="flex items-center bg-white rounded-full cursor-pointer hover:scale-[1.04] hover:bg-zinc-100">
              <span className="text-sm font-[700] text-zinc-950 truncate px-4 py-1">
                Criar playlist
              </span>
            </button>
          </div>
        </section>
        <section className="flex flex-col gap-5 my-2 px-5 py-4 bg-[#1f1f1f] rounded-lg">
          <div className="flex flex-col gap-2">
            <span className="text-base font-[700]">
              Que tal seguir um podcast novo?
            </span>
            <span className="text-sm font-[400]">
              Avisaremos você sobre novos episódios.
            </span>
          </div>
          <div>
            <button className="flex items-center bg-white rounded-full cursor-pointer hover:scale-[1.04] hover:bg-zinc-100">
              <span className="text-sm font-[700] text-zinc-950 truncate px-4 py-1">
                Explore podcasts
              </span>
            </button>
          </div>
        </section>
      </div>

      {/* Sidebar Footer */}
      <div className="mt-52">
        <div className="px-6 text-start mb-6">
          <div className="flex flex-wrap">
            <div className="mr-4 mb-2">
              <a href="#">
                <span className="text-[11px] text-zinc-400">Legal</span>
              </a>
            </div>
            <div className="mr-4">
              <a href="#">
                <span className="text-[11px] text-zinc-400">
                  Segurança e Centro de Privacidade
                </span>
              </a>
            </div>
            <div className="mr-4">
              <a href="#">
                <span className="text-[11px] text-zinc-400">
                  Política de Privacidade
                </span>
              </a>
            </div>
            <div className="mr-4 mb-2">
              <a href="#">
                <span className="text-[11px] text-zinc-400">Cookies</span>
              </a>
            </div>
            <div className="mr-4">
              <a href="#">
                <span className="text-[11px] text-zinc-400">
                  Sobre anúncios
                </span>
              </a>
            </div>
            <div className="mr-4">
              <a href="#">
                <span className="text-[11px] text-zinc-400">
                  Acessibilidade
                </span>
              </a>
            </div>
          </div>
          <a href="#" className="pr-4">
            <span className="text-xs  hover:underline">Cookies</span>
          </a>
        </div>
        <div className="px-6">
          <button className="flex gap-2 items-center border-[1px] border-solid border-zinc-400 rounded-full py-1 px-3 cursor-pointer transition-all .15s hover:scale-[1.04] hover:border-zinc-200">
            <Globe size={18} className="text-zinc-200" />
            <span className="tracking-tight text-zinc-200 text-sm font-[700]">
              Português do Brasil
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
}
