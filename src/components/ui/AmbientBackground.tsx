/** Fixed depth layer for glass to sit over: blurred colour orbs (Haikei SVG field to come). */
export default function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-navy-deep">
      {/* TODO: add a Haikei SVG field here (e.g. a background-image from /public/bg) once the asset exists. */}
      <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] animate-orb rounded-full bg-purple/40 blur-[120px]" />
      <div className="absolute -right-32 top-1/3 h-[28rem] w-[28rem] animate-orb rounded-full bg-cyan-brand/25 blur-[120px] [animation-delay:-6s]" />
      <div className="absolute -bottom-40 left-1/4 h-[30rem] w-[30rem] animate-orb rounded-full bg-purple-dark/40 blur-[130px] [animation-delay:-12s]" />
    </div>
  );
}
