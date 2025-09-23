import "./styles.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spotify Web",
  description: "Música pra todos",
};

export default function SpotifyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="font-spotify bg-zinc-950 overflow-hidden">
      {children}
    </section>
  );
}
