import { useEffect, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  MessageSquare,
  Users,
} from "lucide-react";

import smartphoneNews from "../assets/best-selling-smartphone.png";
import browserBugNews from "../assets/browser-bug.png";

/* =========================================================
   COUNT UP
========================================================= */

function CountUp({ target, suffix = "", duration = 1200 }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [refElement, setRefElement] = useState(null);

  useEffect(() => {
    if (!refElement || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(refElement);

    return () => observer.disconnect();
  }, [refElement, hasAnimated]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const eased = 1 - Math.pow(1 - progress, 3);
      const nextValue = Math.floor(target * eased);

      setCount((previous) =>
        previous === nextValue ? previous : nextValue
      );

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, target, duration]);

  return (
    <span ref={setRefElement}>
      {count}
      {suffix}
    </span>
  );
}

/* =========================================================
   SECTION PILL
========================================================= */

function SectionPill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#111318] shadow-[0_14px_35px_-24px_rgba(0,0,0,.18)] md:px-8 md:py-3.5 md:text-[13px]">
      {children}
    </span>
  );
}

/* =========================================================
   HOME-STYLE 3D OBJECTS
========================================================= */

function ThreeDObjects() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="ramton-news-blob ramton-news-blob-a" />
      <div className="ramton-news-blob ramton-news-blob-b" />

      <div className="ramton-news-ring ramton-news-ring-a" />
      <div className="ramton-news-ring ramton-news-ring-b" />

      <div className="ramton-news-sphere ramton-news-sphere-a" />
      <div className="ramton-news-sphere ramton-news-sphere-b" />
    </div>
  );
}

/* =========================================================
   EVENTS DATA
========================================================= */

const eventPhotos = [
  {
    src: "https://www.ramton.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-08-08-at-16.43.09_2de733a6-qsazpwi1siyn98upjm281wcmss8kz72ei6f2xk04hk.jpg",
    title: "Microsoft Partner Meeting",
    category: "Partnership",
    year: "2024",
  },
  {
    src: "https://www.ramton.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-08-08-at-16.43.09_04e7989a-qsazpzbkd12i82qm35a3rdn0kxuomadlikdjddvxyw.jpg",
    title: "Microsoft Technology Session",
    category: "Partnership",
    year: "2024",
  },
  {
    src: "https://www.ramton.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-08-08-at-16.43.08_78fe0744-qsazpsqp16thyt065kfprxasf8r44enh5nt50g5p6g.jpg",
    title: "Cloud for Partners",
    category: "Technology",
    year: "2024",
  },
  {
    src: "https://www.ramton.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-08-08-at-16.43.08_64a4a551-qsazppx6gopmzz49m17u2g0en350hbca59uokm9vp4.jpg",
    title: "Partner Technology Meet",
    category: "Partnership",
    year: "2024",
  },
  {
    src: "https://www.ramton.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-08-08-at-16.44.08_1801e201-qsazqalmn1hy3ea89a5mlasjpkb36nmdk47d4pf7w8.jpg",
    title: "Team Collaboration",
    category: "Team",
    year: "2024",
  },
  {
    src: "https://www.ramton.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-08-08-at-16.43.08_9afd1e01-qsazpn3nw6ls158d2hzycyq0uxiwu8134vw84se27s.jpg",
    title: "Technology Community",
    category: "Event",
    year: "2024",
  },
  {
    src: "https://www.ramton.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-08-08-at-16.43.07_5089ff23-qsazp9xx8i3rilrh7cb6e21kjjbrugkuf2rfewxkmw.jpg",
    title: "Partner Connect",
    category: "Event",
    year: "2024",
  },
  {
    src: "https://www.ramton.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-08-08-at-16.43.07_0842ec10-qsazp74enzzwjrvknt3aokr6rdpo7d9neosyz31r5k.jpg",
    title: "Ramton Partner Team",
    category: "Partnership",
    year: "2024",
  },
  {
    src: "https://www.ramton.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-07-07-at-11.04.55-AM-1-1-prfdxerghrgcqu7fsyhcxdswzurnfxnmj7w7qzx48o.jpg",
    title: "Foundation Day Celebration",
    category: "Company",
    year: "2022",
  },
  {
    src: "https://www.ramton.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-07-07-at-11.04.55-AM-2-1-prfdxgn4vfixe24phzam2dbu6midvbv37h76pjubw8.jpg",
    title: "Team Celebration",
    category: "Company",
    year: "2022",
  },
  {
    src: "https://www.ramton.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-07-07-at-11.04.56-AM-1-1-prfdxkehmro2ohz8w0x4ccdok5zuq4a0jzt4mnor7c.jpg",
    title: "Ramton Team Evening",
    category: "Team",
    year: "2022",
  },
];

