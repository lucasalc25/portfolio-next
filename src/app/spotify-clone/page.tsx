"use client"; // necessário para habilitar interatividade no App Router
import { useState } from "react";
import type { Metadata } from "next";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Main from "./components/Main";
import Menu from "./components/Menu";

export const metadata: Metadata = {
  title: "Spotify Web",
  description: "Música pra todos",
};

export default function SpotifyClone() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <div>
      {/* WEB */}
      <div className="relative grid grid-rows-[64px_1fr_82px] h-screen px-2 overflow-hidden max-sm:hidden">
        <Header
          onMenuClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />

        <div className="row-start-2 row-end-3 grid grid-cols-[1.13fr_4fr] h-full gap-2 overflow-hidden">
          <Sidebar />

          <Main />
        </div>

        <Footer />
      </div>

      {/* MOBILE */}
      <div className="flex flex-col min-h-screen min-sm:hidden">
        <Menu isOpen={menuAberto} onClose={() => setMenuAberto(false)} />

        <Header onMenuClick={() => setMenuAberto(true)} />

        <div className="h-full overflow-auto">
          <Main />
        </div>

        <Footer />
      </div>
    </div>
  );
}
