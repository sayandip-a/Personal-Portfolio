"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Achievements", href: "/achievements" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

/* ── Theme Toggle ───────────────────────────────────────────────── */
function ThemeToggle() {
  const { dark, toggleTheme } = useTheme();
  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      aria-label="Toggle theme"
      className={`
        relative flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300
        ${
          dark
            ? "border-white/10 bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white"
            : "border-black/10 bg-black/5 text-neutral-500 hover:bg-black/10 hover:text-black"
        }
      `}
    >
      <AnimatePresence mode="wait" initial={false}>
        {dark ? (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.22 }}
          >
            <Sun size={15} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{ duration: 0.22 }}
          >
            <Moon size={15} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

/* ── Hamburger ──────────────────────────────────────────────────── */
function HamburgerIcon({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  const { dark } = useTheme();
  return (
    <button
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      className={`
        relative flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur transition md:hidden
        ${dark ? "border-white/10 bg-white/5 hover:bg-white/10" : "border-black/10 bg-black/5 hover:bg-black/10"}
      `}
    >
      <div className="flex flex-col gap-[5px]">
        <motion.span
          animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.35, ease: cubicBezier(0.4, 0, 0.2, 1) }}
          className={`block h-[1.5px] w-5 origin-center ${dark ? "bg-white" : "bg-black"}`}
        />
        <motion.span
          animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.2 }}
          className={`block h-[1.5px] w-5 origin-center ${dark ? "bg-white" : "bg-black"}`}
        />
        <motion.span
          animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.35, ease: cubicBezier(0.4, 0, 0.2, 1) }}
          className={`block h-[1.5px] w-3 origin-left ${dark ? "bg-white" : "bg-black"}`}
        />
      </div>
    </button>
  );
}

/* ── Stagger variants ───────────────────────────────────────────── */
const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
  exit: {
    transition: { staggerChildren: 0.04, staggerDirection: -1 as const },
  },
};
const itemVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: cubicBezier(0.4, 0, 0.2, 1) },
  },
  exit: { opacity: 0, x: 16, transition: { duration: 0.25 } },
};

/* ── Navbar ─────────────────────────────────────────────────────── */
export default function Navbar() {
  const { dark } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`
        fixed top-0 left-0 z-50 w-full transition-all duration-500
        ${
          scrolled
            ? dark
              ? "bg-black/60 backdrop-blur-xl border-b border-white/[0.06]"
              : "bg-white/80 backdrop-blur-xl border-b border-black/[0.06]"
            : "bg-transparent"
        }
      `}
      >
        <nav className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className={`group flex items-center gap-1 text-base font-semibold ${dark ? "text-white" : "text-black"}`}
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-block"
              >
                Developer
              </motion.span>
              <span
                className={`transition-colors ${dark ? "text-neutral-500 group-hover:text-neutral-300" : "text-neutral-400 group-hover:text-neutral-600"}`}
              >
                .
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-0.5">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-3.5 py-2 text-sm transition-colors group ${dark ? "text-neutral-400 hover:text-white" : "text-neutral-500 hover:text-black"}`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-1 left-3.5 right-3.5 h-px scale-x-0 rounded-full transition-transform duration-300 group-hover:scale-x-100 origin-left ${dark ? "bg-white/40" : "bg-black/40"}`}
                  />
                </Link>
              ))}
            </div>

            {/* Desktop right */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <motion.a
                href="/resume2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className={`
                  rounded-full border px-5 py-2 text-sm font-medium backdrop-blur transition-colors duration-300
                  ${
                    dark
                      ? "border-white/20 bg-white/5 text-white hover:bg-white hover:text-black"
                      : "border-black/20 bg-black/5 text-black hover:bg-black hover:text-white"
                  }
                `}
              >
                Resume ↗
              </motion.a>
            </div>

            {/* Mobile */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <HamburgerIcon open={open} onClick={() => setOpen((p) => !p)} />
            </div>
          </div>
        </nav>
      </header>

      {/* ── Mobile Panel ── */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              className={`fixed inset-0 z-40 backdrop-blur-sm ${dark ? "bg-black/50" : "bg-white/60"}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              key="panel"
              className={`fixed right-0 top-0 z-50 flex h-full w-[80%] max-w-xs flex-col border-l ${dark ? "bg-[#0a0a0a] border-white/[0.07]" : "bg-[#f9f9f9] border-black/[0.07]"}`}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 32,
                mass: 0.9,
              }}
            >
              <div
                className={`flex h-16 items-center justify-between px-6 border-b ${dark ? "border-white/[0.07]" : "border-black/[0.07]"}`}
              >
                <span
                  className={`text-sm font-medium tracking-widest uppercase ${dark ? "text-neutral-400" : "text-neutral-500"}`}
                >
                  Menu
                </span>
                <HamburgerIcon open={open} onClick={() => setOpen(false)} />
              </div>

              <motion.nav
                className="flex flex-col px-6 pt-8 pb-6 gap-1 flex-1"
                variants={listVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {navItems.map((item) => (
                  <motion.div key={item.name} variants={itemVariants}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center py-3 text-xl font-medium transition-colors border-b ${
                        dark
                          ? "border-white/[0.05] text-neutral-300 hover:text-white"
                          : "border-black/[0.05] text-neutral-600 hover:text-black"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div variants={itemVariants} className="mt-auto pt-8">
                  <a
                    href="/resume2.pdf"
                    download
                    onClick={() => setOpen(false)}
                    className={`
                      flex w-full items-center justify-center gap-2 rounded-full border py-3 text-sm font-medium transition-colors duration-300
                      ${
                        dark
                          ? "border-white/20 bg-white/5 text-white hover:bg-white hover:text-black"
                          : "border-black/20 bg-black/5 text-black hover:bg-black hover:text-white"
                      }
                    `}
                  >
                    Download Resume <span className="text-xs">↓</span>
                  </a>
                </motion.div>
              </motion.nav>

              <div
                className={`px-6 pb-8 text-xs ${dark ? "text-neutral-600" : "text-neutral-400"}`}
              >
                © {new Date().getFullYear()} Sayandip Paul
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
