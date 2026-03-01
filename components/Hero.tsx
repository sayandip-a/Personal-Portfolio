"use client";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  cubicBezier,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Code2,
  Brain,
  Layers,
  ChevronDown,
} from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiPytorch,
} from "react-icons/si";
import { useTheme } from "@/components/ThemeProvider";

/* ── Data ─────────────────────────────────────────────────────── */
const ROLES = [
  "Full-Stack Web Developer",
  "Tech Enthusiast",
  "Open Source Contributor",
  "Lifelong Learner",
  "Problem Solver",
  "Team Player",
];
const STATS = [
  { value: "7+", label: "Projects Built" },
  { value: "5+", label: "Technologies" },
  { value: "∞", label: "Curiosity" },
];

const SERVICES = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    desc: "End-to-end web apps with clean APIs, secure auth, and scalable architecture.",
  },
  {
    icon: Brain,
    title: "AI / ML Engineering",
    desc: "Data-driven systems — from feature engineering to model deployment.",
  },
  {
    icon: Layers,
    title: "Modern Frontend",
    desc: "Fast, accessible UIs with React, Next.js, and pixel-perfect Tailwind.",
  },
];

const TECH = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Python", icon: SiPython },
  { name: "PyTorch", icon: SiPytorch },
];

const SOCIALS = [
  { icon: Github, label: "GitHub", href: "https://github.com/sayandip-a" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/sayandippaul",
  },
  { icon: Mail, label: "Email", href: "mailto:sayandip.web@gmail.com" },
];

