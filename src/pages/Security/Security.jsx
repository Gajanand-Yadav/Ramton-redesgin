import { ShieldCheck, Settings2, Headphones, CheckCircle2, Video, Camera, Eye, Bell } from "lucide-react";
import SolutionHero from "../../components/SolutionHero";
import Partners from "../../components/SolutionTechnologyPartners";
import SolutionOverviewCTA from "../../components/SolutionOverviewCTA";

const solutions = [
  {
    number: "01",
    title: "High-Definition Surveillance",
    text: "Monitor your premises with crystal-clear HD and 4K camera systems designed for comprehensive visual coverage.",
    icon: Camera,
  },
  {
    number: "02",
    title: "Smart Analytics & Motion Detection",
    text: "Leverage intelligent automated alerts and motion tracking to instantly detect and respond to unusual activity.",
    icon: Eye,
  },
  {
    number: "03",
    title: "Centralized Monitoring & Storage",
    text: "Securely record, manage, and access video feeds across multiple sites from a centralized control platform.",
    icon: Video,
  },
];

const benefits = [
  ["Enhanced Visibility", "Keep a watchful eye on critical zones, entry points, and perimeter areas around the clock.", ShieldCheck],
  ["Proactive Deterrence", "Discourage unauthorized access and suspicious behavior with visible surveillance infrastructure.", Settings2],
  ["Incident Investigation", "Review high-resolution playback and footage history quickly when resolving security queries.", CheckCircle2],
  ["Expert Guidance", "Collaborate with specialists to plan optimal camera placement and system coverage.", Headphones],
];

const cctvPoints = [
  "Crystal-clear day and night vision capabilities",
  "Scalable multi-camera management setups",
  "Secure cloud and local storage integration",
  "Remote monitoring via mobile and desktop",
];

function SectionLabel({ children }) {
  return (
    <div className="mb-5 inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#111318] shadow-[0_14px_35px_-24px_rgba(0,0,0,.18)] sm:px-9 sm:text-[13px]">
      {children}
    </div>
  );
}


export default function CCTV() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white font-[Inter,Arial,sans-serif] text-[#111111]">
      <SolutionHero
        eyebrow="Security Solutions"
        title="Security that brings total"
        accent="visibility and safety."
        description="Protect your people, premises and business operations with integrated security solutions designed around your environment and requirements."
      />

      {/* INTRO / VALUE */}
            <section className="bg-white py-8 md:py-10">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="mx-auto max-w-[1100px] text-center">
            <div className="flex w-full justify-center"><SectionLabel>Core Surveillance</SectionLabel></div>
            <h2 className="mx-auto mt-5 text-center text-[30px] font-normal leading-[1.02] tracking-[-0.055em] text-[#111318] sm:text-[44px] md:text-[56px]">
              Keep critical areas visible, secure, <span className="text-[#dc2626]">and fully accountable.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              A reliable surveillance network is vital for deterring unauthorized activity and maintaining a safe operational environment. Ramton helps design and deploy comprehensive CCTV architectures configured specifically for your facility layout and security goals.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cctvPoints.map((point) => (
              <div key={point} className="group relative overflow-hidden rounded-[25px] border border-slate-200 bg-white p-6 text-center shadow-[0_18px_50px_-30px_rgba(15,23,42,.18)] transition-all duration-500 hover:-translate-y-2 hover:border-[#dc2626]/40 hover:shadow-[0_28px_60px_-30px_rgba(220,38,38,.20)]">
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#dc2626]/[0.07] opacity-0 blur-2xl transition-all duration-500 group-hover:scale-[1.8] group-hover:opacity-100" />
                <div className="relative z-10 mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1e8] text-[#dc2626] transition-all duration-500 group-hover:scale-105 group-hover:bg-[#dc2626] group-hover:text-[#111318]">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <span className="relative z-10 text-sm font-semibold leading-6 text-slate-800">{point}</span>
                <span className="absolute bottom-0 left-6 h-[2px] w-0 bg-[#dc2626] transition-all duration-500 group-hover:w-[calc(100%-48px)]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-[#fff7f2] py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="mx-auto max-w-[1100px] text-center">
            <div className="flex w-full justify-center">
              <SectionLabel>Solution Areas</SectionLabel>
            </div>
            <h2 className="mx-auto mt-5 text-center text-[30px] font-normal leading-[1.02] tracking-[-0.055em] text-[#111318] sm:text-[44px] md:text-[56px]">
              Advanced <span className="text-[#dc2626]">surveillance systems.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-8 text-slate-600 md:text-lg">
              High-definition cameras, smart analytics, and reliable recording solutions built for total visibility.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-5">
            {solutions.map(({ number, title, text, icon: Icon }) => (
              <article
                key={title}
                className="group relative w-full overflow-hidden rounded-[25px] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_-30px_rgba(15,23,42,.18)] transition-all duration-500 hover:-translate-y-2 hover:border-[#dc2626]/50 hover:shadow-[0_30px_65px_-30px_rgba(220,38,38,.28)] md:p-9"
              >
                <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#fff7f2] transition-transform duration-500 group-hover:scale-125" />

                <div className="relative flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1e9] text-[#dc2626]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-extrabold text-[#dc2626]">{number}</span>
                </div>

                <h3 className="relative mt-7 text-xl font-extrabold tracking-tight text-slate-950">
                  {title}
                </h3>
                <p className="relative mt-3 text-sm leading-7 text-slate-600">{text}</p>
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
              Reliable technology.<br /><span className="text-[#df4f08]">Practical business outcomes.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[760px] text-[15px] leading-7 text-[#666666] sm:text-[17px]">We combine security expertise, practical planning and ongoing support to make protection simpler to deploy, manage and evolve.</p>
          </div>
          <div className="relative mx-auto mt-14 max-w-[1360px] lg:grid lg:grid-cols-[1fr_430px_1fr] lg:items-center lg:gap-5">
            <div className="grid gap-5">
              <div className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] text-sm font-bold transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">01</div>
                <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">Layered protection</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">Security solutions are planned across people, premises, devices and digital environments.</p>
              </div><div className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] text-sm font-bold transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">02</div>
                <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">Clear visibility</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">Give teams better awareness of activity, risks and incidents across critical environments.</p>
              </div>
            </div>
            <div className="my-6 hidden overflow-hidden rounded-[18px] border border-[#e2e2e2] bg-[#f7f7f7] shadow-[0_25px_70px_-40px_rgba(0,0,0,.3)] lg:my-0 lg:block">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80" alt="Security technology workspace" loading="lazy" decoding="async" className="h-[570px] w-full object-cover" />
            </div>
            <div className="grid gap-5">
              <div className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] text-sm font-bold transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">03</div>
                <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">Scalable design</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">Build security infrastructure that can expand as sites, users and requirements change.</p>
              </div><div className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] text-sm font-bold transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">04</div>
                <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">Expert support</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">Get practical guidance from planning and deployment through ongoing technical assistance.</p>
              </div>
            </div>
            <div className="mt-5 overflow-hidden rounded-[18px] border border-[#e2e2e2] bg-[#f7f7f7] shadow-[0_25px_70px_-40px_rgba(0,0,0,.3)] lg:hidden">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80" alt="Security technology workspace" loading="lazy" decoding="async" className="h-[360px] w-full object-cover sm:h-[430px]" />
            </div>
          </div>
        </div>
      </section>

      <Partners />
      {/* FINAL CTA — EXACT HOME PAGE CTA */}
      <SolutionOverviewCTA />
    </main>
  );
}
