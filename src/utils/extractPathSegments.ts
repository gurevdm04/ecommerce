export const extractPathSegments = (url: string): string[] => {
  const segments = url.split("/").filter(Boolean);
  return segments;
};
