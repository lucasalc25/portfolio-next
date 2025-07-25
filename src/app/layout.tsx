import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucas Alcântara",
  description: "Meu portfólio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
