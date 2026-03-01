"use client";

import { motion, useInView, cubicBezier } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";

/* ── Data ───────────────────────────────────────────────────────── */
const CARDS = [
  {
    label: "01",
    title: "Artificial Intelligence & ML",
    description:
      "I work on data-driven systems with a strong emphasis on feature engineering, evaluation, and real-world performance.",
    points: [
      "Machine learning fundamentals",
      "Feature engineering & model evaluation",
      "Python, NumPy, Pandas, scikit-learn",
      "Practical deep learning concepts",
    ],
  },
  {
    label: "02",
    title: "Web Development",
    description:
      "I design and develop clean, scalable web applications that act as the interface between users and intelligent systems.",
    points: [
      "Modern frontend frameworks",
      "Responsive & accessible UI",
      "API & backend integration",
      "Deploying ML into real products",
    ],
  },
];

const SECTIONS = [
  {
    label: "Philosophy",
    title: "Engineering Philosophy",
    body: "I don't chase tools — I chase clarity. I care about system design, trade-offs, and long-term maintainability. My goal is to build software that survives real usage, not just portfolios.",
  },
  {
    label: "Direction",
    title: "Career Direction",
    body: "I aim to work in environments where I can design, build, and improve intelligent, user-centric products — learning from real engineering challenges and contributing meaningful impact.",
  },
];

/* ── Variants ───────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.1,
      ease: cubicBezier(0.4, 0, 0.2, 1),
    },
  }),
};

/* ── Page ───────────────────────────────────────────────────────── */
export default function AboutPage() {
  const { dark } = useTheme();

  const heroRef = useRef(null);
  const cardsRef = useRef(null);
  const sectionsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const cardsInView = useInView(cardsRef, { once: true, margin: "-60px" });
  const sectionsInView = useInView(sectionsRef, {
    once: true,
    margin: "-60px",
  });

  /* ── Theme tokens ── */
  const bg = dark ? "bg-[#080808]" : "bg-[#f5f5f5]";
  const text = dark ? "text-white" : "text-black";
  const muted = dark ? "text-neutral-400" : "text-neutral-500";
  const faint = dark ? "text-neutral-500" : "text-neutral-400";
  const dim = dark ? "text-neutral-600" : "text-neutral-400";
  const border = dark ? "border-white/[0.08]" : "border-black/[0.08]";
  const cardBg = dark ? "bg-white/[0.03]" : "bg-black/[0.03]";
  const divLine = dark ? "bg-white/[0.07]" : "bg-black/[0.07]";
  const secBorder = dark ? "border-white/[0.07]" : "border-black/[0.07]";
  const glowA = dark ? "bg-white/[0.025]" : "bg-black/[0.04]";
  const glowB = dark ? "bg-white/[0.02]" : "bg-black/[0.03]";
  const gridClr = dark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.12)";
  const bioText = dark ? "text-neutral-300" : "text-neutral-600";
  const ctaSolid = dark
    ? "bg-white text-black hover:bg-neutral-100"
    : "bg-black text-white hover:bg-neutral-800";
  const ctaGhost = dark
    ? "border-white/10 bg-white/5 text-neutral-300 hover:border-white/20 hover:text-white"
    : "border-black/10 bg-black/5 text-neutral-600 hover:border-black/20 hover:text-black";
  const cardHover = dark
    ? "hover:border-white/[0.16] hover:bg-white/[0.05]"
    : "hover:border-black/[0.16] hover:bg-black/[0.04]";
  const hoverGlow = dark
    ? "bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.05)_0%,transparent_65%)]"
    : "bg-[radial-gradient(ellipse_at_top_left,rgba(0,0,0,0.04)_0%,transparent_65%)]";
  const pointLine = dark ? "bg-neutral-700" : "bg-neutral-300";

  return (
    <section
      className={`relative min-h-screen ${bg} ${text} overflow-hidden px-4 pt-28 pb-32 transition-colors duration-500`}
    >
      {/* ── Background ── */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full ${glowA} blur-[130px] transition-colors duration-500`}
        />
        <div
          className={`absolute bottom-0 -left-20 h-[400px] w-[400px] rounded-full ${glowB} blur-[100px] transition-colors duration-500`}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(${gridClr} 1px, transparent 1px), linear-gradient(90deg, ${gridClr} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* ── Hero ── */}
        <div ref={heroRef}>
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className={`mb-4 text-xs font-semibold uppercase tracking-[0.25em] ${faint}`}
          >
            About me
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.05] tracking-tight mb-8"
          >
            Building intelligent
            <br />
            <span className={faint}>systems.</span>
          </motion.h1>

          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-[1fr_1fr] gap-10 max-w-5xl mb-10"
          >
            <p className={`text-lg ${bioText} leading-relaxed`}>
              I'm <span className={`font-semibold ${text}`}>Sayandip Paul</span>
              , a Computer Science & Engineering student focused on{" "}
              <span className={`font-medium ${text}`}>
                Artificial Intelligence, Machine Learning,
              </span>{" "}
              and <span className={`font-medium ${text}`}>Web Development</span>
              .
            </p>
            <p className={`text-lg ${muted} leading-relaxed`}>
              I build systems where intelligence meets usability — not just
              demos, but production-ready solutions that survive real usage and
              deliver genuine value.
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="flex flex-wrap items-center gap-4 mb-28"
          >
            <Link
              href="/contact"
              className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-colors duration-200 ${ctaSolid}`}
            >
              Get in touch <ArrowUpRight size={14} />
            </Link>
            <Link
              href="/projects"
              className={`inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-sm font-medium transition-colors duration-200 ${ctaGhost}`}
            >
              View projects
            </Link>
          </motion.div>
        </div>

        {/* ── Focus Areas ── */}
        <div ref={cardsRef}>
          <div className="flex items-center gap-4 mb-10">
            <span
              className={`text-xs font-semibold uppercase tracking-[0.2em] ${dim}`}
            >
              Focus Areas
            </span>
            <div className={`flex-1 h-px ${divLine}`} />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: i * 0.12,
                  ease: [0.4, 0, 0.2, 1],
                }}
                whileHover={{ y: -4 }}
                className={`group relative rounded-2xl border ${border} ${cardBg} p-8 overflow-hidden ${cardHover} transition-colors duration-300`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${hoverGlow}`}
                />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <h2 className={`text-lg font-semibold ${text}`}>
                      {card.title}
                    </h2>
                    <span className={`text-xs font-mono mt-1 ${dim}`}>
                      {card.label}
                    </span>
                  </div>
                  <p className={`text-sm ${muted} leading-relaxed mb-6`}>
                    {card.description}
                  </p>
                  <ul className="space-y-2">
                    {card.points.map((point) => (
                      <li
                        key={point}
                        className={`flex items-center gap-2.5 text-sm ${muted}`}
                      >
                        <span
                          className={`h-px w-3 ${pointLine} flex-shrink-0`}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Philosophy & Career ── */}
        <div ref={sectionsRef} className="mt-28">
          {SECTIONS.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 28 }}
              animate={sectionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: i * 0.15,
                ease: [0.4, 0, 0.2, 1],
              }}
              className={`max-w-4xl transition-colors duration-500 ${
                i !== 0
                  ? `mt-16 pt-16 border-t ${secBorder}`
                  : `pb-16 border-b ${secBorder}`
              }`}
            >
              <p
                className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${dim}`}
              >
                {section.label}
              </p>
              <h2 className={`text-3xl sm:text-4xl font-semibold mb-5 ${text}`}>
                {section.title}
              </h2>
              <p className={`${muted} text-lg leading-relaxed`}>
                {section.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
