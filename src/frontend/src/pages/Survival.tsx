import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "../components/Layout";

interface GuideCardProps {
  icon: string;
  title: string;
  items: string[];
  accent?: boolean;
}

function GuideCard({ icon, title, items, accent = false }: GuideCardProps) {
  return (
    <Card
      className={`card-elevated h-full ${accent ? "border-primary/30 bg-primary/5" : ""}`}
    >
      <CardContent className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl" aria-hidden="true">
            {icon}
          </span>
          <h3 className="text-subsection">{title}</h3>
        </div>
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-foreground"
            >
              <span
                className={`mt-0.5 shrink-0 ${accent ? "text-primary" : "text-accent"}`}
              >
                →
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

const commonMistakes = [
  {
    mistake: "Ignoring CAT 1",
    fix: "CAT 2 alone cannot fully compensate — both exams matter equally",
  },
  {
    mistake: "Not tracking attendance",
    fix: "Check VTOP weekly, not when you're already at risk",
  },
  {
    mistake: "Overloading credits in Sem 1",
    fix: "Start lighter, understand FFCS, then scale up",
  },
  {
    mistake: "Picking subjects only for easy grades",
    fix: "Balance scoring subjects with ones that build real skills",
  },
  {
    mistake: "Skipping classes casually",
    fix: "Every skip counts — plan bunks, don't just miss classes",
  },
  {
    mistake: "Missing academic calendar deadlines",
    fix: "Mark registration, withdrawal, and exam dates at semester start",
  },
];

const keyStats = [
  { value: "75%", label: "Minimum attendance required", icon: "📊" },
  { value: "80%+", label: "Recommended attendance buffer", icon: "✅" },
  { value: "25 marks", label: "Each CAT exam (CAT 1 + CAT 2)", icon: "📝" },
  { value: "40 marks", label: "Final (DA) exam weightage", icon: "🎯" },
  { value: "2 weeks", label: "Before finals to start revision", icon: "🗓️" },
  { value: "10 CGPA", label: "Maximum CGPA possible", icon: "🏆" },
];

const outingRules = [
  {
    type: "General Outing",
    icon: "🚶",
    details: [
      "Requires both mentor (Proctor) and warden approval",
      "Apply on VTOP at least 24 hours in advance",
      "Must return before the stipulated time mentioned in the pass",
      "Available on any day subject to approval",
    ],
  },
  {
    type: "Weekend Outing",
    icon: "🏖️",
    details: [
      "Warden approval only — no mentor approval needed",
      "Available on Sundays and Mondays only",
      "Single day outing — you must return the same day",
      "Freshers are NOT allowed weekend outing for the first 3 months",
    ],
  },
];

const calculators = [
  {
    model: "Casio fx-991 EX",
    tag: "Most Popular",
    tagColor: "bg-primary/10 text-primary border border-primary/20",
    notes: [
      "Fast navigation and intuitive interface",
      "Covers most B.Tech engineering calculations",
      "Good balance of features and price",
      "Widely available at campus stationery shop",
    ],
  },
  {
    model: "Casio fx-991 CW",
    tag: "Latest Model",
    tagColor: "bg-accent/10 text-accent border border-accent/20",
    notes: [
      "Upgraded successor to the 991 EX",
      "More operations and improved display",
      "Slightly costlier than the EX",
      "Future-proof choice for advanced courses",
    ],
  },
  {
    model: "Casio fx-991 ES Plus",
    tag: "Budget Pick",
    tagColor: "bg-muted text-muted-foreground border border-border",
    notes: [
      "Cheaper option — great for budget-conscious students",
      "Slightly slower operation speed",
      "Still widely used across VIT-AP",
      "Handles most exam requirements comfortably",
    ],
  },
];

export default function Survival() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-bg-light px-6 py-10 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2" data-ocid="survival.page_label">
            Survival Guides
          </p>
          <h2 className="text-hero text-foreground mb-4">
            How to Actually Survive VIT-AP
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-6">
            Practical guides on exams, attendance, time management, mentoring,
            outing rules, re-exams, and the mistakes most students only learn
            about the hard way.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-xs px-3 py-1">
              📝 Exam Prep
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              📊 Attendance Tips
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🗓️ Time Management
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🧑‍🏫 Mentoring
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🚪 Outing Rules
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🔁 Re-Exam Process
            </Badge>
          </div>
        </div>
      </section>

      {/* Exam Prep + Attendance */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="survival.exam_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Study Strategy</p>
          <h2 className="text-section mb-6">Exams & Attendance</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <GuideCard
              icon="📝"
              title="Exam Preparation"
              items={[
                "Start revising at least 2 weeks before finals — not the night before",
                "Use PYQs (past year question papers) — many questions repeat",
                "Focus on CAT exams (25 marks each) — easier to score in than finals",
                "Form study groups for difficult subjects",
                "Don't ignore assignments and quizzes — every mark counts",
                "Prioritize understanding over rote memorization for higher grades",
              ]}
            />
            <GuideCard
              icon="📊"
              title="Attendance Management"
              items={[
                "Track attendance weekly on VTOP — don't wait until it's too late",
                "Calculate your 'safe bunk limit' per subject at semester start",
                "75% is the floor — stay above 80% to keep a buffer",
                "If you fall below 75%, approach the faculty proactively",
                "Missing a class affects all students in the slot — coordinate",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Student Mentoring */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="survival.mentoring_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Academic Support</p>
          <h2 className="text-section mb-6">Student Mentoring Program</h2>
          <p className="text-sm text-muted-foreground mb-5">
            Every UG student is assigned a faculty mentor (Proctor) for the
            entire duration of the program. Your Proctor is your primary point
            of contact for academic and personal matters.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <GuideCard
              icon="🧑‍🏫"
              title="What Your Proctor Does"
              items={[
                "Provides academic guidance and monitors your performance",
                "Approves leave applications submitted via VTOP",
                "Monitors your attendance and flags concerns early",
                "Refers you to personal counseling if needed",
                "Approves Semester Abroad Program applications",
                "Handles hostel-related academic concerns",
              ]}
            />
            <GuideCard
              icon="📋"
              title="Leave & Relaxation Rules"
              accent
              items={[
                "Submit leave applications via VTOP at least 48 hours in advance",
                "Always attach supporting documents along with your reason",
                "Up to 10% additional attendance relaxation may be granted for:",
                "  → Hospitalization (with discharge summary)",
                "  → Death of an immediate family member (death certificate required)",
                "  → Sibling's marriage (marriage invitation required)",
                "Documents are mandatory — no documents, no relaxation",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Outing Rules */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="survival.outing_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Hostel Life</p>
          <h2 className="text-section mb-6">Outing Rules</h2>
          <p className="text-sm text-muted-foreground mb-5">
            All outings must be applied through VTOP. Always carry your college
            ID card and the approved outing pass when you leave campus.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {outingRules.map((rule) => (
              <Card key={rule.type} className="card-elevated">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl" aria-hidden="true">
                      {rule.icon}
                    </span>
                    <h3 className="text-subsection">{rule.type}</h3>
                  </div>
                  <ul className="space-y-2">
                    {rule.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <span className="mt-0.5 shrink-0 text-accent">→</span>
                        <span
                          className={
                            detail.startsWith("Freshers are NOT")
                              ? "text-destructive font-medium"
                              : ""
                          }
                        >
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-4 bg-destructive/5 border border-destructive/20 rounded-xl px-5 py-3">
            <p className="text-sm text-foreground">
              <span className="font-semibold text-destructive">
                Freshers note:{" "}
              </span>
              Weekend outings are not permitted for the first 3 months after
              joining. General outings still require both mentor and warden
              approval during this period.
            </p>
          </div>
        </div>
      </section>

      {/* Re-Examination */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="survival.reexam_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Exam Processes</p>
          <h2 className="text-section mb-6">Re-Examination & Paper Seeing</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <GuideCard
              icon="🔁"
              title="Re-Examination (FAT)"
              accent
              items={[
                "Eligible reasons: death of parent or sibling, hospitalization during exam, sibling's marriage",
                "Apply via VTOP → Examinations → Re-Exam Application",
                "Attach required documents: death certificate / hospital discharge / marriage invitation",
                "No email or in-person requests accepted — VTOP only",
                "Re-exam is conducted after the main FAT period ends",
              ]}
            />
            <Card className="card-elevated">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl" aria-hidden="true">
                    📄
                  </span>
                  <h3 className="text-subsection">
                    Paper Seeing & Re-Evaluation
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 shrink-0 text-accent">→</span>
                    <div>
                      <span className="font-semibold text-foreground">
                        Paper Seeing
                      </span>{" "}
                      (view your answer sheet)
                      <br />
                      <span className="text-muted-foreground">
                        Rs. 100 per course — apply via VTOP or CodeTantra
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 shrink-0 text-accent">→</span>
                    <div>
                      <span className="font-semibold text-foreground">
                        Re-Evaluation
                      </span>{" "}
                      (marks remarked)
                      <br />
                      <span className="text-muted-foreground">
                        Rs. 300 per course — apply via VTOP or CodeTantra
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 shrink-0 text-accent">→</span>
                    <span className="text-foreground">
                      Must apply within the stipulated deadline after result
                      declaration
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 shrink-0 text-accent">→</span>
                    <span className="text-foreground">
                      Mark changes (up or down) are reflected in your final
                      grade — be sure before applying
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculator Guide */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="survival.calculator_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Exam Tools</p>
          <h2 className="text-section mb-4">Scientific Calculator Guide</h2>
          <p className="text-sm text-muted-foreground mb-6">
            All three models below are{" "}
            <span className="font-semibold text-foreground">
              allowed in B.Tech and M.Tech exams
            </span>{" "}
            at VIT-AP. Buy from the campus stationery shop or bring one from
            home.
          </p>
          <div
            className="grid md:grid-cols-3 gap-5"
            data-ocid="survival.calculators_list"
          >
            {calculators.map((calc, i) => (
              <Card
                key={calc.model}
                className="card-elevated"
                data-ocid={`survival.calculator.${i + 1}`}
              >
                <CardContent className="p-5">
                  <div className="mb-3">
                    <span
                      className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2 ${calc.tagColor}`}
                    >
                      {calc.tag}
                    </span>
                    <h3 className="text-subsection">{calc.model}</h3>
                  </div>
                  <ul className="space-y-2">
                    {calc.notes.map((note) => (
                      <li
                        key={note}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <span className="mt-0.5 shrink-0 text-accent">→</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Time Management */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="survival.time_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Planning</p>
          <h2 className="text-section mb-6">Time Management</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <GuideCard
              icon="🗓️"
              title="Weekly Planning"
              items={[
                "Plan your week every Sunday — review progress mid-week",
                "Use FFCS to space out heavy subjects across the week",
                "Reserve one day per week for deep, uninterrupted study sessions",
                "Avoid back-to-back heavy courses on the same day if possible",
              ]}
            />
            <GuideCard
              icon="⚡"
              title="Productivity Tips"
              items={[
                "Use free slots between classes — go to the library or self-study room",
                "Batch similar tasks: readings, assignments, revision in one block",
                "Set personal deadlines 2 days before actual submission dates",
                "Use a simple planner or notes app — don't rely on memory alone",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="survival.mistakes_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Learn from Others</p>
          <h2 className="text-section mb-6">Common Mistakes to Avoid</h2>
          <div className="space-y-3" data-ocid="survival.mistakes_list">
            {commonMistakes.map((item, i) => (
              <div
                key={item.mistake}
                className="bg-card border border-border rounded-xl px-5 py-4 shadow-sm flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
                data-ocid={`survival.mistake.${i + 1}`}
              >
                <div className="flex items-center gap-3 sm:w-56 shrink-0">
                  <span className="text-destructive text-lg" aria-hidden="true">
                    ✗
                  </span>
                  <p className="text-sm font-semibold text-foreground font-display">
                    {item.mistake}
                  </p>
                </div>
                <div className="flex items-start gap-2 min-w-0">
                  <span
                    className="text-accent text-lg shrink-0"
                    aria-hidden="true"
                  >
                    →
                  </span>
                  <p className="text-sm text-muted-foreground">{item.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="survival.stats_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Quick Reference</p>
          <h2 className="text-section mb-6">Key Numbers to Remember</h2>
          <div
            className="grid sm:grid-cols-3 gap-4"
            data-ocid="survival.numbers_list"
          >
            {keyStats.map((stat, i) => (
              <div
                key={stat.value}
                className="bg-card border border-border rounded-xl p-4 text-center shadow-sm"
                data-ocid={`survival.stat.${i + 1}`}
              >
                <div className="text-2xl mb-2" aria-hidden="true">
                  {stat.icon}
                </div>
                <p className="text-2xl font-bold text-primary font-display">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section
        className="section-bg-muted px-6 py-8"
        data-ocid="survival.summary_section"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
            <p className="text-label mb-1">Summary</p>
            <p className="text-sm text-foreground">
              Survival at VIT-AP is about knowing the system. Track attendance
              weekly, prepare for exams in advance, stay in touch with your
              Proctor, apply for outings and re-exams through VTOP only, and
              carry a calculator that's exam-approved. Most problems students
              face are avoidable — you just need to know the rules before they
              catch you off guard.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
