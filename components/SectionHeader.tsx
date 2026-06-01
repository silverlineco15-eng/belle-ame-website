import { cn } from '@/lib/utils';

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeader({ eyebrow, title, description, align = 'left', className }: SectionHeaderProps) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-mocha">{eyebrow}</p>
      ) : null}
      <h2 className="font-serif text-4xl leading-tight text-charcoal sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? <p className="mt-5 text-base leading-8 text-charcoal/70 sm:text-lg">{description}</p> : null}
    </div>
  );
}

