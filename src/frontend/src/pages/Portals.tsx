import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Mail, Phone } from "lucide-react";
import { Layout } from "../components/Layout";

interface StepCardProps {
  step: number;
  title: string;
  desc: string;
}

function StepCard({ step, title, desc }: StepCardProps) {
  return (
    <div className="flex items-start gap-4 bg-card border border-border rounded-xl px-5 py-4 shadow-sm">
      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold font-display shrink-0">
        {step}
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground font-display">
          {title}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
      </div>
    </div>
  );
}

const vtopFeatures = [
  {
    icon: "📅",
    label: "Course Registration",
    desc: "Register for theory and lab slots each semester via FFCS",
  },
  {
    icon: "📊",
    label: "Attendance Tracking",
    desc: "View real-time attendance % per course, updated after each class",
  },
  {
    icon: "📝",
    label: "Marks & Grades",
    desc: "View CAT marks, DA marks, FAT results, and final grade card",
  },
  {
    icon: "🗓️",
    label: "Timetable",
    desc: "View your registered slot schedule for the semester",
  },
  {
    icon: "💰",
    label: "Fee Payment",
    desc: "Pay semester fees, re-registration fees, and hostel fees online",
  },
  {
    icon: "🏠",
    label: "Hostel Management",
    desc: "View hostel allocation, room details, and mess options",
  },
  {
    icon: "👤",
    label: "Proctor Details",
    desc: "View your assigned faculty proctor's name and contact information",
  },
  {
    icon: "📋",
    label: "Exam Timetable & Hall Ticket",
    desc: "Download FAT hall ticket and check your exam schedule",
  },
  {
    icon: "🔄",
    label: "Re-exam Application",
    desc: "Apply for re-examination or re-evaluation through the portal after FAT results",
  },
  {
    icon: "👁️",
    label: "Paper Seeing (Script View)",
    desc: "Request to view your answer script during the paper-seeing window post-FAT",
  },
];

const attendanceSteps: StepCardProps[] = [
  {
    step: 1,
    title: "Login to VTOP",
    desc: "Go to vtop.vitap.ac.in and sign in with your application number and password",
  },
  {
    step: 2,
    title: "Navigate to Attendance",
    desc: "Go to Academics → Attendance from the main menu",
  },
  {
    step: 3,
    title: "Select Semester",
    desc: "Choose the current semester from the dropdown to load your data",
  },
  {
    step: 4,
    title: "Review the Summary",
    desc: "Each course shows total classes held, classes attended, and your percentage",
  },
  {
    step: 5,
    title: "Check Individual Course Logs",
    desc: "Click on any course to see the date-wise attendance record",
  },
  {
    step: 6,
    title: "Check Shortage Alerts",
    desc: "Look at the 'Attendance Shortage' section to identify courses at risk",
  },
];

const marksSteps: StepCardProps[] = [
  {
    step: 1,
    title: "Go to Marks Verification",
    desc: "Navigate to Academics → Marks Verification on VTOP",
  },
  {
    step: 2,
    title: "Select Semester",
    desc: "Pick the current semester from the dropdown to load your marks",
  },
  {
    step: 3,
    title: "View Internal Marks",
    desc: "Check CAT-I marks (out of 15), CAT-II marks (out of 15), and DA marks (out of 30)",
  },
  {
    step: 4,
    title: "Check Grade Card After FAT",
    desc: "After FAT, view final marks and letter grade in Academics → Grade Card",
  },
  {
    step: 5,
    title: "Apply for Re-evaluation (if needed)",
    desc: "If you want FAT re-evaluation or paper-seeing, apply within the specified window and pay the required fee on VTOP",
  },
];

const attendanceZones = [
  {
    threshold: "≥ 80%",
    label: "Safe Zone",
    sublabel: "No risk — continue attending normally",
    colorClass: "text-accent",
    bgClass: "bg-accent/10 border-accent/30",
  },
  {
    threshold: "75 – 79%",
    label: "Caution Zone",
    sublabel: "One or two more absences can debar you",
    colorClass: "text-yellow-600",
    bgClass: "bg-yellow-50 border-yellow-200",
  },
  {
    threshold: "65 – 74%",
    label: "Danger Zone",
    sublabel: "Likely debarred from next exam — contact proctor immediately",
    colorClass: "text-orange-600",
    bgClass: "bg-orange-50 border-orange-200",
  },
  {
    threshold: "< 65%",
    label: "Critical",
    sublabel: "Already debarred from exam component — may need to re-register",
    colorClass: "text-destructive",
    bgClass: "bg-destructive/10 border-destructive/30",
  },
];

