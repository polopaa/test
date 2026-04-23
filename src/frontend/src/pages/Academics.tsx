import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layout } from "../components/Layout";

interface BulletListProps {
  items: string[];
  accent?: boolean;
}

function BulletList({ items, accent = false }: BulletListProps) {
  return (
    <ul className="space-y-2 mt-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2 text-sm text-foreground"
        >
          <span
            className={`mt-0.5 shrink-0 font-bold ${accent ? "text-accent" : "text-primary"}`}
          >
            •
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 bg-primary/5 border border-primary/20 rounded-lg px-4 py-3 text-sm text-muted-foreground">
      💡 {children}
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-sm font-semibold text-foreground mt-5 mb-2 uppercase tracking-wide text-primary/80">
      {children}
    </h4>
  );
}

function TableWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto mt-3">
      <table className="w-full text-sm border-collapse">{children}</table>
    </div>
  );
}

function Th({
  children,
  right,
}: { children: React.ReactNode; right?: boolean }) {
  return (
    <th
      className={`py-2 px-3 font-semibold text-muted-foreground bg-muted border-b border-border text-left ${right ? "text-right" : ""}`}
    >
      {children}
    </th>
  );
}

function Td({
  children,
  right,
  mono,
}: { children: React.ReactNode; right?: boolean; mono?: boolean }) {
  return (
    <td
      className={`py-2 px-3 border-b border-border/60 text-foreground ${right ? "text-right" : ""} ${mono ? "font-mono" : ""}`}
    >
      {children}
    </td>
  );
}

// ─── Data ───────────────────────────────────────────────────────────────────

const letterGrades = [
  {
    grade: "S",
    points: "10",
    meaning: "Excellent — Pass",
    variant: "default" as const,
  },
  {
    grade: "A",
    points: "9",
    meaning: "Very Good — Pass",
    variant: "secondary" as const,
  },
  {
    grade: "B",
    points: "8",
    meaning: "Good — Pass",
    variant: "secondary" as const,
  },
  {
    grade: "C",
    points: "7",
    meaning: "Average — Pass",
    variant: "secondary" as const,
  },
  {
    grade: "D",
    points: "6",
    meaning: "Satisfactory",
    variant: "secondary" as const,
  },
  {
    grade: "E",
    points: "5",
    meaning: "Passed (barely)",
    variant: "secondary" as const,
  },
  {
    grade: "F",
    points: "0",
    meaning: "Fail — re-register",
    variant: "destructive" as const,
  },
  {
    grade: "N",
    points: "0",
    meaning: "Incomplete / Debarred",
    variant: "destructive" as const,
  },
  {
    grade: "W",
    points: "—",
    meaning: "Withdrawn (not in CGPA)",
    variant: "outline" as const,
  },
  {
    grade: "U",
    points: "—",
    meaning: "Audit course completed",
    variant: "outline" as const,
  },
  {
    grade: "P",
    points: "—",
    meaning: "Pass-Fail course passed",
    variant: "outline" as const,
  },
];

const relativeGrading = [
  { grade: "S", condition: "Total ≥ μ + 1.5σ  AND  ≥ 90%" },
  { grade: "A", condition: "μ + 0.5σ ≤ Total < μ + 1.5σ" },
  { grade: "B", condition: "μ − 0.5σ ≤ Total < μ + 0.5σ" },
  { grade: "C", condition: "μ − 1.0σ ≤ Total < μ − 0.5σ" },
  { grade: "D", condition: "μ − 1.5σ ≤ Total < μ − 1.0σ" },
  { grade: "E", condition: "μ − 2.0σ ≤ Total < μ − 1.5σ" },
  { grade: "F", condition: "Total < μ − 2.0σ" },
];

const absoluteGrading = [
  { range: "≥ 90", grade: "S" },
  { range: "80–89", grade: "A" },
  { range: "70–79", grade: "B" },
  { range: "60–69", grade: "C" },
  { range: "55–59", grade: "D" },
  { range: "50–54", grade: "E" },
  { range: "< 50", grade: "F" },
];

const ltpcRows = [
  {
    ltpc: "3-0-0-3",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
    example: "Pure theory course",
  },
  {
    ltpc: "3-1-0-4",
    l: 3,
    t: 1,
    p: 0,
    credits: 4,
    example: "Theory + Tutorial",
  },
  { ltpc: "2-0-2-3", l: 2, t: 0, p: 2, credits: 3, example: "Theory + Lab" },
  {
    ltpc: "2-1-2-4",
    l: 2,
    t: 1,
    p: 2,
    credits: 4,
    example: "Theory + Tutorial + Lab",
  },
  { ltpc: "0-0-4-2", l: 0, t: 0, p: 4, credits: 2, example: "Pure lab course" },
];

