export const getMonthList = (l?: string | string[], f?: string): string[] =>
  Array.from(Array(12).keys(), (i) =>
    new Intl.DateTimeFormat(l, {
      month: f || "long",
    }).format(new Date(0, i))
  );
