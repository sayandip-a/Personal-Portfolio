"use client";

import { motion, useInView, cubicBezier } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

/* ── Data ───────────────────────────────────────────────────────── */
const featured = {
  title: "How I Approach Machine Learning Projects as a Student",
  description:
    "A practical breakdown of my workflow — from data understanding to model evaluation — using real project experience. Covers feature engineering, cross-validation, and avoiding the most common pitfalls.",
  date: "Feb 2026",
  readTime: "8 min read",
  tag: "AI / ML",
  slug: "https://hashnode.com/edit/cmm85uo8d01352eoi1jw1gb2n",
};

const blogs = [
  {
    title: "Why Next.js Is My Go-To Framework for Modern Web Apps",
    description:
      "My experience building scalable, performant applications with Next.js and why it fits production needs.",
    date: "Jan 2026",
    readTime: "6 min read",
    tag: "Web Development",
    slug: "https://hashnode.com/edit/cmm85uo8d01352eoi1jw1gb2n",
  },
  {
    title: "From College Projects to Production-Level Thinking",
    description:
      "How I transitioned from academic coding to writing clean, maintainable, real-world software.",
    date: "Dec 2025",
    readTime: "5 min read",
    tag: "Engineering",
    slug: "https://hashnode.com/edit/cmm85uo8d01352eoi1jw1gb2n",
  },
  {
    title: "Building REST APIs with Node.js and Express",
    description:
      "A deep dive into structuring scalable APIs — middleware, error handling, and deployment patterns.",
    date: "Nov 2025",
    readTime: "7 min read",
    tag: "Backend",
    slug: "https://hashnode.com/edit/cmm85uo8d01352eoi1jw1gb2n",
  },
  {
    title: "Docker for Developers: A Practical Introduction",
    description:
      "Containers demystified — how I containerize projects and why it changed my deployment workflow.",
    date: "Oct 2025",
    readTime: "6 min read",
    tag: "DevOps",
    slug: "https://hashnode.com/edit/cmm85uo8d01352eoi1jw1gb2n",
  },
];

/* ── Variants ───────────────────────────────────────────────────── */
const ease = cubicBezier(0.4, 0, 0.2, 1);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease },
  }),
};

