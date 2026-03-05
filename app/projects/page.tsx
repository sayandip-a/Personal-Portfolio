"use client";

import { motion, useInView, cubicBezier } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

/* ── Data ───────────────────────────────────────────────────────── */
const featured = {
  title: "AI Resume Builder",
  description:
    "An AI-powered resume builder that generates tailored resumes based on user input, leveraging natural language processing to optimize content for job applications.",
  tech: ["React.js", "Tailwind", "OpenAI API", "MongoDB", "Node.js", "Express"],
  type: "AI / Full-Stack",
  live: "#",
  github: "#",
};

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A modern portfolio built with Next.js, Tailwind CSS, and Framer Motion, focused on clean UI, performance, and smooth user experience.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    type: "Web Development",
    live: "sayandip-portfolio.vercel.app",
    github: "https://github.com/sayandip-paul/sayandip-portfolio",
  },
  {
    title: "Task Management Web App",
    description:
      "A productivity-focused task manager with authentication, CRUD operations, and a responsive, user-friendly interface.",
    tech: ["React", "MongoDB", "Node.js", "Express", "Tailwind", "stripe"],
    type: "Full-Stack",
    live: "#",
    github: "#",
  },
  {
    title: "AI Mock Interviewer",
    description:
      "An AI-powered mock interview platform that simulates real interview scenarios, providing feedback and performance analysis to help users prepare effectively.",
    tech: ["Python", "OpenAI", "React", "Node.js"],
    type: "AI / Web Application",
    live: "#",
    github: "#",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "A real-time messaging application with WebSocket-based communication and a clean, modern UI.",
    tech: ["React", "Socket.io", "Node.js"],
    type: "Web Application",
    live: "#",
    github: "#",
  },
  {
    title: "E-commerce website",
    description:
      "A full-featured e-commerce platform with product listings, cart functionality, and secure checkout.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    type: "Full-Stack",
    live: "#",
    github: "#",
  },
  {
    title: "Zerodha Trading clone",
    description:
      "A stock trading web application inspired by Zerodha, featuring real-time stock data, portfolio management, and a sleek user interface.",
    tech: ["React", "Node.js", "WebSocket"],
    type: "Web Application",
    live: "#",
    github: "#",
  },
  {
    title: "Uber Clone",
    description:
      "A ride-sharing web application inspired by Uber, featuring real-time location tracking, ride booking, and payment processing.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    type: "Web Application",
    live: "#",
    github: "#",
  },
  {
    title: "Zoom Clone",
    description:
      "A video conferencing web application inspired by Zoom, featuring real-time video streaming, screen sharing, and chat functionality.",
    tech: ["React", "Node.js", "WebRTC", "Socket.io"],
    type: "Web Application",
    live: "#",
    github: "#",
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

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: cubicBezier(0.4, 0, 0.2, 1),
    },
  }),
};

/* ── Theme token hook ───────────────────────────────────────────── */
function useTokens(dark: boolean) {
  return {
    bg: dark ? "bg-[#080808]" : "bg-[#f5f5f5]",
    text: dark ? "text-white" : "text-black",
    muted: dark ? "text-neutral-400" : "text-neutral-500",
    faint: dark ? "text-neutral-500" : "text-neutral-400",
    dim: dark ? "text-neutral-600" : "text-neutral-400",
    vdim: dark ? "text-neutral-700" : "text-neutral-400",
    border: dark ? "border-white/[0.08]" : "border-black/[0.08]",
    cardBg: dark ? "bg-white/[0.03]" : "bg-black/[0.03]",
    divLine: dark ? "bg-white/[0.07]" : "bg-black/[0.07]",
    glowA: dark ? "bg-white/[0.025]" : "bg-black/[0.04]",
    glowB: dark ? "bg-white/[0.02]" : "bg-black/[0.03]",
    gridClr: dark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.12)",
    tagPillFeat: dark
      ? "border-white/10 bg-white/5 text-neutral-300"
      : "border-black/10 bg-black/5 text-neutral-600",
    tagPill: dark
      ? "border-white/10 bg-white/5 text-neutral-400"
      : "border-black/10 bg-black/5 text-neutral-500",
    techPillFeat: dark
      ? "border-white/[0.08] bg-white/[0.04] text-neutral-400"
      : "border-black/[0.08] bg-black/[0.04] text-neutral-500",
    techPill: dark
      ? "border-white/[0.07] bg-white/[0.03] text-neutral-500"
      : "border-black/[0.07] bg-black/[0.03] text-neutral-500",
    cardHoverFeat: dark
      ? "hover:border-white/[0.16]"
      : "hover:border-black/[0.16]",
    cardHover: dark
      ? "hover:border-white/[0.16] hover:bg-white/[0.05]"
      : "hover:border-black/[0.16] hover:bg-black/[0.04]",
    hoverGlowFeat: dark
      ? "bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.05)_0%,transparent_60%)]"
      : "bg-[radial-gradient(ellipse_at_top_left,rgba(0,0,0,0.04)_0%,transparent_60%)]",
    hoverGlow: dark
      ? "bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.04)_0%,transparent_65%)]"
      : "bg-[radial-gradient(ellipse_at_top_left,rgba(0,0,0,0.03)_0%,transparent_65%)]",
    ghostNum: dark ? "text-white/[0.04]" : "text-black/[0.04]",
    ctaFeat: dark
      ? "text-white/80 hover:text-white"
      : "text-black/70 hover:text-black",
    ctaGithubFeat: dark
      ? "text-neutral-500 hover:text-white"
      : "text-neutral-400 hover:text-black",
    ctaCard: dark
      ? "text-neutral-400 hover:text-white"
      : "text-neutral-500 hover:text-black",
    ctaGithubCard: dark
      ? "text-neutral-600 hover:text-white"
      : "text-neutral-400 hover:text-black",
  };
}

