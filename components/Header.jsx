"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleToggle = () => {
    if (typeof document === "undefined") return;
    document.body.classList.toggle("nav-open");
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo-wrap">
          <Link href="/" className="logo-link">
            <img
              src="/assets/img/logo.png"
              alt="Imperial Chimney & Masonry - Trusted Craftsmanship"
              className="logo-img"
            />
          </Link>
        </div>
        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
        </button>
        <nav className="main-nav">
          <ul>
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href} className={active ? "active" : ""}>
                  <Link href={item.href} aria-current={active ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="header-cta">
          <Link href="/contact#estimate-form" className="btn btn-primary">
            Get a Free Estimate
          </Link>
        </div>
      </div>
    </header>
  );
}
