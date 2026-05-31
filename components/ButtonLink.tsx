import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'light';
};

const variants = {
  primary:
    'bg-charcoal text-ivory shadow-[0_16px_40px_rgba(38,35,33,0.18)] hover:bg-softblack',
  secondary:
    'border border-charcoal/15 bg-white text-charcoal hover:border-charcoal/30 hover:bg-pearl',
  ghost: 'text-charcoal hover:bg-pearl',
  light: 'bg-ivory text-charcoal hover:bg-white'
};

export function ButtonLink({ href, children, className, variant = 'primary' }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mocha',
        variants[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}

