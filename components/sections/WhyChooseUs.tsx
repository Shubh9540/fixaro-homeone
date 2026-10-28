import Image from 'next/image';
import { FaClock, FaComments, FaReceipt, FaShield } from 'react-icons/fa6';
import { WhyChooseUsProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaReceipt': return <FaReceipt />;
    case 'FaClock': return <FaClock />;
    case 'FaShield': return <FaShield />;
    case 'FaComments': return <FaComments />;
    default: return null;
  }
};

export const WhyChooseUs = ({ data }: WhyChooseUsProps) => {
  if (!data) return null;

  return (
    <section id={data.id} className="scroll-mt-20 bg-[var(--color-primary)] py-10 text-[var(--color-text-on-dark)] lg:py-12">
      <div className="mx-auto grid max-w-[1250px] grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative min-h-[520px] overflow-hidden">
          <Image src={data.image} alt={data.imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 border-l-4 border-[var(--color-accent)] bg-[var(--color-primary)]/90 p-5 font-semibold sm:right-auto sm:max-w-sm">{data.imageLabel}</div>
        </div>

        <div className="lg:py-4 lg:pl-6">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-light)]">
            <span className="h-px w-10 bg-[var(--color-accent)]" />
            {data.eyebrow}
          </div>
          <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">{data.title}</h2>
          <p className="mt-5 leading-8 text-[var(--color-text-on-dark-muted)]">{data.description}</p>
          <div className="mt-7 grid grid-cols-1 gap-px overflow-hidden bg-[color:var(--color-border-on-dark)] sm:grid-cols-2">
            {data.items.map((item) => (
              <article key={item.id} className="bg-[var(--color-primary)] p-5 sm:p-6">
                <div className="text-2xl text-[var(--color-accent-light)]">{renderIcon(item.icon)}</div>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--color-text-on-dark-subtle)]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
