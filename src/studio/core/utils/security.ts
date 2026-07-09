export function redactSensitiveValue(value: string) {
  if (value.length <= 8) return "[redacted]";
  return `${value.slice(0, 4)}...[redacted]...${value.slice(-4)}`;
}

export function normalizeStudioPath(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
}

export function isUnsafeStudioMethod(method: string) {
  return ["POST", "PUT", "PATCH", "DELETE"].includes(method.toUpperCase());
}
