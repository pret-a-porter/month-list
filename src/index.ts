export const getMonthList = (
  l?: string | string[],
  f?: 'long' | 'short' | 'narrow' | '2-digit' | 'numeric',
): string[] =>
  Array.from(Array(12).keys(), (i) =>
    new Intl.DateTimeFormat(l, {
      month: f || 'long',
    }).format(new Date(0, i)),
  );

export const getWeekDays = (
  l?: string | string[],
  f?: 'long' | 'short' | 'narrow',
  s?: boolean,
) =>
  Array.from(Array(7).keys(), (i) =>
    new Intl.DateTimeFormat(l, {
      weekday: f || 'long',
    }).format(new Date(0, 0, s ? i : i + 1)),
  );
