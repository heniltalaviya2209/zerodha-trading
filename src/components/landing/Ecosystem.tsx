const products = ["Console", "Coin", "Kite Connect", "Varsity", "Trading Q&A"];

export const Ecosystem = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-zerodha grid items-center gap-12 md:grid-cols-2">
        <div className="text-center md:text-left">
          <h2 className="mb-5 text-3xl font-normal md:text-4xl">The Zerodha Universe</h2>
          <p className="mb-8 text-muted-foreground">
            Extend your trading and investment experience even further with our partner platforms.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:justify-start">
            {products.map((p) => (
              <a key={p} href="#" className="text-sm text-primary hover:underline">
                {p} →
              </a>
            ))}
          </div>
        </div>
        <img
          src="/media/images/ecosystem.png"
          alt="Zerodha ecosystem"
          width={1024}
          height={768}
          loading="lazy"
          className="w-full"
        />
      </div>
    </section>
  );
};
