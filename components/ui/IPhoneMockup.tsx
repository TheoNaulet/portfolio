export default function IPhoneMockup({
  label,
  gradient,
  image,
}: {
  label: string;
  gradient: string;
  image?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* iPhone frame */}
      <div className="relative w-[220px] h-[478px] md:w-[260px] md:h-[564px] bg-[#1a1a1a] rounded-[44px] p-[6px] shadow-[0_25px_80px_rgba(0,0,0,0.25)] border border-[rgba(255,255,255,0.08)]">
        {/* Dynamic Island */}
        <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[76px] h-[22px] bg-[#000] rounded-full z-10" />

        {/* Screen */}
        <div className={`w-full h-full rounded-[38px] overflow-hidden bg-gradient-to-br ${gradient} flex items-center justify-center relative`}>
          {image ? (
            <img src={image} alt={label} className="absolute inset-0 w-full h-full object-cover" />
          ) : (
            <>
              <div className="absolute inset-0 bg-white/5" />
              <span className="font-condensed text-[28px] font-black uppercase text-white/70 tracking-[-0.02em] relative z-10">
                {label}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Label */}
      <span className="font-condensed text-[11px] font-bold tracking-[0.1em] uppercase text-ink2">
        {label}
      </span>
    </div>
  );
}
