import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "../components/Layout";

interface BulletCardProps {
  icon: string;
  title: string;
  items: string[];
}

function BulletCard({ icon, title, items }: BulletCardProps) {
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

interface SummaryBoxProps {
  text: string;
}

function SummaryBox({ text }: SummaryBoxProps) {
  return (
    <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mt-6">
      <p className="text-label mb-1">Summary</p>
      <p className="text-sm text-foreground">{text}</p>
    </div>
  );
}

// ── Hostel overview data ────────────────────────────────────────────────────
const hostelBlocks = [
  {
    icon: "🏢",
    label: "Men's Hostels (MH)",
    desc: "MH1 – MH6 operational; MH7 under construction",
    badge: "6 Active",
    badgeVariant: "secondary" as const,
  },
  {
    icon: "🏠",
    label: "Ladies' Hostels (LH)",
    desc: "LH1 – LH3 operational; LH4 under construction",
    badge: "3 Active",
    badgeVariant: "secondary" as const,
  },
];

// ── Room type data ──────────────────────────────────────────────────────────
const sharingRooms = [
  {
    beds: "2 Bed",
    tag: "AC / NAC",
    note: "Private-feel; popular with seniors",
  },
  { beds: "3 Bed", tag: "AC / NAC", note: "Balanced cost and privacy" },
  {
    beds: "4 Bed",
    tag: "AC / NAC",
    note: "Common allocation for 2nd-year onward",
  },
  { beds: "5 Bed", tag: "AC / NAC", note: "Mid-range sharing option" },
  { beds: "6 Bed", tag: "AC / NAC", note: "Budget-friendly, social setup" },
  { beds: "7 Bed", tag: "AC / NAC", note: "Large shared room" },
];

const dormRooms = [
  { beds: "8 Bed", tag: "Dormitory", note: "Entry-level dorm · AC / NAC" },
  { beds: "10 Bed", tag: "Dormitory", note: "Standard dorm · AC / NAC" },
  { beds: "12 Bed", tag: "Dormitory", note: "Large dorm · NAC only" },
  {
    beds: "15–20 Bed",
    tag: "Dormitory",
    note: "Largest dorm · lowest cost · NAC",
  },
];

const aptRooms = [
  {
    config: "2 Bed APT",
    tag: "AC / NAC",
    desc: "Apartment-style with shared living area; best privacy",
    badge: "Premium",
    badgeVariant: "default" as const,
  },
  {
    config: "4 Bed APT",
    tag: "AC / NAC",
    desc: "Popular apartment config; balanced amenities",
    badge: "Popular",
    badgeVariant: "secondary" as const,
  },
  {
    config: "5 Bed APT",
    tag: "AC / NAC",
    desc: "Spacious common area shared among five students",
    badge: "Mid-range",
    badgeVariant: "outline" as const,
  },
];

// ── Pricing data (AY 2025–26 combined Fall + Winter) ───────────────────────
interface PricingRow {
  room: string;
  veg: string;
  nonVeg: string;
  special: string;
}

const pricingRows: PricingRow[] = [
  {
    room: "2 Bed AC",
    veg: "2,33,700",
    nonVeg: "2,39,700",
    special: "2,50,700",
  },
  {
    room: "2 Bed NAC",
    veg: "1,77,700",
    nonVeg: "1,83,700",
    special: "1,94,700",
  },
  {
    room: "3 Bed AC",
    veg: "2,19,700",
    nonVeg: "2,25,700",
    special: "2,36,700",
  },
  {
    room: "3 Bed NAC",
    veg: "1,63,700",
    nonVeg: "1,69,700",
    special: "1,80,700",
  },
  {
    room: "4 Bed AC",
    veg: "2,09,700",
    nonVeg: "2,15,700",
    special: "2,26,700",
  },
  {
    room: "4 Bed NAC",
    veg: "1,53,700",
    nonVeg: "1,59,700",
    special: "1,70,700",
  },
  {
    room: "5 Bed AC",
    veg: "1,99,700",
    nonVeg: "2,05,700",
    special: "2,16,700",
  },
  {
    room: "5 Bed NAC",
    veg: "1,43,700",
    nonVeg: "1,49,700",
    special: "1,60,700",
  },
  {
    room: "6 Bed AC",
    veg: "1,89,700",
    nonVeg: "1,95,700",
    special: "2,06,700",
  },
  {
    room: "6 Bed NAC",
    veg: "1,33,700",
    nonVeg: "1,39,700",
    special: "1,50,700",
  },
  {
    room: "7 Bed AC",
    veg: "1,83,700",
    nonVeg: "1,89,700",
    special: "2,00,700",
  },
  {
    room: "7 Bed NAC",
    veg: "1,27,700",
    nonVeg: "1,33,700",
    special: "1,44,700",
  },
  {
    room: "2 Bed APT AC",
    veg: "2,53,700",
    nonVeg: "2,59,700",
    special: "2,70,700",
  },
  {
    room: "2 Bed APT NAC",
    veg: "1,97,700",
    nonVeg: "2,03,700",
    special: "2,14,700",
  },
  {
    room: "4 Bed APT AC",
    veg: "2,29,700",
    nonVeg: "2,35,700",
    special: "2,46,700",
  },
  {
    room: "4 Bed APT NAC",
    veg: "1,73,700",
    nonVeg: "1,79,700",
    special: "1,90,700",
  },
  {
    room: "5 Bed APT AC",
    veg: "2,19,700",
    nonVeg: "2,25,700",
    special: "2,36,700",
  },
  {
    room: "5 Bed APT NAC",
    veg: "1,63,700",
    nonVeg: "1,69,700",
    special: "1,80,700",
  },
  {
    room: "8 Bed Dorm AC",
    veg: "1,73,700",
    nonVeg: "1,79,700",
    special: "1,90,700",
  },
  {
    room: "8 Bed Dorm NAC",
    veg: "1,17,700",
    nonVeg: "1,23,700",
    special: "1,34,700",
  },
  {
    room: "10 Bed Dorm AC",
    veg: "1,63,700",
    nonVeg: "1,69,700",
    special: "1,80,700",
  },
  {
    room: "10 Bed Dorm NAC",
    veg: "1,07,700",
    nonVeg: "1,13,700",
    special: "1,24,700",
  },
  {
    room: "12 Bed Dorm NAC",
    veg: "1,00,200",
    nonVeg: "1,06,200",
    special: "1,17,200",
  },
  {
    room: "15–20 Bed Dorm NAC",
    veg: "92,700",
    nonVeg: "98,700",
    special: "1,09,700",
  },
];

// ── Room furnishings ────────────────────────────────────────────────────────
const furnishingItems = [
  "Bed with mattress",
  "Study table and chair",
  "Cupboard with personal locker",
  "Study lamp",
  "Plug board (power sockets)",
  "Bookshelf",
  "Common washrooms on each floor (not attached)",
];

// ── Mess data ───────────────────────────────────────────────────────────────
const messTimings = [
  { meal: "Breakfast", time: "7:15 – 9:00 AM", icon: "🍳" },
  { meal: "Lunch", time: "12:30 – 2:15 PM", icon: "🍱" },
  { meal: "Snacks", time: "4:45 – 6:15 PM", icon: "☕" },
  { meal: "Dinner", time: "7:30 – 9:00 PM", icon: "🍛" },
];

const messPlans = [
  {
    plan: "Veg Mess",
    icon: "🥦",
    desc: "Vegetarian-only menu; most widely available",
  },
  {
    plan: "Non-Veg Mess",
    icon: "🍗",
    desc: "Includes non-vegetarian dishes on select days",
  },
  {
    plan: "Special Mess",
    icon: "⭐",
    desc: "Enhanced menu with more variety; higher cost",
  },
];

// ── July 2025 monthly menu — 7-day repeating cycle ─────────────────────────
interface MenuDay {
  day: string;
  breakfast: string;
  lunch: string;
  snacks: string;
  dinnerVeg: string;
  dinnerNonVeg: string;
}

const sampleMenu: MenuDay[] = [
  {
    day: "Day 1",
    breakfast: "Idly + Sambhar + Chutney",
    lunch: "Rice + Sambhar + Rasam + Curd + Pickle + Papad",
    snacks: "Bread + Butter + Jam",
    dinnerVeg: "Chapati + Dal Makhni + Jeera Rice + Raita",
    dinnerNonVeg: "+ Chicken Gravy",
  },
  {
    day: "Day 2",
    breakfast: "Pongal + Sambhar + Chutney",
    lunch: "Rice + Dal + Rasam + Curd + Pickle + Papad",
    snacks: "Veg Puff",
    dinnerVeg: "Chapati + Palak Paneer + Veg Fried Rice",
    dinnerNonVeg: "+ Egg Curry",
  },
  {
    day: "Day 3",
    breakfast: "Poha + Chutney",
    lunch: "Rice + Rajma + Rasam + Curd + Pickle + Papad",
    snacks: "Samosa",
    dinnerVeg: "Chapati + Chana Masala + Pulao",
    dinnerNonVeg: "+ Chicken Fry",
  },
  {
    day: "Day 4",
    breakfast: "Upma + Chutney",
    lunch: "Rice + Dal Fry + Rasam + Curd + Pickle + Papad",
    snacks: "Banana + Biscuits",
    dinnerVeg: "Chapati + Paneer Butter Masala + Fried Rice",
    dinnerNonVeg: "+ Egg Bhurji",
  },
  {
    day: "Day 5",
    breakfast: "Dosa + Sambhar + Chutney",
    lunch: "Rice + Sambhar + Rasam + Curd + Pickle + Papad",
    snacks: "Bread + Omelette",
    dinnerVeg: "Chapati + Veg Korma + Rice",
    dinnerNonVeg: "+ Fish Curry",
  },
  {
    day: "Day 6",
    breakfast: "Paratha + Curd",
    lunch: "Rice + Dal Tadka + Rasam + Curd + Pickle + Papad",
    snacks: "Puri + Halwa",
    dinnerVeg: "Chapati + Mix Veg + Jeera Rice",
    dinnerNonVeg: "+ Chicken Gravy",
  },
  {
    day: "Day 7",
    breakfast: "Rava Upma + Chutney",
    lunch: "Rice + Sambar + Rasam + Curd + Pickle + Papad",
    snacks: "Fruit",
    dinnerVeg: "Chapati + Dal Makhni + Veg Pulao",
    dinnerNonVeg: "+ Chicken Fry",
  },
];

// ── Facilities ──────────────────────────────────────────────────────────────
const facilities = [
  {
    icon: "🔒",
    label: "24/7 Security",
    desc: "Security personnel present at all times; nightly attendance checks conducted in hostels",
  },
  {
    icon: "📶",
    label: "Campus Wi-Fi",
    desc: "Wi-Fi available across campus; consistency may vary. Jio can be inconsistent — Airtel or BSNL SIMs may work better",
  },
  {
    icon: "👕",
    label: "Laundry",
    desc: "Manual washing and paid washing machines available",
  },
  {
    icon: "🏋️",
    label: "Hostel Gym (Free)",
    desc: "Free gym in every hostel. Open 5:00–8:00 AM and 5:00–8:00 PM daily",
  },
  {
    icon: "💪",
    label: "Campus Gym (Paid)",
    desc: "Upgraded gym at Rock Plaza 1st floor (near AB-2). Rs. 1,200/month",
  },
  {
    icon: "🛒",
    label: "Petty Shops",
    desc: "Daily essentials and snacks in every hostel block",
  },
  {
    icon: "🌙",
    label: "Night Canteen",
    desc: "Available in selected hostels for late-night needs",
  },
  {
    icon: "📺",
    label: "Common Room",
    desc: "TV and recreation space in each hostel block",
  },
  {
    icon: "🏥",
    label: "Medical Center",
    desc: "On-campus, open 24/7 for emergencies",
  },
  { icon: "🏧", label: "ATM", desc: "Bank ATM available on campus" },
];

// ── Daily routine ───────────────────────────────────────────────────────────
const dailyRoutine = [
  { time: "7:15 – 9:00 AM", activity: "Wake up, freshen up, breakfast" },
  { time: "8:30 AM – 1:30 PM", activity: "Morning classes (varies by slot)" },
  { time: "12:30 – 2:15 PM", activity: "Lunch break" },
  { time: "2:30 – 5:30 PM", activity: "Afternoon classes / free time" },
  {
    time: "4:45 – 6:15 PM",
    activity: "Evening snacks, sports, club activities",
  },
  { time: "6:15 – 7:30 PM", activity: "Self-study / rest" },
  { time: "7:30 – 9:00 PM", activity: "Dinner" },
  { time: "8:00 – 11:00 PM", activity: "Study time / extracurriculars" },
  { time: "11:00 PM", activity: "Lights-out / quiet hours" },
];

// ───────────────────────────────────────────────────────────────────────────

export default function Hostel() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-bg-light px-6 py-10 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2" data-ocid="hostel.page_label">
            Hostel & Daily Life
          </p>
          <h2 className="text-hero text-foreground mb-4">Living on Campus</h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-6">
            Everything you need to know about hostel blocks, room
            configurations, pricing, mess plans, facilities, and building a
            productive daily routine at VIT-AP.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🏢 6 MH + 3 LH Blocks
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🛏️ 2-Bed to Dormitory
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🍽️ Bundled Mess Plans
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🔒 24/7 Security
            </Badge>
          </div>
        </div>
      </section>

      {/* Hostel Blocks Overview */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="hostel.overview_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Campus Housing</p>
          <h2 className="text-section mb-2">Hostel Blocks</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Boys and girls are housed in separate hostel blocks, each with its
            own mess, gym, and petty shop.
          </p>

          <div
            className="grid sm:grid-cols-2 gap-4 mb-6"
            data-ocid="hostel.blocks_list"
          >
            {hostelBlocks.map((block, i) => (
              <Card
                key={block.label}
                className="card-elevated"
                data-ocid={`hostel.block_card.${i + 1}`}
              >
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl" aria-hidden="true">
                        {block.icon}
                      </span>
                      <h3 className="text-subsection">{block.label}</h3>
                    </div>
                    <Badge
                      variant={block.badgeVariant}
                      className="text-xs shrink-0"
                    >
                      {block.badge}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{block.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <BulletCard
              icon="🏗️"
              title="Block Details"
              items={[
                "MH1–MH6 are operational for male students",
                "LH1–LH3 are operational for female students",
                "MH7 and LH4 are currently under construction",
                "Each block has its own mess, gym, and common facilities",
              ]}
            />
            <BulletCard
              icon="🛒"
              title="In-Hostel Services"
              items={[
                "Petty shops in every hostel for daily essentials and snacks",
                "Night canteen available in selected hostel blocks",
                "Free gym in all hostels — open 5:00–8:00 AM and 5:00–8:00 PM",
                "Paid upgraded gym at Rock Plaza (near AB-2) — Rs. 1,200/month",
              ]}
            />
          </div>

          <SummaryBox text="VIT-AP has 6 men's and 3 ladies' hostels with dedicated mess, gym, and petty shop in each block. MH7 and LH4 are under construction." />
        </div>
      </section>

      {/* Room Types */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="hostel.rooms_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Accommodation</p>
          <h2 className="text-section mb-2">Room Types</h2>
          <p className="text-sm text-muted-foreground mb-6">
            All rooms come furnished. Every sharing type is available in AC and
            Non-AC variants unless noted.
          </p>

          {/* Room furnishings */}
          <div className="bg-card border border-border rounded-xl p-5 mb-8 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl" aria-hidden="true">
                🪑
              </span>
              <h3 className="text-subsection">Standard Room Furnishings</h3>
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
              {furnishingItems.map((item) => (
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

          {/* Standard Sharing Rooms */}
          <h3 className="text-subsection mb-3">Standard Sharing Rooms</h3>
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8"
            data-ocid="hostel.sharing_rooms_list"
          >
            {sharingRooms.map((room, i) => (
              <div
                key={room.beds}
                className="bg-card border border-border rounded-xl p-4 shadow-sm"
                data-ocid={`hostel.sharing_room.${i + 1}`}
              >
                <div className="flex items-center justify-between mb-1">
                  <p className="font-semibold text-foreground text-sm font-display">
                    {room.beds}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    {room.tag}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{room.note}</p>
              </div>
            ))}
          </div>

          {/* Dormitory Rooms */}
          <h3 className="text-subsection mb-3">Dormitory Rooms</h3>
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8"
            data-ocid="hostel.dorm_rooms_list"
          >
            {dormRooms.map((room, i) => (
              <div
                key={room.beds}
                className="bg-card border border-border rounded-xl p-4 shadow-sm"
                data-ocid={`hostel.dorm_room.${i + 1}`}
              >
                <div className="flex items-center justify-between mb-1">
                  <p className="font-semibold text-foreground text-sm font-display">
                    {room.beds}
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    {room.tag}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{room.note}</p>
              </div>
            ))}
          </div>

          {/* Apartment-Style Rooms */}
          <h3 className="text-subsection mb-1">Apartment-Style Rooms (APT)</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Select configurations include a shared living/common area —
            available in AC and Non-AC.
          </p>
          <div
            className="grid sm:grid-cols-3 gap-4 mb-2"
            data-ocid="hostel.apt_rooms_list"
          >
            {aptRooms.map((room, i) => (
              <Card
                key={room.config}
                className="card-elevated"
                data-ocid={`hostel.apt_room.${i + 1}`}
              >
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-semibold text-foreground font-display">
                      {room.config}
                    </h4>
                    <Badge
                      variant={room.badgeVariant}
                      className="text-xs shrink-0"
                    >
                      {room.badge}
                    </Badge>
                  </div>
                  <Badge variant="outline" className="text-xs mb-2">
                    {room.tag}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{room.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <SummaryBox text="Rooms range from 2-bed sharing to 20-bed dormitories — most available in AC and Non-AC. Apartment-style (APT) rooms in 2, 4, and 5-bed configurations offer more privacy. All rooms come furnished with a bed, mattress, study table, chair, cupboard with locker, bookshelf, study lamp, and plug board." />
        </div>
      </section>

      {/* Hostel Pricing */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="hostel.pricing_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Fees</p>
          <h2 className="text-section mb-2">Hostel Pricing — AY 2025–26</h2>
          <p className="text-sm text-muted-foreground mb-1">
            Combined charges for Fall + Winter semesters. All amounts in INR.
            Mess plan is bundled with room allotment.
          </p>
          <div className="bg-muted/60 border border-border rounded-lg px-3 py-2 mb-5 flex items-start gap-2">
            <span className="text-sm shrink-0" aria-hidden="true">
              ℹ️
            </span>
            <p className="text-xs text-muted-foreground">
              Prices include room rent + mess charges for the full academic
              year. Verify exact figures on the official VIT-AP admission/hostel
              portal before payment.
            </p>
          </div>
          <div
            className="overflow-x-auto rounded-xl border border-border shadow-sm"
            data-ocid="hostel.pricing_table"
          >
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/80 border-b border-border">
                  <th className="text-left px-4 py-3 font-semibold text-foreground font-display">
                    Room Type
                  </th>
                  <th className="text-right px-4 py-3 font-semibold text-foreground font-display">
                    🥦 Veg
                  </th>
                  <th className="text-right px-4 py-3 font-semibold text-foreground font-display">
                    🍗 Non-Veg
                  </th>
                  <th className="text-right px-4 py-3 font-semibold text-foreground font-display">
                    ⭐ Special
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row, i) => (
                  <tr
                    key={row.room}
                    className={`border-b border-border last:border-0 transition-colors hover:bg-muted/30 ${i % 2 === 0 ? "bg-card" : "bg-background"}`}
                    data-ocid={`hostel.pricing_row.${i + 1}`}
                  >
                    <td className="px-4 py-3 font-medium text-foreground">
                      {row.room}
                    </td>
                    <td className="px-4 py-3 text-right text-muted-foreground font-mono text-xs">
                      ₹{row.veg}
                    </td>
                    <td className="px-4 py-3 text-right text-muted-foreground font-mono text-xs">
                      ₹{row.nonVeg}
                    </td>
                    <td className="px-4 py-3 text-right text-muted-foreground font-mono text-xs">
                      ₹{row.special}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <SummaryBox text="Most affordable: 15–20 Bed Dorm NAC from ₹92,700/year (veg). Most premium: 2 Bed APT AC at ₹2,70,700/year (special mess). Each tier offers AC and Non-AC options — AC rooms cost ~₹56,000 more per year on average." />
        </div>
      </section>

      {/* Mess System */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="hostel.mess_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Meals</p>
          <h2 className="text-section mb-6">Mess System</h2>

          {/* Meal timings */}
          <h3 className="text-subsection mb-3">Meal Timings</h3>
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
            data-ocid="hostel.mess_timings"
          >
            {messTimings.map((m, i) => (
              <div
                key={m.meal}
                className="bg-card border border-border rounded-xl p-4 text-center shadow-sm"
                data-ocid={`hostel.mess_timing.${i + 1}`}
              >
                <div className="text-3xl mb-2" aria-hidden="true">
                  {m.icon}
                </div>
                <p className="font-semibold text-foreground text-sm font-display">
                  {m.meal}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{m.time}</p>
              </div>
            ))}
          </div>

          {/* Mess plans */}
          <h3 className="text-subsection mb-3">Bundled Mess Plans</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Room allotment is bundled with a mess plan. You select your plan
            during the allotment process.
          </p>
          <div
            className="grid sm:grid-cols-3 gap-4 mb-8"
            data-ocid="hostel.mess_plans_list"
          >
            {messPlans.map((plan, i) => (
              <div
                key={plan.plan}
                className="bg-card border border-border rounded-xl p-4 shadow-sm flex items-start gap-3"
                data-ocid={`hostel.mess_plan.${i + 1}`}
              >
                <span className="text-2xl shrink-0" aria-hidden="true">
                  {plan.icon}
                </span>
                <div>
                  <p className="font-semibold text-foreground text-sm font-display">
                    {plan.plan}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {plan.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Food Quality */}
          <h3 className="text-subsection mb-3">Food Quality</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <BulletCard
              icon="🌡️"
              title="What to Expect"
              items={[
                "Food quality is generally average and subjective — opinions vary widely among students",
                "Quality depends on the hostel mess and the caterer assigned to that block",
                "Some messes are noticeably better than others in terms of taste and service",
                "Both veg and non-veg menus are structured and rotate on a monthly basis",
                "Special Mess typically offers more variety and better quality at a higher cost",
                "Chicken/Paneer served 4 days a week; eggs available daily in non-veg mess",
              ]}
            />
            <BulletCard
              icon="💡"
              title="Mess Tips"
              items={[
                "Apply for rebate before leaving — no retroactive refunds",
                "Carry your ID card to the mess at all times",
                "Timings are strict — plan your schedule around meal hours",
                "Special dietary requests can sometimes be accommodated",
                "Many students supplement hostel food with outside delivery for variety",
              ]}
            />
          </div>

          {/* Monthly Menu */}
          <h3 className="text-subsection mb-1">
            Monthly Menu — July 2025 Sample
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            The menu is designed by the student mess committee and repeats
            weekly for the month. Below is the complete 7-day cycle from the
            July 2025 menu. Non-Veg column shows additional items served
            alongside the veg base.
          </p>
          <div className="space-y-3 mb-4" data-ocid="hostel.monthly_menu_list">
            {sampleMenu.map((entry, i) => (
              <div
                key={entry.day}
                className="bg-card border border-border rounded-xl p-4 shadow-sm"
                data-ocid={`hostel.menu_day.${i + 1}`}
              >
                <p className="font-semibold text-foreground text-sm font-display mb-3">
                  {entry.day}
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div>
                    <p className="text-xs text-primary font-semibold mb-1">
                      🍳 Breakfast
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {entry.breakfast}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-primary font-semibold mb-1">
                      🍱 Lunch
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {entry.lunch}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-primary font-semibold mb-1">
                      ☕ Snacks
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {entry.snacks}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-primary font-semibold mb-1">
                      🍛 Dinner
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {entry.dinnerVeg}
                    </p>
                    {entry.dinnerNonVeg && (
                      <p className="text-xs text-accent mt-0.5">
                        <span className="font-semibold">NV:</span>{" "}
                        {entry.dinnerNonVeg}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-muted/60 border border-border rounded-xl p-3 flex items-start gap-2 mb-2">
            <span className="text-base shrink-0" aria-hidden="true">
              ℹ️
            </span>
            <p className="text-xs text-muted-foreground">
              This 7-day cycle repeats weekly for the month. Actual daily items
              may vary. The full monthly menu is designed by the student mess
              committee and posted on hostel notice boards each month.
            </p>
          </div>

          <SummaryBox text="Mess timings: Breakfast 7:15–9:00 AM, Lunch 12:30–2:15 PM, Snacks 4:45–6:15 PM, Dinner 7:30–9:00 PM. Food quality varies by hostel and caterer. The menu is structured, rotates weekly for the month, and is managed by the student mess committee." />
        </div>
      </section>

      {/* Facilities */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="hostel.facilities_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Infrastructure</p>
          <h2 className="text-section mb-6">Facilities</h2>
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            data-ocid="hostel.facilities_list"
          >
            {facilities.map((fac, i) => (
              <div
                key={fac.label}
                className="bg-card border border-border rounded-xl p-4 shadow-sm flex items-start gap-3"
                data-ocid={`hostel.facility.${i + 1}`}
              >
                <span className="text-2xl shrink-0" aria-hidden="true">
                  {fac.icon}
                </span>
                <div>
                  <p className="font-semibold text-foreground text-sm font-display">
                    {fac.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {fac.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <SummaryBox text="All hostels include a free gym (5:00–8:00 AM / 5:00–8:00 PM), petty shop, common room, and 24/7 security with nightly attendance checks. Paid gym at Rock Plaza (Rs. 1,200/month). Campus Wi-Fi available — consider Airtel/BSNL SIM for better data coverage." />
        </div>
      </section>

      {/* Daily Routine */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="hostel.routine_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Sample Schedule</p>
          <h2 className="text-section mb-6">Daily Routine</h2>
          <div className="space-y-2" data-ocid="hostel.routine_list">
            {dailyRoutine.map((slot, i) => (
              <div
                key={slot.time}
                className="flex items-start gap-4 bg-card border border-border rounded-xl px-5 py-3 shadow-sm"
                data-ocid={`hostel.routine.${i + 1}`}
              >
                <span className="text-xs font-mono text-primary font-semibold shrink-0 mt-0.5 w-32">
                  {slot.time}
                </span>
                <span className="text-sm text-foreground">{slot.activity}</span>
              </div>
            ))}
          </div>

          <SummaryBox text="A structured daily schedule helps you balance classes, meals, and self-study. Plan around fixed mess timings and use evening hours for clubs, sports, or revision." />
        </div>
      </section>

      {/* Overall Summary */}
      <section
        className="section-bg-muted px-6 py-8"
        data-ocid="hostel.summary_section"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
            <p className="text-label mb-1">Overall Summary</p>
            <p className="text-sm text-foreground">
              Hostel life at VIT-AP is well-structured and self-sufficient. With
              9 active blocks (6 MH, 3 LH), room options from 2-bed sharing to
              20-bed dormitories, apartment-style APT rooms, and bundled mess
              plans starting at ₹92,700/year, there is a configuration for every
              budget. All rooms come furnished. Free hostel gyms are open
              5:00–8:00 AM and 5:00–8:00 PM; a paid gym is available at Rock
              Plaza for ₹1,200/month. Food quality varies by hostel and caterer
              — the menu rotates weekly each month and is managed by the student
              mess committee. Security personnel are present 24/7 with nightly
              attendance checks.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
