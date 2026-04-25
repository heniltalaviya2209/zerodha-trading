import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const docs = [
  "PAN card",
  "Aadhaar card linked with mobile number",
  "Cancelled cheque or bank statement",
  "Passport size photograph",
  "Signature on white paper",
  "Income proof (for F&O activation)",
];

const steps = [
  { n: "1", title: "Enter mobile number", desc: "Sign up with your mobile number and verify with OTP." },
  { n: "2", title: "Enter PAN & DOB", desc: "We'll auto-fetch your details from CKYC and DigiLocker." },
  { n: "3", title: "Connect bank account", desc: "Verify your bank with a small token amount via UPI or netbanking." },
  { n: "4", title: "Upload documents", desc: "Upload signature and income proof for derivatives." },
  { n: "5", title: "IPV & eSign", desc: "Complete in-person verification on video and eSign with Aadhaar OTP." },
];

const Signup = () => {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="py-16 md:py-24">
          <div className="container-zerodha grid items-center gap-12 md:grid-cols-2">
            <div>
              <img
                src="/media/images/signup.png"
                alt="Zerodha signup"
                width={720}
                height={450}
                loading="lazy"
                className="mb-8 w-full max-w-xl rounded-md border border-border"
              />
              <h1 className="mb-4 text-3xl font-normal md:text-5xl">
                Open a free demat &amp; trading account online
              </h1>
              <p className="mb-6 text-muted-foreground">
                Start investing brokerage free and join a community of 1.6+ crore investors and
                traders. Account opening takes just 10 minutes.
              </p>
              <ul className="mb-8 space-y-3 text-sm">
                {[
                  "₹0 account opening charges",
                  "₹0 brokerage on equity delivery",
                  "Flat ₹20 per intraday and F&O order",
                  "₹0 commission on direct mutual funds",
                  "Trusted by 1.6+ crore investors",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                navigate("/feature-under-development");
              }}
              className="rounded-md border border-border bg-card p-6 shadow-sm md:p-8"
            >
              <h2 className="mb-2 text-2xl font-normal">Signup now</h2>
              <p className="mb-6 text-sm text-muted-foreground">
                Or track your existing application
              </p>

              <label className="mb-1 block text-xs text-muted-foreground">Mobile number</label>
              <div className="mb-4 flex overflow-hidden rounded-[3px] border border-input">
                <span className="border-r border-input bg-muted px-3 py-2 text-sm">+91</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your mobile number"
                  className="w-full bg-background px-3 py-2 text-sm outline-none"
                />
              </div>

              <button type="submit" className="btn-zerodha w-full">
                Get OTP
              </button>

              <p className="mt-4 text-xs text-muted-foreground">
                By signing up, I agree to the terms &amp; conditions and the privacy policy of Zerodha.
              </p>
            </form>
          </div>
        </section>

        <section className="border-t border-border bg-[hsl(var(--zerodha-footer-bg))] py-16 md:py-20">
          <div className="container-zerodha">
            <h2 className="mb-12 text-center text-2xl font-normal md:text-3xl">
              Open your account in 5 simple steps
            </h2>
            <div className="grid gap-8 md:grid-cols-5">
              {steps.map((s) => (
                <div key={s.n} className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-medium text-primary-foreground">
                    {s.n}
                  </div>
                  <h3 className="mb-2 text-base font-medium">{s.title}</h3>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container-zerodha grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-normal md:text-3xl">Documents required</h2>
              <p className="mb-6 text-muted-foreground">
                Keep these handy to complete your application without interruption.
              </p>
              <ul className="space-y-3 text-sm">
                {docs.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-normal md:text-3xl">Charges for account opening</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-muted">
                      <th className="px-4 py-3 font-medium">Type of account</th>
                      <th className="px-4 py-3 font-medium">Charges</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-t border-border">
                      <td className="px-4 py-3">Online account</td>
                      <td className="px-4 py-3">FREE</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3">Offline account</td>
                      <td className="px-4 py-3">FREE</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3">NRI account (offline only)</td>
                      <td className="px-4 py-3">₹500</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3">Partnership, LLP, HUF, or Corporate accounts</td>
                      <td className="px-4 py-3">₹500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