/* ── Page ───────────────────────────────────────────────────────── */
export default function ProjectsPage() {
  const { dark } = useTheme();
  const t = useTokens(dark);

  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section
      className={`relative min-h-screen ${t.bg} overflow-hidden px-4 pt-28 pb-32 transition-colors duration-500`}
    >
      {/* ── Background ── */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full ${t.glowA} blur-[130px] transition-colors duration-500`}
        />
        <div
          className={`absolute bottom-0 -left-20 h-[400px] w-[400px] rounded-full ${t.glowB} blur-[100px] transition-colors duration-500`}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(${t.gridClr} 1px, transparent 1px), linear-gradient(90deg, ${t.gridClr} 1px, transparent 1px)`,
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
            className={`mb-4 text-xs font-semibold uppercase tracking-[0.25em] ${t.faint}`}
          >
            Selected Work
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className={`text-5xl sm:text-6xl md:text-7xl font-semibold ${t.text} leading-[1.05] tracking-tight mb-6`}
          >
            Projects &<br />
            <span className={t.faint}>case studies.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className={`${t.muted} text-lg leading-relaxed max-w-xl mb-20`}
          >
            A curated set of projects in Artificial Intelligence, Web
            Development, and production-ready software — built to solve real
            problems.
          </motion.p>
        </div>

        {/* ── Featured ── */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <p
            className={`mb-5 text-xs font-semibold uppercase tracking-[0.2em] ${t.dim}`}
          >
            Featured
          </p>

          <motion.article
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className={`group relative rounded-2xl border ${t.border} ${t.cardBg} p-8 sm:p-10 overflow-hidden ${t.cardHoverFeat} transition-colors duration-300`}
          >
            <div
              className={`pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${t.hoverGlowFeat}`}
            />

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
              <div className="flex-1 max-w-2xl">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span
                    className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${t.tagPillFeat}`}
                  >
                    {featured.type}
                  </span>
                </div>

                <h2
                  className={`text-2xl sm:text-3xl font-semibold ${t.text} leading-snug mb-4`}
                >
                  {featured.title}
                </h2>
                <p
                  className={`${t.muted} leading-relaxed text-sm sm:text-base mb-6`}
                >
                  {featured.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-7">
                  {featured.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-full border px-3 py-1 text-xs font-medium ${t.techPillFeat}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-5">
                  <Link
                    href={featured.live}
                    className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors group/link ${t.ctaFeat}`}
                  >
                    Live Demo
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </Link>
                  <Link
                    href={featured.github}
                    className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${t.ctaGithubFeat}`}
                  >
                    <Github size={14} /> GitHub
                  </Link>
                </div>
              </div>

              <span
                className={`self-start text-[80px] font-bold leading-none select-none hidden sm:block ${t.ghostNum}`}
              >
                01
              </span>
            </div>
          </motion.article>
        </motion.div>

        {/* ── Divider ── */}
        <div className="mb-12 flex items-center gap-4">
          <span
            className={`text-xs font-semibold uppercase tracking-[0.2em] ${t.dim}`}
          >
            All Projects
          </span>
          <div className={`flex-1 h-px ${t.divLine}`} />
          <span className={`text-xs ${t.vdim}`}>
            {projects.length} projects
          </span>
        </div>

        {/* ── Grid ── */}
        <div ref={gridRef} className="grid sm:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={gridInView ? "visible" : "hidden"}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className={`group relative flex flex-col rounded-2xl border ${t.border} ${t.cardBg} p-7 overflow-hidden ${t.cardHover} transition-colors duration-300`}
            >
              <div
                className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${t.hoverGlow}`}
              />

              <div className="relative z-10 flex flex-col flex-1">
                <div className="mb-5">
                  <span
                    className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${t.tagPill}`}
                  >
                    {project.type}
                  </span>
                </div>

                <h2
                  className={`text-lg font-semibold ${t.text} leading-snug mb-3`}
                >
                  {project.title}
                </h2>
                <p className={`text-sm ${t.muted} leading-relaxed flex-1 mb-5`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${t.techPill}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-5">
                  <Link
                    href={project.live}
                    className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors group/link ${t.ctaCard}`}
                  >
                    Live Demo
                    <ArrowUpRight
                      size={13}
                      className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </Link>
                  <Link
                    href={project.github}
                    className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${t.ctaGithubCard}`}
                  >
                    <Github size={13} /> GitHub
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
