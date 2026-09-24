import {
  Globe2,
  Mail,
  MessageCircleMore,
  UserRound,
  UsersRound,
} from "lucide-react";
import networkingImage from "../assets/networking-communication-hero.png";

const contactNodes = [
  { className: "networking-contact-node-a", icon: UserRound },
  { className: "networking-contact-node-b", icon: UsersRound },
  { className: "networking-contact-node-c", icon: Globe2 },
  { className: "networking-contact-node-d", icon: UserRound },
];

const messageCards = [
  {
    className: "networking-message-card-a",
    icon: MessageCircleMore,
    label: "Connected",
  },
  {
    className: "networking-message-card-b",
    icon: Mail,
    label: "Delivered",
  },
];

export default function NetworkingHeroVisual() {
  return (
    <div
      className="networking-hero-visual relative mx-auto aspect-[4/5] w-full max-w-[520px]"
      role="img"
      aria-label="Connected communication network with animated contact and message cards"
    >
      <div className="networking-device-float absolute inset-0">
        <img
          src={networkingImage}
          alt="Smartphone connecting business conversations across a network"
          className="h-full w-full object-contain"
          loading="eager"
          decoding="async"
        />
      </div>

      {contactNodes.map(({ className, icon: Icon }, index) => (
        <div
          key={className}
          className={`networking-contact-node ${className}`}
          aria-hidden="true"
        >
          <span className="networking-contact-avatar">
            <Icon className="h-[48%] w-[48%]" strokeWidth={1.9} />
          </span>
          <span className="networking-contact-status" />
          <span className="sr-only">Contact {index + 1}</span>
        </div>
      ))}

      {messageCards.map(({ className, icon: Icon, label }) => (
        <div
          key={className}
          className={`networking-message-card ${className}`}
          aria-hidden="true"
        >
          <span className="networking-message-icon">
            <Icon className="h-5 w-5" strokeWidth={2.1} />
          </span>
          <span>
            <b>{label}</b>
            <i />
          </span>
        </div>
      ))}
    </div>
  );
}
