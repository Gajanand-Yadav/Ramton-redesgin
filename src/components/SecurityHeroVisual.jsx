import {
  Image,
  KeyRound,
  Mail,
  MessageCircleMore,
  Mic,
  Play,
} from "lucide-react";
import securityImage from "../assets/security-lock-hero.png";

const securitySignals = [
  { className: "security-signal-play", icon: Play },
  { className: "security-signal-image", icon: Image },
  { className: "security-signal-mail", icon: Mail },
  { className: "security-signal-chat", icon: MessageCircleMore },
  { className: "security-signal-mic", icon: Mic },
  { className: "security-signal-key", icon: KeyRound },
];

export default function SecurityHeroVisual() {
  return (
    <div
      className="security-hero-visual relative mx-auto aspect-[3/2] w-full max-w-[650px]"
      role="img"
      aria-label="Secure laptop with animated protected communication icons"
    >
      <div className="security-device-float absolute inset-0">
        <img
          src={securityImage}
          alt="Laptop protected by an orange padlock and security shield"
          className="h-full w-full object-contain mix-blend-multiply"
          loading="eager"
          decoding="async"
        />
      </div>

      {securitySignals.map(({ className, icon: Icon }) => (
        <div
          key={className}
          className={`security-floating-signal ${className}`}
          aria-hidden="true"
        >
          <Icon className="h-[46%] w-[46%]" strokeWidth={2} />
        </div>
      ))}
    </div>
  );
}
