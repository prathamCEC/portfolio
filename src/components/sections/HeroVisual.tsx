
import { Code2, BriefcaseBusiness, Layers3, UserRound } from "lucide-react";

const destinations = [
  {
    label: "Projects",
    icon: Layers3,
    position: "left-[2%] top-[12%]",
  },
  {
    label: "Skills",
    icon: Code2,
    position: "right-[1%] top-[12%]",
  },
  {
    label: "About",
    icon: UserRound,
    position: "left-[0%] bottom-[14%]",
  },
  {
    label: "Experience",
    icon: BriefcaseBusiness,
    position: "right-[0%] bottom-[14%]",
  },
];

export default function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[650px]">

      {/* Orbital rings */}
      <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rotate-[-25deg] rounded-full border border-accent/30" />

      <div className="absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rotate-[35deg] rounded-full border border-white/10" />

      {/* Central planet */}
      <div className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/50 bg-[radial-gradient(circle_at_35%_30%,#D98245,#50301F_45%,#151719_80%)] shadow-[0_0_70px_rgba(217,130,69,0.25)] sm:h-56 sm:w-56">
        <Code2 className="h-16 w-16 text-[#F4F1EA] sm:h-20 sm:w-20" />
      </div>

      {/* Destination cards */}
      {destinations.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className={`absolute ${item.position} z-10 flex items-center gap-3 rounded-xl border border-accent/30 bg-[#222831]/90 px-4 py-3 shadow-xl backdrop-blur-md`}
          >
            <Icon className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium text-[#F4F1EA]">
              {item.label}
            </span>
          </div>
        );
      })}

      {/* Ambient glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[100px]" />

    </div>
  );
}
