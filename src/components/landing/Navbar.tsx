import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { label: "Signup", to: "/signup" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Pricing", to: "/pricing" },
  { label: "Support", to: "/support" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="container-zerodha flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <span className="text-sm font-bold">Z</span>
          </div>
          <span className="text-xl font-light tracking-wide text-foreground">Zerodha</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link key={l.label} to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-primary">
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container-zerodha flex flex-col py-3">
            {links.map((l) => (
              <Link key={l.label} to={l.to} onClick={() => setOpen(false)} className="py-2 text-sm text-muted-foreground hover:text-primary">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
