import customerLogoSheet from "../assets/valued-customers.png";
import Silk from "../pages/Silk.jsx";

const SHEET_WIDTH = 1586;
const SHEET_HEIGHT = 992;

const customers = [
  { name: "Ministry of Defence", crop: [155, 198, 255, 132] },
  { name: "MeitY", crop: [432, 205, 134, 132] },
  { name: "C-DOT", crop: [584, 199, 130, 136] },
  { name: "Indian Institute of Technology", crop: [741, 196, 138, 138] },
  { name: "Indian Institute of Technology Ropar", crop: [910, 197, 139, 137] },
  { name: "ONGC", crop: [1057, 199, 169, 130] },
  { name: "FICCI", crop: [1235, 203, 128, 124] },
  { name: "HAL", crop: [1385, 204, 143, 126] },
  { name: "Jindal", crop: [158, 360, 181, 121] },
  { name: "Shirke Group", crop: [374, 356, 179, 128] },
  { name: "INDO", crop: [568, 352, 105, 133] },
  { name: "ZEE5", crop: [712, 349, 153, 136] },
];

const customerRing = {
  customers,
  className: "consumer-ring-outer",
};

function CustomerLogo({ customer }) {
  const [x, y, width, height] = customer.crop;

  const clipId = `customer-logo-${customer.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <svg
      viewBox={`${x} ${y} ${width} ${height}`}
      className="consumer-logo-viewport block max-h-full max-w-full overflow-hidden"
      style={{ overflow: "hidden" }}
      role="img"
      aria-label={`${customer.name} logo`}
    >
      <title>{customer.name}</title>

      <defs>
        <clipPath id={clipId}>
          <rect
            x={x}
            y={y}
            width={width}
            height={height}
          />
        </clipPath>
      </defs>

      <image
        href={customerLogoSheet}
        width={SHEET_WIDTH}
        height={SHEET_HEIGHT}
        preserveAspectRatio="xMidYMid meet"
        clipPath={`url(#${clipId})`}
      />
    </svg>
  );
}

