import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { PageHeader } from "@/components/landing/PageHeader";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Zap,
  Users,
  Award,
} from "lucide-react";

const trading = [
  {
    name: "Kite",
    image: "/media/images/kite.png",
    desc: "Sleek, fast, and modern flagship trading platform on web and mobile. Trade equity, F&O, currencies and commodities seamlessly.",
    tags: ["Android", "iOS", "Web"],
    highlight: "1.6 Cr+ users",
  },
  {
    name: "Kite Connect API",
    image: "/media/images/kiteconnect.png",
    desc: "Build powerful trading platforms and bespoke experiences with our HTTP and WebSocket APIs. Trusted by 1000+ developers.",
    tags: ["HTTP", "WebSocket"],
    highlight: "Developer-first",
  },
  {
    name: "Sentinel",
    image: "/media/images/intradayTrades.svg",
    desc: "Create real-time market alerts on the cloud across asset classes — no programming required. Never miss a setup again.",
    tags: ["Web"],
    highlight: "Real-time",
  },
];

const investment = [
  {
    name: "Console",
    image: "/media/images/console.png",
    desc: "The central dashboard for your account. Detailed P&L reports, tax statements, holdings analytics and family overviews.",
    tags: ["Web"],
    highlight: "Analytics",
  },
  {
    name: "Coin",
    image: "/media/images/coin.png",
    desc: "Buy direct mutual funds online — commission-free, delivered straight to your demat account. SIPs and lump sums made simple.",
    tags: ["Android", "iOS", "Web"],
    highlight: "₹0 commission",
  },
  {
    name: "Smallcase",
    image: "/media/images/smallcaseLogo.png",
    desc: "Invest in baskets of stocks built around themes and ideas, professionally curated by SEBI-registered managers.",
    tags: ["Partner"],
    highlight: "Theme-based",
  },
];

const learning = [
  {
    name: "Varsity",
    image: "/media/images/varsity.png",
    desc: "An easy-to-grasp collection of stock market lessons with in-depth coverage and rich illustrations. Free, forever.",
    tags: ["Web"],
    highlight: "200+ chapters",
  },
  {
    name: "Varsity Mobile",
    image: "/media/images/education.svg",
    desc: "Bite-sized lessons for stock market education on the go. Learn during your commute, in 5 minutes a day.",
    tags: ["Android", "iOS"],
    highlight: "Bite-sized",
  },
  {
    name: "TradingQ&A",
    image: "/media/images/intradayTrades.svg",
    desc: "The most active stock market discussion forum in India. Ask, learn and share with a community of 5L+ traders.",
    tags: ["Web"],
    highlight: "5L+ members",
  },
];

const partners = [
  { name: "Streak", desc: "Algo trading without code", image: "/media/images/streakLogo.png" },
  { name: "Smallcase", desc: "Theme-based investing", image: "/media/images/smallcaseLogo.png" },
  { name: "GoldenPi", desc: "Online bonds platform", image: "/media/images/goldenpiLogo.png" },
  { name: "Ditto", desc: "Personalised insurance advice", image: "/media/images/dittoLogo.png" },
  { name: "Sensibull", desc: "Advanced options platform", image: "/media/images/sensibullLogo.svg" },
  { name: "Zerodha Fund House", desc: "Mutual fund products", image: "/media/images/zerodhaFundhouse.png" },
];

const why = [
  { icon: Zap, title: "Lightning fast", desc: "Order execution in under 50ms with 99.99% uptime, even on volatile market days." },
  { icon: Shield, title: "Bank-grade security", desc: "2FA, biometric login, end-to-end encryption and SEBI-mandated cyber audits." },
  { icon: Users, title: "Loved by 1.6 Cr+", desc: "India's largest broker by active clients, with a Net Promoter Score of 65+." },
  { icon: Award, title: "Award-winning UX", desc: "Recognized by industry bodies for the cleanest, most intuitive trading experience." },
];