/* =========================================================
   NEWS DATA
========================================================= */

const newsItems = [
  {
    date: "08 JUL 2021",
    comments: "1 Comment",
    category: "TECHNOLOGY",
    title: "Being The Best-selling Smartphone In This Year",
    description:
      "A technology-focused story highlighting the devices and digital experiences shaping the way people stay connected and productive.",
    image: smartphoneNews,
  },
  {
    date: "08 JUL 2021",
    comments: "No Comments",
    category: "SECURITY",
    title: "Patch Browser Bug To Prevent Tracking Of Online Activities",
    description:
      "A practical reminder to keep browsers patched and security protections current to reduce unwanted tracking and digital risk.",
    image: browserBugNews,
  },
  {
    date: "05 SEP 2026",
    comments: "Latest Update",
    category: "LATEST NEWS",
    title: "Ramton Continues Building Secure, Future-ready IT Solutions",
    description:
      "Discover how hardware, software, networking and security come together to help modern businesses build a reliable technology foundation.",
    image: smartphoneNews,
  },
];

/* =========================================================
   NEWS CARD
========================================================= */

function NewsCard({ item }) {
  return (
    <article className="group overflow-hidden rounded-[25px] border border-slate-200 bg-white shadow-[0_18px_50px_-30px_rgba(15,23,42,.18)] transition-all duration-500 hover:-translate-y-2 hover:border-[#dc2626]/45 hover:shadow-[0_30px_65px_-30px_rgba(220,38,38,.25)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

        <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-white/90 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-slate-900 backdrop-blur-md">
          {item.category}
        </span>
      </div>

      <div className="p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-[#dc2626]" />
            {item.date}
          </span>

          <span className="inline-flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-[#dc2626]" />
            {item.comments}
          </span>
        </div>

        <h3 className="mt-6 text-2xl font-bold leading-[1.12] tracking-[-0.035em] text-slate-900 transition-colors group-hover:text-[#dc2626]">
          {item.title}
        </h3>

        <p className="mt-5 text-[15px] leading-7 text-slate-600">
          {item.description}
        </p>

        <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#dc2626]">
          Read More
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function NewsEvents() {
  return (
    <main className="relative overflow-hidden bg-white font-[Inter,Arial,sans-serif] text-[#111318]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-white">

        {/* Same style of decorative objects as Home */}
        <ThreeDObjects />

        {/* Home-style grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.72]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15,23,42,.065) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,.065) 1px, transparent 1px)",
            backgroundSize: "88px 88px",
          }}
        />

        {/* Orange glow */}
        <div className="pointer-events-none absolute left-1/2 top-[18%] h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-[#dc2626]/[0.06] blur-[110px]" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex min-h-[500px] max-w-[1500px] flex-col items-center justify-center px-5 pb-12 pt-8 text-center sm:min-h-[530px] sm:px-7 sm:pb-14 sm:pt-10 md:min-h-[550px] md:px-8 md:pb-16 md:pt-12 lg:min-h-[575px] lg:px-10 lg:pt-10">

          {/* Pill */}
          <div className="mb-5 inline-flex items-center rounded-full border border-slate-200 bg-white px-6 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#111318] shadow-[0_14px_35px_-24px_rgba(0,0,0,.18)] sm:text-[11px]">
            News &amp; Events
          </div>

          {/* Heading */}
          <h1 className="max-w-[1500px] text-[40px] font-normal leading-[1.02] tracking-[-0.065em] text-[#2a1409] sm:text-[55px] md:text-[70px] lg:text-[82px] xl:text-[90px]">
            Stories, Events &amp;
            <br />
            <span className="text-[#c44e0d]">Technology</span>
            <br />
            That Move Business.
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-[92vw] text-[14px] font-normal leading-[1.65] text-slate-700 sm:mt-6 sm:max-w-[760px] sm:text-[17px] md:max-w-[940px] md:text-[19px]">
            Discover the people, partnerships, events and technology
            insights behind Ramton — and see how we continue to help
            businesses move forward with confidence.
          </p>

          {/* Home-style button */}
          <div className="mt-7">
            <a
              href="#events"
              aria-label="Explore Events"
              className="group relative inline-flex h-[60px] w-[225px] items-center overflow-hidden rounded-full bg-red-500 text-[#111318] shadow-[0_18px_40px_-28px_rgba(15,23,42,.28)] transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-0.5"
            >
              <span
                className="absolute left-1.5 top-1/2 z-10 flex h-[52px] w-[52px] -translate-y-1/2 shrink-0 items-center justify-center rounded-full bg-white transition-[width,border-radius] duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:w-[calc(100%-12px)] group-hover:rounded-full"
              >
                <span className="pointer-events-none absolute left-0 top-0 flex h-[52px] w-[52px] shrink-0 items-center justify-center">
                  <ArrowRight className="h-5 w-5 text-[#111318]" />
                </span>
              </span>

              <span className="relative z-20 ml-[63px] whitespace-nowrap text-[18px] font-bold text-white transition-colors duration-300 group-hover:text-black">
                Explore Events
              </span>
            </a>
          </div>

          {/* Trust row */}
          <div className="mt-7 flex items-center justify-center gap-4">
            <div className="flex">
              {["N", "+", "IT"].map((item, index) => (
                <span
                  key={item}
                  className={`flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-white text-[14px] font-bold text-[#dc2626] shadow-[0_8px_18px_-12px_rgba(0,0,0,.4)] ${
                    index > 0 ? "-ml-2" : ""
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="text-left">
              <p className="text-[18px] font-bold leading-none text-[#111318] sm:text-[21px]">
                Ramton Updates
              </p>

              <p className="mt-1.5 text-[14px] text-slate-500 sm:text-[17px]">
                news, events &amp; technology insights.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* =====================================================
          COUNTING BAR
      ===================================================== */}

      <section className="relative bg-[#f7f7f8] py-9 sm:py-12 md:py-16">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 md:px-8">

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              [20, "+", "Years of Experience"],
              [500, "+", "Customers Globally"],
              [1, "K+", "Cybersecurity Projects"],
              [100, "%", "Client Retention"],
            ].map(([target, suffix, label]) => (
              <div
                key={label}
                className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white px-5 py-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#dc2626]/50 hover:shadow-[0_20px_45px_-25px_rgba(220,38,38,.35)] sm:px-6 sm:py-8 md:px-8 md:py-9"
              >
                <div className="absolute left-1/2 top-0 h-[2px] w-0 -translate-x-1/2 bg-[#dc2626] transition-all duration-500 group-hover:w-24" />

                <div className="flex items-center gap-4 sm:gap-5">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff1e8] text-[#dc2626] sm:h-12 sm:w-12">
                    <Users className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="text-[30px] font-normal leading-none tracking-[-0.055em] text-[#dc2626] sm:text-[36px] md:text-[48px]">
                      <CountUp target={target} suffix={suffix} />
                    </div>

                    <p className="mt-1.5 text-[12px] font-medium text-slate-700 sm:text-[13px] md:text-[14px]">
                      {label}
                    </p>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          EVENTS SECTION
      ===================================================== */}

      <section
        id="events"
        className="relative z-10 bg-white py-12 sm:py-16 md:py-20 lg:py-24"
      >
        <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 md:px-8 lg:px-10">

          {/* Section heading */}
          <div className="mb-10 text-center sm:mb-12 lg:mb-14">

            <div className="flex justify-center">
              <SectionPill>Our Events</SectionPill>
            </div>

            <div className="mx-auto mt-6 max-w-4xl">
              <h2 className="text-[30px] font-normal leading-[1.02] tracking-[-0.055em] text-[#111318] sm:text-[44px] md:text-[56px]">
                Where technology{" "}
                <span className="text-[#dc2626]">
                  meets people.
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-7 text-slate-600 sm:text-[15px] md:text-[16px]">
                From partner meets and technology sessions to team
                celebrations, these moments capture the culture and
                relationships behind Ramton.
              </p>
            </div>
          </div>

          {/* Events grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {eventPhotos.map((event, index) => (
              <article
                key={`${event.title}-${event.year}-${index}`}
                className="group overflow-hidden rounded-[25px] border border-slate-200 bg-white shadow-[0_18px_50px_-30px_rgba(15,23,42,.18)] transition-all duration-500 hover:-translate-y-2 hover:border-[#dc2626]/45 hover:shadow-[0_30px_65px_-30px_rgba(220,38,38,.25)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">

                  <img
                    src={event.src}
                    alt={event.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-slate-900 backdrop-blur-md">
                    {event.category}
                  </div>

                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs font-semibold text-white">
                    <CalendarDays className="h-3.5 w-3.5 text-[#dc2626]" />
                    {event.year}
                  </div>
                </div>

                <div className="p-5 sm:p-6">

                  <h3 className="text-lg font-bold leading-tight tracking-[-0.025em] text-slate-900 transition-colors group-hover:text-[#dc2626] sm:text-xl">
                    {event.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    A look at Ramton people, partnerships and technology moments.
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#dc2626]">
                    View Event
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>

                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          NEWS SECTION
      ===================================================== */}

      <section
        id="news"
        className="relative z-10 bg-[#fff7f2] py-12 sm:py-16 md:py-20 lg:py-24"
      >
        <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 md:px-8 lg:px-10">

          {/* Section heading */}
          <div className="mb-10 text-center sm:mb-12 lg:mb-14">

            <div className="flex justify-center">
              <SectionPill>Latest News</SectionPill>
            </div>

            <div className="mx-auto mt-6 max-w-4xl">
              <h2 className="text-[30px] font-normal leading-[1.02] tracking-[-0.055em] text-[#111318] sm:text-[44px] md:text-[56px]">
                News &amp;{" "}
                <span className="text-[#dc2626]">
                  insights.
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-7 text-slate-600 sm:text-[15px] md:text-[16px]">
                Technology stories, practical security updates and the
                latest Ramton developments — all in one place.
              </p>
            </div>

          </div>

          {/* News cards */}
          <div className="grid gap-6 lg:grid-cols-3">

            {newsItems.map((item) => (
              <NewsCard
                key={item.title}
                item={item}
              />
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative z-10 bg-white px-3 pb-10 pt-8 sm:px-4 md:px-6 md:pb-12 md:pt-10">

        <div className="mx-auto w-full max-w-[1500px]">

          <div className="relative flex flex-col gap-7 overflow-hidden rounded-[24px] border border-[#dc2626]/30 bg-white px-5 py-8 shadow-[0_0_65px_14px_rgba(220,38,38,.13)] sm:px-7 sm:py-9 md:rounded-[28px] md:px-10 md:py-11 lg:flex-row lg:items-center lg:justify-between">

            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#dc2626]/10 blur-3xl" />

            <div className="relative z-10">

              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#dc2626]">
                Have an IT Challenge?
              </p>

              <h2 className="mt-2 max-w-[760px] text-[30px] font-normal leading-[1.04] tracking-[-0.055em] text-[#111318] sm:text-[40px] md:text-[52px] lg:text-[60px]">
                Let's Find the Right{" "}
                <span className="text-[#dc2626]">
                  Technology Solution
                </span>{" "}
                for Your Business.
              </h2>

              <p className="mt-3 max-w-[580px] text-[15px] leading-7 text-slate-700">
                From infrastructure to cybersecurity, our team is
                ready to scope, plan and deliver.
              </p>

            </div>

            <div className="relative z-10 flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">

              <a
                href="/contact#contact-form"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#dc2626] px-7 py-4 text-[14px] font-semibold text-white shadow-[0_18px_35px_-18px_rgba(220,38,38,.7)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#dc2626]"
              >
                Talk to an Expert

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-7 py-4 text-[14px] font-semibold text-[#111318] transition-all duration-300 hover:-translate-y-1 hover:border-[#dc2626] hover:text-[#dc2626]"
              >
                Get a Free Quote

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          PAGE-SPECIFIC 3D OBJECT CSS
      ===================================================== */}

      <style>{`
        .ramton-news-blob,
        .ramton-news-ring,
        .ramton-news-sphere {
          position: absolute;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .ramton-news-blob {
          width: 230px;
          height: 230px;
          border-radius: 42% 58% 55% 45% / 44% 42% 58% 56%;
          background:
            radial-gradient(
              circle at 30% 25%,
              rgba(255,255,255,.98),
              transparent 20%
            ),
            radial-gradient(
              circle at 65% 30%,
              rgba(255,190,115,.92),
              transparent 28%
            ),
            linear-gradient(
              145deg,
              #ffb36f 0%,
              #dc2626 45%,
              #9c350d 100%
            );
          box-shadow:
            inset -25px -28px 55px rgba(91,25,4,.32),
            inset 18px 18px 30px rgba(255,255,255,.35),
            0 35px 80px -35px rgba(220,38,38,.65);
          filter: saturate(1.08);
          opacity: .88;
          animation: ramton-news-blob-float 11s ease-in-out infinite;
        }

        .ramton-news-blob-a {
          left: -90px;
          top: 90px;
        }

        .ramton-news-blob-b {
          right: -55px;
          bottom: 45px;
          width: 170px;
          height: 170px;
          animation-delay: -4s;
          animation-duration: 13s;
          opacity: .72;
        }

        .ramton-news-ring {
          width: 190px;
          height: 115px;
          border: 26px solid rgba(220,38,38,.72);
          border-radius: 50%;
          box-shadow:
            inset 8px 8px 15px rgba(255,255,255,.42),
            inset -12px -12px 25px rgba(100,27,5,.32),
            0 28px 55px -28px rgba(220,38,38,.55);
          transform:
            rotate(-24deg)
            perspective(500px)
            rotateX(18deg)
            rotateY(-18deg);
          opacity: .65;
          animation: ramton-news-ring-float 12s ease-in-out infinite;
        }

        .ramton-news-ring-a {
          right: -55px;
          top: 85px;
        }

        .ramton-news-ring-b {
          left: 8%;
          bottom: -70px;
          width: 150px;
          height: 90px;
          border-width: 20px;
          opacity: .38;
          animation-delay: -6s;
        }

        .ramton-news-sphere {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background:
            radial-gradient(
              circle at 28% 22%,
              #fff 0 8%,
              #ffcfaa 15%,
              #dc2626 48%,
              #8d2d09 100%
            );
          box-shadow:
            inset -12px -14px 22px rgba(74,20,3,.32),
            inset 8px 8px 15px rgba(255,255,255,.4),
            0 22px 40px -20px rgba(0,0,0,.3);
          animation: ramton-news-sphere-float 8s ease-in-out infinite;
        }

        .ramton-news-sphere-a {
          left: 13%;
          top: 30%;
        }

        .ramton-news-sphere-b {
          right: 16%;
          bottom: 18%;
          width: 40px;
          height: 40px;
          animation-delay: -3s;
        }

        @keyframes ramton-news-blob-float {
          0%,
          100% {
            transform:
              translate3d(0,0,0)
              rotate(-10deg)
              scale(1);
          }

          50% {
            transform:
              translate3d(22px,-25px,0)
              rotate(9deg)
              scale(1.05);
          }
        }

        @keyframes ramton-news-ring-float {
          0%,
          100% {
            transform:
              rotate(-24deg)
              perspective(500px)
              rotateX(18deg)
              rotateY(-18deg)
              translate3d(0,0,0);
          }

          50% {
            transform:
              rotate(-15deg)
              perspective(500px)
              rotateX(22deg)
              rotateY(-12deg)
              translate3d(-18px,-22px,0);
          }
        }

        @keyframes ramton-news-sphere-float {
          0%,
          100% {
            transform: translate3d(0,0,0);
          }

          50% {
            transform: translate3d(12px,-18px,0);
          }
        }

        @media (max-width: 639px) {
          .ramton-news-blob-a {
            left: -125px;
            top: 70px;
            width: 165px;
            height: 165px;
          }

          .ramton-news-blob-b {
            right: -100px;
            bottom: 10px;
            width: 135px;
            height: 135px;
          }

          .ramton-news-ring-a {
            right: -115px;
            top: 75px;
            transform:
              rotate(-24deg)
              perspective(500px)
              rotateX(18deg)
              rotateY(-18deg)
              scale(.58);
          }

          .ramton-news-ring-b {
            left: -65px;
            bottom: -70px;
            transform:
              rotate(-24deg)
              perspective(500px)
              rotateX(18deg)
              rotateY(-18deg)
              scale(.62);
          }

          .ramton-news-sphere-a {
            left: 7%;
            top: 22%;
            width: 36px;
            height: 36px;
          }

          .ramton-news-sphere-b {
            right: 8%;
            bottom: 13%;
            width: 32px;
            height: 32px;
          }
        }
      `}</style>
    </main>
  );
}
