import { twMerge } from 'tailwind-merge';

type InputProps = React.ComponentPropsWithoutRef<'input'>;

export function Input({ className, ...rest }: InputProps) {
  return (
    <input
      className={twMerge('rounded-sm border px-4 py-2 shadow-sm', className)}
      {...rest}
    />
  );
}
