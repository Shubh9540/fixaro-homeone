import Link from 'next/link';
import rawData from '@/data/templates.json';
import { HomeOneTemplateData } from '@/types/templates.types';

export default function NotFound() {
  const templateData: HomeOneTemplateData = rawData;
  const content = templateData.common.globalUI;

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--color-bg-alt)] px-4">
      <div className="max-w-xl border-l-4 border-[var(--color-accent)] bg-[var(--color-bg-light)] p-8 shadow-sm md:p-10">
        <h1 className="text-3xl font-semibold text-[var(--color-primary)] md:text-4xl">{content.notFoundTitle}</h1>
        <p className="mt-4 leading-7 text-[var(--color-text-light)]">{content.notFoundDescription}</p>
        <Link href={content.backHomeUrl} className="mt-7 inline-flex bg-[var(--color-primary)] px-6 py-3 font-semibold text-[var(--color-text-on-dark)] transition-colors hover:bg-[var(--color-accent)]">
          {content.backHomeLabel}
        </Link>
      </div>
    </main>
  );
}
