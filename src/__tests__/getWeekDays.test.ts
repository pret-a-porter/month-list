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
