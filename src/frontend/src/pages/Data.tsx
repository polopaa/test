import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "../components/Layout";

const cutoffItems = [
  {
    branch: "CSE (Core)",
    demand: "Very High",
    rank: "< 10,000",
    note: "Most competitive branch",
  },
  {
    branch: "CSE – AI/ML",
    demand: "Very High",
    rank: "< 15,000",
    note: "Growing rapidly in demand",
  },
  {
    branch: "ECE",
    demand: "High",
    rank: "< 30,000",
    note: "Solid engineering foundation",
  },
  {
    branch: "IT",
    demand: "High",
    rank: "< 25,000",
    note: "Similar curriculum to CSE",
  },
  {
    branch: "EEE",
    demand: "Medium",
    rank: "< 50,000",
    note: "Core engineering path",
  },
  {
    branch: "Mechanical",
    demand: "Low–Medium",
    rank: "< 80,000",
    note: "Historically easier to get",
  },
  {
    branch: "Civil",
    demand: "Low",
    rank: "Any rank",
    note: "Lowest cutoff historically",
  },
];

const recruiters = [
  {
    tier: "Super Dream",
    companies: "Amazon, Deloitte, KPMG",
    pkg: "10+ LPA",
    color: "text-accent",
  },
  {
    tier: "Dream",
    companies: "Accenture, LTIMindtree, L&T",
    pkg: "6–10 LPA",
    color: "text-primary",
  },
  {
    tier: "Regular",
    companies: "TCS, Infosys, Wipro, Cognizant, Capgemini",
    pkg: "3.5–6 LPA",
    color: "text-foreground",
  },
];

const trends = [
  {
    icon: "📈",
    title: "CGPA matters a lot",
    desc: "CGPA ≥ 7.5 unlocks more placement opportunities and higher-tier company drives.",
  },
  {
    icon: "💻",
    title: "CS branches lead",
    desc: "CSE and IT students consistently have the highest placement rates and average packages.",
  },
  {
    icon: "🏗️",
    title: "Core branches improving",
    desc: "Civil, Mech, and EEE placements are growing but still fewer offers compared to CS.",
  },
  {
    icon: "📜",
    title: "Certifications boost chances",
    desc: "AWS, Azure, and Google certifications are valued by recruiters and strengthen your profile.",
  },
  {
    icon: "🤝",
    title: "Internship is an edge",
    desc: "A 6th semester internship gives a major competitive advantage during final placements.",
  },
  {
    icon: "🏅",
    title: "Club involvement counts",
    desc: "Active participation in technical clubs and projects improves your overall placement profile.",
  },
];

