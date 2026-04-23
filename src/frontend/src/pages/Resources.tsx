import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Layout } from "../components/Layout";

const platforms = [
  {
    name: "VTOP Portal",
    url: "https://vtopcc.vit.ac.in",
    icon: "🖥️",
    desc: "Course materials, attendance, marks, timetable",
    category: "VIT Official",
  },
  {
    name: "VIT-AP Official Site",
    url: "https://vitap.ac.in",
    icon: "🏫",
    desc: "Academic calendar, announcements, circulars",
    category: "VIT Official",
  },
  {
    name: "NPTEL Free Courses",
    url: "https://nptel.ac.in",
    icon: "🎓",
    desc: "Free engineering and science courses with certificates",
    category: "Learning",
  },
  {
    name: "MIT OpenCourseWare",
    url: "https://ocw.mit.edu",
    icon: "🔬",
    desc: "World-class lecture notes and course material",
    category: "Learning",
  },
  {
    name: "Khan Academy",
    url: "https://khanacademy.org",
    icon: "📐",
    desc: "Math, science, and more — simple explanations",
    category: "Learning",
  },
  {
    name: "GeeksforGeeks",
    url: "https://geeksforgeeks.org",
    icon: "💻",
    desc: "CS concepts, interview prep, coding problems",
    category: "Coding & Career",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com",
    icon: "🧩",
    desc: "Coding practice — essential for placements",
    category: "Coding & Career",
  },
  {
    name: "HackerRank",
    url: "https://hackerrank.com",
    icon: "🏆",
    desc: "Skill tests and certifications for recruiters",
    category: "Coding & Career",
  },
  {
    name: "Coursera",
    url: "https://coursera.org",
    icon: "🎖️",
    desc: "Certifications from Google, IBM, AWS and more",
    category: "Coding & Career",
  },
  {
    name: "National Digital Library",
    url: "https://ndl.gov.in",
    icon: "📖",
    desc: "Free access to textbooks and research papers",
    category: "Books & Research",
  },
];

const linkCategories = [
  "VIT Official",
  "Learning",
  "Coding & Career",
  "Books & Research",
];

const notesTips = [
  {
    icon: "📂",
    tip: 'VTOP "Course Materials" section — most faculty upload slides here after each lecture.',
  },
  {
    icon: "💬",
    tip: "Class WhatsApp / Telegram groups — seniors share notes, PYQs, and important PDFs.",
  },
  {
    icon: "🔗",
    tip: "Some departments maintain a shared Google Drive. Ask a second-year for access.",
  },
  {
    icon: "📹",
    tip: "NPTEL video lectures often match VIT-AP syllabus topics — great for difficult subjects.",
  },
];

const pyqTips = [
  "PYQs are the most reliable guide for CAT (Continuous Assessment Tests) and final exams.",
  "Most PYQs circulate in class groups — join your department group on the first day.",
  'VTOP has a "Digital Library" section — some PYQs may be available officially there.',
  "Go through at least 3 years of PYQs before any major exam — question patterns repeat often.",
  "Faculty sometimes re-use questions or concepts from previous years, especially for numericals.",
];

export default function Resources() {
  return (
    <Layout>
      {/* Page header */}
      <section className="section-bg-light px-6 py-10 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Badge
            variant="secondary"
            className="mb-3 text-xs font-semibold tracking-wide"
          >
            📁 Resources & Materials
          </Badge>
          <h1 className="text-section text-foreground mb-2">
            Resources & Materials
          </h1>
          <p className="text-muted-foreground text-sm max-w-xl">
            Notes, past question papers, and useful links to help you study
            smarter. Most materials are free — you just need to know where to
            look.
          </p>
        </div>
      </section>

      {/* Notes & Study Material */}
      <section
        className="section-bg-muted px-6 py-10"
        data-ocid="resources.notes_section"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-subsection text-foreground mb-1">
            Notes & Study Material
          </h2>
          <p className="text-xs text-muted-foreground mb-5">
            Where to find lecture notes and course materials for your subjects.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {notesTips.map((item, i) => (
              <div
                key={item.icon}
                className="card-elevated rounded-xl p-4 flex items-start gap-3"
                data-ocid={`resources.notes_tip.${i + 1}`}
              >
                <span className="text-xl shrink-0 mt-0.5" aria-hidden="true">
                  {item.icon}
                </span>
                <p className="text-sm text-foreground leading-relaxed">
                  {item.tip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PYQs */}
      <section
        className="section-bg-light px-6 py-10 border-t border-border"
        data-ocid="resources.pyqs_section"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-subsection text-foreground mb-1">
            PYQs (Past Year Question Papers)
          </h2>
          <p className="text-xs text-muted-foreground mb-5">
            Essential for exam preparation — question patterns repeat
            frequently.
          </p>
          <div className="space-y-3 mb-6">
            {pyqTips.map((tip, i) => (
              <div
                key={tip.slice(0, 20)}
                className="flex items-start gap-3"
                data-ocid={`resources.pyq_tip.${i + 1}`}
              >
                <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold font-display">
                  {i + 1}
                </span>
                <p className="text-sm text-foreground leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
            <p className="text-sm font-semibold text-foreground mb-2">
              📌 Where to get PYQs
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Department WhatsApp / Telegram groups</li>
              <li>Seniors from your branch (2nd, 3rd year students)</li>
              <li>VTOP → Digital Library or Course Materials</li>
              <li>Department-shared Google Drives (ask seniors for links)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Useful Links */}
      <section
        className="section-bg-muted px-6 py-10"
        data-ocid="resources.links_section"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-subsection text-foreground mb-5">Useful Links</h2>
          {linkCategories.map((cat) => (
            <div key={cat} className="mb-7">
              <h3 className="text-label mb-3">{cat}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {platforms
                  .filter((p) => p.category === cat)
                  .map((link, i) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-ocid={`resources.link.${cat.toLowerCase().replace(/\s+/g, "_")}.${i + 1}`}
                      className="card-elevated rounded-xl p-4 flex items-start gap-3 hover:border-primary/40 hover:shadow-md transition-smooth group"
                    >
                      <span
                        className="text-xl shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        {link.icon}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1 mb-0.5">
                          <p className="font-display font-semibold text-sm text-foreground group-hover:text-primary transition-colors truncate">
                            {link.name}
                          </p>
                          <ExternalLink className="w-3 h-3 text-muted-foreground shrink-0" />
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {link.desc}
                        </p>
                      </div>
                    </a>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Summary */}
      <section className="section-bg-light px-6 py-8 border-t border-border">
        <div className="max-w-4xl mx-auto flex items-start gap-3">
          <span className="text-2xl shrink-0 mt-0.5" aria-hidden="true">
            📌
          </span>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Summary: </span>
            Most study materials are available via VTOP, seniors, and free
            online platforms. Stay connected with class groups for quick access
            to notes and PYQs.
          </p>
        </div>
      </section>
    </Layout>
  );
}
