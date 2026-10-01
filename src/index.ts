export type MonthFormat = 'long' | 'short' | 'narrow' | 'numeric' | '2-digit';

export type WeekdayFormat = 'long' | 'short' | 'narrow';

/**
 * First day of the week: 1 (Monday) to 7 (Sunday), matching
 * `Intl.Locale#getWeekInfo().firstDay`. `true` is kept as an alias for Sunday.
 */
export type FirstDay = 1 | 2 | 3 | 4 | 5 | 6 | 7 | boolean;

/**
 * Returns the 12 Gregorian month names for the given locale, starting from
 * January, even for locales whose default calendar is different (e.g. `fa`).
 */
export const getMonthList = (
  locale?: Intl.LocalesArgument,
  format: MonthFormat = 'long',
): string[] => {
  const formatter = new Intl.DateTimeFormat(locale, {
    month: format,
    calendar: 'gregory',
  });
  return Array.from(Array(12).keys(), (i) => formatter.format(new Date(0, i)));
};

/**
 * Returns the 7 weekday names for the given locale, starting from Monday
 * unless another first day is given.
 */
export const getWeekDays = (
  locale?: Intl.LocalesArgument,
  format: WeekdayFormat = 'long',
  firstDay: FirstDay = 1,
): string[] => {
  const formatter = new Intl.DateTimeFormat(locale, { weekday: format });
  // January 1, 1900 was a Monday, so day N of that month is weekday N.
  const start = firstDay === true ? 7 : firstDay || 1;
  return Array.from(Array(7).keys(), (i) =>
    formatter.format(new Date(0, 0, start + i)),
  );
};
