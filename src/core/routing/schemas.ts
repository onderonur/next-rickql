import { z } from 'zod';

const searchParamParser = {
  toSingle: <T extends z.ZodType>(valueSchema: T) => {
    const finalSchema = valueSchema.or(
      z.array(valueSchema).transform((val) => val[0]),
    );

    return finalSchema;
  },
  toArray: <T extends z.ZodType>(valueSchema: T) => {
    const finalSchema = valueSchema
      .transform((val) => [val])
      .or(z.array(valueSchema));

    return finalSchema;
  },
};

export const charactersPageSearchParamsSchema = z
  .object({
    keyword: searchParamParser.toSingle(z.string()),
  })
  .partial();