const courseTypes = [
  {
    code: "FC",
    name: "Foundation Core",
    desc: "Mandatory foundational courses for all students",
  },
  {
    code: "DC",
    name: "Discipline Core",
    desc: "Mandatory for your programme — no substitution allowed",
  },
  {
    code: "DE",
    name: "Discipline Elective",
    desc: "Advanced courses in your own discipline",
  },
  {
    code: "SE",
    name: "Specialization Elective",
    desc: "Courses in your chosen specialization",
  },
  {
    code: "OE",
    name: "Open Elective",
    desc: "From other schools/disciplines — SWAYAM-NPTEL credits count here",
  },
  {
    code: "SEC",
    name: "Skill Enhancement Course",
    desc: "Courses to enhance practical/technical skills",
  },
  {
    code: "AEC",
    name: "Ability Enhancement Course",
    desc: "Courses to develop communication/general abilities",
  },
  {
    code: "—",
    name: "Project / Internship",
    desc: "Final year project + mandatory internship component",
  },
];

const evalRows = [
  {
    label: "CAT-I",
    marks: "15",
    notes: "Closed book, ~50 min. Answer scripts returned to students.",
    color: "bg-primary/8 border-primary/20",
  },
  {
    label: "CAT-II",
    marks: "15",
    notes: "OPEN BOOK — bring any books/notes. 100% HOTs questions.",
    color: "bg-accent/8 border-accent/20",
  },
  {
    label: "Digital Assignments (DA)",
    marks: "30",
    notes: "Min 3 assignments × 10 marks each. Online, graded regularly.",
    color: "bg-muted border-border",
  },
  {
    label: "Total CAM (Internal)",
    marks: "60",
    notes: "Continuous Assessment — no minimum marks required.",
    color: "bg-primary/5 border-primary/30",
  },
  {
    label: "FAT (Final Exam)",
    marks: "40",
    notes: "3 hours, closed book. Conducted centrally by CoE.",
    color: "bg-muted border-border",
  },
  {
    label: "Grand Total",
    marks: "100",
    notes: "—",
    color: "bg-card border-border",
  },
];

const attendanceImpact = [
  {
    pct: "≥ 80%",
    status: "Safe",
    consequence: "No issues",
    color: "text-green-600 dark:text-green-400",
    bg: "bg-green-500/10 border-green-500/25",
  },
  {
    pct: "75–79%",
    status: "Caution",
    consequence: "At risk — one more absence could debar",
    color: "text-yellow-600 dark:text-yellow-400",
    bg: "bg-yellow-500/10 border-yellow-500/25",
  },
  {
    pct: "< 75%",
    status: "Debarred",
    consequence: "Cannot sit for next exam component",
    color: "text-red-600 dark:text-red-400",
    bg: "bg-red-500/10 border-red-500/25",
  },
  {
    pct: "Debarred from FAT",
    status: "N Grade",
    consequence: "Must re-register entire course",
    color: "text-red-700 dark:text-red-300",
    bg: "bg-red-500/15 border-red-500/30",
  },
];

const projectReviews = [
  {
    review: "1st Review (Title Acceptance)",
    weight: "5%",
    when: "Week 1",
    what: "Project title and scope approved",
  },
  {
    review: "2nd Review",
    weight: "40%",
    when: "During CAT-I period",
    what: "Progress, methodology, literature review",
  },
  {
    review: "Draft Report Submission",
    weight: "—",
    when: "10 days before Viva",
    what: "Submit draft report to guide",
  },
  {
    review: "Synopsis Submission",
    weight: "—",
    when: "7 days before Viva",
    what: "Submit synopsis document",
  },
  {
    review: "3rd Review + Viva Voce",
    weight: "50%",
    when: "During FAT period",
    what: "25% report (guide) + 25% viva (external)",
  },
];

const hackathonMarks = [
  { achievement: "Participation only", extra: "+5 marks" },
  { achievement: "Tangible output produced", extra: "+10 marks" },
  { achievement: "Creative/innovative input", extra: "+15 marks" },
  { achievement: "Prize winner", extra: "+20 marks" },
];

