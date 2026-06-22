import { useEffect, useState } from "react"
import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  Cloud,
  Code2,
  Mail,
  MapPin,
  Moon,
  Phone,
  Sparkles,
  Sun,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const experiences = [
  {
    role: "Associate Software Engineer II",
    company: "Optum Global Solutions / UnitedHealth Group",
    period: "Sep 2024 — Present",
    current: true,
    points: [
      "Restore service reliability for customer-facing healthcare applications through production incident response, Datadog monitoring, and internal support tooling.",
      "Build automation workflows that reduced resolution time for specific customer issues from roughly 20 minutes to near-instant execution.",
      "Contribute to AI-powered operational support using LangChain and LangGraph for agent-based incident investigation.",
      "Maintain and remediate vulnerabilities across three production codebases spanning Rust, Python, React, and Node.js.",
      "Help migrate a React + TypeScript application to Next.js while improving delivery through AI-assisted development, review, and validation.",
    ],
    tech: ["React", "TypeScript", "Next.js", "Python", "Rust", "AWS", "Datadog"],
  },
  {
    role: "Software Development Engineer",
    company: "Lanex Philippines",
    period: "Aug 2023 — Nov 2023",
    points: [
      "Developed responsive Vue.js interfaces for internal business applications.",
      "Built backend APIs and middleware with PHP and Laravel, following JSON:API standards.",
      "Improved the performance, scalability, and security of inventory management workflows.",
      "Collaborated directly with stakeholders to translate business requirements into shipped functionality.",
    ],
    tech: ["Vue.js", "Laravel", "PHP", "JavaScript", "REST APIs", "MySQL"],
  },
]

const skillGroups = [
  { title: "Frontend", skills: ["React", "Next.js", "TypeScript", "JavaScript", "Vue.js", "HTML"] },
  { title: "Backend", skills: ["Python", "Rust", "Go", "Node.js", "PHP", "Laravel", "REST APIs"] },
  { title: "AI & Cloud", skills: ["LangChain", "LangGraph", "RAG", "AWS", "Docker", "AI-Assisted Development"] },
  { title: "Operations", skills: ["Datadog", "ServiceNow", "Git", "GitHub Actions", "Monitoring"] },
]

const certifications = [
  {
    icon: Sparkles,
    name: "Optum.ai Generative AI Certification",
    date: "Dec 2025",
    detail: "Generative AI, RAG, responsible AI in healthcare, and a GPT-based clinical intelligence capstone.",
  },
  {
    icon: Cloud,
    name: "AWS Certified Cloud Practitioner",
    date: "Jul 2024",
    detail: "Validated cloud fluency and foundational knowledge of core AWS services.",
  },
  {
    icon: Award,
    name: "AWS re/Start",
    date: "Jan — Apr 2024",
    detail: "12-week hands-on cloud cohort covering EC2, S3, RDS, Lambda, IAM, Python, databases, networking, and Linux.",
  },
]

function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"))

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
    localStorage.theme = dark ? "dark" : "light"
  }, [dark])

  return (
    <Button variant="ghost" size="icon" onClick={() => setDark(!dark)} aria-label="Toggle color theme">
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </Button>
  )
}

