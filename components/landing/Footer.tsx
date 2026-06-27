import Link from "next/link";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Roadmap", href: "#roadmap" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-14">
      <div className="container">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-5">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="relative flex h-6 w-6 items-center justify-center rounded-md bg-accent/15">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <span className="font-display text-sm font-semibold">JARVIS</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              An AI assistant that works alongside you.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-medium text-foreground/90">
                {col.title}
              </h4>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2026 Project JARVIS. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted-foreground">v0.1.0 — private beta</p>
        </div>
      </div>
    </footer>
  );
}
