import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Layout } from "../components/Layout";

interface FaqItem {
  q: string;
  a: string;
  bullets?: string[];
}

interface FaqCategory {
  id: string;
  icon: string;
  label: string;
  items: FaqItem[];
}

const faqData: FaqCategory[] = [
  {
    id: "academics",
    icon: "📚",
    label: "Academics",
    items: [
      {
        q: "What is FFCS?",
        a: "FFCS (Fully Flexible Credit System) lets you choose your own courses, time slots, and faculty each semester via VTOP. There is no fixed timetable — you build your own schedule during the registration window.",
      },
      {
        q: "What is the minimum and maximum credit load per semester?",
        a: "Credit limits per regular semester:",
        bullets: [
          "Minimum: 16 credits",
          "Maximum: 27 credits",
          "Average recommended load: ~23 credits",
          "If your CGPA is below 4.0, you are capped at a maximum of 16 credits",
        ],
      },
      {
        q: "What is the LTPC system?",
        a: "LTPC stands for Lecture–Tutorial–Practical–Credits.",
        bullets: [
          "L (Lecture) = 1 credit per hour/week",
          "T (Tutorial) = 1 credit per hour/week",
          "P (Practical) = 1 credit per 2 hours/week",
          "Total Credits (C) = L + T + P÷2",
          "Example: A 2-1-2-4 course = 2L + 1T + 1 lab unit = 4 credits",
        ],
      },
      {
        q: "What types of courses do I have to take?",
        a: "Courses are classified into several categories:",
        bullets: [
          "Foundation Core (FC) — mandatory for all students",
          "Discipline Core (DC) — mandatory for your programme",
          "Discipline Elective (DE) & Specialization Elective (SE) — advanced study in your field",
          "Open Elective (OE) — from other schools/departments",
          "Skill Enhancement Course (SEC) & Ability Enhancement Course (AEC)",
          "Project / Internship — in later semesters",
        ],
      },
      {
        q: "What is the Add/Drop and Course Withdrawal process?",
        a: "There are two separate processes:",
        bullets: [
          "Add/Drop: Within the first 3 instructional days — full fee refund for dropped courses",
          "Course Withdrawal: Available after CAT-I results are announced",
          "Withdrawn courses show as 'W' on transcript and do NOT affect CGPA",
          "After withdrawal, you must still hold at least 16 credits (final year students are exempt)",
        ],
      },
      {
        q: "What is the minimum attendance required?",
        a: "75% per course is mandatory. Key points:",
        bullets: [
          "The 25% absence allowance covers ALL absences — medical, personal, NCC/NSS, events, everything",
          "There is no separate 'medical leave' quota",
          "Dropping below 75% = debarred from the next exam component",
          "Debarment leads to an automatic F/N grade",
        ],
      },
      {
        q: "Can I improve a grade in a course I already passed?",
        a: "Yes — VIT-AP allows grade improvement re-registration:",
        bullets: [
          "You can re-register a passed course once to improve the grade",
          "Limited to 1 course per semester (graduating students may do more)",
          "An extra fee applies",
          "The new grade replaces the old one on your transcript",
        ],
      },
      {
        q: "What are Minor and Honours programmes?",
        a: "Both are optional achievements you can pursue from 3rd semester onwards:",
        bullets: [
          "Minor: 18+ credits in a different discipline, minimum 7.50 CGPA in those courses — noted on degree certificate",
          "Honours: 18+ credits of advanced courses in your own discipline, minimum 7.50 CGPA — noted on degree certificate",
          "Both require consistent performance and separate registration on VTOP",
        ],
      },
      {
        q: "What is the maximum time limit to complete B.Tech?",
        a: "B.Tech duration rules:",
        bullets: [
          "Minimum: 4 years",
          "Maximum: 7 years (4 + 3 extension)",
          "Studentship is automatically cancelled after 7 years",
          "Break of Study: Max 1 year allowed (medical/accident reasons only) — extends the time limit",
        ],
      },
      {
        q: "What happens if I am caught in malpractice?",
        a: "Malpractice has severe consequences that apply to ALL courses that semester, not just the one you were caught in:",
        bullets: [
          "CAT malpractice → Zero marks in that CAT for ALL courses registered that semester",
          "FAT malpractice → N grade in ALL courses registered that semester",
          "You can clear these by re-registering the affected courses in future semesters",
        ],
      },
    ],
  },
  {
    id: "exams",
    icon: "📝",
    label: "Exams & Grades",
    items: [
      {
        q: "How is my final mark calculated?",
        a: "Mark breakdown per course (total = 100):",
        bullets: [
          "CAT-I: 15 marks (out of 50, converted to 15)",
          "CAT-II: 15 marks (out of 50, converted to 15) — open book",
          "Digital Assignments (DA): 30 marks (min. 3 assignments × 10 marks each)",
          "Total Internal (CAM): 60 marks",
          "FAT (Final Assessment Test): 40 marks (out of 100, converted to 40)",
          "Grand Total: 100 marks",
        ],
      },
      {
        q: "What is CAT-II open book — what can I bring?",
        a: "CAT-II is fully open book. Rules:",
        bullets: [
          "Allowed: printed books, handwritten notes, printed notes, any physical material",
          "Not allowed: electronic devices, phones, laptops",
          "100% of questions are Higher Order Thinking (HOTs) — application, analysis, synthesis",
          "Simply copying from a book won't help — conceptual understanding is essential",
        ],
      },
      {
        q: "What is the grading system?",
        a: "VIT-AP uses a 10-point letter grade system:",
        bullets: [
          "S = 10 points (Outstanding)",
          "A = 9 points",
          "B = 8 points",
          "C = 7 points",
          "D = 6 points",
          "E = 5 points (Minimum pass)",
          "F = 0 points (Fail — re-register required)",
          "N = 0 points (Incomplete — debarred/absent/malpractice)",
          "W = Withdrawn (not counted in CGPA)",
          "Percentage equivalent: CGPA × 10",
        ],
      },
      {
        q: "What is relative grading and how does it work?",
        a: "For theory courses with more than 10 students, grades are assigned relative to class performance using mean (μ) and standard deviation (σ):",
        bullets: [
          "S: Total ≥ μ+1.5σ AND ≥ 90%",
          "A: μ+0.5σ to μ+1.5σ",
          "B: μ−0.5σ to μ+0.5σ",
          "C: μ−1.0σ to μ−0.5σ",
          "D: μ−1.5σ to μ−1.0σ",
          "E: μ−2.0σ to μ−1.5σ",
          "Labs, projects, and small classes (≤10 students) use absolute grading: S≥90, A≥80, B≥70, C≥60, D≥55, E≥50",
        ],
      },
      {
        q: "What is a passing grade?",
        a: "Passing conditions differ by course type:",
        bullets: [
          "Theory courses: Any grade E(5) to S(10) is a pass — no fixed minimum total due to relative grading",
          "Lab/Project courses: Must score ≥ 50% in the lab/project component",
          "Embedded courses (theory + lab): ≥ 50% in lab component AND ≥ 40% in FAT AND ≥ 50% overall",
        ],
      },
      {
        q: "What is the difference between F grade and N grade?",
        a: "Both show as failure but have different causes and resolutions:",
        bullets: [
          "F grade: Failed the course overall — must re-register the entire course",
          "N grade: Incomplete — caused by debarment from exam, absence in FAT, or malpractice",
          "For N, some cases allow re-registering only the failed component; otherwise full course re-registration is needed",
        ],
      },
      {
        q: "Can I get my FAT paper re-evaluated?",
        a: "Yes. FAT re-evaluation is available:",
        bullets: [
          "Submit a re-evaluation request within the specified window after results are published",
          "A fee applies per paper",
          "Re-evaluation is done by a separate faculty member",
        ],
      },
      {
        q: "Are F grades included in CGPA?",
        a: "Yes. F grades (0 grade points) are included in CGPA and significantly pull it down. Courses NOT counted in CGPA:",
        bullets: [
          "Minor programme courses",
          "Honours programme courses",
          "Audit courses (U grade)",
          "Pass/Fail courses (P grade)",
        ],
      },
      {
        q: "What is the Honours Club?",
        a: "The Honours Club recognizes top-performing students. Eligibility:",
        bullets: [
          "CGPA ≥ 9.25",
          "Zero F grades ever",
          "Never debarred from any exam",
          "Benefits: preference for international conference representation, Certificate of Merit, cash award/scholarship",
        ],
      },
      {
        q: "How are hackathon and makeathon marks added?",
        a: "Participating in an approved Hackathon/Makeathon (minimum 24 hours) earns extra marks added to internal marks (CAM) for 1 course per semester:",
        bullets: [
          "Participation only: +5 marks",
          "Tangible output: +10 marks",
          "Creative input: +15 marks",
          "Prize winner: +20 marks",
          "Internal marks (CAM) are capped at 60 — extra marks cannot exceed this cap",
        ],
      },
    ],
  },
  {
    id: "hostel",
    icon: "🛏️",
    label: "Hostel",
    items: [
      {
        q: "Is hostel mandatory for all students?",
        a: "Generally yes for first-year students. Some exceptions may apply for local residents. Check with the hostel administration for current policies.",
      },
      {
        q: "What types of rooms are available?",
        a: "Room types available:",
        bullets: [
          "Single occupancy (AC)",
          "Double sharing (AC and non-AC)",
          "Triple sharing rooms",
          "Availability varies by block and is allotted based on preferences and capacity",
        ],
      },
      {
        q: "Is food included in hostel fees?",
        a: "Yes. Mess is included in the hostel fee and provides:",
        bullets: [
          "Breakfast, lunch, evening snacks, and dinner daily",
          "Vegetarian and non-vegetarian options",
          "Mess is operational throughout the semester including weekends",
        ],
      },
      {
        q: "What are hostel outpass rules?",
        a: "Outpass rules for leaving campus:",
        bullets: [
          "Day outpass: Permission required, usually through VTOP or hostel admin",
          "Weekend outpass: Submit request in advance with parent/guardian contact",
          "Night stays outside campus require prior written approval",
          "First-year students have stricter restrictions in the initial months",
        ],
      },
    ],
  },
  {
    id: "campus",
    icon: "🏫",
    label: "Campus Life",
    items: [
      {
        q: "Are mobile phones and laptops allowed in hostel?",
        a: "Yes, laptops are essential for coursework. Phones are allowed. Hostel blocks have specific quiet hours — usually after 10–11 PM.",
      },
      {
        q: "Is there internet access in hostel?",
        a: "Yes, campus-wide Wi-Fi is available. Hostel rooms also have wired LAN ports for higher speed connectivity.",
      },
      {
        q: "Are there clubs and extracurricular activities?",
        a: "Yes, VIT-AP has 50+ student clubs. Categories include:",
        bullets: [
          "Technical: Coding clubs, IEEE, robotics, AI/ML groups",
          "Cultural: Music, dance, drama, fine arts",
          "Sports: Cricket, basketball, football, badminton and more",
          "Social: NSS, NCC, environmental clubs",
          "Joining clubs earns CGPA-boosting activity credits and improves your resume",
        ],
      },
      {
        q: "What is VTOP and what can I do on it?",
        a: "VTOP (VIT's online portal) is your primary student portal. Key features:",
        bullets: [
          "Course registration and FFCS slot booking",
          "Attendance and marks tracking",
          "Timetable and academic calendar",
          "Fee payment and receipts",
          "Exam hall ticket download",
          "Outpass requests and hostel services",
          "Results and grade reports",
        ],
      },
      {
        q: "How does the academic calendar work?",
        a: "VIT-AP follows a semester system:",
        bullets: [
          "Fall semester: July–November",
          "Winter semester: December–April",
          "Summer term (optional): May–June, for backlogs or extra credits",
          "Each semester has ~90 instructional days",
        ],
      },
    ],
  },
];

