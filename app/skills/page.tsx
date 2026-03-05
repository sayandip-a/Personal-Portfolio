"use client";

import { motion, useInView, cubicBezier } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/components/ThemeProvider";
import {
  SiPython,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiNetlify,
  SiFirebase,
  SiKaggle,
  SiJupyter,
  SiPostman,
  SiMysql,
  SiNodedotjs,
  SiRedis,
  SiAmazonwebservices,
  SiKubernetes,
  SiExpress,
  SiBootstrap,
  SiPlotly,
  SiHtml5,
  SiCss3,
  SiLeetcode,
  SiGooglecolab,
  SiPrisma,
  SiWebrtc,
  SiSocketdotio,
  SiFastapi,
  SiGithubactions,
  SiPostgresql,
} from "react-icons/si";

/* ── Data ───────────────────────────────────────────────────────── */
const categories = [
  {
    label: "01",
    title: "AI & Machine Learning",
    description: "Data-driven systems built for real-world performance.",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "Matplotlib", icon: SiPlotly, color: "#3F4F75" },
      { name: "Plotly", icon: SiPlotly, color: "#3F4F75" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
    ],
  },
  {
    label: "02",
    title: "Web Development",
    description: "Full-stack interfaces that are fast, clean, and scalable.",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
      { name: "WebRTC", icon: SiWebrtc, color: "#000000" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "#010101" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    ],
  },
  {
    label: "03",
    title: "Tools & DevOps",
    description: "Engineering workflows built for production environments.",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#181717" },
    ],
  },
  {
    label: "04",
    title: "Platforms & Cloud",
    description: "Deployment pipelines and managed cloud infrastructure.",
    skills: [
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "MongoDB Atlas", icon: SiMongodb, color: "#47A248" },
      { name: "Kaggle", icon: SiKaggle, color: "#20BEFF" },
      { name: "Jupyter", icon: SiJupyter, color: "#F37626" },
      { name: "LeetCode", icon: SiLeetcode, color: "#FFA116" },
      { name: "Google Colab", icon: SiGooglecolab, color: "#F9AB00" },
    ],
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
      delay: i * 0.08,
      ease: cubicBezier(0.4, 0, 0.2, 1),
    },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      delay: i * 0.06,
      ease: cubicBezier(0.4, 0, 0.2, 1),
    },
  }),
};

/* ── Page ───────────────────────────────────────────────────────── */
export default function SkillsPage() {
  const { dark } = useTheme();
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const bg = dark ? "bg-[#080808]" : "bg-[#f5f5f5]";
  const text = dark ? "text-white" : "text-black";
  const muted = dark ? "text-neutral-400" : "text-neutral-500";
  const faint = dark ? "text-neutral-500" : "text-neutral-400";
  const glowA = dark ? "bg-white/[0.025]" : "bg-black/[0.04]";
  const glowB = dark ? "bg-white/[0.02]" : "bg-black/[0.03]";
  const gridClr = dark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.12)";

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
            Capabilities
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className={`text-5xl sm:text-6xl md:text-7xl font-semibold ${text} leading-[1.05] tracking-tight mb-6`}
          >
            Skills &<br />
            <span className={faint}>Tools.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className={`${muted} text-lg leading-relaxed max-w-xl mb-20`}
          >
            A strong blend of AI, full-stack development, and DevOps tools —
            built for designing, shipping, and scaling real-world products.
          </motion.p>
        </div>

        {/* ── Categories ── */}
        <div className="space-y-28">
          {categories.map((cat, catIdx) => (
            <SkillCategory
              key={cat.title}
              category={cat}
              catIdx={catIdx}
              dark={dark}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Skill Category ─────────────────────────────────────────────── */
function SkillCategory({
  category,
  catIdx,
  dark,
}: {
  category: (typeof categories)[0];
  catIdx: number;
  dark: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const text = dark ? "text-white" : "text-black";
  const muted = dark ? "text-neutral-500" : "text-neutral-400";
  const dim = dark ? "text-neutral-600" : "text-neutral-400";
  const divider = dark ? "border-white/[0.07]" : "border-black/[0.07]";

  return (
    <div ref={ref}>
      <div
        className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10 pb-5 border-b ${divider} transition-colors duration-500`}
      >
        <div className="flex items-start gap-5">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`mt-1 text-xs font-mono ${dim}`}
          >
            {category.label}
          </motion.span>

          <div>
            <motion.h2
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className={`text-2xl font-semibold ${text}`}
            >
              {category.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className={`mt-1 text-sm ${muted}`}
            >
              {category.description}
            </motion.p>
          </div>
        </div>

        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-xs ${dim} sm:mb-1`}
        >
          {category.skills.length} technologies
        </motion.span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {category.skills.map((skill, i) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            i={i}
            inView={inView}
            dark={dark}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Skill Card ─────────────────────────────────────────────────── */
function SkillCard({
  skill,
  i,
  inView,
  dark,
}: {
  skill: { name: string; icon: any; color: string };
  i: number;
  inView: boolean;
  dark: boolean;
}) {
  const Icon = skill.icon;

  // For very dark brand colors (black icons) we lighten them in dark mode so they stay visible
  const isDarkColor =
    skill.color === "#000000" ||
    skill.color === "#181717" ||
    skill.color === "#150458" ||
    skill.color === "#013243";
  const iconColor = dark && isDarkColor ? "#e5e5e5" : skill.color;

  const border = dark ? "border-white/[0.08]" : "border-black/[0.08]";
  const cardBg = dark ? "bg-white/[0.03]" : "bg-black/[0.03]";
  const cardHover = dark
    ? "hover:border-white/[0.18] hover:bg-white/[0.06]"
    : "hover:border-black/[0.18] hover:bg-black/[0.05]";
  const hoverGlow = dark
    ? "bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)]"
    : "bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.04)_0%,transparent_70%)]";
  const labelClr = dark
    ? "text-neutral-400 group-hover:text-neutral-200"
    : "text-neutral-500 group-hover:text-neutral-700";

  return (
    <motion.div
      custom={i}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ y: -5, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`group relative flex flex-col items-center justify-center gap-3 rounded-2xl border ${border} ${cardBg} p-5 cursor-default overflow-hidden ${cardHover} transition-colors duration-300`}
    >
      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${hoverGlow}`}
      />

      {/* Icon rendered with its official brand color */}
      <Icon
        style={{ color: iconColor, fontSize: "1.875rem" /* text-3xl */ }}
        className="transition-transform duration-300 group-hover:scale-110"
      />

      <span
        className={`text-xs font-medium text-center transition-colors duration-300 ${labelClr}`}
      >
        {skill.name}
      </span>
    </motion.div>
  );
}
