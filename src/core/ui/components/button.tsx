import { twMerge } from 'tailwind-merge';

export type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

export function Button({
  className,
  type = 'button',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        'bg-secondary text-secondary-foreground rounded-lg border px-3 py-2 font-semibold shadow-sm',
        'disabled:opacity-80',
        className,
      )}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}
