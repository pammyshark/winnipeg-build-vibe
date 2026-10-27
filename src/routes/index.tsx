import { createFileRoute } from "@tanstack/react-router";
import { type ReactNode } from "react";
import logo from "@/assets/BuildVibe_logo.png.asset.json";
import logoTag from "@/assets/BuildVibe_logotagline.png.asset.json";
import pam from "@/assets/Pam_photo_square.jpg.asset.json";

const LINKEDIN = "https://www.linkedin.com/in/pamela-mollinedo/";
const RSVP_URL = "https://www.eventbrite.ca/e/buildvibe-build-with-ai-tickets-2003979131528";
const VOLUNTEER_URL = "https://forms.gle/nkiTEBzkkxbBSXwQA";
const EVENTBRITE_ORG = "https://www.eventbrite.ca/o/121909793499";
const ext = { href: RSVP_URL, target: "_blank", rel: "noreferrer" } as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BuildVibe — Build something real with AI in Winnipeg" },
      { name: "description", content: "Free hands-on AI building workshop at the University of Winnipeg, Tue Nov 17, 6:00–8:30 pm. Limited spots, RSVP required." },
      { property: "og:title", content: "BuildVibe — Build something real with AI" },
      { property: "og:description", content: "Free hands-on AI building workshops in Winnipeg. No coding experience needed." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* A wavy "sticker" outline: a square whose edges ripple, drawn once at load. */
function wavyPath(size = 400, inset = 18, waves = 5, amp = 12) {
  const a = inset, b = size - inset, len = b - a, step = len / waves;
  let d = `M ${a} ${a}`;
  const edge = (fx: (t: number) => [number, number], nx: number, ny: number) => {
    for (let i = 0; i < waves; i++) {
      const [cx, cy] = fx((i + 0.5) * step);
      const [ex, ey] = fx((i + 1) * step);
      d += ` Q ${cx + nx * amp} ${cy + ny * amp} ${ex} ${ey}`;
    }
  };
  edge((t) => [a + t, a], 0, -1);
  edge((t) => [b, a + t], 1, 0);
  edge((t) => [b - t, b], 0, 1);
  edge((t) => [a, b - t], -1, 0);
  return d + " Z";
}
const WAVY = wavyPath();

function Sticker({ children, fill = "var(--brand)", tilt = "4deg", className = "" }: { children: ReactNode; fill?: string; tilt?: string; className?: string }) {
  return (
    <div className={`float relative aspect-square ${className}`} style={{ ["--tilt" as string]: tilt }}>
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full drop-shadow-[0_24px_40px_rgba(0,0,0,.45)]" aria-hidden="true">
        <path d={WAVY} fill={fill} />
      </svg>
      <div className="relative flex h-full w-full flex-col items-center justify-center p-[14%] text-center">{children}</div>
    </div>
  );
}

/* Photo cut into the same wavy shape, inside a very thick yellow wavy frame. */
const WAVY_INNER = wavyPath(400, 84, 5, 9);
function PhotoFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="float relative aspect-square" style={{ ["--tilt" as string]: "-4deg" }}>
      <svg viewBox="0 0 400 400" className="h-full w-full drop-shadow-[0_24px_40px_rgba(0,0,0,.45)]" role="img" aria-label={alt}>
        <defs>
          <clipPath id="photo-wave">
            <path d={WAVY_INNER} />
          </clipPath>
        </defs>
        <path d={WAVY} fill="var(--brand)" />
        <image href={src} x="66" y="66" width="268" height="268" preserveAspectRatio="xMidYMid slice" clipPath="url(#photo-wave)" />
        <path d={WAVY_INNER} fill="none" stroke="#000" strokeOpacity=".18" strokeWidth="3" />
      </svg>
    </div>
  );
}

function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`inline-block h-[0.8em] w-[0.8em] ${className}`} aria-hidden="true">
      <path d="M12 0c.6 6.6 4.8 10.8 12 12-7.2 1.2-11.4 5.4-12 12-.6-6.6-4.8-10.8-12-12C7.2 10.8 11.4 6.6 12 0Z" fill="currentColor" />
    </svg>
  );
}

function Ribbon({ items, tone, tilt }: { items: string[]; tone: "yellow" | "white"; tilt: string }) {
  const colors = tone === "yellow" ? "bg-brand text-black" : "bg-white text-[#1d1a6b]";
  const run = (
    <span>
      {items.map((t) => (
        <span key={t} className="inline-flex items-center gap-10">
          {t} <Star />
        </span>
      ))}
    </span>
  );
  return (
    <div className={`ribbon ${colors}`} style={{ transform: `rotate(${tilt})` }} aria-hidden="true">
      <div className="ribbon-track">
        {run}
        {run}
        {run}
        {run}
      </div>
    </div>
  );
}

function Label({ children }: { children: string }) {
  return (
    <p className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-brand">
      <Star /> {children}
    </p>
  );
}