const marksComponents = [
  { component: "CAT-I", marks: "15", note: "Closed book exam (~50 min)" },
  { component: "CAT-II", marks: "15", note: "Open book exam (~50 min)" },
  {
    component: "Digital Assignments (DA)",
    marks: "30",
    note: "Min 3 assignments × 10 marks",
  },
  {
    component: "Total CAM (Internal)",
    marks: "60",
    note: "Continuous assessment total",
    highlight: true,
  },
  {
    component: "FAT (Final Exam)",
    marks: "40",
    note: "3-hour exam conducted by CoE",
  },
  { component: "Grand Total", marks: "100", note: "—", highlight: true },
];

const vtopTips = [
  "Check attendance weekly — don't wait for it to fall below 75%",
  "Download your timetable PDF at the start of semester as a backup",
  "Verify your CAT marks within the objection window — errors do happen",
  "Pay all fees before the deadline to avoid late fee charges",
  "If VTOP is down during registration, note your preferred slots and retry quickly",
  "Your Proctor's contact is on VTOP — reach out early if you have attendance or academic issues",
  "Apply for re-evaluation or paper-seeing immediately after FAT results — the window closes fast",
];

const guestHouseRates = [
  {
    room: "Superior Room",
    weekday: "₹2,500",
    weekend: "₹3,000",
    peak: "₹3,500",
  },
  {
    room: "Suite",
    weekday: "₹3,500",
    weekend: "₹4,000",
    peak: "₹4,500",
  },
];

const bankingInfo = [
  {
    icon: "🏦",
    label: "Indian Bank Branch",
    desc: "Located inside AB-2 building on campus — full-service banking available",
  },
  {
    icon: "🏧",
    label: "ATM on Campus",
    desc: "ATM available on campus for 24/7 cash withdrawals",
  },
  {
    icon: "💳",
    label: "Open an Indian Bank Account",
    desc: "Students are advised to open an Indian Bank account for fee payments and campus transactions",
  },
  {
    icon: "🗺️",
    label: "Off-Campus ATMs",
    desc: "Other bank ATMs (SBI, HDFC, etc.) are accessible in nearby Amaravati and Vijayawada areas",
  },
];

const postalInfo = [
  {
    icon: "📬",
    label: "India Post Counter",
    desc: "Available inside AB-1 building — use for speed post, registered post, and documents",
  },
  {
    icon: "📦",
    label: "Courier Services",
    desc: "Blue Dart, DTDC, and other couriers — use Amaravati or Vijayawada drop points",
  },
];

const deliveryInfo = [
  {
    icon: "🛍️",
    label: "E-commerce Deliveries",
    desc: "Amazon, Flipkart, Ajio, Myntra — packages accepted at hostel reception or campus address",
  },
  {
    icon: "🍔",
    label: "Food Delivery",
    desc: "Swiggy and Zomato available — delivery to campus gate or designated delivery areas",
  },
  {
    icon: "💵",
    label: "Cash on Delivery (COD)",
    desc: "COD is available on most platforms — collect from hostel reception if you're in class",
  },
  {
    icon: "📍",
    label: "Official Campus Address",
    desc: "G-30, Inavolu, beside AP Secretariat, Guntur District, AP – 522237",
  },
];

