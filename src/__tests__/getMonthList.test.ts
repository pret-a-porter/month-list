import { describe, expect, test } from 'vitest';
import { getMonthList } from '../index';

describe('getMonthList', () => {
  test('Should return list of month names', () => {
    expect(getMonthList('en')).toEqual([
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]);
  });

  test('Should return list of short month names', () => {
    expect(getMonthList('en', 'short')).toEqual([
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]);
  });
});

describe('getMonthList formats and locales', () => {
  test('Should return narrow month names', () => {
    expect(getMonthList('en', 'narrow')).toEqual([
      'J',
      'F',
      'M',
      'A',
      'M',
      'J',
      'J',
      'A',
      'S',
      'O',
      'N',
      'D',
    ]);
  });

  test('Should return numeric months', () => {
    expect(getMonthList('en', 'numeric')).toEqual(
      Array.from(Array(12).keys(), (i) => String(i + 1)),
    );
    expect(getMonthList('en', '2-digit')[0]).toBe('01');
  });

  test('Should return month names in other locales', () => {
    expect(getMonthList('ru')[0]).toBe('январь');
    expect(getMonthList('ja')[11]).toBe('12月');
    expect(getMonthList(new Intl.Locale('de'))[2]).toBe('März');
  });

  test('Should use the default locale when none is given', () => {
    expect(getMonthList()).toEqual(
      getMonthList(new Intl.DateTimeFormat().resolvedOptions().locale),
    );
  });
});
