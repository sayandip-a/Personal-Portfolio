"use client";

import { motion, useInView, cubicBezier } from "framer-motion";
import { useRef } from "react";
import {
  ArrowUpRight,
  Award,
  Briefcase,
  BookOpen,
  FileText,
} from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const internships = [
  {
    company: "Company Name",
    role: "Machine Learning Intern",
    duration: "Jun 2025 – Aug 2025",
    description:
      "Worked on predictive modeling and data pipeline automation. Built and evaluated ML models using Python, Pandas, and Scikit-learn.",
    skills: ["Python", "Scikit-learn", "Pandas", "SQL"],
    certificate: "#",
    type: "Internship",
  },
  {
    company: "Another Company",
    role: "Web Development Intern",
    duration: "Dec 2024 – Feb 2025",
    description:
      "Built responsive web interfaces and REST APIs. Collaborated with a team of 5 engineers in an Agile workflow.",
    skills: ["React", "Node.js", "MongoDB", "REST API"],
    certificate: "#",
    type: "Internship",
  },
];

const lors = [
  {
    from: "Prof. [Professor Name]",
    designation: "Assistant Professor, Dept. of CSE",
    institution: "[Your College Name]",
    about:
      "Recommended for academic excellence, problem-solving ability, and outstanding performance in Machine Learning coursework.",
    date: "Jan 2026",
    document: "#",
  },
  {
    from: "Mr. [Manager Name]",
    designation: "Senior Software Engineer",
    institution: "[Company Name]",
    about:
      "Praised for technical skill, teamwork, and delivery of production-ready features during internship.",
    date: "Sep 2025",
    document: "#",
  },
];

const courses = [
  {
    title: "Data for Decision Makers Job Simulation",
    issuer: "BCG X — The Boston Consulting Group",
    date: "March 2026",
    credential: "/BCGX.pdf",
    skills: [
      "Excel",
      "Data Analysis",
      "Data-Driven Decision Making",
      "PowerPoint",
    ],
  },
  {
    title: "The Web Developer Bootcamp",
    issuer: "Udemy — Colt Steele",
    date: "Jul 2025",
    credential: "#",
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
  },
  {
    title: "Python for Data Science and ML",
    issuer: "Udemy — Jose Portilla",
    date: "Apr 2025",
    credential: "#",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
  },
  {
    title: "EY Technology Risk Virtual Job Simulation",
    issuer: "Ernst & Young (EY)",
    date: "March 2026",
    credential: "/EY.pdf",
    skills: [
      "Risk Assessment",
      "Risk Management",
      "Problem Solving",
      "Critical Thinking",
      "Communication",
    ],
  },
];

const competitions = [
  {
    title: "Smart India Hackathon — Finalist",
    organizer: "Ministry of Education, Govt. of India",
    date: "Dec 2025",
    description:
      "Reached the final round among 50,000+ teams. Built an AI-based solution for public healthcare resource allocation.",
    certificate: "#",
    badge: "🏆 Finalist",
  },
  {
    title: "HackerRank — 5-Star Python Badge",
    organizer: "HackerRank",
    date: "Aug 2025",
    description:
      "Achieved 5-star rating in Python by solving 100+ problems across data structures, algorithms, and OOP.",
    certificate: "#",
    badge: "⭐ 5 Star",
  },
  {
    title: "Codechef — Division 3 Rank 120",
    organizer: "Codechef",
    date: "Jun 2025",
    description:
      "Secured top 5% rank in a monthly competitive programming contest with 2,400+ participants.",
    certificate: "#",
    badge: "🥇 Top 5%",
  },
];

const ease = cubicBezier(0.4, 0, 0.2, 1);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, delay: i * 0.09, ease },
  }),
};

