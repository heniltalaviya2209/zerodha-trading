import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Link } from "react-router-dom";
import {
  Search,
  Phone,
  Mail,
  MessageSquare,
  UserPlus,
  Wallet,
  LineChart,
  Coins,
  LayoutDashboard,
  Settings,
  ChevronRight,
  BookOpen,
  Video,
  FileQuestion,
  Clock,
  Shield,
  Star,
} from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const topics = [
  {
    title: "Account opening",
    icon: UserPlus,
    desc: "Open a new account, KYC, NRI accounts and more.",
    items: ["Resident individual", "Minor", "Non Resident Indian (NRI)", "Company, Partnership, HUF & LLP", "Glossary"],
  },
  {
    title: "Your account",
    icon: Settings,
    desc: "Manage logins, modify details and add nominees.",
    items: ["Login credentials", "Account modification", "Charges", "CMR & DP ID", "Nomination", "Securities transfer"],
  },
  {
    title: "Kite",
    icon: LineChart,
    desc: "Trading platform — IPOs, orders, charts and alerts.",
    items: ["IPO", "Trading FAQs", "Margin Trading Facility (MTF)", "Charts and orders", "Alerts and Nudges", "General"],
  },
  {
    title: "Funds",
    icon: Wallet,
    desc: "Add and withdraw funds, manage bank accounts.",
    items: ["Add money", "Withdraw money", "Add bank accounts", "eMandates", "UPI"],
  },
  {
    title: "Console",
    icon: LayoutDashboard,
    desc: "Reports, statements, P&L and corporate actions.",
    items: ["Portfolio", "Corporate actions", "Funds statement", "Reports", "Profile", "Segments"],
  },
  {
    title: "Coin",
    icon: Coins,
    desc: "Mutual funds, NPS, FDs and bond investments.",
    items: ["Mutual funds", "NPS", "Fixed Deposits", "Features on Coin", "Payments and Orders", "General"],
  },
];

const announcements = [
  { date: "Apr 2026", title: "T+0 settlement now available for top 500 stocks on NSE & BSE.", tag: "New" },
  { date: "Mar 2026", title: "Updated margin requirements for index F&O contracts effective Apr 1.", tag: "Update" },
  { date: "Mar 2026", title: "Holiday schedule for FY 2026-27 — list of trading holidays published.", tag: "Notice" },
  { date: "Feb 2026", title: "Kite 4.0 rolling out — new charts, faster order placement, revamped GTT.", tag: "Release" },
];

const contacts = [
  { icon: Phone, label: "Account opening", value: "+91 80 4719 2020", note: "Mon - Fri, 9 AM to 6 PM" },
  { icon: Phone, label: "Existing client support", value: "080 4040 2020", note: "Mon - Fri, 9 AM to 5 PM" },
  { icon: Mail, label: "Email support", value: "support@zerodha.com", note: "Replies within 24 hours" },
  { icon: MessageSquare, label: "Complaints", value: "complaints@zerodha.com", note: "For grievances and escalations" },
];

const guides = [
  { icon: BookOpen, title: "Getting started guide", desc: "Step-by-step walkthrough from account opening to your first trade.", time: "10 min read" },
  { icon: Video, title: "Video tutorials", desc: "Watch short videos covering Kite, Console, Coin and advanced features.", time: "20+ videos" },
  { icon: FileQuestion, title: "Knowledge base", desc: "Browse 1,000+ articles answering everything you'd want to know.", time: "Searchable" },
];

const faqs = [
  {
    q: "How do I open a Zerodha account?",
    a: "You can open an account online in under 10 minutes. You'll need your PAN, Aadhaar, a cancelled cheque or bank statement, and your signature. Visit the Sign up page and follow the guided flow.",
  },
  {
    q: "How long does account activation take?",
    a: "Most accounts are activated within 24 hours after document submission. NRI and offline applications can take 3–5 business days.",
  },
  {
    q: "What are the charges for trading and investing?",
    a: "Equity delivery and direct mutual funds are free. Intraday and F&O trades are charged a flat ₹20 or 0.03% per executed order, whichever is lower. See our Pricing page for the full breakdown.",
  },
  {
    q: "How do I add funds to my account?",
    a: "You can add funds instantly via UPI, IMPS, NEFT, RTGS or by setting up an eMandate. Net banking transfers are processed in real-time during business hours.",
  },
  {
    q: "Is my money and data safe with Zerodha?",
    a: "Yes. Your funds are held with clearing corporations of NSE and BSE. We use 2FA, end-to-end encryption and SEBI-mandated cyber audits to protect your data.",
  },
  {
    q: "How do I raise a complaint or escalate a grievance?",
    a: "Email complaints@zerodha.com first. If unresolved, you can escalate to our Compliance Officer or use SEBI's SCORES portal and the Smart ODR portal.",
  },
];

const trust = [
  { icon: Clock, title: "24-hour response", desc: "Average first response time for support tickets." },
  { icon: Shield, title: "SEBI regulated", desc: "Fully compliant broker, member of NSE, BSE & MCX." },
  { icon: Star, title: "Highest NPS in India", desc: "Net Promoter Score of 65+ from 1.6 Cr+ clients." },
];

