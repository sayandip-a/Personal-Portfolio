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
  SiMetasploit,
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
  SiC,
  SiHtml5,
  SiCss3,
  SiLeetcode,
  SiGooglecolab,
} from "react-icons/si";

/* ── Data ───────────────────────────────────────────────────────── */
const categories = [
  {
    label: "01",
    title: "AI & Machine Learning",
    description: "Data-driven systems built for real-world performance.",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "NumPy", icon: SiNumpy },
      { name: "Pandas", icon: SiPandas },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "PyTorch", icon: SiPytorch },
      { name: "Matplotlib", icon: SiPlotly },
    ],
  },
  {
    label: "02",
    title: "Web Development",
    description: "Full-stack interfaces that are fast, clean, and scalable.",
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Redis", icon: SiRedis },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
    ],
  },
  {
    label: "03",
    title: "Tools & DevOps",
    description: "Engineering workflows built for production environments.",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "AWS", icon: SiAmazonwebservices },
      { name: "Postman", icon: SiPostman },
    ],
  },
  {
    label: "04",
    title: "Platforms & Cloud",
    description: "Deployment pipelines and managed cloud infrastructure.",
    skills: [
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiNetlify },
      { name: "Firebase", icon: SiFirebase },
      { name: "MongoDB Atlas", icon: SiMongodb },
      { name: "Kaggle", icon: SiKaggle },
      { name: "Jupyter", icon: SiJupyter },
      { name: "LeetCode", icon: SiLeetcode },
      { name: "Google Colab", icon: SiGooglecolab },
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

  /* ── Theme tokens ── */
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
      {/* Header */}
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

      {/* Grid */}
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
  skill: { name: string; icon: any };
  i: number;
  inView: boolean;
  dark: boolean;
}) {
  const Icon = skill.icon;

  const border = dark ? "border-white/[0.08]" : "border-black/[0.08]";
  const cardBg = dark ? "bg-white/[0.03]" : "bg-black/[0.03]";
  const cardHover = dark
    ? "hover:border-white/[0.18] hover:bg-white/[0.06]"
    : "hover:border-black/[0.18] hover:bg-black/[0.05]";
  const hoverGlow = dark
    ? "bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)]"
    : "bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.04)_0%,transparent_70%)]";
  const iconClr = dark
    ? "text-white/70 group-hover:text-white"
    : "text-black/50 group-hover:text-black";
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
      <Icon className={`text-3xl transition-colors duration-300 ${iconClr}`} />
      <span
        className={`text-xs font-medium text-center transition-colors duration-300 ${labelClr}`}
      >
        {skill.name}
      </span>
    </motion.div>
  );
}
