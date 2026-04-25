import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  TrendingUp,
  Wallet,
  Calendar,
  Heart,
  Eye,
  Compass,
  Sparkles,
  BookOpen,
  Rocket,
  Globe,
  Award,
  Quote,
} from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

const team = [
  { name: "Nithin Kamath", role: "Founder, CEO" },
  { name: "Nikhil Kamath", role: "Co-founder & CFO" },
  { name: "Kailash Nadh", role: "CTO" },
  { name: "Venu Madhav", role: "COO" },
  { name: "Hanan Delvi", role: "Chief of Client Relations" },
  { name: "Karthik Rangappa", role: "Chief of Education" },
  { name: "Austin Prakesh", role: "Director Strategy" },
  { name: "Seema Patil", role: "Director of Quality" },
];

const stats = [
  { v: "1.6+ Cr", l: "Active clients", icon: Users },
  { v: "15%+", l: "Of retail trading volumes", icon: TrendingUp },
  { v: "₹4+ Lakh Cr", l: "Equity assets in custody", icon: Wallet },
  { v: "2010", l: "Year of founding", icon: Calendar },
];

const values = [
  {
    t: "Customer first",
    d: "Every product decision is taken with the customer in mind — no hidden fees, no dark patterns.",
    icon: Heart,
  },
  {
    t: "Radical transparency",
    d: "Pricing, charges, and policies — everything is out in the open and easy to understand.",
    icon: Eye,
  },
  {
    t: "Long-term thinking",
    d: "We optimise for sustainability and trust, not for quarterly numbers or vanity metrics.",
    icon: Compass,
  },
];

const milestones = [
  { y: "2010", t: "Founded", d: "Started operations on 15th August with a mission to remove barriers in investing." },
  { y: "2013", t: "₹20 flat pricing", d: "Pioneered discount broking in India with our flat fee model." },
  { y: "2015", t: "Kite launched", d: "Launched our flagship in-house trading platform built from the ground up." },
  { y: "2017", t: "Coin & Console", d: "Direct mutual funds and a powerful back-office reporting suite." },
  { y: "2020", t: "1 Cr clients", d: "Crossed the 1 crore active client milestone — India's largest broker." },
  { y: "2024", t: "Continuing to build", d: "Investing in fintech via Rainmatter and shaping retail capital markets." },
];

