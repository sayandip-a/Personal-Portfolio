"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Download, ArrowLeft, FileText } from "lucide-react";

/* ── Page ───────────────────────────────────────────────────────── */
export default function ResumePage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="relative min-h-screen bg-[#080808] overflow-hidden px-4 pt-24 pb-20">
      {/* ── Background ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-white/[0.025] blur-[130px]" />
        <div className="absolute bottom-0 -left-20 h-[400px] w-[400px] rounded-full bg-white/[0.02] blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div ref={ref} className="relative max-w-5xl mx-auto">
        {/* ── Header row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="mb-8 flex items-center justify-between gap-4"
        >
          {/* Back + title */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-neutral-500 hover:border-white/20 hover:text-white transition-colors duration-200"
              aria-label="Back to home"
            >
              <ArrowLeft size={15} />
            </Link>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-600 mb-0.5">
                Document
              </p>
              <h1 className="text-xl font-semibold text-white leading-none flex items-center gap-2">
                <FileText size={16} className="text-neutral-500" />
                Resume
              </h1>
            </div>
          </div>

          {/* Download CTA */}
          <a
            href="/resume3(final).pdf"
            download
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-neutral-100 transition-colors duration-200"
          >
            <Download
              size={14}
              className="transition-transform group-hover:translate-y-0.5"
            />
            Download PDF
          </a>
        </motion.div>

        {/* ── PDF viewer card ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          className="relative rounded-2xl border border-white/[0.08] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.5)]"
        >
          {/* Top bar — mimics browser chrome */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.07] bg-white/[0.03] backdrop-blur">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            </div>
            <span className="text-xs text-neutral-600 font-mono">
              resume3(final).pdf
            </span>
            <div className="w-16" />
          </div>

          {/* PDF embed */}
          <embed
            src="/resume3(final).pdf"
            type="application/pdf"
            className="w-full h-[82vh] bg-white"
          />
        </motion.div>

        {/* ── Bottom hint ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-5 text-center text-xs text-neutral-700"
        >
          Can't see the PDF?{" "}
          <a
            href="/resume3(final).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white underline underline-offset-2 transition-colors"
          >
            Open in new tab
          </a>
        </motion.p>
      </div>
    </section>
  );
}
