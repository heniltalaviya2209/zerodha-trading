const tiers = [
  {
    price: "₹0",
    title: "Free equity delivery",
    image: "/media/images/pricingEquity.svg",
    desc: "All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.",
  },
  {
    price: "₹20",
    title: "Intraday and F&O trades",
    image: "/media/images/pricing0.svg",
    desc: "Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity.",
  },
  {
    price: "₹0",
    title: "Free direct MF",
    image: "/media/images/pricingMF.svg",
    desc: "All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.",
  },
];

export const Pricing = () => {
  return (
    <section className="border-y border-border py-16 md:py-24">
      <div className="container-zerodha grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-normal md:text-4xl">Unbeatable pricing</h2>
          <p className="mb-4 text-muted-foreground">
            We pioneered the concept of discount broking and price transparency in India. Flat fees and
            no hidden charges.
          </p>
          <a href="#" className="text-primary hover:underline">See pricing →</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.title} className="text-center">
              <img
                src={t.image}
                alt={t.title}
                width={72}
                height={72}
                loading="lazy"
                className="mx-auto mb-3 h-14 w-14"
              />
              <div className="mb-3 text-3xl font-normal text-primary">{t.price}</div>
              <div className="mb-2 text-sm font-medium">{t.title}</div>
              <p className="text-xs text-muted-foreground">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
