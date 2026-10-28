import Image from 'next/image';
import { AboutUsProps } from '@/types/templates.types';

export const AboutUs = ({ data }: AboutUsProps) => {
  if (!data) return null;

  return (
    <section id={data.id} className="scroll-mt-24 bg-[var(--color-bg-alt)] py-10 lg:py-12">
      <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 overflow-hidden border border-[var(--color-border)] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="flex flex-col bg-[var(--color-bg-light)]">
            <div className="relative min-h-[420px] flex-1 sm:min-h-[520px] lg:min-h-[610px]">
              <Image src={data.image} alt={data.imageAlt} fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
            </div>

            <div className="grid grid-cols-[132px_1fr] border-t border-[var(--color-border)] sm:grid-cols-[180px_1fr]">
              <div className="bg-[var(--color-accent)] p-5 text-[var(--color-primary)] sm:p-6">
                <div className="text-4xl font-bold leading-none sm:text-5xl">{data.experienceValue}</div>
                <div className="mt-3 text-xs font-semibold leading-5 sm:text-sm">{data.experienceLabel}</div>
              </div>
              <div className="flex items-center px-5 py-6 sm:px-8">
                <div className="border-l-2 border-[var(--color-accent)] pl-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)]">
                  {data.imageCaption}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-[var(--color-primary)] p-6 text-[var(--color-text-on-dark)] sm:p-8 lg:p-10 xl:p-12">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              <span className="h-px w-10 bg-[var(--color-accent)]" />
              {data.eyebrow}
            </div>

            <h2 className="mt-6 text-3xl font-semibold leading-[1.12] sm:text-4xl lg:text-5xl">{data.title}</h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--color-text-on-dark-muted)] sm:text-base sm:leading-8">{data.description}</p>

            <div className="mt-8 border-t border-[var(--color-accent)] pt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-light)]">
              {data.principlesLabel}
            </div>

            <div className="mt-2">
              {data.features.map((feature) => (
                <article key={feature.id} className="grid grid-cols-[44px_1fr] gap-4 border-b border-[color:var(--color-border-on-dark)] py-5 sm:grid-cols-[52px_1fr] sm:gap-5">
                  <div className="text-sm font-semibold tracking-[0.14em] text-[var(--color-accent)]">{feature.number}</div>
                  <div>
                    <h3 className="text-base font-semibold text-[var(--color-text-on-dark)] sm:text-lg">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-text-on-dark-muted)]">{feature.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
