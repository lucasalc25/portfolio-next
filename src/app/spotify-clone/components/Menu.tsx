"use client";
import { X } from "lucide-react";
import React from "react";

export default function Menu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-screen bg-black z-50 transform transition-all duration-200 ease-in-out will-change-transform 
      ${
        isOpen
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0 pointer-events-none"
      }`}
    >
      {/* Botão fechar */}
      <div
        className="absolute top-5 right-4 text-white cursor-pointer"
        onClick={onClose}
      >
        <X size={24} />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col min-h-screen py-14 px-10 text-white">
        <button className="text-xl font-bold py-3 text-left">Entre</button>
        <button className="text-xl font-bold py-3 text-left">
          Inscreva-se
        </button>

        <div className="border-[1px] border-white my-8.5 w-4"></div>

        <div className="flex flex-col gap-2">
          {["Premium", "Ajuda", "Baixar", "Privacidade", "Condições"].map(
            (item) => (
              <button key={item} className="text-base font-bold py-1 text-left">
                {item}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}