const Support = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero search */}
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-primary to-[hsl(var(--zerodha-blue-dark))] py-20 text-primary-foreground md:py-24">
          <div className="container-zerodha relative">
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-block rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-medium uppercase tracking-wide">
                Support Portal
              </span>
              <h1 className="mb-4 text-3xl font-normal md:text-5xl">How can we help you today?</h1>
              <p className="mx-auto mb-8 max-w-xl text-primary-foreground/80">
                Search our help center, browse guides, or reach out to our friendly support team.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center gap-2 rounded-lg bg-background p-2 text-foreground shadow-lg"
              >
                <Search className="ml-2 h-5 w-5 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for 'activate F&O', 'add funds', 'KYC'..."
                  className="w-full bg-transparent px-1 py-2 text-sm outline-none"
                />
                <button
                  type="submit"
                  className="rounded-[3px] bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-[hsl(var(--zerodha-blue-dark))]"
                >
                  Search
                </button>
              </form>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
                <span>Popular:</span>
                {["Activate F&O", "Add bank", "Reset password", "Tax P&L"].map((t) => (
                  <a key={t} href="#" className="hover:text-primary-foreground hover:underline">
                    {t}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="border-b border-border bg-[hsl(var(--zerodha-footer-bg))] py-8">
          <div className="container-zerodha grid gap-6 sm:grid-cols-3">
            {trust.map((t) => (
              <div key={t.title} className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-accent text-primary">
                  <t.icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-medium">{t.title}</div>
                  <div className="text-xs text-muted-foreground">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Topic cards */}
        <section className="py-16 md:py-20">
          <div className="container-zerodha">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h2 className="mb-3 text-2xl font-normal md:text-3xl">Browse help by topic</h2>
              <p className="text-muted-foreground">
                Pick a category to find articles, guides and step-by-step instructions.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {topics.map((t) => (
                <div
                  key={t.title}
                  className="group rounded-lg border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                >
                  <div className="mb-4 flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-accent text-primary">
                      <t.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium">{t.title}</h3>
                      <p className="text-xs text-muted-foreground">{t.desc}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    {t.items.map((i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="flex items-center justify-between gap-2 text-muted-foreground transition-colors hover:text-primary"
                        >
                          <span>{i}</span>
                          <ChevronRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guides */}
        <section className="border-t border-border bg-[hsl(var(--zerodha-footer-bg))] py-16 md:py-20">
          <div className="container-zerodha">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h2 className="mb-3 text-2xl font-normal md:text-3xl">Help guides & resources</h2>
              <p className="text-muted-foreground">
                Whether you're just starting out or looking to master advanced features, we've got you covered.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {guides.map((g) => (
                <a
                  key={g.title}
                  href="#"
                  className="group rounded-lg border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-accent text-primary">
                    <g.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-lg font-medium">{g.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{g.desc}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-xs text-muted-foreground">{g.time}</span>
                    <span className="font-medium text-primary group-hover:underline">Explore →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Announcements */}
        <section className="border-t border-border py-16 md:py-20">
          <div className="container-zerodha">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <h2 className="text-2xl font-normal md:text-3xl">Featured announcements</h2>
                <p className="mt-1 text-sm text-muted-foreground">Important updates, releases and policy changes.</p>
              </div>
              <a href="#" className="hidden text-sm text-primary hover:underline sm:inline">
                View all →
              </a>
            </div>
            <div className="space-y-3">
              {announcements.map((a) => (
                <a
                  key={a.title}
                  href="#"
                  className="flex flex-col rounded-lg border border-border bg-card px-5 py-4 transition-colors hover:border-primary/40 md:flex-row md:items-center md:gap-6"
                >
                  <div className="mb-1 flex items-center gap-3 md:mb-0 md:w-44">
                    <span className="text-xs uppercase tracking-wide text-muted-foreground">{a.date}</span>
                    <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-medium uppercase text-accent-foreground">
                      {a.tag}
                    </span>
                  </div>
                  <span className="flex-1 text-sm">{a.title}</span>
                  <ChevronRight className="hidden h-4 w-4 text-muted-foreground md:block" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="border-t border-border bg-[hsl(var(--zerodha-footer-bg))] py-16 md:py-20">
          <div className="container-zerodha mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <h2 className="mb-3 text-2xl font-normal md:text-3xl">Frequently asked questions</h2>
              <p className="text-muted-foreground">Quick answers to the questions we get asked most often.</p>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${i}`}
                  className="rounded-lg border border-border bg-card px-5"
                >
                  <AccordionTrigger className="text-left text-sm font-medium hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-border py-16 md:py-20">
          <div className="container-zerodha">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h2 className="mb-3 text-2xl font-normal md:text-3xl">Still need help? Get in touch</h2>
              <p className="text-muted-foreground">
                Most queries are answered through our support articles. For everything else, our team is here.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {contacts.map((c) => (
                <div
                  key={c.label}
                  className="rounded-lg border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-accent text-primary">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div className="mb-1 text-xs uppercase tracking-wide text-muted-foreground">{c.label}</div>
                  <div className="mb-1 text-sm font-medium text-foreground">{c.value}</div>
                  <div className="text-xs text-muted-foreground">{c.note}</div>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-12 max-w-3xl rounded-lg border border-border bg-[hsl(var(--zerodha-footer-bg))] p-6 text-sm text-muted-foreground">
              <p className="mb-2 font-medium text-foreground">Investor grievance escalation</p>
              <p className="mb-2">
                If you are unsatisfied with our response, you can escalate to the Compliance Officer at{" "}
                <a href="#" className="text-primary hover:underline">compliance@zerodha.com</a> or call 080 4719 2020.
              </p>
              <p>
                Investors can also approach SEBI's SCORES portal or the Smart ODR portal for grievance redressal.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-primary py-16 text-primary-foreground">
          <div className="container-zerodha text-center">
            <h2 className="mb-3 text-2xl font-normal md:text-3xl">Ready to start your investing journey?</h2>
            <p className="mx-auto mb-8 max-w-xl text-primary-foreground/80">
              Open your free account in under 10 minutes and start trading the same day.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center justify-center rounded-[3px] bg-background px-7 py-3 text-base font-medium text-primary transition-colors hover:bg-background/90"
            >
              Open a free account
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