export default function AchievementsPage() {
  const { dark } = useTheme();
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const bg = dark ? "bg-[#080808]" : "bg-[#f5f5f5]";
  const text = dark ? "text-white" : "text-black";
  const muted = dark ? "text-neutral-400" : "text-neutral-500";
  const faint = dark ? "text-neutral-500" : "text-neutral-400";
  const dim = dark ? "text-neutral-600" : "text-neutral-400";
  const border = dark ? "border-white/[0.08]" : "border-black/[0.08]";
  const cardBg = dark ? "bg-white/[0.03]" : "bg-black/[0.03]";
  const divLine = dark ? "border-white/[0.07]" : "border-black/[0.07]";
  const glowA = dark ? "bg-white/[0.025]" : "bg-black/[0.04]";
  const glowB = dark ? "bg-white/[0.02]" : "bg-black/[0.03]";
  const gridClr = dark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.12)";
  const pill = dark
    ? "border-white/[0.08] bg-white/[0.04] text-neutral-400"
    : "border-black/[0.08] bg-black/[0.04] text-neutral-500";
  const hoverBdr = dark
    ? "hover:border-white/[0.16]"
    : "hover:border-black/[0.16]";
  const hoverBg2 = dark ? "hover:bg-white/[0.05]" : "hover:bg-black/[0.04]";
  const hoverGlow = dark
    ? "bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.04)_0%,transparent_65%)]"
    : "bg-[radial-gradient(ellipse_at_top_left,rgba(0,0,0,0.03)_0%,transparent_65%)]";
  const ctaLink = dark
    ? "text-neutral-400 hover:text-white"
    : "text-neutral-500 hover:text-black";

  const tokens = {
    dark,
    text,
    muted,
    faint,
    dim,
    border,
    cardBg,
    hoverBdr,
    hoverBg: hoverBg2,
    hoverGlow,
    pill,
    ctaLink,
  };

  return (
    <section
      className={`relative min-h-screen ${bg} overflow-hidden px-4 sm:px-6 pt-24 sm:pt-28 pb-20 sm:pb-32 transition-colors duration-500`}
    >
      {/* ── Background ── */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute -top-40 -right-40 h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] rounded-full ${glowA} blur-[130px] transition-colors duration-500`}
        />
        <div
          className={`absolute bottom-0 -left-20 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] rounded-full ${glowB} blur-[100px] transition-colors duration-500`}
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
            className={`mb-3 sm:mb-4 text-xs font-semibold uppercase tracking-[0.25em] ${faint}`}
          >
            Recognition & Growth
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold ${text} leading-[1.05] tracking-tight mb-4 sm:mb-6`}
          >
            Achievements &<br />
            <span className={faint}>Certificates.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className={`${muted} text-base sm:text-lg leading-relaxed max-w-xl mb-14 sm:mb-20`}
          >
            A record of my internships, letters of recommendation, completed
            courses, and competition results — things I've earned, not just
            listed.
          </motion.p>
        </div>

        {/* ── Sections ── */}
        <AchievementSection
          label="01"
          title="Internships"
          icon={Briefcase}
          count={`${internships.length} positions`}
          divLine={divLine}
          dark={dark}
          text={text}
          dim={dim}
        >
          {/* Single column on mobile, 2 cols on sm+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {internships.map((item, i) => (
              <InternshipCard
                key={item.company + i}
                item={item}
                i={i}
                {...tokens}
              />
            ))}
          </div>
        </AchievementSection>

        <AchievementSection
          label="02"
          title="Letters of Recommendation"
          icon={FileText}
          count={`${lors.length} letters`}
          divLine={divLine}
          dark={dark}
          text={text}
          dim={dim}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {lors.map((item, i) => (
              <LORCard key={item.from + i} item={item} i={i} {...tokens} />
            ))}
          </div>
        </AchievementSection>

        <AchievementSection
          label="03"
          title="Course Certificates"
          icon={BookOpen}
          count={`${courses.length} certificates`}
          divLine={divLine}
          dark={dark}
          text={text}
          dim={dim}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {courses.map((item, i) => (
              <CourseCard key={item.title + i} item={item} i={i} {...tokens} />
            ))}
          </div>
        </AchievementSection>

        <AchievementSection
          label="04"
          title="Competitions & Badges"
          icon={Award}
          count={`${competitions.length} achievements`}
          divLine={divLine}
          dark={dark}
          text={text}
          dim={dim}
        >
          {/* 1 col mobile → 2 col sm → 3 col lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {competitions.map((item, i) => (
              <CompetitionCard
                key={item.title + i}
                item={item}
                i={i}
                {...tokens}
              />
            ))}
          </div>
        </AchievementSection>
      </div>
    </section>
  );
}

/* ── Section Wrapper ── */
function AchievementSection({
  label,
  title,
  icon: Icon,
  count,
  divLine,
  dark,
  text,
  dim,
  children,
}: {
  label: string;
  title: string;
  icon: any;
  count: string;
  divLine: string;
  dark: boolean;
  text: string;
  dim: string;
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const iconBg = dark
    ? "border-white/10 bg-white/5 text-neutral-300"
    : "border-black/10 bg-black/5 text-neutral-600";

  return (
    <div ref={ref} className="mb-16 sm:mb-24">
      {/* Header — stacks on mobile */}
      <div
        className={`flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-10 pb-4 sm:pb-5 border-b ${divLine} transition-colors duration-500`}
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl border ${iconBg}`}
          >
            <Icon size={15} />
          </motion.span>

          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.05 }}
              className={`text-xs font-mono mb-0.5 ${dim}`}
            >
              {label}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className={`text-xl sm:text-2xl font-semibold ${text}`}
            >
              {title}
            </motion.h2>
          </div>
        </div>

        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-xs ${dim} sm:mb-1 pl-12 sm:pl-0`}
        >
          {count}
        </motion.span>
      </div>

      <motion.div initial="hidden" animate={inView ? "visible" : "hidden"}>
        {children}
      </motion.div>
    </div>
  );
}

/* ── Internship Card ── */
function InternshipCard({
  item,
  i,
  dark,
  text,
  muted,
  dim,
  border,
  cardBg,
  hoverBdr,
  hoverBg,
  hoverGlow,
  pill,
  ctaLink,
}: any) {
  return (
    <motion.article
      custom={i}
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`group relative flex flex-col rounded-2xl border ${border} ${cardBg} p-5 sm:p-7 overflow-hidden ${hoverBdr} ${hoverBg} transition-colors duration-300`}
    >
      <div
        className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${hoverGlow}`}
      />
      <div className="relative z-10 flex flex-col flex-1">
        {/* Header — duration moves below on mobile to avoid overflow */}
        <div className="mb-4 sm:mb-5">
          <div className="flex items-start justify-between gap-3 flex-wrap">
            <div className="min-w-0">
              <span
                className={`text-[11px] font-semibold uppercase tracking-wider ${dim} mb-1.5 block`}
              >
                {item.type}
              </span>
              <h3
                className={`text-base sm:text-lg font-semibold ${text} leading-snug`}
              >
                {item.role}
              </h3>
              <p className={`text-sm mt-0.5 ${muted}`}>{item.company}</p>
            </div>
            {/* Duration pill — wraps cleanly on small screens */}
            <span
              className={`text-xs px-2.5 py-1 rounded-full border shrink-0 ${dark ? "border-white/10 bg-white/5 text-neutral-400" : "border-black/10 bg-black/5 text-neutral-500"}`}
            >
              {item.duration}
            </span>
          </div>
        </div>

        <p className={`text-sm ${muted} leading-relaxed flex-1 mb-4 sm:mb-5`}>
          {item.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5 sm:mb-6">
          {item.skills.map((s: string) => (
            <span
              key={s}
              className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${pill}`}
            >
              {s}
            </span>
          ))}
        </div>

        <a
          href={item.certificate}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors group/link ${ctaLink}`}
        >
          View Certificate
          <ArrowUpRight
            size={13}
            className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          />
        </a>
      </div>
    </motion.article>
  );
}

/* ── LOR Card ── */
function LORCard({
  item,
  i,
  dark,
  text,
  muted,
  dim,
  border,
  cardBg,
  hoverBdr,
  hoverBg,
  hoverGlow,
  ctaLink,
}: any) {
  return (
    <motion.article
      custom={i}
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`group relative flex flex-col rounded-2xl border ${border} ${cardBg} p-5 sm:p-7 overflow-hidden ${hoverBdr} ${hoverBg} transition-colors duration-300`}
    >
      <div
        className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${hoverGlow}`}
      />
      <div className="relative z-10 flex flex-col flex-1">
        <span
          className={`text-4xl sm:text-5xl font-bold leading-none mb-3 select-none ${dark ? "text-white/[0.06]" : "text-black/[0.06]"}`}
        >
          "
        </span>
        <p
          className={`text-sm ${muted} leading-relaxed flex-1 mb-5 sm:mb-6 italic`}
        >
          {item.about}
        </p>

        {/* Footer — stacks on very small screens */}
        <div
          className={`flex flex-col xs:flex-row items-start xs:items-center justify-between gap-4 border-t pt-4 sm:pt-5 ${dark ? "border-white/[0.07]" : "border-black/[0.07]"}`}
        >
          <div className="min-w-0">
            <p className={`text-sm font-semibold ${text} truncate`}>
              {item.from}
            </p>
            <p className={`text-xs mt-0.5 ${dim}`}>{item.designation}</p>
            <p className={`text-xs ${dim}`}>{item.institution}</p>
          </div>
          <div className="flex flex-row xs:flex-col items-center xs:items-end gap-3 xs:gap-2 shrink-0">
            <span className={`text-xs ${dim}`}>{item.date}</span>
            <a
              href={item.document}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 text-xs font-medium transition-colors ${ctaLink}`}
            >
              View LOR <ArrowUpRight size={11} />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ── Course Card ── */
function CourseCard({
  item,
  i,
  text,
  muted,
  dim,
  border,
  cardBg,
  hoverBdr,
  hoverBg,
  hoverGlow,
  pill,
  ctaLink,
}: any) {
  return (
    <motion.article
      custom={i}
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`group relative flex flex-col rounded-2xl border ${border} ${cardBg} p-5 sm:p-7 overflow-hidden ${hoverBdr} ${hoverBg} transition-colors duration-300`}
    >
      <div
        className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${hoverGlow}`}
      />
      <div className="relative z-10 flex flex-col flex-1">
        <div className="mb-4 sm:mb-5">
          <h3 className={`text-base font-semibold ${text} leading-snug mb-1.5`}>
            {item.title}
          </h3>
          <p className={`text-sm ${muted}`}>{item.issuer}</p>
          <p className={`text-xs mt-1 ${dim}`}>Completed {item.date}</p>
        </div>

        <div className="flex flex-wrap gap-1.5 flex-1 mb-5 sm:mb-6">
          {item.skills.map((s: string) => (
            <span
              key={s}
              className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${pill}`}
            >
              {s}
            </span>
          ))}
        </div>

        <a
          href={item.credential}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors group/link ${ctaLink}`}
        >
          View Credential
          <ArrowUpRight
            size={13}
            className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          />
        </a>
      </div>
    </motion.article>
  );
}

