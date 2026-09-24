import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Headphones,
  Layers3,
  Monitor,
  Network,
  RefreshCw,
  Search,
  Settings2,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import hardwareImage from "../assets/hardware-server.png";
import softwareImage from "../assets/software-enterprise.png";
import securityImage from "../assets/security-cyber.png";
import networkingImage from "../assets/network-networking security.png";
import supportWorkspace from "../assets/solutions/hardware-workstation.webp";
import continuityWorkspace from "../assets/solutions/networking-office.webp";
import SolutionHero from "../components/SolutionHero";
import SolutionOverviewCTA from "../components/SolutionOverviewCTA";

const coverageAreas = [
  {
    title: "Hardware Maintenance",
    description:
      "Preventive checks, troubleshooting and lifecycle support for desktops, laptops, servers and workplace equipment.",
    path: "/hardware",
    icon: Monitor,
    image: hardwareImage,
    tag: "Devices & Infrastructure",
  },
  {
    title: "Software Support",
    description:
      "Updates, health checks and practical assistance for the business applications your teams rely on every day.",
    path: "/software",
    icon: Settings2,
    image: softwareImage,
    tag: "Applications & Systems",
  },
  {
    title: "Security Care",
    description:
      "Ongoing support for security systems, access controls and safeguards that help protect people, data and operations.",
    path: "/security",
    icon: ShieldCheck,
    image: securityImage,
    tag: "Protection & Visibility",
  },
  {
    title: "Network Maintenance",
    description:
      "Monitoring, troubleshooting and upkeep for the connectivity that keeps users, devices and locations working together.",
    path: "/networking",
    icon: Network,
    image: networkingImage,
    tag: "Connectivity & Uptime",
  },
];

const supportSteps = [
  {
    icon: Search,
    title: "Understand Your Environment",
    description:
      "We review your devices, systems, dependencies and operational priorities before defining the right support scope.",
  },
  {
    icon: Wrench,
    title: "Prevent Problems Early",
    description:
      "Scheduled maintenance and health checks help identify risks before they become disruptive incidents.",
  },
  {
    icon: Headphones,
    title: "Respond When You Need Us",
    description:
      "Get dependable technical assistance for day-to-day issues, unexpected faults and business-critical concerns.",
  },
  {
    icon: RefreshCw,
    title: "Keep Improving",
    description:
      "We share practical recommendations that help your IT environment remain reliable as your business evolves.",
  },
];

const benefits = [
  {
    icon: CheckCircle2,
    title: "Proactive Maintenance",
    description:
      "Reduce avoidable disruption through regular checks, timely updates and preventive technical care.",
  },
  {
    icon: Layers3,
    title: "Multi-Technology Expertise",
    description:
      "Bring hardware, software, security and networking support together with one experienced technology partner.",
  },
  {
    icon: Clock,
    title: "Responsive Support",
    description:
      "Reach a team that understands your environment and can move quickly when an issue needs attention.",
  },
  {
    icon: ShieldCheck,
    title: "Business Continuity",
    description:
      "Keep teams productive and critical systems available with structured, reliable ongoing support.",
  },
];

function SectionLabel({ children }) {
  return (
    <div className="mb-5 inline-flex w-fit items-center justify-center rounded-full border border-[#e5e5e5] bg-white px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#171717] shadow-[0_5px_20px_rgba(0,0,0,.04)] sm:text-[12px] md:px-8 md:py-3.5 md:text-[13px]">
      {children}
    </div>
  );
}

function CTAButton({ children }) {
  return (
    <Link
      to="/contact"
      className="group inline-flex items-center gap-3 rounded-full bg-[#f05a16] px-6 py-3.5 text-[13px] font-bold text-white shadow-[0_14px_30px_-16px_rgba(240,90,22,.55)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d94c0d] sm:px-7 sm:py-4 sm:text-[14px]"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

function BenefitCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">
        {item.title}
      </h3>

      <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">
        {item.description}
      </p>
    </div>
  );
}

