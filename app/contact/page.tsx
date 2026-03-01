"use client";

import { motion, useInView, cubicBezier } from "framer-motion";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { Send, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_vfe11gs";
const EMAILJS_TEMPLATE_ID = "template_5gquibb";
const EMAILJS_PUBLIC_KEY = "MDAXkAAEM_Ft0shbO";

/* ── Variants ───────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
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

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: cubicBezier(0.4, 0, 0.2, 1),
    },
  }),
};

/* ── Social Links ───────────────────────────────────────────────── */
const socials = [
  {
    icon: Mail,
    label: "sayandip.web@gmail.com",
    href: "mailto:sayandip.web@gmail.com",
  },
  {
    icon: Github,
    label: "github.com/sayandip-a",
    href: "https://github.com/sayandip-a",
  },
  {
    icon: Linkedin,
    label: "linkedin.com/in/sayandippaul",
    href: "https://linkedin.com/in/sayandippaul",
  },
  { icon: Twitter, label: "@sayandip", href: "https://twitter.com" },
];

/* ── Page ───────────────────────────────────────────────────────── */
export default function ContactPage() {
  const { dark } = useTheme();
  const router = useRouter();
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [focused, setFocused] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  /* ── Submit: copy name+email into from_name/from_email before sending ── */
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError(false);

    const form = formRef.current!;

    // Sync hidden fields so template variables {{from_name}} and {{from_email}} are filled
    (form.elements.namedItem("from_name") as HTMLInputElement).value = (
      form.elements.namedItem("name") as HTMLInputElement
    ).value;
    (form.elements.namedItem("from_email") as HTMLInputElement).value = (
      form.elements.namedItem("email") as HTMLInputElement
    ).value;

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY,
      );
      setSending(false);
      setSent(true);
      setTimeout(() => router.push("/contact/success"), 800);
    } catch (err) {
      console.error("EmailJS error:", err);
      setSending(false);
      setError(true);
    }
  }

  /* ── Theme tokens ── */
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
    <section
      className={`relative min-h-screen ${bg} overflow-hidden px-4 pt-28 pb-24 transition-colors duration-500`}
    >
      {/* ── Background ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
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

      <div ref={ref} className="relative max-w-6xl mx-auto">
        {/* Label */}
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className={`mb-4 text-xs font-semibold uppercase tracking-[0.25em] ${faint}`}
        >
          Get in touch
        </motion.p>

        {/* Heading */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className={`mb-16 text-5xl sm:text-6xl md:text-7xl font-semibold ${text} leading-[1.05] tracking-tight`}
        >
          Let's build
          <br />
          <span className={faint}>something great.</span>
        </motion.h1>

        {/* Two-column */}
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
          {/* LEFT */}
          <div className="space-y-10">
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className={`${muted} text-lg leading-relaxed`}
            >
              Whether it's about opportunities, freelance projects, or just a
              chat about technology — I'm always open. I respond within 24
              hours.
            </motion.p>

            <div className="space-y-4">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={3 + i}
                  variants={slideLeft}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className={`group flex items-center gap-4 transition-colors ${socialTxt}`}
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border transition ${socialIcon}`}
                  >
                    <s.icon size={16} />
                  </span>
                  <span className="text-sm">{s.label}</span>
                </motion.a>
              ))}
            </div>

            <motion.div
              custom={7}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-sm transition-colors duration-500 ${pillBg}`}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for new opportunities
            </motion.div>
          </div>

          {/* RIGHT: Form */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className={`rounded-2xl border ${border} ${formBg} backdrop-blur-xl p-8 sm:p-10 space-y-6 transition-colors duration-500`}
            >
              {/* ── Hidden fields: bridge name/email → from_name/from_email for EmailJS template ── */}
              <input type="hidden" name="from_name" />
              <input type="hidden" name="from_email" />

              {/* Visible fields */}
              <div className="grid sm:grid-cols-2 gap-6">
                <FloatingInput
                  id="name"
                  name="name"
                  label="Your Name"
                  type="text"
                  focused={focused}
                  setFocused={setFocused}
                  inputBg={inputBg}
                  labelActive={labelActive}
                  labelIdle={labelIdle}
                />
                <FloatingInput
                  id="email"
                  name="email"
                  label="Your Email"
                  type="email"
                  focused={focused}
                  setFocused={setFocused}
                  inputBg={inputBg}
                  labelActive={labelActive}
                  labelIdle={labelIdle}
                />
              </div>
              <FloatingInput
                id="subject"
                name="subject"
                label="Subject"
                type="text"
                focused={focused}
                setFocused={setFocused}
                inputBg={inputBg}
                labelActive={labelActive}
                labelIdle={labelIdle}
              />
              <FloatingTextarea
                id="message"
                name="message"
                label="Your Message"
                focused={focused}
                setFocused={setFocused}
                inputBg={inputBg}
                labelActive={labelActive}
                labelIdle={labelIdle}
              />

              {error && (
                <p className="text-sm text-red-400 text-center">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}

              <motion.button
                type="submit"
                disabled={sending || sent}
                whileHover={!sending && !sent ? { scale: 1.02 } : {}}
                whileTap={!sending && !sent ? { scale: 0.98 } : {}}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className={`
                  relative w-full overflow-hidden rounded-xl py-4 text-sm font-medium transition-all duration-300
                  ${
                    sent
                      ? "bg-emerald-500 text-white"
                      : dark
                        ? "bg-white text-black hover:bg-neutral-100"
                        : "bg-black text-white hover:bg-neutral-800"
                  }
                `}
              >
                <AnimatedButtonContent sending={sending} sent={sent} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Animated button states ─────────────────────────────────────── */
function AnimatedButtonContent({
  sending,
  sent,
}: {
  sending: boolean;
  sent: boolean;
}) {
  if (sent)
    return (
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-center gap-2"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4 }}
          />
        </svg>
        Message Sent!
      </motion.span>
    );

  if (sending)
    return (
      <span className="flex items-center justify-center gap-2">
        <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8z"
          />
        </svg>
        Sending...
      </span>
    );

  return (
    <span className="flex items-center justify-center gap-2">
      Send Message <Send size={15} />
    </span>
  );
}

/* ── Floating Input ─────────────────────────────────────────────── */
function FloatingInput({
  id,
  name,
  label,
  type,
  focused,
  setFocused,
  inputBg,
  labelActive,
  labelIdle,
}: {
  id: string;
  name: string;
  label: string;
  type: string;
  focused: string | null;
  setFocused: (v: string | null) => void;
  inputBg: string;
  labelActive: string;
  labelIdle: string;
}) {
  const [hasValue, setHasValue] = useState(false);
  const isActive = focused === id || hasValue;

  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={type}
        required
        placeholder=""
        onFocus={() => setFocused(id)}
        onBlur={(e) => {
          setFocused(null);
          setHasValue(e.target.value.length > 0);
        }}
        onChange={(e) => setHasValue(e.target.value.length > 0)}
        className={`peer w-full rounded-xl border px-4 pt-6 pb-2 text-sm outline-none transition-all duration-200 placeholder-transparent focus:ring-2 ${inputBg}`}
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 transition-all duration-200 ease-out ${
          isActive
            ? `top-2 text-[10px] font-medium ${labelActive}`
            : `top-1/2 -translate-y-1/2 text-sm ${labelIdle}`
        }`}
      >
        {label}
      </label>
    </div>
  );
}

/* ── Floating Textarea ──────────────────────────────────────────── */
function FloatingTextarea({
  id,
  name,
  label,
  focused,
  setFocused,
  inputBg,
  labelActive,
  labelIdle,
}: {
  id: string;
  name: string;
  label: string;
  focused: string | null;
  setFocused: (v: string | null) => void;
  inputBg: string;
  labelActive: string;
  labelIdle: string;
}) {
  const [hasValue, setHasValue] = useState(false);
  const isActive = focused === id || hasValue;

  return (
    <div className="relative">
      <textarea
        id={id}
        name={name}
        rows={5}
        required
        placeholder=""
        onFocus={() => setFocused(id)}
        onBlur={(e) => {
          setFocused(null);
          setHasValue(e.target.value.length > 0);
        }}
        onChange={(e) => setHasValue(e.target.value.length > 0)}
        className={`peer w-full rounded-xl border px-4 pt-7 pb-3 text-sm outline-none resize-none transition-all duration-200 placeholder-transparent focus:ring-2 ${inputBg}`}
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 transition-all duration-200 ease-out ${
          isActive
            ? `top-2 text-[10px] font-medium ${labelActive}`
            : `top-5 text-sm ${labelIdle}`
        }`}
      >
        {label}
      </label>
    </div>
  );
}
