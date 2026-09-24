import { Link } from "react-router-dom";
import {
  ArrowRight,
  Cloud,
  Layers3,
  Settings2,
  Workflow,
  CheckCircle2,
  Zap,
  Headphones,
  Boxes,
} from "lucide-react";
import Partners from "../../components/SolutionTechnologyPartners";
import SolutionHero from "../../components/SolutionHero";
import SolutionOverviewCTA from "../../components/SolutionOverviewCTA";

const softwareSolutions = [
  {
    number: "01",
    title: "Enterprise Software",
    description:
      "Business-ready software solutions that help organizations manage core operations, productivity and collaboration.",
    to: "/software/enterprise",
    icon: Layers3,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "02",
    title: "Business Applications",
    description:
      "Practical applications designed around everyday workflows, teams, processes and productivity requirements.",
    to: "/software/business-applications",
    icon: Workflow,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "03",
    title: "Cloud Solutions",
    description:
      "Flexible cloud technologies that help businesses modernize infrastructure, improve accessibility and scale.",
    to: "/software/cloud",
    icon: Cloud,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=85",
  },
];

const benefits = [
  ["Requirement-led", "We start with your business requirements instead of forcing every organization into the same software stack.", Settings2],
  ["Integrated", "Software is considered as part of the wider hardware, cloud, security and networking environment.", Boxes],
  ["Scalable", "Solutions can evolve with changing users, workloads, locations and business requirements.", Zap],
  ["Supported", "Implementation and ongoing technical assistance help your team get sustained value from its software environment.", Headphones],
];

const capabilities = [
  "Software assessment & consultation",
  "Licensing & procurement guidance",
  "Business application deployment",
  "Cloud solution planning",
  "Configuration & integration",
  "Ongoing technical assistance",
];

function SectionLabel({ children }) {
  return (
    <div className="mb-5 inline-flex w-fit items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#111318] shadow-[0_14px_35px_-24px_rgba(0,0,0,.18)] sm:px-9 sm:py-3.5 sm:text-[13px]">
      {children}
    </div>
  );
}



