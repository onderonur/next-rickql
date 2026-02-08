import { notFound } from 'next/navigation';
import type { z } from 'zod';
import type { SearchParams } from './types';

export function parseSearchParams<T extends z.ZodType>({
  schema,
  searchParams,
}: {
  schema: T;
  searchParams: SearchParams;
}): z.infer<T> {
  const result = schema.safeParse(searchParams);
  if (!result.success) notFound();
  return result.data;
}
