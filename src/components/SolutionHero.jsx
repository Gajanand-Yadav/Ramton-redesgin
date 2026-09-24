import { useLayoutEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import hardwareArt from "../assets/rename.png";
import hardwareWorkstation from "../assets/solutions/hardware-workstation.webp";
import networkingOffice from "../assets/solutions/networking-office.webp";
import NetworkingHeroVisual from "./NetworkingHeroVisual";
import SecurityHeroVisual from "./SecurityHeroVisual";
import SoftwareHeroVisual from "./SoftwareHeroVisual";

const homepageHeroArt = {
  "/hardware": hardwareArt,
  "/software": true,
  "/networking": true,
  "/security": true,
};

const whyChooseArt = {
  hardware: hardwareWorkstation,
  software:
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=88",
  networking: networkingOffice,
  security:
    "https://images.unsplash.com/photo-1519871544760-ff4e659017b9?auto=format&fit=crop&w=1200&q=88",
};

const categoryLabels = {
  hardware: "Hardware",
  software: "Software",
  networking: "Networking",
  security: "Security",
};

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

function getSolutionCategory(pathname) {
  return pathname.split("/").filter(Boolean)[0] || "hardware";
}

function getDirectCards(container) {
  return Array.from(container.children).filter((child) => {
    if (!(child instanceof HTMLElement)) return false;
    const isCardElement =
      child.matches("article, a") || child.classList.contains("group");
    return isCardElement && Boolean(child.querySelector("h3"));
  });
}

function enhanceSolutionPage(heroNode, category) {
  const main = heroNode?.closest("main");
  if (!main) return () => {};
  const isOverview = heroNode.hasAttribute("data-overview-hero");

  main.classList.add("ramton-solution-page");
  main.dataset.solutionCategory = category;

  const sections = Array.from(main.querySelectorAll(":scope > section"));
  const revealTargets = [];
  let primaryStackEnhanced = false;

  sections.forEach((section) => {
    if (
      section === heroNode ||
      section.hasAttribute("data-home-cta") ||
      (isOverview && section.id === "contact")
    ) {
      return;
    }

    section.classList.add("ramton-section-reveal");
    revealTargets.push(section);

    const heading = section.querySelector("h2");
    if (heading) heading.classList.add("ramton-heading-reveal");

    const candidateParents = Array.from(section.querySelectorAll("div"));
    candidateParents.forEach((parent) => {
      const cards = getDirectCards(parent);
      if (cards.length < 3) return;

      const isDeclaredStack = parent.classList.contains("ramton-solution-stack");
      if (primaryStackEnhanced && !isDeclaredStack) return;

      parent.classList.add("ramton-solution-stack");
      section.classList.add("ramton-stack-section");
      primaryStackEnhanced = true;

      cards.forEach((card, index) => {
        card.classList.add("ramton-solution-card", "ramton-card-reveal");
        card.style.setProperty("--ramton-stack-index", index);

        const media = card.querySelector("img")?.parentElement;
        if (media) media.classList.add("ramton-media-frame");
      });
    });

    const sectionCards = Array.from(section.querySelectorAll(".group")).filter(
      (node) => node.querySelector("h3"),
    );
    sectionCards.forEach((card, index) => {
      card.classList.add("ramton-card-reveal");
      card.style.setProperty("--ramton-card-index", index % 4);
    });
  });

  const categoryImage = whyChooseArt[category];
  const repeatedMedia = Array.from(main.querySelectorAll("img")).filter((img) => {
    const alt = img.alt.toLowerCase();
    return alt.includes("technology workspace") || alt === "server infrastructure";
  });

  repeatedMedia.forEach((img) => {
    if (categoryImage) img.src = categoryImage;
    img.dataset.whyChooseArt = "true";
    img.parentElement?.classList.add(
      "ramton-media-frame",
      "ramton-center-media",
      "ramton-static-media",
    );
  });

  Array.from(main.querySelectorAll("img")).forEach((img) => {
    const parent = img.parentElement;
    if (
      parent &&
      !img.closest("[data-solution-hero]") &&
      !img.closest(".marquee-track") &&
      parent.className.includes("overflow-hidden")
    ) {
      parent.classList.add("ramton-media-frame");
    }
  });

  Array.from(main.querySelectorAll('a[href="/contact"]')).forEach((cta) => {
    if (
      cta.closest("[data-solution-hero]") ||
      cta.closest("[data-home-cta]") ||
      (isOverview && cta.closest("section#contact"))
    ) {
      return;
    }
    cta.classList.add("ramton-premium-cta");
  });

  const finalCta = main.querySelector("section#contact");
  if (finalCta && !isOverview && !finalCta.hasAttribute("data-home-cta")) {
    finalCta.classList.add("ramton-final-cta");
  }

  if (!("IntersectionObserver" in window)) {
    revealTargets.forEach((target) => target.classList.add("is-visible"));
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
  );

  revealTargets.forEach((target) => observer.observe(target));

  return () => {
    observer.disconnect();
    main.classList.remove("ramton-solution-page");
    delete main.dataset.solutionCategory;
  };
}

export default function SolutionHero({
  eyebrow,
  title,
  accent,
  description,
  image,
  imageAlt = "",
  overview = false,
}) {
  const { pathname } = useLocation();
  const heroRef = useRef(null);
  const category = getSolutionCategory(pathname);
  const isOverview = overview || Boolean(homepageHeroArt[pathname]);
  const usesSoftwareVisual = pathname === "/software";
  const usesNetworkingVisual = pathname === "/networking";
  const usesSecurityVisual = pathname === "/security";
  const usesCustomVisual = usesSoftwareVisual || usesNetworkingVisual || usesSecurityVisual;
  const resolvedImage = usesCustomVisual ? null : homepageHeroArt[pathname] || image;
  const hasHeroVisual = usesCustomVisual || Boolean(resolvedImage);
  const resolvedAlt =
    imageAlt ||
    (pathname === "/security"
      ? "Global security network illustration"
      : pathname === "/networking"
        ? "Enterprise router, network switch and connected business devices"
      : `${categoryLabels[category] || "Technology"} solutions 3D illustration`);

  useLayoutEffect(
    () => enhanceSolutionPage(heroRef.current, category),
    [category, pathname],
  );

  const content = (
    <div className={hasHeroVisual ? "w-full max-w-[880px]" : "w-full"}>
      <div className="ramton-hero-capsule mb-6 inline-flex items-center rounded-full border border-slate-200 bg-white px-6 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#111318] shadow-[0_14px_35px_-24px_rgba(0,0,0,.18)] sm:text-[11px]">
        {eyebrow}
      </div>

      <h1
        data-hero-heading
        className={
          hasHeroVisual
            ? "ramton-hero-heading max-w-[880px] text-[42px] font-normal leading-[1.03] tracking-[-0.065em] text-[#2a1409] sm:text-[56px] md:text-[66px] lg:text-[68px] xl:text-[74px]"
            : "ramton-hero-heading mx-auto max-w-[1500px] text-[42px] font-normal leading-[1.02] tracking-[-0.065em] text-[#2a1409] sm:text-[58px] md:text-[74px] lg:text-[88px] xl:text-[94px]"
        }
      >
        {title}
        <br />
        <span className="text-[#dc2626]">{accent}</span>
      </h1>

      <p
        className={
          hasHeroVisual
            ? "ramton-hero-copy mt-7 max-w-[760px] text-[15px] font-normal leading-[1.65] text-slate-700 sm:text-[17px] md:text-[18px]"
            : "ramton-hero-copy mx-auto mt-7 max-w-[940px] text-[16px] font-normal leading-[1.65] text-slate-700 sm:text-[18px] md:text-[20px]"
        }
      >
        {description}
      </p>

      <div className="ramton-hero-cta mt-7">
        <Link
          to="/contact"
          aria-label="Discuss Your Requirement"
          className="group relative inline-flex h-[60px] w-[285px] max-w-full items-center overflow-hidden rounded-full bg-red-500 pr-4 text-[#111318] shadow-[0_18px_40px_-28px_rgba(15,23,42,.28)] transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-0.5 sm:w-[310px] sm:pr-5"
        >
          <span className="absolute left-1.5 top-1/2 z-10 flex h-[52px] w-[52px] -translate-y-1/2 shrink-0 items-center justify-center rounded-full bg-white text-[#111318] transition-[width,border-radius] duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:w-[calc(100%-12px)] group-hover:rounded-full">
            <span className="pointer-events-none absolute left-0 top-0 flex h-[52px] w-[52px] shrink-0 items-center justify-center">
              <Arrow className="h-5 w-5 shrink-0 transform-none" />
            </span>
          </span>

          <span className="relative z-20 ml-[61px] whitespace-nowrap text-[16px] font-bold text-white transition-colors duration-300 group-hover:text-black sm:ml-[63px] sm:text-[18px]">
            Discuss Your Requirement
          </span>
        </Link>
      </div>
    </div>
  );

  return (
    <section
      ref={heroRef}
      data-solution-hero
      data-overview-hero={isOverview ? "" : undefined}
      className="ramton-solution-hero relative overflow-hidden bg-white"
    >
      <div
        className="ramton-hero-objects pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="ramton-shared-3d-blob ramton-shared-3d-blob-a" />
        <div className="ramton-shared-3d-blob ramton-shared-3d-blob-b" />
        <div className="ramton-shared-3d-ring ramton-shared-3d-ring-a" />
        <div className="ramton-shared-3d-ring ramton-shared-3d-ring-b" />
        <div className="ramton-shared-3d-sphere ramton-shared-3d-sphere-a" />
        <div className="ramton-shared-3d-sphere ramton-shared-3d-sphere-b" />
      </div>

      <div
        className="ramton-hero-grid pointer-events-none absolute inset-0 opacity-[0.72]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,.065) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,.065) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-[22%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#dc2626]/[0.06] blur-[110px]" />

      {hasHeroVisual ? (
        <div className="relative z-10 mx-auto grid min-h-[500px] w-full max-w-[1500px] grid-cols-1 lg:min-h-[540px] lg:grid-cols-[1.06fr_0.94fr]">
          <div className="flex items-center justify-center px-5 py-7 text-center sm:px-8 md:px-10 lg:justify-start lg:px-10 lg:text-left xl:px-12">
            {content}
          </div>

          <div className="networking-globe-scene relative flex min-h-[260px] items-center justify-center px-5 pb-6 sm:min-h-[300px] sm:px-7 lg:min-h-[540px] lg:px-5 lg:pb-0">
            <div className="pointer-events-none absolute h-[320px] w-[320px] rounded-full bg-[#dc2626]/[0.1] blur-[64px] sm:h-[410px] sm:w-[410px]" />
            <div className={`ramton-hero-art relative z-10 w-full ${usesSoftwareVisual || usesSecurityVisual ? "max-w-[650px]" : "max-w-[560px]"}`}>
              {usesSoftwareVisual ? (
                <SoftwareHeroVisual />
              ) : usesNetworkingVisual ? (
                <NetworkingHeroVisual />
              ) : usesSecurityVisual ? (
                <SecurityHeroVisual />
              ) : (
                <div className="networking-globe-float relative">
                  <img
                    src={resolvedImage}
                    alt={resolvedAlt}
                    className={`networking-globe-image ramton-hero-image-${category} h-auto w-full object-contain`}
                    loading="eager"
                    decoding="async"
                  />
                  <div className="networking-globe-shadow" aria-hidden="true" />
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="relative z-10 mx-auto flex min-h-[500px] max-w-[1500px] flex-col items-center justify-center px-5 text-center sm:px-7 md:min-h-[520px] md:px-8 lg:min-h-[540px] lg:px-10">
          {content}
        </div>
      )}
    </section>
  );
}
