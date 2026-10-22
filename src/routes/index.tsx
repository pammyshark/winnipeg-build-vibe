import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/BuildVibe_logo.png.asset.json";
import logoTag from "@/assets/BuildVibe_logotagline.png.asset.json";
import pam from "@/assets/Pam_photo_square.jpg.asset.json";

const LINKEDIN = "https://www.linkedin.com/in/pamela-mollinedo/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BuildVibe — Build something real with AI in Winnipeg" },
      { name: "description", content: "Free hands-on AI building workshops in Winnipeg. No coding experience needed." },
      { property: "og:title", content: "BuildVibe — Build something real with AI" },
      { property: "og:description", content: "Free hands-on AI building workshops in Winnipeg. No coding experience needed." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Label({ children }: { children: string }) {
  return <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand">{children}</p>;
}

function Index() {
  const [open, setOpen] = useState(false);
  const show = () => setOpen(true);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);

  return (
    <div className="min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <img src={logo.url} alt="BuildVibe" className="h-9 w-auto md:h-11" />
        <button onClick={show} className="btn-brand">Register</button>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <section className="py-24 md:py-36">
          <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-8xl">
            Build something <span className="text-brand">real</span> with AI.
          </h1>
          <p className="mt-8 max-w-xl text-lg opacity-80 md:text-xl">
            Free hands-on workshops in Winnipeg. No coding experience needed.
          </p>
          <button onClick={show} className="btn-brand mt-10 px-8 py-4 text-lg">Join the first event</button>
        </section>

        <section className="py-16 md:py-24">
          <Label>What is BuildVibe</Label>
          <p className="max-w-4xl font-display text-2xl font-medium leading-snug md:text-4xl">
            BuildVibe is a community for students, professionals, newcomers and aspiring founders who want to turn ideas into <span className="text-brand">real, working products</span> using AI. We learn by building, together.
          </p>
        </section>

        <section className="py-16 md:py-24">
          <Label>First event</Label>
          <div className="glass grid gap-10 p-8 md:grid-cols-[1fr_1.4fr] md:items-center md:p-14">
            <img src={logoTag.url} alt="BuildVibe — Build with AI" className="w-full max-w-sm" />
            <div>
              <h2 className="font-display text-3xl font-bold md:text-5xl">BuildVibe: Build with AI</h2>
              <p className="mt-5 text-lg opacity-80">
                A hands-on workshop where you'll build your own portfolio, or a website for the business you're dreaming of, using AI. We'll finish with a Show &amp; Tell where everyone demos what they built.
              </p>
              <p className="mt-5 font-medium">
                Date: TBA · Venue: TBA, Winnipeg · <span className="text-brand">Free</span> · Lovable credits for every participant
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["In person", "Beginner-friendly", "18+", "Free"].map((t) => <span key={t} className="pill">{t}</span>)}
              </div>
              <button onClick={show} className="btn-brand mt-8">Register</button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <Label>What you'll walk away with</Label>
          <div className="grid gap-5 md:grid-cols-3">
            {["A live project you built yourself", "How to prompt AI to build for you", "A community of people who build"].map((t, i) => (
              <div key={t} className="glass p-8">
                <span className="font-display text-5xl font-bold text-brand">0{i + 1}</span>
                <p className="mt-6 font-display text-2xl font-bold leading-tight">{t}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 md:py-24">
          <Label>Upcoming events</Label>
          <div className="grid gap-5 md:grid-cols-3">
            {["Build an AI Agent", "SME Build Night: for small and medium businesses", "Builder Networking Session"].map((t) => (
              <div key={t} className="glass p-6">
                <span className="pill">Coming soon</span>
                <p className="mt-4 font-display text-xl font-bold">{t}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 md:py-24">
          <Label>Organizer</Label>
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <img src={pam.url} alt="Pamela Mollinedo" className="h-40 w-40 shrink-0 rounded-full border-4 border-brand object-cover md:h-48 md:w-48" />
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-bold md:text-4xl">Pamela Mollinedo</h2>
              <p className="mt-4 text-lg opacity-80">
                MMIT graduate student at the University of Winnipeg, instructor, and builder. I've taught hands-on Python and SQL to learners of all levels, and I'm part of Lovable's SheBuilds community. BuildVibe is my way of helping more people build with AI.
              </p>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="btn-ghost-light mt-6">LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-16 border-t border-border/20">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
          <img src={logo.url} alt="BuildVibe" className="h-8 w-auto self-start" />
          <p className="text-sm opacity-70">BuildVibe@WPG · Workshops, build nights &amp; builder meetups · Coming to more cities soon</p>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="text-sm font-bold text-brand hover:underline">LinkedIn</a>
        </div>
      </footer>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/70 p-6 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div role="dialog" aria-modal="true" className="glass relative w-full max-w-sm bg-background/60 p-8 text-center" onClick={(e) => e.stopPropagation()}>
            <button aria-label="Close" onClick={() => setOpen(false)} className="absolute right-4 top-3 text-2xl opacity-70 hover:opacity-100">×</button>
            <p className="font-display text-2xl font-bold">Registration opens soon!</p>
            <p className="mt-3 opacity-80">Follow along on LinkedIn for updates.</p>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="btn-brand mt-6">Follow on LinkedIn</a>
          </div>
        </div>
      )}
    </div>
  );
}
