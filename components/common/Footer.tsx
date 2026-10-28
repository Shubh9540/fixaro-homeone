import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FooterProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaInstagram': return <FaInstagram />;
    case 'FaFacebookF': return <FaFacebookF />;
    case 'FaLinkedinIn': return <FaLinkedinIn />;
    default: return null;
  }
};

export const Footer = ({ data }: FooterProps) => {
  if (!data) return null;

  return (
    <footer className="border-t-4 border-[var(--color-accent)] bg-[var(--color-bg-light)]">
      <div className="mx-auto grid max-w-[1250px] grid-cols-1 gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-8 lg:py-12">
        <div>
          <div className="relative h-16 w-48 sm:h-20 sm:w-56">
            <Image src={data.logo} alt={data.logoAlt} fill className="object-contain object-left" />
          </div>
          <p className="mt-6 max-w-xl text-base font-medium leading-7 text-[var(--color-primary)] sm:text-lg">{data.description}</p>
          <div className="mt-7 flex items-center gap-4">
            <span className="h-1 w-16 bg-[var(--color-accent)]" />
            <span className="h-px flex-1 bg-[var(--color-border)]" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
          {data.columns.map((column) => (
            <div key={column.id} className="border-l border-[var(--color-border)] pl-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">{column.title}</h3>
              <div className="mt-5 flex flex-col items-start gap-3">
                {column.links.map((link) => (
                  <Link key={link.id} href={link.url} className="border-b border-transparent pb-1 text-sm font-medium text-[var(--color-primary)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-text)]">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[var(--color-primary)]">
        <div className="mx-auto flex max-w-[1250px] flex-col gap-5 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="text-center text-sm text-[var(--color-text-on-dark-subtle)] sm:text-left">{data.copyright}</div>
          <div className="flex justify-center gap-2 sm:justify-end">
            {data.socialLinks.map((social) => (
              <Link key={social.id} href={social.url} aria-label={social.label} className="flex h-9 w-9 items-center justify-center border border-[var(--color-border-on-dark)] text-[var(--color-text-on-dark)] transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)]">
                {renderIcon(social.icon)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
