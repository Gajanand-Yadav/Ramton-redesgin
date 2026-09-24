import {
  ShieldCheck,
  Settings2,
  Headphones,
  CheckCircle2,
  Camera,
  Video,
  Eye,
  Radio,
} from "lucide-react";
import SolutionHero from "../../components/SolutionHero";
import Partners from "../../components/SolutionTechnologyPartners";
import SolutionOverviewCTA from "../../components/SolutionOverviewCTA";

/* =========================================================
   SERVICES
   ========================================================= */

const solutions = [
  {
    number: "01",
    title: "CCTV Surveillance",
    text: "Indoor and outdoor camera systems for dependable visibility across offices, facilities and critical areas.",
    icon: Camera,
    image: "https://images.unsplash.com/photo-1519871544760-ff4e659017b9?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "02",
    title: "Video Management",
    text: "Centralized recording and monitoring solutions that make it easier to review and manage security footage.",
    icon: Video,
    image: "https://images.unsplash.com/photo-1662242723207-13ad21d3816f?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "03",
    title: "Remote Monitoring",
    text: "Stay connected to your security environment with remote access to cameras and video feeds.",
    icon: Radio,
    image: "https://images.unsplash.com/photo-1676405034160-a389faf8331d?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "04",
    title: "Access Control",
    text: "Secure entry systems that help manage and monitor access to offices, facilities and restricted areas.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1754494977436-a5c202306fe4?auto=format&fit=crop&w=1400&q=85",
  },
];

/* =========================================================
   BENEFITS
   ========================================================= */

const benefits = [
  [
    "24/7 Visibility",
    "Keep an eye on important areas throughout the day and night.",
    Eye,
  ],
  [
    "Scalable Coverage",
    "Add cameras and monitoring points as your premises evolve.",
    ShieldCheck,
  ],
  [
    "Professional Installation",
    "Plan camera placement and infrastructure around your environment.",
    Settings2,
  ],
  [
    "Ongoing Support",
    "Maintain your surveillance setup with technical assistance and lifecycle support.",
    Headphones,
  ],
];

/* =========================================================
   SURVEILLANCE POINTS
   ========================================================= */

const surveillancePoints = [
  "Indoor and outdoor camera systems",
  "Centralized recording and management",
  "Remote access to video feeds",
  "Professional placement and setup",
];

/* =========================================================
   SECTION LABEL
   ========================================================= */

function SectionLabel({ children }) {
  return (
    <div className="mb-5 inline-flex w-fit items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#111318] shadow-[0_14px_35px_-24px_rgba(0,0,0,.18)] sm:text-[12px] md:px-8 md:py-3.5 md:text-[13px]">
      {children}
    </div>
  );
}

/* =========================================================
   TECHNOLOGY PARTNERS
   ========================================================= */


/* =========================================================
   SURVEILLANCE PAGE
   ========================================================= */

