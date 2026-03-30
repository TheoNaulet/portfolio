export default function MacBookMockup({
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
      {/* MacBook screen */}
      <div className="relative w-full">
        {/* Screen bezel */}
        <div className="bg-[#1a1a1a] rounded-t-[12px] p-[8px] pb-[6px]">
          {/* Camera dot */}
          <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-[6px] h-[6px] rounded-full bg-[#2a2a2a]" />
          {/* Screen */}
          <div className={`w-full aspect-[16/9] rounded-[4px] overflow-hidden bg-gradient-to-br ${gradient} flex items-center justify-center relative`}>
            {image ? (
              <img src={image} alt={label} className="absolute inset-0 w-full h-full object-cover object-top" />
            ) : (
              <>
                <div className="absolute inset-0 bg-white/5" />
                <span className="font-condensed text-[36px] md:text-[44px] font-black uppercase text-white/70 tracking-[-0.02em] relative z-10">
                  {label}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Bottom chin / hinge */}
        <div className="relative">
          <div className="h-[14px] bg-[#2a2a2a] rounded-b-[4px]" />
          <div className="mx-auto w-[38%] h-[4px] bg-[#3a3a3a] rounded-b-[4px]" />
        </div>

        {/* Base */}
        <div className="mx-[-4%] h-[8px] bg-gradient-to-b from-[#d1d1d1] to-[#b8b8b8] rounded-b-[8px] shadow-[0_2px_8px_rgba(0,0,0,0.1)]" />
      </div>

      {/* Label */}
      <span className="font-condensed text-[11px] font-bold tracking-[0.1em] uppercase text-ink2">
        {label}
      </span>
    </div>
  );
}
