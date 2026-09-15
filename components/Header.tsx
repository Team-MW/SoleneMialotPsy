"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { DoctolibButton } from "@/components/DoctolibButton";
import { NAV, SITE } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-sand/80 bg-ivory/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3">
        <Link href="/" className="min-w-0 leading-none">
          <span className="font-script text-[1.85rem] text-ink">{SITE.name}</span>
          <span className="mt-0.5 block text-[9px] font-medium uppercase tracking-[0.32em] text-sage-dark">
            {SITE.role}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap text-sm transition-colors ${
                  active ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <DoctolibButton variant="header" />
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand text-ink lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span
              className={`block h-px w-5 bg-ink transition ${open ? "translate-y-1 rotate-45" : ""}`}
            />
            <span className={`block h-px w-5 bg-ink ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-px w-5 bg-ink transition ${open ? "-translate-y-1 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-sand bg-ivory px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2" onClick={() => setOpen(false)}>
              <DoctolibButton variant="section" />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
