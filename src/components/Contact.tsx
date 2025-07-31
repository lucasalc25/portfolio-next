import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xblkkywb");

  // Mostrar alerta uma vez após sucesso
  useEffect(() => {
    if (state.succeeded) {
      alert("Obrigado pelo contato!");
    }
  }, [state.succeeded]);

  if (state.succeeded) {
    return <p className="text-green-600">Mensagem enviada com sucesso!</p>;
  }

  return (
    <section
      id="contato"
      className="section bg-cover bg-center second-pad dynamic-bg"
    >
      <div className="section-container">
        <h2 className="section-title">Contato</h2>
        <p className="description" style={{ textAlign: "center" }}>
          Tem uma dúvida, proposta ou sugestão? Preencha o formulário abaixo e
          responderei o mais breve possível.
        </p>

        <div className="bg-white rounded-[5px] shadow-[0_7px_29px_0_rgba(100,100,111,0.2)] p-16 w-[95%] max-w-[80rem] m-[5rem_auto_0_auto]">
          <form onSubmit={handleSubmit} className="space-y-6">
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
              <ValidationError
                prefix="Nome"
                field="name"
                errors={state.errors}
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
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
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
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="btn contact-btn"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