export default function Software() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white font-[Inter,Arial,sans-serif] text-[#111111]">
      <style>{`
        .ramton-solution-stack {
          position: relative;
          width: 100%;
          margin: 0 auto;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .ramton-solution-card {
          position: relative;
          display: block;
          width: 100%;
          margin: 0 !important;
          padding: 0;
          border: 2px solid #f05a16 !important;
          border-radius: 24px;
          overflow: hidden;
          background: #fff;
          box-shadow:
            0 0 0 1px rgba(220,38,38,.12),
            0 28px 70px -42px rgba(15,23,42,.28),
            0 4px 16px rgba(15,23,42,.06);
          isolation: isolate;
          transform: translateZ(0);
          transition:
            transform 500ms ease,
            box-shadow 500ms ease,
            border-color 500ms ease;
        }

        .ramton-solution-card:hover {
          transform: translateY(-5px);
          border-color: #dc2626 !important;
          box-shadow:
            0 0 0 1px rgba(220,38,38,.16),
            0 32px 75px -42px rgba(220,38,38,.28),
            0 8px 20px rgba(15,23,42,.08);
        }

        @media (max-width: 639px) {
          .ramton-solution-stack {
            gap: 18px;
          }

          .ramton-solution-card {
            border-radius: 20px;
          }
        }
      `}</style>
      {/* HOME 3D OBJECT / MOTION SYSTEM */}
      <style>{`

        @keyframes ramton-float {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(-8deg) scale(1); }
          50% { transform: translate3d(18px, -24px, 0) rotate(7deg) scale(1.04); }
        }

        @keyframes ramton-float-reverse {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(10deg) scale(1); }
          50% { transform: translate3d(-20px, 18px, 0) rotate(-7deg) scale(.96); }
        }

        .ramton-float {
          animation: ramton-float 8s ease-in-out infinite;
        }

        .ramton-float-reverse {
          animation: ramton-float-reverse 10s ease-in-out infinite;
        }

        .ramton-3d-blob,
        .ramton-3d-ring,
        .ramton-3d-sphere {
          position: absolute;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .ramton-3d-blob {
          width: 250px;
          height: 250px;
          border-radius: 42% 58% 55% 45% / 44% 42% 58% 56%;
          background:
            radial-gradient(circle at 30% 25%, rgba(255,255,255,.98), transparent 20%),
            radial-gradient(circle at 65% 30%, rgba(255,190,115,.92), transparent 28%),
            linear-gradient(145deg, #ffb36f 0%, #dc2626 45%, #9c350d 100%);
          box-shadow:
            inset -25px -28px 55px rgba(91,25,4,.32),
            inset 18px 18px 30px rgba(255,255,255,.35),
            0 35px 80px -35px rgba(220,38,38,.65);
          filter: saturate(1.08);
          opacity: .94;
          animation: ramton-blob-float 11s ease-in-out infinite;
        }

        .ramton-3d-blob-a {
          left: -90px;
          top: 110px;
        }

        .ramton-3d-blob-b {
          width: 180px;
          height: 180px;
          right: -55px;
          bottom: 55px;
          border-radius: 58% 42% 45% 55% / 50% 55% 45% 50%;
          animation-delay: -4s;
          animation-duration: 13s;
          opacity: .82;
        }

        .ramton-3d-ring {
          width: 210px;
          height: 125px;
          border: 28px solid rgba(220,38,38,.82);
          border-radius: 50%;
          box-shadow:
            inset 8px 8px 15px rgba(255,255,255,.42),
            inset -12px -12px 25px rgba(100,27,5,.32),
            0 28px 55px -28px rgba(220,38,38,.55);
          transform: rotate(-24deg) perspective(500px) rotateX(18deg) rotateY(-18deg);
          opacity: .78;
          animation: ramton-ring-float 12s ease-in-out infinite;
        }

        .ramton-3d-ring-a {
          right: -55px;
          top: 95px;
        }

        .ramton-3d-ring-b {
          left: 8%;
          bottom: -80px;
          width: 165px;
          height: 100px;
          border-width: 22px;
          opacity: .48;
          animation-delay: -6s;
        }

        .ramton-3d-sphere {
          width: 62px;
          height: 62px;
          border-radius: 50%;
          background:
            radial-gradient(circle at 28% 22%, #fff 0 8%, #ffcfaa 15%, #dc2626 48%, #8d2d09 100%);
          box-shadow:
            inset -12px -14px 22px rgba(74,20,3,.32),
            inset 8px 8px 15px rgba(255,255,255,.4),
            0 22px 40px -20px rgba(0,0,0,.3);
          animation: ramton-sphere-float 8s ease-in-out infinite;
        }

        .ramton-3d-sphere-a {
          left: 13%;
          top: 31%;
        }

        .ramton-3d-sphere-b {
          right: 16%;
          bottom: 18%;
          width: 42px;
          height: 42px;
          animation-delay: -3s;
        }

        @keyframes ramton-blob-float {
          0%, 100% { transform: translate3d(0,0,0) rotate(-10deg) scale(1); }
          50% { transform: translate3d(25px,-28px,0) rotate(9deg) scale(1.06); }
        }

        @keyframes ramton-ring-float {
          0%, 100% { transform: rotate(-24deg) translate3d(0,0,0) scale(1); }
          50% { transform: rotate(-8deg) translate3d(-18px,22px,0) scale(1.05); }
        }

        @keyframes ramton-sphere-float {
          0%, 100% { transform: translate3d(0,0,0); }
          50% { transform: translate3d(14px,-20px,0); }
        }

        @media (max-width: 639px) {
          .ramton-3d-blob-a {
            left: -150px;
            top: 80px;
            width: 190px;
            height: 190px;
            opacity: .55;
          }

          .ramton-3d-blob-b {
            right: -110px;
            bottom: 30px;
            width: 150px;
            height: 150px;
          }

          .ramton-3d-ring-a {
            right: -105px;
            top: 100px;
            transform:
              rotate(-24deg)
              perspective(500px)
              rotateX(18deg)
              rotateY(-18deg)
              scale(.75);
          }

          .ramton-3d-ring-b {
            left: -45px;
            bottom: -70px;
          }

          .ramton-3d-sphere-a {
            left: 8%;
            top: 20%;
            width: 42px;
            height: 42px;
          }
        }

        @keyframes software-hero-float {
          0%, 100% { transform: translate3d(0, 0, 0) rotateY(-7deg) rotateX(2deg) rotateZ(-1deg); }
          50% { transform: translate3d(0, -14px, 0) rotateY(7deg) rotateX(-2deg) rotateZ(1deg); }
        }

        .software-hero-visual {
          perspective: 1200px;
        }

        .software-hero-image {
          width: min(100%, 520px);
          height: auto;
          max-height: 520px;
          object-fit: contain;
          transform-style: preserve-3d;
          filter: drop-shadow(0 28px 38px rgba(15,23,42,.18));
          animation: software-hero-float 6s ease-in-out infinite;
          will-change: transform;
        }

        @media (max-width: 1023px) {
          .software-hero-image {
            width: min(100%, 500px);
            max-height: 500px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ramton-3d-blob,
          .ramton-3d-ring,
          .ramton-3d-sphere,
          .software-hero-image {
            animation: none !important;
          }
        }
      `}</style>
      <SolutionHero
        eyebrow="Software Solutions"
        title="Software that works"
        accent="the way business does."
        description="Plan, deploy and support practical software solutions that improve productivity, connect teams and help your organization operate with greater efficiency."
      />

      {/* INTRO / VALUE */}
      

      {/* CATEGORIES */}
      <section
        id="software-solutions"
        className="relative overflow-hidden bg-white pb-0 pt-3 sm:pb-0 sm:pt-4 md:pb-0 md:pt-5"
      >
        <div className="pointer-events-none absolute left-[-100px] top-[180px] h-[260px] w-[260px] rounded-full bg-[#f05a16]/[0.045] blur-[90px]" />

        <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[950px] text-center">
            <SectionLabel>What We Offer</SectionLabel>

            <h2 className="text-[34px] font-medium leading-[1.04] tracking-[-0.055em] text-[#111111] sm:text-[48px] md:text-[64px]">
              Software solutions for
              <br />
              <span className="text-[#df4f08]">modern organizations.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-[760px] text-[15px] leading-7 text-[#666666] sm:text-[17px]">
              Explore software, business applications and cloud solutions designed around practical business requirements.
            </p>
          </div>

          <div className="ramton-solution-stack mt-7">
            {softwareSolutions.map(({ number, title, description, to, icon: Icon, image }, index) => (
              <Link
                key={title}
                to={to}
                className="ramton-solution-card solution-card-border group"
                style={{ zIndex: softwareSolutions.length - index }}
              >
                <div className="grid min-h-[430px] lg:min-h-[460px] lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-sm font-extrabold text-[#df4f08]">{number}</span>
                    </div>
                    <h3 className="text-[28px] font-medium tracking-[-0.04em] text-[#111111] sm:text-[34px]">
                      {title}
                    </h3>
                    <p className="mt-4 max-w-[620px] text-[15px] leading-7 text-[#666666] sm:text-[16px]">
                      {description}
                    </p>
                    <div className="mt-7 inline-flex items-center gap-2 text-[13px] font-semibold text-[#df4f08]">
                      Explore solution
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                  <div className="relative min-h-[280px] overflow-hidden lg:min-h-[430px]">
                    <img src={image} alt={title} loading="lazy" decoding="async"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US — SHARED HARDWARE-STYLE SECTION */}
      <section className="relative overflow-hidden bg-white pb-16 pt-6 sm:pb-20 sm:pt-8 md:pb-24 md:pt-10">
        <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[920px] text-center">
            <SectionLabel>Why Choose Ramton</SectionLabel>
            <h2 className="text-[34px] font-medium leading-[1.05] tracking-[-0.055em] text-[#111111] sm:text-[48px] md:text-[62px]">
              Reliable technology.<br /><span className="text-[#df4f08]">Practical business outcomes.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[760px] text-[15px] leading-7 text-[#666666] sm:text-[17px]">We combine product knowledge, technical expertise and ongoing support to make software practical to plan, deploy, integrate and maintain.</p>
          </div>
          <div className="relative mx-auto mt-14 max-w-[1360px] lg:grid lg:grid-cols-[1fr_430px_1fr] lg:items-center lg:gap-5">
            <div className="grid gap-5">
              <div className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] text-sm font-bold transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">01</div>
                <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">Requirement-led</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">We start with your business requirements instead of forcing every organization into the same software stack.</p>
              </div><div className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] text-sm font-bold transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">02</div>
                <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">Integrated</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">Software is considered as part of the wider hardware, cloud, security and networking environment.</p>
              </div>
            </div>
            <div className="my-6 hidden overflow-hidden rounded-[18px] border border-[#e2e2e2] bg-[#f7f7f7] shadow-[0_25px_70px_-40px_rgba(0,0,0,.3)] lg:my-0 lg:block">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80" alt="Software technology workspace" loading="lazy" decoding="async" className="h-[570px] w-full object-cover" />
            </div>
            <div className="grid gap-5">
              <div className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] text-sm font-bold transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">03</div>
                <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">Scalable</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">Solutions can evolve with changing users, workloads, locations and business requirements.</p>
              </div><div className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] text-sm font-bold transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">04</div>
                <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">Supported</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">Implementation and ongoing technical assistance help your team get sustained value from its software environment.</p>
              </div>
            </div>
            <div className="mt-5 overflow-hidden rounded-[18px] border border-[#e2e2e2] bg-[#f7f7f7] shadow-[0_25px_70px_-40px_rgba(0,0,0,.3)] lg:hidden">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80" alt="Software technology workspace" loading="lazy" decoding="async" className="h-[360px] w-full object-cover sm:h-[430px]" />
            </div>
          </div>
        </div>
      </section>

      {/* SOFTWARE LIFECYCLE SUPPORT */}
      <section className="bg-[#fafafa] pb-14 pt-10 sm:pb-18 sm:pt-12 md:pb-20 md:pt-14">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-[900px] text-center">
            <SectionLabel>Software Lifecycle Support</SectionLabel>

            <h2 className="mt-4 text-[34px] font-medium leading-[1.05] tracking-[-0.055em] text-[#111111] sm:text-[48px] md:text-[60px]">
              From software selection to
              <br />
              <span className="text-[#df4f08]">ongoing support.</span>
            </h2>

            <p className="mx-auto mt-4 max-w-[760px] text-[15px] leading-7 text-[#666666] sm:text-[17px]">
              Ramton can support the wider software journey — from requirements and selection through deployment, integration and ongoing technical assistance.
            </p>
          </div>

          <div className="relative mx-auto mt-10 h-[620px] w-full max-w-[760px] sm:h-[680px] md:h-[720px]">
            {/* Connected circular path */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#dc2626]/30 sm:h-[330px] sm:w-[330px] md:h-[390px] md:w-[390px]" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#dc2626]/25 sm:h-[260px] sm:w-[260px] md:h-[310px] md:w-[310px]" />

            {/* Center */}
            <div className="absolute left-1/2 top-1/2 z-20 flex h-[128px] w-[128px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 border-[#dc2626]/35 bg-gradient-to-br from-white via-[#fff7f1] to-[#ffdcca] text-center shadow-[0_20px_55px_-30px_rgba(220,38,38,.5),inset_0_0_35px_rgba(220,38,38,.08)] sm:h-[145px] sm:w-[145px] md:h-[160px] md:w-[160px]">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#dc2626]">
                Ramton
              </span>
              <span className="mt-1 max-w-[105px] text-[13px] font-semibold leading-5 text-[#222222] sm:text-[14px]">
                Software Lifecycle
              </span>
            </div>

            {/* Six connected lifecycle nodes */}
            {capabilities.map((item, index) => {
              const positions = [
                "left-1/2 top-0 -translate-x-1/2",
                "right-0 top-[17%]",
                "right-0 bottom-[17%]",
                "left-1/2 bottom-0 -translate-x-1/2",
                "left-0 bottom-[17%]",
                "left-0 top-[17%]",
              ];

              return (
                <div
                  key={item}
                  className={`absolute ${positions[index]} z-20 flex h-[118px] w-[118px] items-center justify-center rounded-full border-2 border-[#dc2626]/30 bg-gradient-to-br from-white via-[#fff8f3] to-[#ffe6d6] px-4 text-center shadow-[0_18px_45px_-30px_rgba(220,38,38,.45),inset_0_0_28px_rgba(220,38,38,.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#dc2626]/70 hover:from-[#fffaf7] hover:to-[#ffd8c2] hover:shadow-[0_22px_55px_-28px_rgba(220,38,38,.38)] sm:h-[135px] sm:w-[135px] sm:px-5 md:h-[150px] md:w-[150px]`}>
                  <div>
                    <span className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full border border-white/80 bg-gradient-to-br from-[#dc2626] to-[#d94d0b] text-[9px] font-extrabold text-white shadow-[0_8px_18px_-8px_rgba(220,38,38,.7)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="block text-[11px] font-bold leading-4 text-[#333333] sm:text-[12px] md:text-[13px]">
                      {item}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Connecting spokes */}
            <div className="pointer-events-none absolute left-1/2 top-[17%] h-[33%] w-px -translate-x-1/2 bg-[#dc2626]/25" />
            <div className="pointer-events-none absolute left-[68%] top-[29%] h-px w-[17%] rotate-[28deg] origin-left bg-[#dc2626]/25" />
            <div className="pointer-events-none absolute left-[68%] bottom-[29%] h-px w-[17%] -rotate-[28deg] origin-left bg-[#dc2626]/25" />
            <div className="pointer-events-none absolute left-1/2 bottom-[17%] h-[33%] w-px -translate-x-1/2 bg-[#dc2626]/25" />
            <div className="pointer-events-none absolute right-[68%] bottom-[29%] h-px w-[17%] rotate-[28deg] origin-right bg-[#dc2626]/25" />
            <div className="pointer-events-none absolute right-[68%] top-[29%] h-px w-[17%] -rotate-[28deg] origin-right bg-[#dc2626]/25" />
          </div>
        </div>
      </section>

      <Partners />
      {/* FINAL CTA — EXACT HOME PAGE CTA */}
      <SolutionOverviewCTA />
    </main>
  );
}
