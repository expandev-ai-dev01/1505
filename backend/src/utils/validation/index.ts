import { z } from 'zod';

/**
 * @summary Common Zod validation schemas
 * @remarks Reusable validation utilities for consistent data validation
 */

/**
 * @summary String validation with max length
 */
export const zString = (maxLength?: number): z.ZodString => {
  let schema = z.string();
  if (maxLength) {
    schema = schema.max(maxLength);
  }
  return schema;
};

/**
 * @summary Nullable string validation
 */
export const zNullableString = (maxLength?: number): z.ZodNullable<z.ZodString> => {
  let schema = z.string();
  if (maxLength) {
    schema = schema.max(maxLength);
  }
  return schema.nullable();
};

/**
 * @summary Name validation (1-200 characters)
 */
export const zName = z.string().min(1).max(200);

/**
 * @summary Description validation (max 500 characters, nullable)
 */
export const zNullableDescription = z.string().max(500).nullable();

/**
 * @summary Positive integer validation
 */
export const zPositiveInt = z.number().int().positive();

/**
 * @summary Non-negative integer validation
 */
export const zNonNegativeInt = z.number().int().min(0);

/**
 * @summary Bit/Boolean validation (0 or 1)
 */
export const zBit = z.number().int().min(0).max(1);

/**
 * @summary Email validation
 */
export const zEmail = z.string().email();

/**
 * @summary Date string validation (ISO format)
 */
export const zDateString = z.string().datetime();

/**
 * @summary Numeric validation with precision
 */
export const zNumeric = (precision: number = 15, scale: number = 2): z.ZodNumber => {
  return z.number();
};

/**
 * @summary Price validation (18,6 precision)
 */
export const zPrice = z.number().min(0);

/**
 * @summary Nullable price validation
 */
export const zNullablePrice = z.number().min(0).nullable();
