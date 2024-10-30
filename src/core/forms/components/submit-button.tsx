'use client';

import type { ButtonProps } from '@/core/ui/components/button';
import { Button } from '@/core/ui/components/button';
import { useFormStatus } from 'react-dom';
import { LuLoader2 } from 'react-icons/lu';

type SubmitButtonProps = Pick<ButtonProps, 'aria-label' | 'children'>;

export function SubmitButton({ children, ...rest }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} {...rest}>
      {pending ? <LuLoader2 className="animate-spin text-xl" /> : children}
    </Button>
  );
}
