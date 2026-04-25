import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, TrendingUp, Users, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-illustration.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-20 -right-32 h-96 w-96 rounded-full bg-accent/60 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="container-zerodha py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-accent/60 px-3 py-1 text-xs font-medium text-accent-foreground">
              <Sparkles className="h-3.5 w-3.5" />
              India's largest stockbroker · Trusted by 1.6+ Cr clients
            </span>

            <h1 className="mt-5 text-4xl font-normal leading-tight text-foreground md:text-5xl lg:text-6xl">
              Invest in everything,
              <br />
              <span className="bg-gradient-to-r from-primary to-[hsl(var(--zerodha-blue-dark))] bg-clip-text text-transparent">
                the simple way.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground md:text-lg lg:mx-0">
              Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds and more.
              Zero brokerage on equity delivery. Powerful tools. Trusted by millions.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link to="/signup" className="btn-zerodha group">
                Sign up for free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/products" className="btn-zerodha-outline">
                Explore products
              </Link>
            </div>

            {/* Mini stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6 lg:max-w-md">
              {[
                { icon: Users, label: "Active clients", value: "1.6 Cr+" },
                { icon: TrendingUp, label: "Daily orders", value: "1 Cr+" },
                { icon: ShieldCheck, label: "SEBI Regulated", value: "Since '10" },
              ].map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <s.icon className="mx-auto mb-1 h-4 w-4 text-primary lg:mx-0" />
                  <div className="text-lg font-medium text-foreground md:text-xl">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual */}
          <div className="relative">
            <div className="relative mx-auto max-w-xl">
              {/* Floating cards */}
              <div className="absolute -left-4 top-8 z-10 hidden rounded-lg border border-border bg-card px-4 py-3 shadow-lg sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[hsl(var(--zerodha-green))]/10">
                    <TrendingUp className="h-4 w-4 text-[hsl(var(--zerodha-green))]" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">NIFTY 50</div>
                    <div className="text-sm font-medium text-foreground">
                      24,857.30 <span className="text-[hsl(var(--zerodha-green))]">+0.82%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-10 z-10 hidden rounded-lg border border-border bg-card px-4 py-3 shadow-lg sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Account opened</div>
                    <div className="text-sm font-medium text-foreground">in just 10 mins</div>
                  </div>
                </div>
              </div>

              {/* Glow */}
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-primary/20 via-accent to-transparent blur-2xl" />

              <img
                src={heroImg}
                alt="Person trading on laptop with charts"
                width={1280}
                height={960}
                className="w-full rounded-2xl border border-border shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Trusted by strip */}
        <div className="mt-16 border-t border-border pt-8">
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">
            Trusted by millions · Recognized by leading publications
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-medium text-muted-foreground/70">
            <span>Forbes</span>
            <span>YourStory</span>
            <span>Economic Times</span>
            <span>Bloomberg</span>
            <span>Mint</span>
            <span>Business Standard</span>
          </div>
        </div>
      </div>
    </section>
  );
};
