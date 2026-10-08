import { TransformFnParams } from "class-transformer";

export function optionalText({ value }: TransformFnParams) {
  if (value === undefined || value === null) {
    return undefined;
  }

  const trimmed = String(value).trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

export function requiredText({ value }: TransformFnParams) {
  if (value === undefined || value === null) {
    return value;
  }

  return String(value).trim();
}

export function whatsappText({ value }: TransformFnParams) {
  if (value === undefined || value === null) {
    return value;
  }

  return String(value).replace(/\s+/g, "").trim();
}
