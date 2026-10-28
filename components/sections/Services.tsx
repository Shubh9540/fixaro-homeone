'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ServicesProps } from '@/types/templates.types';

export const Services = ({ data }: ServicesProps) => {
  const serviceRefs = useRef<Array<HTMLElement | null>>([]);
  const [visibleServices, setVisibleServices] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const serviceId = entry.target.getAttribute('data-service-id');
          if (!serviceId) return;

          setVisibleServices((currentServices) => {
            if (currentServices.has(serviceId)) return currentServices;

            const nextServices = new Set(currentServices);
            nextServices.add(serviceId);
            return nextServices;
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -40px 0px' },
    );

    serviceRefs.current.forEach((serviceElement) => {
      if (serviceElement) observer.observe(serviceElement);
    });

    return () => observer.disconnect();
  }, [data?.services]);

  if (!data) return null;

  return (
    <section id={data.id} className="scroll-mt-24 bg-[var(--color-bg-light)] py-10 lg:py-12">
      <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
            <span className="h-px w-12 bg-[var(--color-accent)]" />
            {data.eyebrow}
            <span className="h-px w-12 bg-[var(--color-accent)]" />
          </div>
          <h2 className="mt-5 text-4xl font-semibold leading-[1.08] text-[var(--color-primary)] sm:text-5xl lg:text-6xl">{data.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--color-text-light)] sm:text-base sm:leading-8">{data.description}</p>
        </div>

        <div className="mt-10 border-y border-[var(--color-border)]">
          {data.services.map((service, index) => (
            <article
              key={service.id}
              ref={(serviceElement) => {
                serviceRefs.current[index] = serviceElement;
              }}
              data-service-id={service.id}
              className={`group grid grid-cols-[52px_1fr] items-center border-b border-[var(--color-border)] bg-[var(--color-bg-light)] transition-all duration-700 ease-out last:border-b-0 hover:bg-[var(--color-primary)] lg:grid-cols-[72px_1.05fr_1.35fr_220px] ${visibleServices.has(service.id) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <div className="flex h-full items-center border-r border-[var(--color-border)] px-3 py-5 text-sm font-semibold tracking-[0.14em] text-[var(--color-accent)] sm:px-4 lg:py-4">
                {service.number}
              </div>

              <h3 className="px-4 py-5 text-xl font-semibold text-[var(--color-primary)] transition-colors duration-300 group-hover:text-[var(--color-text-on-dark)] sm:px-6 sm:text-2xl lg:py-4">
                {service.title}
              </h3>

              <p className="col-span-2 border-t border-[var(--color-border)] px-4 py-4 text-sm leading-6 text-[var(--color-text-light)] transition-colors duration-300 group-hover:text-[var(--color-text-on-dark-muted)] sm:px-6 lg:col-span-1 lg:border-t-0 lg:px-5 lg:py-4">
                {service.description}
              </p>

              <div className="relative col-span-2 h-52 overflow-hidden sm:h-60 lg:col-span-1 lg:h-36 lg:py-2 lg:pr-2">
                <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 1024px) 100vw, 220px" className="object-cover transition-transform duration-500 group-hover:scale-105 lg:p-2" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
