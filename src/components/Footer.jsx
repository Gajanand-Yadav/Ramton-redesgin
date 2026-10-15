import { Link } from "react-router-dom";
import logo from "../assets/ramton-logo.png";

import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const groups = [
  {
    title: "Solutions",
    links: [
      { label: "IT Infrastructure", to: "/hardware" },
      { label: "Hardware Solutions", to: "/hardware" },
      { label: "Software Solutions", to: "/software" },
      { label: "Security Solutions", to: "/security" },
      { label: "Networking Solutions", to: "/networking" },
      { label: "AMC & Support", to: "/amc" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Careers", to: "/career" },
      { label: "Partners", to: "/about" },
      { label: "News & Events", to: "/news-events" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQs", to: "/about" },
      { label: "Privacy Policy", placeholder: true },
      { label: "Terms & Conditions", placeholder: true },
    ],
  },
];

const linkClass =
  "relative inline-block text-[13px] text-slate-700 transition-colors duration-200 hover:text-[#dc2626] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[1.5px] after:w-0 after:rounded-full after:bg-[#dc2626] after:transition-all after:duration-300 hover:after:w-full";

function FooterLink({ link }) {
  if (link.placeholder) {
    return (
      <span className="cursor-default text-[13px] text-slate-600">
        {link.label}
      </span>
    );
  }

  return (
    <Link to={link.to} className={linkClass}>
      {link.label}
    </Link>
  );
}

export default function Footer() {
  const socialLinkClass =
    "flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-all duration-200 hover:border-[#dc2626] hover:bg-[#dc2626] hover:text-white";

  return (
    <footer className="bg-white text-slate-800">
      {/* Warm orange gradient divider */}
      <div
        aria-hidden="true"
        className="h-[2px] w-full bg-gradient-to-r from-[#c2410c] via-[#fed7c3] to-[#c2410c]"
      />

      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-8">
        <div className="grid gap-10 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.35fr_repeat(3,1fr)_1.25fr] lg:gap-8">
          {/* Brand */}
          <div>
            <Link to="/" aria-label="Ramton Home" className="inline-block">
              <img
                src={logo}
                alt="Ramton"
                className="w-[145px]"
              />
            </Link>

            <p className="mt-4 max-w-[280px] text-sm leading-7 text-slate-700">
              Delivering reliable, secure and future-ready technology solutions
              for modern businesses.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/ramton_technologies_pvt_ltd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={socialLinkClass}
              >
                <FaInstagram size={17} />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@Rtpl2017"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className={socialLinkClass}
              >
                <FaYoutube size={17} />
              </a>

              {/* Twitter (X) */}
              <a
                href="https://x.com/RamtonT"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter X"
                className={socialLinkClass}
              >
                <FaXTwitter size={15} />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/ramton.in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={socialLinkClass}
              >
                <FaFacebookF size={15} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/ramton-technologies-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={socialLinkClass}
              >
                <FaLinkedinIn size={15} />
              </a>
            </div>
          </div>

          {/* Footer Groups */}
          {groups.map((group) => (
            <div key={group.title}>
              <h5 className="text-sm font-bold text-slate-900">
                {group.title}
              </h5>

              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h5 className="text-sm font-bold text-slate-900">Contact</h5>

            <ul className="mt-5 space-y-4 text-[13px] leading-5 text-slate-700">
              <li>
                <a
                  href="tel:+911145678900"
                  className="relative inline-block transition-colors hover:text-[#dc2626]"
                >
                  <span aria-hidden="true">☎</span>
                  <span className="ml-2">+91 11 4140 3366</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:info@ramton.in"
                  className="relative inline-block transition-colors hover:text-[#dc2626]"
                >
                  <span aria-hidden="true">✉</span>
                  <span className="ml-2">info@ramton.in</span>
                </a>
              </li>

              <li className="flex items-start">
                <span aria-hidden="true">⌖</span>
                <span className="ml-2">
                  145B/9, 1st Floor, Kishangarh,
                  <br />
                  Near United Free Church, Vasant Kunj,
                  <br />
                  New Delhi, Delhi-110070 India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 border-t border-slate-200 py-5 text-center text-xs text-slate-600">
          <span>© 2026 Ramton. All Rights Reserved.</span>

          <span aria-hidden="true">|</span>

          <span>
            Website Developed by{" "}
            <a
              href="https://webzoid.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website developed by Webzoid"
              className="font-semibold text-slate-700 transition-colors duration-200 hover:text-[#dc2626]"
            >
              Webzoid
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}