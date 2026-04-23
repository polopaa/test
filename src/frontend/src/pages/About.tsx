import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "../components/Layout";

interface InfoCardProps {
  icon: string;
  title: string;
  items: string[];
}

function InfoCard({ icon, title, items }: InfoCardProps) {
  return (
    <Card className="card-elevated h-full">
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
              <span className="text-accent mt-0.5 shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

interface TransportCardProps {
  icon: string;
  mode: string;
  tag: string;
  tagVariant: "secondary" | "outline" | "default" | "destructive";
  details: string[];
  ocid?: string;
}

function TransportCard({
  icon,
  mode,
  tag,
  tagVariant,
  details,
  ocid,
}: TransportCardProps) {
  return (
    <Card className="card-elevated h-full" data-ocid={ocid}>
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl" aria-hidden="true">
              {icon}
            </span>
            <h3 className="text-subsection">{mode}</h3>
          </div>
          <Badge variant={tagVariant} className="text-xs shrink-0">
            {tag}
          </Badge>
        </div>
        <ul className="space-y-2">
          {details.map((d) => (
            <li
              key={d}
              className="flex items-start gap-2 text-sm text-foreground"
            >
              <span className="text-accent mt-0.5 shrink-0">•</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

const highlights = [
  { icon: "📅", label: "Established", value: "2017" },
  { icon: "🎓", label: "Programs", value: "B.Tech, M.Tech, MBA, MCA, PhD" },
  { icon: "📍", label: "Location", value: "Amaravati, Andhra Pradesh" },
  { icon: "✅", label: "Accreditation", value: "NAAC & AICTE Approved" },
];

const campusCards = [
  {
    icon: "🏗️",
    title: "Campus Infrastructure",
    items: [
      "Sprawling 200-acre green campus with well-planned academic blocks",
      "Separate hostels for boys and girls within campus",
      "Modern library with digital and physical resources",
      "State-of-the-art labs for each engineering discipline",
      "Auditorium, gym, sports courts, and recreation areas",
      "Multiple food courts and cafeterias across campus",
    ],
  },
  {
    icon: "💻",
    title: "Tech-Enabled Environment",
    items: [
      "Digital classrooms with smart boards and AV systems",
      "Campus-wide Wi-Fi connectivity",
      "VTOP portal for all academic activities",
      "Online attendance and grade tracking",
      "Online course registration via FFCS system",
    ],
  },
  {
    icon: "📚",
    title: "Academic System",
    items: [
      "FFCS (Fully Flexible Credit System) — choose your own slots",
      "Semester-based: Winter (Jul–Nov) and Summer (Dec–Apr)",
      "Continuous evaluation: CAT 1 + CAT 2 + assignments + final exam",
      "CGPA-based grading on a 10-point scale",
      "Summer term available for backlogs or extra credits",
    ],
  },
  {
    icon: "🌍",
    title: "Affiliations & Recognition",
    items: [
      "Part of the VIT Group founded by Dr. G. Viswanathan",
      "Private deemed university — autonomous in curriculum design",
      "NAAC accredited and AICTE approved",
      "Industry-aligned curriculum with placement focus",
      "Active research culture with international collaborations",
    ],
  },
];

const keyDistances = [
  { place: "Vijayawada City Center", distance: "20 km" },
  { place: "Vijayawada Railway Station", distance: "17 km" },
  { place: "Vijayawada International Airport", distance: "38 km" },
  { place: "Guntur City Center", distance: "33 km" },
  { place: "Guntur Railway Station", distance: "32 km" },
];

const transportOptions: TransportCardProps[] = [
  {
    icon: "🚌",
    mode: "University Shuttle",
    tag: "Free",
    tagVariant: "secondary",
    ocid: "about.transport.item.1",
    details: [
      "Runs every Sunday: departs 10:00 am – 12:00 pm to Vijayawada",
      "Return: 4:30 pm – 6:30 pm back to campus",
      "For students only — carry your ID card",
      "Check VTOP for schedule updates and changes",
    ],
  },
  {
    icon: "🚍",
    mode: "APSRTC Bus",
    tag: "Budget",
    tagVariant: "outline",
    ocid: "about.transport.item.2",
    details: [
      "Direct bus to Vijayawada: ~₹35",
      "Alternate route via Guntur: ₹35 + ₹50 (connecting bus)",
      "Buses depart from the main road near campus",
      "Most affordable option for regular travel",
    ],
  },
  {
    icon: "🚐",
    mode: "Shared Vans / Autos",
    tag: "Shared",
    tagVariant: "outline",
    ocid: "about.transport.item.3",
    details: [
      "~₹150 per person to Vijayawada city",
      "Shared rides — faster than bus, less frequent",
      "Available near campus gate and main road",
      "Good option for quick trips with luggage",
    ],
  },
  {
    icon: "🚖",
    mode: "Private Cabs (Ola / Uber)",
    tag: "Convenient",
    tagVariant: "secondary",
    ocid: "about.transport.item.4",
    details: [
      "Campus to Vijayawada Railway Station: ₹400–600",
      "Campus to Vijayawada Airport: ₹700–1,000",
      "Prices vary with time of day and demand",
      "Best option for early-morning or late-night travel",
    ],
  },
  {
    icon: "🚂",
    mode: "Trains",
    tag: "Via Vijayawada",
    tagVariant: "outline",
    ocid: "about.transport.item.5",
    details: [
      "Vijayawada Railway Station (17 km) — nearest major station",
      "Guntur Railway Station (32 km) — alternate option",
      "No direct campus rail connection",
      "Take a cab or bus to the station first",
    ],
  },
  {
    icon: "✈️",
    mode: "Flights",
    tag: "Via Airport",
    tagVariant: "outline",
    ocid: "about.transport.item.6",
    details: [
      "Vijayawada International Airport — 38 km from campus",
      "Connects to Delhi, Mumbai, Bangalore, Hyderabad, Chennai",
      "Cab from campus to airport: ₹700–1,000",
      "Book cabs in advance for early morning flights",
    ],
  },
];

const outdoorSports = [
  "Basketball",
  "Volleyball",
  "Tennis",
  "Football",
  "Cricket",
  "Throwball",
];

const indoorSports = [
  "Badminton",
  "Squash",
  "Table Tennis",
  "Chess",
  "Carrom",
  "Rock Climbing Wall",
  "Yoga Hall",
  "Fitness / Indoor Gym",
];

export default function About() {
  return (
    <Layout>
      {/* Hero section */}
      <section className="section-bg-light px-6 py-10 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2" data-ocid="about.section_label">
            About VIT-AP
          </p>
          <h2 className="text-hero text-foreground mb-4">VIT-AP University</h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-6">
            A modern, technology-driven campus offering flexible academics in a
            connected environment. Part of the prestigious VIT Group, located in
            Amaravati, Andhra Pradesh.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🏛️ Deemed University
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              ✅ NAAC Accredited
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🏭 AICTE Approved
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              📅 Est. 2017
            </Badge>
          </div>
        </div>
      </section>

      {/* Highlights strip */}
      <section className="section-bg-muted px-6 py-6 border-b border-border">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="text-center"
              data-ocid={`about.highlight.${h.label.toLowerCase()}`}
            >
              <div className="text-2xl mb-1" aria-hidden="true">
                {h.icon}
              </div>
              <p className="text-label mb-0.5">{h.label}</p>
              <p className="text-sm font-semibold text-foreground">{h.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="about.overview_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Overview</p>
          <h2 className="text-section mb-4">What is VIT-AP?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-3">
              {(
                [
                  "Private deemed university in Amaravati, Andhra Pradesh, established in 2017",
                  "Part of the VIT Group founded by Dr. G. Viswanathan",
                  "Offers B.Tech, M.Tech, MBA, MCA, and PhD programs",
                ] as const
              ).map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-foreground"
                >
                  <span className="text-primary mt-0.5 shrink-0 font-bold">
                    →
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {(
                [
                  "Known for industry-aligned curriculum and placement-focused approach",
                  "NAAC accredited and AICTE approved — recognized for academic quality",
                  "Strong focus on research, innovation, and student development",
                ] as const
              ).map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-foreground"
                >
                  <span className="text-primary mt-0.5 shrink-0 font-bold">
                    →
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Campus and academic detail cards */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="about.details_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Details</p>
          <h2 className="text-section mb-6">Campus & Academics</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {campusCards.map((card) => (
              <InfoCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* Location & Address */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="about.location_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Getting Here</p>
          <h2 className="text-section mb-6">Location & Address</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Address card */}
            <Card className="card-elevated">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl" aria-hidden="true">
                    📍
                  </span>
                  <h3 className="text-subsection">Campus Address</h3>
                </div>
                <address className="not-italic text-sm text-foreground leading-relaxed mb-4">
                  G-30, Inavolu,
                  <br />
                  beside AP Secretariat,
                  <br />
                  Guntur District,
                  <br />
                  Andhra Pradesh – 522237
                </address>
                <div className="bg-muted/50 rounded-lg px-4 py-3">
                  <p className="text-xs text-muted-foreground mb-1">
                    Campus Area
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    200 Acres
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Distances card */}
            <Card className="card-elevated">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl" aria-hidden="true">
                    🗺️
                  </span>
                  <h3 className="text-subsection">Key Distances</h3>
                </div>
                <ul className="space-y-3">
                  {keyDistances.map((d) => (
                    <li
                      key={d.place}
                      className="flex items-center justify-between text-sm"
                      data-ocid={`about.distance.${d.place.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <span className="text-foreground">{d.place}</span>
                      <Badge
                        variant="outline"
                        className="text-xs font-mono shrink-0 ml-2"
                      >
                        {d.distance}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="about.transport_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Getting Around</p>
          <h2 className="text-section mb-6">Transportation Options</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {transportOptions.map((t) => (
              <TransportCard key={t.mode} {...t} />
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            💡 Tip: For early morning or late night travel, book cabs in
            advance. The university shuttle is the most economical option for
            weekend city visits.
          </p>
        </div>
      </section>

      {/* Sports & Campus Life */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="about.sports_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Campus Life</p>
          <h2 className="text-section mb-6">Sports & Student Activities</h2>
          <div className="grid md:grid-cols-2 gap-5 mb-6">
            {/* Outdoor Sports */}
            <Card className="card-elevated">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl" aria-hidden="true">
                    🏟️
                  </span>
                  <h3 className="text-subsection">Outdoor Sports</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {outdoorSports.map((sport) => (
                    <Badge
                      key={sport}
                      variant="secondary"
                      className="text-xs px-3 py-1"
                    >
                      {sport}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Indoor Sports */}
            <Card className="card-elevated">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl" aria-hidden="true">
                    🏋️
                  </span>
                  <h3 className="text-subsection">Indoor Sports & Fitness</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {indoorSports.map((sport) => (
                    <Badge
                      key={sport}
                      variant="secondary"
                      className="text-xs px-3 py-1"
                    >
                      {sport}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Fests & Clubs */}
          <div className="grid md:grid-cols-2 gap-5">
            <Card className="card-elevated">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl" aria-hidden="true">
                    🎉
                  </span>
                  <h3 className="text-subsection">Annual Cultural Fest</h3>
                </div>
                <p className="text-sm font-semibold text-foreground mb-1">
                  VITopia
                </p>
                <p className="text-sm text-muted-foreground">
                  The flagship inter-college cultural festival at VIT-AP. Draws
                  participants from colleges across India — featuring
                  competitions in music, dance, drama, art, and more.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl" aria-hidden="true">
                    🤝
                  </span>
                  <h3 className="text-subsection">Student Clubs</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Technical clubs — coding, robotics, AI/ML, IoT",
                    "Cultural clubs — music, dance, drama, arts",
                    "Social clubs — NSS, community service, environment",
                    "Sports clubs — inter-hostel and inter-college competitions",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <span className="text-accent mt-0.5 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section
        className="section-bg-muted px-6 py-8"
        data-ocid="about.summary_section"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
            <p className="text-label mb-1">Summary</p>
            <p className="text-sm text-foreground">
              VIT-AP is a modern, 200-acre technology-driven campus in Guntur
              District, Andhra Pradesh — 20 km from Vijayawada. With FFCS-based
              academics, multiple transport options (free shuttle, APSRTC buses,
              cabs), rich sports facilities, and an active student community
              through clubs and VITopia, it's built to support both academic
              excellence and campus life.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
