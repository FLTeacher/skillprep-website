/** Fixed depth layer for glass to sit over: Haikei SVG field (when present) + blurred color orbs. */
export default function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-navy-deep">
      {/* Drop Haikei export at /public/bg/field.svg */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: "url(/bg/field.svg)" }}
      />
      <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] animate-orb rounded-full bg-purple/40 blur-[120px]" />
      <div className="absolute -right-32 top-1/3 h-[28rem] w-[28rem] animate-orb rounded-full bg-cyan-brand/25 blur-[120px] [animation-delay:-6s]" />
      <div className="absolute -bottom-40 left-1/4 h-[30rem] w-[30rem] animate-orb rounded-full bg-purple-dark/40 blur-[130px] [animation-delay:-12s]" />
    </div>
  );
}
