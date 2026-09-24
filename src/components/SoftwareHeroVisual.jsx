import {
  BarChart3,
  Cloud,
  Code2,
  Database,
  FolderOpen,
  Workflow,
} from "lucide-react";
import laptopImage from "../assets/software-laptop-wallpaper-hero.webp";

const codeLines = ["w-[84%] bg-[#dc2626]", "w-[62%] bg-sky-400", "w-[76%] bg-violet-400", "w-[48%] bg-emerald-400"];

function WindowHeader() {
  return (
    <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
      <span className="h-1.5 w-1.5 rounded-full bg-[#dc2626]" />
      <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
    </div>
  );
}

function CodeWindow() {
  return (
    <div className="software-popout software-popout-code" aria-hidden="true">
      <WindowHeader />
      <div className="grid grid-cols-[34px_1fr] gap-3 p-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#dc2626]">
          <Code2 className="h-5 w-5" strokeWidth={2.25} />
        </div>
        <div className="space-y-2 pt-1">
          {codeLines.map((line) => (
            <span key={line} className={`block h-1.5 rounded-full ${line}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkflowWindow() {
  return (
    <div className="software-popout software-popout-workflow" aria-hidden="true">
      <WindowHeader />
      <div className="flex items-center gap-3 p-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#dc2626] text-white">
          <Workflow className="h-5 w-5" />
        </div>
        <div className="flex flex-1 items-center gap-2">
          <span className="h-7 flex-1 rounded-lg bg-violet-400/90" />
          <span className="h-px w-4 bg-white/35" />
          <span className="h-7 flex-1 rounded-lg bg-sky-400/90" />
        </div>
      </div>
    </div>
  );
}

function CloudWindow() {
  return (
    <div className="software-popout software-popout-cloud" aria-hidden="true">
      <WindowHeader />
      <div className="flex items-center justify-around gap-2 px-3 py-3 text-white">
        <Cloud className="h-6 w-6 text-sky-400" />
        <FolderOpen className="h-6 w-6 text-amber-300" />
        <Database className="h-6 w-6 text-violet-400" />
      </div>
    </div>
  );
}

function AnalyticsWindow() {
  return (
    <div className="software-popout software-popout-analytics" aria-hidden="true">
      <WindowHeader />
      <div className="flex items-end gap-2 px-4 pb-3 pt-2">
        <BarChart3 className="h-7 w-7 shrink-0 text-[#dc2626]" />
        {[42, 70, 52, 86, 64].map((height, index) => (
          <span
            key={height}
            className={index === 3 ? "w-2 rounded-t bg-[#dc2626]" : "w-2 rounded-t bg-sky-400/80"}
            style={{ height: `${height * 0.34}px` }}
          />
        ))}
      </div>
    </div>
  );
}

export default function SoftwareHeroVisual() {
  return (
    <div
      className="software-hero-stage relative mx-auto aspect-[3/2] w-full max-w-[650px]"
      role="img"
      aria-label="Laptop with four animated software windows emerging from its screen"
    >
      <div className="software-laptop-float absolute inset-0">
        <img
          src={laptopImage}
          alt="Straight laptop with an illuminated blue and orange desktop wallpaper"
          className="software-laptop-image h-full w-full object-contain"
          loading="eager"
          decoding="async"
        />
      </div>

      <CodeWindow />
      <WorkflowWindow />
      <CloudWindow />
      <AnalyticsWindow />
    </div>
  );
}
