import Partners from "../../components/SolutionTechnologyPartners";
import SolutionHero from "../../components/SolutionHero";
import SolutionOverviewCTA from "../../components/SolutionOverviewCTA";
import {
  Building2, CheckCircle2, Code2, Database, Layers3,
  Settings2, ShieldCheck, Workflow, Zap, Headphones, RefreshCw,
} from "lucide-react";

const solutions = [
  {
    number: "01",
    title: "Business Management",
    text: "Enterprise platforms that help teams organize operations, manage information and create a more connected working environment.",
    icon: Building2,
  },
  {
    number: "02",
    title: "Process Automation",
    text: "Streamline repetitive workflows, approvals and business processes with software designed around the way your teams work.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Data & Integration",
    text: "Connect applications and business data to reduce silos and give teams better visibility across their technology environment.",
    icon: Database,
  },
];

const benefits = [
  ["Requirement-Led", "We start with your business requirements, workflows and users before recommending an enterprise software approach.", Settings2],
  ["Integrated", "Enterprise applications can be planned to work alongside your existing infrastructure, systems and business tools.", Layers3],
  ["Scalable", "Build a software foundation that can adapt as your teams, operations and technology requirements grow.", Zap],
  ["Supported", "Practical assistance across implementation, troubleshooting, optimization and the software lifecycle.", ShieldCheck],
];

const lifecycle = [
  "Business requirement analysis",
  "Software selection & planning",
  "Implementation & deployment",
  "System integration",
  "Migration & optimization",
  "Ongoing technical support",
];

function SectionLabel({ children }) {
  return (
    <div className="mb-5 inline-flex w-fit items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#111318] shadow-[0_14px_35px_-24px_rgba(0,0,0,.18)] sm:px-9 sm:text-[13px]">
      {children}
    </div>
  );
}


export default function EnterpriseSoftware() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white font-[Inter,Arial,sans-serif] text-[#111111]">
      <SolutionHero
        eyebrow="Enterprise Software"
        title="Enterprise software."
        accent="Built around business."
        description="Streamline operations, connect systems and build a stronger foundation for digital growth with practical enterprise software solutions."
      />

      {/* SOLUTIONS */}
      <section className="bg-[#fff7f2] py-7 sm:py-9 md:py-12">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8">
          <div className="text-center">
            <div>
              <SectionLabel>What We Address</SectionLabel>
              <h2 className="mx-auto mt-2 text-center text-[30px] font-medium leading-[1.05] tracking-[-0.055em] text-[#111111] sm:text-[48px] md:text-[60px]">
                Enterprise <span className="text-[#dc2626]">solutions</span> for real business needs.
              </h2>
            </div>
            <p className="mx-auto mt-5 max-w-[820px] text-[15px] leading-7 text-slate-700 sm:text-[16px] md:text-[17px]">
              Robust capabilities designed to manage core operations, streamline processes, and integrate disparate data systems.
            </p>
          </div>

          <div className="mt-9 grid gap-4 sm:gap-5 lg:grid-cols-3">
            {solutions.map(({ number, title, text, icon: Icon }) => (
              <article
                key={title}
                className="solution-card-border group relative overflow-hidden rounded-[25px] bg-white p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,.18)] hover:-translate-y-2 hover:shadow-[0_30px_65px_-30px_rgba(220,38,38,.28)] sm:p-7"
              >
                <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#fff7f2] transition-transform duration-500 group-hover:scale-125" />

                <div className="relative flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1e9] text-[#dc2626]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-extrabold text-[#dc2626]">{number}</span>
                </div>

                <h3 className="relative mt-7 text-[21px] font-medium tracking-[-0.03em] text-[#111318]">
                  {title}
                </h3>
                <p className="relative mt-3 text-[14px] leading-7 text-slate-700">{text}</p>


              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US — SHARED HARDWARE-STYLE SECTION */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24">
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

      {/* LIFECYCLE SUPPORT */}
      <section className="bg-[#fff7f2] py-7 sm:py-9 md:py-12">
        <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 md:px-8">
          <div className="mx-auto max-w-[900px] text-center">
            <div className="flex justify-center"><SectionLabel>Software Lifecycle Support</SectionLabel></div>
            <h2 className="mx-auto mt-2 text-center text-[30px] font-medium leading-[1.05] tracking-[-0.055em] text-[#111111] sm:text-[48px] md:text-[60px]">
              From strategy to <span className="text-[#dc2626]">ongoing support.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[820px] text-center text-[15px] leading-7 text-slate-700 sm:text-[16px] md:text-[17px]">
              Support across planning, deployment, integration, migration and continued technical assistance.
            </p>
          </div>

          <div className="relative mx-auto mt-10 h-[560px] max-w-[820px] sm:h-[620px]">
            <div className="absolute left-1/2 top-1/2 z-10 flex h-[112px] w-[112px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#dc2626]/25 bg-white text-center shadow-[0_20px_55px_-30px_rgba(220,38,38,.4)] sm:h-[135px] sm:w-[135px]">
              <span className="max-w-[120px] text-[14px] font-semibold uppercase tracking-[0.12em] text-[#dc2626] sm:text-[16px]">Lifecycle Support</span>
            </div>
            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#dc2626]/30 sm:h-[360px] sm:w-[360px]" />
            <div className="absolute left-1/2 top-1/2 h-[235px] w-[235px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#dc2626]/10 sm:h-[295px] sm:w-[295px]" />
            {lifecycle.map((item, i) => {
              const positions = [
                "left-1/2 top-0 -translate-x-1/2",
                "right-[7%] top-[18%]",
                "right-[7%] bottom-[18%]",
                "left-1/2 bottom-0 -translate-x-1/2",
                "left-[7%] bottom-[18%]",
                "left-[7%] top-[18%]",
              ];
              return (
                <div key={item} className={`absolute ${positions[i]} w-[220px] -translate-y-0 sm:w-[240px]`}>
                  <div className="group flex items-center gap-4 rounded-2xl border-2 border-[#dc2626] bg-white p-5 shadow-[0_18px_45px_-28px_rgba(220,38,38,.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_55px_-28px_rgba(220,38,38,.55)]">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff1e9] text-xs font-extrabold text-[#d95316]">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#dc2626]" />
                      <span className="text-sm font-bold text-slate-800">{item}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Partners />
      {/* FINAL CTA — EXACT HOME PAGE CTA */}
      <SolutionOverviewCTA />
    </main>
  );
}
