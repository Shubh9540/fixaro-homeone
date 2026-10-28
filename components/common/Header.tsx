'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaBars, FaXmark } from 'react-icons/fa6';
import { HeaderProps } from '@/types/templates.types';

export const Header = ({ data }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!data) return null;

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[color:var(--color-surface-translucent)] backdrop-blur">
      <div className="mx-auto flex h-24 max-w-[1250px] items-center px-4 sm:px-6 lg:px-8">
        <Link href={data.logoUrl} className="relative h-16 w-44 shrink-0 sm:w-52">
          <Image src={data.logo} alt={data.logoAlt} fill priority className="object-contain object-left" />
        </Link>

        <nav className="ml-auto hidden items-center gap-5 lg:flex xl:gap-7">
          {data.navLinks.map((link) => (
            <Link key={link.id} href={link.url} className="text-base font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-accent)]">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href={data.ctaUrl} className="ml-6 hidden items-center gap-3 bg-[var(--color-primary)] px-5 py-3 text-base font-semibold text-[var(--color-text-on-dark)] transition-colors hover:bg-[var(--color-accent)] lg:inline-flex">
          {data.ctaLabel}
          <FaArrowRight />
        </Link>

        <button type="button" aria-label={isOpen ? data.menuCloseLabel : data.menuOpenLabel} onClick={() => setIsOpen(!isOpen)} className="flex h-11 w-11 items-center justify-center border border-[var(--color-border)] text-xl text-[var(--color-primary)] lg:hidden">
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-bg-light)] px-4 py-5 lg:hidden">
          <nav className="mx-auto flex max-w-[1250px] flex-col">
            {data.navLinks.map((link) => (
              <Link key={link.id} href={link.url} onClick={() => setIsOpen(false)} className="border-b border-[var(--color-border)] py-4 font-semibold text-[var(--color-primary)]">
                {link.label}
              </Link>
            ))}
            <Link href={data.ctaUrl} onClick={() => setIsOpen(false)} className="mt-5 flex items-center justify-center gap-3 bg-[var(--color-primary)] px-5 py-3 font-semibold text-[var(--color-text-on-dark)]">
              {data.ctaLabel}
              <FaArrowRight />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
