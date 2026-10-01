import { describe, expect, test } from 'vitest';
import { getDayPeriods } from '../index';

describe('getDayPeriods', () => {
  test('Should return AM and PM labels', () => {
    expect(getDayPeriods('en')).toEqual(['AM', 'PM']);
    expect(getDayPeriods('ja')).toEqual(['午前', '午後']);
    expect(getDayPeriods('zh')).toEqual(['上午', '下午']);
  });

  // Locale data differs between ICU versions (e.g. ko is "AM"/"PM" in ICU
  // 78.2 and "오전"/"오후" in 78.3), so compare with the runtime's own output.
  test.each(['ko', 'ar', 'hi', 'en-AU'])(
    'Should match the runtime time format in %s',
    (locale) => {
      const time = (hour: number) =>
        new Intl.DateTimeFormat(locale, {
          timeStyle: 'short',
          hour12: true,
        }).format(new Date(2020, 0, 1, hour));
      const [am, pm] = getDayPeriods(locale);
      expect(time(9)).toContain(am);
      expect(time(21)).toContain(pm);
    },
  );

  test('Should return labels for locales that use a 24-hour clock', () => {
    expect(getDayPeriods('de')).toHaveLength(2);
    expect(getDayPeriods('de').every(Boolean)).toBe(true);
  });
});
