import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn } from 'react-icons/fa';
import { TeamProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaLinkedinIn': return <FaLinkedinIn />;
    default: return null;
  }
};

export const Team = ({ data }: TeamProps) => {
  if (!data) return null;

  return (
    <section id={data.id} className="scroll-mt-20 bg-[var(--color-bg-alt)] py-10 lg:py-12">
      <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-5 border-b border-[var(--color-border)] pb-7 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            <span className="h-px w-10 bg-[var(--color-accent)]" />
            {data.eyebrow}
            </div>
            <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">{data.title}</h2>
          </div>
          <p className="max-w-xl leading-8 text-[var(--color-text-light)] lg:justify-self-end">{data.description}</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-12 lg:grid-rows-2">
          {data.members.map((member, index) => (
            <article key={member.id} className={`group relative min-h-[390px] overflow-hidden bg-[var(--color-primary)] ${index === 0 ? 'lg:col-span-7 lg:row-span-2 lg:min-h-[620px]' : 'lg:col-span-5 lg:min-h-[302px]'}`}>
              <Image
                src={member.image}
                alt={member.imageAlt}
                fill
                sizes={index === 0 ? '(max-width: 1024px) 100vw, 58vw' : '(max-width: 1024px) 100vw, 42vw'}
                className="object-cover object-[center_18%] transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-[color:var(--color-hero-overlay-soft)] to-transparent" />
              <div className="absolute left-0 top-0 h-1 w-20 bg-[var(--color-accent)] transition-all duration-500 group-hover:w-full" />

              <div className="absolute right-4 top-4 sm:right-5 sm:top-5">
                <div className="flex gap-2">
                  {member.socialLinks.map((social) => (
                    <Link key={social.id} href={social.url} aria-label={social.label} className="flex h-10 w-10 items-center justify-center border border-[var(--color-border-on-dark)] bg-[var(--color-primary)] text-[var(--color-text-on-dark)] transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)]">
                      {renderIcon(social.icon)}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  <span className="h-px w-8 bg-[var(--color-accent)]" />
                  {member.specialty}
                </div>
                <h3 className={`mt-3 font-semibold leading-tight text-[var(--color-text-on-dark)] ${index === 0 ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>{member.name}</h3>
                <p className="mt-2 text-sm font-medium text-[var(--color-text-on-dark-subtle)]">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
