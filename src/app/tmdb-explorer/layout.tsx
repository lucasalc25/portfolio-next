import "./styles/override-font.css";

export default function TmdbLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="bg-zinc-950 text-zinc-100">{children}</section>;
}
