interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section className="border-b border-border bg-[hsl(var(--zerodha-footer-bg))] py-16 md:py-20">
      <div className="container-zerodha text-center">
        <h1 className="mb-4 text-3xl font-normal text-foreground md:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
};
