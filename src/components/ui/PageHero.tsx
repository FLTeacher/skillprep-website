export default function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="container-page pb-16 pt-36 sm:pt-44">
      {eyebrow && <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-brand">{eyebrow}</p>}
      <h1 className="max-w-4xl text-4xl leading-[1.08] sm:text-6xl">{title}</h1>
      {lead && <p className="mt-6 max-w-2xl text-lg text-purple-muted">{lead}</p>}
      {children && <div className="mt-8 flex flex-wrap items-center gap-3">{children}</div>}
    </header>
  );
}
