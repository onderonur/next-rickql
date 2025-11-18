import type { ImageProps } from 'next/image';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import type { AsChildProps } from './slot';
import { Slot } from './slot';

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export function Card({ className, ...rest }: CardProps) {
  return (
    <div
      {...rest}
      className={twMerge(
        'flex flex-col gap-4 rounded-lg border bg-card p-6 shadow',
        className,
      )}
    />
  );
}

type CardTitleProps = AsChildProps & {
  className?: string;
};

export function CardTitle({ asChild, className, ...rest }: CardTitleProps) {
  const Component = asChild ? Slot : 'h1';

  return (
    <Component
      className={twMerge('text-lg font-semibold', className)}
      {...rest}
    />
  );
}

type CardDescriptionProps = {
  children: React.ReactNode;
};

export function CardDescription(props: CardDescriptionProps) {
  return (
    <p className="text-lg font-semibold text-muted-foreground" {...props} />
  );
}

type CardImageProps = Pick<
  ImageProps,
  'src' | 'alt' | 'width' | 'height' | 'preload'
>;

export function CardImage({ alt, ...rest }: CardImageProps) {
  return (
    <Image className={'w-full rounded object-cover'} alt={alt} {...rest} />
  );
}
