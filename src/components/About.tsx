/* eslint-disable @next/next/no-img-element */
import React from "react";

const skills = [
  {
    name: "HTML",
    src: "/images/logo-html.png",
    alt: "Logo do HTML",
  },
  {
    name: "CSS",
    src: "/images/logo-css.png",
    alt: "Logo do CSS",
  },
  {
    name: "JavaScript",
    src: "/images/logo-js.png",
    alt: "Logo do JavaScript",
  },
  {
    name: "Tailwind",
    src: "/images/logo-tailwind.png",
    alt: "Logo do Tailwind",
  },
  {
    name: "React",
    src: "/images/logo-react.png",
    alt: "Logo do React",
  },

  {
    name: "Next.js",
    src: "/images/logo-next.png",
    alt: "Logo do Next.js",
  },
  {
    name: "Python",
    src: "/images/logo-python.png",
    alt: "Logo do Python",
  },
  {
    name: "Git",
    src: "/images/logo-github.png",
    alt: "Logo do Git",
  },
];

export default function About() {
  return (
    <section id="sobre" className="sections about second-pad">
      <div className="section-container about-container">
        <h2 className="section-title">Sobre</h2>
        <p className="description">
          Me chamo Lucas Alcântara, tenho 27 anos e estou concluindo este ano
          uma graduação em Ciência da Computação e cursos especializados em
          Desenvolvimento Web voltado para o Front-End. Estou muito empolgado e
          aberto a oportunidades de trabalho onde eu possa contribuir, aprender
          e crescer. Se você tiver uma oportunidade que corresponda às minhas
          competências, entre em contato por favor.
        </p>
        <a className="btn btn-average" href="#contact">
          Contato
        </a>
      </div>
      <div className="section-container text-center mb-[8rem] pt-[2rem]">
        <h3 className="text-[#111] text-center font-bold text-[2.8rem] mb-[5rem]">
          Habilidades
        </h3>
        <div className="flex justify-around items-center flex-wrap gap-y-[2rem] gap-x-[4rem]">
          {skills.map((skill, index) => (
            <div key={index} className="flex justify-center w-1/4 p-4">
              <img src={skill.src} alt={skill.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
