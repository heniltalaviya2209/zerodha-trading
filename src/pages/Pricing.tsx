import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { PageHeader } from "@/components/landing/PageHeader";
import { Link } from "react-router-dom";
import { Check, X, Shield, Zap, Wallet, TrendingUp, Calculator, FileText } from "lucide-react";

const cards = [
  {
    price: "₹0",
    title: "Free equity delivery",
    desc: "All equity delivery investments (NSE, BSE) are absolutely free — zero brokerage, forever.",
    icon: Wallet,
    badge: "Most popular",
  },
  {
    price: "₹20",
    title: "Intraday & F&O trades",
    desc: "Flat ₹20 or 0.03% (whichever is lower) per executed order across intraday and F&O.",
    icon: Zap,
    badge: "Flat rate",
  },
  {
    price: "₹0",
    title: "Free direct mutual funds",
    desc: "All direct mutual fund investments are absolutely free — zero commissions and zero DP charges.",
    icon: TrendingUp,
    badge: "Save more",
  },
];

const compare = [
  { feature: "Equity delivery brokerage", us: "₹0", others: "0.10% – 0.50%" },
  { feature: "Intraday brokerage", us: "₹20 / order (max)", others: "0.05% – 0.10%" },
  { feature: "F&O brokerage", us: "₹20 / order (flat)", others: "₹40 – ₹100 / order" },
  { feature: "Direct mutual funds", us: "Free", others: "Commission-based" },
  { feature: "Account opening (online)", us: "Free", others: "₹500 – ₹1,000" },
  { feature: "Hidden charges", us: "None", others: "Often" },
];

const brokerage = [
  ["", "Equity delivery", "Equity intraday", "F&O - Futures", "F&O - Options"],
  ["Brokerage", "Zero Brokerage", "0.03% or ₹20/order whichever is lower", "0.03% or ₹20/order whichever is lower", "Flat ₹20 per executed order"],
  ["STT/CTT", "0.1% on buy & sell", "0.025% on the sell side", "0.02% on the sell side", "0.1% on sell side (on premium)"],
  ["Transaction charges", "NSE: 0.00297%", "NSE: 0.00297%", "NSE: 0.00173%", "NSE: 0.03503% (on premium)"],
  ["GST", "18% on (brokerage + SEBI + txn)", "18% on (brokerage + SEBI + txn)", "18% on (brokerage + SEBI + txn)", "18% on (brokerage + SEBI + txn)"],
  ["SEBI charges", "₹10 / crore", "₹10 / crore", "₹10 / crore", "₹10 / crore"],
  ["Stamp charges", "0.015% on buy side", "0.003% on buy side", "0.002% on buy side", "0.003% on buy side"],
];

const dp = [
  ["DP charges", "₹13.5 + GST per scrip on the day, debited from the trading account when stocks are sold."],
  ["AMC", "₹300/year + 18% GST charged quarterly. Free for BSDA accounts (holdings up to ₹4 lakh)."],
  ["Account opening", "Online: Free. Offline & NRI: ₹500."],
  ["Pledging", "₹30 + GST per pledge request per ISIN."],
  ["Off-market transfer", "₹25 or 0.03% of the transfer value, whichever is higher."],
  ["Physical CMR request", "First CMR free, ₹20 + ₹100 courier + 18% GST for subsequent requests."],
];

const trust = [
  { stat: "1.6 Cr+", label: "Active clients" },
  { stat: "₹6 Lakh Cr+", label: "Assets under custody" },
  { stat: "15%", label: "Of all retail trades in India" },
  { stat: "0", label: "Hidden charges" },
];