/* ── Competition Card ── */
function CompetitionCard({
  item,
  i,
  dark,
  text,
  muted,
  dim,
  border,
  cardBg,
  hoverBdr,
  hoverBg,
  hoverGlow,
  ctaLink,
}: any) {
  return (
    <motion.article
      custom={i}
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`group relative flex flex-col rounded-2xl border ${border} ${cardBg} p-5 sm:p-7 overflow-hidden ${hoverBdr} ${hoverBg} transition-colors duration-300`}
    >
      <div
        className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${hoverGlow}`}
      />
      <div className="relative z-10 flex flex-col flex-1">
        <span
          className={`self-start mb-3 sm:mb-4 text-xs font-semibold px-3 py-1 rounded-full border ${dark ? "border-white/10 bg-white/5 text-neutral-300" : "border-black/10 bg-black/5 text-neutral-600"}`}
        >
          {item.badge}
        </span>

        <h3 className={`text-base font-semibold ${text} leading-snug mb-1.5`}>
          {item.title}
        </h3>
        <p className={`text-xs ${dim} mb-3 sm:mb-4`}>
          {item.organizer} · {item.date}
        </p>
        <p className={`text-sm ${muted} leading-relaxed flex-1 mb-5 sm:mb-6`}>
          {item.description}
        </p>

        <a
          href={item.certificate}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors group/link ${ctaLink}`}
        >
          View Certificate
          <ArrowUpRight
            size={13}
            className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          />
        </a>
      </div>
    </motion.article>
  );
}