const tabs = [
  { id: "ffcs", label: "FFCS", icon: "🗂️" },
  { id: "semester", label: "Semester", icon: "📅" },
  { id: "courses", label: "Courses", icon: "📘" },
  { id: "credits", label: "Credits", icon: "🔢" },
  { id: "registration", label: "Registration", icon: "✏️" },
  { id: "adddrop", label: "Add/Drop", icon: "🔄" },
  { id: "attendance", label: "Attendance", icon: "📋" },
  { id: "evaluation", label: "Evaluation", icon: "🧪" },
  { id: "grading", label: "Grading", icon: "🏅" },
  { id: "backlogs", label: "Backlogs", icon: "⚠️" },
  { id: "project", label: "Project", icon: "🎓" },
  { id: "honours", label: "Honours & Minor", icon: "🌟" },
  { id: "extracredits", label: "Extra Credits", icon: "🚀" },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Academics() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-bg-light px-6 py-10 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2" data-ocid="academics.section_label">
            Academics
          </p>
          <h2 className="text-hero text-foreground mb-3">
            Academic System at VIT-AP
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-4">
            Complete guide to the academic regulations at VIT-AP — from FFCS and
            credit systems to grading, attendance, projects, honours, and extra
            credits. Based on Official Academic Regulations v4.0.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-xs px-3 py-1">
              📊 Relative Grading
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🗂️ FFCS Slot System
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              📝 CAT + FAT Evaluation
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🎓 Honours & Minor
            </Badge>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section
        className="section-bg-muted px-4 py-8"
        data-ocid="academics.tabs_section"
      >
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="ffcs">
            <div className="overflow-x-auto pb-2 mb-6">
              <TabsList className="flex w-max gap-1 h-auto p-1">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="text-xs px-3 py-2 whitespace-nowrap flex items-center gap-1"
                    data-ocid={`academics.tab.${tab.id}`}
                  >
                    <span aria-hidden="true">{tab.icon}</span>
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* ── FFCS ── */}
            <TabsContent value="ffcs" data-ocid="academics.ffcs_panel">
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="text-subsection mb-1">
                    FFCS — Fully Flexible Credit System
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Introduced at VIT in 2008. Students choose their own
                    courses, time slots, and study pace — no fixed class
                    timetable.
                  </p>
                  <BulletList
                    items={[
                      "Register slot-by-slot on VTOP during the announced registration window — each slot is a time block (e.g., A1, B1, C1) spread across the week.",
                      "Theory and Lab are registered separately with different slot codes.",
                      "Two regular semesters per year: Fall (Jun/Jul – Nov) and Winter (Dec/Jan – May).",
                      "Optional semesters: Summer Semester and Weekend Intra Semester — mainly for backlog clearance.",
                      "A Proctor (faculty advisor) is assigned to each student for academic guidance.",
                      "Key benefit: Avoid early morning slots, balance workload, and choose faculty.",
                      "Key responsibility: You are fully accountable for your own registration, attendance, and performance.",
                    ]}
                  />
                  <Note>
                    FFCS gives you freedom — but also full responsibility. Plan
                    your slot preferences and backup options before registration
                    opens. Popular faculty fill up within minutes.
                  </Note>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ── SEMESTER ── */}
            <TabsContent value="semester" data-ocid="academics.semester_panel">
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="text-subsection mb-1">Semester Structure</h3>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {[
                      {
                        name: "Fall Semester",
                        period: "June/July – November",
                        duration: "~18 weeks (15 instructional)",
                        color: "bg-primary/8 border-primary/25",
                      },
                      {
                        name: "Winter Semester",
                        period: "December/January – May",
                        duration: "~18 weeks (15 instructional)",
                        color: "bg-primary/8 border-primary/25",
                      },
                      {
                        name: "Summer Semester",
                        period: "May – June (short)",
                        duration: "Optional — backlog clearance",
                        color: "bg-accent/8 border-accent/25",
                      },
                      {
                        name: "Weekend Intra Semester",
                        period: "Weekend classes",
                        duration: "Optional — backlog clearance",
                        color: "bg-accent/8 border-accent/25",
                      },
                    ].map((s) => (
                      <div
                        key={s.name}
                        className={`rounded-lg border p-3 text-sm ${s.color}`}
                      >
                        <p className="font-semibold text-foreground">
                          {s.name}
                        </p>
                        <p className="text-muted-foreground mt-0.5">
                          {s.period}
                        </p>
                        <p className="text-muted-foreground text-xs mt-0.5">
                          {s.duration}
                        </p>
                      </div>
                    ))}
                  </div>
                  <SectionHeading>
                    Semester Timeline (per semester)
                  </SectionHeading>
                  <ol className="space-y-1.5 mt-2">
                    {[
                      "Registration Window opens on VTOP",
                      "Classes begin (instructional weeks start)",
                      "CAT-I — answer scripts returned to students",
                      "CAT-II — open book exam",
                      "FAT (Final Assessment Test) — conducted by CoE centrally",
                    ].map((step, i) => (
                      <li
                        key={step}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center">
                          {i + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                  <Note>
                    Each semester has exactly 15 instructional weeks — used to
                    calculate credit hours. CAT-II is open book. Keep track of
                    the academic calendar on VTOP.
                  </Note>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ── COURSES ── */}
            <TabsContent value="courses" data-ocid="academics.courses_panel">
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="text-subsection mb-1">Course Types</h3>
                  <TableWrapper>
                    <thead>
                      <tr>
                        <Th>Code</Th>
                        <Th>Full Name</Th>
                        <Th>What It Means</Th>
                      </tr>
                    </thead>
                    <tbody>
                      {courseTypes.map((c) => (
                        <tr
                          key={c.code}
                          className="hover:bg-muted/40 transition-colors"
                        >
                          <Td>
                            <Badge
                              variant="outline"
                              className="font-mono text-xs"
                            >
                              {c.code}
                            </Badge>
                          </Td>
                          <Td>{c.name}</Td>
                          <Td>{c.desc}</Td>
                        </tr>
                      ))}
                    </tbody>
                  </TableWrapper>
                  <SectionHeading>Online & Audit Courses</SectionHeading>
                  <BulletList
                    items={[
                      "SWAYAM-NPTEL online courses can earn Open Elective (OE) credits — must get prior approval before starting.",
                      "Audit courses: take any course to learn without affecting your CGPA. Gets U grade (pass) or W grade (fail). Requires CGPA ≥ 8.0.",
                      "Maximum 2 audit courses for B.Tech students (1 for other programmes). Limited to 1 audit per semester.",
                      "Must maintain 75% attendance and appear in all assessments even for audit courses.",
                    ]}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            {/* ── CREDITS ── */}
            <TabsContent value="credits" data-ocid="academics.credits_panel">
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="text-subsection mb-1">
                    Credits — LTPC System
                  </h3>
                  <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      {
                        letter: "L",
                        title: "Lecture",
                        detail: "1L = 1 credit · 50 min/class",
                      },
                      {
                        letter: "T",
                        title: "Tutorial",
                        detail: "1T = 1 credit · 50 min/session",
                      },
                      {
                        letter: "P",
                        title: "Practical",
                        detail: "2P = 1 credit · 100 min/lab (2 slots)",
                      },
                      {
                        letter: "C",
                        title: "Credits",
                        detail: "C = L + T + P÷2",
                      },
                    ].map((item) => (
                      <div
                        key={item.letter}
                        className="bg-primary/8 border border-primary/20 rounded-lg p-3 text-center"
                      >
                        <p className="text-xl font-bold text-primary font-mono">
                          {item.letter}
                        </p>
                        <p className="text-xs font-semibold text-foreground mt-0.5">
                          {item.title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {item.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                  <SectionHeading>LTPC Examples</SectionHeading>
                  <TableWrapper>
                    <thead>
                      <tr>
                        <Th>LTPC</Th>
                        <Th right>L</Th>
                        <Th right>T</Th>
                        <Th right>P</Th>
                        <Th right>Credits</Th>
                        <Th>Example</Th>
                      </tr>
                    </thead>
                    <tbody>
                      {ltpcRows.map((r) => (
                        <tr
                          key={r.ltpc}
                          className="hover:bg-muted/40 transition-colors"
                        >
                          <Td>
                            <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">
                              {r.ltpc}
                            </code>
                          </Td>
                          <Td right mono>
                            {r.l}
                          </Td>
                          <Td right mono>
                            {r.t}
                          </Td>
                          <Td right mono>
                            {r.p}
                          </Td>
                          <Td right>
                            <Badge variant="secondary" className="font-mono">
                              {r.credits}
                            </Badge>
                          </Td>
                          <Td>{r.example}</Td>
                        </tr>
                      ))}
                    </tbody>
                  </TableWrapper>
                  <BulletList
                    items={[
                      "1 credit = 15 lecture/tutorial hours per semester OR 30 lab hours per semester.",
                      "CGPA calculation uses credits as weights — higher-credit subjects matter more.",
                      "Each semester has exactly 15 instructional weeks.",
                    ]}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            {/* ── REGISTRATION ── */}
            <TabsContent
              value="registration"
              data-ocid="academics.registration_panel"
            >
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="text-subsection mb-1">Course Registration</h3>
                  <SectionHeading>Step-by-Step Process</SectionHeading>
                  <ol className="space-y-2 mt-2">
                    {[
                      "Login to VTOP → Academics → Course Registration",
                      "Select Semester → choose theory slots first, then lab slots",
                      "Minimum: 16 credits per regular semester",
                      "Maximum: 27 credits per regular semester (average load ≈ 23 credits)",
                      "If CGPA < 4.0: maximum 16 credits allowed",
                      "Late registration: allowed up to 10 calendar days after semester start, with Dean of Academics approval + late fee",
                    ].map((step, i) => (
                      <li
                        key={step}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center">
                          {i + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                  <SectionHeading>Add/Drop Window</SectionHeading>
                  <BulletList
                    items={[
                      "First 3 instructional days — full refund for dropped courses. No transcript record.",
                      "Slot clashes are NOT allowed. The system will reject clashing registrations.",
                    ]}
                  />
                  <SectionHeading>Course Withdrawal</SectionHeading>
                  <BulletList
                    items={[
                      "Available after CAT-I results are announced.",
                      "Withdrawn courses get W grade on transcript — NOT counted in CGPA.",
                      "Minimum 16 credits must remain after withdrawal (final-year students are exempt).",
                    ]}
                  />
                  <Note>
                    Plan your slots carefully and always have 2–3 backup slot
                    preferences ready. Popular faculty fill up within minutes of
                    registration opening.
                  </Note>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ── ADD/DROP ── */}
            <TabsContent value="adddrop" data-ocid="academics.adddrop_panel">
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="text-subsection mb-1">
                    Add / Drop / Withdrawal
                  </h3>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    <div className="bg-green-500/10 border border-green-500/25 rounded-lg p-4 text-sm">
                      <p className="font-semibold text-foreground mb-1">
                        ✅ Add/Drop Window
                      </p>
                      <p className="text-muted-foreground text-xs mt-1">
                        First 3 instructional days
                      </p>
                      <ul className="mt-2 space-y-1 text-xs text-foreground">
                        <li>• Full fee refund for dropped courses</li>
                        <li>• No record on transcript</li>
                        <li>• Can add new courses if slots are available</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-500/10 border border-yellow-500/25 rounded-lg p-4 text-sm">
                      <p className="font-semibold text-foreground mb-1">
                        ⚠️ Withdrawal
                      </p>
                      <p className="text-muted-foreground text-xs mt-1">
                        After CAT-I results
                      </p>
                      <ul className="mt-2 space-y-1 text-xs text-foreground">
                        <li>• No fee refund</li>
                        <li>• W grade appears on transcript</li>
                        <li>• W grade NOT counted in CGPA</li>
                        <li>• Min 16 credits must remain</li>
                      </ul>
                    </div>
                    <div className="bg-red-500/10 border border-red-500/25 rounded-lg p-4 text-sm">
                      <p className="font-semibold text-foreground mb-1">
                        ⛔ After Deadline
                      </p>
                      <p className="text-muted-foreground text-xs mt-1">
                        No options available
                      </p>
                      <ul className="mt-2 space-y-1 text-xs text-foreground">
                        <li>• Cannot drop or withdraw</li>
                        <li>• Must complete the course</li>
                        <li>• Failing = F grade + CGPA impact</li>
                      </ul>
                    </div>
                  </div>
                  <Note>
                    Withdrawal is a better choice than getting an F grade. If
                    you're struggling with a course after CAT-I, consider
                    withdrawing instead of failing.
                  </Note>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ── ATTENDANCE ── */}
            <TabsContent
              value="attendance"
              data-ocid="academics.attendance_panel"
            >
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="text-subsection mb-1">Attendance System</h3>
                  <BulletList
                    items={[
                      "Required: 75% per course — each course tracked separately.",
                      "The 25% absence allowance covers ALL reasons: medical, personal, events, NCC/NSS/Sports Day, everything. No separate medical leave.",
                      "Below 75% → Debarred from the NEXT exam component (CAT or FAT).",
                      "Debarred from FAT → Awarded N grade → Must re-register the entire course.",
                      "Attendance is calculated from your date of registration to one day before each exam.",
                      "Students with CGPA ≥ 9.0 and zero backlogs are exempt from attendance rules (not applicable in Summer/Weekend semesters).",
                    ]}
                  />
                  <SectionHeading>Attendance Impact Table</SectionHeading>
                  <div className="mt-2 space-y-2">
                    {attendanceImpact.map((row) => (
                      <div
                        key={row.pct}
                        className={`flex flex-wrap items-center gap-3 px-4 py-3 rounded-lg border ${row.bg}`}
                      >
                        <code
                          className={`font-mono text-sm font-bold w-32 shrink-0 ${row.color}`}
                        >
                          {row.pct}
                        </code>
                        <Badge
                          variant="outline"
                          className={`text-xs ${row.color} border-current`}
                        >
                          {row.status}
                        </Badge>
                        <span className="text-sm text-foreground">
                          {row.consequence}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Note>
                    Track attendance weekly on VTOP — don't wait until you're
                    already below 75%. The 25% buffer is small; use it wisely.
                  </Note>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ── EVALUATION ── */}
            <TabsContent
              value="evaluation"
              data-ocid="academics.evaluation_panel"
            >
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="text-subsection mb-1">
                    Evaluation System (Exam Pattern)
                  </h3>
                  <SectionHeading>Assessment Breakdown</SectionHeading>
                  <div className="mt-2 space-y-2">
                    {evalRows.map((row) => (
                      <div
                        key={row.label}
                        className={`flex flex-wrap items-center gap-3 px-4 py-3 rounded-lg border ${row.color}`}
                      >
                        <span
                          className={`text-sm font-semibold text-foreground min-w-0 flex-1 ${row.label === "Grand Total" || row.label === "Total CAM (Internal)" ? "font-bold" : ""}`}
                        >
                          {row.label}
                        </span>
                        <Badge
                          variant={
                            row.label === "Grand Total" ? "default" : "outline"
                          }
                          className="font-mono shrink-0"
                        >
                          {row.marks} marks
                        </Badge>
                        <span className="text-xs text-muted-foreground w-full sm:w-auto sm:flex-1">
                          {row.notes}
                        </span>
                      </div>
                    ))}
                  </div>
                  <SectionHeading>Important Notes</SectionHeading>
                  <BulletList
                    items={[
                      "80% of questions in all CAT/FAT papers are HOTs (Higher Order Thinking — application, analysis, evaluation).",
                      "CAT-II is completely OPEN BOOK — you can bring textbooks, class notes, anything printed.",
                      "CAT-I answer scripts are returned to students for review.",
                      "FAT re-evaluation available on request within the specified deadline + fee.",
                      "No minimum marks required for continuous assessment (CAM) alone.",
                    ]}
                  />
                  <SectionHeading>Passing Criteria</SectionHeading>
                  <BulletList
                    items={[
                      "Theory courses: based on relative grading band (no fixed minimum total required).",
                      "Lab/Project courses: minimum 50% in the lab/project component.",
                      "Embedded courses (theory + lab together): min 50% in lab component AND min 40% in FAT (theory), plus min 50% overall grand total.",
                    ]}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            {/* ── GRADING ── */}
            <TabsContent value="grading" data-ocid="academics.grading_panel">
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="text-subsection mb-2">Grading System</h3>
                  <SectionHeading>Letter Grades & Grade Points</SectionHeading>
                  <TableWrapper>
                    <thead>
                      <tr>
                        <Th>Grade</Th>
                        <Th right>Points</Th>
                        <Th>Meaning</Th>
                      </tr>
                    </thead>
                    <tbody>
                      {letterGrades.map((row) => (
                        <tr
                          key={row.grade}
                          className="hover:bg-muted/40 transition-colors"
                        >
                          <Td>
                            <Badge
                              variant={row.variant}
                              className="font-mono w-8 justify-center"
                            >
                              {row.grade}
                            </Badge>
                          </Td>
                          <Td right mono>
                            {row.points}
                          </Td>
                          <Td>{row.meaning}</Td>
                        </tr>
                      ))}
                    </tbody>
                  </TableWrapper>

                  <SectionHeading>How Grades Are Decided</SectionHeading>
                  <p className="text-xs text-muted-foreground mb-2">
                    Used for theory courses with class size &gt; 10. Based on
                    class mean (μ) and standard deviation (σ).
                  </p>
                  <div className="mt-1 grid gap-3 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-2">
                        Relative Grading (most theory courses)
                      </p>
                      <TableWrapper>
                        <thead>
                          <tr>
                            <Th>Grade</Th>
                            <Th>Condition</Th>
                          </tr>
                        </thead>
                        <tbody>
                          {relativeGrading.map((r) => (
                            <tr
                              key={r.grade}
                              className="hover:bg-muted/40 transition-colors"
                            >
                              <Td>
                                <Badge
                                  variant={
                                    r.grade === "F"
                                      ? "destructive"
                                      : r.grade === "S"
                                        ? "default"
                                        : "secondary"
                                  }
                                  className="font-mono w-8 justify-center"
                                >
                                  {r.grade}
                                </Badge>
                              </Td>
                              <Td>
                                <code className="text-xs font-mono">
                                  {r.condition}
                                </code>
                              </Td>
                            </tr>
                          ))}
                        </tbody>
                      </TableWrapper>
                      <p className="text-xs text-muted-foreground mt-1">
                        If class size ≤ 10, absolute grading is used instead.
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-2">
                        Absolute Grading (labs, projects, small classes)
                      </p>
                      <TableWrapper>
                        <thead>
                          <tr>
                            <Th>Marks Range</Th>
                            <Th right>Grade</Th>
                          </tr>
                        </thead>
                        <tbody>
                          {absoluteGrading.map((r) => (
                            <tr
                              key={r.range}
                              className="hover:bg-muted/40 transition-colors"
                            >
                              <Td mono>{r.range}</Td>
                              <Td right>
                                <Badge
                                  variant={
                                    r.grade === "F"
                                      ? "destructive"
                                      : r.grade === "S"
                                        ? "default"
                                        : "secondary"
                                  }
                                  className="font-mono w-8 justify-center"
                                >
                                  {r.grade}
                                </Badge>
                              </Td>
                            </tr>
                          ))}
                        </tbody>
                      </TableWrapper>
                    </div>
                  </div>

                  <SectionHeading>CGPA Calculation</SectionHeading>
                  <div className="bg-muted rounded-lg px-4 py-3 font-mono text-sm mt-2">
                    <span className="text-muted-foreground">Formula: </span>
                    <span className="text-foreground font-semibold">
                      CGPA = Σ(Credits × Grade Points) ÷ Σ(Total Credits)
                    </span>
                  </div>
                  <BulletList
                    items={[
                      "Includes ALL semesters, ALL courses — including F grades.",
                      "Percentage equivalent = CGPA × 10  (e.g., CGPA 8.75 = 87.5%)",
                      "Minor, Honours, Audit (U grade), and Pass-Fail (P grade) courses are NOT counted in CGPA.",
                      "Programme rank is based on CGPA only.",
                    ]}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            {/* ── BACKLOGS ── */}
            <TabsContent value="backlogs" data-ocid="academics.backlogs_panel">
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="text-subsection mb-1">
                    Backlogs & Re-registration
                  </h3>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <div className="bg-red-500/10 border border-red-500/25 rounded-lg p-4 text-sm">
                      <p className="font-semibold text-foreground mb-2">
                        ❌ F Grade — Failed
                      </p>
                      <ul className="space-y-1 text-xs text-foreground">
                        <li>• Failed the course overall</li>
                        <li>• Must re-register the entire course</li>
                        <li>
                          • Available in Fall / Winter / Summer / Weekend
                          semesters
                        </li>
                        <li>• Re-registration fee applies</li>
                      </ul>
                    </div>
                    <div className="bg-orange-500/10 border border-orange-500/25 rounded-lg p-4 text-sm">
                      <p className="font-semibold text-foreground mb-2">
                        ⚠️ N Grade — Incomplete
                      </p>
                      <ul className="space-y-1 text-xs text-foreground">
                        <li>
                          • Debarred from exam / absent in FAT / malpractice
                        </li>
                        <li>• Can re-register only the failed component</li>
                        <li>• Not required to redo the full course</li>
                        <li>• Re-registration fee applies</li>
                      </ul>
                    </div>
                  </div>
                  <SectionHeading>
                    Arrear Exam (After Final Semester)
                  </SectionHeading>
                  <BulletList
                    items={[
                      "After your final semester, remaining backlogs can be cleared via a special Arrear Exam.",
                      "Arrear Exam is full-course only — no component-based option.",
                      "Applicable for both F grade and N grade arrears.",
                    ]}
                  />
                  <SectionHeading>Grade Improvement</SectionHeading>
                  <BulletList
                    accent
                    items={[
                      "You can re-register a passed course once to improve the grade.",
                      "Limited to 1 improvement per semester (graduating students can do more).",
                      "Extra fee applies for grade improvement registration.",
                      "The better grade (old or new) is considered — your CGPA will not drop.",
                    ]}
                  />
                  <SectionHeading>Malpractice Consequences</SectionHeading>
                  <div className="mt-2 grid gap-3 sm:grid-cols-2">
                    <div className="bg-destructive/10 border border-destructive/25 rounded-lg p-3 text-xs">
                      <p className="font-semibold text-foreground mb-1">
                        📝 CAT Malpractice
                      </p>
                      <p className="text-muted-foreground">
                        Zero marks in that CAT for ALL subjects registered that
                        semester.
                      </p>
                    </div>
                    <div className="bg-destructive/15 border border-destructive/30 rounded-lg p-3 text-xs">
                      <p className="font-semibold text-foreground mb-1">
                        📋 FAT Malpractice
                      </p>
                      <p className="text-muted-foreground">
                        N grade in ALL courses registered that semester.
                      </p>
                    </div>
                  </div>
                  <Note>
                    Many placement companies filter out students with active
                    backlogs. Clear them as early as possible — use
                    Summer/Weekend semesters if needed.
                  </Note>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ── PROJECT ── */}
            <TabsContent value="project" data-ocid="academics.project_panel">
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="text-subsection mb-1">
                    Project Evaluation Timeline
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Final year project is evaluated across multiple reviews
                    throughout the semester. Missing any review significantly
                    impacts your grade.
                  </p>
                  <TableWrapper>
                    <thead>
                      <tr>
                        <Th>Review</Th>
                        <Th>Weight</Th>
                        <Th>When</Th>
                        <Th>What Is Evaluated</Th>
                      </tr>
                    </thead>
                    <tbody>
                      {projectReviews.map((r) => (
                        <tr
                          key={r.review}
                          className="hover:bg-muted/40 transition-colors"
                        >
                          <Td>
                            <span className="font-medium">{r.review}</span>
                          </Td>
                          <Td>
                            {r.weight !== "—" ? (
                              <Badge variant="secondary" className="font-mono">
                                {r.weight}
                              </Badge>
                            ) : (
                              <span className="text-muted-foreground text-xs">
                                Mandatory
                              </span>
                            )}
                          </Td>
                          <Td>
                            <code className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded">
                              {r.when}
                            </code>
                          </Td>
                          <Td>{r.what}</Td>
                        </tr>
                      ))}
                    </tbody>
                  </TableWrapper>
                  <SectionHeading>Key Tips</SectionHeading>
                  <BulletList
                    items={[
                      "Title and scope must be approved in Week 1 — don't delay the first review.",
                      "Draft report must be submitted to your guide at least 10 days before the Viva.",
                      "Synopsis must be submitted 7 days before Viva.",
                      "3rd Review: guide evaluates your report (25%) and an external examiner conducts the Viva (25%).",
                      "Keep your guide updated regularly — don't surprise them with your progress at reviews.",
                    ]}
                  />
                  <Note>
                    Submit all project documents on time. Late submissions can
                    result in grade deduction or rejection by the evaluation
                    committee.
                  </Note>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ── HONOURS & MINOR ── */}
            <TabsContent value="honours" data-ocid="academics.honours_panel">
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="text-subsection mb-1">
                    Honours & Minor Programmes
                  </h3>
                  <div className="mt-3 grid gap-4 sm:grid-cols-2">
                    <div className="border border-primary/25 bg-primary/5 rounded-xl p-4">
                      <p className="font-semibold text-foreground mb-2">
                        🏆 Honours Programme
                      </p>
                      <ul className="space-y-1.5 text-xs text-foreground">
                        <li className="flex items-start gap-1.5">
                          <span className="text-primary mt-0.5">•</span>Register
                          18+ credits in ADVANCED courses within your own
                          discipline (above normal curriculum)
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="text-primary mt-0.5">•</span>Minimum
                          CGPA of 7.50 in honours courses
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="text-primary mt-0.5">•</span>Eligible
                          from 3rd semester onwards
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="text-primary mt-0.5">•</span>
                          Mentioned on your degree certificate
                        </li>
                      </ul>
                    </div>
                    <div className="border border-accent/25 bg-accent/5 rounded-xl p-4">
                      <p className="font-semibold text-foreground mb-2">
                        📚 Minor Programme
                      </p>
                      <ul className="space-y-1.5 text-xs text-foreground">
                        <li className="flex items-start gap-1.5">
                          <span className="text-accent mt-0.5">•</span>Register
                          18+ credits in courses from a DIFFERENT discipline
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="text-accent mt-0.5">•</span>Minimum
                          CGPA of 7.50 in minor courses
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="text-accent mt-0.5">•</span>Eligible
                          from 3rd semester onwards
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="text-accent mt-0.5">•</span>Mentioned
                          on your degree certificate
                        </li>
                      </ul>
                    </div>
                  </div>

                  <SectionHeading>Honours Club</SectionHeading>
                  <BulletList
                    items={[
                      "Eligibility: CGPA ≥ 9.25, zero F grades ever, never debarred from any exam.",
                      "Benefits: Preference for international conferences, Certificate of Merit, cash award/scholarship.",
                    ]}
                  />

                  <SectionHeading>Semester Abroad Program (SAP)</SectionHeading>
                  <BulletList
                    items={[
                      "Eligible in semesters 6–8 (B.Tech) with CGPA ≥ 7.0 and no current backlogs.",
                      "Duration: 1–2 semesters (4–10 months) at a partner university.",
                      "Must be at a partner university OR a Top 500 QS/THE/Shanghai-ranked university.",
                      "Max 21 credits can be transferred — only DE (Discipline Elective) and OE (Open Elective) courses.",
                    ]}
                  />

                  <SectionHeading>Programme Time Limits</SectionHeading>
                  <div className="mt-2 grid gap-2 sm:grid-cols-3">
                    {[
                      {
                        label: "Minimum Duration",
                        value: "4 years",
                        color: "bg-muted border-border",
                      },
                      {
                        label: "Maximum Duration",
                        value: "7 years (4 + 3)",
                        color: "bg-yellow-500/10 border-yellow-500/25",
                      },
                      {
                        label: "Break of Study",
                        value: "Max 1 year",
                        color: "bg-primary/8 border-primary/25",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className={`rounded-lg border p-3 text-center ${item.color}`}
                      >
                        <p className="text-lg font-bold text-foreground font-mono">
                          {item.value}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <Note>
                    After 7 years, studentship is automatically cancelled. Break
                    of Study (medical/accident) allowed for max 1 year — extends
                    the time limit by that duration.
                  </Note>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ── EXTRA CREDITS ── */}
            <TabsContent
              value="extracredits"
              data-ocid="academics.extracredits_panel"
            >
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="text-subsection mb-1">
                    Extra Credits & Bonus Marks
                  </h3>

                  <SectionHeading>
                    Hackathon / Makeathon Extra Marks
                  </SectionHeading>
                  <p className="text-sm text-muted-foreground mb-2">
                    Participate in approved Hackathons or Makeathons (minimum
                    24-hour duration) to earn extra marks added to your CAM
                    (internal marks) for 1 course per semester. Total internal
                    marks capped at 60.
                  </p>
                  <TableWrapper>
                    <thead>
                      <tr>
                        <Th>Achievement</Th>
                        <Th right>Extra Marks</Th>
                      </tr>
                    </thead>
                    <tbody>
                      {hackathonMarks.map((r) => (
                        <tr
                          key={r.achievement}
                          className="hover:bg-muted/40 transition-colors"
                        >
                          <Td>{r.achievement}</Td>
                          <Td right>
                            <Badge
                              variant="secondary"
                              className="font-mono text-green-600 dark:text-green-400"
                            >
                              {r.extra}
                            </Badge>
                          </Td>
                        </tr>
                      ))}
                    </tbody>
                  </TableWrapper>

                  <SectionHeading>SWAYAM-NPTEL Online Courses</SectionHeading>
                  <BulletList
                    items={[
                      "Complete approved NPTEL online courses to earn Open Elective (OE) credits.",
                      "Must get prior approval from your department BEFORE starting the course.",
                      "Grade from NPTEL is mapped to the equivalent VIT grade.",
                      "Check the list of approved NPTEL courses on VTOP before enrolling.",
                    ]}
                  />

                  <SectionHeading>Audit Courses</SectionHeading>
                  <div className="mt-2 grid gap-3 sm:grid-cols-2">
                    <div>
                      <BulletList
                        items={[
                          "Take any course 'just to learn' without affecting your CGPA.",
                          "Gets U grade (pass) or W grade (fail/withdrawn) — not in CGPA.",
                          "Must maintain 75% attendance and appear in all assessments.",
                          "No extra fee for audit courses.",
                        ]}
                      />
                    </div>
                    <div>
                      <BulletList
                        accent
                        items={[
                          "Requires CGPA ≥ 8.0 to be eligible.",
                          "Maximum 2 audit courses for B.Tech (1 for other programmes).",
                          "Limited to 1 audit course per semester.",
                          "Not counted in CGPA calculations.",
                        ]}
                      />
                    </div>
                  </div>
                  <Note>
                    Hackathon marks are only added to approved events — confirm
                    with your faculty or VTOP before participating to ensure it
                    qualifies.
                  </Note>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Summary */}
      <section
        className="section-bg-light px-6 py-8"
        data-ocid="academics.summary_section"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
            <p className="text-label mb-1">Summary</p>
            <p className="text-sm text-foreground">
              VIT-AP uses FFCS (flexible slot-based registration), LTPC credit
              system, and relative grading for theory courses. Maintain 75%+
              attendance per course, understand CAT-I / CAT-II / FAT weights,
              clear any F or N grades quickly, and explore Honours/Minor and
              SWAYAM-NPTEL opportunities to boost your profile. All based on
              Academic Regulations v4.0.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
