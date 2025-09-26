/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandReact,
  TbBrandNextjs,
} from "react-icons/tb";
import { DiPostgresql } from "react-icons/di";
import { BiLogoGithub, BiLogoPython, BiLogoTailwindCss } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa6";
import { CgFigma } from "react-icons/cg";
import { SiStyledcomponents } from "react-icons/si";

export default function About() {
  return (
    <section id="sobre" className="sections about second-pad">
      <div className="section-container about-container">
        <h2 className="section-title">Sobre</h2>
        <p className="description">
          Estudante de Ciência da Computação na UNIP, venho me especializando em
          Desenvolvimento Front-end há 3 anos, criando projetos acadêmicos e
          pessoais com as tecnologias abaixo. Atualmente, desenvolvo um Design
          System como TCC, unindo boas práticas de usabilidade e consistência
          visual.
        </p>
        <a className="btn btn-average" href="#contato">
          Contato
        </a>
      </div>
      <div className="section-container">
        <h3 className="text-[#eee] text-center font-bold text-[3.2rem] mb-[3rem]">
          Habilidades
        </h3>
        <div className="flex justify-around items-center flex-wrap gap-y-[3rem] gap-x-[3rem]">
          <ul className="flex flex-wrap max-w-[70rem] w-[90%] gap-[1.3rem] justify-center">
            <li className="skills-item">
              <TbBrandHtml5 size={"full"} color="#eee" />
            </li>
            <li className="skills-item">
              <TbBrandCss3 size={"full"} color="#eee" />
            </li>
            <li className="skills-item">
              <TbBrandJavascript size={"full"} color="#eee" />
            </li>
            <li className="skills-item">
              <TbBrandTypescript size={"full"} color="#eee" />
            </li>
            <li className="skills-item">
              <TbBrandReact size={"full"} color="#eee" />
            </li>
            <li className="skills-item">
              <TbBrandNextjs size={"full"} color="#eee" />
            </li>

            <li className="skills-item">
              <BiLogoTailwindCss size={"full"} color="#eee" />
            </li>
            <li className="skills-item">
              <SiStyledcomponents size={"full"} color="#eee" />
            </li>
            <li className="skills-item">
              <BiLogoPython size={"full"} color="#eee" />
            </li>
            <li className="skills-item">
              <DiPostgresql size={"full"} color="#eee" />
            </li>
            <li className="skills-item">
              <FaGitAlt size={"full"} color="#eee" />
            </li>
            <li className="skills-item">
              <BiLogoGithub size={"full"} color="#eee" />
            </li>
            <li className="skills-item">
              <CgFigma size={"full"} color="#eee" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
