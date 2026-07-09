import type { StudioCoreRequestValidationResult } from "../types/http";

export type StudioRequestValidator = (body: unknown) => StudioCoreRequestValidationResult;

export function createValidResult(): StudioCoreRequestValidationResult {
  return { valid: true, errors: [] };
}

export function validateRequiredFields(
  body: unknown,
  requiredFields: readonly string[],
): StudioCoreRequestValidationResult {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return {
      valid: false,
      errors: requiredFields.map((field) => ({
        field,
        message: "Field is required.",
        code: "required",
      })),
    };
  }

  const record = body as Record<string, unknown>;
  const errors = requiredFields
    .filter((field) => record[field] === undefined || record[field] === null || record[field] === "")
    .map((field) => ({
      field,
      message: "Field is required.",
      code: "required",
    }));

  return {
    valid: errors.length === 0,
    errors,
  };
}

export function sanitizeOutput<TValue>(value: TValue): TValue {
  if (typeof value === "string") {
    return value.replace(/[<>]/g, "") as TValue;
  }

  if (Array.isArray(value)) {
    return value.map((item) => sanitizeOutput(item)) as TValue;
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, nestedValue]) => [key, sanitizeOutput(nestedValue)]),
    ) as TValue;
  }

  return value;
}
