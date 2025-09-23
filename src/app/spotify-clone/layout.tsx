import "./styles.css";

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
