import { notFound } from 'next/navigation';
import type { z } from 'zod';
import type { SearchParams } from './types';

export function parseSearchParams<Output, Def extends z.ZodTypeDef, Input>({
  schema,
  searchParams,
}: {
  schema: z.ZodSchema<Output, Def, Input>;
  searchParams: SearchParams;
}) {
  const result = schema.safeParse(searchParams);
  if (!result.success) notFound();
  return result.data;
}
