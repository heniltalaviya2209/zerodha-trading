import { Link } from "react-router-dom";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

const FeatureUnderDevelopment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="py-20 md:py-28">
          <div className="container-zerodha">
            <div className="mx-auto max-w-2xl rounded-xl border border-border bg-card p-8 text-center shadow-sm md:p-12">
              <h1 className="mb-4 text-3xl font-normal md:text-4xl">Feature Under Development</h1>
              <p className="mb-3 text-muted-foreground">
                OTP verification is currently under development.
              </p>
              <p className="mb-8 text-muted-foreground">
                This is a static website demo where only frontend pages and UI are available.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link to="/signup" className="btn-zerodha-outline">
                  Back to Signup
                </Link>
                <Link to="/" className="btn-zerodha">
                  Go to Home
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

export default FeatureUnderDevelopment;
