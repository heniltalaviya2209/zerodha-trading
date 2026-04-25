export const Trust = () => {
  const stats = [
    { value: "1.6+ Crore", label: "Active clients" },
    { value: "₹6+ Lakh Cr", label: "Worth of equity investments" },
    { value: "15%", label: "Of daily retail volumes in India" },
  ];

  return (
    <section className="border-y border-border bg-muted/40 py-16 md:py-24">
      <div className="container-zerodha text-center">
        <h2 className="mb-4 text-3xl font-normal md:text-4xl">Trust with confidence</h2>
        <p className="mx-auto mb-12 max-w-2xl text-muted-foreground">
          Customer-first always. That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
          worth of equity investments and contribute to 15% of daily retail exchange volumes in India.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="mb-1 text-2xl font-normal text-foreground md:text-3xl">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