export default function Surveillance() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white font-[Inter,Arial,sans-serif] text-[#111111]">

      <SolutionHero
        eyebrow="Security / Surveillance"
        title="Smarter security for"
        accent="complete visibility."
        description="Protect people, property and business operations with surveillance systems designed around your premises and monitoring needs."
      />

      {/* =====================================================
          INTRO / VALUE
          ===================================================== */}

      <section className="relative overflow-hidden bg-white py-10 sm:py-12 md:py-14">
        <div className="pointer-events-none absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "linear-gradient(to right, rgba(15,23,42,.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,.045) 1px, transparent 1px)", backgroundSize: "88px 88px" }} />
        <div className="pointer-events-none absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "linear-gradient(to right, rgba(15,23,42,.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,.045) 1px, transparent 1px)", backgroundSize: "88px 88px" }} />

        <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-10">

          <div className="mx-auto max-w-[1100px] text-center">

            <div className="flex w-full justify-center">
              <SectionLabel>Security That Works</SectionLabel>
            </div>

            <h2 className="mx-auto mt-5 text-center text-[30px] font-normal leading-[1.02] tracking-[-0.055em] text-[#111318] sm:text-[44px] md:text-[56px]">
              Keep your premises protected{" "}
              <span className="text-[#dc2626]">
                and under control.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-[800px] text-lg leading-8 text-slate-600">
              From small offices to large commercial facilities, Ramton
              provides surveillance systems that improve visibility, help
              deter unauthorized activity and support faster response.
              Combine cameras, recording, monitoring and remote access into
              a practical security environment built for your site.
            </p>

          </div>

          <div className="ramton-solution-stack mt-8">
            {solutions.map(({ number, title, text, icon: Icon, image }, index) => (
              <article
                key={title}
                className="ramton-solution-card group mb-5 overflow-hidden rounded-[24px] border-2 border-[#dc2626] bg-white shadow-[0_18px_50px_-30px_rgba(220,38,38,.25)]"
                style={{ top: `calc(92px + ${index * 8}px)` }}
              >
                <div className="grid min-h-[430px] overflow-hidden rounded-[22px] lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="flex flex-col justify-center bg-white p-7 sm:p-9 lg:p-12 lg:pr-14">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#dc2626]/[0.08] text-[#dc2626] transition duration-500 group-hover:bg-[#dc2626] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#dc2626]">
                      {number} / Surveillance Service
                    </span>
                    <h3 className="max-w-[560px] text-3xl font-medium leading-[1.05] tracking-[-0.04em] text-[#111111] sm:text-4xl lg:text-[48px]">
                      {title}
                    </h3>
                    <p className="mt-5 max-w-[520px] text-sm leading-7 text-[#666666] md:text-base">
                      {text}
                    </p>
                  </div>

                  <div className="relative min-h-[280px] overflow-hidden bg-[#111111] lg:min-h-0 lg:ml-2">
                    <img
                      src={image}
                      alt={`${title} surveillance solution`}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover brightness-[0.7] contrast-[1.03] saturate-[0.95] transition duration-700 group-hover:scale-105 group-hover:brightness-[0.82]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 rounded-full border border-white/20 bg-white/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#111111] backdrop-blur-md">
                      Ramton Surveillance Solutions
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US — SHARED HARDWARE-STYLE SECTION */}
      <section className="relative overflow-hidden bg-white py-8 sm:py-10 md:py-12">
        <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[920px] text-center">
            <SectionLabel>Why Choose Ramton</SectionLabel>
            <h2 className="text-[34px] font-medium leading-[1.05] tracking-[-0.055em] text-[#111111] sm:text-[48px] md:text-[62px]">
              Reliable technology.<br /><span className="text-[#df4e08]">Practical business outcomes.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[760px] text-[15px] leading-7 text-[#666666] sm:text-[17px]">
              We combine product knowledge, technical expertise and ongoing support to make software practical to plan, deploy, integrate and maintain.
            </p>
          </div>

          <div className="relative mx-auto mt-14 max-w-[1360px] lg:grid lg:grid-cols-[1fr_430px_1fr] lg:items-center lg:gap-5">
            <div className="grid gap-5">
              <div className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] text-sm font-bold transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">01</div>
                <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">Requirement-led</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">We start with your business requirements instead of forcing every organization into the same software stack.</p>
              </div>
              <div className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] text-sm font-bold transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">02</div>
                <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">Integrated</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">Software is considered as part of the wider hardware, cloud, security and networking environment.</p>
              </div>
            </div>

            <div className="my-6 hidden overflow-hidden rounded-[18px] border border-[#e2e2e2] bg-[#f7f7f7] shadow-[0_25px_70px_-40px_rgba(0,0,0,.3)] lg:my-0 lg:block">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80"
                alt="Software technology workspace"
                loading="lazy"
                decoding="async"
                className="h-[570px] w-full object-cover"
              />
            </div>

            <div className="grid gap-5">
              <div className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] text-sm font-bold transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">03</div>
                <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">Scalable</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">Solutions can evolve with changing users, workloads, locations and business requirements.</p>
              </div>
              <div className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] text-sm font-bold transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">04</div>
                <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">Supported</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">Implementation and ongoing technical assistance help your team get sustained value from its software environment.</p>
              </div>
            </div>

            <div className="mt-5 overflow-hidden rounded-[18px] border border-[#e2e2e2] bg-[#f7f7f7] shadow-[0_25px_70px_-40px_rgba(0,0,0,.3)] lg:hidden">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
                alt="Software technology workspace"
                loading="lazy"
                decoding="async"
                className="h-[360px] w-full object-cover sm:h-[430px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY PARTNERS
          ===================================================== */}

      <Partners />

      {/* FINAL CTA — EXACT HOME PAGE CTA */}
      <SolutionOverviewCTA />

    </main>
  );
}
