export const toCamelCase = (val) =>
  val instanceof Array
    ? val.map(toCamelCase)
    : val instanceof Object
    ? Object.fromEntries(
        Object.entries(val).map((n) => [
          n[0].replace(/_+(.)/g, (m, g1) => g1.toUpperCase()),
          toCamelCase(n[1]),
        ])
      )
    : val;
