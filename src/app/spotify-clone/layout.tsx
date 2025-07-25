import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Spotify Web",
  description: "Music for everyone",
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