function SectionLabel({ children, number }) {
  return (
    <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
      <span className="text-primary">{number}</span>
      <span>{children}</span>
      <span className="h-px flex-1 bg-border" />
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-10">
          <a href="#top" className="font-display text-sm font-extrabold tracking-tight">
            R/O<span className="text-primary">.</span>
          </a>
          <nav className="hidden items-center gap-7 font-mono text-[11px] uppercase tracking-wider text-muted-foreground sm:flex">
            <a className="transition-colors hover:text-foreground" href="#experience">Experience</a>
            <a className="transition-colors hover:text-foreground" href="#skills">Skills</a>
            <a className="transition-colors hover:text-foreground" href="#credentials">Credentials</a>
          </nav>
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <a href="mailto:r.ouano@icloud.com">Let’s talk <ArrowUpRight size={14} /></a>
            </Button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative mx-auto grid min-h-[92vh] max-w-7xl items-center px-5 pb-16 pt-28 lg:grid-cols-[1fr_340px] lg:gap-20 lg:px-10">
          <div className="relative z-10">
            <div className="mb-8 flex animate-fade-up items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Available for ambitious work</span>
            </div>
            <h1 className="animate-fade-up font-display text-[clamp(4rem,11vw,9.5rem)] font-extrabold leading-[0.86] tracking-[-0.075em] [animation-delay:80ms]">
              Ralph<br />Ouano<span className="text-primary">.</span>
            </h1>
            <div className="mt-10 grid animate-fade-up gap-8 [animation-delay:160ms] md:grid-cols-[1fr_1.25fr] md:items-end">
              <div className="font-mono text-xs uppercase leading-6 tracking-wider text-muted-foreground">
                <div className="flex items-center gap-2"><MapPin size={14} /> Cebu, Philippines</div>
                <div className="flex items-center gap-2"><Code2 size={14} /> Software Engineer</div>
              </div>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                I build <span className="text-foreground">cloud-native products</span>, intelligent automations, and resilient systems across healthcare and business environments.
              </p>
            </div>
            <div className="mt-10 flex animate-fade-up flex-wrap gap-3 [animation-delay:240ms]">
              <Button asChild><a href="#experience">Explore my work <ArrowDownRight size={16} /></a></Button>
              <Button asChild variant="outline"><a href="mailto:r.ouano@icloud.com"><Mail size={16} /> Email me</a></Button>
            </div>
          </div>

          <div className="relative mt-16 w-full max-w-[420px] justify-self-center animate-fade-up [animation-delay:320ms] lg:mt-0 lg:max-w-none">
            <div className="absolute -inset-16 -z-10 rounded-full bg-primary/10 blur-3xl" />
            <Card className="relative overflow-hidden p-6 shadow-[0_24px_80px_-36px_rgba(0,0,0,.5)]">
              <div className="mb-8 flex items-start justify-between">
                <div>
                  <Badge className="border-primary/40 bg-primary/10 text-primary">Profile summary</Badge>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Full-stack · Cloud · AI
                  </p>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">CEB · PH</span>
              </div>

              <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
                <div className="flex min-h-[190px] flex-col justify-between">
                  <div className="flex items-center justify-between">
                  </div>
                  <p className="max-w-[34ch] text-[15px] font-medium leading-6">
                    Full-stack engineer building cloud-native applications, intelligent automation, and dependable production systems across healthcare and business environments.
                  </p>
                  <div className="flex items-center gap-3 border-t border-primary-foreground/25 pt-4">
                    <Code2 size={17} />
                    <p className="text-xs leading-5 opacity-80">
                      Uses <strong className="font-semibold text-primary-foreground">Claude Code</strong> to accelerate implementation, debugging, and testing—with human review and validation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 divide-x divide-border border-y border-border py-4 text-center">
                {[
                  ["01", "Full-stack"],
                  ["02", "Cloud-native"],
                  ["03", "AI-assisted"],
                ].map(([number, label]) => (
                  <div className="px-2" key={label}>
                    <div className="font-mono text-[10px] text-primary">{number}</div>
                    <div className="mt-1 text-[11px] text-muted-foreground">{label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Claude Code", "React", "Next.js", "Python", "Rust", "AWS"].map((tech) => (
                  <Badge
                    className={tech === "Claude Code"
                      ? "border-primary/40 bg-primary/10 normal-case tracking-normal text-primary"
                      : "border-border bg-muted/60 normal-case tracking-normal"}
                    key={tech}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </section>

        <section className="border-y border-border bg-muted/40">
          <div className="mx-auto grid max-w-7xl divide-y divide-border px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-10">
            {[
              ["03", "Production codebases secured"],
              ["20m → 0", "Issue resolution automated"],
              ["Full-stack", "Frontend through operations"],
            ].map(([value, label]) => (
              <div className="px-0 py-8 sm:px-8 first:sm:pl-0 last:sm:pr-0" key={label}>
                <div className="font-display text-3xl font-extrabold tracking-tight">{value}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
          <SectionLabel number="01">Selected experience</SectionLabel>
          <div className="space-y-5">
            {experiences.map((job, index) => (
              <Card key={job.company} className="group p-6 transition-all hover:-translate-y-1 hover:shadow-xl md:p-9">
                <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                      {job.current && <Badge className="border-primary/40 bg-primary/10 text-primary">Current</Badge>}
                    </div>
                    <h3 className="font-display text-2xl font-bold tracking-tight">{job.role}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{job.company}</p>
                    <p className="mt-5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{job.period}</p>
                  </div>
                  <div>
                    <ul className="space-y-4">
                      {job.points.map((point) => (
                        <li className="flex gap-4 text-sm leading-6 text-muted-foreground md:text-[15px]" key={point}>
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {job.tech.map((tech) => <Badge key={tech}>{tech}</Badge>)}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="skills" className="border-y border-border bg-foreground py-24 text-background lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-background/50">
              <span className="text-primary">02</span><span>Technical toolkit</span><span className="h-px flex-1 bg-background/20" />
            </div>
            <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <h2 className="font-display text-5xl font-extrabold leading-[.95] tracking-[-.05em] md:text-7xl">Built across<br />the stack<span className="text-primary">.</span></h2>
                <p className="mt-6 max-w-sm text-sm leading-6 text-background/55">From interfaces people enjoy using to systems that stay useful when production gets noisy.</p>
              </div>
              <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
                {skillGroups.map((group, i) => (
                  <div key={group.title}>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="font-mono text-[10px] text-primary">0{i + 1}</span>
                      <h3 className="font-mono text-xs uppercase tracking-wider">{group.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span className="rounded-full border border-background/15 px-3 py-1.5 text-xs text-background/70 transition-colors hover:border-primary hover:text-primary" key={skill}>{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="credentials" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
          <SectionLabel number="03">Credentials & education</SectionLabel>
          <div className="grid gap-5 lg:grid-cols-3">
            {certifications.map(({ icon: Icon, name, date, detail }) => (
              <Card className="flex min-h-64 flex-col p-6 md:p-7" key={name}>
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary"><Icon size={21} /></div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{date}</span>
                </div>
                <div className="mt-auto pt-10">
                  <h3 className="font-display text-xl font-bold tracking-tight">{name}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{detail}</p>
                </div>
              </Card>
            ))}
          </div>
          <Card className="mt-5 grid gap-6 bg-primary p-6 text-black md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest opacity-60">Education / Jan 2024</div>
              <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight">B.S. Computer Engineering</h3>
              <p className="mt-1 text-sm opacity-70">University of San Carlos · Philippines</p>
            </div>
            <Code2 className="hidden opacity-30 md:block" size={54} />
          </Card>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-5 py-24 text-center lg:px-10 lg:py-32">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Have a problem worth solving?</p>
            <h2 className="mx-auto mt-5 max-w-4xl font-display text-[clamp(3rem,8vw,7rem)] font-extrabold leading-[.9] tracking-[-.06em]">Let’s make it<br /><span className="text-primary">work beautifully.</span></h2>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button asChild><a href="mailto:r.ouano@icloud.com"><Mail size={16} /> r.ouano@icloud.com</a></Button>
              <Button asChild variant="outline"><a href="tel:+639062866676"><Phone size={16} /> +63 906 2866 676</a></Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 font-mono text-[10px] uppercase tracking-wider text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <span>© {new Date().getFullYear()} Ralph Eduard Ouano</span>
          <span>Designed & engineered in Cebu</span>
        </div>
      </footer>
    </div>
  )
}
