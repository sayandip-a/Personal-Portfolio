"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
/* ── Data ───────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = [
  { icon: Github, label: "GitHub", href: "https://github.com/sayandip-a" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/sayandippaul",
  },
  { icon: Mail, label: "Email", href: "mailto:sayandippal11234@gmail.com" },
];

/* ── Footer ─────────────────────────────────────────────────────── */
export default function Footer() {
  const { dark } = useTheme();
  const bg = dark ? "bg-[#080808]" : "bg-[#f5f5f5]";
  const text = dark ? "text-white" : "text-black";
  const muted = dark ? "text-neutral-400" : "text-neutral-500";
  const faint = dark ? "text-neutral-500" : "text-neutral-400";
  const glowA = dark ? "bg-white/[0.03]" : "bg-black/[0.04]";
  const glowB = dark ? "bg-white/[0.02]" : "bg-black/[0.03]";
  const gridClr = dark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.12)";
  const border = dark ? "border-white/[0.08]" : "border-black/[0.08]";
  const formBg = dark ? "bg-white/[0.03]" : "bg-black/[0.02]";
  const pillBg = dark
    ? "border-white/10 bg-white/5 text-neutral-300"
    : "border-black/10 bg-black/5 text-neutral-600";
  const socialTxt = dark
    ? "text-neutral-400 hover:text-white"
    : "text-neutral-500 hover:text-black";
  const socialIcon = dark
    ? "border-white/10 bg-white/5 group-hover:border-white/20 group-hover:bg-white/10"
    : "border-black/10 bg-black/5 group-hover:border-black/20 group-hover:bg-black/10";
  const inputBg = dark
    ? "bg-white/5 border-white/10 text-white focus:border-white/30 focus:ring-white/10"
    : "bg-black/5 border-black/10 text-black focus:border-black/30 focus:ring-black/10";
  const labelActive = dark ? "text-neutral-400" : "text-neutral-500";
  const labelIdle = dark ? "text-neutral-500" : "text-neutral-400";
  return (
    <footer className={`relative ${bg} border-t ${border} overflow-hidden`}>
      {/* subtle background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-white/[0.02] blur-[100px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* ── Top: CTA strip ── */}
        <div className="py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-white/[0.06]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600 mb-2">
              Open to work
            </p>
            <p
              className={`text-2xl sm:text-3xl font-semibold ${text} tracking-tight`}
            >
              Let's build something great.
            </p>
          </div>
        </div>

        {/* ── Mid: nav + socials ── */}
        <div className="py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 border-b border-white/[0.06]">
          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-neutral-500 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {SOCIALS.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-neutral-500 hover:border-white/20 hover:text-white transition-colors duration-200"
              >
                <s.icon size={15} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* ── Bottom: copyright ── */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-700">
            © {new Date().getFullYear()}{" "}
            <span className="text-neutral-500 font-medium">Sayandip Paul</span>.
            All rights reserved.
          </p>

          <p className="text-xs text-neutral-700 flex items-center gap-1.5">
            Built with
            <span className="text-red-500/80">♥</span>
            using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
