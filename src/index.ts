export const getMonthList = (
  l?: string | string[],
  f?: 'long' | 'short' | 'numeric',
): string[] =>
  Array.from(Array(12).keys(), (i) =>
    new Intl.DateTimeFormat(l, {
      month: f || 'long',
    }).format(new Date(0, i)),
  );