const FAQ: [string, string][] = [
  ["Do I need to know how to code?", "No! You'll build using AI tools. If you can describe your idea, you can build it."],
  ["What do I need to bring?", "A charged laptop. Tablets and phones won't work well for building."],
  ["Is it really free?", "Yes, completely free, including Lovable credits to build with."],
  ["What if I can't make it?", "Please cancel your ticket so someone on the waitlist can take your spot."],
  ["Where exactly is it?", "At the University of Winnipeg. The exact room will be emailed to registered attendees."],
];

const TOP = ["BuildVibe", "Build with AI", "Tue Nov 17", "University of Winnipeg", "Free", "No coding needed"];
const BOTTOM = ["Nov 17 · 6:00–8:30 pm", "Limited spots · RSVP", "Portfolios", "Business websites", "Show & Tell", "Lovable credits for everyone"];

function Index() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <img src={logo.url} alt="BuildVibe" className="h-9 w-auto md:h-11" />
        <a {...ext} className="btn-brand">RSVP</a>
      </header>

      {/* HERO */}
      <section className="relative pb-10 pt-4">
        <Ribbon items={TOP} tone="white" tilt="-2.5deg" />

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[auto_1fr_auto] md:py-24">
          <nav aria-label="Sections" className="hidden md:block">
            <ul className="flex flex-col gap-10 text-xs font-bold uppercase tracking-[0.25em]">
              {[["#event", "Event"], ["#faq", "FAQ"], ["#organizer", "Organizer"]].map(([href, label]) => (
                <li key={href} className="[writing-mode:vertical-rl] rotate-180">
                  <a href={href} className="opacity-70 transition hover:text-brand hover:opacity-100">{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h1 className="font-display text-[clamp(3.2rem,10vw,7.5rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.04em]">
              Build
              <br />
              something
              <br />
              <span className="text-brand">real</span>
              <Star className="ml-2 align-top text-brand" />
              <span className="mt-3 block text-[0.42em] normal-case tracking-[-0.02em] opacity-90">with AI, in Winnipeg.</span>
            </h1>
            <p className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-base font-medium md:text-lg">
              <span className="flex items-center gap-2">Learn <span className="h-3 w-3 rounded-full bg-brand" /></span>
              <span className="flex items-center gap-2">Build <span className="h-3 w-3 rounded-full bg-white" /></span>
              <span className="flex items-center gap-2">Show it off <span className="h-3 w-3 rounded-full bg-[#7b78ff]" /></span>
            </p>
            <p className="mt-4 max-w-md text-lg opacity-80">Free hands-on workshop. No coding experience needed. Limited spots, RSVP to save yours.</p>
            <a {...ext} className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-black transition hover:-translate-y-0.5 hover:bg-brand">
              RSVP for Nov 17 <span aria-hidden="true">→</span>
            </a>
          </div>

          <Sticker className="mx-auto w-64 md:w-80" tilt="5deg">
            <p className="font-display text-3xl font-extrabold leading-none text-black md:text-4xl">Event</p>
            <span className="my-3 rounded-xl bg-black px-4 py-1.5 font-display text-4xl font-extrabold text-brand md:text-5xl">#1</span>
            <p className="font-display text-xl font-extrabold leading-tight text-black md:text-2xl">Tue · Nov 17</p>
            <p className="mt-1 text-sm font-bold uppercase tracking-widest text-black/70">6:00–8:30 pm · UWinnipeg</p>
          </Sticker>
        </div>

        <Ribbon items={BOTTOM} tone="yellow" tilt="2deg" />
      </section>

      <main className="mx-auto max-w-6xl px-6">
        {/* WHAT IS */}
        <section className="py-20 md:py-28">
          <Label>What is BuildVibe</Label>
          <p className="max-w-4xl font-display text-3xl font-bold leading-[1.1] tracking-tight md:text-5xl">
            A community for students, professionals, newcomers and aspiring founders who want to turn ideas into{" "}
            <span className="rounded-lg bg-brand px-2 text-black">real, working products</span> using AI. We learn by building, together.
          </p>
        </section>

        {/* FIRST EVENT */}
        <section id="event" className="scroll-mt-8 py-16 md:py-24">
          <Label>First event</Label>
          <div className="card-pop relative grid gap-10 p-8 md:grid-cols-[1fr_1.4fr] md:items-center md:p-14">
            <span className="absolute -top-4 right-6 rotate-3 rounded-full bg-brand px-4 py-1.5 text-sm font-extrabold uppercase tracking-wider text-black md:right-10">
              Limited spots · RSVP
            </span>
            <img src={logoTag.url} alt="BuildVibe — Build with AI" className="w-full max-w-sm" />
            <div>
              <h2 className="font-display text-4xl font-extrabold leading-none tracking-tight md:text-6xl">BuildVibe: Build with AI</h2>
              <p className="mt-6 text-lg opacity-85">
                A hands-on workshop where you'll build your own portfolio, or a website for the business you're dreaming of, using AI. We'll finish with a Show &amp; Tell where everyone demos what they built.
              </p>
              <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                {[["Date", "Tuesday, November 17"], ["Time", "6:00–8:30 pm"], ["Venue", "University of Winnipeg (room TBA)"], ["Cost", "Free · Lovable credits for everyone"]].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-xs font-bold uppercase tracking-widest text-brand">{k}</dt>
                    <dd className="mt-1 font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 flex flex-wrap gap-2">
                {["In person", "Beginner-friendly", "18+", "Free"].map((t) => <span key={t} className="pill">{t}</span>)}
              </div>
              <p className="mt-6 rounded-xl border border-brand/50 bg-brand/10 px-4 py-3 text-sm font-medium">
                <span className="font-bold text-brand">Limited capacity.</span> Spots are first come, first served, so please RSVP before the event to save yours.
              </p>
              <a {...ext} className="btn-brand mt-6 px-8 py-4">RSVP on Eventbrite <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>

        {/* WALK AWAY */}
        <section className="py-16 md:py-24">
          <h2 className="section-title mb-12">
            What you'll <span className="text-brand">walk away</span> with
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {["A live project you built yourself", "How to prompt AI to build for you", "A community of people who build"].map((t, i) => (
              <div key={t} className="card-pop p-8" style={{ rotate: `${[-1, 0.8, -0.6][i]}deg` }}>
                <span className="outline-num text-7xl">0{i + 1}</span>
                <p className="mt-8 font-display text-2xl font-bold leading-tight">{t}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <div className="my-10">
        <Ribbon items={["Build an AI Agent", "SME Build Night", "Builder Networking", "More cities soon"]} tone="white" tilt="-1.5deg" />
      </div>

      <main className="mx-auto max-w-6xl px-6">
        {/* UPCOMING */}
        <section id="upcoming" className="scroll-mt-8 py-16 md:py-24">
          <h2 className="section-title mb-12">
            Up<span className="text-brand">coming</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Build an AI Agent", "Make an assistant that actually does things for you."],
              ["SME Build Night", "For small and medium businesses ready to build their own tools."],
              ["Builder Networking Session", "Meet the people building in Winnipeg."],
            ].map(([t, d]) => (
              <div key={t} className="group rounded-3xl border-2 border-dashed border-white/25 p-7 transition hover:border-brand">
                <span className="inline-block -rotate-2 rounded-full bg-white px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-black">Coming soon</span>
                <p className="mt-5 font-display text-2xl font-extrabold leading-tight group-hover:text-brand">{t}</p>
                <p className="mt-2 opacity-75">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-8 py-16 md:py-24">
          <h2 className="section-title mb-12">
            F<span className="text-brand">A</span>Q
          </h2>
          <div className="flex max-w-3xl flex-col gap-4">
            {FAQ.map(([q, a]) => (
              <details key={q} className="group rounded-2xl border-2 border-white/15 bg-white/[0.04] px-6 py-5 transition open:border-brand">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl font-bold [&::-webkit-details-marker]:hidden">
                  {q}
                  <span aria-hidden="true" className="text-3xl leading-none text-brand transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-lg opacity-85">{a}</p>
              </details>
            ))}
          </div>
          <a {...ext} className="btn-brand mt-10 px-8 py-4">Save your spot <span aria-hidden="true">→</span></a>
        </section>

        {/* ORGANIZER */}
        <section id="organizer" className="scroll-mt-8 py-16 md:py-24">
          <Label>Organizer</Label>
          <div className="flex flex-col gap-12 md:flex-row md:items-center">
            <div className="relative mx-auto w-60 shrink-0 md:mx-0 md:w-72">
              <PhotoFrame src={pam.url} alt="Pamela Mollinedo" />
            </div>
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">Pamela Mollinedo</h2>
              <p className="mt-5 text-lg opacity-85">
                MiM TIO graduate student at the University of Winnipeg, AI Product Builder, former SaaS CMO, instructor. I've taught hands-on Python and SQL to learners of all levels, and I'm part of Lovable's SheBuilds community. BuildVibe is my way of helping more people build with AI.
              </p>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="btn-ghost-light mt-7">Connect on LinkedIn <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>

        {/* VOLUNTEER */}
        <section id="volunteer" className="scroll-mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 pb-12">
          <p className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">Wanna become a volunteer?</p>
          <a href={VOLUNTEER_URL} target="_blank" rel="noreferrer" className="btn-ghost-light text-sm">
            Sign up to volunteer <span aria-hidden="true">→</span>
          </a>
        </section>
      </main>

      <footer className="mt-16 border-t border-white/15">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <img src={logo.url} alt="BuildVibe" className="h-8 w-auto self-start" />
            <p className="text-sm opacity-70">Workshops, build nights &amp; builder meetups · Coming to more cities soon</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-bold">
              <a href={EVENTBRITE_ORG} target="_blank" rel="noreferrer" className="rounded-full border border-brand px-4 py-2 text-brand transition hover:bg-brand hover:text-black">
                Follow us on Eventbrite
              </a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="text-brand hover:underline">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
