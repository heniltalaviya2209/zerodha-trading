import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const cols = [
  {
    title: "Account",
    links: ["Open demat account", "Minor demat account", "NRI demat account", "Commodity", "Dematerialisation", "Fund transfer"],
  },
  {
    title: "Support",
    links: ["Contact us", "Support portal", "Z-Connect blog", "List of charges", "Downloads & resources", "Videos"],
  },
  {
    title: "Company",
    links: ["About", "Philosophy", "Press & media", "Careers", "Zerodha Cares (CSR)", "Open source"],
  },
  {
    title: "Quick links",
    links: ["Upcoming IPOs", "Brokerage charges", "Market holidays", "Economic calendar", "Calculators", "Markets"],
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-[hsl(var(--zerodha-footer-bg))] pt-14 pb-8 text-sm">
      <div className="container-zerodha">
        <div className="mb-12 grid gap-10 md:grid-cols-5">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="text-sm font-bold">Z</span>
              </div>
              <span className="text-lg font-light text-foreground">Zerodha</span>
            </div>
            <p className="mb-4 text-xs text-muted-foreground">
              © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
            </p>
            <div className="flex gap-3 text-muted-foreground">
              <a href="#" aria-label="Twitter"><Twitter className="h-4 w-4 hover:text-primary" /></a>
              <a href="#" aria-label="Facebook"><Facebook className="h-4 w-4 hover:text-primary" /></a>
              <a href="#" aria-label="Instagram"><Instagram className="h-4 w-4 hover:text-primary" /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin className="h-4 w-4 hover:text-primary" /></a>
              <a href="#" aria-label="YouTube"><Youtube className="h-4 w-4 hover:text-primary" /></a>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="mb-4 text-base font-normal">{c.title}</h3>
              <ul className="space-y-2">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="space-y-3 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL:
            Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019.
          </p>
          <p>
            Investments in securities market are subject to market risks; read all the related documents
            carefully before investing.
          </p>
          <p className="text-center">
            For complaints, write to <a href="#" className="text-primary hover:underline">complaints@zerodha.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
