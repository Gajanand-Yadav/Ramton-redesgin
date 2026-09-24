import {
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Headphones,
  Layers3,
  RefreshCw,
  Settings2,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import Partners from "../../components/SolutionTechnologyPartners";
import SolutionHero from "../../components/SolutionHero";
import SolutionOverviewCTA from "../../components/SolutionOverviewCTA";

const solutions = [
  {
    number: "01",
    title: "Workflow & Process Management",
    text: "Organize recurring processes, approvals and handoffs so teams can work with greater consistency.",
    icon: Workflow,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "02",
    title: "Business Intelligence",
    text: "Bring operational information together to help teams understand performance and make informed decisions.",
    icon: BarChart3,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "03",
    title: "Business Productivity",
    text: "Give employees practical digital tools for collaboration, information management and everyday work.",
    icon: ClipboardList,
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",
  },
];

const benefits = [
  ["Connected", "Applications designed with your wider IT environment in mind.", Layers3],
  ["Practical", "Solutions focused on real workflows rather than unnecessary complexity.", Settings2],
  ["Reliable", "A structured approach to security, access and ongoing support.", ShieldCheck],
  ["Adaptable", "Technology that can evolve as teams, processes and requirements change.", RefreshCw],
];

const lifecycle = [
  "Requirement discovery",
  "Application selection",
  "Configuration & deployment",
  "Data and system integration",
  "User enablement",
  "Ongoing support",
];

function SectionLabel({ children }) {
  return (
    <div className="mb-5 inline-flex w-fit items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#111318] shadow-[0_14px_35px_-24px_rgba(0,0,0,.18)] sm:px-9 sm:text-[13px]">
      {children}
    </div>
  );
}


export default function BusinessApplications() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white font-[Inter,Arial,sans-serif] text-[#111111]">
      <SolutionHero
        eyebrow="Business Applications"
        title="Better tools."
        accent="Smarter ways to work."
        description="Support everyday workflows, productivity and collaboration with business applications designed around your people, processes and information."
      />

      {/* SOLUTIONS */}
      <section className="bg-[#fff7f2] py-7 sm:py-9 md:py-12">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8">
          <div className="text-center">
            <div>
              <SectionLabel>Solution Areas</SectionLabel>
              <h2 className="mx-auto mt-2 text-center text-[30px] font-medium leading-[1.05] tracking-[-0.055em] text-[#111111] sm:text-[48px] md:text-[60px]">
                Applications built around <span className="text-[#dc2626]">real work.</span>
              </h2>
            </div>
            <p className="mx-auto mt-5 max-w-[820px] text-[15px] leading-7 text-slate-700 sm:text-[16px] md:text-[17px]">
              From process management to reporting and productivity, choose the capabilities that matter most to your organization.
            </p>
          </div>

          <div className="ramton-solution-stack">
            {solutions.map(({ number, title, text, icon: Icon, image }, index) => (
              <article
                key={title}
                className="ramton-solution-card solution-card-border group mb-5 overflow-hidden rounded-[24px] bg-white shadow-[0_18px_50px_-30px_rgba(220,38,38,.25)]"
                style={{ top: `calc(92px + ${index * 8}px)` }}
              >
                <div className="grid min-h-[430px] overflow-hidden rounded-[22px] lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="flex flex-col justify-center bg-white p-7 sm:p-9 lg:p-12">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#dc2626]/[0.08] text-[#dc2626] transition duration-500 group-hover:bg-[#dc2626] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#dc2626]">
                      {number} / Solution Area
                    </span>
                    <h3 className="max-w-[560px] text-3xl font-medium leading-[1.05] tracking-[-0.04em] text-[#111111] sm:text-4xl lg:text-[48px]">
                      {title}
                    </h3>
                    <p className="mt-5 max-w-[520px] text-sm leading-7 text-[#666666] md:text-base">
                      {text}
                    </p>
                  </div>

                  <div className="relative min-h-[280px] overflow-hidden bg-[#111111] lg:min-h-0">
                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover brightness-[0.62] contrast-[1.03] saturate-[0.9] transition duration-700 group-hover:scale-105 group-hover:brightness-[0.74]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/55 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 rounded-full border border-white/20 bg-white/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#111111] backdrop-blur-md">
                      Ramton Software Solutions
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

      {/* APPLICATION LIFECYCLE */}
      <section className="bg-[#fff7f2] py-7 sm:py-9 md:py-12">
        <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 md:px-8">
          <div className="mx-auto max-w-[900px] text-center">
            <div className="flex justify-center"><SectionLabel>Application Lifecycle</SectionLabel></div>
            <h2 className="mx-auto mt-2 text-center text-[30px] font-medium leading-[1.05] tracking-[-0.055em] text-[#111111] sm:text-[48px] md:text-[60px]">
              From selection to <span className="text-[#dc2626]">ongoing support.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[820px] text-center text-[15px] leading-7 text-slate-700 sm:text-[16px] md:text-[17px]">
              A business application is only useful when it works well in the wider environment. Our approach covers the stages needed to move from requirement to reliable day-to-day use.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {lifecycle.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl bg-white p-3.5 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#dc2626]" />
                  <span className="text-sm font-semibold text-slate-800">{item}</span>
                </div>
              ))}
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
