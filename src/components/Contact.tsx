"use client";
import React from "react";

export default function Contact() {
  return (
    <section
      id="contato"
      className="section bg-cover bg-center second-pad dynamic-bg"
    >
      <div className="section-container">
        <h2 className="section-title">Contato</h2>
        <p className="description">
          O formulário abaixo serve apenas para fins de estética e aprendizado.
        </p>

        <div className="bg-white rounded-[5px] shadow-[0_7px_29px_0_rgba(100,100,111,0.2)] p-16 w-[95%] max-w-[80rem] m-[5rem_auto_0_auto]">
          <form className="space-y-6">
            <div className="form-field-container">
              <label htmlFor="name" className="form-label">
                Nome
              </label>

              <input
                required
                id="name"
                name="name"
                type="text"
                placeholder="Digite seu nome..."
                className="form-input"
              />
            </div>

            <div className="form-field-container">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                required
                id="email"
                name="email"
                type="email"
                placeholder="Digite seu email..."
                className="form-input"
              />
            </div>

            <div className="form-field-container">
              <label htmlFor="message" className="form-label">
                Mensagem
              </label>

              <textarea
                required
                id="message"
                name="message"
                rows={5}
                placeholder="Digite sua mensagem..."
                className="form-input"
              ></textarea>
            </div>

            <a
              onClick={() =>
                alert(
                  "Foi mal, este formulário é apenas para fins didáticos :/"
                )
              }
              type="submit"
              className="btn contact-btn"
            >
              Enviar
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}
