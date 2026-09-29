import { describe, expect, test } from 'vitest';
import { getWeekDays } from '../index';

describe('getWeekDays', () => {
  test('Should return list of week days', () => {
    expect(getWeekDays('en')).toEqual([
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ]);
  });

  test('Should start week from sunday', () => {
    expect(getWeekDays('en', 'long', true)).toEqual([
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]);
  });

  test('Should return list of short week days', () => {
    expect(getWeekDays('en', 'short')).toEqual([
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
      'Sun',
    ]);
  });

  test('Should return list of narrow week days', () => {
    expect(getWeekDays('en', 'narrow')).toEqual([
      'M',
      'T',
      'W',
      'T',
      'F',
      'S',
      'S',
    ]);
  });
});

describe('getWeekDays first day', () => {
  test('Should start the week from any given day', () => {
    expect(getWeekDays('en', 'short', 7)).toEqual(
      getWeekDays('en', 'short', true),
    );
    expect(getWeekDays('en', 'short', 6)).toEqual([
      'Sat',
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
    ]);
    expect(getWeekDays('en', 'short', false)[0]).toBe('Mon');
  });

  test('Should return week days in other locales', () => {
    expect(getWeekDays('ru', 'short')).toEqual([
      'пн',
      'вт',
      'ср',
      'чт',
      'пт',
      'сб',
      'вс',
    ]);
  });
});
