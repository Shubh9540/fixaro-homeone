'use client';

import { useCallback, useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { HeroProps } from '@/types/templates.types';

export const Hero = ({ data }: HeroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    if (!data?.slides) return;
    setCurrentSlide((previousSlide) => previousSlide === data.slides.length - 1 ? 0 : previousSlide + 1);
  }, [data?.slides]);

  const previousSlide = useCallback(() => {
    if (!data?.slides) return;
    setCurrentSlide((activeSlide) => activeSlide === 0 ? data.slides.length - 1 : activeSlide - 1);
  }, [data?.slides]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  if (!data || data.slides.length === 0) return null;

  return (
    <section id={data.id} className="group relative h-[450px] w-full scroll-mt-20 overflow-hidden bg-[var(--color-primary)] md:h-[500px] lg:h-[550px]">
      {data.slides.map((slide, index) => (
        <div key={slide.id} className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'z-10 opacity-100' : 'z-0 opacity-0'}`}>
          <div className="absolute inset-0 h-full w-full bg-cover bg-center" style={{ backgroundImage: `url('${slide.bgImage}')` }} />
          <div className="absolute inset-0 bg-[color:var(--color-hero-overlay-soft)]" />
          <div className="absolute left-0 top-0 h-full w-full bg-[color:var(--color-hero-overlay-strong)] transition-all [clip-path:polygon(0_0,100%_0,75%_100%,0%_100%)] lg:w-[72%]" />

          <div className="absolute inset-0 z-20 mx-auto flex h-full w-full max-w-[1250px] flex-col justify-center px-6 md:px-8 lg:px-12">
            <div className="max-w-lg translate-y-0 transform opacity-100 transition-all delay-300 duration-1000 lg:max-w-2xl">
              <div className="mb-2 md:mb-4">
                <span className="text-sm font-bold uppercase tracking-wide text-[var(--color-accent)] underline decoration-2 underline-offset-4 sm:text-base md:text-lg">
                  {slide.subtitleText}
                </span>
                <span className="ml-2 text-sm font-bold text-[var(--color-accent)] sm:text-base md:text-lg">
                  {slide.subtitleSuffix}
                </span>
              </div>

              <h1 className="mb-3 text-3xl font-extrabold leading-[1.1] tracking-tight text-[var(--color-text-on-dark)] sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
                <span className="mb-1 block md:mb-2">{slide.titleLine1}</span>
                <span className="text-[var(--color-accent)] underline decoration-[3px] decoration-[var(--color-accent)] underline-offset-[6px] md:decoration-[4px] md:underline-offset-8">
                  {slide.titleLine2Highlight}
                </span>{' '}
                <span className="text-[var(--color-text-on-dark)]">{slide.titleLine2Text}</span>
              </h1>

              <p className="max-w-[280px] text-sm font-medium leading-relaxed text-[var(--color-text-on-dark-muted)] sm:max-w-sm sm:text-base md:max-w-md md:text-lg lg:max-w-lg lg:text-xl">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-2 md:bottom-8 md:gap-3">
        {data.slides.map((slide, index) => (
          <button key={slide.id} type="button" onClick={() => setCurrentSlide(index)} className={`h-2.5 w-2.5 rounded-full border-2 transition-all duration-300 md:h-3.5 md:w-3.5 ${index === currentSlide ? 'scale-125 border-[var(--color-accent)] bg-[var(--color-accent)]' : 'border-[var(--color-text-on-dark)]/70 bg-transparent hover:border-[var(--color-accent)]'}`} aria-label={`${data.goToSlideLabel} ${index + 1}`} />
        ))}
      </div>

      <div className="absolute bottom-8 right-8 z-30 hidden gap-4 md:right-16 md:flex">
        <button type="button" onClick={previousSlide} className="group flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-text-on-dark)] shadow-lg transition-all hover:bg-[var(--color-bg-light)] hover:text-[var(--color-accent)] md:h-12 md:w-12" aria-label={data.previousSlideLabel}>
          <FaArrowLeft className="text-lg transition-transform group-hover:-translate-x-1 md:text-xl" />
        </button>
        <button type="button" onClick={nextSlide} className="group flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-text-on-dark)] shadow-lg transition-all hover:bg-[var(--color-bg-light)] hover:text-[var(--color-accent)] md:h-12 md:w-12" aria-label={data.nextSlideLabel}>
          <FaArrowRight className="text-lg transition-transform group-hover:translate-x-1 md:text-xl" />
        </button>
      </div>
    </section>
  );
};
