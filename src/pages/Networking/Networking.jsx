
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Cable, 
  LockKeyhole, 
  Router, 
  Wifi, 
  ShieldCheck, 
  Layers3, 
  Settings2, 
  Headphones, 
  Network 
} from "lucide-react";
import SolutionHero from "../../components/SolutionHero";
import Partners from "../../components/SolutionTechnologyPartners";
import SolutionOverviewCTA from "../../components/SolutionOverviewCTA";

function SectionLabel({ children }) {
  return (
    <div className="mb-5 inline-flex w-fit items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#111318] shadow-[0_14px_35px_-24px_rgba(0,0,0,.18)] sm:text-[12px] md:px-8 md:py-3.5 md:text-[13px]">
      {children}
    </div>
  );
}

const services = [
  { 
    title: "Structured Cabling", 
    description: "Create an organized, reliable physical network foundation designed for today's operations and tomorrow's growth.", 
    to: "/networking/structured-cabling", 
    icon: Cable, 
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85" 
  },
  { 
    title: "Wireless Networks", 
    description: "Deliver dependable Wi-Fi coverage and performance across offices, campuses and business environments.", 
    to: "/networking/wireless", 
    icon: Wifi, 
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85" 
  },
  { 
    title: "Network Security", 
    description: "Protect connectivity, users and critical resources with security built into your network architecture.", 
    to: "/networking/security", 
    icon: LockKeyhole, 
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=85" 
  },
];

const benefits = [
  [Network, "Reliable Connectivity", "Keep teams, devices and business systems connected with dependable infrastructure."],
  [Layers3, "Scalable Architecture", "Design a network that can expand with new users, locations and applications."],
  [ShieldCheck, "Secure by Design", "Build protection into the network without compromising everyday productivity."],
  [Settings2, "Lifecycle Support", "Get practical assistance from planning and deployment through maintenance and upgrades."],
];


export default function Networking() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white font-[Inter,Arial,sans-serif] text-[#111111]">
      <SolutionHero
        eyebrow="Networking Solutions"
        title="Connected infrastructure."
        accent="Built for business."
        description="Build a reliable, secure and scalable network environment that keeps people, devices, applications and locations connected."
      />

      {/* SERVICES GRID */}
      <section id="networking-services" className="bg-[#fff7f2] py-16 md:py-20 px-5 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 text-center">
            <div className="flex w-full justify-center"><SectionLabel>Service Areas</SectionLabel></div>
            <h2 className="mx-auto mt-5 max-w-[1100px] text-center text-[30px] font-normal leading-[1.02] tracking-[-0.055em] text-[#111318] sm:text-[44px] md:text-[56px]">
              Networking built for <span className="text-[#dc2626]">every layer.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-8 text-slate-600 md:text-lg">
              Practical infrastructure solutions for connectivity, coverage and secure business operations.
            </p>
          </div>
          <div className="flex w-full flex-col gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Link key={service.title} to={service.to} className="group relative flex w-full flex-col overflow-hidden rounded-[25px] border-2 border-white bg-white shadow-[0_18px_50px_-30px_rgba(15,23,42,.18)] transition-all duration-500 hover:-translate-y-1 hover:border-[#dc2626] hover:shadow-[0_30px_65px_-30px_rgba(220,38,38,.28)] lg:min-h-[330px] lg:flex-row">
                  <div className="relative h-[230px] w-full shrink-0 overflow-hidden lg:h-auto lg:w-[46%]">
                    <img src={service.image} alt={service.title} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
                    <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/95 text-[#dc2626] shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:bg-[#dc2626] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="absolute bottom-5 left-5 rounded-full bg-black/55 px-4 py-2 text-xs font-bold tracking-[0.16em] text-white backdrop-blur-sm">0{i + 1}</span>
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-center p-7 sm:p-9 lg:p-12">
                    <div className="flex items-center justify-between gap-5">
                      <h3 className="text-[25px] font-extrabold tracking-[-0.025em] text-slate-950 transition-colors duration-300 group-hover:text-[#dc2626] sm:text-[30px]">{service.title}</h3>
                      <ArrowRight className="h-6 w-6 shrink-0 text-[#dc2626] transition group-hover:translate-x-1" />
                    </div>
                    <p className="mt-4 max-w-2xl text-[15px] leading-8 text-slate-600 sm:text-base">{service.description}</p>
                    <span className="mt-7 h-[2px] w-16 bg-[#dc2626] transition-all duration-500 group-hover:w-28" />
                  </div>
                </Link>
              );
            })}
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
            <p className="mx-auto mt-6 max-w-[760px] text-[15px] leading-7 text-[#666666] sm:text-[17px]">We combine infrastructure expertise, practical design and ongoing support to make connectivity reliable, secure and ready for growth.</p>
          </div>
          <div className="relative mx-auto mt-14 max-w-[1360px] lg:grid lg:grid-cols-[1fr_430px_1fr] lg:items-center lg:gap-5">
            <div className="grid gap-5">
              <div className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] text-sm font-bold transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">01</div>
                <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">Reliable connectivity</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">Keep teams, devices and business systems connected with dependable infrastructure.</p>
              </div><div className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] text-sm font-bold transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">02</div>
                <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">Scalable architecture</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">Design a network that can expand with new users, locations and applications.</p>
              </div>
            </div>
            <div className="my-6 hidden overflow-hidden rounded-[18px] border border-[#e2e2e2] bg-[#f7f7f7] shadow-[0_25px_70px_-40px_rgba(0,0,0,.3)] lg:my-0 lg:block">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80" alt="Networking technology workspace" loading="lazy" decoding="async" className="h-[570px] w-full object-cover" />
            </div>
            <div className="grid gap-5">
              <div className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] text-sm font-bold transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">03</div>
                <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">Secure by design</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">Build protection into the network without compromising everyday productivity.</p>
              </div><div className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] text-sm font-bold transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">04</div>
                <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">Lifecycle support</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">Get practical assistance from planning and deployment through maintenance and upgrades.</p>
              </div>
            </div>
            <div className="mt-5 overflow-hidden rounded-[18px] border border-[#e2e2e2] bg-[#f7f7f7] shadow-[0_25px_70px_-40px_rgba(0,0,0,.3)] lg:hidden">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80" alt="Networking technology workspace" loading="lazy" decoding="async" className="h-[360px] w-full object-cover sm:h-[430px]" />
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY PARTNERS */}
      <Partners />
      {/* FINAL CTA — EXACT HOME PAGE CTA */}
      <SolutionOverviewCTA />
    </main>
  );
}