function CustomerRing({ ring }) {
  return (
    <div className={`consumer-ring absolute inset-0 ${ring.className}`}>
      {ring.customers.map((customer, index) => {
        const angle = (360 / ring.customers.length) * index;

        return (
          <div
            key={customer.name}
            className="consumer-orbit-item absolute left-1/2 top-1/2"
            style={{
              "--consumer-angle": `${angle}deg`,
              "--consumer-angle-negative": `${-angle}deg`,
            }}
          >
            <div
              className="
                consumer-logo-counter
                flex h-full w-full
                items-center justify-center
                overflow-hidden
                rounded-full
                border border-white/80
                bg-white
                p-3
                shadow-[0_18px_35px_-18px_rgba(57,20,3,.45)]
              "
            >
              <CustomerLogo customer={customer} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function ConsumerEcosystem() {
  return (
    <section
      data-ramton-motion
      aria-labelledby="consumer-ecosystem-title"
      className="
        consumer-ecosystem
        relative overflow-hidden
        bg-[#dc2626]
        px-4 py-10
        text-white
        sm:px-6
        md:py-14
      "
    >
      <style>{`
        @keyframes consumerOrbitClockwise {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes consumerLogoCounterClockwise {
          from {
            transform: rotate(var(--consumer-angle-negative));
          }

          to {
            transform: rotate(
              calc(var(--consumer-angle-negative) - 360deg)
            );
          }
        }

        .consumer-orbit-stage {
          height: 650px;
          width: 650px;
          max-width: 100%;
        }

        .consumer-ring {
          animation-duration: var(--consumer-duration);
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          will-change: transform;
        }

        .consumer-ring-outer {
          --consumer-radius: 275px;
          --consumer-item-size: 76px;
          --consumer-duration: 34s;

          animation-name: consumerOrbitClockwise;
        }

        .consumer-orbit-item {
          height: var(--consumer-item-size);
          width: var(--consumer-item-size);

          transform:
            translate(-50%, -50%)
            rotate(var(--consumer-angle))
            translateY(calc(-1 * var(--consumer-radius)));
        }

        .consumer-logo-counter {
          animation-duration: var(--consumer-duration);
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          will-change: transform;
        }

        .consumer-ring-outer .consumer-logo-counter {
          animation-name: consumerLogoCounterClockwise;
        }

        .consumer-logo-viewport {
          height: 58px;
          width: 62px;
          transform-origin: center;
        }

        /* MOBILE */
        @media (max-width: 639px) {
          .consumer-orbit-stage {
            height: min(96vw, 500px);
            width: min(96vw, 500px);
          }

          .consumer-ring-outer {
            --consumer-radius: min(43vw, 220px);
            --consumer-item-size: 58px;
          }

          .consumer-logo-viewport {
            transform: scale(.72);
          }
        }

        /* TABLET */
        @media (min-width: 640px) and (max-width: 1023px) {
          .consumer-orbit-stage {
            height: 620px;
            width: 620px;
          }

          .consumer-ring-outer {
            --consumer-radius: 275px;
            --consumer-item-size: 70px;
          }

          .consumer-logo-viewport {
            transform: scale(.95);
          }
        }

        /* DESKTOP */
        @media (min-width: 1024px) {
          .consumer-orbit-stage {
            height: 650px;
            width: 650px;
          }

          .consumer-ring-outer {
            --consumer-radius: 275px;
            --consumer-item-size: 76px;
          }

          .consumer-logo-viewport {
            transform: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .consumer-ring,
          .consumer-logo-counter {
            animation: none !important;
          }

          .consumer-logo-counter {
            transform: rotate(var(--consumer-angle-negative));
          }
        }
      `}</style>

      {/* SILK BACKGROUND — SAME AS HOME PARTNER SECTION */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Silk
          speed={3.1}
          scale={0.8}
          color="#b91c1c"
          noiseIntensity={0}
          rotation={0}
        />
      </div>

      {/* ORBIT CONTAINER */}
      <div
        className="
          relative z-10
          mx-auto
          flex
          min-h-[540px]
          max-w-[1320px]
          items-center
          justify-center
          sm:min-h-[620px]
          md:min-h-[700px]
        "
      >
        <div className="consumer-orbit-stage relative max-w-full">

          {/* OUTER CIRCLE */}
          <div
            className="
              pointer-events-none
              absolute left-1/2 top-1/2
              h-[570px] w-[570px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border border-white/15
              sm:h-[640px]
              sm:w-[640px]
            "
          />

          {/* INNER CIRCLE */}
          <div
            className="
              pointer-events-none
              absolute left-1/2 top-1/2
              h-[420px] w-[420px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border border-white/10
              sm:h-[460px]
              sm:w-[460px]
            "
          />

          {/* CUSTOMER LOGOS */}
          <CustomerRing ring={customerRing} />

          {/* CENTER CONTENT */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              z-20
              flex
              w-[270px]
              -translate-x-1/2
              -translate-y-1/2
              flex-col
              items-center
              text-center
              sm:w-[340px]
              md:w-[390px]
            "
          >
            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-white
                sm:text-[11px]
              "
            >
              Our Customer Ecosystem
            </span>

            <h2
              id="consumer-ecosystem-title"
              className="
                mt-5
                text-[30px]
                font-normal
                leading-[1.06]
                tracking-[-0.055em]
                text-white
                sm:text-[42px]
                md:text-[50px]
              "
            >
              Trusted across industries
            </h2>

            <p
              className="
                mt-6
                max-w-[270px]
                text-[12px]
                leading-[1.7]
                text-white/90
                sm:max-w-[330px]
                sm:text-[16px]
                md:max-w-[370px]
              "
            >
              From public institutions to ambitious enterprises, leading teams
              trust Ramton to keep their technology moving forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}