/* ── Page ───────────────────────────────────────────────────────── */
export default function BlogPage() {
  const { dark } = useTheme();

  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  /* ── Theme tokens ── */
  const bg = dark ? "bg-[#080808]" : "bg-[#f5f5f5]";
  const text = dark ? "text-white" : "text-black";
  const muted = dark ? "text-neutral-400" : "text-neutral-500";
  const faint = dark ? "text-neutral-500" : "text-neutral-400";
  const dim = dark ? "text-neutral-600" : "text-neutral-400";
  const vdim = dark ? "text-neutral-700" : "text-neutral-400";
  const border = dark ? "border-white/[0.08]" : "border-black/[0.08]";
  const cardBg = dark ? "bg-white/[0.03]" : "bg-black/[0.03]";
  const divLine = dark ? "bg-white/[0.07]" : "bg-black/[0.07]";
  const glowA = dark ? "bg-white/[0.025]" : "bg-black/[0.04]";
  const glowB = dark ? "bg-white/[0.02]" : "bg-black/[0.03]";
  const gridClr = dark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.12)";
  const tagPill = dark
    ? "border-white/10 bg-white/5 text-neutral-300"
    : "border-black/10 bg-black/5 text-neutral-600";
  const tagPillSm = dark
    ? "border-white/10 bg-white/5 text-neutral-400"
    : "border-black/10 bg-black/5 text-neutral-500";
  const cardHover = dark
    ? "hover:border-white/[0.16] hover:bg-white/[0.05]"
    : "hover:border-black/[0.16] hover:bg-black/[0.04]";
  const hoverGlowFeat = dark
    ? "bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.05)_0%,transparent_60%)]"
    : "bg-[radial-gradient(ellipse_at_top_left,rgba(0,0,0,0.04)_0%,transparent_60%)]";
  const hoverGlow = dark
    ? "bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.04)_0%,transparent_65%)]"
    : "bg-[radial-gradient(ellipse_at_top_left,rgba(0,0,0,0.03)_0%,transparent_65%)]";
  const ghostNum = dark ? "text-white/[0.04]" : "text-black/[0.04]";
  const ctaFeat = dark
    ? "text-white/70 hover:text-white"
    : "text-black/60 hover:text-black";
  const ctaCard = dark
    ? "text-neutral-500 hover:text-white"
    : "text-neutral-400 hover:text-black";

  return (
    <section
      className={`relative min-h-screen ${bg} overflow-hidden px-4 pt-28 pb-32 transition-colors duration-500`}
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
            Writing & Insights
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className={`text-5xl sm:text-6xl md:text-7xl font-semibold ${text} leading-[1.05] tracking-tight mb-6`}
          >
            Thoughts on
            <br />
            <span className={faint}>code & craft.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className={`${muted} text-lg leading-relaxed max-w-xl mb-20`}
          >
            Writings on AI, full-stack development, and my journey growing from
            a CS student into a real-world software engineer.
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
            className={`mb-5 text-xs font-semibold uppercase tracking-[0.2em] ${dim}`}
          >
            Featured
          </p>

          <motion.article
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className={`group relative rounded-2xl border ${border} ${cardBg} p-8 sm:p-10 overflow-hidden ${cardHover} transition-colors duration-300`}
          >
            <div
              className={`pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${hoverGlowFeat}`}
            />

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
              <div className="flex-1 max-w-2xl">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span
                    className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${tagPill}`}
                  >
                    {featured.tag}
                  </span>
                  <span className={`text-xs ${dim}`}>{featured.date}</span>
                  <span className={`text-xs ${dim}`}>·</span>
                  <span className={`text-xs ${dim}`}>{featured.readTime}</span>
                </div>

                <h2
                  className={`text-2xl sm:text-3xl font-semibold ${text} leading-snug mb-4`}
                >
                  {featured.title}
                </h2>
                <p
                  className={`${muted} leading-relaxed text-sm sm:text-base mb-6`}
                >
                  {featured.description}
                </p>

                <Link
                  href={featured.slug}
                  className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors group/link ${ctaFeat}`}
                >
                  Read Article
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                </Link>
              </div>

              <span
                className={`self-start text-[80px] font-bold leading-none select-none hidden sm:block ${ghostNum}`}
              >
                01
              </span>
            </div>
          </motion.article>
        </motion.div>

        {/* ── Divider ── */}
        <div className="mb-12 flex items-center gap-4">
          <span
            className={`text-xs font-semibold uppercase tracking-[0.2em] ${dim}`}
          >
            All Posts
          </span>
          <div className={`flex-1 h-px ${divLine}`} />
          <span className={`text-xs ${vdim}`}>{blogs.length} articles</span>
        </div>

        {/* ── Grid ── */}
        <div ref={gridRef} className="grid sm:grid-cols-2 gap-4">
          {blogs.map((blog, i) => (
            <motion.article
              key={blog.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={gridInView ? "visible" : "hidden"}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className={`group relative flex flex-col rounded-2xl border ${border} ${cardBg} p-7 overflow-hidden ${cardHover} transition-colors duration-300 cursor-pointer`}
            >
              <div
                className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${hoverGlow}`}
              />

              <div className="relative z-10 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${tagPillSm}`}
                  >
                    {blog.tag}
                  </span>
                  <div className={`flex items-center gap-2 text-xs ${dim}`}>
                    <span>{blog.date}</span>
                    <span>·</span>
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <h2
                  className={`text-lg font-semibold ${text} leading-snug mb-3`}
                >
                  {blog.title}
                </h2>
                <p className={`text-sm ${muted} leading-relaxed flex-1 mb-6`}>
                  {blog.description}
                </p>

                <Link
                  href={blog.slug}
                  className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors group/link ${ctaCard}`}
                >
                  Read Article
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
