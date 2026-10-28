'use client';

import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';
import { TestimonialsProps } from '@/types/templates.types';

export const Testimonials = ({ data }: TestimonialsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!data || isPaused) return;

    const sliderTimer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % data.items.length);
    }, 5500);

    return () => window.clearInterval(sliderTimer);
  }, [data, isPaused]);

  if (!data) return null;

  const showPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + data.items.length) % data.items.length);
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % data.items.length);
  };

  return (
    <section id={data.id} className="scroll-mt-20 bg-[var(--color-bg-alt)] py-10 lg:py-12">
      <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            <span className="h-px w-10 bg-[var(--color-accent)]" />
            {data.eyebrow}
          </div>
          <h2 className="mt-5 text-3xl font-semibold leading-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">{data.title}</h2>
          <p className="mt-4 max-w-3xl leading-8 text-[var(--color-text-light)]">{data.description}</p>
        </div>

        <div className="mt-8 overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-bg-light)]" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }} aria-live="polite">
            {data.items.map((item) => (
              <article key={item.id} className="grid w-full flex-none lg:grid-cols-[1.6fr_0.7fr]">
                <div className="relative flex min-h-[330px] flex-col justify-between p-6 sm:p-9 lg:min-h-[360px] lg:p-12">
                  <FaQuoteLeft className="text-4xl text-[var(--color-accent)] sm:text-5xl" />
                  <blockquote className="mt-8 max-w-4xl text-xl font-medium leading-9 text-[var(--color-primary)] sm:text-2xl sm:leading-10 lg:text-3xl lg:leading-[1.55]">
                    {item.quote}
                  </blockquote>
                  <div className="mt-8 h-px w-24 bg-[var(--color-accent)]" />
                </div>

                <div className="relative flex min-h-[220px] flex-col justify-end overflow-hidden bg-[var(--color-primary)] p-6 text-[var(--color-text-on-dark)] sm:p-9 lg:min-h-[360px] lg:p-10">
                  <div className="absolute -right-8 -top-8 text-[150px] font-semibold leading-none text-[var(--color-border-on-dark)] sm:text-[190px]">{item.initials}</div>
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center border border-[var(--color-accent)] text-sm font-semibold text-[var(--color-accent)]">{item.initials}</div>
                    <h3 className="mt-6 text-xl font-semibold sm:text-2xl">{item.name}</h3>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-text-on-dark-subtle)]">{item.service}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-5">
          <div className="flex items-center gap-2">
            {data.items.map((item, index) => (
              <button key={item.id} type="button" aria-label={item.name} onClick={() => setActiveIndex(index)} className={`h-1.5 transition-all duration-300 ${index === activeIndex ? 'w-10 bg-[var(--color-accent)]' : 'w-5 bg-[var(--color-border)] hover:bg-[var(--color-primary)]'}`} />
            ))}
          </div>

          <div className="flex gap-2">
            <button type="button" onClick={showPrevious} aria-label={data.previousLabel} className="flex h-11 w-11 items-center justify-center border border-[var(--color-primary)] text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)] hover:text-[var(--color-text-on-dark)]">
              <FaArrowLeft />
            </button>
            <button type="button" onClick={showNext} aria-label={data.nextLabel} className="flex h-11 w-11 items-center justify-center bg-[var(--color-primary)] text-[var(--color-text-on-dark)] transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)]">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