const initiatives = [
  { t: "Varsity", d: "The largest free online stock-market education library, used by millions.", icon: BookOpen },
  { t: "Rainmatter", d: "Our fintech fund and incubator backing startups that grow Indian capital markets.", icon: Rocket },
  { t: "TradingQ&A", d: "India's most active community forum for traders and long-term investors.", icon: Globe },
  { t: "Recognition", d: "Featured by Forbes, ET, Bloomberg and recognised by SEBI as a category-leader.", icon: Award },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-accent/60 blur-3xl" />
          </div>
          <div className="container-zerodha py-20 text-center md:py-28">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-accent/60 px-3 py-1 text-xs font-medium text-accent-foreground">
              <Sparkles className="h-3.5 w-3.5" />
              About us · Est. 2010
            </span>
            <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-normal leading-tight md:text-5xl lg:text-6xl">
              Changing the way{" "}
              <span className="bg-gradient-to-r from-primary to-[hsl(var(--zerodha-blue-dark))] bg-clip-text text-transparent">
                India invests.
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
              We're an Indian financial services company on a mission to break the barriers
              that traders and investors face in cost, support and technology.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/signup" className="btn-zerodha group">
                Open an account
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/products" className="btn-zerodha-outline">
                Explore products
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-border bg-[hsl(var(--zerodha-footer-bg))] py-14">
          <div className="container-zerodha grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.l}
                className="rounded-xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-md"
              >
                <s.icon className="mx-auto mb-3 h-5 w-5 text-primary" />
                <div className="mb-1 text-3xl font-normal text-foreground md:text-4xl">{s.v}</div>
                <div className="text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="container-zerodha grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="text-xs font-medium uppercase tracking-widest text-primary">
                Our story
              </span>
              <h2 className="mt-3 text-3xl font-normal md:text-4xl">
                Built to remove barriers.
              </h2>
              <p className="mt-4 text-muted-foreground">
                "Zerodha" combines <em>Zero</em> and <em>Rodha</em>, the Sanskrit word for
                barrier — that's the philosophy that drives every product we build.
              </p>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <p>
                We kicked off operations on 15th August 2010 with a single goal — to break
                every barrier that traders and investors face in India when it comes to cost,
                support and technology.
              </p>
              <p>
                Today, our disruptive pricing models and in-house technology have made us
                India's largest stock broker. Over <strong className="text-foreground">1.6+ crore clients</strong> place
                lakhs of orders every day through our ecosystem of investment platforms,
                contributing more than 15% of all Indian retail trading volumes.
              </p>
              <p>
                Beyond broking, we run popular educational and community initiatives to empower
                retail investors. Our fintech fund Rainmatter has invested in dozens of
                startups committed to growing the Indian capital markets — and we're just
                getting started.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy / Values */}
        <section className="border-y border-border bg-secondary/40 py-20">
          <div className="container-zerodha">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-medium uppercase tracking-widest text-primary">
                Our philosophy
              </span>
              <h2 className="mt-3 text-3xl font-normal md:text-4xl">
                No marketing. No gimmicks. Just trust.
              </h2>
              <p className="mt-4 text-muted-foreground">
                We don't spend on advertising, celebrity endorsements or flashy campaigns.
                Our growth has been entirely word of mouth — thanks to our customers.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {values.map((v) => (
                <div
                  key={v.t}
                  className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-lg font-medium text-foreground">{v.t}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="container-zerodha">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-medium uppercase tracking-widest text-primary">
                Milestones
              </span>
              <h2 className="mt-3 text-3xl font-normal md:text-4xl">A journey of firsts</h2>
              <p className="mt-4 text-muted-foreground">
                From a small Bengaluru office to India's largest broker — a few moments
                that shaped us along the way.
              </p>
            </div>

            <div className="relative mt-14">
              <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />
              <div className="space-y-10">
                {milestones.map((m, i) => (
                  <div
                    key={m.y}
                    className={`relative md:grid md:grid-cols-2 md:gap-10 ${
                      i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                    }`}
                  >
                    <div className={`md:text-right ${i % 2 === 0 ? "" : "md:text-left"}`}>
                      <div className="rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md">
                        <div className="mb-1 text-sm font-medium text-primary">{m.y}</div>
                        <h3 className="mb-1 text-lg font-medium">{m.t}</h3>
                        <p className="text-sm text-muted-foreground">{m.d}</p>
                      </div>
                    </div>
                    <div className="hidden md:block" />
                    <span className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-background bg-primary md:left-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* People */}
        <section className="border-t border-border bg-[hsl(var(--zerodha-footer-bg))] py-20">
          <div className="container-zerodha">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-medium uppercase tracking-widest text-primary">
                People
              </span>
              <h2 className="mt-3 text-3xl font-normal md:text-4xl">
                The team behind Zerodha
              </h2>
              <p className="mt-4 text-muted-foreground">
                A small, focused team of engineers, designers and market experts building
                products we'd want to use ourselves.
              </p>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
              {team.map((p) => (
                <div
                  key={p.name}
                  className="group rounded-xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[hsl(var(--zerodha-blue-dark))] text-xl font-medium text-primary-foreground shadow-md">
                    {p.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="font-medium text-foreground">{p.name}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{p.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="py-20">
          <div className="container-zerodha">
            <div className="relative mx-auto max-w-3xl rounded-2xl border border-border bg-card p-10 text-center shadow-sm md:p-14">
              <Quote className="mx-auto mb-4 h-8 w-8 text-primary/40" />
              <p className="text-xl font-normal leading-relaxed text-foreground md:text-2xl">
                "We've always believed that the best products are built when you focus on
                solving real problems for real people — not chasing valuations or vanity
                metrics."
              </p>
              <div className="mt-6 text-sm text-muted-foreground">
                — Nithin Kamath, Founder &amp; CEO
              </div>
            </div>
          </div>
        </section>

        {/* Initiatives */}
        <section className="border-t border-border bg-secondary/40 py-20">
          <div className="container-zerodha">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-medium uppercase tracking-widest text-primary">
                Beyond broking
              </span>
              <h2 className="mt-3 text-3xl font-normal md:text-4xl">
                Initiatives we're proud of
              </h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {initiatives.map((i) => (
                <div
                  key={i.t}
                  className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <i.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-medium text-foreground">{i.t}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{i.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border py-20">
          <div className="container-zerodha">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-[hsl(var(--zerodha-blue-dark))] px-8 py-14 text-center text-primary-foreground md:px-14">
              <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <h2 className="text-3xl font-normal md:text-4xl">
                Join 1.6+ Cr investors who trust Zerodha
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-primary-foreground/90">
                Open a free Demat &amp; trading account in just a few minutes. Zero brokerage
                on equity delivery, forever.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center rounded-[3px] bg-background px-7 py-3 text-base font-medium text-primary transition-colors hover:bg-background/90"
                >
                  Sign up for free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/support"
                  className="inline-flex items-center justify-center rounded-[3px] border border-primary-foreground/40 px-7 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-white/10"
                >
                  Contact support
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
