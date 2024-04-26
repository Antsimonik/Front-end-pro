export const kebab = (str) =>
  str.replace(/\b([A-Z][a-z]*)+\b/g, (n) =>
    n
      .replace(/([A-Z])/g, "-$1")
      .replace(/^-/, "")
      .toLowerCase()
  );
