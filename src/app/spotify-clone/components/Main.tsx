import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import CarouselSections from "./CarouselSections";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa6";

const carousels = [
  {
    title: "Músicas em alta",
    slides: [...Array(10)].map((_, i) => ({
      src: `./projects/spotify-clone/trending_musics/${i + 1}.jpg`,
      title: `Música ${i + 1}`,
      description: "Nome da música",
    })),
  },
  {
    title: "Artistas populares",
    slides: [...Array(10)].map((_, i) => ({
      src: `./projects/spotify-clone/artists/${i + 1}.jpg`,
      title: `Artista ${i + 1}`,
      description: "Nome do artista",
    })),
  },
  {
    title: "Singles e álbuns que todo mundo gosta",
    slides: [...Array(10)].map((_, i) => ({
      src: `./projects/spotify-clone/everyone_likes/${i + 1}.jpg`,
      title: `Álbum ${i + 1}`,
      description: "Destaque da semana",
    })),
  },
  {
    title: "Estações de rádio populares",
    slides: [...Array(10)].map((_, i) => ({
      src: `./projects/spotify-clone/popular_radios/${i + 1}.jpg`,
      title: "",
      description: "Artistas",
    })),
  },
  {
    title: "Paradas em destaque",
    slides: [...Array(6)].map((_, i) => ({
      src: `./projects/spotify-clone/featured_stops/${i + 1}.jpg`,
      title: "",
      description:
        "Mundo: seu relatório semanal das faixas mais tocadas no momento.",
    })),
  },
  {
    title: "Começou o verão!",
    slides: [...Array(10)].map((_, i) => ({
      src: `./projects/spotify-clone/summer/${i + 1}.jpg`,
      title: "",
      description: `Descrição ${i + 1}`,
    })),
  },
];

export default function Carousel() {
  return (
    <div className="relative bg-[#121212] text-white rounded-md overflow-y-scroll scrollbar-hidden scrollbar-hover max-sm:mt-[56px]">
      <div>
        <main>
          <div className="absolute top-0 h-[256px] w-full bg-gradient-to-b from-[#232323] to-[#121212] z-0 rounded-md max-sm:hidden max-sm:rounded-0"></div>

          <section className="relative mt-1 bg-transparent overflow-hidden">
            <div className="flex flex-wrap px-10 gap-3 w-full max-w-[1955px] max-sm:px-4">
              {carousels.map((carousel, idx) => (
                <CarouselSections
                  key={idx}
                  keyPrefix={`carousel-${idx}`}
                  title={carousel.title}
                  slides={carousel.slides}
                />
              ))}
            </div>
          </section>
          <footer className="pt-10 max-sm:p-0 max-sm:mb-18">
            <hr className="m-6 text-[#292929] max-sm:hidden" />
            <nav className="px-8 pt-2 pb-10 w-full max-sm:p-[8px_16px_40px]">
              <div className="flex flex-col mt-8 lg:justify-between lg:flex-row">
                <div className="main-footer flex flex-wrap flex-col">
                  <div className="main-footer-containers">
                    <ul>
                      <p>Empresa</p>
                      <a href="#">Sobre</a>
                      <a href="#">Empregos</a>
                      <a href="#">For the Record</a>
                    </ul>
                  </div>
                  <div className="main-footer-containers">
                    <ul>
                      <p>Comunidades</p>
                      <a href="#">Para Artistas</a>
                      <a href="#">Desenvolvedores</a>
                      <a href="#">Publicidade</a>
                      <a href="#">Investidores</a>
                      <a href="#">Fornecedores</a>
                    </ul>
                  </div>
                  <div className="main-footer-containers">
                    <ul>
                      <p>Links Úteis</p>
                      <a href="#">Suporte</a>
                      <a href="#">Aplicativo móvel grátis</a>
                      <a href="#">Popular por país</a>
                    </ul>
                  </div>
                  <div className="main-footer-containers">
                    <ul>
                      <p>Planos do Spotify</p>
                      <a href="#">Premium Individual</a>
                      <a href="#">Premium Duo</a>
                      <a href="#">Premium Família</a>
                      <a href="#">Premium Universitário</a>
                      <a href="#">Spotify Free</a>
                    </ul>
                  </div>
                </div>
                <div className="mb-10">
                  <div className="inline pr-4">
                    <a
                      href="#"
                      className="inline-flex justify-center items-center bg-[rgb(41,41,41)] w-10 h-10 rounded-[50%] filter hover:brightness-190"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                  <div className="inline pr-4">
                    <a
                      href="#"
                      className="inline-flex justify-center items-center bg-[rgb(41,41,41)] w-10 h-10 rounded-[50%] filter hover:brightness-190"
                    >
                      <FaTwitter />
                    </a>
                  </div>
                  <div className="inline pr-4">
                    <a
                      href="#"
                      className="inline-flex justify-center items-center bg-[rgb(41,41,41)] w-10 h-10 rounded-[50%] filter hover:brightness-190"
                    >
                      <FaFacebook />
                    </a>
                  </div>
                </div>
              </div>
              <hr className="m-6 ms-0 text-[#292929]" />
              <div className="lg:flex-row lg:flex-nowrap lg:items-start flex justify-between pt-4">
                <div className="flex-[0_0_auto] flex flex-row flex-nowrap items-end">
                  <div className="pr-4">
                    <p className="text-sm font-normal text-[#B3B3B3]">
                      © 2025 Lucas Alcântara Holanda
                    </p>
                  </div>
                </div>
              </div>
            </nav>
          </footer>
        </main>
      </div>
    </div>
  );
}