/* ── Variants ─────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: cubicBezier(0.4, 0, 0.2, 1),
    },
  }),
};

/* ── Typewriter ───────────────────────────────────────────────── */
function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const t = setTimeout(
      () => {
        if (!deleting) {
          setDisplay(current.slice(0, charIdx + 1));
          if (charIdx + 1 === current.length)
            setTimeout(() => setDeleting(true), pause);
          else setCharIdx((c) => c + 1);
        } else {
          setDisplay(current.slice(0, charIdx - 1));
          if (charIdx - 1 === 0) {
            setDeleting(false);
            setWordIdx((w) => (w + 1) % words.length);
            setCharIdx(0);
          } else setCharIdx((c) => c - 1);
        }
      },
      deleting ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

/* ── Page ─────────────────────────────────────────────────────── */
export default function HeroPage() {
  const { dark } = useTheme();
  const D = dark;

  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const servicesRef = useRef(null);
  const techRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });
  const servicesInView = useInView(servicesRef, {
    once: true,
    margin: "-60px",
  });

  const { scrollYProgress } = useScroll({ target: containerRef });
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -60]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  const role = useTypewriter(ROLES);

  /* ── Theme tokens ── */
  const bg = D ? "bg-[#080808]" : "bg-[#f5f5f5]";
  const text = D ? "text-white" : "text-black";
  const muted = D ? "text-neutral-400" : "text-neutral-500";
  const faint = D ? "text-neutral-500" : "text-neutral-400";
  const dim = D ? "text-neutral-600" : "text-neutral-400";
  const border = D ? "border-white/[0.08]" : "border-black/[0.08]";
  const cardBg = D ? "bg-white/[0.03]" : "bg-black/[0.03]";
  const divide = D ? "divide-white/[0.07]" : "divide-black/[0.07]";
  const divLine = D ? "bg-white/[0.07]" : "bg-black/[0.07]";
  const strip = D ? "border-white/[0.06]" : "border-black/[0.06]";
  const fadeFrom = D ? "from-[#080808]" : "from-[#f5f5f5]";
  const badgeBg = D ? "bg-[#0f0f0f]" : "bg-white";
  const badgeBdr = D ? "border-white/10" : "border-black/10";
  const badgeTxt = D ? "text-white" : "text-black";
  const pill = D
    ? "border-white/10 bg-white/5 text-neutral-300"
    : "border-black/10 bg-black/5 text-neutral-600";
  const ctaSolid = D
    ? "bg-white text-black hover:bg-neutral-100"
    : "bg-black text-white hover:bg-neutral-800";
  const ctaGhost = D
    ? "border-white/10 bg-white/5 text-neutral-300 hover:border-white/20 hover:text-white"
    : "border-black/10 bg-black/5 text-neutral-600 hover:border-black/20 hover:text-black";
  const glowA = D ? "bg-white/[0.025]" : "bg-black/[0.04]";
  const glowB = D ? "bg-white/[0.018]" : "bg-black/[0.03]";
  const gridClr = D ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.15)";

  /* profile image ring */
  const imgBorder = D ? "border-white/20" : "border-black/20";
  const imgRing = D ? "ring-white/[0.06]" : "ring-black/[0.06]";

  return (
    <main
      ref={containerRef}
      className={`relative ${bg} ${text} overflow-x-hidden transition-colors duration-500`}
    >
      {/* ── Background ── */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div
          className={`absolute -top-48 -right-48 h-[700px] w-[700px] rounded-full ${glowA} blur-[140px] transition-colors duration-500`}
        />
        <div
          className={`absolute top-1/2 -left-32 h-[500px] w-[500px] rounded-full ${glowB} blur-[120px] transition-colors duration-500`}
        />
        <div
          className={`absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full ${glowB} blur-[100px] transition-colors duration-500`}
        />
        <div
          className="absolute inset-0 opacity-[0.028]"
          style={{
            backgroundImage: `linear-gradient(${gridClr} 1px,transparent 1px),linear-gradient(90deg,${gridClr} 1px,transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ══════════ HERO ══════════ */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center px-4 pt-24 pb-16">
        <motion.div
          ref={heroRef}
          style={{ y: heroY, opacity: heroOpacity }}
          className="max-w-6xl mx-auto w-full"
        >
          {/* ── tighter grid, smaller right column ── */}
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-center">
            {/* LEFT */}
            <div>
              <motion.div
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                className={`mb-7 inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-sm transition-colors duration-500 ${pill}`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for opportunities
              </motion.div>

              <motion.p
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                className={`mb-2 text-xs font-semibold uppercase tracking-[0.3em] ${faint}`}
              >
                Hello, I'm
              </motion.p>

              <motion.h1
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight mb-5"
              >
                Sayandip
                <br />
                <span className={faint}>Paul.</span>
              </motion.h1>

              {/* Typewriter */}
              <motion.div
                custom={3}
                variants={fadeUp}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                className="mb-7 h-8 flex items-center"
              >
                <span className={`text-lg sm:text-xl font-mono ${muted}`}>
                  &lt;{role}
                  <span
                    className={`ml-0.5 inline-block w-[2px] h-5 align-middle animate-pulse ${D ? "bg-white" : "bg-black"}`}
                  />
                  &nbsp;/&gt;
                </span>
              </motion.div>

              <motion.p
                custom={4}
                variants={fadeUp}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                className={`${muted} text-base sm:text-lg leading-relaxed max-w-lg mb-9`}
              >
                Computer Science and Engineering student building intelligent,
                production-ready software. I care deeply about clean code,
                real-world performance, and user-centric design.
              </motion.p>

              {/* CTAs */}
              <motion.div
                custom={5}
                variants={fadeUp}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                className="flex flex-wrap gap-3 mb-10"
              >
                <Link
                  href="/projects"
                  className={`group inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-colors duration-200 ${ctaSolid}`}
                >
                  View Work
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
                <a
                  href="/resume2.pdf"
                  download
                  className={`inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-sm font-medium transition-colors duration-200 ${ctaGhost}`}
                >
                  <Download size={14} /> Resume
                </a>
              </motion.div>

              {/* Socials */}
              <motion.div
                custom={6}
                variants={fadeUp}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                className="flex items-center gap-5"
              >
                {SOCIALS.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className={`flex items-center gap-1.5 text-sm transition-colors ${dim}`}
                    aria-label={s.label}
                  >
                    <s.icon size={16} />
                    <span className="hidden sm:inline">{s.label}</span>
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — profile card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 24 }}
              animate={heroInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Card glow */}
                <div
                  className={`absolute inset-0 rounded-3xl ${D ? "bg-white/[0.04]" : "bg-black/[0.04]"} blur-2xl scale-110`}
                />

                {/* Card */}
                <div
                  className={`relative rounded-3xl border ${border} ${cardBg} p-6 w-[260px] sm:w-[280px] backdrop-blur-xl transition-colors duration-500`}
                >
                  {/* ── Circular profile image (bigger + round) ── */}
                  <div
                    className={`relative mx-auto mb-5 h-36 w-36 rounded-full overflow-hidden border-2 ${imgBorder} ring-4 ${imgRing} shadow-xl`}
                  >
                    <Image
                      src="/profile.jpeg"
                      alt="Sayandip Paul"
                      fill
                      priority
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Name & role */}
                  <div className="text-center mb-5">
                    <p className={`font-semibold text-lg ${text}`}>
                      Sayandip Paul
                    </p>
                    <p className={`text-xs mt-0.5 ${dim}`}>
                      CSE Student · India
                    </p>
                  </div>

                  {/* Stats row */}
                  <div
                    className={`grid grid-cols-3 ${divide} rounded-xl border ${border} ${cardBg} py-3 mb-5`}
                  >
                    {[
                      { v: "7+", l: "Projects" },
                      { v: "5+", l: "Techs" },
                      { v: "∞", l: "Curiosity" },
                    ].map((s) => (
                      <div
                        key={s.l}
                        className="flex flex-col items-center gap-0.5"
                      >
                        <span className={`text-sm font-semibold ${text}`}>
                          {s.v}
                        </span>
                        <span className={`text-[10px] ${dim}`}>{s.l}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {["Next.js", "Python", "React", "ML"].map((t) => (
                      <span
                        key={t}
                        className={`rounded-full border ${border} ${cardBg} px-2.5 py-0.5 text-[11px] ${muted}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute -top-4 -right-4 rounded-xl border ${badgeBdr} ${badgeBg} ${badgeTxt} px-3 py-2 text-xs font-medium shadow-xl transition-colors duration-500`}
                >
                  🧠 Full-Stack Web Developer
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8,
                  }}
                  className={`absolute -bottom-4 -left-4 rounded-xl border ${badgeBdr} ${badgeBg} ${badgeTxt} px-3 py-2 text-xs font-medium shadow-xl transition-colors duration-500`}
                >
                  ⚡ AI Enthusiast
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        >
          <span className={`text-[10px] uppercase tracking-[0.25em] ${dim}`}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={14} className={dim} />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════ STATS ══════════ */}
      <section
        ref={statsRef}
        className={`relative z-10 border-y ${strip} py-12 px-4 transition-colors duration-500`}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center sm:items-start gap-1"
            >
              <span className={`text-4xl sm:text-5xl font-semibold ${text}`}>
                {s.value}
              </span>
              <span className={`text-xs uppercase tracking-widest ${dim}`}>
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════ SERVICES ══════════ */}
      <section ref={servicesRef} className="relative z-10 px-4 py-28">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            className={`mb-4 text-xs font-semibold uppercase tracking-[0.25em] ${faint}`}
          >
            What I do
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight mb-14"
          >
            Building end-to-end
            <br />
            <span className={faint}>digital products.</span>
          </motion.h2>

          <div className="grid sm:grid-cols-3 gap-4">
            {SERVICES.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 24 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -5 }}
                className={`group relative rounded-2xl border ${border} ${cardBg} p-8 overflow-hidden transition-colors duration-300`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    D
                      ? "bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.05)_0%,transparent_65%)]"
                      : "bg-[radial-gradient(ellipse_at_top_left,rgba(0,0,0,0.04)_0%,transparent_65%)]"
                  }`}
                />
                <svc.icon
                  size={22}
                  className={`mb-5 ${muted} transition-colors duration-300`}
                />
                <h3 className={`text-base font-semibold mb-2 ${text}`}>
                  {svc.title}
                </h3>
                <p className={`text-sm leading-relaxed ${muted}`}>{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ MARQUEE ══════════ */}
      <section ref={techRef} className="relative z-10 pb-28 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <span
              className={`text-xs font-semibold uppercase tracking-[0.2em] ${dim}`}
            >
              Tech Stack
            </span>
            <div className={`flex-1 h-px ${divLine}`} />
          </div>
          <div className="relative overflow-hidden">
            <div
              className={`pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r ${fadeFrom} to-transparent`}
            />
            <div
              className={`pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l ${fadeFrom} to-transparent`}
            />
            <motion.div
              className="flex gap-4 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            >
              {[...TECH, ...TECH].map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-3 rounded-2xl border ${border} ${cardBg} px-6 py-4 text-sm font-medium ${muted} whitespace-nowrap transition-colors duration-500`}
                  >
                    <Icon size={16} className={faint} />
                    {tech.name}
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════ CTA BANNER ══════════ */}
      <section className="relative z-10 px-4 pb-28">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`relative rounded-2xl border ${border} ${cardBg} p-10 sm:p-14 text-center transition-colors duration-500`}
          >
            <p
              className={`mb-4 text-xs font-semibold uppercase tracking-[0.25em] ${faint}`}
            >
              Let's collaborate
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-5">
              Got a project in mind?
            </h2>
            <p className={`${muted} mb-9 max-w-md mx-auto`}>
              I'm always open to interesting work, freelance projects, or just a
              good conversation about tech.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className={`group/btn inline-flex items-center gap-2 rounded-xl px-7 py-3 text-sm font-medium transition-colors duration-200 ${ctaSolid}`}
              >
                Start a conversation
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                />
              </Link>
              <Link
                href="/projects"
                className={`inline-flex items-center gap-2 rounded-xl border px-7 py-3 text-sm font-medium transition-colors duration-200 ${ctaGhost}`}
              >
                Browse Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