export default function Portals() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-bg-light px-6 py-10 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2" data-ocid="portals.page_label">
            Systems & Portals
          </p>
          <h2 className="text-hero text-foreground mb-4">
            Your Academic Control Center
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-6">
            VTOP manages your academics — courses, attendance, marks, and fees.
            This page also covers campus services like the guest house, banking,
            postal, and online deliveries.
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🖥️ VTOP Portal
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🏨 Guest House
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🏦 Banking & ATM
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              📦 Deliveries
            </Badge>
            <Button
              variant="outline"
              size="sm"
              className="text-xs gap-1.5 h-7"
              onClick={() => window.open("https://vtop.vitap.ac.in", "_blank")}
              data-ocid="portals.vtop_link_button"
            >
              <ExternalLink className="w-3 h-3" />
              Open VTOP
            </Button>
          </div>
        </div>
      </section>

      {/* VTOP Overview */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="portals.vtop_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Main Portal</p>
          <h2 className="text-section mb-2">VTOP — Student Portal</h2>
          <p className="text-sm text-muted-foreground mb-6">
            URL:{" "}
            <span className="font-mono text-primary">vtop.vitap.ac.in</span> —
            Use desktop/laptop for the best experience; mobile browser is
            limited.
          </p>
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
            data-ocid="portals.features_list"
          >
            {vtopFeatures.map((f, i) => (
              <div
                key={f.label}
                className="bg-card border border-border rounded-xl p-4 shadow-sm flex items-start gap-3"
                data-ocid={`portals.feature.${i + 1}`}
              >
                <span className="text-2xl shrink-0" aria-hidden="true">
                  {f.icon}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground font-display">
                    {f.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-accent/10 border border-accent/30 rounded-xl p-4">
            <p className="text-sm text-foreground">
              <span className="font-semibold text-accent">
                Login credentials
              </span>{" "}
              are provided during admission. If you lose access, visit the
              university IT help desk on campus to reset your password.
            </p>
          </div>
        </div>
      </section>

      {/* Attendance Tracking */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="portals.attendance_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Step-by-Step</p>
          <h2 className="text-section mb-2">Checking Attendance on VTOP</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Attendance is updated daily after class. You can also view date-wise
            records and check for shortage alerts per course.
          </p>
          <div className="space-y-3 mb-8" data-ocid="portals.attendance_steps">
            {attendanceSteps.map((s) => (
              <StepCard key={s.title} {...s} />
            ))}
          </div>

          <p className="text-label mb-3">Attendance Zones</p>
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            data-ocid="portals.attendance_zones"
          >
            {attendanceZones.map((zone, i) => (
              <div
                key={zone.threshold}
                className={`border rounded-xl p-4 shadow-sm ${zone.bgClass}`}
                data-ocid={`portals.attendance_zone.${i + 1}`}
              >
                <p
                  className={`text-xl font-bold font-display ${zone.colorClass}`}
                >
                  {zone.threshold}
                </p>
                <p className={`text-sm font-semibold mt-1 ${zone.colorClass}`}>
                  {zone.label}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {zone.sublabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marks and Grades */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="portals.marks_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Step-by-Step</p>
          <h2 className="text-section mb-2">Viewing Marks & Grades</h2>
          <p className="text-sm text-muted-foreground mb-6">
            CAT-I and CAT-II marks are uploaded after each exam. DA marks are
            updated throughout the semester. FAT results appear after the final
            exam. Re-evaluation and paper-seeing applications are also done via
            VTOP.
          </p>
          <div className="space-y-3 mb-8" data-ocid="portals.marks_steps">
            {marksSteps.map((s) => (
              <StepCard key={s.title} {...s} />
            ))}
          </div>

          <div
            className="bg-card border border-border rounded-xl p-5 shadow-sm"
            data-ocid="portals.marks_breakdown"
          >
            <p className="text-label mb-4">
              Marks Breakdown — Grand Total: 100
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {marksComponents.map((row, i) => (
                <div
                  key={row.component}
                  className={`text-center rounded-lg p-4 border ${
                    row.highlight
                      ? "bg-primary/8 border-primary/30"
                      : "bg-background border-border"
                  }`}
                  data-ocid={`portals.marks_component.${i + 1}`}
                >
                  <p
                    className={`text-2xl font-bold font-display ${
                      row.highlight ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {row.marks}
                  </p>
                  <p
                    className={`text-sm font-semibold font-display mt-0.5 ${
                      row.highlight ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {row.component}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {row.note}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-accent/10 border border-accent/30 rounded-lg p-3">
              <p className="text-xs text-foreground">
                <span className="font-semibold text-accent">Note:</span> You
                need at least 50% in the CAM (internal) component AND at least
                50% overall to pass a course. Scoring below this threshold can
                result in a failing grade regardless of FAT performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VTOP Tips for Students */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="portals.student_tips_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Pro Tips</p>
          <h2 className="text-section mb-6">VTOP Tips for Students</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {vtopTips.map((tip, i) => (
              <div
                key={tip}
                className="flex items-start gap-3 bg-card border border-border rounded-xl px-4 py-3 shadow-sm"
                data-ocid={`portals.tip.${i + 1}`}
              >
                <span className="text-accent font-bold text-base shrink-0 mt-0.5">
                  →
                </span>
                <p className="text-sm text-foreground">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Do & Don't */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="portals.tips_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Best Practices</p>
          <h2 className="text-section mb-6">VTOP Dos & Don'ts</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="card-elevated">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl" aria-hidden="true">
                    ✅
                  </span>
                  <h3 className="text-subsection">Do This</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Check attendance every week — not once a month",
                    "Download and save your timetable at semester start",
                    "Screenshot your registration confirmation as proof",
                    "Raise mark disputes during the objection window",
                    "Use desktop for course registration — mobile often errors",
                    "Apply for paper-seeing or re-evaluation if FAT marks seem wrong",
                    "Check Proctor details and save their contact number",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <span className="text-accent mt-0.5 shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="card-elevated">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl" aria-hidden="true">
                    ⚠️
                  </span>
                  <h3 className="text-subsection">Avoid This</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Waiting until end of semester to check attendance",
                    "Sharing your VTOP login credentials with anyone",
                    "Ignoring fee payment deadlines listed on VTOP",
                    "Using mobile browser during course registration windows",
                    "Forgetting to log out on shared or lab computers",
                    "Missing the FAT re-evaluation or paper-seeing window",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <span className="text-destructive mt-0.5 shrink-0">
                        ✗
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* VITRINA Guest House */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="portals.guesthouse_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Campus Services</p>
          <h2 className="text-section mb-2">VITRINA Guest House</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Located on campus, VITRINA Guest House is available for parents,
            relatives, and official visitors. Book in advance — rooms fill up
            fast during exams, parent days, and convocation.
          </p>

          {/* Rates Table */}
          <div
            className="bg-card border border-border rounded-xl overflow-hidden shadow-sm mb-6"
            data-ocid="portals.guesthouse_rates"
          >
            <div className="px-5 py-3 border-b border-border bg-muted/40">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Room Rates (per night, all taxes inclusive)
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left px-5 py-3 font-semibold text-foreground font-display">
                      Room Type
                    </th>
                    <th className="text-right px-5 py-3 font-semibold text-foreground font-display">
                      Weekday
                    </th>
                    <th className="text-right px-5 py-3 font-semibold text-foreground font-display">
                      Weekend
                    </th>
                    <th className="text-right px-5 py-3 font-semibold text-foreground font-display">
                      Peak / Special
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {guestHouseRates.map((r, i) => (
                    <tr
                      key={r.room}
                      className="border-b border-border last:border-0"
                      data-ocid={`portals.guesthouse_rate.${i + 1}`}
                    >
                      <td className="px-5 py-3 font-medium text-foreground">
                        {r.room}
                      </td>
                      <td className="px-5 py-3 text-right text-foreground font-mono">
                        {r.weekday}
                      </td>
                      <td className="px-5 py-3 text-right text-foreground font-mono">
                        {r.weekend}
                      </td>
                      <td className="px-5 py-3 text-right text-foreground font-mono">
                        {r.peak}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Inclusions + Contact */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
              <p className="text-sm font-semibold text-foreground font-display mb-3">
                What's Included
              </p>
              <ul className="space-y-2">
                {[
                  "Complimentary breakfast for all guests",
                  "Free Wi-Fi throughout the guest house",
                  "Standard room amenities (linen, towels, toiletries)",
                  "24/7 reception and campus security",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <span className="text-accent mt-0.5 shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
              <p className="text-sm font-semibold text-foreground font-display mb-3">
                Contact & Booking
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:guesthouse@vitap.ac.in"
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                  data-ocid="portals.guesthouse_email_link"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  guesthouse@vitap.ac.in
                </a>
                <a
                  href="tel:+917901064755"
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                  data-ocid="portals.guesthouse_phone_link"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  +91 7901064755
                </a>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mt-2">
                  <p className="text-xs text-foreground">
                    <span className="font-semibold text-yellow-700">Tip:</span>{" "}
                    Book well in advance during exam seasons, parent days, and
                    convocation — rooms are limited and fill up quickly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banking & ATM */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="portals.banking_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Campus Services</p>
          <h2 className="text-section mb-2">Banking & ATM</h2>
          <p className="text-sm text-muted-foreground mb-6">
            An Indian Bank branch is located inside the campus for daily banking
            needs. Students are advised to open an Indian Bank account for
            seamless fee payments and campus transactions.
          </p>
          <div
            className="grid sm:grid-cols-2 gap-4"
            data-ocid="portals.banking_list"
          >
            {bankingInfo.map((item, i) => (
              <div
                key={item.label}
                className="bg-card border border-border rounded-xl p-4 shadow-sm flex items-start gap-3"
                data-ocid={`portals.banking_item.${i + 1}`}
              >
                <span className="text-2xl shrink-0" aria-hidden="true">
                  {item.icon}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground font-display">
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Postal & Courier */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="portals.postal_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Campus Services</p>
          <h2 className="text-section mb-2">Postal & Courier Services</h2>
          <p className="text-sm text-muted-foreground mb-6">
            India Post services are available inside campus. For private
            couriers, use drop points in Amaravati or Vijayawada — no courier
            pickup on campus.
          </p>
          <div
            className="grid sm:grid-cols-2 gap-4 mb-5"
            data-ocid="portals.postal_list"
          >
            {postalInfo.map((item, i) => (
              <div
                key={item.label}
                className="bg-card border border-border rounded-xl p-4 shadow-sm flex items-start gap-3"
                data-ocid={`portals.postal_item.${i + 1}`}
              >
                <span className="text-2xl shrink-0" aria-hidden="true">
                  {item.icon}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground font-display">
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-accent/10 border border-accent/30 rounded-xl p-4">
            <p className="text-sm text-foreground">
              <span className="font-semibold text-accent">
                India Post counter
              </span>{" "}
              is in AB-1. Use speed post or registered post for important
              documents, admit cards, and certificates. Always keep the tracking
              receipt.
            </p>
          </div>
        </div>
      </section>

      {/* Online Shopping & Deliveries */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="portals.delivery_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Campus Services</p>
          <h2 className="text-section mb-2">Online Shopping & Deliveries</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Amazon, Flipkart, Swiggy, Zomato, and most major platforms deliver
            to campus. Use the official address below when placing orders.
          </p>
          <div
            className="grid sm:grid-cols-2 gap-4 mb-5"
            data-ocid="portals.delivery_list"
          >
            {deliveryInfo.map((item, i) => (
              <div
                key={item.label}
                className={`border rounded-xl p-4 shadow-sm flex items-start gap-3 ${
                  item.label === "Official Campus Address"
                    ? "bg-primary/5 border-primary/20 col-span-full sm:col-span-2"
                    : "bg-card border-border"
                }`}
                data-ocid={`portals.delivery_item.${i + 1}`}
              >
                <span className="text-2xl shrink-0" aria-hidden="true">
                  {item.icon}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground font-display">
                    {item.label}
                  </p>
                  <p
                    className={`text-xs mt-0.5 ${
                      item.label === "Official Campus Address"
                        ? "text-primary font-mono font-medium"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
            <p className="text-sm font-semibold text-foreground font-display mb-2">
              Delivery Tips
            </p>
            <ul className="space-y-1.5">
              {[
                "Mention your hostel block and room number in the delivery address for faster pickup",
                "Packages at hostel reception are usually held until you collect them — check regularly",
                "Swiggy/Zomato deliveries typically arrive at the campus gate — meet the rider there",
                "COD is available but having a UPI app (GPay, PhonePe) makes payments much easier",
              ].map((tip) => (
                <li
                  key={tip}
                  className="flex items-start gap-2 text-sm text-foreground"
                >
                  <span className="text-accent mt-0.5 shrink-0">→</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section
        className="section-bg-light px-6 py-8"
        data-ocid="portals.summary_section"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
            <p className="text-label mb-1">Summary</p>
            <p className="text-sm text-foreground">
              VTOP is your academic control center — check it weekly for
              attendance, marks, and deadlines. Use re-evaluation and
              paper-seeing options on VTOP if your FAT results are disputed.
              Campus also has Indian Bank for banking, India Post (AB-1) for
              postal needs, and VITRINA Guest House for visitors. Online
              deliveries from Amazon, Flipkart, Swiggy, and Zomato are all
              available at campus.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
