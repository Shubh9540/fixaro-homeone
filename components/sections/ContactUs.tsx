import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6';
import { ContactUsProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaPhone': return <FaPhone />;
    case 'FaEnvelope': return <FaEnvelope />;
    case 'FaLocationDot': return <FaLocationDot />;
    case 'FaClock': return <FaClock />;
    default: return null;
  }
};

export const ContactUs = ({ data }: ContactUsProps) => {
  if (!data) return null;

  return (
    <section id={data.id} className="scroll-mt-20 bg-[var(--color-bg-light)] py-8 lg:py-10">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg-light)] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden bg-[var(--color-primary)] p-6 text-[var(--color-text-on-dark)] sm:p-7 lg:p-8">
            <Image src={data.image} alt={data.imageAlt} fill sizes="(max-width: 1024px) 100vw, 430px" className="object-cover" />
            <div className="absolute inset-0 bg-[color:var(--color-hero-overlay-strong)]" />

            <div className="relative">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-light)]">
              <span className="h-px w-10 bg-[var(--color-accent)]" />
              {data.eyebrow}
              </div>
              <h2 className="mt-4 text-3xl font-semibold leading-tight">{data.title}</h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--color-text-on-dark-muted)]">{data.description}</p>

              <div className="mt-6 grid grid-cols-1 gap-3">
                {data.details.map((detail) => (
                  <Link key={detail.id} href={detail.url} className="flex items-start gap-3 border-t border-[var(--color-border-on-dark)] pt-3 transition-colors hover:border-[var(--color-accent)]">
                    <div className="mt-1 text-base text-[var(--color-accent-light)]">{renderIcon(detail.icon)}</div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-on-dark-subtle)]">{detail.label}</div>
                      <div className="mt-1 text-sm leading-5 text-[var(--color-text-on-dark)]">{detail.value}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-7 lg:p-8">
            <h3 className="text-xl font-semibold text-[var(--color-primary)] sm:text-2xl">{data.formTitle}</h3>
            <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--color-text-light)]">{data.formDescription}</p>
            <form className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {data.fields.map((field) => (
                <label key={field.id} className={field.isTextarea || field.isFullWidth ? 'sm:col-span-2' : ''}>
                  <span className="mb-1.5 block text-sm font-semibold text-[var(--color-primary)]">{field.label}</span>
                  {field.isTextarea ? (
                    <textarea name={field.name} placeholder={field.placeholder} rows={3} className="w-full resize-none border border-[var(--color-border)] bg-[var(--color-bg-alt)] px-4 py-2.5 text-sm text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-text-light)] focus:border-[var(--color-accent)]" />
                  ) : (
                    <input name={field.name} type={field.type} placeholder={field.placeholder} className="w-full border border-[var(--color-border)] bg-[var(--color-bg-alt)] px-4 py-2.5 text-sm text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-text-light)] focus:border-[var(--color-accent)]" />
                  )}
                </label>
              ))}
              <button type="submit" className="bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:bg-[var(--color-accent-light)] sm:col-span-2">
                {data.submitLabel}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
