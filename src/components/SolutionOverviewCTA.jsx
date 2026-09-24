import { Link } from "react-router-dom";
import Silk from "../pages/Silk.jsx";

function Arrow({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={`h-6 ${className}`}
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

function SectionPill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] md:px-8 md:py-3.5 md:text-[13px] text-[#111318] shadow-[0_14px_35px_-24px_rgba(0,0,0,.18)]">
      {children}
    </span>
  );
}

export default function SolutionOverviewCTA() {
  return (
    <section
      id="contact"
      data-home-cta
      className="relative overflow-hidden bg-[#dc2626] px-4 pb-8 pt-3 sm:px-6 sm:pb-10 md:pb-16 md:pt-6"
    >
      <style>{`
        @keyframes ramton-float {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(-8deg) scale(1); }
          50% { transform: translate3d(18px, -24px, 0) rotate(7deg) scale(1.04); }
        }

        @keyframes ramton-float-reverse {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(10deg) scale(1); }
          50% { transform: translate3d(-20px, 18px, 0) rotate(-7deg) scale(.96); }
        }

        .ramton-float { animation: ramton-float 8s ease-in-out infinite; }
        .ramton-float-reverse { animation: ramton-float-reverse 10s ease-in-out infinite; }

        @media (max-width: 639px) {
          .cta-talk { width: 150px !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          .ramton-float,
          .ramton-float-reverse { animation: none !important; }
        }
      `}</style>

      <div className="absolute inset-0 z-0 overflow-hidden">
        <Silk
          speed={3.1}
          scale={0.8}
          color="#b91c1c"
          noiseIntensity={0}
          rotation={0}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px]">
        <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#dc2626]/95 via-[#dc2626]/95 to-[#991b1b]/95 px-5 py-10 sm:rounded-[28px] sm:px-8 sm:py-14 text-center text-white shadow-[0_30px_80px_-45px_rgba(220,38,38,.55)] sm:px-10 md:px-16 md:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,.9) 1px, transparent 1px)",
              backgroundSize: "12px 12px",
            }}
          />

          <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full border border-white/15 ramton-float" />
          <div className="pointer-events-none absolute -right-20 bottom-[-100px] h-72 w-72 rounded-full border border-black/10 ramton-float-reverse" />

          <div className="relative z-10 mx-auto max-w-[760px]">
            <SectionPill>CTA</SectionPill>

            <h2 className="mt-5 text-[32px] font-normal leading-[1.04] sm:mt-6 sm:text-[44px] md:text-[62px] tracking-[-0.055em] sm:text-[50px] md:text-[62px]">
              Ready to Build a Smarter IT Infrastructure?
            </h2>

            <p className="mx-auto mt-4 max-w-[90vw] text-[14px] sm:mt-5 sm:max-w-[650px] sm:text-[15px] leading-[1.75] text-white/90 md:text-[17px]">
              Let&apos;s discuss how Ramton can help your business achieve more
              with the right technology.
            </p>

            <Link
              to="/contact"
              aria-label="Let's Talk"
              className="cta-talk group relative mt-7 inline-flex h-[58px] w-[200px] items-center overflow-hidden rounded-full bg-white px-1.5 text-[#111318] shadow-[0_18px_40px_-28px_rgba(15,23,42,.28)] transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-0.5"
            >
              <span
                aria-hidden="true"
                className="absolute left-1.5 top-1/2 z-10 h-[52px] w-[52px] -translate-y-1/2 rounded-full bg-[#dc2626] transition-[width,border-radius] duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:w-[calc(100%-12px)] group-hover:rounded-full"
              />

              <span className="pointer-events-none absolute left-1.5 top-1/2 z-30 flex h-[52px] w-[52px] -translate-y-1/2 items-center justify-center text-white">
                <Arrow className="h-5 w-5 shrink-0 transform-none" />
              </span>

              <span className="relative z-20 ml-[57px] whitespace-nowrap text-[18px] font-semibold text-[#111318] transition-colors duration-300 group-hover:text-white">
                Let&apos;s Talk
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
