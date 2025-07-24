import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="w-full bg-[#d14c49] min-h-[100px] px-12 py-5 flex flex-col items-center justify-center">
      <ul className="flex justify-center items-center m-[10px_0] flex-wrap">
        <li className="social-icon__item">
          <a
            href="https://github.com/lucasalc25"
            target="_blank"
            className="social-icon__link"
          >
            <FaGithub size={24} />
          </a>
        </li>
        <li className="social-icon__item">
          <a
            href="https://www.linkedin.com/in/lucas-alc%C3%A2ntara-holanda-673114213/"
            target="_blank"
            className="social-icon__link"
          >
            <FaLinkedin size={24} />
          </a>
        </li>
        <li className="social-icon__item">
          <a href="#" className="social-icon__link">
            <FaTwitter size={24} />
          </a>
        </li>
        <li className="social-icon__item">
          <a
            href="https://www.instagram.com/#"
            target="_blank"
            className="social-icon__link"
          >
            <FaInstagram size={24} />
          </a>
        </li>
      </ul>

      <ul className="flex justify-center items-center m-[10px_0] flex-wrap">
        <li className="menu__item">
          <a href="#home" className="menu__link">
            Home
          </a>
        </li>
        <li className="menu__item">
          <a href="#about" className="menu__link">
            Sobre
          </a>
        </li>
        <li className="menu__item">
          <a href="#projects" className="menu__link">
            Projetos
          </a>
        </li>
        <li className="menu__item">
          <a href="#contact" className="menu__link">
            Contato
          </a>
        </li>
      </ul>

      <p className="text-white mt-[15px_0_10px_0] text-[1.2rem] font-light">
        &copy;2024 Lucas Alcântara | Todos os direitos reservados
      </p>
    </footer>
  );
}