const faqs = [
  { q: "Are there any hidden charges?", a: "No. All charges are listed transparently on this page. What you see is exactly what you pay — nothing more." },
  { q: "How is brokerage calculated for intraday trades?", a: "It's a flat ₹20 or 0.03% of turnover per executed order, whichever is lower. So for small trades you pay even less than ₹20." },
  { q: "Why do I need to pay statutory charges?", a: "STT, GST, SEBI, stamp duty and transaction charges are levied by the government and exchanges. They apply to every broker — we simply pass them through at actuals." },
  { q: "Is there an annual maintenance charge?", a: "Yes — ₹300/year + 18% GST, billed quarterly at ₹75. Holdings under ₹4 lakh qualify for a free BSDA account." },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHeader
          title="Simple, transparent pricing"
          subtitle="Free equity delivery and direct mutual funds. Pay a flat ₹20 per order for intraday and F&O. No hidden charges, ever."
        />

        {/* Headline cards */}
        <section className="py-16 md:py-20">
          <div className="container-zerodha grid gap-6 md:grid-cols-3">
            {cards.map((c) => (
              <div
                key={c.title}
                className="relative rounded-lg border border-border bg-card p-8 text-center transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  {c.badge}
                </span>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-accent text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="mb-2 text-5xl font-normal text-primary">{c.price}</div>
                <div className="mb-2 text-lg font-medium">{c.title}</div>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="container-zerodha mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/signup" className="btn-zerodha">Open a free account</Link>
            <Link to="/support" className="btn-zerodha-outline">Have a question?</Link>
          </div>
        </section>

        {/* Comparison */}
        <section className="border-t border-border bg-[hsl(var(--zerodha-footer-bg))] py-16 md:py-20">
          <div className="container-zerodha">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h2 className="mb-3 text-2xl font-normal md:text-3xl">How we compare</h2>
              <p className="text-muted-foreground">
                See how our pricing stacks up against traditional full-service brokers.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg border border-border bg-card">
              <div className="grid grid-cols-3 border-b border-border bg-muted text-sm font-medium">
                <div className="px-5 py-4">Feature</div>
                <div className="px-5 py-4 text-primary">Zerodha</div>
                <div className="px-5 py-4 text-muted-foreground">Other brokers</div>
              </div>
              {compare.map((c, i) => (
                <div
                  key={c.feature}
                  className={`grid grid-cols-3 text-sm ${i !== compare.length - 1 ? "border-b border-border" : ""}`}
                >
                  <div className="px-5 py-4 font-medium text-foreground">{c.feature}</div>
                  <div className="flex items-center gap-2 px-5 py-4 text-foreground">
                    <Check className="h-4 w-4 flex-shrink-0 text-[hsl(var(--zerodha-green))]" />
                    {c.us}
                  </div>
                  <div className="flex items-center gap-2 px-5 py-4 text-muted-foreground">
                    <X className="h-4 w-4 flex-shrink-0 text-[hsl(var(--zerodha-red))]" />
                    {c.others}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust stats */}
        <section className="border-t border-border py-14">
          <div className="container-zerodha">
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
              {trust.map((t) => (
                <div key={t.label} className="text-center">
                  <div className="mb-1 text-3xl font-normal text-primary md:text-4xl">{t.stat}</div>
                  <div className="text-sm text-muted-foreground">{t.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brokerage table */}
        <section className="border-t border-border py-16 md:py-20">
          <div className="container-zerodha">
            <div className="mb-8 flex items-start gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-accent text-primary">
                <Calculator className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl font-normal md:text-3xl">Charges explained</h2>
                <p className="text-sm text-muted-foreground">A complete breakdown of brokerage and statutory charges across segments.</p>
              </div>
            </div>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full border-collapse text-left text-sm">
                <tbody>
                  {brokerage.map((row, i) => (
                    <tr key={i} className={i === 0 ? "bg-muted" : "border-t border-border"}>
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className={`px-4 py-3 align-top ${i === 0 || j === 0 ? "font-medium text-foreground" : "text-muted-foreground"}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* DP charges */}
        <section className="border-t border-border bg-[hsl(var(--zerodha-footer-bg))] py-16 md:py-20">
          <div className="container-zerodha">
            <div className="mb-8 flex items-start gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-accent text-primary">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl font-normal md:text-3xl">Demat account charges</h2>
                <p className="text-sm text-muted-foreground">Standard depository charges that apply to your demat account.</p>
              </div>
            </div>
            <div className="overflow-x-auto rounded-lg border border-border bg-card">
              <table className="w-full border-collapse text-left text-sm">
                <tbody>
                  {dp.map(([k, v], i) => (
                    <tr key={k} className={i === 0 ? "" : "border-t border-border"}>
                      <td className="w-1/3 px-4 py-3 align-top font-medium text-foreground">{k}</td>
                      <td className="px-4 py-3 text-muted-foreground">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="border-t border-border py-16 md:py-20">
          <div className="container-zerodha mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-2xl font-normal md:text-3xl">Pricing FAQs</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-lg border border-border bg-card p-5">
                  <h3 className="mb-2 font-medium text-foreground">{f.q}</h3>
                  <p className="text-sm text-muted-foreground">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="border-t border-border bg-[hsl(var(--zerodha-footer-bg))] py-16">
          <div className="container-zerodha mx-auto max-w-4xl">
            <div className="mb-6 flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-normal md:text-2xl">Disclaimer</h2>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>• For delivery-based trades, a minimum of ₹0.01 will be charged per contract note.</li>
              <li>• Clients who opt to receive physical contract notes will be charged ₹20 per note plus courier charges.</li>
              <li>• Brokerage will not exceed the rates specified by SEBI and the exchanges.</li>
              <li>• All statutory and regulatory charges will be levied at actuals.</li>
              <li>• Brokerage is also charged on expired, exercised, and assigned options contracts.</li>
              <li>• Free investments are available only for our direct customers. Zero brokerage schemes via 3rd-party platforms will be charged.</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-primary py-16 text-primary-foreground">
          <div className="container-zerodha text-center">
            <h2 className="mb-3 text-2xl font-normal md:text-3xl">Stop overpaying for brokerage</h2>
            <p className="mx-auto mb-8 max-w-xl text-primary-foreground/80">
              Join 1.6 crore+ investors who've switched to transparent, flat-fee pricing.
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

export default Pricing;