export default function Faqs() {
  const totalQuestions = faqData.reduce(
    (sum, cat) => sum + cat.items.length,
    0,
  );

  return (
    <Layout>
      {/* Hero */}
      <section className="section-bg-light px-6 py-10 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <p className="text-label mb-2" data-ocid="faqs.section_label">
            FAQs
          </p>
          <h2 className="text-hero text-foreground mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-muted-foreground">
            {totalQuestions} answers covering academics, exams, grades, hostel,
            and campus life at VIT-AP — based on official Academic Regulations
            v4.0.
          </p>
        </div>
      </section>

      {/* Category nav */}
      <section className="section-bg-muted px-6 py-4 border-b border-border sticky top-0 z-10">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-2">
          {faqData.map((cat) => (
            <a
              key={cat.id}
              href={`#faq-${cat.id}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-border bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth"
              data-ocid={`faqs.category_link.${cat.id}`}
            >
              <span aria-hidden="true">{cat.icon}</span>
              {cat.label}
            </a>
          ))}
        </div>
      </section>

      {/* FAQ sections */}
      <div className="max-w-3xl mx-auto px-6">
        {faqData.map((cat, catIdx) => (
          <section
            key={cat.id}
            id={`faq-${cat.id}`}
            className={`py-8 ${catIdx < faqData.length - 1 ? "border-b border-border" : ""}`}
            data-ocid={`faqs.${cat.id}_section`}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl" aria-hidden="true">
                {cat.icon}
              </span>
              <h2 className="text-section">{cat.label}</h2>
              <Badge variant="outline" className="ml-auto text-xs">
                {cat.items.length} questions
              </Badge>
            </div>

            <Accordion type="multiple" className="space-y-2">
              {cat.items.map((item, i) => (
                <AccordionItem
                  key={item.q}
                  value={`${cat.id}-${i}`}
                  className="card-elevated rounded-lg px-4 border"
                  data-ocid={`faqs.${cat.id}.item.${i + 1}`}
                >
                  <AccordionTrigger
                    className="text-sm font-semibold text-foreground hover:no-underline py-4 text-left"
                    data-ocid={`faqs.${cat.id}.trigger.${i + 1}`}
                  >
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-4 leading-relaxed">
                    <p className="mb-2">{item.a}</p>
                    {item.bullets && item.bullets.length > 0 && (
                      <ul className="space-y-1 mt-2">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2">
                            <span
                              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60"
                              aria-hidden="true"
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        ))}

        {/* Summary */}
        <section className="py-8" data-ocid="faqs.summary_section">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
            <p className="text-label mb-1">Summary</p>
            <p className="text-sm text-foreground">
              These answers are based on the official VIT-AP Academic
              Regulations v4.0. For specific issues or exceptions, contact your
              academic advisor, hostel warden, or refer directly to VTOP and the
              official regulations document.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