export default function Data() {
  return (
    <Layout>
      {/* Page header */}
      <section className="section-bg-light px-6 py-10 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Badge
            variant="secondary"
            className="mb-3 text-xs font-semibold tracking-wide"
          >
            📊 Data & Insights
          </Badge>
          <h1 className="text-section text-foreground mb-2">Data & Insights</h1>
          <p className="text-muted-foreground text-sm max-w-xl">
            General trends on admission cutoffs, placements, and career outcomes
            at VIT-AP. All figures reflect historical patterns — not guarantees.
          </p>
        </div>
      </section>

      {/* Admission Cutoffs */}
      <section
        className="section-bg-muted px-6 py-10"
        data-ocid="data.cutoffs_section"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-subsection text-foreground mb-1">
            Admission Cutoffs
          </h2>
          <p className="text-xs text-muted-foreground mb-5">
            Based on VITEEE rank — general trends, varies yearly by exam
            difficulty and applicant pool.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table
              className="w-full text-sm bg-card"
              data-ocid="data.cutoffs_table"
            >
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left px-4 py-3 font-display font-semibold text-foreground">
                    Branch
                  </th>
                  <th className="text-left px-4 py-3 font-display font-semibold text-foreground">
                    Demand
                  </th>
                  <th className="text-left px-4 py-3 font-display font-semibold text-foreground">
                    Typical Rank Range
                  </th>
                  <th className="text-left px-4 py-3 font-display font-semibold text-foreground hidden md:table-cell">
                    Note
                  </th>
                </tr>
              </thead>
              <tbody>
                {cutoffItems.map((row, i) => (
                  <tr
                    key={row.branch}
                    className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors"
                    data-ocid={`data.cutoff_row.${i + 1}`}
                  >
                    <td className="px-4 py-3 font-medium text-foreground">
                      {row.branch}
                    </td>
                    <td className="px-4 py-3">
                      <Badge
                        variant={
                          row.demand === "Very High"
                            ? "default"
                            : row.demand === "High"
                              ? "secondary"
                              : "outline"
                        }
                        className="text-xs"
                      >
                        {row.demand}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 font-mono text-sm text-primary font-semibold">
                      {row.rank}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            💡 VITEEE rank below 50,000 typically gives access to most CSE
            branches. Cutoffs shift each year.
          </p>
        </div>
      </section>

      {/* Placement Overview */}
      <section
        className="section-bg-light px-6 py-10 border-t border-border"
        data-ocid="data.placements_section"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-subsection text-foreground mb-1">
            Placement Overview
          </h2>
          <p className="text-xs text-muted-foreground mb-5">
            VIT-AP's Career Development Centre (CDC) manages placement drives.
            Drives typically start in the 7th semester.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="card-elevated text-center">
              <CardContent className="p-5">
                <p className="text-3xl font-display font-bold text-primary">
                  5–7 LPA
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Average package
                </p>
                <p className="text-xs text-muted-foreground">
                  (varies by year & branch)
                </p>
              </CardContent>
            </Card>
            <Card className="card-elevated text-center">
              <CardContent className="p-5">
                <p className="text-3xl font-display font-bold text-accent">
                  10+ LPA
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Top performer packages
                </p>
                <p className="text-xs text-muted-foreground">
                  (CS branches, high CGPA)
                </p>
              </CardContent>
            </Card>
            <Card className="card-elevated text-center">
              <CardContent className="p-5">
                <p className="text-3xl font-display font-bold text-foreground">
                  7th Sem
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  When drives begin
                </p>
                <p className="text-xs text-muted-foreground">
                  (internships from 6th sem)
                </p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-label mb-3">Recruiter Tiers</h3>
          <div className="space-y-3">
            {recruiters.map((tier, i) => (
              <div
                key={tier.tier}
                className="card-elevated rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-3"
                data-ocid={`data.recruiter_tier.${i + 1}`}
              >
                <div className="shrink-0 min-w-[100px]">
                  <span
                    className={`text-sm font-display font-bold ${tier.color}`}
                  >
                    {tier.tier}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground">{tier.companies}</p>
                </div>
                <Badge
                  variant="outline"
                  className="shrink-0 text-xs font-semibold"
                >
                  {tier.pkg}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Trends */}
      <section
        className="section-bg-muted px-6 py-10"
        data-ocid="data.trends_section"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-subsection text-foreground mb-5">
            General Trends
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {trends.map((t, i) => (
              <div
                key={t.title}
                className="card-elevated rounded-xl p-4"
                data-ocid={`data.trend_card.${i + 1}`}
              >
                <span className="text-2xl mb-2 block" aria-hidden="true">
                  {t.icon}
                </span>
                <p className="font-display font-semibold text-sm text-foreground mb-1">
                  {t.title}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary banner */}
      <section className="section-bg-light px-6 py-8 border-t border-border">
        <div className="max-w-4xl mx-auto flex items-start gap-3">
          <span className="text-2xl shrink-0 mt-0.5" aria-hidden="true">
            📌
          </span>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Summary: </span>
            Placement outcomes at VIT-AP depend on branch, CGPA, and proactive
            career preparation. Data shown reflects general trends, not
            guarantees. Stay proactive — certifications, internships, and club
            activities make a real difference.
          </p>
        </div>
      </section>
    </Layout>
  );
}
