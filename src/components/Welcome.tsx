import React from "react";

export default function Welcome() {
  return (
    <section
      id="welcome"
      className="welcome relative min-h-screen flex flex-col justify-center items-center bg-[#121214] bg-center animate-[welcome-show_1s]"
    >
      <div
        id="welcome-content"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-[90rem]"
      >
        {/* Título */}
        <h1
          id="welcome-title"
          className="text-[6rem] text-[#eee] font-extrabold uppercase tracking-[3px] text-center"
        >
          Bem-vindo(a)!
        </h1>

        {/* Info */}
        <div id="welcome-info" className="mt-[3rem] mx-auto max-w-[80rem]">
          <p className="text-[#eee] text-[2.2rem] text-center leading-[1.6] w-full">
            Aqui você conhecerá um entusiasta da web apaixonado por criar
            experiências incríveis.
          </p>
        </div>

        {/* Botão */}
        <div id="welcome-btn" className="mt-[5rem] text-center text-white">
          <a href="#projetos" className="btn hover:-translate-y-[3px]">
            Projetos
          </a>
        </div>
      </div>

      <div
        id="mouse-scroll-cont"
        className="absolute bottom-[5%] left-1/2 -translate-x-1/2"
      >
        <div
          id="mouse"
          className="relative w-[80px] h-[110px] border-2 border-neutral-300 rounded-[60px] overflow-hidden before:content-[''] before:absolute before:w-[9px] before:h-[18px] before:top-[15px] before:left-1/2 before:-translate-x-1/2 before:bg-neutral-300 before:rounded-full before:opacity-100 before:animate-mouse-scroll"
        ></div>
      </div>
    </section>
  );
}
