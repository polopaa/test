import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "../components/Layout";
import {
  calculators,
  campusFood,
  foodRealityPoints,
  laptopExtras,
  laptopSpecs,
  nriDocuments,
  originalDocuments,
  packingGroups,
} from "./FoodData";

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

function SummaryBox({ text }: { text: string }) {
  return (
    <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mt-6">
      <p className="text-label mb-1">Summary</p>
      <p className="text-sm text-foreground">{text}</p>
    </div>
  );
}

function ChecklistGroup({
  icon,
  title,
  items,
  ocid,
}: {
  icon: string;
  title: string;
  items: string[];
  ocid?: string;
}) {
  return (
    <Card className="card-elevated" data-ocid={ocid}>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl" aria-hidden="true">
            {icon}
          </span>
          <h3 className="text-sm font-semibold font-display text-foreground">
            {title}
          </h3>
        </div>
        <ul className="space-y-1.5">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-xs text-foreground"
            >
              <span className="text-accent mt-0.5 shrink-0">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default function Food() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-bg-light px-6 py-10 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2" data-ocid="food.page_label">
            Food &amp; Essentials
          </p>
          <h2 className="text-hero text-foreground mb-4">
            Eating Well &amp; Packing Smart
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-6">
            Everything you need before arriving at VIT-AP — documents, packing
            lists, tech specs, and a clear picture of campus food options.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-xs px-3 py-1">
              📄 Documents Checklist
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🎒 Packing Guide
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              💻 Tech Essentials
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              🍽️ Campus Food
            </Badge>
          </div>
        </div>
      </section>

      {/* Documents Checklist */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="food.documents_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Before You Leave Home</p>
          <h2 className="text-section mb-2">Documents Checklist</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Bring originals and at least 10 photocopies of each document. You'll
            need them for hostel check-in, fee submission, and verification.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card
              className="card-elevated"
              data-ocid="food.docs_originals_card"
            >
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl" aria-hidden="true">
                    📄
                  </span>
                  <h3 className="text-subsection">Original Documents</h3>
                </div>
                <ul className="space-y-1.5">
                  {originalDocuments.map((doc) => (
                    <li
                      key={doc}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <span className="text-accent mt-0.5 shrink-0">✓</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 bg-muted/60 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Also bring:
                    </span>{" "}
                    10 photocopies of every document above.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col gap-4">
              <Card className="card-elevated" data-ocid="food.docs_nri_card">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl" aria-hidden="true">
                      🌍
                    </span>
                    <div>
                      <h3 className="text-subsection">
                        NRI / Foreign Students
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Additionally required
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {nriDocuments.map((doc) => (
                      <li
                        key={doc}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <span className="text-accent mt-0.5 shrink-0">✓</span>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                <p className="text-xs font-semibold text-foreground mb-1">
                  💡 Pro Tip
                </p>
                <p className="text-xs text-muted-foreground">
                  Carry documents in a dedicated folder. Keep one set of
                  photocopies separate from your originals — you'll be asked for
                  documents multiple times in the first week.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packing Checklist */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="food.packing_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">What to Bring</p>
          <h2 className="text-section mb-2">Pre-Arrival Packing Checklist</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Pack these before leaving home — shops near campus can be expensive
            and it's harder to source things mid-semester.
          </p>
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            data-ocid="food.packing_list"
          >
            {packingGroups.map((group, i) => (
              <ChecklistGroup
                key={group.title}
                icon={group.icon}
                title={group.title}
                items={group.items}
                ocid={`food.packing_card.${i + 1}`}
              />
            ))}
          </div>
          <SummaryBox text="Pack clothing for all seasons (Vijayawada is hot), personal care basics, and room items. Don't forget an ISI-marked extension board — it's essential. Bring a small medicine kit but consult your doctor before packing any prescription medication." />
        </div>
      </section>

      {/* Tech Essentials */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="food.tech_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">What to Buy</p>
          <h2 className="text-section mb-2">Tech Essentials</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Minimum specs and recommended gadgets for B.Tech / M.Tech students
            at VIT-AP.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-elevated" data-ocid="food.tech_laptop_card">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl" aria-hidden="true">
                    💻
                  </span>
                  <div>
                    <h3 className="text-subsection">Laptop — Minimum Specs</h3>
                    <p className="text-xs text-muted-foreground">
                      Required for all branches
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {laptopSpecs.map((spec) => (
                    <li
                      key={spec.label}
                      className="flex items-start gap-3 text-sm"
                    >
                      <span className="text-muted-foreground shrink-0 w-24 text-xs pt-0.5">
                        {spec.label}
                      </span>
                      <span className="text-foreground font-medium">
                        {spec.value}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs font-semibold text-foreground mb-2">
                    Good to Have
                  </p>
                  <ul className="space-y-1">
                    {laptopExtras.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <span className="text-accent mt-0.5 shrink-0">+</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col gap-4">
              <Card className="card-elevated" data-ocid="food.tech_phone_card">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl" aria-hidden="true">
                      📱
                    </span>
                    <h3 className="text-subsection">Phone</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {[
                      "Any Android or iOS with 128 GB+ storage",
                      "Power bank — 10,000 mAh or above",
                      "Keep UPI and digital payments ready",
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

              <Card
                className="card-elevated"
                data-ocid="food.tech_calculator_card"
              >
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl" aria-hidden="true">
                      🧮
                    </span>
                    <div>
                      <h3 className="text-subsection">Scientific Calculator</h3>
                      <p className="text-xs text-muted-foreground">
                        Required for B.Tech / M.Tech exams
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {calculators.map((calc) => (
                      <li key={calc.model} className="text-sm">
                        <span className="font-medium text-foreground">
                          {calc.model}
                        </span>
                        <span className="text-muted-foreground text-xs ml-2">
                          — {calc.note}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          <SummaryBox text="A laptop meeting minimum specs is non-negotiable. A Casio fx-991 series calculator is required for exams. Don't forget a power bank — long days on campus mean your phone will need top-ups." />
        </div>
      </section>

      {/* Campus Food */}
      <section
        className="section-bg-light px-6 py-10 border-b border-border"
        data-ocid="food.campus_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">On Campus</p>
          <h2 className="text-section mb-2">Campus Food &amp; Shopping</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Beyond the hostel mess, these are the main places to eat, buy
            essentials, and shop on campus.
          </p>
          <div
            className="grid sm:grid-cols-2 gap-4 mb-6"
            data-ocid="food.campus_options_list"
          >
            {campusFood.map((item, i) => (
              <div
                key={item.name}
                className="bg-card border border-border rounded-xl p-4 shadow-sm flex items-start gap-3"
                data-ocid={`food.campus_option.${i + 1}`}
              >
                <span className="text-3xl shrink-0" aria-hidden="true">
                  {item.icon}
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <p className="font-semibold text-foreground text-sm font-display">
                      {item.name}
                    </p>
                    <Badge variant={item.badge} className="text-xs">
                      {item.tag}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="bg-card border border-border rounded-xl p-5 shadow-sm"
            data-ocid="food.reality_card"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0" aria-hidden="true">
                ⚠️
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm font-display mb-2">
                  What to Expect — Food Reality
                </p>
                <ul className="space-y-1.5">
                  {foodRealityPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-xs text-foreground"
                    >
                      <span className="text-accent mt-0.5 shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <SummaryBox text="Campus food covers basic needs through the mess, petty shops, Food Street, and Rock Plaza — but variety and capacity are limited during peak hours. Most students use Swiggy and Zomato for variety. Amazon, Flipkart, and fashion apps deliver directly to hostel reception." />
        </div>
      </section>

      {/* Nearby Food */}
      <section
        className="section-bg-muted px-6 py-10 border-b border-border"
        data-ocid="food.nearby_section"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-label mb-2">Outside Campus</p>
          <h2 className="text-section mb-6">Nearby Food Spots</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <BulletCard
              icon="🗺️"
              title="Around Amaravati / Undavalli"
              items={[
                "Dhabas and small eateries within 2–3 km of campus",
                "Budget meals under ₹80 widely available nearby",
                "Auto-rickshaws available for quick trips outside campus",
                "Vijayawada city is 20–30 minutes away — full restaurant scene",
              ]}
            />
            <BulletCard
              icon="🛵"
              title="Food Delivery"
              items={[
                "Swiggy and Zomato deliver to the campus hostel gates",
                "Delivery times can be longer due to campus location",
                "Order in groups to split delivery costs",
                "Most restaurants accept UPI — keep digital payments ready",
                "Very popular among students for variety beyond mess food",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Page Summary */}
      <section
        className="section-bg-light px-6 py-8"
        data-ocid="food.summary_section"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
            <p className="text-label mb-1">Summary</p>
            <p className="text-sm text-foreground">
              Arrive with all original documents and 10 photocopies of each.
              Pack smart — clothing, personal care, room essentials, and a basic
              medicine kit. Get a laptop meeting minimum specs and a Casio
              fx-991 calculator before joining. Campus food covers basic needs
              but variety and seating are limited; most students supplement with
              Swiggy or Zomato. Amazon and Flipkart deliver straight to hostel
              reception.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
