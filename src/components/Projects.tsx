/* eslint-disable @next/next/no-img-element */
import React from "react";

const projects = [
  {
    img: "./images/to-do.png",
    alt: "Projeto 1",
    title: "Gerenciador de Tarefas",
    type: "html",
    desc: "Um aplicativo simples para criar, editar e excluir tarefas. Ideal para ajudar no gerenciamento de atividades diárias, oferecendo uma interface amigável e intuitiva para organizar suas tarefas. Também conta com funções de pesquisa e filtragem.",
    src: "/projects-html/",
  },
  {
    img: "/images/gerador-de-senhas.png",
    alt: "Projeto 2",
    title: "Gerenciador de senhas",
    type: "html",
    desc: "Um aplicativo para gerar e copiar senhas com opção de incluir, ou não, símbolos, números ou letras.",
    src: "/projects-html/",
  },
  {
    img: "./images/dev-notes.png",
    alt: "Projeto 3",
    title: "DevNotes",
    type: "html",
    desc: "Um bloco de notas digital, onde é possível criar, editar e fixar anotações de forma eficiente. Ideal para armazenar códigos, snippets, e informações úteis durante o desenvolvimento de projetos.Também é possível realizar o download das notas em um arquivo CSV.",
    src: "/projects-html/",
  },
  {
    img: "/images/gerador-qr-code.png",
    alt: "Projeto 4",
    title: "Gerador de QR Code",
    type: "html",
    desc: "Um aplicativo simples que gera QR Codes a partir de URLs ou textos inseridos pelo usuário. Útil para compartilhar informações de forma rápida e prática.",
    src: "/projects-html/",
  },
  {
    img: "/images/spotify-clone.png",
    alt: "Projeto 5",
    title: "Réplica Spotify Web",
    type: "next",
    desc: "Este projeto recria a página pública do Spotify, com foco em responsividade, design moderno e interatividade. Desenvolvido com React e Tailwind CSS, o layout apresenta seções como carrosséis de playlists, destaques musicais e navegação visual, simulando a experiência do site oficial sem funcionalidades de login ou reprodução musical.",
    src: "/projects/spotify-clone/index.html",
  },
  {
    img: "/images/pokedex.png",
    alt: "Projeto 6",
    title: "Pokedex API",
    type: "html",
    desc: "Um aplicativo que utiliza uma API para fornecer informações detalhadas sobre diversos Pokémon. Permite que os usuários visualizem dados como fotos, nomes e tipos de diferentes Pokémon, ideal para fãs e entusiastas.",
    src: "/projects/pokedex/pokedex.html",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="sections second-pad">
      <div className="section-container">
        <h2 className="section-title">Projetos</h2>
        <p className="description">
          Aqui você encontrará alguns dos projetos pessoais e acadêmicos que
          criei. Espero que goste!
        </p>

        <div>
          {projects.map(({ img, alt, title, desc, src }) => (
            <div
              key={title}
              className="grid grid-cols-2 gap-[5rem] mb-[11rem] last:mb-0"
            >
              <div className="border-[10px] border-[#111] rounded-[10px] overflow-hidden">
                <img
                  src={img}
                  alt={alt}
                  className="w-full h-full block object-cover"
                />
              </div>
              <div className="flex flex-col justify-center items-start p-8">
                <h3 className="font-bold text-[2.8rem] mb-8">{title}</h3>
                <p className="text-[1.8rem] text-justify text-[#666] max-w-[60rem] leading-[1.7] mb-12">
                  {desc}
                </p>
                <a
                  href={src}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-average"
                >
                  Link do Projeto
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