const ProductCard = ({ p }: { p: (typeof trading)[number] }) => (
  <div className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
    <img
      src={p.image}
      alt={p.name}
      width={56}
      height={56}
      loading="lazy"
      className="mb-4 h-11 w-11 rounded-md object-contain"
    />
    <div className="mb-2 flex items-center gap-2">
      <h3 className="text-xl font-medium text-foreground">{p.name}</h3>
      <span className="rounded-full bg-[hsl(var(--zerodha-footer-bg))] px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
        {p.highlight}
      </span>
    </div>
    <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
    <div className="mb-4 flex flex-wrap gap-2">
      {p.tags.map((t) => (
        <span key={t} className="rounded-full bg-accent px-2.5 py-0.5 text-xs text-accent-foreground">
          {t}
        </span>
      ))}
    </div>
    <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
      Learn more <ArrowRight className="h-3.5 w-3.5" />
    </a>
  </div>
);

const Section = ({ title, subtitle, items }: { title: string; subtitle: string; items: typeof trading }) => (
  <div className="mb-16 last:mb-0">
    <div className="mb-8 max-w-2xl">
      <h2 className="mb-2 text-2xl font-normal text-foreground md:text-3xl">{title}</h2>
      <p className="text-muted-foreground">{subtitle}</p>
    </div>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => (
        <ProductCard key={p.name} p={p} />
      ))}
    </div>
  </div>
);

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHeader
          title="Built for the modern investor"
          subtitle="A complete ecosystem of sleek, modern and intuitive platforms for trading, investing and learning — all built in-house."
        />

        {/* Why our platforms */}
        <section className="py-16 md:py-20">
          <div className="container-zerodha">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {why.map((w) => (
                <div key={w.title} className="rounded-lg border border-border bg-card p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-accent text-primary">
                    <w.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-1.5 text-base font-medium">{w.title}</h3>
                  <p className="text-sm text-muted-foreground">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="border-t border-border bg-[hsl(var(--zerodha-footer-bg))] py-16 md:py-20">
          <div className="container-zerodha">
            <Section
              title="Trading platforms"
              subtitle="Place orders, analyse charts and manage positions with industry-leading speed and clarity."
              items={trading}
            />
            <Section
              title="Investment platforms"
              subtitle="Build long-term wealth with mutual funds, stocks and curated baskets — all in one account."
              items={investment}
            />
            <Section
              title="Learning & community"
              subtitle="Free, structured education and an engaged community to help you become a better investor."
              items={learning}
            />
          </div>
        </section>

        {/* Partners */}
        <section className="border-t border-border py-16 md:py-20">
          <div className="container-zerodha">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h2 className="mb-3 text-2xl font-normal md:text-3xl">An ecosystem of partner products</h2>
              <p className="text-muted-foreground">
                Investments by Rainmatter, our fintech fund and incubator, that complement our core products and expand what's possible.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {partners.map((p) => (
                <a
                  key={p.name}
                  href="#"
                  className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40"
                >
                  <div className="mb-1 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={p.image}
                        alt={p.name}
                        width={80}
                        height={26}
                        loading="lazy"
                        className="h-6 w-auto object-contain"
                      />
                      <span className="font-medium text-foreground">{p.name}</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-primary py-16 text-primary-foreground">
          <div className="container-zerodha text-center">
            <h2 className="mb-3 text-2xl font-normal md:text-3xl">Start using our platforms today</h2>
            <p className="mx-auto mb-8 max-w-xl text-primary-foreground/80">
              Open a free account in under 10 minutes and get instant access to the entire ecosystem.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center rounded-[3px] bg-background px-7 py-3 text-base font-medium text-primary transition-colors hover:bg-background/90"
              >
                Get started — it's free
              </Link>
              <Link
                to="/support"
                className="inline-flex items-center justify-center rounded-[3px] border border-primary-foreground/40 px-7 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Talk to support
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
