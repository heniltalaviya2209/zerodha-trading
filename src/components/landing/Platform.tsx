import platform from "@/assets/platform.jpg";

export const Platform = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-zerodha grid items-center gap-12 md:grid-cols-2">
        <img
          src={platform}
          alt="Zerodha Kite trading platform"
          width={1024}
          height={768}
          loading="lazy"
          className="w-full"
        />
        <div>
          <h2 className="mb-4 text-3xl font-normal md:text-4xl">Technology</h2>
          <p className="mb-6 text-muted-foreground">
            Sleek, modern, and intuitive trading platforms with the easiest investment flows.
          </p>
          <div className="space-y-2">
            <a href="#" className="block text-primary hover:underline">Check out our investment offerings →</a>
            <a href="#" className="block text-primary hover:underline">Try Kite demo →</a>
          </div>
        </div>
      </div>
    </section>
  );
};
