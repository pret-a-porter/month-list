export type MonthFormat = 'long' | 'short' | 'narrow' | 'numeric' | '2-digit';

export type WeekdayFormat = 'long' | 'short' | 'narrow';

/**
 * `'standalone'` is the name on its own ("январь"), `'format'` is the name as
 * it appears inside a date ("5 января").
 */
export type MonthContext = 'standalone' | 'format';

/** Day of the week: 1 (Monday) to 7 (Sunday), as in `Intl.Locale` week info. */
export type DayNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7;

/**
 * First day of the week: 1 (Monday) to 7 (Sunday), matching
 * `Intl.Locale#getWeekInfo().firstDay`. `true` is kept as an alias for Sunday.
 */
export type FirstDay = DayNumber | boolean;

export interface WeekInfo {
  firstDay: DayNumber;
  weekend: DayNumber[];
}

export type DateTimeField =
  | 'era'
  | 'year'
  | 'quarter'
  | 'month'
  | 'weekOfYear'
  | 'weekday'
  | 'day'
  | 'dayPeriod'
  | 'hour'
  | 'minute'
  | 'second'
  | 'timeZoneName';

/**
 * Returns the 12 Gregorian month names for the given locale, starting from
 * January, even for locales whose default calendar is different (e.g. `fa`).
 */
export const getMonthList = (
  locale?: Intl.LocalesArgument,
  format: MonthFormat = 'long',
  context: MonthContext = 'standalone',
): string[] => {
  const options: Intl.DateTimeFormatOptions = {
    month: format,
    calendar: 'gregory',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  const inDate =
    context === 'format' &&
    new Intl.DateTimeFormat(locale, { ...options, day: 'numeric' });
  return Array.from(Array(12).keys(), (i) => {
    const date = new Date(0, i);
    const name = formatter.format(date);
    const part =
      inDate &&
      inDate.formatToParts(date).find((p) => p.type === 'month')?.value;
    // Some locales (e.g. ja, zh) write the month as a bare number inside a
    // date; the standalone name is more useful there.
    return part && !/^\p{Nd}+$/u.test(part) ? part : name;
  });
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

/**
 * Returns the locale's first day of the week and weekend days. Falls back to
 * Monday and Saturday–Sunday where the runtime has no week data.
 */
export const getWeekInfo = (locale?: string | Intl.Locale): WeekInfo => {
  const info = new Intl.Locale(
    locale || new Intl.DateTimeFormat().resolvedOptions().locale,
  ) as Intl.Locale & { getWeekInfo?(): WeekInfo; weekInfo?: WeekInfo };
  // Older engines expose a weekInfo getter instead of getWeekInfo().
  const week = info.getWeekInfo ? info.getWeekInfo() : info.weekInfo;
  return {
    firstDay: (week && week.firstDay) || 1,
    weekend: (week && week.weekend) || [6, 7],
  };
};

/**
 * Returns the locale's names for the morning and afternoon periods of a
 * 12-hour clock, e.g. `['AM', 'PM']`.
 */
export const getDayPeriods = (locale?: Intl.LocalesArgument): string[] => {
  const formatter = new Intl.DateTimeFormat(locale, {
    hour: 'numeric',
    hourCycle: 'h12',
  });
  return [0, 12].map(
    (hour) =>
      formatter
        .formatToParts(new Date(0, 0, 1, hour))
        .find((p) => p.type === 'dayPeriod')?.value || '',
  );
};

/**
 * Returns the locale's names for date and time fields, e.g. "month" or
 * "weekday", for use in labels.
 */
export const getFieldNames = (
  locale?: Intl.LocalesArgument,
  format: WeekdayFormat = 'long',
): Record<DateTimeField, string> => {
  const names = new Intl.DisplayNames(locale, {
    type: 'dateTimeField',
    style: format,
  });
  const fields =
    'era year quarter month weekOfYear weekday day dayPeriod hour minute second timeZoneName'.split(
      ' ',
    ) as DateTimeField[];
  return Object.fromEntries(
    fields.map((field) => [field, names.of(field) || field]),
  ) as Record<DateTimeField, string>;
};