export default function Amc() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white font-[Inter,Arial,sans-serif] text-[#111111]">

      {/* HERO - CENTERED LIKE ENTERPRISE SOFTWARE */}
      <SolutionHero
        eyebrow="Annual Maintenance Contracts"
        title="Keep your IT running."
        accent="We’ll handle the rest."
        description="Proactive maintenance and dependable support across hardware, software, security and networking—so your team can stay focused on the business."
      />

      {/* AMC COVERAGE */}
      <section
        id="amc-coverage"
        className="relative overflow-hidden bg-white py-10 sm:py-12 md:py-16"
      >
        <div className="amc-grid-background pointer-events-none absolute inset-0 opacity-[0.55]" />

        <div className="pointer-events-none absolute -left-24 top-44 h-72 w-72 rounded-full bg-[#f05a16]/[0.05] blur-[95px]" />

        <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[960px] text-center">
            <SectionLabel>Complete AMC Coverage</SectionLabel>

            <h2 className="text-[34px] font-medium leading-[1.04] tracking-[-0.055em] text-[#111111] sm:text-[48px] md:text-[64px]">
              One AMC. Complete
              <br />
              <span className="text-[#df4f08]">IT care.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-[760px] text-[15px] leading-7 text-[#666666] sm:text-[17px]">
              Bring the essential parts of your technology environment under a
              clear, coordinated maintenance and support approach.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {coverageAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  to={item.path}
                  className="solution-card-border group block w-full overflow-hidden rounded-[20px] bg-white hover:-translate-y-1 hover:shadow-[0_25px_60px_-30px_rgba(240,90,22,.3)]"
                >
                  <div className="grid min-h-[390px] md:min-h-[410px] md:grid-cols-[0.92fr_1.08fr]">

                    <div
                      className={`relative min-h-[280px] overflow-hidden bg-[#f6f6f6] md:min-h-[410px] ${
                        index % 2 === 1 ? "md:order-2" : ""
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                      <div className="absolute left-6 top-6 flex h-13 w-13 items-center justify-center rounded-2xl border border-white/70 bg-white/90 text-[#f05a16] shadow-[0_15px_35px_-20px_rgba(0,0,0,.35)] backdrop-blur-md">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div className="absolute bottom-6 left-6 rounded-full bg-white/95 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#171717] shadow-sm backdrop-blur-md">
                        {item.tag}
                      </div>
                    </div>

                    <div
                      className={`flex flex-col justify-center p-7 sm:p-10 lg:p-14 xl:p-16 ${
                        index % 2 === 1 ? "md:order-1" : ""
                      }`}
                    >
                      <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#f05a16]">
                        {String(index + 1).padStart(2, "0")} / AMC Coverage
                      </div>

                      <h3 className="max-w-[680px] text-[34px] font-medium leading-[1.05] tracking-[-0.045em] text-[#111111] sm:text-[44px] lg:text-[52px]">
                        {item.title}
                      </h3>

                      <p className="mt-5 max-w-[620px] text-[15px] leading-7 text-[#666666] sm:text-[17px]">
                        {item.description}
                      </p>

                      <div className="mt-8 inline-flex w-fit items-center gap-2 text-[13px] font-semibold text-[#df4f08]">
                        Explore solution
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>

                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* AMC SUPPORT */}
      <section className="relative overflow-hidden bg-[#fafafa] py-12 sm:py-14 md:py-20">
        <div className="amc-grid-background pointer-events-none absolute inset-0 opacity-[0.38]" />

        <div className="relative mx-auto grid w-full max-w-[1320px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-12">

          <div className="ramton-media-frame overflow-hidden rounded-[22px] bg-white shadow-[0_28px_75px_-45px_rgba(15,23,42,.35)]">
            <img
              src={supportWorkspace}
              alt="Reliable business technology supported by AMC"
              loading="lazy"
              decoding="async"
              className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[650px]"
            />
          </div>

          <div>
            <SectionLabel>Take AMC Support From Ramton</SectionLabel>

            <h2 className="max-w-[720px] text-[34px] font-medium leading-[1.04] tracking-[-0.055em] text-[#111111] sm:text-[48px] md:text-[62px]">
              Your technology deserves
              <br />
              <span className="text-[#df4f08]">proactive care.</span>
            </h2>

            <p className="mt-6 max-w-[680px] text-[15px] leading-7 text-[#666666] sm:text-[17px]">
              Our AMC service is shaped around your actual environment. We help
              prevent avoidable problems, respond when support is needed and
              keep your technology aligned with the way your business works.
            </p>

            <div className="mt-8 grid gap-3">
              {supportSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className="group flex gap-4 rounded-[16px] border border-[#e1e1e1] bg-white p-5 transition-all duration-300 hover:border-[#f05a16]/40 hover:shadow-[0_14px_38px_-28px_rgba(240,90,22,.45)]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff0e8] text-[#df4f08] transition-colors duration-300 group-hover:bg-[#f05a16] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>

                    <span>
                      <span className="block text-[16px] font-semibold text-[#222222]">
                        {step.title}
                      </span>

                      <span className="mt-1 block text-[13px] leading-6 text-[#6a6a6a] sm:text-[14px]">
                        {step.description}
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE RAMTON */}
      <section className="relative overflow-hidden bg-white py-10 sm:py-12 md:py-16">
        <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">

          <div className="mx-auto max-w-[920px] text-center">
            <SectionLabel>Why Choose Ramton</SectionLabel>

            <h2 className="text-[34px] font-medium leading-[1.05] tracking-[-0.055em] text-[#111111] sm:text-[48px] md:text-[62px]">
              Reliable support.
              <br />
              <span className="text-[#df4f08]">
                Practical business continuity.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[760px] text-[15px] leading-7 text-[#666666] sm:text-[17px]">
              We combine preventive care, technical breadth and responsive
              assistance to make ongoing IT maintenance simpler and more
              dependable.
            </p>
          </div>

          <div className="relative mx-auto mt-14 max-w-[1360px] lg:grid lg:grid-cols-[1fr_430px_1fr] lg:items-center lg:gap-5">

            <div className="grid gap-5">
              {benefits.slice(0, 2).map((item) => (
                <BenefitCard key={item.title} item={item} />
              ))}
            </div>

            <div className="my-6 hidden overflow-hidden rounded-[18px] border border-[#e2e2e2] bg-[#f7f7f7] shadow-[0_25px_70px_-40px_rgba(0,0,0,.3)] lg:my-0 lg:block">
              <img
                src={continuityWorkspace}
                alt="Maintained business server infrastructure"
                loading="lazy"
                decoding="async"
                className="h-[570px] w-full object-cover"
              />
            </div>

            <div className="grid gap-5">
              {benefits.slice(2, 4).map((item) => (
                <BenefitCard key={item.title} item={item} />
              ))}
            </div>

            <div className="mt-5 overflow-hidden rounded-[18px] border border-[#e2e2e2] bg-[#f7f7f7] shadow-[0_25px_70px_-40px_rgba(0,0,0,.3)] lg:hidden">
              <img
                src={continuityWorkspace}
                alt="Maintained business server infrastructure"
                loading="lazy"
                decoding="async"
                className="h-[360px] w-full object-cover sm:h-[430px]"
              />
            </div>

          </div>
        </div>
      </section>

      {/* HOW WE HELP */}
      <section className="relative overflow-hidden bg-[#fafafa] py-12 sm:py-14 md:py-16">
        <div className="amc-grid-background pointer-events-none absolute inset-0 opacity-[0.35]" />

        <div className="relative mx-auto grid w-full max-w-[1240px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-10">

          <div>
            <SectionLabel>How We Help</SectionLabel>

            <h2 className="max-w-[650px] text-[34px] font-medium leading-[1.05] tracking-[-0.055em] text-[#111111] sm:text-[48px] md:text-[60px]">
              Support built around
              <br />
              <span className="text-[#df4f08]">your environment.</span>
            </h2>

            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-[#666666] sm:text-[17px]">
              Every business has a different mix of users, equipment and
              priorities. We define a practical service scope around what you
              operate—without forcing your requirements into a standard plan.
            </p>
          </div>

          <div className="grid gap-3">
            {[
              "Environment and asset assessment",
              "Preventive maintenance scheduling",
              "Remote and on-site technical assistance",
              "Issue tracking and practical recommendations",
              "Hardware, software, security and network coordination",
              "Ongoing review as business needs change",
            ].map((item, index) => (
              <div
                key={item}
                className="group flex items-center gap-4 rounded-[15px] border border-[#e1e1e1] bg-white px-5 py-4 transition-all duration-300 hover:border-[#f05a16]/40 hover:shadow-[0_12px_30px_-24px_rgba(240,90,22,.4)] sm:px-6"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fff0e8] text-[11px] font-bold text-[#df4f08]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <CheckCircle2 className="hidden h-5 w-5 shrink-0 text-[#f05a16] sm:block" />

                <span className="text-sm font-semibold text-[#444444] md:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      <SolutionOverviewCTA />
    </main>
  );
}
