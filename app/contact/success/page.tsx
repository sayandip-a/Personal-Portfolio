"use client";

import { motion, cubicBezier } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

/* ── Variants ───────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
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

export default function ContactSuccessPage() {
  const { dark } = useTheme();

  /* ── Theme tokens ── */
  const bg = dark ? "bg-[#080808]" : "bg-[#f5f5f5]";
  const text = dark ? "text-white" : "text-black";
  const muted = dark ? "text-neutral-400" : "text-neutral-500";
  const faint = dark ? "text-neutral-500" : "text-neutral-400";
  const glowA = dark ? "bg-white/[0.03]" : "bg-black/[0.04]";
  const glowB = dark ? "bg-white/[0.02]" : "bg-black/[0.03]";
  const gridClr = dark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.12)";
  const ringBdr = dark ? "border-white/10" : "border-black/10";
  const ringBg = dark ? "bg-white/5" : "bg-black/5";
  const pingBg = dark ? "bg-white/5" : "bg-black/5";
  const checkClr = dark ? "text-white" : "text-black";
  const pillBg = dark
    ? "border-white/10 bg-white/5 text-neutral-400"
    : "border-black/10 bg-black/5 text-neutral-500";
  const ghostBtn = dark
    ? "border-white/10 bg-white/5 text-neutral-300 hover:border-white/20 hover:text-white"
    : "border-black/10 bg-black/5 text-neutral-600 hover:border-black/20 hover:text-black";
  const solidBtn = dark
    ? "bg-white text-black hover:bg-neutral-100"
    : "bg-black text-white hover:bg-neutral-800";

  return (
    <section
      className={`relative min-h-screen ${bg} flex items-center justify-center px-4 overflow-hidden transition-colors duration-500`}
    >
      {/* ── Background ── */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full ${glowA} blur-[120px] transition-colors duration-500`}
        />
        <div
          className={`absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full ${glowB} blur-[100px] transition-colors duration-500`}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(${gridClr} 1px, transparent 1px), linear-gradient(90deg, ${gridClr} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative w-full max-w-lg text-center">
        {/* ── Checkmark ring ── */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] }}
          className={`mx-auto mb-10 flex h-24 w-24 items-center justify-center rounded-full border ${ringBdr} ${ringBg} transition-colors duration-500`}
        >
          <span
            className={`absolute inline-flex h-24 w-24 rounded-full ${pingBg} animate-ping opacity-30`}
          />
          <svg
            className={`h-10 w-10 ${checkClr}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            />
          </svg>
        </motion.div>

        {/* Label */}
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.25em] ${faint}`}
        >
          Message received
        </motion.p>

        {/* Heading */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className={`mb-5 text-5xl sm:text-6xl font-semibold ${text} leading-tight tracking-tight`}
        >
          You're all
          <br />
          <span className={faint}>set.</span>
        </motion.h1>

        {/* Body */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className={`mx-auto mb-10 max-w-sm ${muted} leading-relaxed`}
        >
          Thanks for reaching out. I'll review your message and get back to you
          within 24 hours.
        </motion.p>

        {/* Email hint */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className={`mx-auto mb-10 inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-sm transition-colors duration-500 ${pillBg}`}
        >
          <Mail size={13} />A confirmation has been sent to your inbox
        </motion.div>

        {/* Actions */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/"
            className={`group inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-sm font-medium transition-all duration-200 ${ghostBtn}`}
          >
            <motion.span
              className="inline-block"
              whileHover={{ x: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <ArrowLeft size={15} />
            </motion.span>
            Back to Home
          </Link>

          <Link
            href="/projects"
            className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-all duration-200 ${solidBtn}`}
          >
            View my work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
